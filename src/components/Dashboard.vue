<template>
  <div class="column site-content">
    <div class="container-fluid">
      <!--
                ////////////////////////////////////////////////////
                Statistic Guest
            -->

      <div class="clear" />
      <div class="heading column">
        <h4>Guest Statistic</h4>
      </div>

      <div class="column is-full">
        <div class="heading">
          <guest-chart />
        </div>
      </div>


      <!--
                ////////////////////////////////////////////////////
                Statistic Host
            -->

      <div class="clear" />
      <div class="heading column">
        <h4>Host Statistic</h4>
      </div>

      <div class="column is-full">
        <div class="heading">
          <host-chart />
        </div>
      </div>


      <!--
                ////////////////////////////////////////////////////
                Total Revenue
            -->


      <hr class="space-lg">
      <div class="columns">
        <div class="column is-half">
          <div class="card card--statistic">
            <div class="heading">
              <h4>Total Revenue</h4>

              <div class="info">
                <div class="img">
                  <img
                    src="assets/img/ic-wallet-grey.svg"
                    alt=""
                  >
                </div>
                <div class="description">
                  <h4 class="text-info">
                    Rp.450.143.902,-
                  </h4>
                  <p class="accent">
                    in November
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="column is-half">
          <div class="card card--statistic">
            <div class="heading">
              <h4>Total Booking</h4>

              <div class="info">
                <div class="img">
                  <img
                    src="assets/img/ic-visitor.svg"
                    alt=""
                  >
                </div>
                <div class="description">
                  <h4 class="text-success">
                    1.203 Tour
                  </h4>
                  <p class="accent">
                    in November
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>



      <!--
                ////////////////////////////////////////////////////
                Newest Order
                -->

      <hr class="space-lg">

      <div class="columns">
        <div class="column generic-heading is-two-third">
          <h3>5 Latest Bookings</h3>
          <p>Tour Booking</p>
        </div>
      </div>

      <div class="columns is-multiline">
        <div class="column is-full">
          <div class="tabs">
            <ul>
              <li class="is-active">
                <a>ALL</a>
              </li>
              <li><a href="#">UNPAID</a></li>
              <li><a href="#">NEED TO BE PROCESSED</a></li>
              <li><a href="#">PROCESSING</a></li>
              <li><a href="#">DELIVERING</a></li>
              <li><a href="#">DELIVERED</a></li>
            </ul>
          </div>
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
                    By Date
                  </option>
                  <option value="by_price">
                    By Tour
                  </option>
                  <option value="by_category">
                    By Category
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
                    <!-- SHow when Checkbox Clicked
                                            <a href="#"><img src="assets/img/ic-delete.svg" alt="" /></a>
                                            -->
                  </div>
                </th>
                <th>Booking</th>
                <th>Tour Name</th>
                <th>Date</th>
                <th>Total</th>
                <th>Status</th>
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
                    <div>
                      <span class="order_number">#1979</span> <br>
                      <p><b>by</b> Aceng Samsyudin</p>
                      <div />
                    </div>
                  </div>
                </td>

                <td>
                  <div class="wrapper">
                    <div>
                      <span class="order_number">Kayaking di Perairan Bandung</span> <br>
                      <p>Open Trip</p>
                    </div>
                  </div>
                </td>

                <td>
                  <div class="wrapper">
                    <div>
                      <span class="info">22 April 2018</span>
                      <p>20:23:21</p>
                    </div>
                  </div>
                </td>

                <td>
                  <div class="wrapper">
                    <img
                      src="assets/img/ic-bag.svg"
                      alt=""
                    >
                    <div class="total">
                      <div>
                        <span class="text-success">Rp 300.000,00</span>
                        <p><b>1 pax</b> via transfer bank</p>
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  <div class="wrapper">
                    <span class="badges badges--processed">Processed</span>
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
                    <div>
                      <span class="order_number">#1981</span> <br>
                      <p><b>by</b> Didin Maulana</p>
                    </div>
                  </div>
                </td>

                <td>
                  <div class="wrapper">
                    <div>
                      <span class="order_number">Hang Gliding Tandem</span>
                      <p>Private Trip</p>
                    </div>
                  </div>
                </td>

                <td>
                  <div class="wrapper">
                    <div>
                      <span class="info">13 Januari 2019</span> <br>
                      <p>20:23:21</p>
                    </div>
                  </div>
                </td>

                <td>
                  <div class="wrapper">
                    <img
                      src="assets/img/ic-bag.svg"
                      alt=""
                    >
                    <div class="total">
                      <span class="text-success">Rp 1.450.000,00</span>
                      <p><b>2 Pax</b> via transfer bank</p>
                    </div>
                  </div>
                </td>
                <td>
                  <div class="wrapper">
                    <span class="badges badges--processed">Processed</span>
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
                    <div>
                      <span class="order_number">#1981</span> <br>
                      <p><b>by</b> Andrew Moralez</p>
                    </div>
                  </div>
                </td>

                <td>
                  <div class="wrapper">
                    <div>
                      <span class="order_number">Barbecue Party di Outdoor, Bandung</span> <br>
                      <p>Open Trip</p>
                    </div>
                  </div>
                </td>

                <td>
                  <div class="wrapper">
                    <div>
                      <span class="info">4 Desember 2019</span> <br>
                      <p>20:23:21</p>
                    </div>
                  </div>
                </td>

                <td>
                  <div class="wrapper">
                    <img
                      src="assets/img/ic-bag.svg"
                      alt=""
                    >
                    <div class="total">
                      <span class="text-success">Rp 5.250.000,00</span>
                      <p><b>5 Pax</b> via transfer bank</p>
                    </div>
                  </div>
                </td>
                <td>
                  <div class="wrapper">
                    <span class="badges badges--processed">Processed</span>
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
                    <div>
                      <span class="order_number">#1999</span> <br>
                      <p><b>by</b> Salvador Martin</p>
                    </div>
                  </div>
                </td>

                <td>
                  <div class="wrapper">
                    <div>
                      <span class="order_number">Naik Land Rover Keliling Bandung</span> <br>
                      <p>Private Trip</p>
                    </div>
                  </div>
                </td>

                <td>
                  <div class="wrapper">
                    <div>
                      <span class="info">4 Desember 2019</span> <br>
                      <p>20:23:21</p>
                    </div>
                  </div>
                </td>

                <td>
                  <div class="wrapper">
                    <img
                      src="assets/img/ic-bag.svg"
                      alt=""
                    >
                    <div class="total">
                      <span class="text-success">Rp 250.000,00</span>
                      <p><b>1 Pax</b> via transfer bank</p>
                    </div>
                  </div>
                </td>
                <td>
                  <div class="wrapper">
                    <span class="badges badges--processed">Processed</span>
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
                    <div>
                      <span class="order_number">#2500</span> <br>
                      <p><b>by</b> Heilsinski</p>
                    </div>
                  </div>
                </td>

                <td>
                  <div class="wrapper">
                    <div>
                      <span class="order_number">Wisata Kopi Bandung</span> <br>
                      <p>Open Trip</p>
                    </div>
                  </div>
                </td>

                <td>
                  <div class="wrapper">
                    <div>
                      <span class="info">7 April 2020</span> <br>
                      <p>20:23:21</p>
                    </div>
                  </div>
                </td>

                <td>
                  <div class="wrapper">
                    <img
                      src="assets/img/ic-bag.svg"
                      alt=""
                    >
                    <div class="total">
                      <span class="text-success">Rp 75.000,00</span>
                      <p><b>1 Pax</b> via transfer bank</p>
                    </div>
                  </div>
                </td>
                <td>
                  <div class="wrapper">
                    <span class="badges badges--processed">Processed</span>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>




      <!--
                ////////////////////////////////////////////////////
                more comming tour
                -->

      <hr class="space-lg">

      <div class="columns">
        <div class="column generic-heading is-two-third">
          <h3>5 Incomming Tour</h3>
          <p>Tour Packages</p>
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
                    By Types of tours
                  </option>
                  <option value="by_date">
                    By Date
                  </option>
                  <option value="by_price">
                    By Tour
                  </option>
                  <option value="by_category">
                    By Category
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
                    <!-- SHow when Checkbox Clicked
                                                <a href="#"><img src="assets/img/ic-delete.svg" alt="" /></a>
                                                -->
                  </div>
                </th>

                <th>Tour Name</th>
                <th>Start Date</th>
                <th>End Date</th>
                <th>Total Pax</th>
                <th>Status</th>
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
                    <div>
                      <span class="order_number">Kayaking di Perairan Bandung</span> <br>
                      <p>Open Trip</p>
                    </div>
                  </div>
                </td>

                <td>
                  <div class="wrapper">
                    <span class="info">22 April 2018</span> <br>
                  </div>
                </td>
                <td>
                  <div class="wrapper">
                    <span class="info">29 April 2018</span> <br>
                  </div>
                </td>

                <td>
                  <div class="wrapper">
                    <span class="info">4 Person</span>
                  </div>
                </td>
                <td>
                  <div class="wrapper">
                    <span class="badges badges--processed">4 days left</span>
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
                    <div>
                      <span class="order_number">Hang Gliding Tandem</span> <br>
                      <p>Private Tour</p>
                    </div>
                  </div>
                </td>

                <td>
                  <div class="wrapper">
                    <span class="info">22 April 2018</span> <br>
                  </div>
                </td>
                <td>
                  <div class="wrapper">
                    <span class="info">29 April 2018</span> <br>
                  </div>
                </td>

                <td>
                  <div class="wrapper">
                    <span class="info">4 Person</span>
                  </div>
                </td>
                <td>
                  <div class="wrapper">
                    <span class="badges badges--processed">4 days left</span>
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
                    <div>
                      <span class="order_number">Hang Gliding Tandem</span> <br>
                      <p>Open Trip</p>
                    </div>
                  </div>
                </td>

                <td>
                  <div class="wrapper">
                    <span class="info">22 April 2018</span> <br>
                  </div>
                </td>
                <td>
                  <div class="wrapper">
                    <span class="info">29 April 2018</span> <br>
                  </div>
                </td>

                <td>
                  <div class="wrapper">
                    <span class="info">4 Person</span>
                  </div>
                </td>
                <td>
                  <div class="wrapper">
                    <span class="badges badges--processed">4 days left</span>
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
                    <div>
                      <span class="order_number">Naik Land Rover Keliling Bandung</span> <br>
                      <p>Private Tour</p>
                    </div>
                  </div>
                </td>

                <td>
                  <div class="wrapper">
                    <span class="info">01 Mei 2019</span> <br>
                  </div>
                </td>
                <td>
                  <div class="wrapper">
                    <span class="info">29 April 2018</span> <br>
                  </div>
                </td>

                <td>
                  <div class="wrapper">
                    <span class="info">10 Person</span>
                  </div>
                </td>
                <td>
                  <div class="wrapper">
                    <span class="badges badges--processed">4 days left</span>
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
                    <div>
                      <span class="order_number">Naik Land Rover Keliling Bandung</span> <br>
                      <p>Private Tour</p>
                    </div>
                  </div>
                </td>

                <td>
                  <div class="wrapper">
                    <span class="info">01 Mei 2019</span> <br>
                  </div>
                </td>
                <td>
                  <div class="wrapper">
                    <span class="info">29 April 2018</span> <br>
                  </div>
                </td>

                <td>
                  <div class="wrapper">
                    <span class="info">10 Person</span>
                  </div>
                </td>
                <td>
                  <div class="wrapper">
                    <span class="badges badges--processed">4 days left</span>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <!--
                    ////////////////////////////////////////////////////
                    List Refund
                -->

      <hr class="space-lg">

      <div class="columns">
        <div class="column generic-heading is-two-third">
          <h3>Refund List</h3>
          <p>Waiting refund list</p>
        </div>
      </div>

      <div class="columns">
        <div class="column is-full">
          <table class="table is-fullwidth table--orders">
            <thead>
              <tr>
                <th>Guest Name</th>
                <th>Date Refund</th>
                <th>Total Refund</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>
                  <div class="wrapper">
                    <span class="order_number">Anderson Mondares</span> <br>
                  </div>
                </td>

                <td>
                  <div class="wrapper">
                    <span class="info">22 April 2018</span> <br>
                  </div>
                </td>
                <td>
                  <div class="wrapper">
                    <span class="info">Rp. 4.500.000,-</span> <br>
                  </div>
                </td>


                <td>
                  <div class="wrapper">
                    <button class="btn btn--primary btn--small">
                      Process Refund
                    </button>
                  </div>
                </td>
              </tr>

              <tr>
                <td>
                  <div class="wrapper">
                    <span class="order_number">Lilis Karlina</span> <br>
                  </div>
                </td>

                <td>
                  <div class="wrapper">
                    <span class="info">6 Januari 2019</span> <br>
                  </div>
                </td>
                <td>
                  <div class="wrapper">
                    <span class="info">Rp. 75.000,-</span> <br>
                  </div>
                </td>


                <td>
                  <div class="wrapper">
                    <button class="btn btn--primary btn--small">
                      Process Refund
                    </button>
                  </div>
                </td>
              </tr>

              <tr>
                <td>
                  <div class="wrapper">
                    <span class="order_number">Wulan R Natalie</span> <br>
                  </div>
                </td>

                <td>
                  <div class="wrapper">
                    <span class="info">3 Desember 2019</span> <br>
                  </div>
                </td>
                <td>
                  <div class="wrapper">
                    <span class="info">Rp. 750.000,-</span> <br>
                  </div>
                </td>


                <td>
                  <div class="wrapper">
                    <button class="btn btn--primary btn--small">
                      Process Refund
                    </button>
                  </div>
                </td>
              </tr>

              <tr>
                <td>
                  <div class="wrapper">
                    <span class="order_number">Lea Marsela</span> <br>
                  </div>
                </td>

                <td>
                  <div class="wrapper">
                    <span class="info">4 Desember 2019</span> <br>
                  </div>
                </td>
                <td>
                  <div class="wrapper">
                    <span class="info">Rp. 525.000,-</span> <br>
                  </div>
                </td>


                <td>
                  <div class="wrapper">
                    <button class="btn btn--primary btn--small">
                      Process Refund
                    </button>
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

<script>
import GuestChart from './GuestChart'
import HostChart from './HostChart'
export default {
  name: 'App',
  components : {
    'GuestChart' : GuestChart,
    'HostChart' : HostChart
  }
}
</script>