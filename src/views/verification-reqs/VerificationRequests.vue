<template>
  <div class="column site-content">
    <div class="container-fluid">
      <hr class="space-lg" />

      <!--
        PAGE TITLE
       -->
      <page-title-default>
        <template><h3>Host Verification Requests</h3></template>
        <template #subtitle><p>List of verification requests made by guest who recently becoming host</p></template>
      </page-title-default>
      <!-- /end page title -->

      <!--
          ERROR MESSAGE
       -->
      <section v-if="!isErrorEmpty">
        <pre>
            We're sorry, we're not able to retrieve this information at the moment, please try back later
            {{ errorMsg.code }} - {{ errorMsg.msg }}
        </pre>
      </section>

      <section v-else>

        <!--
          SEARCH IN PAGE
         -->
        <search-in-page
          v-model="search"
          placeholder="Find host by name or business name"
        />

        <div class="columns">
          <div class="column is-full">

            <spinner v-if="!isLoaded" message="Loading User List...." />

            <!--
              TABLE VERIFICATION REQUESTS
             -->
            <lv-table
              v-else
              :fields="tableData.fields"
              :items="setupTableData"
            >

              <template #status="data">
                <template v-for="(dt, idx) in data.data">
                  <div :key="idx" class="status-holder">
                    <span :class="dt.className">
                      {{ dt.value }}
                    </span>
                  </div>
                </template>
              </template>

              <template #actionButtons="data">
                <template v-for="(dt, idx) in data.data">
                  <span class="info icon" :key="idx">
                    <a title="View Request" @click="showModal(dt.identifier)">
                      <img :src="`${dt.iconsrc}`" title="Edit User" />
                    </a>
                  </span>
                </template>
              </template>

            </lv-table>

            <!--
                MODAL VIEW DETAIL
             -->
            <verification-detail
              v-if="isModalVisible"
              :host-id="detailId"
              @close="closeModal"
            />
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
/**
 * TODOs
 * ----
 * 1. Pagination.
 *
 *
 * THE FLOW
 * ----
 * 1. Admin open verification request page view
 * 2. Get all unverified users and store it into unvUsers state by calling this.getUnvUsers() before component mounted
 * 4. Put those list into filteredList, so the item is searchable by name.
 * 5. if one of the item is clicked, the modal windows will be opened to show us the detail of that particular user.
 */
import { mapState, mapActions } from 'vuex'
import auth from '@/mixins/auth'
import formatting from '@/mixins/formatting'
import appStates from '@/mixins/appStates'

import _ from 'lodash'
import moment from 'moment'
import Spinner from 'vue-simple-spinner'

import VerificationDetail from './VerificationDetail'

import {
  SearchInPage,
  LvTable,
  PageTitleDefault
} from '@/components'

export default {
  components: {
    VerificationDetail,
    SearchInPage,
    LvTable,
    PageTitleDefault,
    Spinner
  },
  mixins: [auth, formatting, appStates],
  data () {
    return {
      isModalVisible: false,
      detailId: '',
      search: '',
      tableData: {
        fields: ['Name', 'Business Name', 'Signup Date', 'Verification Status', 'Action']
      }
    }
  },
  computed: {
    /**
     * STATES
     */
    ...mapState({
      unvUsers: state => state.users.unvUsers,
      isLoaded: state => state.isLoaded,
      errorMsg: state => state.errorMsg
    }),
    /**
     * SETUP TABLE DATA
     * ~~~~~
     * Setup the data to be displayed in table component.
     * - pick required data from unverified users state
     * - arrange the data to match with Table component formatting
     * - add some additional data into each table data
     * - register the data into items[]
     * - filter the items so it's searchable based on name and business name
     */
    setupTableData: function () {
      const tableData = []
      // pick all the data required to be displayed in table
      const sorted = _.map(this.unvUsers, val => {
        return _.pick(val, ['first_name', 'last_name', 'business_name', 'created_at', 'bussiness_id_status', 'card_id_status', 'host_id'])
      })

      // Loop through the sorted users object to assign the data from API to be used in table
      _.forIn(sorted, (v, k) => {
        // Set full name
        const fullName = {
          fullName: {
            value: `${v.first_name} ${v.last_name}`
          }
        }

        // Set Business Name
        const businessName = {
          businessName: {
            value: v.business_name
          }
        }

        // Set Signup Date
        const signupDate = {
          signupDate: {
            value: moment(String(v.created_at)).format('DD MMM YYYY, h:mm:ss')
          }
        }

        // Set Verification Status
        const status = {
          status: {
            businessIdStatus: {
              value: `Business ID ${this.status(v.bussiness_id_status).name}`,
              className: `badges ${this.status(v.bussiness_id_status).className}`
            },
            cardIdStatus: {
              value: `ID ${this.status(v.card_id_status).name}`,
              className: `badges ${this.status(v.card_id_status).className}`
            }
          }
        }

        // Set action button
        const actionButtons = {
          actionButtons: {
            viewButton: {
              iconsrc: 'assets/img/ic-edit-line.svg',
              identifier: v.host_id
            }
          }
        }

        tableData[k] = { ...fullName, ...businessName, ...signupDate, ...status, ...actionButtons }
      })

      // filter to be used in search
      const filtered = _.filter(tableData, (data) => {
        return data.fullName.value.toLowerCase().includes(this.search.toLowerCase()) || data.businessName.value.toLowerCase().includes(this.search.toLowerCase())
      })

      return filtered
    }
  },
  methods: {
    /**
     * ID & BUSINESS LICENSE BADGES
     *
     * Set badges of ID & business license photo uploads
     */
    status (idStatus) {
      const status = {}
      switch (idStatus) {
        case 0:
          status.name = 'pending'
          status.className = 'badges--unprocess'
          break
        case 1:
          status.name = 'unreviewed'
          status.className = 'badges--unverified'
          break
        case 2:
          status.name = 'approved'
          status.className = 'badges--verified'
          break
        case 3:
          status.name = 'rejected'
          status.className = 'badges--processed'
          break
        default:
          status.name = 'unreviewed'
          status.className = 'badges--unverified'
      }
      return status
    },
    /**
     * OPEN MODAL
     *
     * Open modal window to view each user data.
     */
    showModal (id) {
      // show modal
      this.isModalVisible = true

      // set completedProcess into false, to indicate that the update process is not completed
      this.processStarted()

      // assign host id into modal window
      this.detailId = id
    },
    /**
     * CLOSE MODAL
     */
    closeModal () {
      this.isModalVisible = false
    },
    /**
     * STATE ACTIONS
     */
    ...mapActions([
      'getUnvUsers',
      'processStarted'
    ])
  },
  created () {
    /**
     * GET ALL UNVERIFIED USERS
     *
     * retrieve all users data that still unverified
     * and store it into state: unvUsers
     */
    if (_.isEmpty(this.unvUsers)) {
      this.getUnvUsers()
        .then(() => {
          this.isUnauthorized()
        })
    }
  }
}
</script>
<style lang="scss" scoped>
.status-holder {
  display: inline-block;
  box-sizing: content-box;
}
</style>
