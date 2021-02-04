<template>
  <div class="column site-content">
    <div class="container-fluid">
      <div class="columns">
        <div class="column generic-heading is-two-third"></div>
      </div>

      <div class="columns">
        <div class="column is-two-third">
          <div class="card card--statistic">
            <div class="heading border">
              <h4>Booking Detail</h4>
            </div>

            <div class="sub-heading">
              <p>Info Booking</p>
            </div>

            <div class="columns is-gapless">
              <div class="column">
                <div class="form-group">
                  <label for="first_name">No Invoice</label>
                  <p>{{ items.invoice_number }}</p>
                </div>
              </div>
              <div class="column">
                <div class="form-group">
                  <label for="first_name">Tour Packages</label>
                  <router-link :to="'/packages-detail/'+items.tour_id">
                    <p class="text-primary">
                      <b>{{ items.title }}</b>
                    </p>
                  </router-link>
                </div>
              </div>
            </div>

            <div class="columns is-gapless">
              <div class="column">
                <div class="form-group">
                  <label for="first_name">User Info</label>
                  <p>{{ items.contact_info.first_name + items.contact_info.last_name }}</p>
                  <p>{{ '0' + items.contact_info.phone_number }}</p>
                  <p class="text-primary">
                    <a :href="'mailto:'+items.contact_info.email">{{ items.contact_info.email }}</a>
                  </p>
                  <p>Total Paid: <b>Rp.{{ Number(items.total_paid_price).toLocaleString('id') }},-</b></p>
                </div>
              </div>

              <div class="column">
                <div class="form-group">
                  <label for="first_name">Total Books</label>
                  <p v-if="items.qty_adults > 0">
                    {{ items.qty_adults }} Person
                  </p>
                  <p v-if="itemsqty_kids > 0">
                    {{ items.qty_kids }} Child
                  </p>
                </div>
                <div class="form-group">
                  <label for="last_name">Status</label>
                  <p>{{ items.status | ucwords }}</p>
                </div>
              </div>
            </div>

            <div class="clear"></div>
          </div>
        </div>
        <div class="column sidebar is-one-third">
          <router-link
            to="/booking-list"
          >
            <button
              class="btn btn--transparent btn--default btn--full"
            >
              Back
            </button>
          </router-link>

          <hr />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import moment from 'moment'
import axios from 'axios'
export default {
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
    ucwords (str) {
      return (str + '')
        .replace(/^(.)|\s+(.)/g, function ($1) {
          return $1.toUpperCase()
        })
    }

  },
  data () {
    return {
      items: '',
      orderId: this.$route.params.id_order,
      apiUrl: `${process.env.VUE_APP_API_BASE_URL}`,
      isLoading: false,
      accessToken: '',
      status_booking: ''
    }
  },
  created () {
    this.$router.onReady(() => {
      if (this.$route.name === 'bookingdetail') {
        if (!localStorage.accessToken) {
          this.$router.push({ path: '/' })
        } else {
          this.accessToken = localStorage.accessToken
          this.hostId = localStorage.hostId
        }

        this.isLoading = true

        var header = {
          headers: {
            Authorization: `Bearer ${this.accessToken}`
          }
        }

        axios.get(this.apiUrl + 'auth/orders/detail/' + this.orderId, header)
          .then((res) => {
            console.log('RESPONSE RECEIVED: ', res)
            this.items = res.data.data
            this.isLoading = false

            this.status_booking = this.items.status

            /*
                this.getHost(this.items.host_id);
                this.getTotalTour(this.items.host_id);
                */
          })
          .catch((err) => {
            console.log('AXIOS ERROR: ', err.response.data.title)
            this.isLoading = false
          })
      }
    })
  },
  methods: {
    getHost: function (hostId) {
      if (hostId) {
        axios.get(this.apiUrl + 'host/get/' + hostId)
          .then((res) => {
            console.log('RESPONSE RECEIVED: ', res)
            this.item_host = res.data.data
            this.isLoading = false
          })
          .catch((err) => {
            console.log('AXIOS ERROR: ', err.response.data.title)
            this.isLoading = false
          })
      }
    },
    getTotalTour: function (hostId) {
      if (hostId) {
        axios.get(this.apiUrl + 'package/by-tourhosts/' + hostId)
          .then((res) => {
            console.log('RESPONSE RECEIVED: ', res)
            this.total_packages = res.data.data
            this.isLoading = false
          })
          .catch((err) => {
            console.log('AXIOS ERROR: ', err.response.data.title)
            this.isLoading = false
          })
      }
    }
  }
}
</script>
