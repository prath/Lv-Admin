<template>
  <form @submit.prevent="signupAsHost" class="mt-6">
    <div class="columns padding-bottom-none">
      <!--
        BUSINESS NAME
        -->
      <div class="column is-6">
        <div class="form-group">
          <label for="last_name">Business Name</label>
          <input
            v-model="business.name"
            :placeholder="userData.business_name"
            type="text"
            class="form-control"
            :disabled="!activeField"
          />
          <form-validator
            fieldName="Business Name"
            :isValidated="validate"
            :field="business.name"
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
            <select
              v-model="business.cat"
              class="form-control"
              :disabled="!activeField">
              <option
                value=""
                disabled
                selected
              >
                {{ userData.business_category }}
              </option>
              <option value="Personal Tour">
                Personal Tour
              </option>
              <option value="Corporate Tour">
                Corporate Tour
              </option>
              <option value="Personal &amp; Corporate Tour">
                Personal &amp; Corporate Tour
              </option>
            </select>
          </div>
          <form-validator
            fieldName="Business Category"
            :isValidated="validate"
            :field="business.cat"
          />
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
            v-model="business.address"
            :placeholder="userData.address"
            class="form-control"
            rows="2"
            cols="10"
            :disabled="!activeField"
          ></textarea>
          <form-validator
            fieldName="Business Address"
            :isValidated="validate"
            :field="business.address"
          />
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
            v-model="business.about"
            :placeholder="userData.business_about"
            class="form-control"
            rows="5"
            cols="10"
            :disabled="!activeField">
          </textarea>
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
        <div class="message is-info mb-5 verification-data-verified" v-else-if="isHost">
          <div class="message-body">
            <h5>This user is a host</h5>
            <div class="control">
              this user already a host
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
                <input v-model="business.verification" type="radio" value="true" :disabled="!activeField" />
                Yes, verify
              </label>
              <label class="radio">
                <input v-model="business.verification" type="radio" value="false" :disabled="!activeField" />
                No, let the user verify it themselves
              </label>
            </div>
            <form-validator
              fieldName="Business Verification"
              :isValidated="validate"
              :field="business.verification"
            />
          </div>
        </div>
        <!-- /end verification status -->

      </div>
    </div>

    <!--
      ERROR
    -->
    <section v-if="!isErrorEmpty">
      {{ errorMsg }}
      <pre>
          We're sorry, we're not able to update this user for now, please try back later
          {{ errorMsg.msg.message }}
      </pre>

    </section>
    <!-- /error message -->

    <div v-if="activeField" class="columns pb-0">
      <div class="column is-12">
        <hr />
        <!--
          SUBMIT BUTTON
          -->
        <div class="form-group flex is-flex-direction-row-reverse">
          <button type="submit" class="btn btn--primary btn--medium">
            <spinner v-if="!isLoaded" size="small" />
            <template v-else>Submit</template>
          </button>
        </div>
        <!-- /end submit button -->

      </div>
    </div>

  </form>
</template>

<script>
/**
 * CONVERT GUEST INTO HOST
 *
 * @todo
 * - error handling
 */

// Internal modules
import { mapActions, mapState } from 'vuex'
import appStates from '@/mixins/appStates'

// External modules
// import _ from 'lodash'
import Spinner from 'vue-simple-spinner'

// Components
import { FormValidator } from '@/components'

export default {
  name: 'UserConvert',
  components: {
    FormValidator,
    Spinner
  },
  mixins: [appStates],
  props: {
    activateForm: Boolean,
    isHost: Boolean,
    isVerificationRequested: Boolean,
    userData: Object
  },
  data () {
    return {
      business: {
        // Set all required fields into null for starter
        name: null,
        cat: null,
        address: null,
        verification: null,
        // and set optional fields into '' for starter
        about: ''
      },
      validate: false,
      activeField: false
    }
  },
  computed: {
    ...mapState({
      isLoaded: state => state.isLoaded
    })
  },
  watch: {
    activateForm (newVal) {
      this.activeField = newVal
    }
  },
  methods: {
    /**
     * VUEX ACTIONS
     */
    ...mapActions([
      'signGuestAsHost'
    ]),
    /**
     * SIGN GUEST AS HOST
     */
    signupAsHost: function () {
      // mark that the submit button is clicked, and send this marker into FormValidator comp to validate each form field
      this.validate = true

      // check if al required fields is filled
      const filled = Object.values(this.business).every((v) => v !== null)

      // Payload that going to be sent to server
      const businessData = {
        business_name: this.business.name,
        business_category: this.business.cat,
        business_about: this.business.about,
        address: this.business.address,
        is_verified: (this.business.verification === 'true')
      }

      const user = {
        uid: this.userData.user_uid
      }

      // If every required fields are filled, then process the post
      if (filled) {
        this.signGuestAsHost({ businessData, user })
          .then(() => {
            // disable every field after successfully updated the host data
            this.activeField = false
          })
      }
    }
  }
}
</script>
