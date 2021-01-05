<template>
  <table class="table is-fullwidth table--orders">
    <thead>
      <tr>
        <th>Name</th>
        <th>Business Name</th>
        <th>Signup as Host Date</th>
        <th>Verification Status</th>
        <th>Action</th>
      </tr>
    </thead>

    <!--
        PRELOADER
      -->
    <div v-if="!isLoaded">
      Loading....
    </div>
    <tbody v-else>
      <template v-for="(host, key) in filteredList">
        <tr :key="host.host_id">
          <td>
            <div class="wrapper">
              <div>
                <span
                  class="order_number"
                  :class="key"
                ><a href="">{{ host.first_name + ' ' + host.last_name }}</a></span>
              </div>
            </div>
          </td>

          <td>
            <div class="wrapper">
              <div>
                <span class="info">{{ host.business_name }}</span>
              </div>
            </div>
          </td>

          <td>
            <div class="wrapper">
              <div>
                <span class="info">{{ host.created_at | formatDate }}</span>
              </div>
            </div>
          </td>

          <td>
            <div class="wrapper">
              <div>
                <span
                  class="badges"
                  :class="status(host.card_id_status).className"
                >ID {{ status(host.card_id_status).name }}</span><br />
                <span
                  class="badges"
                  :class="status(host.bussiness_id_status).className"
                >Business ID {{ status(host.bussiness_id_status).name }}</span>
              </div>
            </div>
          </td>

          <td>
            <div class="wrapper">
              <span class="info icon">
                <!-- <router-link :to="'verification-detail/' + host.host_id"> -->
                <a
                  title="View Request"
                  @click="showModal(host.host_id)"
                ><img
                  src="assets/img/ic-edit-line.svg"
                  title="Edit User"
                /></a>
                <!-- </router-link> -->
              </span>
            </div>
          </td>
        </tr>
      </template>
    </tbody>
  </table>
</template>

<script>
export default {
  name: 'TableNewVerifications',
  props: {
    isLoaded: Boolean,
    filteredList: Object
  }

}
</script>

<style>

</style>