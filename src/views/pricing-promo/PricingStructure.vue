<template>
  <div class="column site-content">
    <div class="container-fluid">
      <hr class="space-lg" />

       <!--
        PAGE TITLE
       -->
      <PageTitleDefault :actionButton="{ title: 'Add Host', url: '/host-add' }">
        <template><h3>Pricing Structure</h3></template>
        <template #subtitle><p>List of Lokaven Host</p></template>
      </PageTitleDefault>
      <hr class="space-lg" />
      <!-- /end page title -->

      <form @submit.prevent="signupHost">
        <div class="columns">

          <div class="column is-two-third">
            <div class="card card--statistic">
              <!--
                ERROR
              -->
              <!-- <section class="columns">
                <div class="column">
                  <div class="message is-info p-5">
                      We're sorry, we're not able to update this user for now, please try back later

                  </div>
                </div>
              </section> -->
              <!-- /error message -->

              <!--
                SUCCESS
              -->
              <!-- <section class="columns">
                <div class="column">
                  <div class="message is-info p-5">
                      Host successfully created
                  </div>
                </div>
              </section> -->
              <!-- /success message -->

              <div class="heading border mb-6">
                <h4>Comissions</h4>
              </div>

              <div class="columns">
                <div class="column is-4">
                  <div class="form-group">
                    <label for="type">Type</label>
                    <select
                      class="form-control"
                      required
                    >
                      <option value="nominal">Nominal</option>
                      <option value="percentage">Percentage</option>
                      <option value="compound">Nominal + Percetage</option>
                    </select>
                  </div>
                </div>
                <div class="column is-8">
                  <div class="form-group">
                    <label for="value">Value</label>
                    <input
                      type="text"
                      class="form-control"
                      placeholder=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="column sidebar is-one-third">
            <button type="submit" class="btn btn--primary btn--default padding-b-m btn--full">
              <spinner v-if="isLoading" size="small" />
              <template v-else>Save Changes</template>
            </button>
            <!-- <button
              class="btn btn--primary btn--default btn--full padding-b-m btn-loader"
            >
              <img
                src="@/assets/img/tail-spin.svg"
                alt=""
                class="img_button"
              />Processed
            </button> -->

            <router-link to="/hosts">
              <button class="btn btn--transparent btn--default btn--full">
                Cancel
              </button>
            </router-link>

            <hr />
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PricingStructure'
}
</script>

<style>

</style>
