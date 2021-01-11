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
                src="https://images.unsplash.com/photo-1516914943479-89db7d9ae7f2?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTl8fHBvcnRyYWl0fGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
                alt="Profile picture"
              />
            </div>
            <!-- /end avatar -->

            <!--
              NAMES
            -->
            <header>
              <h2 class="head">
                Pratama Hasriyan
              </h2>
              <span class="sub-head">Joined 02 January, 2020</span>
            </header>
            <span
              class="badges badges--unverified"
            >unverified</span>
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
                      pratama@hasriyan.com
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
                      01 January 2000
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
                      0813918239832
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
            <div class="generic-heading border">
              <h4>Business Info</h4>
              <p>You can convert this user into a Host by filling the below forms</p>
            </div>
            <!-- /end business info -->

            <!--
              SIGN UP AS HOST CHECKBOX
             -->
            <div class="columns m-t-md">
              <div class="column is-12">
                <div class="form-group margin-none">
                  <label class="checkbox">
                    <input type="checkbox" />
                    Sign this user as a host
                  </label>
                </div>
              </div>
            </div>
            <!-- /end sign up as host -->

            <!--
              BUSINESS INFO FORM
             -->
            <FormEditBusiness />
            <!-- /end business info form -->

          </div>
          <!-- /end user & business info -->

          <!--
            DEACTIVATE USER
            -->
          <FormDeactivateUser />
          <!-- /end deactivate user -->

          <!--
            DELETE USER
            -->
          <FormDeleteUser />
          <!-- /end delete user -->

        </div>

        <!-- SIDEBAR -->
        <div class="column sidebar is-one-third is-relative">
          <button class="btn btn--primary btn--default btn--full padding-b-m">
            Save
          </button>

          <router-link to="/users">
            <button class="btn btn--transparent btn--default btn--full">
              Cancel
            </button>
          </router-link>
        </div>
        <!-- /end sidebar -->

        <!--
          DELETE USER MODAL
          ========================================================================
          if user can be deleted, show this modal to confirm deletion
         -->
         <ModalDeleteUser />
        <!-- /end delete user modal -->

        <!--
          UNABLE TO DELETE USER MODAL
          ========================================================================
          if user cannot be deleted, show this modal to inform the admin that
          this particular user is unable to be deleted
         -->
        <ModalUndeleteUser />
        <!-- /end unable to delete user modal -->

      </div>
    </div>
  </div>
</template>
<script>
import moment from 'moment'
import config from '@/config'
// import axios from 'axios'

import ModalDeleteUser from '@/components/modals/ModalDeleteUser'
import ModalUndeleteUser from '@/components/modals/ModalUndeleteUser'
import FormEditBusiness from '@/components/forms/FormEditBusiness'
import FormDeactivateUser from '@/components/forms/FormDeactivateUser'
import FormDeleteUser from '@/components/forms/FormDeleteUser'

export default {
  components: {
    ModalDeleteUser,
    ModalUndeleteUser,
    FormEditBusiness,
    FormDeactivateUser,
    FormDeleteUser
  },
  data () {
    return {
      items: '',
      isLoading: false,
      isActiveUnableDel: false,
      isActiveDel: false
    }
  },
  created () {
    console.log(localStorage.editUserID)

    // this.$router.onReady(() => {
    //   console.log('is it here?')
    //   if (this.$route.name === 'edithost') {
    //     if (!localStorage.accessToken) {
    //       this.$router.push({ path: '/' })
    //     }
    //     this.isLoading = true
    //     axios.get(this.apiUrl + 'user/' + this.userUid + '/details')
    //       .then((res) => {
    //         console.log(`respon: ${this.apiUrl}user/${this.userUid}/details`, res.data.data)
    //         this.items = res.data.data

    //         if (this.items.host_id) {
    //           this.hostId = this.items.host_id
    //         }
    //         // add to model

    //         this.business_name = this.items.business_name
    //         this.first_name = this.items.first_name
    //         this.last_name = this.items.last_name
    //         this.email = this.items.email
    //         this.address = this.items.address
    //         this.gender = this.items.gender
    //         this.phone_number = this.items.phone_number
    //         this.date_of_birth = this.items.date_of_birth
    //         this.card_id = this.items.card_id
    //         this.bussiness_id = this.items.bussiness_id

    //         this.isLoading = false
    //       })
    //       .catch((err) => {
    //         console.log('AXIOS ERROR: ', err.response.data.title)
    //         this.isLoading = false
    //       })
    //   }
    // })
  },
  methods: {
    toggleActiveUnableDel: function () {
      this.isActiveUnableDel = !(this.isActiveUnableDel)
    },
    toggleActiveDel: function () {
      this.isActiveDel = !(this.isActiveDel)
    }
  },
  filters: {
    formatDate: function (value) {
      if (value) {
        return moment(String(value)).format('DD MMMM YYYY')
      }
    },
    formatDay: function (value) {
      if (value) {
        return moment(String(value)).format('dddd')
      }
    }

  },
  mounted () {
    /**
     * CHECK IF LOGGED IN
     */
    config.authCheck()
  }
}
</script>
