<template>
  <div class="column site-content">
    <div class="container-fluid">

      <div class="generic-heading">
          <h3> 
            Greetings, Admin
          </h3> 
          <p>
            How are you today? hope you're doing okay
          </p>
      </div>

      <!--
                ////////////////////////////////////////////////////
                Total Revenue
            -->

      <hr class="space-lg">
      <div class="columns">
        <div class="column is-half">
          <div class="card card--statistic">
            <div class="heading">
              <h4>Total Revenue</h4>

              <div class="info">
                <div class="img">
                  <img
                    src="../assets/img/ic-wallet-grey.svg"
                    alt=""
                  >
                </div>
                <div class="description">
                  <h4 class="text-info">
                    Rp.450.143.902,-
                  </h4>
                  <p class="accent">
                    in November
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="column is-half">
          <div class="card card--statistic">
            <div class="heading">
              <h4>Total Booking</h4>

              <div class="info">
                <div class="img">
                  <img
                    src="../assets/img/ic-visitor.svg"
                    alt=""
                  >
                </div>
                <div class="description">
                  <h4 class="text-success">
                    1.203 Tour
                  </h4>
                  <p class="accent">
                    in November
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>



      <!--
                ////////////////////////////////////////////////////
                Contact Bookings List
                -->

      <div class="generic-heading">
        <h4>Bookings by Contact</h4>
        <p>Latest booking made by guests via contact booking directly to Lokaven</p>
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
                        >
                        <span class="checkmark" />
                      </label>
                    </div>
                  <!--
                                            SHow when Checkbox Clicked
                                            <a href="#"><img src="../assets/img/ic-delete.svg" alt="" /></a>
                                        -->
                  </div>
                </th>

                <th>Order Date</th>
                <th>Fullname</th>
                <th>Phone</th>
                <th>Email</th>
                <th>Total Participant</th>
              </tr>
            </thead>

            <tbody>
              <template v-for="(booking, i) in bookingListDummy" >
                <tr :key="i">
                  <td>
                    <div class="wrapper">
                      <div class="form-check">
                        <label class="container">
                          <input
                            type="checkbox"
                          >
                          <span class="checkmark" />
                        </label>
                      </div>
                    </div>
                  </td>

                  <td>
                    <div class="wrapper">
                      <span class="order_number">{{ booking.date }}</span> <br>
                    </div>
                  </td>

                  <td>
                    <div class="wrapper">
                      <span class="order_number">{{ booking.name }}</span> <br>
                    </div>
                  </td>
                  <td>
                    <div class="wrapper">
                      <span class="info">{{ booking.phone }}</span> <br>
                    </div>
                  </td>

                  <td>
                    <div class="wrapper">
                      <span class="info">{{ booking.email }}</span>
                    </div>
                  </td>

                  <td align="center">
                    <div class="wrapper text-center">
                      <span class="info">{{ booking.participant }}</span>
                    </div>
                  </td>



                  <td>
                    <div class="wrapper">
                      <span class="info icon">
                        <router-link :to="'booking-edit/'+booking.id">
                          <a title="Edit Refund"><img
                            src="../assets/img/ic-edit-line.svg"
                            title="Edit User"
                          ></a>
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


      <!--
                ////////////////////////////////////////////////////
                more comming tour
                -->
      <div class="generic-heading">
        <h4>Nearly Ended Experiences</h4>
        <p>List of nearly ended experiences</p>
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
                        >
                        <span class="checkmark" />
                      </label>
                    </div>
                    <!-- SHow when Checkbox Clicked
                                                <a href="#"><img src="../assets/img/ic-delete.svg" alt="" /></a>
                                                -->
                  </div>
                </th>

                <th>Experience</th>
                <th>Start Date</th>
                <th>End Date</th>
                <th>Participants</th>
                <th>Ended in</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>
                  <div class="wrapper">
                    <div class="form-check">
                      <label class="container">
                        <input
                          type="checkbox"
                          checked="checked"
                        >
                        <span class="checkmark" />
                      </label>
                    </div>
                  </div>
                </td>

                <td>
                  <div class="wrapper">
                    <div>
                      <span class="order_number"><a href="">Kayaking di Perairan Bandung</a></span>
                      <span class="info"><a href="">Hosted by: Aniqma Experiences</a></span>
                    </div>
                  </div>
                </td>

                <td>
                  <div class="wrapper">
                    <span class="info">22 April 2018</span> <br>
                  </div>
                </td>
                <td>
                  <div class="wrapper">
                    <span class="info">29 April 2018</span> <br>
                  </div>
                </td>

                <td>
                  <div class="wrapper">
                    <span class="info">4 Person</span>
                  </div>
                </td>
                <td>
                  <div class="wrapper">
                    <span class="badges badges--processed">4 days left</span>
                  </div>
                </td>
              </tr>

              <tr>
                <td>
                  <div class="wrapper">
                    <div class="form-check">
                      <label class="container">
                        <input
                          type="checkbox"
                          checked="checked"
                        >
                        <span class="checkmark" />
                      </label>
                    </div>
                  </div>
                </td>

                <td>
                  <div class="wrapper">
                    <div>
                      <span class="order_number"><a href="">Hang Gliding Tandem</a></span>
                      <span class="info"><a href="">Hosted by: Athria</a></span>
                    </div>
                  </div>
                </td>

                <td>
                  <div class="wrapper">
                    <span class="info">22 April 2018</span> <br>
                  </div>
                </td>
                <td>
                  <div class="wrapper">
                    <span class="info">29 April 2018</span> <br>
                  </div>
                </td>

                <td>
                  <div class="wrapper">
                    <span class="info">4 Person</span>
                  </div>
                </td>
                <td>
                  <div class="wrapper">
                    <span class="badges badges--processed">4 days left</span>
                  </div>
                </td>
              </tr>

              <tr>
                <td>
                  <div class="wrapper">
                    <div class="form-check">
                      <label class="container">
                        <input
                          type="checkbox"
                          checked="checked"
                        >
                        <span class="checkmark" />
                      </label>
                    </div>
                  </div>
                </td>

                <td>
                  <div class="wrapper">
                    <div>
                      <span class="order_number"><a href="">Hang Gliding Tandem</a></span>
                      <span class="info"><a href="">Hosted by: Magno</a></span>
                    </div>
                  </div>
                </td>

                <td>
                  <div class="wrapper">
                    <span class="info">22 April 2018</span> <br>
                  </div>
                </td>
                <td>
                  <div class="wrapper">
                    <span class="info">29 April 2018</span> <br>
                  </div>
                </td>

                <td>
                  <div class="wrapper">
                    <span class="info">4 Person</span>
                  </div>
                </td>
                <td>
                  <div class="wrapper">
                    <span class="badges badges--processed">4 days left</span>
                  </div>
                </td>
              </tr>

              <tr>
                <td>
                  <div class="wrapper">
                    <div class="form-check">
                      <label class="container">
                        <input
                          type="checkbox"
                          checked="checked"
                        >
                        <span class="checkmark" />
                      </label>
                    </div>
                  </div>
                </td>

                <td>
                  <div class="wrapper">
                    <div>
                      <span class="order_number"><a href="">Naik Land Rover Keliling Bandung</a></span>
                      <span class="info"><a href="">Hosted by: Lokaven</a></span>
                    </div>
                  </div>
                </td>

                <td>
                  <div class="wrapper">
                    <span class="info">01 Mei 2019</span> <br>
                  </div>
                </td>
                <td>
                  <div class="wrapper">
                    <span class="info">29 April 2018</span> <br>
                  </div>
                </td>

                <td>
                  <div class="wrapper">
                    <span class="info">10 Person</span>
                  </div>
                </td>
                <td>
                  <div class="wrapper">
                    <span class="badges badges--processed">4 days left</span>
                  </div>
                </td>
              </tr>

              <tr>
                <td>
                  <div class="wrapper">
                    <div class="form-check">
                      <label class="container">
                        <input
                          type="checkbox"
                          checked="checked"
                        >
                        <span class="checkmark" />
                      </label>
                    </div>
                  </div>
                </td>

                <td>
                  <div class="wrapper">
                    <div>
                      <span class="order_number"><a href="">Naik Land Rover Keliling Bandung</a></span>
                      <span class="info"><a href="">Hosted by: Bobond</a></span>
                    </div>
                  </div>
                </td>

                <td>
                  <div class="wrapper">
                    <span class="info">01 Mei 2019</span> <br>
                  </div>
                </td>
                <td>
                  <div class="wrapper">
                    <span class="info">29 April 2018</span> <br>
                  </div>
                </td>

                <td>
                  <div class="wrapper">
                    <span class="info">10 Person</span>
                  </div>
                </td>
                <td>
                  <div class="wrapper">
                    <span class="badges badges--processed">4 days left</span>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
