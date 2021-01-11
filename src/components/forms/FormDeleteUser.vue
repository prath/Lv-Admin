<template>
  <section class="message is-light mt-2">
    <div class="message-header">
      <p class="is-gapless">Permanently Delete User</p>
    </div>
    <div class="message-body">
      This process is irreversible, the user will be gone forever after your delete it. Proceed with extra caution.
      <div class="block padding-t-m">
        <button @click="toggleActiveUnableDel" class="btn btn--medium btn--muted">Delete Pratama Hasriyan</button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'FormDeleteUser'
}
</script>

<style>

</style>
