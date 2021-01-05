<template>
  <div class="column site-content">
    <div class="container-fluid">
      <div class="columns">
        <div class="column generic-heading is-two-third">
          <input
            v-model="business_name"
            type="text"
            class="product-title"
            placeholder="Bussiness Name"
          />
        </div>
      </div>

      <div class="columns">
        <div class="column is-two-third">
          <div class="card card--statistic">
            <div class="heading border">
              <h4>Host Info</h4>
            </div>

            <div class="sub-heading">
              <p>Basic Info</p>
            </div>

            <div class="columns is-gapless">
              <div class="column">
                <div class="form-group">
                  <label for="first_name">First Name</label>
                  <input
                    v-model="first_name"
                    type="text"
                    class="form-control"
                    placeholder=""
                  />
                </div>
              </div>
            </div>

            <div class="columns is-gapless">
              <div class="column">
                <div class="form-group">
                  <label for="last_name">Last Name <span class="optional">(Optional)</span></label>
                  <input
                    v-model="last_name"
                    type="text"
                    class="form-control"
                    placeholder=""
                  />
                </div>
              </div>
            </div>

            <div class="columns ">
              <div class="column is-6">
                <div class="form-group">
                  <label for="last_name">Email</label>
                  <input
                    v-model="email"
                    type="text"
                    class="form-control"
                    placeholder=""
                  />
                </div>
              </div>

              <div class="column is-6">
                <div class="form-group">
                  <label for="last_name">Password</label>
                  <input
                    v-model="password"
                    type="text"
                    class="form-control"
                    placeholder=""
                  />
                </div>
              </div>
            </div>

            <div class="columns ">
              <div class="column is-6">
                <div class="form-group">
                  <label for="last_name">Date of Birth</label>

                  <datepicker
                    v-model="date_of_birth"
                    name="uniquename"
                    :format="formatDate"
                    input-class="form-control datetime"
                  />
                </div>
              </div>

              <div class="column is-6">
                <div class="form-group">
                  <label for="last_name">Gender</label>
                  <div class="select">
                    <select
                      v-model="gender"
                      class="form-control"
                    >
                      <option value="male">
                        Male
                      </option>
                      <option value="female">
                        Female
                      </option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            <div class="columns">
              <div class="column is-6">
                <div class="form-group">
                  <label for="last_name">Phone Number</label>
                  <input
                    v-model="phone_number"
                    type="text"
                    class="form-control"
                    placeholder=""
                  />
                </div>
              </div>

              <!--
                  <div class="column is-6">
                    <div class="form-group">
                      <label for="last_name">Role</label>
                      <input
                        id="password"
                        type="text"
                        disabled
                        class="form-control"
                        value="HOST"
                      >
                    </div>
                  </div>
                  -->
            </div>
            <div class="columns">
              <div class="column is-6">
                <div class="form-group">
                  <label for="last_name">Prefered Location</label>
                  <input
                    id="harga"
                    type="text"
                    class="form-control"
                    placeholder=""
                  />
                </div>
              </div>

              <div class="column is-6">
                <label for="last_name">Suspended</label>

                <div class="column is-6">
                  <div class="form-check">
                    <label class="container">
                      <input
                        type="radio"
                        name="radio"
                      />
                      <span class="radiomark"></span>
                      Yes
                    </label>
                  </div>
                </div>

                <div class="column is-6">
                  <div class="form-check">
                    <label class="container">
                      <input
                        type="radio"
                        name="radio"
                        checked="checked"
                      />
                      <span class="radiomark"></span>
                      No
                    </label>
                  </div>
                </div>
              </div>
            </div>

            <div class="sub-heading">
              <p>Profile Picture</p>
            </div>

            <div class="custom-file grey">
              <input
                id="profile_picture"
                type="file"
                class="custom-file-input"
                accept="image/*"
                multiple
                @change="filesChange($event)"
              />
              <img
                :src="profile_picture_url ? profile_picture_url : '../assets/img/ic-image-white.svg'"
                alt=""
              />
            </div>

            <div class="sub-heading">
              <p>Business</p>
            </div>

            <div class="columns  ">
              <div class="column is-6">
                <div class="form-group">
                  <label for="last_name">Business Name</label>
                  <input
                    id="harga"
                    v-model="business_name"
                    type="text"
                    class="form-control"
                    placeholder=""
                  />
                </div>
              </div>

              <div class="column is-6">
                <div class="form-group">
                  <label for="last_name">Category</label>
                  <div class="select">
                    <select
                      v-model="bussinness_category"
                      class="form-control"
                    >
                      <option value="currency">
                        Tour &amp; Travel
                      </option>
                      <option value="percentage">
                        Consultant
                      </option>
                      <option value="percentage">
                        Advertising/Branding/PR.
                      </option>
                      <option value="percentage">
                        Government Agency.
                      </option>
                      <option value="percentage">
                        Financial Institution/Investment Bank.
                      </option>
                      <option value="percentage">
                        Not for Profit.
                      </option>
                      <option value="percentage">
                        Association.
                      </option>
                      <option value="percentage">
                        Packaging/Design.
                      </option>
                      <option value="percentage">
                        Publisher.
                      </option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            <div class="columns ">
              <div class="column is-6">
                <div class="form-group">
                  <label for="last_name">Address</label>
                  <textarea
                    v-model="address"
                    class="form-control"
                  ></textarea>
                </div>
              </div>

              <div class="column is-6">
                <div class="form-group">
                  <label for="last_name">About</label>
                  <textarea
                    v-model="business_about"
                    class="form-control"
                  ></textarea>
                </div>
              </div>
            </div>

            <div class="columns">
              <div class="detail-info">
                <div class="flex item-durations price-flex">
                  <div class="form-group">
                    <label for="last_name">Status</label>
                    <div class="select">
                      <select class="form-control">
                        <option value="currency">
                          Verified
                        </option>
                        <option value="percentage">
                          Unverified
                        </option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="sub-heading">
              <p>ID Verification</p>
            </div>

            <div class="columns">
              <div class="column is-6">
                <p><b>Personal ID</b></p>
                <div class="custom-file grey">
                  <input
                    id="customFile"
                    type="file"
                    class="custom-file-input"
                  />
                  <img
                    src="../assets/img/ic-image-white.svg"
                    alt=""
                  />
                </div>
              </div>
              <div class="column is-6">
                <p><b>Business ID</b></p>
                <div class="custom-file grey">
                  <input
                    id="customFile"
                    type="file"
                    class="custom-file-input"
                  />
                  <img
                    src="../assets/img/ic-image-white.svg"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div class="clear"></div>
          </div>
        </div>
        <div class="column sidebar is-one-third">
          <button
            v-if="!isLoading"
            class="btn btn--primary btn--default btn--full padding-b-m btn-loader"
            @click="submit()"
          >
            Register Host
          </button>
          <button
            v-if="isLoading"
            class="btn btn--primary btn--default btn--full padding-b-m btn-loader"
            @click="submit()"
          >
            <img
              src="../assets/img/tail-spin.svg"
              alt=""
              class="img_button"
            />Processed
          </button>

          <span
            v-if="error"
            class="error"
          >{{ error }}</span>
          <span
            v-if="success"
            class="success"
          >{{ success }}</span>

          <router-link to="/users">
            <button class="btn btn--transparent btn--default btn--full">
              Cancel
            </button>
          </router-link>

          <hr />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import moment from 'moment'
