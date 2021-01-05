<template>
  <div class="column site-content">
    <div class="container-fluid">
      <!--
                ////////////////////////////////////////////////////
                more comming tour
            -->

      <hr class="space-lg" />

      <div class="columns">
        <div class="column generic-heading is-two-third">
          <h3>Active Tour</h3>
          <p>List of active tour : awaiting, ongoing & ended</p>
        </div>
      </div>

      <div class="tabs-lokaven">
        <a
          href="#"
          class="focus"
        >Awaiting</a>
        <a href="#">Ongoing</a>
        <a href="#">Ended</a>
      </div>

      <div class="columns filter-table-list">
        <div class="column is-full filter-wrapper">
          <!-- <div class="field filter-select">
            <div class="control">
              <div class="select">
                <select>
                  <option value="-">
                    Filter
                  </option>
                  <option value="by_date">
                    By Status
                  </option>
                  <option value="by_date">
                    By Types of Experience
                  </option>
                  <option value="by_date">
                    By Name
                  </option>
                  <option value="by_price">
                    By Place
                  </option>
                  <option value="by_category">
                    By Date
                  </option>
                </select>
              </div>
            </div>
          </div> -->
          <div class="form-group icon-search">
            <img
              src="../assets/img/ic-search.svg"
              alt=""
            />
            <input
              id="form1"
              type="text"
              class="form-control"
              placeholder="Find Active Tour"
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
                                            <a href="#"><img src="../assets/img/ic-delete.svg" alt="" /></a>
                                        -->
                  </div>
                </th>
                <th>Jadwal Tour</th>
                <th>Package</th>
                <th>Participant</th>
                <th>Total Booking</th>
                <th>Status Tour</th>
                <th></th>
              </tr>
            </thead>

            <tbody>
              <ListActiveTour
                v-for="(item, i) in items"
                :id="item.tour_id"
                :key="i"
                :jadwal-tour="item.created_at"
                :participant="1"
                :name="item.title"
                :schedules="item.schedules"
                :prices="item.prices"
                :location="item.location"
                :type-trip="item.type_tour"
                :host-id="item.host_id"
                :total-booking="4"
                :status-tour="'active'"
              />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ListActiveTour from './ListActiveTour'
import axios from 'axios'
export default {
  components: {
    ListActiveTour
  },
  data () {
    return {
      items: '',
      accessToken: '',
      apiUrl: `${process.env.VUE_APP_API_BASE_URL}`,
      isLoading: false,
      host: ''

    }
  },
  mounted () {
    if (!localStorage.accessToken) {
      this.$router.push({ path: '/' })
    }
    this.isLoading = true
    axios.get(this.apiUrl + 'package')
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
</script>
