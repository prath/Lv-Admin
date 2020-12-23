<template>
  <div class="column site-content">
    <div class="container-fluid">
      <hr class="space-lg">

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
      <section v-if="errored">
        <p>
            We're sorry, we're not able to retrieve this information at the moment, please try back later
        </p>
      </section>

      <section v-else>
        <div class="columns filter-table-list">
          <div class="column is-full filter-wrapper">

            <div class="form-group icon-search">
              <img src="../assets/img/ic-search.svg" alt="">
              <input id="form1" type="text" class="form-control" placeholder="Find User">
            </div>

          </div>
        </div>

        <div class="columns">
          <div class="column is-full">
            
            <table class="table is-fullwidth table--orders">
              <thead>
                <tr>
                  <th>
                    <!-- 
                        CHECKBOX
                    -->
                    <div class="action-wrapper">
                      <div class="form-check">
                        <label class="container">
                          <input type="checkbox" checked="checked">
                          <span class="checkmark" />
                        </label>
                      </div>
                      <!-- Show when Checkbox Clicked
                        <a href="#"><img src="../assets/img/ic-delete.svg" alt="" /></a>
                      -->
                    </div>
                  </th>

                  <th>Name</th>
                  <th>Business Name</th>
                  <th>Signup as Host Date</th>
                  <th>Verification Status</th>
                  <th>Action</th>
                </tr>
              </thead>


              <tbody>
                <!-- 
                  PRELOADER 
                -->
                <div v-if="loading">Loading....</div>
                
                <template v-for="(host, key) in requests">
                  <tr :key="key">
                    <td>
                      <div class="wrapper">
                        <div class="form-check">
                          <label class="container">
                            <input
                              type="checkbox"
                              checked="checked"
                            >
                            <span class="checkmark" />
                          </label>
                        </div>
                      </div>
                    </td>

                    <td>
                      <div class="wrapper">
                        <div>
                          <span class="order_number" :class="key"><a href="">{{ host.first_name + ' ' + host.last_name }}</a></span>
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
                          <span class="badges" :class="status(host.card_id_status).className">ID {{ status(host.card_id_status).name }}</span><br>
                          <span class="badges" :class="status(host.bussiness_id_status).className">Business ID {{ status(host.bussiness_id_status).name }}</span>
                        </div>
                      </div>
                    </td>

                    <td>
                      <div class="wrapper">
                        <span class="info icon">
                          <!-- <router-link :to="'verification-detail/' + host.host_id"> -->
                            <a title="View Request" @click="showModal(host.host_id)"><img
                              src="assets/img/ic-edit-line.svg"
                              title="Edit User"
                            ></a>
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
              :hostData="passedHostData"
              :userData="passedUserData"
              :loadingModal="loadingModal"
              :erroredModal="erroredModal"
              v-show="isModalVisible"
              @close="closeModal"
            />

            <!-- 
                PAGINATION
            -->
            <!-- <nav class="pagination" role="navigation" aria-label="pagination">
              <a class="pagination-previous">Previous</a>
              <a class="pagination-next">Next page</a>
              <ul class="pagination-list">
                <li>
                  <a class="pagination-link" aria-label="Goto page 1">1</a>
                </li>
                <li>
                  <span class="pagination-ellipsis">&hellip;</span>
                </li>
                <li>
                  <a class="pagination-link" aria-label="Goto page 45">45</a>
                </li>
                <li>
                  <a class="pagination-link is-current" aria-label="Page 46" aria-current="page">46</a>
                </li>
                <li>
                  <a class="pagination-link" aria-label="Goto page 47">47</a>
                </li>
                <li>
                  <span class="pagination-ellipsis">&hellip;</span>
                </li>
                <li>
                  <a class="pagination-link" aria-label="Goto page 86">86</a>
                </li>
              </ul>
            </nav> -->
            <!-- /end pagination -->
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
/**
 * TODO
 * ----
 * 1. Ask backend dev to provide API to GET a list of hosts that unverified && uploaded photos of ID and business license
 * 2. Pagination. 
 * 3. Search
 */

import VerificationDetail from './VerificationDetail'
import axios from 'axios'
import moment from 'moment'
export default {
  components: {
    VerificationDetail
  },
  data() {
    return {
      items: '',
      accessToken: '',
      apiUrl: `${process.env.VUE_APP_API_BASE_URL}`,
      loading: true,
      loadingModal: true,
      errored: false,
      erroredModal: false,
      requests: [],
      isModalVisible: false,
      passedHostData: '',
      passedUserData: '',
    }
  },
  mounted() {
    if(!localStorage.accessToken) {
      this.router.push({ path:'/' })
    } else {
      this.accessToken = localStorage.accessToken
    }

    let header = {
      headers: {
        'Authorization' : `Bearer ${this.accessToken}`
      }
    }
    let vr = this
    /**
     * Get all hosts
     */
    axios.get(this.apiUrl + 'host/list?per_page=100&page=1&param=unverified', header)
      .then(res => {
        vr.items = res.data.data

        /**
         * 'Filter' list to show only host that already uploaded photos of ID and business licence
         * -------------------------------------------------------------------------------------------
         * Put the filtered list into "requests" array, this is the one that will be looped in the template.
         */
        vr.items.forEach(item => {
          if( item.card_id || item.bussiness_id ) {
            vr.requests.push(item)
          }
        })
      })
      .catch( error => {
        console.log(error)
        this.errored = true
      })
      .finally( () => {
        this.loading = false
      })
  },
  methods: {
    /**
     * Set status of ID & business license uploads
     */
    status(id_status) {
      const status = {}
      switch(id_status) {
        case 0: 
          status.name = "pending"
          status.className = "badges--unprocess"
          break;
        case 1: 
          status.name = "unreviewed"
          status.className = "badges--unverified"
          break;
        case 2: 
          status.name = "approved"
          status.className = "badges--verified"
          break;
        case 3: 
          status.name = "rejected"
          status.className = "badges--processed"
          break;
        default: 
          status.name = "unreviewed"
          status.className = "badges--unverified"
      }

      return status
    },

    /**
     * Open Modal
     */
    showModal(id) {
      // console.log(id)
      this.passedHostID = id
      this.isModalVisible = true
      this.loadHostData(id)
    }, 

    /**
     * Close Modal
     */
    closeModal() {
      this.isModalVisible = false
    },

    /**
     * Load Host Data based on ID
     */
    loadHostData(id) {
      this.loadingModal = true
      axios.get(this.apiUrl + 'host/get/' + id)
      .then( response => {
        this.passedHostData = response.data.data
        this.loadUserData(this.passedHostData.user_uid)
      })
      .catch( error => {
        console.log(error)
        this.erroredModal = true
      })
      
    },

    /**
     * Load Host Data based on the same ID in loadHostData()
     */
    loadUserData(uid) {
      this.loadingModal = true
      axios.get(this.apiUrl + 'host/get/gets/' + uid)
      .then( response => {
        this.passedUserData = response.data.data
        console.log(this.passedHostData);
        console.log(this.passedUserData);
      })
      .catch( error => {
        console.log(error)
        this.erroredModal = true
      })
      .finally( () => {
        this.loadingModal = false
      })

    }
  }, 
  filters: {
    /**
     * Format date into a more readable format
     */
    formatDate: function(value) {
      if (value) {
        return moment(String(value)).format('DD MMM YYYY, h:mm:ss')
      }
    }
  }
}
</script>