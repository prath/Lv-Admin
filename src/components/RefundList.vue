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
          <h3>Refund List</h3>
          <p>List of Refund List</p>
        </div>

        <div class="column generic-heading is-one-third flex end-xs ">
          <router-link to="/refund-add">
            <button class="btn btn--medium btn--primary is-right">
              Add Refund
            </button>
          </router-link>
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
                    By Order
                  </option>
                  <option value="by_price">
                    By Status
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
              placeholder="Find Refund"
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

                <th>Booking</th>
                <th>Nominal</th>
                <th>Date</th>
                <th>Host</th>
                <th>Guest</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              <template v-for="(refund) in refundList">
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
                      <span class="order_number">{{ refund.bookingNo }}</span> <br>
                    </div>
                  </td>

                  <td>
                    <div class="wrapper">
                      <span class="info">Rp.{{ refund.nominal }},-</span> <br>
                    </div>
                  </td>
                  <td>
                    <div class="wrapper">
                      <span class="info">{{ refund.date }}</span> <br>
                    </div>
                  </td>

                  <td>
                    <div class="wrapper">
                      <span class="info">{{ refund.host }}</span>
                    </div>
                  </td>

                  <td>
                    <div class="wrapper">
                      <span class="info">{{ refund.guest }}</span>
                    </div>
                  </td>

                  <td>
                    <div class="wrapper">
                      <span
                        v-if="refund.status==='Waiting'"
                        class="info badges badges--wait-payment"
                      >{{ refund.status }}</span>

                      <span
                        v-if="refund.status==='Accepted'"
                        class="info badges badges--paid-off"
                      >{{ refund.status }}</span>
                      <span
                        v-if="refund.status==='Decline'"
                        class="info badges badges--processed"
                      >{{ refund.status }}</span>
                    </div>
                  </td>

                  <td>
                    <div class="wrapper">
                      <span class="info icon">
                        <router-link to="refund-edit">
                          <a title="Edit Refund"><img
                            src="assets/img/ic-edit-line.svg"
                            title="Edit User"
                          ></a>
                        </router-link>
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
export default {
  data(){
		return {

      refundList : [
                  {
                    "id": '1' ,
                    "bookingNo": '#1092-122',
                    "nominal" : '450.000',
                    "date" : '12/12/2019 09:12:09',
                    "host" : 'PT. Ayo Tour Sejahtera',
                    "guest" : 'Novi Irianty',
                    "status" : 'Waiting'
                  },
                   {
                    "id": '2' ,
                    "bookingNo": '#1043-099',
                    "nominal" : '12.435.000',
                    "date" : '01/11/2019 23:09:15',
                    "host" : 'Sahabat Tour',
                    "guest" : 'Rudi Gunawan',
                    "status" : 'Accepted'
                  },
                  {
                    "id": '3' ,
                    "bookingNo": '#1013-199',
                    "nominal" : '2.000.000',
                    "date" : '29/11/2019 15:13:00',
                    "host" : 'Fastest Tour',
                    "guest" : 'Ilham Budiawan',
                    "status" : 'Decline'
                  },


        ]

      }
   }
}
</script>