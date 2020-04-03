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
            <h3>User List</h3>
            <p>List of Guest & Host</p>
          </div>

          <div class="column generic-heading is-one-third">
            <button class="btn btn--medium btn--primary is-right">
              Add User
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
              src="assets/img/ic-search.svg"
              alt
            >
            <input
              id="form1"
              type="text"
              class="form-control"
              placeholder="Find User"
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

                <th>Name</th>
                <th>Role</th>
                <th>Email</th>
                <th>Gender</th>
                <th>Phone</th>
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
                    <span class="info">Michelle Sandra</span>
                    <br>
                  </div>
                </td>

                <td>
                  <div class="wrapper">
                    <span class="info badges badges--verified">Guest</span>
                    <br>
                  </div>
                </td>
                <td>
                  <div class="wrapper">
                    <span class="info">michelle@gmail.com</span>
                    <br>
                  </div>
                </td>

                <td>
                  <div class="wrapper">
                    <span class="info">Female</span>
                  </div>
                </td>

                <td>
                  <div class="wrapper">
                    <span class="info">0857-2210-6534</span>
                  </div>
                </td>

                <td>
                  <div class="wrapper">
                    <span class="info icon">
                      <a title="Edit User">
                        <img
                          src="assets/img/ic-edit-line.svg"
                          title="Edit User"
                        >
                      </a>
                      <a title="Delete User">
                        <img
                          src="assets/img/ic-delete-line.svg"
                          title="Delete User"
                        >
                      </a>
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
                    <span class="info">Simon Mc Mnmemy</span>
                    <br>
                  </div>
                </td>

                <td>
                  <div class="wrapper">
                    <span class="info badges badges--verified">Guest</span>
                    <br>
                  </div>
                </td>
                <td>
                  <div class="wrapper">
                    <span class="info">simon.mcmnemy@gmail.com</span>
                    <br>
                  </div>
                </td>

                <td>
                  <div class="wrapper">
                    <span class="info">Male</span>
                  </div>
                </td>

                <td>
                  <div class="wrapper">
                    <span class="info">0857-1310-1432</span>
                  </div>
                </td>

                <td>
                  <div class="wrapper">
                    <span class="info icon">
                      <a title="Edit User">
                        <img
                          src="assets/img/ic-edit-line.svg"
                          title="Edit User"
                        >
                      </a>
                      <a title="Delete User">
                        <img
                          src="assets/img/ic-delete-line.svg"
                          title="Delete User"
                        >
                      </a>
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
                    <span class="info">Rizal Agustian</span>
                    <br>
                  </div>
                </td>

                <td>
                  <div class="wrapper">
                    <span class="info badges badges--paid-off">Host</span>
                    <br>
                  </div>
                </td>
                <td>
                  <div class="wrapper">
                    <span class="info">rizal.agus@gmail.com</span>
                    <br>
                  </div>
                </td>

                <td>
                  <div class="wrapper">
                    <span class="info">Male</span>
                  </div>
                </td>

                <td>
                  <div class="wrapper">
                    <span class="info">0856-4332-1231</span>
                  </div>
                </td>

                <td>
                  <div class="wrapper">
                    <span class="info icon">
                      <a title="Edit User">
                        <img
                          src="assets/img/ic-edit-line.svg"
                          title="Edit User"
                        >
                      </a>
                      <a title="Delete User">
                        <img
                          src="assets/img/ic-delete-line.svg"
                          title="Delete User"
                        >
                      </a>
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