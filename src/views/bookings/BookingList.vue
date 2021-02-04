<template>
  <div class="column site-content">
    <div class="container-fluid">
      <!--
                ////////////////////////////////////////////////////
                more comming tour
            -->

      <hr class="space-lg" />

      <div class="columns">
        <div class="column generic-heading is-two-third">
          <h3>Booking List</h3>
          <p>List of Booking List</p>
        </div>
      </div>

      <div class="columns filter-table-list">
        <div class="column is-full filter-wrapper">
          <div class="field filter-select">
            <div class="control">
              <div class="select">
                <select>
                  <option value="-">
                    Filter
                  </option>
                  <option value="by_date">
                    By Order
                  </option>
                  <option value="by_price">
                    By Status
                  </option>
                </select>
              </div>
            </div>
          </div>
          <div class="form-group icon-search">
            <img
              src="@/assets/img/ic-search.svg"
              alt=""
            />
            <input
              id="form1"
              type="text"
              class="form-control"
              placeholder="Find Booking"
            />
          </div>
        </div>
      </div>

      <div class="columns">
        <div class="column is-full">
          <table class="table is-fullwidth table--orders">
            <thead>
              <tr>
                <th>
                  <div class="action-wrapper">
                    <div class="form-check">
                      <label class="container">
                        <input
                          type="checkbox"
                          checked="checked"
                        />
                        <span class="checkmark"></span>
                      </label>
                    </div>
                  <!--
                                            SHow when Checkbox Clicked
                                            <a href="#"><img src="@/assets/img/ic-delete.svg" alt="" /></a>
                                        -->
                  </div>
                </th>

                <th>Order Number</th>
                <th>Tour Name</th>
                <th>Participants</th>
                <th>Host</th>
                <th>Schedule</th>

                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              <template v-for="(booking, i) in bookingList">
                <tr :key="i">
                  <td>
                    <div class="wrapper">
                      <div class="form-check">
                        <label class="container">
                          <input
                            type="checkbox"
                          />
                          <span class="checkmark"></span>
                        </label>
                      </div>
                    </div>
                  </td>

                  <td>
                    <div class="wrapper">
                      <span class="order_number">{{ booking.order_number }}</span> <br />
                    </div>
                  </td>

                  <td>
                    <div class="wrapper flex-column items-start">
                      <router-link :to="'/packages-detail/'+booking.tour_id">
                        <span class="info text-primary">{{ booking.title }}</span>
                      </router-link>
                      <span class="info mt-10">{{ booking.type_tour === 'close' ? 'A Private Tour' : 'A Open Tour' }} by: {{ booking.host_name }}</span><br />
                    </div>
                  </td>
                  <td>
                    <div class="wrapper">
                      <span class="info">{{ booking.participants.length }}</span> <br />
                    </div>
                  </td>

                  <td>
                    <div class="wrapper">
                      <span class="info">{{ booking.host_name }}</span>
                    </div>
                  </td>

                  <td>
                    <div class="wrapper flex-column">
                      <span class="info">{{ booking.start_date | formatDate }}</span> s/d
                      <span class="info">{{ booking.end_date | formatDate }}</span>
                    </div>
                  </td>

                  <td>
                    <div class="wrapper">
                      <span
                        v-if="booking.status==='unpaid'"
                        class="info badges badges--wait-payment"
                      >{{ booking.status }}</span>

                      <span
                        v-if="booking.status==='paid'"
                        class="info badges badges--paid-off"
                      >{{ booking.status }}</span>
                    </div>
                  </td>

                  <td>
                    <div class="wrapper">
                      <span class="info icon">
                        <router-link :to="'booking-edit/'+booking.order_id">
                          <a title="Edit Refund"><img
                            src="@/assets/img/ic-edit-line.svg"
                            title="Edit User"
                          /></a>
                        </router-link>
                      </span>
                    </div>
                  </td>
                </tr>
              </template>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
import moment from 'moment'
export default {
  filters: {
    formatDate: function (value) {
      if (value) {
        return moment(String(value)).format('DD/MM/YYYY')
      }
    }
  },
  data () {
    return {
      accessToken: '',
      isLoading: false,
      apiUrl: `${process.env.VUE_APP_API_BASE_URL}`,
      bookingList: ''
    }
  },
  mounted () {
    if (!localStorage.accessToken) {
      this.$router.push({ path: '/' })
    } else {
      this.accessToken = localStorage.accessToken
    }

    var header = {
      headers: {
        Authorization: `Bearer ${this.accessToken}`
      }
    }

    this.isLoading = true
    axios.get(this.apiUrl + 'auth/orders/list-admin?page=1&per_page=100&param=booking', header)
      .then((res) => {
        console.log('RESPONSE RECEIVED: ', res)
        this.bookingList = res.data.data
        this.isLoading = false
      })
      .catch((err) => {
        console.log('AXIOS ERROR: ', err.response.data.title)
        if (err.response.status === 401) {
          localStorage.removeItem('accessToken')
          localStorage.removeItem('hostId')
          this.$router.push({ path: '/' })
        }
        this.isLoading = false
      })
  }
}
</script>

<style  scoped>
.text-primary{
  color: #7A5ACA !important;
}
</style>
