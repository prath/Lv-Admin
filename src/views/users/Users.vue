<template>
  <div class="column site-content">
    <div class="container-fluid">
      <hr class="space-lg" />

      <!--
        PAGE TITLE
       -->
      <PageTitleDefault :actionButton="{ title: 'Add Host', url: '/add-user' }">
        <template><h3>Host &amp; Guest List</h3></template>
        <template #subtitle><p>List of Guest &amp; Host</p></template>
      </PageTitleDefault>
      <!-- /end page title -->

      <!--
        SEARCH
       -->
      <SearchInPage
        v-model="search"
        placeholder="Find Host &amp; Guest"
      />
      <!-- /end search -->

      <!--
        ERROR
       -->
      <section v-if="errorMsg.status">
        <pre>
            We're sorry, we're not able to retrieve this information at the moment, please try back later
            {{ errorMsg.msg }}
        </pre>
      </section>
      <!-- /error message -->

      <div class="columns">
        <div class="column is-full">

          <!--
            TABLE USERS
           -->
          <lv-table
            :fields="tableData.fields"
            :items="setupTableData"
          >

            <template #actionButtons="data">
              <template v-for="(dt, idx) in data.data">
                <router-link :to="{ name: 'edithost', params: { id: dt.identifier }}" :key="idx">
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
            @changePage="handlePaging"
          />
          <!-- /end pagination -->

        </div>
      </div>

    </div>
  </div>
</template>

<script>
/**
 * LIST ALL USERS IN LOKAVEN
 */

import { mapState, mapActions } from 'vuex'
import _ from 'lodash'
import config from '@/config'

// import views & components
import { PageTitleDefault, SearchInPage, PaginationDefault, LvTable } from '@/components'
// import { UserList } from '@/views'

export default {
  name: 'Users',
  components: {
    PaginationDefault,
    PageTitleDefault,
    SearchInPage,
    LvTable
  },
  data () {
    return {
      // search query model
      search: '',
      // param to fetch users data from API.
      params: {
        limit: 5,
        param: 'all'
      },
      // user table data
      tableData: {
        // will be rendered as table headings
        fields: ['Name', 'Email', 'Phone', 'Total Tour Packages', 'Action'],
        // will be rendered as items in the table. Data taken from store.states
        items: []
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
      users: state => state.users.users,
      pagination: state => state.users.pagination,
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
      // pick all the data required to be displayed in table
      const sorted = _.map(this.users, val => {
        return _.pick(val, ['first_name', 'last_name', 'email', 'phone_number', 'is_verified', 'host_id', 'count_package', 'user_uid'])
      })

      // Loop through the sorted users object to assign the data from API to be used in table
      _.forIn(sorted, (v, k) => {
        // Set if the user is host or guest, will be rendered as child of fullName
        const host = (v.host_id) ? {
          isHost: {
            value: 'Host',
            tag: 'span',
            class: 'info badges badges--verified mr-5'
          }
        } : {
          isHost: {
            value: 'Guest',
            tag: 'span',
            class: 'info badges badges--paid-off mr-5'
          }
        }

        // Set if the user is verified host or not, will be rendered as child of fullName
        const verified = (v.is_verified) ? {
          isVerified: {
            value: 'verified',
            class: 'badges text-info'
          }
        } : {
          isVerified: {
            value: 'unverified',
            class: 'badges text-warning'
          }
        }

        // Set full name
        const fullName = {
          fullName: {
            value: `${v.first_name} ${v.last_name}`,
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

        // Set number of package owned by user
        const countPackage = (!v.count_package) ? {
          countPackage: {
            value: 0
          }
        } : {
          countPackage: {
            value: v.count_package
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
        this.tableData.items[k] = { ...fullName, ...email, ...phoneNumber, ...countPackage, ...actionButtons }
      })

      // filter to be used in search
      const filtered = _.filter(this.tableData.items, (data) => {
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
      console.log(this.users)
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
    console.log(this.users)
    const pg = (this.$route.params.page) || 1
    const params = {
      limit: this.params.limit,
      page: pg,
      param: this.params.param
    }
    if (this.users.length < 1) {
      this.getUsers(params)
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
