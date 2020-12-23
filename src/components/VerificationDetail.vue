<template>
  <div class="modal is-active">
    <div class="modal-background"></div>
    <div class="modal-content modal--big">

      <div class="heading border with-avatar">
        <div class="avatar avatar--medium avatar--profile"><img src="https://images.unsplash.com/photo-1516914943479-89db7d9ae7f2?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTl8fHBvcnRyYWl0fGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60" alt="Profile picture"></div>
        <header>
          <h4 class="head">Magnotravel</h4>
          <span class="sub-head">Pratama Hasriyan Salahudin</span>
        </header>
        <span class="badges badges--unverified">unverified</span>
      </div>

      <section>
        <div class="meta-info flex between-md top-md">
          <div class="item-container">
            <div class="item">
              <div class="title">Business Address</div>
              <div class="value">Jl Batununggal Permai II no. 60 Mengger Kecamatan Bandung Kidul Kota Bandung</div>
            </div>
            <div class="item">
              <div class="title">Business Category</div>
              <div class="value">Corporate Experience</div>
            </div>
          </div>

          <div class="item-container">
            <div class="item">
              <div class="title">About Business</div>
              <div class="value">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin est augue, fringilla nec pellentesque eget, bibendum vel mauris. Nam at eros tincidunt, vulputate lorem ut, semper quam. Sed venenatis augue nec maximus suscipit. Nulla facilisi. Aenean placerat id turpis vel imperdiet.</div>
            </div>
          </div>

          <div class="item-container">
             <div class="item">
              <div class="title">Phone</div>
              <div class="value">+62 813 2047 1003</div>
            </div>
            <div class="item">
              <div class="title">Email</div>
              <div class="value">pratama@hasriyan.com</div>
            </div>
            <div class="item">
              <div class="title">Signup Date</div>
              <div class="value">20 Jan 2020</div>
            </div>
          </div>
          
        </div> 
        <hr>
        <h5>Uploaded Photos</h5>
        <div class="flex between-md top-md">
          <figure class="photo-id">
            <img src="https://images.unsplash.com/photo-1542513217-0b0eedf7005d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjV8fHBvcnRyYWl0fGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60" alt="ID Card">
            <figcaption>Photo ID Card</figcaption>
            <span class="badges badges--unverified">Unverified</span>
            <div class="form-group">
              <div class="select select-narrow">
                <select class="form-control narrow">
                  <option>- Review this photo -</option>
                  <option>Approve</option>
                  <option>Reject</option>
                </select>
              </div>
            </div>
          </figure>
          <figure class="photo-id">
            <img src="https://images.unsplash.com/photo-1542513217-0b0eedf7005d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjV8fHBvcnRyYWl0fGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60" alt="ID Card">
            <figcaption>Photo ID Card</figcaption>
            <span class="badges badges--unverified">Unverified</span>
            <div class="form-group">
              <div class="select select-narrow">
                <select class="form-control narrow">
                  <option>- Review this photo -</option>
                  <option>Approve</option>
                  <option>Reject</option>
                </select>
              </div>
            </div>
          </figure>
        </div>

      </section>
      
      <hr>
      <div class="action-button-group flex between-md middle-md">
        <h5>Verify this host</h5>
        <div>
          <button class="btn btn--default btn--text btn--muted btn--medium">Cancel</button>
          <button class="btn btn--default btn--primary btn--medium">Approve &amp; Verify</button>
        </div>
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