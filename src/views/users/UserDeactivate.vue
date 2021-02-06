<template>
  <!--
    MODAL BEFORE SUBMIT & NO ERROR
   -->
  <modal-base
    v-if="isError"
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
      {{ uid }}
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
        @click="deleteUser">
        Ya, hapus
      </button>
    </template>

  </modal-base>

  <!--
    MODAL IF ANY ERRORS
   -->
  <modal-base
    v-else
    :title="`Error: Unable to deactivate ${fullName}`"
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

// External modules
import _ from 'lodash'
import Spinner from 'vue-simple-spinner'

// Components
import ModalBase from '@/components/modals/ModalBase'

export default {
  name: 'UserDeactivate',
  components: {
    ModalBase,
    Spinner
  },
  props: {
    uid: String,
    fullName: String,
    title: String
  },
  data () {
    return {
      userFullname: ''
    }
  },
  computed: {
    ...mapState({
      isLoaded: state => state.isLoaded,
      errorMsg: state => state.errorMsg
    }),
    /**
     * Check if any errors
     */
    isError: function () {
      return _.isEmpty(this.errorMsg)
    }
  },
  methods: {
    /**
     * Close or open modal
     */
    toggleModal: function () {
      this.$emit('toggleModal')
    },
    /**
     * Close or open modal
     */
    toggleModalFromError: function () {
      this.$store.commit('SET_ERR_MSG', {})
      this.$emit('toggleModal')
    },
    /**
     * Compare Full Name
     * ~~~~~
     * Compare the fullname typed by admin with the user full name that about to be deleted
     * if match, activate the delete button.
     *
     * Used as extra validation before admin permanently delete a user
     */
    compareFullName: function () {
      if (this.fullName.toLowerCase() === this.userFullname) {
        return true
      }
      return false
    },
    /**
     * Delete the user
     */
    deleteUser: function () {
      this.deactivateUser(this.uid)
        .then(() => {
          if (this.isError) {
            this.$emit('toggleModal')
          }
        })
    },
    /**
     * State Actions
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
