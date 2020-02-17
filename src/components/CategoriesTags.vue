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
          <h3>Categories</h3>
          <p>List of Categories</p>
        </div>

        <div class="column generic-heading is-one-third flex end-xs ">
          <router-link to="/categories-add">
            <button class="btn btn--medium btn--primary is-right">
              Add Categories
            </button>
          </router-link>
        </div>
      </div>



      <div class="columns filter-table-list">
        <div class="column is-full filter-wrapper">
          <div class="form-group icon-search">
            <img
              src="assets/img/ic-search.svg"
              alt=""
            >
            <input
              id="form1"
              type="text"
              class="form-control"
              placeholder="Find Categories"
            >
          </div>
        </div>
      </div>

      <div class="columns">
        <div class="column is-full">
          <table class="table is-fullwidth table--orders">
            <thead>
              <tr>
                <th style="width:10%;">
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

                <th>No</th>
                <th>Categories</th>
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
                    <span class="order_number">1</span> <br>
                  </div>
                </td>

                <td>
                  <div class="wrapper">
                    <span class="info">Wisata</span> <br>
                  </div>
                </td>

                <td>
                  <div class="wrapper">
                    <span class="info icon">
                      <a title="Edit Categories"><img
                        src="assets/img/ic-edit-line.svg"
                        title="Edit Categories"
                      ></a>
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
                    <span class="order_number">2</span> <br>
                  </div>
                </td>

                <td>
                  <div class="wrapper">
                    <span class="info">Outdoor</span> <br>
                  </div>
                </td>

                <td>
                  <div class="wrapper">
                    <span class="info icon">
                      <a title="Edit Categories"><img
                        src="assets/img/ic-edit-line.svg"
                        title="Edit Categories"
                      ></a>
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
                    <span class="order_number">3</span> <br>
                  </div>
                </td>

                <td>
                  <div class="wrapper">
                    <span class="info">Mountain</span> <br>
                  </div>
                </td>

                <td>
                  <div class="wrapper">
                    <span class="info icon">
                      <a title="Edit Categories"><img
                        src="assets/img/ic-edit-line.svg"
                        title="Edit Categories"
                      ></a>
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
                    <span class="info">4</span> <br>
                  </div>
                </td>

                <td>
                  <div class="wrapper">
                    <span class="info">Sea</span> <br>
                  </div>
                </td>

                <td>
                  <div class="wrapper">
                    <span class="info icon">
                      <a title="Edit Categories"><img
                        src="assets/img/ic-edit-line.svg"
                        title="Edit Categories"
                      ></a>
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