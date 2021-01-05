<template>
  <div>
    <!-- Header User Dashboard -->
    <header class="header header--signup-dashboard">
      <div class="logo">
        <a href="#">
          <img
            src="../assets/img/logo-lokaventour.svg"
            alt=""
          />
        </a>

        <div class="field store-select">
          <div class="control">
            <p>Your Partner in Tour</p>
          </div>
        </div>
      </div>
    </header>
    <!-- End Header User Dashboard -->

    <div class="container">
      <div class="columns user-content">
        <div class="column is-two-thirds">
          <div class="page-heading">
            <h3>Selamat datang Kembali</h3>
            <p>
              Isikan form di bawah ini untuk mengisi informasi anda agar kami dapat memberikan suggest tour
              untuk anda.
            </p>
            <form @submit="checkForm">
              <div class="form-group column is-two-thirds">
                <input
                  v-model="email"
                  type="email"
                  class="form-control"
                  placeholder="Email / Username Anda"
                />
              </div>
              <div class="form-group column is-two-thirds">
                <input
                  v-model="password"
                  type="password"
                  class="form-control"
                  placeholder="password"
                />
              </div>

              <div class="form-group">
                <span
                  v-for="error in errors"
                  :key="error"
                  class="text-danger"
                >{{ error }} </span>
              </div>

              <button
                v-if="!isLoading"
                class="btn btn--primary btn--default btn-loader"
                @click="submit()"
              >
                Selanjutnya
              </button>
              <button
                v-if="isLoading"
                class="btn btn--primary btn--default btn-loader"
                @click="submit()"
              >
                <img
                  src="../assets/img/tail-spin.svg"
                  alt=""
                  class="img_button"
                />Processed
              </button>
            </form>
          </div>
        </div>

        <div class="column is-one-thirds is-centered">
          <img
            src="../assets/img/signup-art.png"
            alt=""
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      errors: [],
      email: '',
      password: '',
      apiUrl: `${process.env.VUE_APP_API_BASE_URL}auth/oauth/token`,
      isLoading: false,
      accessToken: '',
      hostId: ''
    }
  },
  mounted () {
    if (localStorage.accessToken) {
      this.accessToken = localStorage.accessToken
      this.$router.push({ path: '/dashboard' })
    }
  },

  methods: {
    submit () {
      this.isLoading = true
      var postData = {
        email: this.email,
        password: this.password
      }
      axios.post(this.apiUrl, postData)
        .then((res) => {
          console.log('RESPONSE RECEIVED: ', res)
          this.accessToken = res.data.credentials.access_token
          this.host_id = res.data.host_id

          localStorage.accessToken = this.accessToken
          localStorage.hostId = this.host_id

          this.$router.push({ path: '/dashboard' })
          this.isLoading = false
        })
        .catch((err) => {
          console.log('AXIOS ERROR: ', err.response.data.title)
          this.errors = []
          this.errors.push(err.response.data.title)
          this.isLoading = false
        })
    },
    checkForm: function (e) {
      if (this.email && this.password) {
        this.submit
      }

      if (!this.email) {

        // this.errors.push('Email required.');
      }
      if (!this.password) {

        // this.errors.push('Password required.');
      }

      e.preventDefault()
    }

  }
}
</script>

<style scoped>
.btn-loader{
  display: flex;
}
.img_button{
      margin: 0 10px 0 0 !important;
    display: block !important;
    width: 20px !important;
}
  .text-danger{
    color: #F05598 !important;
    margin-top: 5px !important;
    width: 100%;
  }
  .user-content form button{
    margin-top: 30px !important;
  }
</style>
