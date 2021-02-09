<template>
  <div class="column site-content">
    <div class="container-fluid">
      <hr class="space-lg" />

      <!--
        PAGE TITLE
       -->
      <page-title-default>
        <template><h3>Packages of Experiences</h3></template>
        <template #subtitle><p>List of packages available in the whole Lokaven apps</p></template>
      </page-title-default>

      <!--
          ERROR MESSAGE
       -->
      <section v-if="!isErrorEmpty">
        <pre>
            We're sorry, we're not able to retrieve this information at the moment, please try back later
            {{ errorMsg.msg.message }}
        </pre>
      </section>

      <section v-else>
        <!--
          SEARCH
        -->
        <search-in-page
          v-model="search"
          placeholder="Find Packages"
        />

        <div class="columns">
          <div class="column is-full">

            <spinner v-if="!isLoaded" message="Loading Packages List...." />

            <!--
              PACKAGES TABLE
            -->
            <lv-table
              v-else
              :fields="tableData.fields"
              :items="setupTableData"
            >

              <!-- display the title to be clickable -->
              <template #title="data">
                <router-link :to="`/packages-detail/${data.data.identifier}`">
                  <span>
                    {{ data.data.value }}
                  </span>
                </router-link>
              </template>

              <!-- <template #profPic="data">
                <img class="avatar avatar--extra-small" :src="`${data.data.value}`" />
              </template>
              <template #businessName="data">
                <router-link class="host" :to="`/packages-detail/${data.data.identifier}`">
                  <span>{{ data.data.value }}</span>
                </router-link>
              </template> -->
              <!-- <pre>{{ data.data.child[0].profPic }}</pre> -->

            </lv-table>

          </div>
        </div>

        <div class="columns">
          <div class="column is-full">

            <!--
              PAGINATION
            -->
            <pagination-default
              v-if="isLoaded"
              :pageData="pagination"
              page="packages"
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
// Internal modules (related to vue or app)
import { mapState, mapActions } from 'vuex'
import auth from '@/mixins/auth'
import appStates from '@/mixins/appStates'

// External modules
import _ from 'lodash'
import moment from 'moment'
import Spinner from 'vue-simple-spinner'

// Components or Views
import {
  // search
  SearchInPage,
  // page title
  PageTitleDefault,
  // table
  LvTable,
  // pagination
  PaginationDefault
} from '@/components'

export default {
  components: {
    SearchInPage,
    PageTitleDefault,
    LvTable,
    PaginationDefault,
    Spinner
  },
  mixins: [auth, appStates],
  data () {
    return {
      search: '',
      // params to fetch packages data
      params: {
        limit: 5,
        param: 'new'
      },
      tableData: {
        fields: ['Package', 'Price', 'Schedules', 'Location']
      }
    }
  },
  computed: {
    /**
     * Initiate States from vuex store
     */
    ...mapState({
      packages: state => state.packages.packages,
      pagination: state => state.packages.packagePagination,
      isLoaded: state => state.isLoaded,
      errorMsg: state => state.errorMsg
    }),
    /**
     * Setup the data to be displayed in table component.
     * - pick required data from packages state
     * - arrange the data to match with Table component formatting
     * - add some additional data into each table data
     * - register the data into items[]
     * - filter the items so it's searchable based on name and email
     */
    setupTableData: function () {
      const tableData = []
      // pick all the data required to be displayed in table
      const sorted = _.map(this.packages, val => {
        return _.pick(val, ['title', 'prices', 'schedules', 'location', 'tour_id', 'host_id', 'host_info'])
      })

      // Loop through the sorted users object to assign the data from API to be used in table
      _.forIn(sorted, (v, k) => {
        // Set host info
        const sortHostInfo = _.pick(v.host_info, ['business_name', 'profile_picture_url'])

        const profPic = {
          profPic: {
            value: sortHostInfo.profile_picture_url,
            tag: 'img',
            className: 'avatar avatar--extra-small'
          }
        }

        const businessName = {
          businessName: {
            value: sortHostInfo.business_name
          }
        }

        // Set title
        const title = {
          title: {
            value: v.title,
            identifier: v.tour_id,
            child: [profPic, businessName]
          }
        }

        // Set price
        const price = {
          price: {
            value: `From IDR ${Number(v.prices[0].price).toLocaleString('id')}`
          }
        }

        const schedulesArr = _.map(v.schedules, (v, k) => {
          const obj = {}
          const value = `${this.formatSchedule(v.start_date)} - ${this.formatSchedule(v.end_date)}`
          const className = 'is-block'
          obj[`schedule${k}`] = { value, className }
          return obj
        })

        // Set schedules
        const schedules = {
          schedules: {
            child: schedulesArr
          }
        }

        // Set schedules
        const location = {
          location: {
            value: v.location
          }
        }

        // need to be in order, matching this.tableData.fields: fullName, email, phone, count package, and action buttons
        tableData[k] = { ...title, ...price, ...schedules, ...location }
      })

      // filter to be used in search
      const filtered = _.filter(tableData, (data) => {
        return data.title.value.toLowerCase().includes(this.search.toLowerCase())
      })

      return filtered
    }
  },
  methods: {
    /**
     * Initiates actions that will be used in this SFC
     */
    ...mapActions([
      'getPackages'
    ]),
    /**
     * Format schedule dates
     */
    formatSchedule: function (date) {
      return moment(String(date)).format('DD MMM YYYY')
    },
    /**
     * Pagination requests
     */
    handlePaging () {
      const params = {
        limit: this.params.limit,
        page: this.$route.params.page,
        param: this.params.param
      }
      this.getPackages(params)
        .then(() => {
          this.isUnauthorized()
        })
    }
  },
  created () {
    /**
     * Fetch required Packages data from server and store it into Packages sessions
     * - setup the query
     * - check if the state already exist
     * - if empty, fetch Packages data from server
     * - store the data into Packages state
     */
    const pg = (this.$route.params.page) || 1
    const params = {
      limit: this.params.limit,
      page: pg,
      param: this.params.param
    }
    if (this.packages.length < 1) {
      this.getPackages(params)
        .then(() => {
          this.isUnauthorized()
        })
    }
  }
}
</script>

<style lang="scss" scoped>
.host {
  display: inline-block;
}
</style>
