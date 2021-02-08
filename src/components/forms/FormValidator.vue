<template>
  <span class="error-tip">
    {{ validate }}
  </span>
</template>

<script>
export default {
  name: 'FormValidator',
  props: {
    field: String,
    fieldName: String,
    isValidated: Boolean
  },
  computed: {
    validate: function () {
      return (this.isValidated) ? (!this.field) ? `${this.fieldName} is required` : '' : ''
    }
  }
}
</script>

<style>

</style>
