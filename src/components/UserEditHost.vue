<template>
  <div class="column site-content">
    <div class="container-fluid">
      <div class="columns">
        <div class="column generic-heading is-two-third">
          <input
            type="text"
            v-model="business_name"
            class="product-title"
            placeholder="Nama User"

          >
        </div>
      </div>

      <div class="columns">
        <div class="column is-two-third">
          <div class="card card--statistic">
            <div class="heading border">
              <h4>User Info</h4>
            </div>

            <div class="sub-heading">
              <p>Basic Info</p>
            </div>

            <div class="columns is-gapless">
              <div class="column">
                <div class="form-group">
                  <label for="first_name">First Name</label>
                  <input
                    id="harga"
                    v-model="first_name"
                    type="text"
                    class="form-control"
                    placeholder=""
                  >
                </div>
              </div>
            </div>




            <div class="columns is-gapless">
              <div class="column">
                <div class="form-group">
                  <label for="last_name">Last Name</label>
                  <input
                    id="harga"
                    v-model="last_name"
                    type="text"
                    class="form-control"
                    placeholder=""
                  >
                </div>
              </div>
            </div>

            <div class="columns ">
              <div class="column is-6">
                <div class="form-group">
                  <label for="last_name">Email</label>
                  <input
                    id="harga"
                    v-model="email"
                    type="text"
                    class="form-control"
                    placeholder=""
                  >
                </div>
              </div>

              <div class="column is-6">
                <div class="form-group">
                  <label for="last_name">Password</label>
                  <input
                    id="password"
                    type="password"
                    class="form-control"
                    placeholder=""
                  >
                </div>
              </div>
            </div>

            <div class="columns ">
              <div class="column is-6">
                <div class="form-group">
                  <label for="last_name">Date of Birth</label>
                  <input
                    id="harga"
                    type="text"
                    class="form-control"
                    placeholder=""
                    value="01/08/1990"
                  >
                </div>
              </div>

              <div class="column is-6">
                <div class="form-group">
                  <label for="last_name">Gender</label>
                  <div class="select">
                    <select class="form-control">
                      <option
                        value="currency"
                        selected
                      >
                        Laki-laki
                      </option>
                      <option
                        value="percentage"
                      >
                        Perempuan
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
                    id="harga"
                    type="text"
                    class="form-control"
                    placeholder=""
                    value="089992112221"
                  >
                </div>
              </div>

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
            </div>

            <div class="columns">
              <div class="column is-6">
                <div class="form-group">
                  <label for="last_name">Nationality</label>
                  <div class="select">
                    <select class="form-control">
                      <option
                        value="currency"
                        selected
                      >
                        Indonesia
                      </option>
                      <option value="percentage">
                        English
                      </option>
                      <option value="percentage">
                        Australia
                      </option>
                      <option value="percentage">
                        Canada
                      </option>
                      <option value="percentage">
                        Japan
                      </option>
                    </select>
                  </div>
                </div>
              </div>

              <div class="column is-6">
                <div class="form-group">
                  <label for="last_name">Status</label>
                  <div class="select">
                    <select class="form-control">
                      <option
                        value="currency"
                        selected
                      >
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

            <div class="columns">
              <div class="column is-6">
                <div class="form-group">
                  <label for="last_name">Prefered Location</label>
                  <input
                    id="harga"
                    type="text"
                    class="form-control"
                    placeholder=""
                    value="Indonesia"
                  >
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
                      >
                      <span class="radiomark" />
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
                      >
                      <span class="radiomark" />
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
                id="customFile"
                type="file"
                class="custom-file-input"
              >
              <img
                src="../assets/img/ic-image-white.svg"
                alt=""
              >
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
                    type="text"
                    class="form-control"
                    placeholder=""
                    value="PT. Kita Sejahtera Bersama"
                  >
                </div>
              </div>

              <div class="column is-6">
                <div class="form-group">
                  <label for="last_name">Category</label>
                  <div class="select">
                    <select class="form-control">
                      <option
                        value="currency"
                        selected
                      >
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
                    class="form-control"
                    rows="5"
                    cols="10"
                  >Jalan Asia Afrika, Jl. Braga, Braga, Kec. Sumur Bandung, Kota Bandung, Jawa Barat 40112</textarea>
                </div>
              </div>

              <div class="column is-6">
                <div class="form-group">
                  <label for="last_name">About</label>
                  <textarea
                    class="form-control"
                    rows="5"
                    cols="10"
                  >Kami memiliki jaringan bisnis yang luas, sehingga memampukan kami untuk memberikan layanan terbaik yang melingkupi tiket penerbangan, kereta api, hotel, pengurusan dokumen perjalanan, tour wisata inbound dan outbound, incentive tour, cruises, asuransi perjalanan, rental kendaraan, dan corporate travel management service.</textarea>
                </div>
              </div>
            </div>

            <div class="sub-heading">
              <p>ID Verification</p>
            </div>

            <div class="columns">
              <div class="column is-6">
                <p><b>Personal ID</b></p>
                <img
                  :src="items.card_id"
                  alt=""
                >
              </div>
              <div class="column is-6">
                <p><b>Business ID</b></p>
                <img
                  :src="items.bussiness_id"
                  alt=""
                >
              </div>
            </div>



            <div class="clear" />
          </div>
        </div>
        <div class="column sidebar is-one-third">
          <button class="btn btn--primary btn--default btn--full padding-b-m">
            Save
          </button>

          <router-link to="/users">
            <button class="btn btn--transparent btn--default btn--full">
              Cancel
            </button>
          </router-link>

          <hr>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import moment from 'moment'
import axios from 'axios'
export default {
	data(){
    return {
      items: '',
      userUid: this.$route.params.user_uid,
      apiUrl: `${process.env.VUE_APP_API_BASE_URL}`,
      isLoading: false,
      accessToken: '',
      delete_status: '',
      hostId: '',
      item_host: '',
      total_packages: '',
      email: '',
      business_name: '',
      first_name: '',
      last_name: ''
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
    },

  },
  created () {
    this.$router.onReady(() => {
      if (this.$route.name === 'edithost') {
          if (!localStorage.accessToken) {
              this.$router.push({ path: '/' })
            }
            this.isLoading = true;
            axios.get(this.apiUrl + 'user/' + this.userUid)
              .then((res) => {
                console.log("RESPONSE RECEIVED: ", res)
                this.items = res.data.data

                if(this.items.host_id){
                  this.hostId = this.items.host_id
                }
                //add to model

                this.business_name = this.items.business_name;
                this.first_name = this.items.first_name;
                this.last_name = this.items.last_name;
                this.email = this.items.email;

                this.isLoading = false
              })
              .catch((err) => {
                console.log("AXIOS ERROR: ", err.response.data.title)
                this.isLoading = false
              })
      }
    })
  }
}
</script>
