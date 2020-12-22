<template>
  <div class="column site-content">
    <div class="container-fluid">
      <!--
                ////////////////////////////////////////////////////
                more comming tour
            -->

      <hr class="space-lg">

      <div class="columns">
        <div class="column generic-heading is-two-third">
          <h3>Categories</h3>
          <p>List of Categories</p>
        </div>

        <div class="column generic-heading is-one-third flex end-xs ">
          <router-link to="/categories-add">
            <button class="btn btn--medium btn--primary is-right">
              Add Categories
            </button>
          </router-link>
        </div>
      </div>



      <div class="columns filter-table-list">
        <div class="column is-full filter-wrapper">
          <div class="form-group icon-search">
            <img
              src="../assets/img/ic-search.svg"
              alt=""
            >
            <input
              id="form1"
              type="text"
              class="form-control"
              placeholder="Find Categories"
            >
          </div>
        </div>
      </div>

      <div class="columns">
        <div class="column is-full">
          <table class="table is-fullwidth table--orders">
            <thead>
              <tr>
                <th>No</th>
                <th>Categories</th>
                <th>Categories Used</th>
                <th>Image</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              <template v-for="(categories,key) in categoriesList">
                <tr>

                  <td>
                    <div class="wrapper">
                      <span class="order_number">{{ key+1 }}</span> <br>
                    </div>
                  </td>

                  <td>
                    <div class="wrapper">
                      <span class="info">{{ categories.category }}</span> <br>
                    </div>
                  </td>

                  <td>
                    <div class="wrapper center">
                      <span class="info">{{ categories.count_used > 1 ? categories.count_used + ' Tour' : categories.count_used + ' Tours' }}</span> <br>
                    </div>
                  </td>

                  <td>
                    <div class="wrapper">
                      <span class="info">
                        <img v-if="categories.category_image_url" :src="categories.category_image_url" class="img-wrapper large" />
                        <img v-else src="../assets/img/no-image-available.png" class="img-wrapper large" />
                      </span> <br>
                    </div>
                  </td>
                  <td>
                    <div class="wrapper">
                      <span class="info icon">
                        <router-link :to="'/categories-edit/' + categories.category_id">
                          <a title="Edit Categories"><img
                            src="../assets/img/ic-edit-line.svg"
                            title="Edit Categories"
                          ></a>
                        </router-link>
                        <a title="Delete User">
                          <img
                            src="../assets/img/ic-delete-line.svg"
                            title="Delete Categories"
                          >
                        </a>
                      </span>
                    </div>
                  </td>
                </tr>
              </template>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data(){
		return {
      categoriesList: '',
      accessToken: '',
      apiUrl: `${process.env.VUE_APP_API_BASE_URL}`,
      isLoading: false,
      defaultImage: '../assets/img/no-image-available.png'
      }
   },
   mounted() {
      if (!localStorage.accessToken) {
        this.$router.push({ path: '/' })
      }
      this.isLoading = true;
      axios.get(this.apiUrl + 'package/categories?param=used')
        .then((res) => {
          console.log("RESPONSE RECEIVED: ", res)
          this.categoriesList = res.data.data
          this.isLoading = false

        })
        .catch((err) => {
          console.log("AXIOS ERROR: ", err.response.data.title)
          this.isLoading = false
        })
    },
}
</script>