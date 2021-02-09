<template>
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
    <spinner v-if="!isLoaded" :message="`Deleting ${fullName}....`" />
    <template v-else>
      <p>
        {{ fullName }} account <strong>will be gone forever</strong> once you delete it, so please proceed with caution, since it's irreversible
      </p>
      <hr />

      <!--
        FORM TO CONFIRM DELETION
        ~~~~~
        will be placed inside default <slot>
      -->
      <div class="form-group">
        <label for="userFullname">Please write user's full name to confirm deletion</label>
        <input
          type="text"
          v-model="userFullname"
          class="form-control"
          placeholder="user's full name"
          @keyup="compareFullName" />
      </div>
      <hr />
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
        @click="delUser">
        Delete
      </button>
    </template>

  </modal-base>

  <!--
    MODAL IF ANY ERRORS
   -->
  <modal-base
    v-else
    :title="`Unable to delete ${fullName}`"
    :primaryButton="false"
    :secondaryButton="false"
    @toggleModal="toggleModalFromError">

    We're sorry, we're unable to delete {{ fullName }}
    {{ errorMsg.msg.message }}

  </modal-base>

</template>

<script>
// Internal modules
import { mapState, mapActions } from 'vuex'
import appStates from '@/mixins/appStates'

// External module
import Spinner from 'vue-simple-spinner'

// Components
import ModalBase from '@/components/modals/ModalBase'

export default {
  name: 'UserDelete',
  components: {
    ModalBase,
    Spinner
  },
  mixins: [appStates],
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
    })
  },
  methods: {
    ...mapActions([
      'deleteUser'
    ]),
    /**
     * Close or open modal
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
     * Compare Full Name
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
     * Delete the user
     */
    delUser: function () {
      this.deleteUser(this.uid)
        .then(() => {
          if (this.isErrorEmpty) {
            this.$router.go(-1)
            this.$emit('toggleModal')
          }
        })
    }
  }
}
</script>

<style>

</style>
