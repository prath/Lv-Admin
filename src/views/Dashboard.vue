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
          <total-booking/>

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
          <table-booking-by-contact
            :bookings="bookingListDummy"
          />

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

// internal modules
import auth from '@/mixins/auth'
import formatting from '@/mixins/formatting'

// external modules

// components & views
import TotalRevenue from '@/components/cards/TotalRevenue'
import TotalBooking from '@/components/cards/TotalBooking'
import TableBookingByContact from '@/components/tables/TableBookingByContact.vue'

export default {
  name: 'App',
  components: {
    TotalRevenue,
    TotalBooking,
    TableBookingByContact
  },
  mixins: [auth, formatting],
  data () {
    return {
      accessToken: '',
      isLoading: false,
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
  }
}
</script>
