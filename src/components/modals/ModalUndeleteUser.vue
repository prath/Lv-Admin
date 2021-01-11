<template>
  <div
    class="modal"
    :class="{'is-active': isActiveUnableDel}"
  >
    <div
      class="modal-background"
      @click="toggleActiveUnableDel"
    ></div>
    <div class="modal-content modal--small">
      <div class="heading border">
        <h4>Tidak dapat dihapus</h4>
      </div>
      <p>User ini tidak dapat dihapus karena masih memiliki booking active (unpaid/paid) dan/atau experience yang active (awaiting/ongoing)</p>
      <hr />
      <div class="flex end-md">
        <button
          class="btn btn--default btn--text btn--muted btn--medium"
          @click="toggleActiveUnableDel"
        >
          OK
        </button>
      </div>
    </div>
    <button
      class="modal-close is-large"
      aria-label="close"
      @click="toggleActiveUnableDel"
    ></button>
  </div>
</template>

<script>
export default {
  name: 'ModalUndeleteUser'
}
</script>

<style>

</style>
