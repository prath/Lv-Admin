<template>
  <tr>

    <td>
      <div class="wrapper">
        <div>
          <span class="info">{{ first_name + ' ' + last_name | ucwords }}</span> <br />
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
        </div>
      </div>
    </td>

    <td>
      <div class="wrapper">
        <span class="info">{{ email }}</span> <br />
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
          <router-link
            :to="{
              name: 'edithost',
              params: {
                id: user_uid
              }
          }">
            <a title="Edit User"><img
              src="@/assets/img/ic-edit-line.svg"
              title="Edit User"
            /></a>
          </router-link>

        </span>
      </div>
    </td>
  </tr>
</template>

<script>
import moment from 'moment'
import axios from 'axios'
import _ from 'lodash'

export default {
  name: 'UserList',
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
  props: {
    last_name: String,
    phone_number: String,
    host_id: String,
    first_name: String,
    user_uid: String,
    is_verified: Boolean,
    business_name: String,
    email: String
  },
  computed: {
    getSlug () {
      const firstname = _.kebabCase(this.first_name)
      const lastname = (this.last_name) ? '-' + _.kebabCase(this.last_name) : ''
      return `${firstname}${lastname}`
    }
  },
  data () {
    return {
      apiUrl: `${process.env.VUE_APP_API_BASE_URL}`,
      totalPackages: ''
    }
  },
  methods: {
    getTotalTour (hostId) {
      if (typeof (hostId) !== 'undefined' || hostId !== null) {
        axios.get(this.apiUrl + 'package/by-tourhosts/' + hostId)
          .then((res) => {
            this.totalPackages = res.data.data.length
          })
          .catch((err) => {
            console.log('AXIOS ERROR: ', err.response.data.title)
            this.isLoading = false
          })

        return this.totalPackages
      }
    }
  }
}
</script>
