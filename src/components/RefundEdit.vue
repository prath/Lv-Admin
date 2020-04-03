<template>
  <div class="column site-content">
    <div class="container-fluid">
      <div class="columns">
        <div class="column generic-heading is-two-third" />
      </div>

      <div class="columns">
        <div class="column is-two-third">
          <div class="card card--statistic">
            <div class="heading border">
              <h4>Refund Manual</h4>
            </div>

            <div class="sub-heading">
              <p>Info Refund</p>
            </div>

            <div class="columns is-gapless">
              <div class="column">
                <div class="form-group">
                  <label for="first_name">No Booking</label>
                  <input
                    id="harga"
                    type="text"
                    class="form-control"
                    placeholder=""
                    value="1092-122"
                  >
                </div>
              </div>
            </div>

            <div class="columns is-gapless">
              <div class="column">
                <div class="form-group">
                  <label for="last_name">Guest</label>
                  <input
                    id="harga"
                    type="text"
                    class="form-control"
                    placeholder=""
                    value="Novi Irianty"
                  >
                </div>
              </div>
            </div>

            <div class="columns is-gapless">
              <div class="column is-full">
                <div class="form-group">
                  <label for="form1">No Rekening</label>
                  <div class="input-group-duo rekening select-form-group">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="0"
                      value="130-122212-09090-1"
                    >
                    <div class="input-group-append">
                      <div class="field filter-form">
                        <div class="control">
                          <div class="select">
                            <select>
                              <option
                                value="currency"
                              >
                                BCA
                              </option>
                              <option
                                value="percentage"
                                selected
                              >
                                BNI
                              </option>
                              <option value="percentage">
                                BRI
                              </option>
                              <option value="percentage">
                                MANDIRI
                              </option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="clear" />

            <div class="columns ">
              <div class="column is-6">
                <div class="form-group">
                  <label for="first_name">Nominal</label>
                  <input
                    id="harga"
                    type="text"
                    class="form-control"
                    placeholder=""
                    value="450.000"
                  >
                </div>
              </div>

              <div class="column is-6">
                <div class="form-group">
                  <label for="last_name">Date Refund</label>
                  <input
                    id="harga"
                    type="text"
                    class="form-control"
                    placeholder=""
                    value="12/12/2019 09:12:09"
                  >
                </div>
              </div>
            </div>

            <div class="columns">
              <div class="column is-4">
                <div class="form-group">
                  <label for="last_name">Status</label>
                  <div class="select">
                    <select>
                      <option
                        value="currency"
                        select
                      >
                        Waiting
                      </option>
                      <option value="percentage">
                        Accept
                      </option>
                      <option value="percentage">
                        Decline
                      </option>
                    </select>
                  </div>
                </div>
              </div>

              <div class="column is-8">
                <div class="form-group">
                  <label for="last_name">Reason for Decline</label>
                  <input
                    id="harga"
                    type="text"
                    class="form-control"
                    placeholder=""
                  >
                </div>
              </div>
            </div>


            <div class="clear" />
          </div>
        </div>
        <div class="column sidebar is-one-third">
          <router-link to="/refund-list">
            <button class="btn btn--primary btn--default btn--full padding-b-m">
              Process Refund
            </button>
          </router-link>

          <router-link
            to="/refund-list"
          >
            <button
              class="btn btn--transparent btn--default btn--full"
            >
              Cancel
            </button>
          </router-link>

          <hr>
        </div>
      </div>
    </div>
  </div>
</template>