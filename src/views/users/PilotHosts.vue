<template>
  <div class="column site-content">
    <div class="container-fluid">
      <hr class="space-lg" />

      <!--
        IF BLAST EMAIL SUCCEDED
       -->
      <section v-if="isBlastSucceeded" class="has-background-success p-5 has-text-dark msg">
        Email successfully blasted to all the hosts
      </section>

      <!--
        IF BLAST EMAIL ERROR
       -->
      <section v-if="isBlastError" class="has-background-warning p-5 has-text-dark msg">
        Something wrong while blasting the email, please try again
      </section>

      <!--
        PAGE TITLE
       -->
      <PageTitleDefault
        :actionButton="{ title: 'Blast Email' }"
        :isLoading="isBlastLoading"
        @action="blastEmail">
        <template><h3>Pilot Hosts</h3></template>
        <template #subtitle><p>List of Hosts Registered Through Landing Page</p></template>
      </PageTitleDefault>
      <!-- /end page title -->

      <!--
        ERROR
       -->
      <section v-if="!isErrorEmpty">
        <pre>
            We're sorry, we're not able to retrieve this information at the moment, please try back later
            {{ errorMsg.code }} - {{ errorMsg.msg }}
        </pre>

      </section>
      <!-- /error message -->

      <section v-else>
        <!--
          SEARCH
        -->
        <SearchInPage
          v-model="search"
          placeholder="Find Host"
        />
        <!-- /end search -->

        <div class="columns">
          <div class="column is-full">

            <!--
              TABLE USERS
            -->
            <spinner v-if="!isLoaded" message="Loading User List...." />
            <lv-table
              v-else
              :fields="tableData.fields"
              :items="setupTableData"
            >

              <template #actionButtons="data">
                <template v-for="(dt, idx) in data.data">
                  <router-link :to="{ name: 'pilotHostAction', params: { id: dt.identifier }}" :key="idx">
                    <span class="info icon"><img :src="`${dt.iconsrc}`" /></span>
                  </router-link>
                </template>
              </template>

            </lv-table>
            <!-- /end table users -->

          </div>
        </div>

        <div class="columns">
          <div class="column is-full">

            <!--
              PAGINATION
            -->
            <PaginationDefault
              v-if="isLoaded"
              :pageData="pagination"
              page="pilothosts"
              @changePage="handlePaging"
            />
            <!-- /end pagination -->

          </div>
        </div>
      </section>

    </div>
  </div>
</template>

<script>
// internal modules
import { mapState, mapActions } from 'vuex'
import auth from '@/mixins/auth'
import appStates from '@/mixins/appStates'

// external modules
import axios from 'axios'
import config from '@/config'
import _ from 'lodash'
import Spinner from 'vue-simple-spinner'

// components & views
import { PageTitleDefault, SearchInPage, PaginationDefault, LvTable } from '@/components'

