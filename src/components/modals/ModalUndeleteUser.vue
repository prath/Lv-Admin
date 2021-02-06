<template>
  <modal-base
    :title="title"
    @toggleModal="toggleModal">

    <!--
      MODAL CONTENT
      ~~~~~
      will be placed inside default <slot>
     -->
    <p>
      {{ fullName }} cannot be deleted, since this user still has an active packages and/or active bookings
    </p>
    <hr />
    <!-- /end modal content -->

    <!--
      OVERRIDE DEFAULT PRIMARY BUTTON
     -->
    <template #primaryButton>
      <button
        @click="toggleModal">
        OK
      </button>
    </template>

  </modal-base>
</template>

<script>
// Components or Views
import ModalBase from './ModalBase'

export default {
  name: 'ModalDeleteUser',
  components: {
    ModalBase
  },
  props: {
    fullName: String,
    title: String
  },
  data () {
    return {
      userFullname: ''
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
      console.log('hello you')
    }
  }
}
</script>

<style>

</style>
