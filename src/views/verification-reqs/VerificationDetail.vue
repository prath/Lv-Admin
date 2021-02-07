<template>
  <div class="modal is-active">
    <div
      class="modal-background"
      @click="close"
    ></div>
    <div
      v-if="loadingStatus"
      class="modal-content modal--big"
    >
      <spinner message="Updating Host Data...." />
    </div>
    <div
      v-else
      class="modal-content modal--big"
    >
      <!--
          ERROR MESSAGE
       -->
      <section v-if="!isErrorEmpty">
        <pre>
            We're sorry, we're not able to retrieve this information at the moment, please try back later
            {{ errorMsg.msg.message }}
        </pre>
      </section>

      <div v-else-if="isUserDataEmpty">
        <spinner message="loading Host info...." />
      </div>
      <div v-else>
        <form @submit.prevent="updateData">
          <div class="heading border with-avatar">
            <!--
              AVATAR
            -->
            <div class="avatar avatar--medium avatar--profile">
              <img
                src="https://images.unsplash.com/photo-1516914943479-89db7d9ae7f2?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTl8fHBvcnRyYWl0fGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
                alt="Profile picture"
              />
            </div>

            <!--
              NAMES
            -->
            <header>
              <h4 class="head">
                {{ hostData.business_name }}
              </h4>
              <span class="sub-head">{{ userData.first_name + ' ' + userData.last_name }}</span>
            </header>
            <span
              v-if="!userData.is_verified"
              class="badges badges--unverified"
            >unverified</span>
          </div>

          <section>
            <!--
              META INFOS
            -->
            <div class="meta-info flex between-md top-md">
              <div class="item-container">
                <div class="item">
                  <div class="title">
                    Business Address
                  </div>
                  <div class="value">
                    {{ hostData.address }}
                  </div>
                </div>
                <div class="item">
                  <div class="title">
                    Business Category
                  </div>
                  <div class="value">
                    {{ hostData.business_category }}
                  </div>
                </div>
              </div>

              <div class="item-container">
                <div class="item">
                  <div class="title">
                    About Business
                  </div>
                  <div class="value">
                    {{ hostData.business_about }}
                  </div>
                </div>
              </div>

              <div class="item-container">
                <div class="item">
                  <div class="title">
                    Phone
                  </div>
                  <div class="value">
                    {{ userData.phone_number }}
                  </div>
                </div>
                <div class="item">
                  <div class="title">
                    Email
                  </div>
                  <div class="value">
                    {{ userData.email }}
                  </div>
                </div>
                <div class="item">
                  <div class="title">
                    Signup Date
                  </div>
                  <div class="value">
                    {{ hostData.created_at | formatDate }}
                  </div>
                </div>
              </div>
            </div>

            <hr />

            <!--
              PHOTOS OF ID AND BUSINESS LICENSE
            -->
            <h5>Uploaded Photos</h5>
            <div class="flex between-md top-md">
              <!--
                PHOTO ID
              -->
              <figure class="photo-id">
                <img
                  :src="hostData.bussiness_id"
                  alt="ID Card"
                />
                <figcaption>Photo ID Card</figcaption>
                <span
                  class="badges"
                  :class="statusUpload(hostData.card_id_status).className"
                >{{ statusUpload(hostData.card_id_status).name }}</span>
                <div class="form-group">
                  <div class="select select-narrow">
                    <select
                      v-model="photoIdApproval"
                      class="form-control narrow"
                    >
                      <option
                        disabled
                        value=""
                      >
                        - Review this photo -
                      </option>
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
                <img
                  :src="hostData.card_id"
                  alt="ID Card"
                />
                <figcaption>Business License</figcaption>
                <span
                  class="badges"
                  :class="statusUpload(hostData.bussiness_id_status).className"
                >{{ statusUpload(hostData.bussiness_id_status).name }}</span>
                <div class="form-group">
                  <div class="select select-narrow">
                    <select
                      v-model="businessIdApproval"
                      class="form-control narrow"
                    >
                      <option
                        disabled
                        value=""
                      >
                        - Review this photo -
                      </option>
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
            <div
              v-if="toggleRejectMsg()"
              class="form-group"
            >
              <label for="rejection_message">Rejection Message</label>
              <textarea
                v-model="rejectionMsg"
                name="rejection_message"
                class="form-control"
              ></textarea>
            </div>
          </section>
          <hr />

          <!--
            ACTION BUTTONS
          -->
          <div class="action-button-group flex between-md middle-md">
            <h5>Verify this host</h5>
            <div>
              <button
                class="btn btn--default btn--text btn--muted btn--medium btn--text-warning"
                @click="close"
              >
                Cancel
              </button>
              <button
                type="submit"
                class="btn btn--default btn--medium"
                :class="toggleBtn()"
                :disabled="btnDisabled"
              >
                {{ btnText }}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
    <button
      class="modal-close is-large"
      aria-label="close"
      @click="close"
    ></button>
  </div>
</template>

<script>
/**
 * TODOs
 * ----
 * 1. PATCH user data to server
 *
 * THE FLOW
 * ----
 * 1. Admin click one of the user data, and modal window will be opened
 * 2. hostData will be checked, if it's already available in store
 * 3. if available, user data will be retrieve and store into state with getUserByID
 * 4. load hostData and userData into views
 * 5. Admin review the photos of ID and business license
 * 6. PATCH verification data to server by
 */

