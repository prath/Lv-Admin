<template>
  <div class="column site-content">
    <div class="container-fluid">
      <!--
                ////////////////////////////////////////////////////
                more comming tour
            -->

      <hr class="space-lg">
      <form action="tour-preferences.html">
        <div class="columns">
          <div class="column generic-heading is-two-third">
            <h3>Tour Preferences List</h3>
            <p>List of Tour Preferences</p>
          </div>

          <div class="column generic-heading is-one-third ">
            <button
              type="submit"
              class="btn btn--medium btn--primary is-right"
            >
              Add Tour Preferences
            </button>
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
              placeholder="Find Tour Preferences"
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

                <th>Key</th>
                <th>Value</th>
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
                    <span class="info">Landscape</span> <br>
                  </div>
                </td>

                <td>
                  <div class="wrapper">
                    <span class="info">Best Packages for camping, bbq, and camping in one
                      step</span> <br>
                  </div>
                </td>

                <td>
                  <div class="wrapper">
                    <span class="info icon">
                      <a title="Edit User"><img
                        src="assets/img/ic-edit-line.svg"
                        title="Edit User"
                      ></a>
                      <a title="Delete User"><img
                        src="assets/img/ic-delete-line.svg"
                        title="Delete User"
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
                    <span class="info">Mountain</span> <br>
                  </div>
                </td>

                <td>
                  <div class="wrapper">
                    <span class="info">Best Packages for Hiking, Coffee Harvest, etc</span> <br>
                  </div>
                </td>

                <td>
                  <div class="wrapper">
                    <span class="info icon">
                      <a title="Edit User"><img
                        src="assets/img/ic-edit-line.svg"
                        title="Edit User"
                      ></a>
                      <a title="Delete User"><img
                        src="assets/img/ic-delete-line.svg"
                        title="Delete User"
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