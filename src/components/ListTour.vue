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
          <span class="info">{{ name }}</span>
          <p>{{ typeTrip }}</p>
        </div>
      </div>
    </td>

    <td>
      <div class="wrapper">
        <div class="flex item-durations" v-for="(item, i) in schedules" :key="i">
          <span class="info badges badges--verified"  v-if="i <= 0" >
            {{item.durations}} Hari
          </span>
        </div>

      </div>
    </td>
    <td>
      <div class="wrapper">

        <div class="flex item-durations" v-for="(item, i) in prices" :key="i">
          <span class="info "  v-if="i <= 0" >
           Rp. {{Number(item.price).toLocaleString('ID')}}
          </span>
        </div>
      </div>
    </td>

    <td>
      <div class="wrapper">
        <div class="flex item-durations" v-for="(item, i) in schedules" :key="i">
          <span class="info"  v-if="i <= 0" >
            {{item.start_date | formatDate}}
          </span>
        </div>
      </div>
    </td>

    <td>
      <div class="wrapper">
        <div class="flex item-durations" v-for="(item, i) in schedules" :key="i">
          <span class="info"  v-if="i <= 0" >
            {{item.end_date | formatDate}}
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
        <div class="flex item-durations" v-for="(item, i) in schedules" :key="i">
          <span class="info"  v-if="i <= 0" >
            {{item.tour_status}}
          </span>
        </div>
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
export default {
	name:'ListTour',
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
            'statusTour'
          ],
  filters: {
    formatDate: function (value) {
       if (value) {
        return moment(String(value)).format('MM/DD/YYYY')
      }
    }
  }
}
</script>