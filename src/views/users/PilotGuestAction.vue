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
              NAMES
            -->
            <header>
              <h2 class="head">
                {{ userData.first_name }} {{ userData.last_name }}
              </h2>
              <span class="sub-head">Signed up at {{ userData.created_at | formatDate }}</span>
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
                      Name
                    </div>
                    <div class="value">
                      {{ userData.first_name }} {{ userData.last_name }}
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
                      Email
                    </div>
                    <div class="value">
                      {{ userData.email }}
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
              SEND EMAIL CREDENTIAL
             -->
            <div class="heading border">
              <h4>Email User Credentials</h4>
            </div>
            <!-- /end email credentials -->

            <form @submit.prevent="sendEmail" class="columns message is-info p-5 mb-6">
              <div class="column">
                <div class="form-group">
                  <label for="emailTo">To</label>
                  <input
                    type="text"
                    class="form-control"
                    :placeholder="userData.email"
                    disabled
                  />
                </div>

                <div class="form-group">
                  <label for="emailTo">Top Message</label>
                  <textarea
                    v-model="topMessage"
                    class="form-control"
                    placeholder="Message to be put on top of the email: Terimakasih Sudah Bergabung dengan kami, berikut ini adalah kredensial akun yang dapat Anda gunakan:"
                    rows="5"
                    required
                  ></textarea>
                </div>

                <div class="form-group">
                  <label for="emailTo">Bottom Message</label>
                  <textarea
                    v-model="bottomMessage"
                    class="form-control"
                    placeholder="Message to be put on the bottom of the email"
                    rows="5"
                    required
                  ></textarea>
                </div>

                <div class="form-group">
                  <label for="emailTo">Download Link</label>
                  <input
                    v-model="link"
                    type="text"
                    class="form-control"
                    placeholder="App's download link"
                    required
                  />
                </div>

                <div class="form-group">
                  <button class="btn btn--primary btn--default btn--full">
                    <spinner v-if="isLoading" size="small" />
                    <template v-else-if="processCompleted">Email successfully sent</template>
                    <template v-else>Send email credentials to {{ userData.first_name }}</template>
                  </button>
                </div>

              </div>
            </form>

          </div>
          <!-- /end user info -->

        </div>

        <!-- SIDEBAR -->
        <div class="column sidebar is-one-third is-relative">

          <router-link to="/pilot-hosts">
            <button class="btn btn--transparent btn--default btn--full">
              Back to list
            </button>
          </router-link>

        </div>
        <!-- /end sidebar -->

      </div>
    </div>
  </div>
</template>
<script>
// internal modules
import auth from '@/mixins/auth'
import formatting from '@/mixins/formatting'

// external modules
import { mapState, mapActions } from 'vuex'
// import _ from 'lodash'
import Spinner from 'vue-simple-spinner'
import axios from 'axios'
import config from '@/config'

// components

// views

export default {
  name: 'PilotGuestAction',
  components: {
    Spinner
  },
  mixins: [auth, formatting],
  data () {
    return {
      routeUID: '',

      emailTo: '',
      topMessage: '',
      bottomMessage: '',
      link: '',

      isLoading: false,
      isError: false,
      processCompleted: false
    }
  },
  computed: {
    ...mapState({
      userData: state => state.users.userData
    })
  },
  methods: {
    ...mapActions([
      'getUserByID'
    ]),
    sendEmail: function () {
      this.isLoading = true
      const payload = {
        email: this.userData.email,
        top_message: this.topMessage,
        bottom_message: this.bottomMessage,
        links: this.link
      }
      this.sendTheEmail(payload)
    },
    sendTheEmail: async function (payload) {
      const header = config.setHeader()
      const response = await axios.post(`${config.apiUrl}auth/users/pilot/single/send-email`, payload, header)

      try {
        if (response.status === 200) {
          this.processCompleted = true
          this.isLoading = false
        }
      } catch (error) {
        console.log(error.response)
        this.isError = true
        this.isLoading = false
      }
    }
  },
  created () {
    this.routeUID = this.$route.params.id

    if (this.routeUID !== this.userData.user_uid) {
      this.getUserByID(this.routeUID)
        .then(() => {
          this.isUnauthorized()
        })
    }
    // }
  }
}
</script>
