<template>
  <div class="column site-content">
    <div class="container-fluid">
      <form @submit.prevent="signupHost">
        <div class="columns">
          <div class="column generic-heading is-two-third">
            <input
              v-model="businessName"
              type="text"
              class="product-title"
              placeholder="Bussiness Name"
              required
            />
          </div>
        </div>

        <div class="columns">

          <div class="column is-two-third">
            <div class="card card--statistic">
              <div class="heading border">
                <h4>Host Info</h4>
              </div>

              <!--
                ERROR
              -->
              <section class="columns" v-if="!isErrorEmpty">
                <div class="column">
                  <div class="message is-info p-5">
                      We're sorry, we're not able to update this user for now, please try back later
                      {{ errorMsg.code }} - {{ errorMsg.msg }}
                  </div>
                </div>
              </section>
              <!-- /error message -->

              <!--
                SUCCESS
              -->
              <section class="columns" v-if="processCompleted">
                <div class="column">
                  <div class="message is-info p-5">
                      Host successfully created
                  </div>
                </div>
              </section>
              <!-- /success message -->

              <div class="sub-heading">
                <p>Basic Info</p>
              </div>

              <div class="columns">
                <div class="column is-6">
                  <div class="form-group">
                    <label for="first_name">First Name</label>
                    <input
                      v-model="firstName"
                      type="text"
                      class="form-control"
                      placeholder=""
                      required
                    />
                  </div>
                </div>
                <div class="column is-6">
                  <div class="form-group">
                    <label for="first_name">Last Name</label>
                    <input
                      v-model="lastName"
                      type="text"
                      class="form-control"
                      placeholder=""
                    />
                  </div>
                </div>
              </div>

              <div class="columns">
                <div class="column is-6">
                  <div class="form-group">
                    <label for="last_name">Email</label>
                    <input
                      v-model="email"
                      type="email"
                      class="form-control"
                      placeholder=""
                      required
                    />
                  </div>
                </div>

                <div class="column is-6">
                  <div class="form-group">
                    <label for="last_name">Phone Number</label>
                    <input
                      v-model="phoneNumber"
                      type="tel"
                      class="form-control"
                      placeholder=""
                      minlength="8"
                      maxlength="15"
                      required
                    />
                  </div>
                </div>
              </div>

              <div class="columns">
                <div class="column is-6">
                  <div class="form-group">
                    <label for="last_name">Password</label>
                    <input
                      v-model="password"
                      type="password"
                      class="form-control"
                      placeholder="Password"
                      minlength="8"
                      required
                    />
                  </div>
                </div>

                <div class="column is-6">
                  <div class="form-group">
                    <label for="last_name">Password Confirmation</label>
                    <input
                      v-model="passwordConfirm"
                      type="password"
                      class="form-control"
                      placeholder="Re-type your password"
                      minlength="8"
                      required
                    />
                  </div>
                </div>
              </div>

              <div class="columns">
                <div class="column">
                  <div class="form-group">
                    <label for="address">Address</label>
                    <input
                      v-model="address"
                      type="text"
                      class="form-control"
                      placeholder=""
                      required
                    />
                  </div>
                </div>
              </div>

              <div class="columns">
                <div class="column">
                  <div class="form-group">
                    <label for="about">About Host's Business</label>
                    <textarea
                      v-model="about"
                      class="form-control"
                      placeholder=""
                      required
                    >
                    </textarea>
                  </div>
                </div>
              </div>

              <div class="columns">
                <div class="column">
                  {{ passUnmatched }}
                </div>
              </div>
            </div>
          </div>
          <div class="column sidebar is-one-third">
            <button type="submit" class="btn btn--primary btn--default padding-b-m btn--full">
              <spinner v-if="isLoading" size="small" />
              <template v-else>Submit</template>
            </button>
            <!-- <button
              class="btn btn--primary btn--default btn--full padding-b-m btn-loader"
            >
              <img
                src="@/assets/img/tail-spin.svg"
                alt=""
                class="img_button"
              />Processed
            </button> -->

            <router-link to="/hosts">
              <button class="btn btn--transparent btn--default btn--full">
                Cancel
              </button>
            </router-link>

            <hr />
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import Spinner from 'vue-simple-spinner'

import appStates from '@/mixins/appStates'

export default {
  components: {
    Spinner
  },
  mixins: [appStates],
  data () {
    return {
      businessName: '',
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
      password: '',
      passwordConfirm: '',
      address: '',
      about: '',

      passUnmatched: '',
      processCompleted: false,
      isLoading: false
    }
  },
  methods: {
    ...mapActions([
      'signupTheHost'
    ]),
    signupHost: function () {
      const payload = {
        first_name: this.firstName,
        last_name: this.lastName,
        phone_number: this.phoneNumber,
        date_of_birth: '1000-01-01T00:00:00Z',
        email: this.email,
        gender: 'male',
        password: this.password,
        password_confirmation: this.passwordConfirm,
        business_name: this.businessName,
        address: this.address,
        business_about: this.about
      }

      const passMatch = this.password === this.passwordConfirm

      if (passMatch) {
        this.isLoading = true
        this.signupTheHost(payload)
          .then(response => {
            if (response.status === 200) {
              this.processCompleted = true
            }
            this.isLoading = false
          })
          .catch(() => {
            this.isLoading = false
          })
      } else {
        this.passUnmatched = 'password and password confirmation unmatched'
      }
    }
  },
  computed: {
    ...mapState({
      isLoaded: state => state.isLoaded,
      errorMsg: state => state.errorMsg
    })
  }
}
</script>

<style scoped>
.btn-loader{
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
}
.img_button{
      margin: 0 10px 0 0 !important;
    display: block !important;
    width: 20px !important;
}

.form-control.datetime{
  padding: 5px 10px;
}
.vdp-datepicker input[type="text"]{
  width: 100%;
  border-color: #cccccc;
}
.error{
  color: #ff4040;
  font-weight: bold;
  font-size: 12px;
  margin-bottom: 20px;
    display: inline-block;
    width: 100%;
    text-align: center;
}
.success{
  color: #19bd16;
  font-weight: bold;
  font-size: 14px;
  margin-bottom: 20px;
    display: inline-block;
    width: 100%;
    text-align: center;
}

.columns, .columns:not(:last-child) {
  margin-bottom: 0;
  padding-bottom: 20px;
}

.columns:last-child {
  margin-bottom: 70px;
}
</style>>