// internal modules
import { mapState, mapGetters, mapActions } from 'vuex'
import auth from '@/mixins/auth'
import formatting from '@/mixins/formatting'

// external modules
import _ from 'lodash'
import Spinner from 'vue-simple-spinner'

// components or views her

export default {
  name: 'VerificationDetail',
  components: {
    Spinner
  },
  mixins: [auth, formatting],
  props: [
    'hostId'
  ],
  data () {
    return {
      status: {},
      businessIdApproval: '',
      photoIdApproval: '',
      rejectionMsg: '',
      btnText: '',
      btnDisabled: true,
      updatedData: {}
    }
  },
  computed: {
    /**
     * STATE OBJECTS
     */
    ...mapState({
      userData: state => state.users.userData,
      errorMsg: state => state.errorMsg
    }),
    /**
     * STATE GETTERS
     */
    ...mapGetters([
      'getSingleReq',
      'loadingStatus',
      'processCompleted'
    ]),
    /**
     * GET SINGLE HOST DATA FROM HOSTDATA STATE IN STORE
     */
    hostData: function () {
      return this.getSingleReq(this.hostId)
    },
    /**
     * CHECK USER DATA AVAILABILITY
     *
     * Check if user data already available
     * if user data available, host data is of course available, because to get user data, user id is needed.
     * if user data available, then, load the page.
     *
     * Host data will most likely available, since it's already in store when the verification page loaded/mounted
     * This prop is used to pre-load the page.
     */
    isUserDataEmpty: function () {
      return _.isEmpty(this.userData)
    },
    /**
     * Check if any errors
     */
    isErrorEmpty: function () {
      return _.isEmpty(this.errorMsg)
    }
  },
  methods: {
    /**
     * STATE ACTIONS
     *
     * Get user by ID,
     * Update/patch verification data to server and state
     */
    ...mapActions([
      'getUserByID',
      'patchVerificationData'
    ]),
    /**
     * CLOSE MODAL
     */
    close () {
      this.$emit('close')
    },
    /**
     * SET STATUS/BADGES OF ID & BUSINESS LICENSE UPLOADS
     */
    statusUpload (idStatus) {
      switch (idStatus) {
        case 0:
          this.status.name = 'pending'
          this.status.className = 'badges--unprocess'
          break
        case 1:
          this.status.name = 'unreviewed'
          this.status.className = 'badges--unverified'
          break
        case 2:
          this.status.name = 'approved'
          this.status.className = 'badges--verified'
          break
        case 3:
          this.status.name = 'rejected'
          this.status.className = 'badges--processed'
          break
        default:
          this.status.name = 'unreviewed'
          this.status.className = 'badges--unverified'
      }

      return this.status
    },
    /**
     * TOGGLE ACTION BUTTON
     *
     * Button will transform into rejection if at least one of the photo is rejected
     * Button will transform into approval & verification if both photos are approved
     */
    toggleBtn: function () {
      if ((this.photoIdApproval === 'Reject' || this.businessIdApproval === 'Reject')) {
        this.btnText = 'Decline Request'
        this.btnDisabled = false
        return 'btn--warning'
      } else if (this.photoIdApproval === 'Approve' && this.businessIdApproval === 'Approve') {
        this.btnText = 'Approve & Verify'
        this.btnDisabled = false
        return 'btn--primary'
      } else {
        this.btnText = 'Verify Host'
        this.btnDisabled = true
        return 'btn--disabled'
      }
    },
    /**
     * TOGGEL REJECTION MESSAGE
     *
     * Toggle rejection message text area if at least one of the photos is rejected
     */
    toggleRejectMsg: function () {
      return (this.photoIdApproval === 'Reject' || this.businessIdApproval === 'Reject')
    },
    /**
     * UPDATE VERIFICATION DATA
     *
     * check the status of ID & busiess license photos after reviewed by admin
     * update the verification/host data
     */
    updateData: function () {
      let photoID = this.hostData.card_id_status
      let businessID = this.hostData.bussiness_id_status
      let isVerified = false

      // Assign each status to the corresponding numbers
      if (this.photoIdApproval === 'Reject') {
        photoID = 3
      } else if (this.photoIdApproval === 'Approve') {
        photoID = 2
      }
      if (this.businessIdApproval === 'Reject') {
        businessID = 3
      } else if (this.businessIdApproval === 'Approve') {
        businessID = 2
      }

      // set verification status if both photos are approved
      if (photoID === 2 && businessID === 2) {
        isVerified = true
      }

      // assign every updated data into one object
      const payload = {
        host_id: this.hostData.host_id,
        card_id_status: photoID,
        bussiness_id_status: businessID,
        rejection_message: this.rejectionMsg,
        is_verified: isVerified
      }

      // patch to server and update the unverified users state
      this.patchVerificationData(payload)
    }
  },
  created () {
    /**
     * GET USER DATA
     *
     * if host data available, then get user data based on user id retrieved from host data
     */
    if (!_.isEmpty(this.hostData)) {
      this.getUserByID(this.hostData.user_uid)
        .then(() => {
          this.isUnauthorized()
        })
    }
  },
  updated () {
    /**
     * CLOSE MODAL AFTER PROCESS DONE
     */
    if (this.processCompleted) {
      this.$emit('close')
    }
  }
}
</script>
