<template>
  <div class="modal is-active">
    <div class="modal-background"></div>
    <div class="modal-content modal--big">

      <div class="heading border with-avatar">
        <div class="avatar avatar--medium avatar--profile"><img src="https://images.unsplash.com/photo-1516914943479-89db7d9ae7f2?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTl8fHBvcnRyYWl0fGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60" title="Profile picture"></div>
        <header>
          <h4 class="head">Magnotravel</h4>
          <span class="sub-head">Pratama Hasriyan Salahudin</span>
        </header>
        <span class="badges badges--unverified">unverified</span>
      </div>

      <section>
        <p>Anda yakin akan manghapus user ini? user akan terhapus secara permanen setelahnya.</p>  
      </section>
      
      <hr>
      <div class="flex end-md">
        <button class="btn btn--default btn--text btn--muted btn--medium">Cancel</button>
        <button class="btn btn--default btn--warning btn--medium">Ya, hapus</button>
      </div>
    </div>
    <button class="modal-close is-large" aria-label="close"></button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: [],
      hostId: this.$route.params.id_req,
    }
  },
  mounted() {
    console.log(this.hostId)
  }
}
</script>