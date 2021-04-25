<template>
  <div class="column site-content">
    <div class="container-fluid">
      <hr class="space-lg" />

      <!--
        PAGE TITLE
       -->
      <PageTitleDefault>
        <template><h3>Bookings</h3></template>
        <template #subtitle><p>List of all bookings happen in Lokaven</p></template>
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
          placeholder="Find Booking"
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
                  <router-link :to="{ name: 'BookingDetail', params: { id: dt.viewButton.identifier }}" :key="idx">
                    <span class="info icon"><img :src="`${dt.viewButton.iconsrc}`" /></span>
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
              page="pagination"
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
import Spinner from 'vue-simple-spinner'
import _ from 'lodash'

// components & views
import {
  PageTitleDefault,
  SearchInPage,
  PaginationDefault,
  LvTable
} from '@/components'

export default {
  name: 'Bookings',
  components: {
    PageTitleDefault,
    SearchInPage,
    PaginationDefault,
    LvTable,
    Spinner
  },
  mixins: [auth, appStates],
  data () {
    return {
      search: '',

      params: {
        limit: 10,
        param: 'booking'
      },

      tableData: {
        fields: ['Order Number', 'Order by', 'Activity', 'Schedule', 'Status', 'Activity Status', '']
      }
    }
  },
  computed: {
    ...mapState({
      bookings: state => state.bookings.bookings,
      pagination: state => state.bookings.pagination,
      isLoaded: state => state.isLoaded,
      errorMsg: state => state.errorMsg
    }),
    setupTableData () {
      const tableData = []

      const sorted = _.map(this.bookings, val => {
        return _.pick(val, ['order_id', 'order_number', 'user_info.name', 'user_info.email', 'created_at', 'start_date', 'end_date', 'status', 'tour_status', 'title', 'host_name'])
      })

      _.forIn(sorted, (v, k) => {
        const orderNumber = {
          orderNumber: {
            value: v.order_number
          }
        }

        const orderBy = {
          orderBy: {
            value: v.user_info.name,
            child: [
              {
                email: {
                  value: v.user_info.email
                }
              },
              {
                date: {
                  value: `at ${v.created_at}`
                }
              }
            ]
          }
        }

        const schedule = {
          schedule: {
            value: `${v.start_date} - ${v.end_date}`
          }
        }

        const status = {
          status: {
            value: v.status
          }
        }

        const activityStatus = {
          activityStatus: {
            value: v.tour_status
          }
        }

        const activity = {
          activity: {
            value: v.title,
            child: [
              {
                host: {
                  value: `by ${v.host_name}`
                }
              }
            ]
          }
        }

        const actionButtons = {
          actionButtons: {
            viewButton: {
              iconsrc: 'assets/img/ic-edit-line.svg',
              identifier: v.order_id
            }
          }
        }

        tableData[k] = { ...orderNumber, ...orderBy, ...activity, ...schedule, ...status, ...activityStatus, actionButtons }
      })

      const filtered = _.filter(tableData, (data) => {
        return data.orderNumber.value.toLowerCase().includes(this.search.toLowerCase())
      })

      return filtered
    }
  },
  methods: {
    ...mapActions([
      'getBookings'
    ]),
    handlePaging () {
      console.log('paging')
    }
  },
  created () {
    const pg = (this.$route.params.page) || 1
    const param = {
      limit: this.params.limit,
      page: pg,
      param: this.params.param
    }

    if (this.bookings.length < 1) {
      this.getBookings(param)
        .then(() => {
          this.isUnauthorized()
        })
    }
  }
}
</script>

<style  scoped>
</style>