// import GuestChart from './GuestChart'
// import HostChart from './HostChart'

import axios from 'axios'
import moment from 'moment'
export default {
  name: 'App',
  components : {
    // 'GuestChart' : GuestChart,
    // 'HostChart' : HostChart
  },
  data(){
		return {
      accessToken: '',
      isLoading: false,
      apiUrl: `${process.env.VUE_APP_API_BASE_URL}`,
      bookingList: '',
      bookingListDummy : [
                  {
                    "id": '1' ,
                    "date": '12/12/2020',
                    "name": 'Linda Wardani',
                    "phone": '087637736212',
                    "email": 'linda12@gmail.com',
                    "participant": '3'
                  },
                   {
                    "id": '2' ,
                    "date": '10/12/2020',
                    "name": 'Asep Suryana',
                    "phone": '087637736212',
                    "email": 'Asep@gmail.com',
                    "participant": '5'
                  },
                  {
                    "id": '3' ,
                    "date": '09/12/2020',
                    "name": 'Dian Ayu',
                    "phone": '0879236298',
                    "email": 'dian_ayu@gmail.com',
                    "participant": '10'
                  },

        ]
      }
   },
   filters: {
    formatDate: function (value) {
       if (value) {
        return moment(String(value)).format('DD/MM/YYYY')
      }
    }
  },
   mounted() {
      if (!localStorage.accessToken) {
        this.$router.push({ path: '/' })
      }else{
        this.accessToken = localStorage.accessToken
      }

      var header = {
                      headers: {
                        'Authorization': `Bearer ${this.accessToken}`
                      }
                    }

      this.isLoading = true;
      axios.get(this.apiUrl + 'auth/orders/list-admin?page=1&per_page=100&param=booking',header)
        .then((res) => {
          console.log("RESPONSE RECEIVED: ", res)
          this.bookingList = res.data.data
          this.isLoading = false

        })
        .catch((err) => {
          console.log("AXIOS ERROR: ", err.response.data.title)
          if(err.response.status === 401){
            localStorage.removeItem('accessToken');
            localStorage.removeItem('hostId');
            this.$router.push({ path: '/' })
          }
          this.isLoading = false
        })
    },
}
</script>