<template>
  <div class="column site-content">
    <div class="container-fluid">
      <div class="columns">
        <div class="column generic-heading is-two-third"></div>
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
                    v-model="category"
                    type="text"
                    class="form-control"
                    placeholder="exp: Landscape, Camping, Beach"
                  />
                  <p class="text-warning mt-10 text-bold">
                    {{ error }}
                  </p>
                </div>
              </div>
            </div>

            <div class="columns is-gapless">
              <div class="column">
                <div class="sub-heading">
                  <p>Categories Image</p>
                </div>

                <div class="custom-file grey landscape">
                  <input
                    id="customFile"
                    type="file"
                    class="custom-file-input"
                    accept="image/*"
                    multiple
                    @change="filesChange($event)"
                  />
                  <img
                    :src="categories_image ? categories_image : '@/assets/img/ic-image-white.svg'"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="column sidebar is-one-third">
          <button
            class="btn btn--primary btn--default btn--full padding-b-m"
            @click="update()"
          >
            Update Categories
          </button>

          <router-link to="categories-tags">
            <button class="btn btn--transparent btn--default btn--full">
              Cancel
            </button>
          </router-link>

          <p
            v-if="success"
            class="text-primary mt-10 text-bold"
          >
            Categories has been updated.
          </p>

          <hr />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Categoriesedit',
  data () {
    return {
      categories_id: this.$route.params.id_categories,
      categories_image: '',
      apiUrl: `${process.env.VUE_APP_API_BASE_URL}`,
      isLoading: false,
      accessToken: '',
      items: '',
      category: '',
      success: false,
      error: ''
    }
  },
  created () {
    this.$router.onReady(() => {
      if (this.$route.name === 'categoriesedit') {
        if (!localStorage.accessToken) {
          this.$router.push({ path: '/' })
        }
        this.accessToken = localStorage.accessToken
        this.isLoading = true
        axios.get(this.apiUrl + 'package/detail/categories/' + this.categories_id + '/detail')
          .then((res) => {
            this.items = res.data.data

            this.category = this.items.category
            this.categories_image = this.items.category_image_url
            this.isLoading = false
          })
          .catch((err) => {
            this.error = err.response.data.title
            this.isLoading = false
          })
      }
    })
  },
  methods: {
    filesChange (event) {
      var formData = new FormData()
      formData.append('lokaven_file', event.target.files[0])
      formData.append('category', 'categories_image')

      axios.post(this.apiUrl + 'upload/uploader', formData)
        .then((res) => {
          this.isLoading = false
          this.error = ''
          this.categories_image = res.data.data.url
        })
        .catch((err) => {
          this.isLoading = false
          this.error = err.response.data.title
        })
    },
    update () {
      if (this.category) {
        var header = {
          headers: {
            Authorization: `Bearer ${this.accessToken}`
          }
        }
        var postData = {
          category: this.category,
          category_image_url: this.categories_image
        }
        axios.patch(this.apiUrl + 'packages/api/categories/' + this.categories_id, postData, header)
          .then((res) => {
            this.isLoading = false
            this.error = ''
            this.success = true
          })
          .catch((err) => {
            this.isLoading = false
            this.error = err.response.data.title
          })
      } else {
        this.error = 'Category name not empty!'
      }
    }
  }
}
</script>
