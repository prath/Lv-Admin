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

                <th>Order</th>
                <th>Nominal</th>
                <th>Date</th>
                <th>Host</th>
                <th>Guest</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
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
                    <span class="order_number">#1092-122</span> <br>
                  </div>
                </td>

                <td>
                  <div class="wrapper">
                    <span class="info">Rp.450.000,-</span> <br>
                  </div>
                </td>
                <td>
                  <div class="wrapper">
                    <span class="info">12/12/2019 09:12:09</span> <br>
                  </div>
                </td>

                <td>
                  <div class="wrapper">
                    <span class="info">PT. Ayo Tour Sejahtera</span>
                  </div>
                </td>

                <td>
                  <div class="wrapper">
                    <span class="info">Novi Irianty</span>
                  </div>
                </td>

                <td>
                  <div class="wrapper">
                    <span class="info badges badges--wait-payment">Waiting</span> <br>
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
                    <span class="order_number">#1043-099</span> <br>
                  </div>
                </td>

                <td>
                  <div class="wrapper">
                    <span class="info">Rp.12.435.000,-</span> <br>
                  </div>
                </td>
                <td>
                  <div class="wrapper">
                    <span class="info">01/11/2019 23:09:15</span> <br>
                  </div>
                </td>

                <td>
                  <div class="wrapper">
                    <span class="info">Sahabat Tour</span>
                  </div>
                </td>

                <td>
                  <div class="wrapper">
                    <span class="info">Rudi Gunawan</span>
                  </div>
                </td>

                <td>
                  <div class="wrapper">
                    <span class="info badges badges--paid-off">Accepted</span> <br>
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
                    <span class="order_number">#1013-199</span> <br>
                  </div>
                </td>

                <td>
                  <div class="wrapper">
                    <span class="info">Rp.2.000.000,-</span> <br>
                  </div>
                </td>
                <td>
                  <div class="wrapper">
                    <span class="info">29/11/2019 15:13:00</span> <br>
                  </div>
                </td>

                <td>
                  <div class="wrapper">
                    <span class="info">Fastest Tour</span>
                  </div>
                </td>

                <td>
                  <div class="wrapper">
                    <span class="info">Ilham Budiawan</span>
                  </div>
                </td>

                <td>
                  <div class="wrapper">
                    <div>
                      <span class="info badges badges--processed">Decline</span> <br>
                      <span class="info-status">Tidak Sesuai Syarat dari Term Refund</span>
                    </div>
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
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>