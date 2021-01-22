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

      <!--
        TABLE USERS
       -->
      <div class="columns">
        <div class="column is-full">

          <lv-table
            :fields="tableData.fields"
            :items="setupTableData"
          >
            <template #is_host="data">
              hello {{ data.data.value }}
            </template>

            <template #action_button="data">
              <router-link :to="{ name: 'edithost', params: { id: data.data.identifier }}">
                <span class="info icon"><img :src="`${data.data.iconsrc}`" /></span>
              </router-link>
            </template>
          </lv-table>

        </div>
      </div>
      <!-- /end table users -->

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
 *
 * @todo
 * - get tour package count owned by every host
 * - pagination
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
    // UserList,
    PaginationDefault,
    PageTitleDefault,
    SearchInPage,
    LvTable
  },
  data () {
    return {
      search: '',
      // param to get users data from API.
      params: {
        limit: 5,
        param: 'all'
      },
      // user table data
      tableData: {
        // will be rendered as table headings
        fields: ['Name', 'Email', 'Phone', 'Total Tour Packages', 'Action'],
        // will be rendered as items in the table. Data taken from store.states
        items: [],
        // will be rendered as action button on each table item
        actionButtons: [
          {
            type: 'button-icon',
            tag: 'a',
            options: {
              title: 'view',
              iconsrc: '/assets/img/ic-edit-line.svg',
              identifier: 'user_uid'
            }
          }
        ]
      },
      hello: 'hell you'
    }
  },
  computed: {
    ...mapState({
      users: state => state.users.users,
      pagination: state => state.users.pagination,
      isLoaded: state => state.isLoaded,
      errorMsg: state => state.errorMsg
    }),
    setupTableData () {
      // console.log(this.users)
      // pick all the data required to be displayed in table
      const sorted = _.map(this.users, val => {
        return _.pick(val, ['first_name', 'last_name', 'email', 'phone_number', 'is_verified', 'host_id', 'count_package', 'user_uid'])
      })

      /**
       * loop through the sorted users object to assign the data from API to be used in table
       */
      _.forIn(sorted, (v, k) => {
        // Set if the user is host or guest, render false since it won't automatically render into the table
        const host = (v.host_id) ? { is_host: { value: 'Host', tag: 'span', class: 'info badges badges--verified mr-5' } } : { is_host: { value: 'Guest', tag: 'span', class: 'info badges badges--paid-off mr-5' } }

        // Set if the user is verified host or not
        const verified = (v.is_verified) ? { is_verified: { value: 'verified', class: 'badges text-info' } } : { is_verified: { value: 'unverified', class: 'badges text-warning' } }

        // Set full name
        const fullName = { full_name: { value: `${v.first_name} ${v.last_name}`, child: [host, verified] } }

        // Set email
        const email = { email: { value: v.email } }

        // Set phone number, render '-' if it has no number
        const phoneNumber = (v.phone_number) ? { phone_number: { value: v.phone_number } } : { phone_number: { value: '-' } }

        // Set number of package owned by user
        const countPackage = (!v.count_package) ? { count_package: { value: 0 } } : { count_package: { value: v.count_package } }

        // Set action button
        const actionButtons = {
          action_button: {
            iconsrc: 'assets/img/ic-edit-line.svg',
            identifier: v.user_uid
          }
        }

        // need to be in order, matching this.tableData.fields: fullName, email, phone, count package
        this.tableData.items[k] = { ...fullName, ...email, ...phoneNumber, ...countPackage, ...actionButtons }
      })

      // console.log(this.tableData.items)

      // filter to be used in search
      const filtered = _.filter(this.tableData.items, (data) => {
        return data.full_name.value.toLowerCase().includes(this.search.toLowerCase()) || data.email.value.toLowerCase().includes(this.search.toLowerCase())
      })
      return filtered
    }
  },
  methods: {
    ...mapActions([
      'getUsers'
    ]),
    handlePaging () {
      // if (this.users.length < 1) {
      const params = {
        limit: this.params.limit,
        page: this.$route.params.page,
        param: this.params.param
      }
      this.getUsers(params)
      console.log(this.users)
      // }
    }
  },
  created () {
    /**
     * SET PARAMS FOR GET USERS FROM SERVER
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
     */

    config.authCheck()
  }
}
</script>
