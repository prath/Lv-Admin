<template>
  <div class="column site-content">
    <div class="container-fluid">
      <div class="columns">
        <div class="column generic-heading is-two-third">
          <input
            type="text"
            class="product-title"
            placeholder="Nama User"
            value="Nama User"
          >
        </div>
      </div>

      <div class="columns">
        <div class="column is-two-third">
          <div class="card card--statistic">
            <div class="heading border">
              <h4>User Info</h4>
            </div>

            <div class="sub-heading">
              <p>Basic Info</p>
            </div>

            <div class="columns is-gapless">
              <div class="column">
                <div class="form-group">
                  <label for="first_name">First Name</label>
                  <input
                    id="harga"
                    type="text"
                    class="form-control"
                    placeholder=""
                  >
                </div>
              </div>
            </div>




            <div class="columns is-gapless">
              <div class="column">
                <div class="form-group">
                  <label for="last_name">Last Name</label>
                  <input
                    id="harga"
                    type="text"
                    class="form-control"
                    placeholder=""
                  >
                </div>
              </div>
            </div>

            <div class="columns ">
              <div class="column is-6">
                <div class="form-group">
                  <label for="last_name">Email</label>
                  <input
                    id="harga"
                    type="text"
                    class="form-control"
                    placeholder=""
                  >
                </div>
              </div>

              <div class="column is-6">
                <div class="form-group">
                  <label for="last_name">Password</label>
                  <input
                    id="password"
                    type="text"
                    class="form-control"
                    placeholder=""
                  >
                </div>
              </div>
            </div>

            <div class="columns ">
              <div class="column is-6">
                <div class="form-group">
                  <label for="last_name">Date of Birth</label>
                  <input
                    id="harga"
                    type="text"
                    class="form-control"
                    placeholder=""
                  >
                </div>
              </div>

              <div class="column is-6">
                <div class="form-group">
                  <label for="last_name">Gender</label>
                  <div class="select">
                    <select>
                      <option value="currency">
                        Laki-laki
                      </option>
                      <option value="percentage">
                        Perempuan
                      </option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            <div class="columns">
              <div class="column is-6">
                <div class="form-group">
                  <label for="last_name">Phone Number</label>
                  <input
                    id="harga"
                    type="text"
                    class="form-control"
                    placeholder=""
                  >
                </div>
              </div>

              <div class="column is-6">
                <div class="form-group">
                  <label for="last_name">Role</label>
                  <input
                    id="password"
                    type="text"
                    disabled
                    class="form-control"
                    value="HOST"
                  >
                </div>
              </div>
            </div>

            <div class="columns">
              <div class="column is-6">
                <div class="form-group">
                  <label for="last_name">Nationality</label>
                  <div class="select">
                    <select>
                      <option value="currency">
                        Indonesia
                      </option>
                      <option value="percentage">
                        English
                      </option>
                      <option value="percentage">
                        Australia
                      </option>
                      <option value="percentage">
                        Canada
                      </option>
                      <option value="percentage">
                        Japan
                      </option>
                    </select>
                  </div>
                </div>
              </div>

              <div class="column is-6">
                <div class="form-group">
                  <label for="last_name">Status</label>
                  <div class="select">
                    <select>
                      <option value="currency">
                        Verified
                      </option>
                      <option value="percentage">
                        Unverified
                      </option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            <div class="columns">
              <div class="column is-6">
                <div class="form-group">
                  <label for="last_name">Prefered Location</label>
                  <input
                    id="harga"
                    type="text"
                    class="form-control"
                    placeholder=""
                  >
                </div>
              </div>

              <div class="column is-6">
                <label for="last_name">Suspended</label>

                <div class="column is-6">
                  <div class="form-check">
                    <label class="container">
                      <input
                        type="radio"

                        name="radio"
                      >
                      <span class="radiomark" />
                      Yes
                    </label>
                  </div>
                </div>

                <div class="column is-6">
                  <div class="form-check">
                    <label class="container">
                      <input
                        type="radio"
                        name="radio"
                        checked="checked"
                      >
                      <span class="radiomark" />
                      No
                    </label>
                  </div>
                </div>
              </div>
            </div>

            <div class="sub-heading">
              <p>Profile Picture</p>
            </div>

            <div class="custom-file grey">
              <input
                id="customFile"
                type="file"
                class="custom-file-input"
              >
              <img
                src="../assets/img/ic-image-white.svg"
                alt=""
              >
            </div>

            <div class="sub-heading">
              <p>Business</p>
            </div>

            <div class="columns  ">
              <div class="column is-6">
                <div class="form-group">
                  <label for="last_name">Business Name</label>
                  <input
                    id="harga"
                    type="text"
                    class="form-control"
                    placeholder=""
                  >
                </div>
              </div>

              <div class="column is-6">
                <div class="form-group">
                  <label for="last_name">Category</label>
                  <div class="select">
                    <select>
                      <option value="currency">
                        Tour &amp; Travel
                      </option>
                      <option value="percentage">
                        Consultant
                      </option>
                      <option value="percentage">
                        Advertising/Branding/PR.
                      </option>
                      <option value="percentage">
                        Government Agency.
                      </option>
                      <option value="percentage">
                        Financial Institution/Investment Bank.
                      </option>
                      <option value="percentage">
                        Not for Profit.
                      </option>
                      <option value="percentage">
                        Association.
                      </option>
                      <option value="percentage">
                        Packaging/Design.
                      </option>
                      <option value="percentage">
                        Publisher.
                      </option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            <div class="columns ">
              <div class="column is-6">
                <div class="form-group">
                  <label for="last_name">Address</label>
                  <textarea class="form-control" />
                </div>
              </div>

              <div class="column is-6">
                <div class="form-group">
                  <label for="last_name">About</label>
                  <textarea class="form-control" />
                </div>
              </div>
            </div>

            <div class="sub-heading">
              <p>ID Verification</p>
            </div>

            <div class="columns">
              <div class="column is-6">
                <p><b>Personal ID</b></p>
                <div class="custom-file grey">
                  <input
                    id="customFile"
                    type="file"
                    class="custom-file-input"
                  >
                  <img
                    src="../assets/img/ic-image-white.svg"
                    alt=""
                  >
                </div>
              </div>
              <div class="column is-6">
                <p><b>Business ID</b></p>
                <div class="custom-file grey">
                  <input
                    id="customFile"
                    type="file"
                    class="custom-file-input"
                  >
                  <img
                    src="../assets/img/ic-image-white.svg"
                    alt=""
                  >
                </div>
              </div>
            </div>




            <div class="clear" />
          </div>
        </div>
        <div class="column sidebar is-one-third">
          <button class="btn btn--primary btn--default btn--full padding-b-m">
            Save
          </button>

          <router-link to="/users">
            <button class="btn btn--transparent btn--default btn--full">
              Cancel
            </button>
          </router-link>

          <hr>
        </div>
      </div>
    </div>
  </div>
</template>
