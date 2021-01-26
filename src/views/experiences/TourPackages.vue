<template>
  <div class="column site-content">
    <div class="container-fluid">
      <hr class="space-lg" />

      <!--
        PAGE TITLE
       -->
      <page-title-default>
        <template><h3>Packages of Experiences</h3></template>
        <template #subtitle><p>List of packages available in the whole Lokaven apps</p></template>
      </page-title-default>

      <!--
        SEARCH
       -->
      <search-in-page
        v-model="search"
        placeholder="Find Packages"
      />

      <div class="columns">
        <div class="column is-full">

          <table class="table is-fullwidth table--orders">
            <thead>
              <tr>
                <th>
                  <div class="action-wrapper">
                    <div class="form-check">
                      <label class="container">
                        <input
                          type="checkbox"
                          checked="checked"
                        />
                        <span class="checkmark"></span>
                      </label>
                    </div>
                    <!--
                                            SHow when Checkbox Clicked
                                            <a href="#"><img src="@/assets/img/ic-delete.svg" alt="" /></a>
                                        -->
                  </div>
                </th>

                <th>Package</th>
                <!-- <th>Duration</th> -->
                <th>Price</th>
                <th>Schedules</th>
                <th>Location</th>
                <th></th>
              </tr>
            </thead>

            <tbody>
              <ListTour
                v-for="(item, i) in items"
                :id="item.tour_id"
                :key="i"
                :name="item.title"
                :schedules="item.schedules"
                :prices="item.prices"
                :location="item.location"
                :type-trip="item.type_tour"
                :host-id="item.host_id"
              />
            </tbody>
          </table>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ListTour from './ListTour'
// import axios from 'axios'
import { mapState, mapActions } from 'vuex'
import config from '@/config'

import {
  SearchInPage,
  PageTitleDefault
} from '@/components'

export default {
  components: {
    ListTour,
    SearchInPage,
    PageTitleDefault
  },
  data () {
    return {
      items: '',
      accessToken: '',
      apiUrl: `${process.env.VUE_APP_API_BASE_URL}`,
      isLoading: false,
      host: '',
      search: '',
      params: {
        limit: 5,
        param: 'new'
      }
    }
  },
  computed: {
    ...mapState({
      packages: state => state.packages.packages,
      pagination: state => state.packages.packagePagination
    })
  },
  methods: {
    ...mapActions([
      'getPackages'
    ])
  },
  created () {
    const pg = (this.$route.params.page) || 1
    const params = {
      limit: this.params.limit,
      page: pg,
      param: this.params.param
    }
    if (this.packages.length < 1) {
      this.getPackages(params)
    }
  },
  mounted () {
    /**
     * CHECK IF LOGGED IN
     * ~~~~~
     * @todo
     * - revisit the function, i think it doesn't really efficient.
     */
    config.authCheck()

    console.log('list package: ', this.packages)
    console.log('pagination for this page', this.pagination)

    // this.isLoading = true
    // axios.get(this.apiUrl + 'package')
    //   .then((res) => {
    //     console.log('RESPONSE RECEIVED: ', res)
    //     this.items = res.data.data
    //     this.isLoading = false
    //   })
    //   .catch((err) => {
    //     console.log('AXIOS ERROR: ', err.response.data.title)
    //     this.isLoading = false
    //   })
  }

}
</script>
