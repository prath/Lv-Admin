<template>
  <div>
    <div class="columns padding-bottom-none">
      <!--
        BUSINESS NAME
        -->
      <div class="column is-6">
        <div class="form-group">
          <label for="last_name">Business Name</label>
          <input
            type="text"
            class="form-control"
            placeholder=""
          />
        </div>
      </div>
      <!-- /end business name -->

      <!--
        BUSINESS CATEGORIES
        -->
      <div class="column is-6">
        <div class="form-group">
          <label for="last_name">Category</label>
          <div class="select">
            <select class="form-control">
              <option
                value="currency"
                selected
              >
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
      <!-- /end business categories -->

    </div>

    <!--
      ADDRESS
      -->
    <div class="columns padding-bottom-none">
      <div class="column is-12">
        <div class="form-group">
          <label for="last_name">Address</label>
          <textarea
            class="form-control"
            rows="2"
            cols="10"
          ></textarea>
        </div>
      </div>
    </div>
    <!-- /end address -->

    <!--
      ABOUT
      -->
    <div class="columns padding-bottom-none">
      <div class="column is-12">
        <div class="form-group">
          <label for="last_name">About</label>
          <textarea
            class="form-control"
            rows="5"
            cols="10"
          >Kami memiliki jaringan bisnis yang luas, sehingga memampukan kami untuk memberikan layanan terbaik yang melingkupi tiket penerbangan, kereta api, hotel, pengurusan dokumen perjalanan, tour wisata inbound dan outbound, incentive tour, cruises, asuransi perjalanan, rental kendaraan, dan corporate travel management service.</textarea>
        </div>
      </div>
    </div>
    <!-- /end about -->

    <!--
      VERIFICATION DATA HEADING
      -->
    <div class="sub-heading is-clearfix">
      <p>ID & Business Verification</p>
    </div>
    <!-- /end verification data heading -->

    <div class="columns">

      <!--
        PHOTO ID PHOTO
      -->
      <div class="column is-6">
        <p><b>Personal ID</b></p>
        <img
          src="https://images.unsplash.com/photo-1610276434254-4b6e1ad564f4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
          alt=""
        />
      </div>
      <!-- /end photo id verification -->

      <!--
        BUSINESS ID PHOTO
        -->
      <div class="column is-6">
        <p><b>Business ID</b></p>
        <img
          src="https://images.unsplash.com/photo-1610354965243-296d0eddf639?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80"
          alt=""
        />
      </div>
      <!-- /end business id photo -->

    </div>
  </div>
</template>

<script>
export default {
  name: 'FormEditBusiness'
}
</script>
