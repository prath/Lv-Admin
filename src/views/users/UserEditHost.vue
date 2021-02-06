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
                v-if="userData.profile_picture_url"
                :src="userData.profile_picture_url"
                alt="Profile picture"
              />
              <img
                v-else
                src="@/assets/img/user.svg"
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
                      {{ userData.date_of_birth | formatOnlyDate}}
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
            <form-edit-business
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
            DEACTIVATE/REACTIVATE USER
            ~~~~~
            will open <user-deactivate /> modal when the button is clicked
            -->
          <action-card
            v-if="!userData.is_deactivate"
            title="Deactivate User"
            buttonClass="btn--muted"
            :buttonLabel="`Deactivate ${userData.first_name} ${userData.last_name}`"
            @buttonAction="toggleModalDeactivate">
            <template>
              Please be careful when deactivating a user, as it would affects all their activity throughout the platform
            </template>
          </action-card>
          <action-card
            v-else
            title="Reactivate User"
            buttonClass="btn--primary"
            :buttonLabel="`Reactivate ${userData.first_name} ${userData.last_name}`"
            @buttonAction="toggleModalDeactivate">
            <template>
              This user's account is currently deactivated, click the button bellow to reactivate the account.
            </template>
          </action-card>
          <!-- /end deactivate/reactivate user -->

          <!--
            DELETE USER
            ~~~~~
            will open <user-delete /> modal when the button is clicked
            -->
          <action-card
            title="Permanently Delete User"
            buttonClass="btn--muted"
            :buttonLabel="`Delete ${userData.first_name} ${userData.last_name}`"
            @buttonAction="toggleModal">
            <template>
              This process is irreversible, the user will be gone forever after your delete it. Proceed with extra caution.
            </template>
          </action-card>
          <!-- /end delete user -->

        </div>
        <!-- /end sidebar -->

        <!--
          DELETE USER MODAL
          ~~~~~
          if user can be deleted, show this modal to confirm deletion
         -->
         <user-delete
          v-if="isActiveModal"
          :title="`Delete ${userData.first_name} ${userData.last_name}`"
          :fullName="`${userData.first_name} ${userData.last_name}`"
          @toggleModal="toggleModal"
         />
        <!-- /end delete user modal -->

        <!--
          UNABLE TO DELETE USER MODAL
          ~~~~~
          if user cannot be deleted, show this modal to inform the admin that
          this particular user is unable to be deleted
         -->
        <!-- <modal-undelete-user /> -->
        <!-- /end unable to delete user modal -->

        <!--
          DEACTIVATE USER MODAL
          ~~~~~
          if user can be deleted, show this modal to confirm deletion
         -->
         <user-deactivate
          v-if="isActiveModalDeactivate"
          :title="`Deactivate ${userData.first_name} ${userData.last_name}`"
          :uid="userData.user_uid"
          :fullName="`${userData.first_name} ${userData.last_name}`"
          @toggleModal="toggleModalDeactivate"
         />
        <!-- /end deactivate user modal -->

      </div>
    </div>
  </div>
</template>
<script>
// internal modules
import { mapActions, mapState } from 'vuex'
import auth from '@/mixins/auth'
import formatting from '@/mixins/formatting'

// external modules

// components
import {
  // ModalUndeleteUser,
  FormEditBusiness,
  ActionCard
} from '@/components'

// views
import UserDelete from './UserDelete'
import UserDeactivate from './UserDeactivate'

export default {
  name: 'UserEditHost',
  components: {
    UserDelete,
    UserDeactivate,
    // ModalUndeleteUser,
    FormEditBusiness,
    ActionCard
  },
  mixins: [auth, formatting],
  data () {
    return {
      // modal deletion & deactivation
      isActiveModal: false,
      isActiveModalDeactivate: false,
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
      users: state => state.users.users,
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
      return ((this.userData.card_id === 1 || this.userData.card_id === 3 || this.userData.bussiness_id === 1 || this.userData.bussiness_id === 3) && this.userData.is_verified !== true)
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
    toggleModal: function () {
      this.isActiveModal = !(this.isActiveModal)
    },
    /**
     * TOGGLE DELETE USER
     *
     * Toggel the modal to delete user
     */
    toggleModalDeactivate: function () {
      this.isActiveModalDeactivate = !(this.isActiveModalDeactivate)
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
        .then(() => {
          this.isUnauthorized()
        })
    }
  }
}
</script>