import Datepicker from 'vuejs-datepicker'

export default {
  components: {
    Datepicker
  },
  data () {
    return {
      apiUrl: `${process.env.VUE_APP_API_BASE_URL}`,
      address: '',
      bussinness_category: '',
      email: '',
      password: '',
      phone_number: '',
      gender: '',
      date_of_birth: '',
      business_name: '',
      business_about: '',
      first_name: '',
      last_name: '',
      card_id: '',
      bussiness_id: '',
      profile_picture_url: '',
      accessToken: '',
      isLoading: false,
      error: '',
      success: ''
    }
  },
  mounted () {
    if (!localStorage.accessToken) {
      this.$router.push({ path: '/' })
    } else {
      this.accessToken = localStorage.accessToken
    }
  },
  methods: {
    submit () {
      this.isLoading = true

      if (!this.date_of_birth) {
        this.error = 'Date is required'
        this.isLoading = false
        return false
      }
      var postData = {
        first_name: this.first_name,
        last_name: this.last_name,
        business_name: this.business_name,
        business_about: this.business_about,
        email: this.email,
        password: this.password,
        password_confirmation: this.password,
        phone_number: this.phone_number,
        gender: this.gender,
        date_of_birth: this.date_of_birth,
        card_id: this.card_id,
        bussiness_id: this.bussiness_id,
        profile_picture_url: this.profile_picture_url

      }
      axios.post(this.apiUrl + 'host/register', postData)
        .then((res) => {
          console.log('RESPONSE RECEIVED: ', res)
          this.isLoading = false
          this.error = ''
          this.success = res.response.data.title
        })
        .catch((err) => {
          console.log('AXIOS ERROR: ', err.response.data.title)

          this.isLoading = false
          this.error = err.response.data.title
        })
    },

    checkForm: function (e) {
      e.preventDefault()
      if (this.date_of_birth === '') {
        this.error = 'Date not empty'
        return false
      }

      return true
    },

    formatDate (date) {
      return moment(date).format('YYYY-MM-DD')
    },

    filesChange (event) {
      var formData = new FormData()
      formData.append('lokaven_file', event.target.files[0])
      formData.append('category', 'profile_pictures')

      axios.post(this.apiUrl + 'upload/uploader', formData)
        .then((res) => {
          console.log('RESPONSE RECEIVED: ', res)
          this.isLoading = false
          this.error = ''
          this.profile_picture_url = res.data.data.url
        })
        .catch((err) => {
          console.log('AXIOS ERROR: ', err.response.data.title)

          this.isLoading = false
          this.error = err.response.data.title
        })
    }
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
</style>>
