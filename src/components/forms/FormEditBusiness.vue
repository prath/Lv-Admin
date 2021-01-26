<template>
  <form class="mt-6">
    <div class="columns padding-bottom-none">
      <!--
        BUSINESS NAME
        -->
      <div class="column is-6">
        <div class="form-group">
          <label for="last_name">Business Name</label>
          <input
            v-model="userData.business_name"
            type="text"
            class="form-control"
            :disabled="!activateForm"
          />
        </div>
      </div>
      <!-- /end business name -->

      <!--
        BUSINESS CATEGORIES
        -->
      <div class="column is-6">
        <div class="form-group">
          <label for="category">Category</label>
          <div class="select">
            <select class="form-control" :disabled="!activateForm">
              <option
                value=""
                disabled
                selected
              >
                {{ userData.business_category }}
              </option>
              <option>
                Personal Tour
              </option>
              <option>
                Corporate Tour
              </option>
              <option>
                Personal &amp; Corporate Tour
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
            v-model="userData.address"
            class="form-control"
            rows="2"
            cols="10"
            :disabled="!activateForm"
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
            v-model="userData.business_about"
            class="form-control"
            rows="5"
            cols="10"
            :disabled="!activateForm"
          ></textarea>
        </div>
      </div>
    </div>
    <!-- /end about -->

    <!--
      VERIFICATION DATA HEADING
      -->
    <div class="sub-heading is-clearfix">
      <p>ID &amp; Business Verification</p>
    </div>
    <!-- /end verification data heading -->

    <div class="columns pb-0">
      <div class="column is-12">

        <!--
          VERIFICATION STATUS EXISTING REQUESTED
        -->
        <div class="message is-info mb-5 verification-data-requested" v-if="isVerificationRequested">
          <div class="message-body">
            <h5>This user is already requested a verification, please review</h5>
            <div class="control">
              <button class="btn btn--primary btn--small">click here to review</button>
            </div>
          </div>
        </div>
        <!-- /end verification status -->

        <!--
          VERIFICATION STATUS EXISTING VERIFIED
        -->
        <div class="message is-info mb-5 verification-data-verified" v-else-if="isVerifiedHost">
          <div class="message-body">
            <h5>This user is a verified user</h5>
            <div class="control">
              this user already a verified member
            </div>
          </div>
        </div>
        <!-- /end verification status -->

        <!--
          VERIFICATION STATUS NEW HOST
        -->
        <div class="message is-info mb-5 verification-data-new" v-else>
          <div class="message-body">
            <h5>Verify this user?</h5>
            <div class="control">
              <label class="radio">
                <input type="radio" name="answer" :disabled="!activateForm" />
                Yes, verify
              </label>
              <label class="radio">
                <input type="radio" name="answer" :disabled="!activateForm" />
                No, unverified
              </label>
            </div>
          </div>
        </div>
        <!-- /end verification status -->

      </div>
    </div>
    <div v-if="activateForm" class="columns pb-0">
      <div class="column is-12">
        <hr />
        <!--
          SUBMIT BUTTON
          -->
        <div class="form-group flex is-flex-direction-row-reverse">
          <button type="submit" class="btn btn--primary btn--medium" disabled>
            Submit
          </button>
        </div>
        <!-- /end submit button -->

      </div>
    </div>

  </form>
</template>

<script>
export default {
  name: 'FormEditBusiness',
  props: {
    activateForm: Boolean,
    isVerifiedHost: Boolean,
    isVerificationRequested: Boolean,
    userData: Object
  }
}
</script>
