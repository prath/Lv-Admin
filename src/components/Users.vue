<template>
  <div class="column site-content">
    <div class="container-fluid">
      <!--
                ////////////////////////////////////////////////////
                more comming tour
            -->

      <hr class="space-lg">
      <form action="user-add.html">
        <div class="columns">
          <div class="column generic-heading is-two-third">
            <h3>Host & Guest List</h3>
            <p>List of Guest & Host</p>
          </div>

          <div class="column generic-heading is-one-third flex end-xs ">
            <router-link to="/add-user">
              <button class="btn btn--medium btn--primary ">
                Add Host
              </button>
            </router-link>
          </div>
        </div>
      </form>


      <div class="columns filter-table-list">
        <div class="column is-full filter-wrapper">
          <div class="field filter-select">
            <div class="control">
              <div class="select">
                <select>
                  <option value="-">
                    Filter
                  </option>
                  <option value="by_date">
                    By Name
                  </option>

                  <option value="by_date">
                    By Status
                  </option>

                  <option value="by_price">
                    By Role
                  </option>
                  <option value="by_category">
                    By Gender
                  </option>
                </select>
              </div>
            </div>
          </div>
          <div class="form-group icon-search">
            <img
              src="../assets/img/ic-search.svg"
              alt=""
            >
            <input
              v-model="search"
              v-on:input="searchUser()"
              id="form1"
              type="text"
              class="form-control"
              placeholder="Find Host & Guest"
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

                <th>Name</th>
                <th>Role</th>
                <th>Email</th>
                <th>Gender</th>
                <th>Phone</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              <template v-for="(user, i) in items">
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
                      <div>
                        <span class="info">{{ user.first_name + ' ' + user.last_name | ucwords}}</span> <br>

                        <p>
                          <span
                            :class="(user.is_verified ?
                              'text-info'
                              :
                              'text-warning')"
                          >{{ user.is_verified ? 'Verified' : 'Unverified' }}</span>
                        </p>
                        <div />
                      </div>
                    </div>
                  </td>

                  <td>
                    <div class="wrapper">
                      <span
                        :class="(user.business_name ?
                          'badges--verified'
                          :
                          'badges--paid-off')"
                        class="info badges"
                      >{{ user.business_name ? 'Host' : 'Guest' }}</span> <br>
                    </div>
                  </td>
                  <td>
                    <div class="wrapper">
                      <span class="info">{{ user.email }}</span> <br>
                    </div>
                  </td>

                  <td>
                    <div class="wrapper">
                      <span class="info">{{ user.gender }}</span>
                    </div>
                  </td>

                  <td>
                    <div class="wrapper">
                      <span class="info">{{ user.phone }}</span>
                    </div>
                  </td>

                  <td>
                    <div class="wrapper">
                      <span class="info icon">
                        <router-link :to="'/edit-user-host/' + user.host_id">
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
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data(){
		return {
      items: '',
      accessToken: '',
      apiUrl: `${process.env.VUE_APP_API_BASE_URL}`,
      isLoading: false,
      search: ''
   }
    },
   mounted() {
       if (!localStorage.accessToken) {
        this.$router.push({ path: '/' })
      }else{
        this.accessToken = localStorage.accessToken
      }
      this.isLoading = true;
      var header = {
                      headers: {
                        'Authorization': `Bearer ${this.accessToken}`
                      }
                    }
      axios.get(this.apiUrl + 'host/list?per_page=100&page=1&param=all', header)
        .then((res) => {
          console.log("RESPONSE RECEIVED: ", res)
          this.items = res.data.data
          this.isLoading = false

        })
        .catch((err) => {
          console.log("AXIOS ERROR: ", err.response.data.title)
          this.isLoading = false
        })
    },
    methods: {
      searchUser(){

        var header = {
                  headers: {
                    'Authorization': `Bearer ${this.accessToken}`
                  }
                }
        axios.get(this.apiUrl + 'host/list?per_page=100&page=1&param=all&key=' + this.search , header)
          .then((res) => {
            console.log("RESPONSE RECEIVED: ", res)
            this.items = res.data.data
            this.isLoading = false

          })
          .catch((err) => {
            console.log("AXIOS ERROR: ", err.response.data.title)
            this.isLoading = false
          })
      }
    },
    filters : {
      ucwords (str) {
        return (str + '')
          .replace(/^(.)|\s+(.)/g, function ($1) {
            return $1.toUpperCase()
          })
      }
    },


}
</script>