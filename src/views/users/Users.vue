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
        SEARCH FILTER
       -->
      <SearchInPage
        v-model="search"
        placeholder="Find Host &amp; Guest"
      />
      <!-- /end search filter -->

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
      <!-- /end table -->

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
import { PageTitleDefault, SearchInPage } from '@/components'
import UserList from '@/views/users/UserList'
import PaginationDefault from '@/components/paginations/PaginationDefault'

export default {
  components: {
    UserList,
    PaginationDefault,
    PageTitleDefault,
    SearchInPage
  },
  data () {
    return {
      search: ''
    }
  },
  computed: {
    ...mapState([
      'users',
      'pagination',
      'isLoaded',
      'errorMsg'
    ]),
    /**
     * SEARCH USER BY NAME
     */
    searchableUsers () {
      return _.filter(this.users, (user) => {
        const fullname = `${user.first_name} ${user.last_name}`
        return fullname.toLowerCase().includes(this.search.toLowerCase())
      })
    }
  },
  methods: {
    ...mapActions([
      'getUsers'
    ]),
    handlePaging () {
      const params = {
        limit: 5,
        page: this.$route.params.page,
        param: 'all'
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
      limit: 5,
      page: pg,
      param: 'all'
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