export default {
  name: 'PilotHosts',
  components: {
    PaginationDefault,
    PageTitleDefault,
    SearchInPage,
    LvTable,
    Spinner
  },
  mixins: [auth, appStates],
  data () {
    return {
      // search query model
      search: '',
      // param to fetch users data from API.
      params: {
        limit: 10,
        param: 'pilot host'
      },
      // user table data
      tableData: {
        // will be rendered as table headings
        fields: ['Name', 'Email', 'Phone', 'Action']
      },

      isBlastLoading: false,
      isBlastSucceeded: false,
      isBlastError: false
    }
  },
  computed: {
    /**
     * INIT STATES
     * ~~~~~~
     * Initiate States from vuex store
     */
    ...mapState({
      pilothosts: state => state.users.users.pilothosts,
      pagination: state => state.users.pagination.pilothosts,
      isLoaded: state => state.isLoaded,
      errorMsg: state => state.errorMsg
    }),
    /**
     * SETUP TABLE DATA
     * ~~~~~
     * Setup the data to be displayed in table component.
     * - pick required data from users state
     * - arrange the data to match with Table component formatting
     * - add some additional data into each table data
     * - register the data into items[]
     * - filter the items so it's searchable based on name and email
     */
    setupTableData () {
      const tableData = []
      // pick all the data required to be displayed in table
      const sorted = _.map(this.pilothosts, val => {
        return _.pick(val, ['first_name', 'last_name', 'email', 'phone_number', 'is_verified', 'host_id', 'user_uid'])
      })

      // Loop through the sorted users object to assign the data from API to be used in table
      _.forIn(sorted, (v, k) => {
        // Set if the user is host or guest, will be rendered as child of fullName
        const host = (v.host_id) ? {
          isHost: {
            value: 'Host',
            tag: 'span',
            className: 'info badges badges--verified'
          }
        } : {
          isHost: {
            value: 'Guest',
            tag: 'span',
            className: 'info badges badges--paid-off'
          }
        }

        // Set if the user is verified host or not, will be rendered as child of fullName
        const verified = (v.is_verified) ? {
          isVerified: {
            value: 'verified',
            className: 'badges text-info'
          }
        } : {
          isVerified: {
            value: 'unverified',
            className: 'badges text-warning'
          }
        }

        // Set full name
        const fullName = {
          fullName: {
            value: `${v.first_name} ${v.last_name}`,
            className: 'title-link',
            child: [host, verified]
          }
        }

        // Set email
        const email = {
          email: {
            value: v.email
          }
        }

        // Set phone number, render '-' if it has no number
        const phoneNumber = (v.phone_number) ? {
          phoneNumber: {
            value: v.phone_number
          }
        } : {
          phoneNumber: {
            value: '-'
          }
        }

        // Set action button
        const actionButtons = {
          actionButtons: {
            viewButton: {
              iconsrc: 'assets/img/ic-edit-line.svg',
              identifier: v.user_uid
            }
          }
        }

        // need to be in order, matching this.tableData.fields: fullName, email, phone, count package, and action buttons
        tableData[k] = { ...fullName, ...email, ...phoneNumber, ...actionButtons }
      })

      // filter to be used in search
      const filtered = _.filter(tableData, (data) => {
        return data.fullName.value.toLowerCase().includes(this.search.toLowerCase()) || data.email.value.toLowerCase().includes(this.search.toLowerCase())
      })

      return filtered
    }
  },
  methods: {
    /**
     * INIT ACTIONS
     * ~~~~~
     * initiates actions that will be used in this SFC
     */
    ...mapActions([
      'getUsers'
    ]),
    /**
     * HANDLE PAGING
     * ~~~~~
     * Pagination requests
     */
    handlePaging () {
      const params = {
        limit: this.params.limit,
        page: this.$route.params.page,
        param: this.params.param
      }
      this.getUsers(params)
        .then(() => {
          this.isUnauthorized()
        })
    },
    async blastEmail () {
      this.isBlastLoading = true

      const header = config.setHeader()
      const payload = {
        SendTo: 'Host'
      }

      try {
        const response = await axios.post(`${config.apiUrl}auth/users/pilots/send-email`, payload, header)

        if (response.status === 200) {
          this.isBlastLoading = false
          this.isBlastSucceeded = true
        }
      } catch (error) {
        console.log(error)
        this.isBlastLoading = false
        this.isBlastError = true
      }
    }
  },
  created () {
    /**
     * GET USERS DATA
     * ~~~~~
     * Fetch required users data from server and store it into users sessions
     * - setup the query
     * - check if the state already exist
     * - if empty, fetch users data from server
     * - store the data into users state
     */
    const pg = (this.$route.params.page) || 1
    const params = {
      limit: this.params.limit,
      page: pg,
      param: this.params.param
    }

    if (this.pilothosts.length < 1) {
      this.getUsers(params)
        .then(() => {
          this.isUnauthorized()
        })
    }
  }
}
</script>

<style>
.msg {
  border-radius: 10px;
}
</style>
