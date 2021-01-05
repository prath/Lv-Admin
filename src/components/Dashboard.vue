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

      <hr class="space-lg" />
      <div class="columns">

        <!-- STATS -->
        <div class="column is-half">

          <!-- total revenue -->
          <total-revenue />

        </div>

        <div class="column is-half">

          <!-- total booking -->
          <total-booking />

        </div>
      </div>

      <!--
        BOOKING BY CONTACT
      -->
      <div class="generic-heading">
        <h4>Bookings by Contact</h4>
        <p>Latest booking made by guests via contact booking directly to Lokaven</p>
      </div>

      <div class="columns">
        <div class="column is-full">

          <!-- booking by contact table -->
          <table-booking-by-contact />

        </div>
      </div>

      <!--
        NEAR END EXPERIENCES
       -->
      <div class="generic-heading">
        <h4>Nearly Ended Experiences</h4>
        <p>List of nearly ended experiences</p>
      </div>

      <div class="columns">
        <div class="column is-full">

            <!-- near end exp table -->
            <table-nearend-exp />

        </div>
      </div>
    </div>
  </div>
</template>

<script>

/**
 * DASHBOARD PAGE
 *
 * @todo
 * 1. need API to get total revenue
 * 2. need API to get total booking
 */

import axios from 'axios'
import moment from 'moment'
import TotalRevenue from '@/components/childcomponents/TotalRevenue'
import TotalBooking from '@/components/childcomponents/TotalBooking'
import TableBookingByContact from '@/components/childcomponents/TableBookingByContact.vue'
import TableNearendExp from '@/components/childcomponents/TableNearendExp.vue'

export default {
  name: 'App',
  components: {
    TotalRevenue,
    TotalBooking,
    TableBookingByContact,
    TableNearendExp
  },
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
      bookingList: '',
      bookingListDummy: [
        {
          id: '1',
          date: '12/12/2020',
          name: 'Linda Wardani',
          phone: '087637736212',
          email: 'linda12@gmail.com',
          participant: '3'
        },
        {
          id: '2',
          date: '10/12/2020',
          name: 'Asep Suryana',
          phone: '087637736212',
          email: 'Asep@gmail.com',
          participant: '5'
        },
        {
          id: '3',
          date: '09/12/2020',
          name: 'Dian Ayu',
          phone: '0879236298',
          email: 'dian_ayu@gmail.com',
          participant: '10'
        }

      ]
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
