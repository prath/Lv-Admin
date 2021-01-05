<template>
  <div class="column site-content">
    <div class="container-fluid">
      <!--
                ////////////////////////////////////////////////////
                more comming tour
            -->

      <hr class="space-lg" />
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
          <div class="form-group icon-search">
            <img
              src="@/assets/img/ic-search.svg"
              alt=""
            />
            <input
              id="form1"
              v-model="search"
              type="text"
              class="form-control"
              placeholder="Find Host & Guest"
              @input="searchUser()"
            />
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
                        />
                        <span class="checkmark"></span>
                      </label>
                    </div>
                    <!--
                                            SHow when Checkbox Clicked
                                            <a href="#"><img src="@/assets/img/ic-delete.svg" alt="" /></a>
                                        -->
                  </div>
                </th>

                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Total Tour Packages</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              <UserList
                v-for="(item, i) in items"
                :key="i"
                :first_name="item.first_name"
                :last_name="item.last_name"
                :phone_number="item.phone_number"
                :host_id="item.host_id"
                :email="item.email"
                :user_uid="item.user_uid"
                :is_verified="item.is_verified"
                :business_name="item.business_name"
              />
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <div class="modalshow hide">
      <div class="body">
        <h4>Nonaktifkan Akun? <a href="#">X</a></h4>
        <p>Anda yakin akan menonaktifkan user ini? user akan inactive setelahnya dan tidak dapat lagi melakukan berbagai aktifitas di platform lokaven</p>

        <div class="action">
          <a
            href="#"
            class="btn cancel"
          >Cancel</a>
          <a
            href="#"
            class="btn hapus"
          >Ya, Hapus</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import UserList from './UserList'
export default {
  components: {
    UserList
  },
  data () {
    return {
      items: '',
      accessToken: '',
      apiUrl: `${process.env.VUE_APP_API_BASE_URL}`,
      isLoading: false,
      search: '',
      total_packages: ''
    }
  },
  mounted () {
    if (!localStorage.accessToken) {
      this.$router.push({ path: '/' })
    } else {
      this.accessToken = localStorage.accessToken
    }
    this.isLoading = true
    var header = {
      headers: {
        Authorization: `Bearer ${this.accessToken}`
      }
    }
    axios.get(this.apiUrl + 'host/list?per_page=5&page=1&param=all', header)
      .then((res) => {
        console.log('RESPONSE RECEIVED: ', res)
        this.items = res.data.data
        this.isLoading = false
      })
      .catch((err) => {
        console.log('AXIOS ERROR: ', err.response.data.title)
        console.log('AXIOS ERROR: ', err.response.status)
        if (err.response.status === 401) {
          localStorage.removeItem('accessToken')
          localStorage.removeItem('hostId')
          this.$router.push({ path: '/' })
        }
        this.isLoading = false
      })
  },
  methods: {
    searchUser () {
      var header = {
        headers: {
          Authorization: `Bearer ${this.accessToken}`
        }
      }
      axios.get(this.apiUrl + 'host/list?per_page=20&page=1&param=all&key=' + this.search, header)
        .then((res) => {
          console.log('RESPONSE RECEIVED: ', res)
          this.items = res.data.data
          this.isLoading = false
        })
        .catch((err) => {
          console.log('AXIOS ERROR: ', err.response.data.title)
          this.isLoading = false
        })
    }
  }

}
</script>
