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
        SEARCH
       -->
      <search-in-page
        v-model="search"
        placeholder="Find Packages"
      />

      <div class="columns">
        <div class="column is-full">

          <div v-if="!isLoaded">Loading....</div>

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
              <router-link :to="`/tour-packages-detail/${data.data.identifier}`">
                <span class="info">
                  {{ data.data.value }}
                </span>
              </router-link>
            </template>

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
            page="tour-packages"
            @changePage="handlePaging"
          />
          <!-- /end pagination -->

        </div>
      </div>

    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import config from '@/config'
import _ from 'lodash'
import moment from 'moment'

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
    PaginationDefault
  },
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
     * INIT STATES
     * ~~~~~~
     * Initiate States from vuex store
     */
    ...mapState({
      packages: state => state.packages.packages,
      pagination: state => state.packages.packagePagination,
      isLoaded: state => state.isLoaded,
      errorMsg: state => state.errorMsg
    }),
    /**
     * SETUP TABLE DATA
     * ~~~~~
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
        return _.pick(val, ['title', 'prices', 'schedules', 'location', 'tour_id'])
      })

      // Loop through the sorted users object to assign the data from API to be used in table
      _.forIn(sorted, (v, k) => {
        // Set title
        const title = {
          title: {
            value: v.title,
            identifier: v.tour_id
          }
        }

        // Set price
        const price = {
          price: {
            value: `From IDR ${v.prices[0].price}`
          }
        }

        const schedulesArr = _.map(v.schedules, (v, k) => {
          const obj = {}
          const value = `${this.formatSchedule(v.start_date)} - ${this.formatSchedule(v.end_date)}`
          const className = 'is-block'
          obj[`schedule${k}`] = { value, className }
          // obj[`schedule${k}`] = 'block-it'
          // console.log(obj)
          return obj
        })

        // Set schedules
        const schedules = {
          schedules: {
            child: schedulesArr
          }
        }
        console.log(schedules)

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
     * INIT ACTIONS
     * ~~~~~
     * initiates actions that will be used in this SFC
     */
    ...mapActions([
      'getPackages'
    ]),
    /**
     * FORMAT DATE
     * ~~~~~
     * Used to format schedule dates
     */
    formatSchedule: function (date) {
      return moment(String(date)).format('DD MMM YYYY')
    },
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
      this.getPackages(params)
    }
  },
  created () {
    /**
     * GET PACKAGES DATA
     * ~~~~~
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
    }
  },
  mounted () {
    /**
     * CHECK IF LOGGED IN
     * ~~~~~
     * @todo
     * - revisit the function, i think it doesn't really efficient.
     */
    config.authCheck()
  }

}
</script>
