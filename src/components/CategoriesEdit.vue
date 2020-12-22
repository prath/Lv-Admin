<template>
  <div class="column site-content">
    <div class="container-fluid">
      <div class="columns">
        <div class="column generic-heading is-two-third" />
      </div>

      <div class="columns">
        <div class="column is-two-third">
          <div class="card card--statistic">
            <div class="heading border">
              <h4>Categories Edit</h4>
            </div>

            <div class="sub-heading">
              <p>Basic Info</p>
            </div>


            <div class="columns is-gapless">
              <div class="column">
                <div class="form-group">
                  <label for="first_name">Categories</label>
                  <input
                    id="harga"
                    type="text"
                    class="form-control"
                    placeholder="exp: Landscape, Camping, Beach"
                    v-model="categories_name"
                  >
                </div>
              </div>
            </div>

            <div class="columns is-gapless">
              <div class="column">
                 <div class="sub-heading">
                    <p>Categories Image</p>
                  </div>

                  <div class="custom-file grey">
                    <input
                      id="customFile"
                      type="file"
                      class="custom-file-input"
                       @change="filesChange($event)"
                       accept="image/*"
                        multiple
                    >
                    <img
                      :src="categories_image ? categories_image : '../assets/img/ic-image-white.svg'"
                      alt=""
                    >
                  </div>
              </div>
            </div>
          </div>
        </div>
        <div class="column sidebar is-one-third">
          <button class="btn btn--primary btn--default btn--full padding-b-m">
            Update Categories
          </button>

          <router-link to="categories-tags">
            <button class="btn btn--transparent btn--default btn--full">
              Cancel
            </button>
          </router-link>

          <hr>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default{
  name: "categoriesedit",
  data(){
    return {
      categories_id: this.$route.params.id_categories,
      categories_image: '',
      apiUrl: `${process.env.VUE_APP_API_BASE_URL}`,
      isLoading: false,
      accessToken: '',
      items: '',
      categories_name:''
    }
  },
   methods: {
     filesChange(event) {

        var formData = new FormData()
        formData.append("lokaven_file", event.target.files[0])
        formData.append("category", "categories_image")

        axios.post(this.apiUrl + 'upload/uploader', formData)
        .then((res) => {
          console.log("RESPONSE RECEIVED: ", res)
          this.isLoading = false
          this.error = ''
          this.categories_image =  res.data.data.url
        })
        .catch((err) => {
          console.log("AXIOS ERROR: ", err.response.data.title);

          this.isLoading = false;
          this.error = err.response.data.title;
        })

      }
   },
   created () {
     //this.property = 'Example property update.'

    console.log('propertyComputed will update, as this.property is now reactive.')
    this.$router.onReady(() => {
      if (this.$route.name === 'categoriesedit') {

          if (!localStorage.accessToken) {
              this.$router.push({ path: '/' })
            }
            this.isLoading = true;
            axios.get(this.apiUrl + 'packages/api/categories/' + this.categories_id)
              .then((res) => {
                console.log("RESPONSE RECEIVED: ", res)
                this.items = res.data.data

                this.categories_name = this.items.category
                this.isLoading = false

              })
              .catch((err) => {
                console.log("AXIOS ERROR: ", err.response.data.title)
                this.isLoading = false
              })
      }
    })
  }
}
</script>