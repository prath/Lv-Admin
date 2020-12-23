<template>
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
          <router-link :to="typeTrip === 'open' ? 'tour-packages-detail/' + id : 'tour-packages-detail-private/' + id">
            <a href=""><span class="title">{{ name }}</span></a>
          </router-link>
          <span class="info"><a href="">Hosted by: {{getDataHost(hostId)}}</a></span>
        </div>
      </div>
    </td>

    <!-- <td>
      <div class="wrapper">
        <div class="flex item-durations" v-for="(item, i) in schedules" :key="i">
          <span  v-if="i <= 0" >
            {{item.durations}} Hari
          </span>
        </div>

      </div>
    </td> -->

    <td>
      <div class="wrapper">

        <div class="flex item-durations" v-for="(item, i) in prices" :key="i">
          <span class="info "  v-if="i <= 0" >
           <span class="muted-info">From</span> Rp. {{Number(item.price).toLocaleString('ID')}}
          </span>
        </div>
      </div>
    </td>

    <td>
      <div class="wrapper">
        <div class="flex item-durations" v-for="(item, i) in schedules" :key="i">
          <span class="info" v-if="i <= 0">
            {{schedules.length}} <span class="muted-info"> schedules</span>
            <!-- {{item.start_date | formatDate}} <span class="muted-info">-</span> {{item.end_date | formatDate}} -->
          </span>
        </div>
      </div>
    </td>

    <td>
      <div class="wrapper">
        <span class="info">{{ location }}</span>
      </div>
    </td>

    <td>
      <div class="wrapper">
        <span class="info icon">
          <router-link :to="typeTrip === 'open' ? 'tour-packages-detail/' + id : 'tour-packages-detail-private/' + id">
            <a title="Edit User"><img
              src="assets/img/ic-edit-line.svg"
              title="Edit User"
            ></a>
          </router-link>


        </span>
      </div>
    </td>
  </tr>
</template>

<style scoped>
  .item-durations{
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }
  .item-durations span{
      margin-bottom: 5px;
  }
</style>

<script>
import moment from 'moment'
import axios from 'axios'
export default {
  name:'ListTour',
  data(){
    return {
      apiUrl: `${process.env.VUE_APP_API_BASE_URL}`,
      hostName: ''
    }
  },
	props : [
            'id',
            'schedules',
						'name',
            'duration',
            'typeTrip',
						'prices',
						'dateFrom',
						'dateTo',
            'location',
            'statusTour',
            'hostId'
          ],
  filters: {
    formatDate: function (value) {
       if (value) {
        return moment(String(value)).format('DD MMM YY')
      }
    }
  },
  methods: {
   getDataHost(hostId){
       axios.get(this.apiUrl + 'host/get/' + hostId)
            .then((res) => {
              console.log("RESPONSE RECEIVED: ", res.data.data.business_name)
               this.hostName =  res.data.data.business_name
            })
            .catch((err) => {
              console.log("AXIOS ERROR: ", err.response.data.title)
              this.isLoading = false
            })

            return this.hostName
    }
  }
}
</script>