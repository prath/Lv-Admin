<template>
  <div class="column site-content">
    <div class="container-fluid">
      <!--
                ////////////////////////////////////////////////////
                more comming tour
            -->

      <hr class="space-lg">

      <div class="columns">
        <div class="column generic-heading is-two-third">
          <h3>Booking by Contact List Page</h3>
          <p>List of Booking by Contact</p>
        </div>

      </div>




      <div class="columns filter-table-list">
        <div class="column is-full filter-wrapper">

          <div class="form-group icon-search">
            <img
              src="../assets/img/ic-search.svg"
              alt=""
            >
            <input
              id="form1"
              type="text"
              class="form-control"
              placeholder="Find Booking by Contact"
            >
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

<style  scoped>
.text-primary{
  color: #7A5ACA !important;
}
</style>