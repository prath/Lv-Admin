<template>
  <!--
    MODAL BEFORE SUBMIT & NO ERROR
   -->
  <modal-base
    v-if="isErrorEmpty"
    :title="title"
    :primaryButton="true"
    :secondaryButton="true"
    @toggleModal="toggleModal"
    @secondaryButtonAction="toggleModal">

    <!--
      MODAL CONTENT
      ~~~~~
      will be placed inside default <slot>
     -->
    <spinner v-if="!isLoaded" :message="`Deactivating ${fullName}....`" />
    <template v-else>
      <p>
        To deactivate this user means, that this user will no longer be able to do anything in Lokaven, until they ask Lokaven to reactivate their account.
      </p>
      <hr />

      <!--
        FORM TO CONFIRM DELETION
        ~~~~~
        will be placed inside default <slot>
      -->
      <div class="form-group">
        <label for="userFullname">Please write user's full name to confirm</label>
        <input
          type="text"
          v-model="userFullname"
          class="form-control"
          placeholder="user's full name"
          @keyup="compareFullName" />
      </div>
      <!-- /end modal content -->
    </template>

    <!--
      OVERRIDE DEFAULT PRIMARY BUTTON
    -->
    <template #primaryButton>
      <button
        class="btn btn--default btn--medium"
        :class="[ compareFullName() ? 'btn--warning' : 'btn--disabled' ]"
        :disabled="!compareFullName()"
        @click="deactivate">
        Deactivate
      </button>
    </template>

  </modal-base>

  <!--
    MODAL IF ANY ERRORS
   -->
  <modal-base
    v-else
    :title="`Unable to deactivate ${fullName}`"
    :primaryButton="false"
    :secondaryButton="false"
    @toggleModal="toggleModalFromError">

    We're sorry, we're unable to deactivate {{ fullName }}
    {{ errorMsg.msg.message }}

  </modal-base>
</template>

<script>
// Internal modules
import { mapActions, mapState } from 'vuex'
import appStates from '@/mixins/appStates'

// External modules
import Spinner from 'vue-simple-spinner'

// Components
import ModalBase from '@/components/modals/ModalBase'

export default {
  name: 'UserDeactivate',
  components: {
    ModalBase,
    Spinner
  },
  mixins: [appStates],
  props: {
    // user_uid to be updated
    uid: String,
    // user's full name to be used in validation
    fullName: String,
    // modal title
    title: String
  },
  data () {
    return {
      userFullname: ''
    }
  },
  computed: {
    /**
     * VUEX STATES
     * ~~~~~
     * isLoaded: preloader
     * errorMsg: error message (this one need to be refactored tho)
     */
    ...mapState({
      isLoaded: state => state.isLoaded,
      errorMsg: state => state.errorMsg
    })
  },
  methods: {
    /**
     * CLOSE OR OPEN MODAL
     */
    toggleModal: function () {
      this.$emit('toggleModal')
    },
    /**
     * CLOSE MODAL FROM ERROR STATE
     */
    toggleModalFromError: function () {
      this.$store.commit('SET_ERR_MSG', {})
      this.$emit('toggleModal')
    },
    /**
     * COMPARE FULL NAME
     * ~~~~~
     * Compare the fullname typed by admin with the user full name that about to be deleted
     * if match, activate the delete button.
     *
     * Used as extra validation before admin permanently delete a user
     */
    compareFullName: function () {
      if (this.fullName === this.userFullname) {
        return true
      }
      return false
    },
    /**
     * DEACTIVATE THE USER
     */
    deactivate: function () {
      this.deactivateUser(this.uid)
        .then(() => {
          if (this.isErrorEmpty) {
            this.$emit('toggleModal')
          }
        })
    },
    /**
     * VUEX ACTIONS
     * ~~~~~
     * - deactivateUser: deactivate current user
     */
    ...mapActions([
      'deactivateUser'
    ])
  }
}
</script>

<style>

</style>
