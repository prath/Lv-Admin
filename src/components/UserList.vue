<template>
        <tr>
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
              <div>
                <span class="info">{{ first_name + ' ' + last_name | ucwords}}</span> <br>

                <p>
                    <span
                :class="(business_name ?
                  'badges--verified'
                  :
                  'badges--paid-off')"
                class="info badges mr-5"
              >{{ business_name ? 'Host' : 'Guest' }}</span>
                  <span
                    :class="(is_verified ?
                      'text-info'
                      :
                      'text-warning')"
                      class="badges"
                  >{{ is_verified ? 'Verified' : 'Unverified' }}</span>
                </p>
                <div />
              </div>
            </div>
          </td>

          <td>
            <div class="wrapper">
              <span class="info">{{ email }}</span> <br>
            </div>
          </td>

          <td>
            <div class="wrapper">
              <span class="info">{{ phone_number }}</span>
            </div>
          </td>

          <td>
            <div class="wrapper">
              <span class="info">{{ getTotalTour(host_id) }}</span>
            </div>
          </td>

          <td>
            <div class="wrapper">
              <span class="info icon">
                <router-link :to="'/edit-user-host/' + user_uid">
                  <a title="Edit User"><img
                    src="../assets/img/ic-edit-line.svg"
                    title="Edit User"
                  ></a>
                </router-link>
                <a title="Delete User"><img
                  src="../assets/img/ic-delete-line.svg"
                  title="Delete User"
                ></a>
              </span>
            </div>
          </td>
        </tr>
</template>

<script>
import moment from 'moment'
import axios from 'axios'
export default {
  name:'UserList',
  data(){
    return {
      apiUrl: `${process.env.VUE_APP_API_BASE_URL}`,
      totalPackages: ''
    }
  },
	props : [
            'first_name',
						'last_name',
            'phone_number',
            'host_id',
						'user_uid',
						'is_verified',
            'business_name',
            'email'
          ],
  filters: {
    formatDate: function (value) {
       if (value) {
        return moment(String(value)).format('DD MMM YY')
      }
    },
    ucwords (str) {
      return (str + '')
        .replace(/^(.)|\s+(.)/g, function ($1) {
          return $1.toUpperCase()
        })
    }
  },
  methods: {
   getTotalTour(host_id){
     if(typeof(host_id) !== 'undefined' || host_id !== null){
       axios.get(this.apiUrl + 'package/by-tourhosts/' + host_id)
            .then((res) => {
               this.totalPackages = res.data.data.length
            })
            .catch((err) => {
              console.log("AXIOS ERROR: ", err.response.data.title)
              this.isLoading = false
            })

            return this.totalPackages
     }
    }
  }
}
</script>