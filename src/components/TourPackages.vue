<template>
  <div class="column site-content">
    <div class="container-fluid">
      <!--
                ////////////////////////////////////////////////////
                more comming tour
            -->

      <hr class="space-lg">

      <div class="columns">
        <div class="column generic-heading is-two-third">
          <h3>Tour Packages</h3>
          <p>List of Tour Packages</p>
        </div>

        <div class="column generic-heading is-one-third flex end-xs">
          <button class="btn btn--medium btn--primary is-right">
            Add Tour Packages
          </button>
        </div>
      </div>


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
                    By Types of Tour
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
          </div>
          <div class="form-group icon-search">
            <img
              src="assets/img/ic-search.svg"
              alt=""
            >
            <input
              id="form1"
              type="text"
              class="form-control"
              placeholder="Find Tour"
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
                                            <a href="#"><img src="assets/img/ic-delete.svg" alt="" /></a>
                                        -->
                  </div>
                </th>

                <th>Tour</th>
                <th>Duration</th>
                <th>Price</th>
                <th>Start Date</th>
                <th>End Date</th>
                <th>Location</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              <ListTour
                :name="item.name"
                :duration="item.duration"
                :price="item.price"
                :dateFrom="item.date_from"
                :dateTo="item.date_to"
                :location="item.location"
                :typeTrip="item.type_trip"
                v-for="item in items"
              />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ListTour from "./ListTour"
export default {
  components : {
    ListTour
  },
  data(){
		return {

      items : [
                  {
                    "id": '1' ,
                    "name": 'Kayaking di Perairan Bandung',
                    "duration": '1 Day',
                    "date_from": '01/12/2019',
                    "date_to": '02/12/2019',
                    "price": 'Rp.450.000,- / pax',
                    "location": 'Bandung',
                    "type_trip" : 'Open Trip'
                  },
                  {
                    "id": '2' ,
                    "name": 'Hang Gliding Tandem',
                    "duration": '2 Day',
                    "date_from": '01/12/2019',
                    "date_to": '02/12/2019',
                    "price": 'Rp.765.000,- / pax',
                    "location": 'Bogor',
                    "type_trip" : 'Private Trip'
                  },
                  {
                    "id": '3' ,
                    "name": 'Barbecue Party di Outdoor, Bandung',
                    "duration": '3 Day',
                    "date_from": '01/12/2019',
                    "price": 'Rp.1.765.000,- / pax',
                    "date_to": '02/12/2019',
                    "location": 'Bogor',
                    "type_trip" : 'Open Trip'
                  }
        ]

      }
   }
}
</script>