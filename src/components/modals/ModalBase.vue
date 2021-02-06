<template>
  <section class="modal is-active">

    <!--
      MODAL OVERLAY
     -->
    <div class="modal-background" @click="toggleModal"></div>

    <!--
      MODAL CONTENT
     -->
    <div class="modal-content modal--small">

      <!--
        MODAL HEADER
       -->
      <header v-if="title" class="heading border">
        <h4>{{ title }}</h4>
      </header>

      <!--
        MODAL CONTENT
       -->
      <slot name="default"></slot>

      <!--
        BUTTON ACTION
       -->
      <div v-if="primaryButton || secondaryButton" class="flex end-md">
        <slot v-if="secondaryButton" name="secondaryButton">
          <button
            class="btn btn--default btn--text btn--muted btn--medium"
            @click="secondaryButtonAction">
            Cancel
          </button>
        </slot>
        <slot v-if="primaryButton" name="primaryButton">
          <button
            class="btn btn--default btn--medium btn--primary"
            @click="primaryButtonAction">
            Submit
          </button>
        </slot>
      </div>
    </div>

    <!--
      CLOSE BUTTON
     -->
    <button
      class="modal-close is-large"
      aria-label="close"
      @click="toggleModal">
    </button>
  </section>
</template>

<script>
export default {
  name: 'ModalBase',
  props: {
    // title of the modal
    title: {
      type: String,
      default: 'Modal Title'
    },
    // to set/define/use the primary button, set it to true
    primaryButton: {
      type: Boolean,
      default: true
    },
    // to set/define/use the primary button, set it to false
    secondaryButton: {
      type: Boolean,
      default: true
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
     * Primary Button Action
     * ~~~~~
     * if there is an event attached to primary button
     */
    primaryButtonAction: function () {
      this.$emit('primaryButtonAction')
    },
    /**
     * Secondary Button Action
     * ~~~~~
     * if there is an event attached to secondary button
     */
    secondaryButtonAction: function () {
      this.$emit('secondaryButtonAction')
    }
  }
}
</script>

<style>

</style>
