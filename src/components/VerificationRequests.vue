<template>
  <div class="column site-content">
    <div class="container-fluid">
      <hr class="space-lg" />

      <!--
          HEADING
       -->
      <div class="columns">
        <div class="column generic-heading is-two-third">
          <h3>Host Verification Requests</h3>
          <p>List of verification requests made by guest who recently becoming host</p>
        </div>
      </div>

      <!--
          SEARCH USER
       -->
      <section v-if="errorMsg.status">
        <pre>
            We're sorry, we're not able to retrieve this information at the moment, please try back later
            {{ errorMsg.msg }}
        </pre>
      </section>

      <section v-else>
        <div class="columns filter-table-list">
          <div class="column is-full filter-wrapper">
            <div class="form-group icon-search">
              <img
                src="../assets/img/ic-search.svg"
                alt=""
              />
              <input
                id="form1"
                v-model="search"
                type="text"
                class="form-control"
                placeholder="Find User by name"
              />
            </div>
          </div>
        </div>

        <div class="columns">
          <div class="column is-full">
            <table class="table is-fullwidth table--orders">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Business Name</th>
                  <th>Signup as Host Date</th>
                  <th>Verification Status</th>
                  <th>Action</th>
                </tr>
              </thead>

              <!--
                  PRELOADER
                -->
              <div v-if="!isLoaded">
                Loading....
              </div>
              <tbody v-else>
                <template v-for="(host, key) in filteredList">
                  <tr :key="host.host_id">
                    <td>
                      <div class="wrapper">
                        <div>
                          <span
                            class="order_number"
                            :class="key"
                          ><a href="">{{ host.first_name + ' ' + host.last_name }}</a></span>
                        </div>
                      </div>
                    </td>

                    <td>
                      <div class="wrapper">
                        <div>
                          <span class="info">{{ host.business_name }}</span>
                        </div>
                      </div>
                    </td>

                    <td>
                      <div class="wrapper">
                        <div>
                          <span class="info">{{ host.created_at | formatDate }}</span>
                        </div>
                      </div>
                    </td>

                    <td>
                      <div class="wrapper">
                        <div>
                          <span
                            class="badges"
                            :class="status(host.card_id_status).className"
                          >ID {{ status(host.card_id_status).name }}</span><br />
                          <span
                            class="badges"
                            :class="status(host.bussiness_id_status).className"
                          >Business ID {{ status(host.bussiness_id_status).name }}</span>
                        </div>
                      </div>
                    </td>

                    <td>
                      <div class="wrapper">
                        <span class="info icon">
                          <!-- <router-link :to="'verification-detail/' + host.host_id"> -->
                          <a
                            title="View Request"
                            @click="showModal(host.host_id)"
                          ><img
                            src="assets/img/ic-edit-line.svg"
                            title="Edit User"
                          /></a>
                          <!-- </router-link> -->
                        </span>
                      </div>
                    </td>
                  </tr>
                </template>
              </tbody>
            </table>

            <!--
                MODAL VIEW DETAIL
             -->
            <VerificationDetail
              v-if="isModalVisible"
              :host-id="detailId"
              @close="closeModal"
            />
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
/**
 * TODOs
 * ----
 * 1. Pagination.
 *
 *
 * THE FLOW
 * ----
 * 1. Admin open verification request page view
 * 2. Get all unverified users and store it into unvUsers state by calling this.getUnvUsers() before component mounted
 * 3. Filter those unverified users to get users that already uploaded the photos of id & business license, by calling getUnvReqs getters
 * 4. Put those list into filteredList, so the item is searchable by name.
 * 5. if one of the item is clicked, the modal windows will be opened to show us the detail of that particular user.
 */

import VerificationDetail from './VerificationDetail'
import moment from 'moment'
import { mapState, mapActions, mapGetters } from 'vuex'
import config from '@/config'
import _ from 'lodash'

export default {
  components: {
    VerificationDetail
  },
  data () {
    return {
      isModalVisible: false,
      detailId: '',
      search: ''
    }
  },
  beforeMount () {
    /**
     * GET ALL UNVERIFIED USERS
     *
     * retrieve all users data that still unverified
     * and store it into state: unvUsers
     */
    if (_.isEmpty(this.unvUsers)) {
      this.getUnvUsers()
    }
  },
  mounted () {
    /**
     * LOGIN CHECK
     *
     * check if admin already login, if not, will be directed to login page.
     */
    config.authCheck()
  },
  computed: {
    /**
     * STATES
     */
    ...mapState([
      'unvUsers',
      'isLoaded',
      'errorMsg'
    ]),
    /**
     * GETTERS
     */
    ...mapGetters([
      'getUnvReqs'
    ]),
    /**
     * SEARCH
     *
     * Search the list/table based on user's name
     */
    filteredList () {
      return _.filter(this.getUnvReqs, (host) => {
        const fullname = `${host.first_name} ${host.last_name}`
        return fullname.toLowerCase().includes(this.search.toLowerCase())
      })
    }
  },
  methods: {
    /**
     * ID & BUSINESS LICENSE BADGES
     *
     * Set badges of ID & business license photo uploads
     */
    status (idStatus) {
      const status = {}
      switch (idStatus) {
        case 0:
          status.name = 'pending'
          status.className = 'badges--unprocess'
          break
        case 1:
          status.name = 'unreviewed'
          status.className = 'badges--unverified'
          break
        case 2:
          status.name = 'approved'
          status.className = 'badges--verified'
          break
        case 3:
          status.name = 'rejected'
          status.className = 'badges--processed'
          break
        default:
          status.name = 'unreviewed'
          status.className = 'badges--unverified'
      }
      return status
    },
    /**
     * OPEN MODAL
     *
     * Open modal window to view each user data.
     */
    showModal (id) {
      // show modal
      this.isModalVisible = true

      // set completedProcess into false, to indicate that the update process is not completed
      this.processStarted()

      // assign host id into modal window
      this.detailId = id
    },
    /**
     * CLOSE MODAL
     */
    closeModal () {
      this.isModalVisible = false
    },
    /**
     * STATE ACTIONS
     */
    ...mapActions([
      'getUnvUsers',
      'processStarted'
    ])
  },
  filters: {
    /**
     * FORMAT DATE
     *
     * Format date into a more readable format
     */
    formatDate: function (value) {
      if (value) {
        return moment(String(value)).format('DD MMM YYYY, h:mm:ss')
      }
    }
  }
}
</script>
