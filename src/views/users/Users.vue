<template>
  <div class="column site-content">
    <div class="container-fluid">
      <hr class="space-lg" />

      <!--
        PAGE TITLE
       -->
      <div class="columns">
        <div class="column generic-heading is-two-third">
          <h3>Host &amp; Guest List</h3>
          <p>List of Guest &amp; Host</p>
        </div>
        <!-- /end page title -->

        <!--
          ADD HOST BUTTON
         -->
        <div class="column generic-heading is-one-third flex end-xs ">
          <router-link to="/add-user">
            <button class="btn btn--medium btn--primary ">
              Add Host
            </button>
          </router-link>
        </div>
      </div>
      <!-- /end add host button -->

      <!--
        TAB BUTTONS
       -->
      <div class="tabs-lokaven">
        <a
          href="#"
          class="focus"
        >Host</a>
        <a href="#">Guest</a>
      </div>
      <!-- /end tab buttons -->

      <!--
        SEARCH FILTER
       -->
      <div class="columns filter-table-list">
        <div class="column is-full filter-wrapper">
          <div class="form-group icon-search">
            <img
              src="@/assets/img/ic-search.svg"
              alt=""
            />
            <input
              id="form1"
              v-model="search"
              type="text"
              class="form-control"
              placeholder="Find Host & Guest"
            />
          </div>
        </div>
      </div>
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
                :host_id="user.host_id || user.user_uid"
                :email="user.email"
                :user_uid="user.user_uid"
                :is_verified="user.is_verified"
                :business_name="user.business_name"
              />
            </tbody>
          </table>

          <!--
            PAGINATION
           -->
          <PaginationDefault
            v-if="isLoaded"
            :pageData="pagination"
            @handler="handlePaging"
          />
          <!-- /end pagination -->

        </div>
      </div>
      <!-- /end table -->

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
import UserList from '@/views/users/UserList'
import PaginationDefault from '@/components/paginations/PaginationDefault'

export default {
  components: {
    UserList,
    PaginationDefault
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
        limit: 2,
        page: 13,
        param: 'all'
      }
      this.getUsers(params)
      // console.log('emitted from child')
    }
  },
  beforeMount () {
    /**
     * SET PARAMS FOR GET USERS FROM SERVER
     */
    const params = {
      limit: 2,
      page: 1,
      param: 'all'
    }
    this.getUsers(params)
  },
  mounted () {
    /**
     * CHECK IF LOGGED IN
     */
    config.authCheck()
    // console.log(this.$route.params)
  }
}
</script>
