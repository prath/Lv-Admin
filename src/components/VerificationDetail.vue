<template>
  <div class="modal is-active">
    <div class="modal-background" @click="close"></div>
    <div class="modal-content modal--big">
      <section v-if="erroredModal">
        <p>
            We're sorry, we're not able to retrieve this information at the moment, please try back later
        </p>
      </section>
      <div v-if="loadingModal">Loading....</div>
      <div v-else>
        <div class="heading border with-avatar">

          <!-- 
            AVATAR
          -->
          <div class="avatar avatar--medium avatar--profile"><img src="https://images.unsplash.com/photo-1516914943479-89db7d9ae7f2?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTl8fHBvcnRyYWl0fGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60" alt="Profile picture"></div>

          <!-- 
            NAMES
          -->
          <header>
            <h4 class="head">{{ hostData.business_name }}</h4>
            <span class="sub-head">{{ userData.first_name + ' ' + userData.last_name }}</span>
          </header>
          <span v-if="!userData.is_verified" class="badges badges--unverified" >unverified</span>
        </div>

        <section>

          <!-- 
            META INFOS
          -->
          <div class="meta-info flex between-md top-md">
            <div class="item-container">
              <div class="item">
                <div class="title">Business Address</div>
                <div class="value">{{ hostData.address }}</div>
              </div>
              <div class="item">
                <div class="title">Business Category</div>
                <div class="value">{{ hostData.business_category }}</div>
              </div>
            </div>

            <div class="item-container">
              <div class="item">
                <div class="title">About Business</div>
                <div class="value">{{ hostData.business_about }}</div>
              </div>
            </div>

            <div class="item-container">
              <div class="item">
                <div class="title">Phone</div>
                <div class="value">{{ userData.phone_number }}</div>
              </div>
              <div class="item">
                <div class="title">Email</div>
                <div class="value">{{ userData.email }}</div>
              </div>
              <div class="item">
                <div class="title">Signup Date</div>
                <div class="value">{{ hostData.created_at | formatDate }}</div>
              </div>
            </div>
            
          </div> 

          <hr>

          <!-- 
            PHOTOS OF ID AND BUSINESS LICENSE
          -->
          <h5>Uploaded Photos</h5>
          <div class="flex between-md top-md">

            <!-- 
              PHOTO ID
            -->
            <figure class="photo-id">
              <img :src="hostData.bussiness_id" alt="ID Card">
              <figcaption>Photo ID Card</figcaption>
              <span class="badges" :class="statusUpload(hostData.card_id_status).className">{{ statusUpload(hostData.card_id_status).name }}</span>
              <div class="form-group">
                <div class="select select-narrow">
                  <select class="form-control narrow">
                    <option>- Review this photo -</option>
                    <option>Approve</option>
                    <option>Reject</option>
                  </select>
                </div>
              </div>
            </figure>

            <!-- 
              BUSINESS LICENSE
            -->
            <figure class="photo-id">
              <img :src="hostData.card_id" alt="ID Card">
              <figcaption>Business License</figcaption>
              <span class="badges" :class="statusUpload(hostData.bussiness_id_status).className">{{ statusUpload(hostData.bussiness_id_status).name }}</span>
              <div class="form-group">
                <div class="select select-narrow">
                  <select class="form-control narrow">
                    <option>- Review this photo -</option>
                    <option>Approve</option>
                    <option>Reject</option>
                  </select>
                </div>
              </div>
            </figure>
          </div>

          <!-- 
            REJECTION MESSAGE TEXTAREA
            --
            showed only if at least one of the pic is rejected
          -->
          <div class="form-group">
            <label for="rejection_message">Rejection Message</label>
            <textarea name="rejection_message" class="form-control"></textarea>
          </div>

        </section>
        
        <hr>

        <!-- 
          ACTION BUTTONS
        -->
        <div class="action-button-group flex between-md middle-md">
          <h5>Verify this host</h5>
          <div>
            <button class="btn btn--default btn--text btn--muted btn--medium">Cancel</button>
            <button class="btn btn--default btn--primary btn--medium">Approve &amp; Verify</button>
          </div>
        </div>
      </div>
    </div>
    <button class="modal-close is-large" aria-label="close" @click="close"></button>
  </div>
</template>

<script>
import moment from 'moment'
export default {
  data() {
    return {
      data: [],
      status: {},
    }
  },
  props:[
    'hostData',
    'userData',
    'loadingModal',
    'erroredModal'
  ],
  methods: {
    /**
     * Close modal
     */
    close() {
      this.$emit('close')
    },
    /**
     * Set status of ID & business license uploads
     */
    statusUpload(id_status) {
      switch(id_status) {
        case 0: 
          this.status.name = "pending"
          this.status.className = "badges--unprocess"
          break;
        case 1: 
          this.status.name = "unreviewed"
          this.status.className = "badges--unverified"
          break;
        case 2: 
          this.status.name = "approved"
          this.status.className = "badges--verified"
          break;
        case 3: 
          this.status.name = "rejected"
          this.status.className = "badges--processed"
          break;
        default: 
          this.status.name = "unreviewed"
          this.status.className = "badges--unverified"
      }

      return this.status
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