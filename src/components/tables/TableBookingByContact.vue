<template>
  <table class="table is-fullwidth table--orders">
    <thead>
      <tr>
        <th>Order Date</th>
        <th>Fullname</th>
        <th>Phone</th>
        <th>Email</th>
        <th>Total Participant</th>
      </tr>
    </thead>

    <tbody>
      <tr v-for="(booking, i) in bookings" :key="i">

        <td>
          <div class="wrapper">
            <span class="order_number"> asdsad{{ booking.date }}</span> <br />
          </div>
        </td>

        <td>
          <div class="wrapper">
            <span class="order_number">{{ booking.name }}</span> <br />
          </div>
        </td>
        <td>
          <div class="wrapper">
            <span class="info">{{ booking.phone }}</span> <br />
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
                  src="@/assets/img/ic-edit-line.svg"
                  title="Edit User"
                /></a>
              </router-link>
            </span>
          </div>
        </td>
      </tr>

    </tbody>
  </table>
</template>

<script>

/**
 * BOOKING BY CONTACT
 *
 * @todo
 * - Still dummy
 */

export default {
  name: 'TableBookingByContact',
  props: {
    bookings: Array
  }
}
</script>

<style>

</style>
