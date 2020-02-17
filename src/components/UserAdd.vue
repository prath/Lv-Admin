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

            <div class="columns ">
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
                src="assets/img/ic-image-white.svg"
                alt=""
              >
            </div>



            <div class="clear" />
          </div>
        </div>
        <div class="column sidebar is-one-third">
          <button class="btn btn--primary btn--default btn--full padding-b-m">
            Save Produk
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
