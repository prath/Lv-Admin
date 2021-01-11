<template>
  <div
    class="modal"
    :class="{'is-active': isActiveDel}"
  >
    <div
      class="modal-background"
      @click="toggleActiveDel"
    ></div>
    <div class="modal-content modal--small">
      <div class="heading border">
        <h4>Hapus akun?</h4>
      </div>
      <p>Anda yakin akan manghapus user ini? user akan terhapus secara permanen setelahnya.</p>
      <hr />
      <div class="flex end-md">
        <button
          class="btn btn--default btn--text btn--muted btn--medium"
          @click="toggleActiveDel"
        >
          Cancel
        </button>
        <button
          class="btn btn--default btn--warning btn--medium"
          @click="toggleActiveDel"
        >
          Ya, hapus
        </button>
      </div>
    </div>
    <button
      class="modal-close is-large"
      aria-label="close"
      @click="toggleActiveDel"
    ></button>
  </div>
</template>

<script>
export default {
  name: 'ModalDeleteUser'
}
</script>

<style>

</style>
