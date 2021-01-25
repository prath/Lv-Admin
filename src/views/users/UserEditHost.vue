<template>
  <div class="column site-content">
    <div class="container-fluid">
      <hr class="space-lg" />
      <div class="columns is-gapless pb">
        <div class="column generic-heading is-two-third">

          <!--
            HEADER
           -->
          <div class="heading with-avatar">
            <!--
              AVATAR
            -->
            <div class="avatar avatar--large avatar--profile">
              <img
                :src="userData.profile_picture_url"
                alt="Profile picture"
              />
            </div>
            <!-- /end avatar -->

            <!--
              NAMES
            -->
            <header>
              <h2 class="head">
                {{ userData.first_name }} {{ userData.last_name }}
              </h2>
              <span class="sub-head">Joined {{ userData.created_at | formatDate }}</span>
            </header>
            <!-- /end names -->

          </div>
          <!-- /end header -->

        </div>
      </div>

      <div class="columns">
        <div class="column is-two-third">

          <!--
            USER & BUSINESS INFO CARD
           -->
          <div class="card card--statistic padding-b-m">
            <div class="heading border">
              <h4>User Infos</h4>
            </div>

            jello {{ userData }}

            <!--
              META INFOS
            -->
            <section class="padding-b-m">
              <div class="meta-info meta-info--big flex around-md top-md">

                <!--
                  EMAIL
                 -->
                <div class="item-container">
                  <div class="item">
                    <div class="title">
                      Email
                    </div>
                    <div class="value">
                      {{ userData.email }}
                    </div>
                  </div>
                </div>
                <!-- /end email -->

                <!--
                  DOB
                 -->
                <div class="item-container">
                  <div class="item">
                    <div class="title">
                      Date of Birth
                    </div>
                    <div class="value">
                      {{ userData.date_of_birth | formatDate}}
                    </div>
                  </div>
                </div>
                <!-- /end dob -->

                <!--
                  PHONE
                 -->
                <div class="item-container">
                  <div class="item">
                    <div class="title">
                      Phone Number
                    </div>
                    <div class="value">
                      {{ userData.phone_number }}
                    </div>
                  </div>
                </div>
                <!-- /end phone -->

              </div>
            </section>
            <!-- end meta infos -->

            <!--
              BUSINESS INFO HEADING
             -->
            <div class="generic-heading border is-clearfix">
              <h4>Business Info</h4>
              <p>You can convert this user into a Host by filling the below forms</p>
            </div>
            <!-- /end business info -->

            <!--
              SIGN UP AS HOST CHECKBOX
             -->
            <div class="columns mt-3 mb-0 pb-0" v-if="!checkHost">
              <div class="column is-12">
                <div class="form-group mb-0">
                  <label class="checkbox mb-0">
                    <input
                      type="checkbox"
                      v-model="isSignupAsHost"
                    />
                    Sign this user as a host
                  </label>
                </div>
              </div>
            </div>
            <!-- /end sign up as host -->

            <!--
              BUSINESS INFO FORM
             -->
            <FormEditBusiness
              :activateForm="isSignupAsHost"
              :isVerifiedHost="isVerifiedHost"
              :isVerificationRequested="isVerificationRequested"
              :userData="userData"
            />
            <!-- /end business info form -->

          </div>
          <!-- /end user & business info -->

        </div>

        <!-- SIDEBAR -->
        <div class="column sidebar is-one-third is-relative">

          <!--
            DEACTIVATE USER
            -->
          <!-- <FormDeactivateUser /> -->
          <!-- /end deactivate user -->

          <!--
            DELETE USER
            -->
          <!-- <FormDeleteUser /> -->
          <!-- /end delete user -->

        </div>
        <!-- /end sidebar -->

        <!--
          DELETE USER MODAL
          ~~~~~
          if user can be deleted, show this modal to confirm deletion
         -->
         <!-- <ModalDeleteUser /> -->
        <!-- /end delete user modal -->

        <!--
          UNABLE TO DELETE USER MODAL
          ~~~~~
          if user cannot be deleted, show this modal to inform the admin that
          this particular user is unable to be deleted
         -->
        <!-- <ModalUndeleteUser /> -->
        <!-- /end unable to delete user modal -->

      </div>
    </div>
  </div>
</template>
<script>
import moment from 'moment'
import config from '@/config'
import { mapActions, mapState } from 'vuex'

import {
  // ModalDeleteUser,
  // ModalUndeleteUser,
  FormEditBusiness
  // FormDeactivateUser,
  // FormDeleteUser
} from '@/components'

export default {
  components: {
    // ModalDeleteUser,
    // ModalUndeleteUser,
    FormEditBusiness
    // FormDeactivateUser,
    // FormDeleteUser
  },
  data () {
    return {
      // modal deletion & deactivation
      isActiveUnableDel: false,
      isActiveDel: false,
      // de/activate the checkbox to sing up guest as host
      isSignupAsHost: false,
      // user id gotten from $route params
      routeUserID: ''
    }
  },
  computed: {
    /**
     * VUEX STATES
     *
     * userData: single user data
     * isLoaded: preloader
     * errorMsg: error message (this one need to be refactored tho)
     */
    ...mapState({
      userData: state => state.users.userData,
      isLoaded: state => state.isLoaded,
      errorMsg: state => state.errorMsg
    }),
    /**
     * CHECKHOST
     *
     * check if the user is host or not
     * if not host, activate the checkbox to sign up as host
     */
    checkHost: function () {
      return this.userData.is_host
    },
    /**
     * IS USER VERIFIED HOST?
     *
     * Check if user is already a verified host
     * if so, will show the status message in FormEditBusiness
     * if not, will be shown the checkbox to verified this user
     */
    isVerifiedHost: function () {
      return ('is_verified' in this.userData) ? this.userData.is_verified : false
    },
    /**
     * IS USER REQUESTED VERIFICATION?
     *
     * Check if user already requestion a verification from admin
     * if so, will be shown a link to review verification page
     */
    isVerificationRequested: function () {
      return ((this.userData.card_id || this.userData.bussiness_id) && this.userData.is_verified !== true)
    }
  },
  methods: {
    /**
     * GET USER DATA FROM SERVER
     */
    ...mapActions([
      'getUserByID'
    ]),
    /**
     * TOGGLE UNABLE DELETE MODAL
     *
     * Toggle the modal if the user is unable to be deleted
     */
    toggleActiveUnableDel: function () {
      this.isActiveUnableDel = !(this.isActiveUnableDel)
    },
    /**
     * TOGGLE DELETE USER
     *
     * Toggel the modal to delete user
     */
    toggleActiveDel: function () {
      this.isActiveDel = !(this.isActiveDel)
    }
  },
  filters: {
    /**
     * FORMAT DATE
     */
    formatDate: function (value) {
      if (value) {
        return moment(String(value)).format('DD MMMM YYYY')
      }
    }
  },
  created () {
    // Get user id from route params
    this.routeUserID = this.$route.params.id

    // check if user id from route is equal to the one in the state
    // also used to check if the state is defined
    // if not, fetch the data from server
    if (this.routeUserID !== this.userData.user_uid) {
      this.getUserByID(this.routeUserID)
    }
  },
  mounted () {
    // check if logged in
    config.authCheck()
  }
}
</script>
