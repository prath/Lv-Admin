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
                <th style="width:10%;">
                  <div class="action-wrapper">
                    <div class="form-check">
                      <label class="container">
                        <input
                          type="checkbox"
                          checked="checked"
                        >
                        <span class="checkmark" />
                      </label>
                    </div>
                    <!--
                                            SHow when Checkbox Clicked
                                            <a href="#"><img src="../assets/img/ic-delete.svg" alt="" /></a>
                                        -->
                  </div>
                </th>

                <th>No</th>
                <th>Categories</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              <template v-for="(categories,key) in categoriesList">
                <tr>
                  <td>
                    <div class="wrapper">
                      <div class="form-check">
                        <label class="container">
                          <input
                            type="checkbox"
                          >
                          <span class="checkmark" />
                        </label>
                      </div>
                    </div>
                  </td>

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
                    <div class="wrapper">
                      <span class="info icon">
                        <router-link :to="categories-edit + categories.category_id">
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

      /*
      categoriesList : [
                  {
                    "id": '1' ,
                    "categories": 'Wisata'
                  },
                  {
                    "id": '2' ,
                    "categories": 'Outdoor'
                  },
                  {
                    "id": '3' ,
                    "categories": 'Mountain'
                  },
                   {
                    "id": '4' ,
                    "categories": 'Sea'
                  },

        ]
        */

      }
   },
   mounted() {
      if (!localStorage.accessToken) {
        this.$router.push({ path: '/' })
      }
      this.isLoading = true;
      axios.get(this.apiUrl + 'package/categories')
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