<template>
  <modal-base
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
    <!-- /end modal content -->

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
</template>

<script>
// Components
import ModalBase from '@/components/modals/ModalBase'

export default {
  name: 'UserDelete',
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
