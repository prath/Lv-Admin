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
              <h4>Tour Preferences</h4>
            </div>

            <div class="sub-heading">
              <p>Basic Info</p>
            </div>


            <div class="columns is-gapless">
              <div class="column">
                <div class="form-group">
                  <label for="first_name">Key Preferences</label>
                  <input
                    id="harga"
                    type="text"
                    class="form-control"
                    placeholder="exp: Landscape, Camping, Beach"
                    value="Landscape"
                  >
                </div>
              </div>
            </div>

            <div class="columns is-gapless">
              <div class="column">
                <div class="form-group">
                  <label for="first_name">Value</label>
                  <input
                    id="harga"
                    type="text"
                    class="form-control"
                    placeholder="exp: Barbeque and Camping at Beach."
                    value="Best Packages for camping, bbq, and camping in one step"
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="column sidebar is-one-third">
          <button class="btn btn--primary btn--default btn--full padding-b-m">
            Update Tour Preferences
          </button>

          <router-link to="tour-preferences">
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