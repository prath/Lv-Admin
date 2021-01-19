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

          {{ tableDataFiltered }}

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
        fields: ['Name', 'Email', 'Phone', 'Total Tour Packages', 'Action']
      }
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
      const tableData = []

      // pick all the fields required to be displayed in table
      const sorted = _.map(this.users, (val, k) => {
        return _.pick(val, ['first_name', 'last_name', 'email', 'phone_number', 'is_verified', 'host_id', 'count_package'])
      })

      // loop through the sorted object to manipulate the raw data:
      // 1. concat first_name and last_name
      // 2. check if host or not
      // 3. check if verified or not
      // 4. check if has count of packages or not
      ._.forIn(sorted, (value, key) => {
        const fullname = {
          fullname: `${value.first_name} ${value.last_name}`
        }
        const omitted = _.omit(value, ['first_name', 'last_name'])
        tableData.push(omitted)
        _.assign(tableData[key], fullname)
      })

      // console.log(tableData)

      // filter to be used in search
      const filtered = _.filter(tableData, (data) => {
        return data.fullname.toLowerCase().includes(this.search.toLowerCase())
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
