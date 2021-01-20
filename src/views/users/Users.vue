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
            :items="tableDataFiltered"
          />
            <!-- <template v-slot:default="slotProps"> -->
              <!-- {{ slotProps.items }} -->
            <!-- </template> -->

            <!-- <template v-slot:default="isHost" v-bind:uid="1">
              {{ isHost.el }}
            </template> -->

            <!-- <template #email>
              ya email lah
            </template> -->

          <!-- </lv-table> -->

          <!-- <pre>{{ tableData.items }}</pre> -->

          <table class="table is-fullwidth table--orders">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Total Tour Packages</th>
                <th>Action</th>
              </tr>
            </thead>

            <div v-if="!isLoaded">
              Loading....
            </div>
            <tbody v-else>
              <UserList
                v-for="(user, i) in searchableUsers"
                :key="i"
                :first_name="user.first_name"
                :last_name="user.last_name"
                :phone_number="user.phone_number"
                :host_id="user.host_id"
                :email="user.email"
                :user_uid="user.user_uid"
                :is_verified="user.is_verified"
                :business_name="user.business_name"
              />
            </tbody>
          </table>

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
import { UserList } from '@/views'

export default {
  components: {
    UserList,
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
        items: []
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
    /**
     * SEARCH USER BY NAME
     */
    searchableUsers () {
      const filtered = _.filter(this.users, (user) => {
        const fullname = `${user.first_name} ${user.last_name}`
        return fullname.toLowerCase().includes(this.search.toLowerCase())
      })
      return filtered
    },
    tableDataFiltered () {
      // pick all the fields required to be displayed in table
      const sorted = _.map(this.users, (val, k) => {
        return _.pick(val, ['first_name', 'last_name', 'email', 'phone_number', 'is_verified', 'host_id', 'count_package', 'user_uid'])
      })

      /**
       * loop through the sorted users object to assign the data from API to be used in table,
       * and compose it to follow the following format:
       *
       * tableItems : {
       *     field_name: {
       *         value: 'value from API',
       *         render: false (if set false the field will not going to be rendered into the table, can be unset)
       *     }
       * }
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

        // need to be in order, matching this.tableData.fields: fullName, email, phone, count package
        this.tableData.items[k] = { ...fullName, ...email, ...phoneNumber, ...countPackage }
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
      const params = {
        limit: this.params.limit,
        page: this.$route.params.page,
        param: this.params.param
      }
      this.getUsers(params)
    }
  },
  created () {
    /**
     * SET PARAMS FOR GET USERS FROM SERVER
     */
    const pg = (this.$route.params.page) || 1
    const params = {
      limit: this.params.limit,
      page: pg,
      param: this.params.param
    }
    this.getUsers(params)
  },
  mounted () {
    /**
     * CHECK IF LOGGED IN
     */
    config.authCheck()
  }
}
</script>
