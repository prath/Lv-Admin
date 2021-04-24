<template>
  <div class="column site-content">
    <div class="container-fluid">
      <hr class="space-lg" />

      <!--
        PAGE TITLE
       -->
      <PageTitleDefault :actionButton="{ title: 'Add Promo', url: '/promo-codes/add' }">
        <template><h3>Promotion Codes</h3></template>
        <template #subtitle><p>List of Promotion Codes</p></template>
      </PageTitleDefault>
      <!-- /end page title -->

      <!--
        ERROR
       -->
      <section v-if="!isErrorEmpty">
        <pre>
            We're sorry, we're not able to retrieve this information at the moment, please try back later
            {{ errorMsg.code }} - {{ errorMsg.msg }}
        </pre>

      </section>
      <!-- /error message -->

      <section v-else>
        <!--
          SEARCH
        -->
        <SearchInPage
          v-model="search"
          placeholder="Find Promo Code"
        />
        <!-- /end search -->

        <div class="columns">
          <div class="column is-full">

            <!--
              TABLE USERS
            -->
            <spinner v-if="!isLoaded" message="Loading Promo List...." />
            <lv-table
              v-else
              :fields="tableData.fields"
              :items="setupTableData"
            >

              <template #actionButtons="data">
                <template v-for="(dt, idx) in data.data">
                  <router-link :to="{ name: 'promodetail', params: { id: dt.identifier }}" :key="idx">
                    <span class="info icon"><img :src="`${dt.iconsrc}`" /></span>
                  </router-link>
                </template>
              </template>

            </lv-table>
            <!-- /end table users -->

          </div>
        </div>

        <div class="columns">
          <div class="column is-full">

            <!--
              PAGINATION
            -->
            <PaginationDefault
              v-if="isLoaded"
              :pageData="pagination"
              page="promo-codes"
              @changePage="handlePaging"
            />

            {{ pagination }}
            <!-- /end pagination -->

          </div>
        </div>
      </section>

    </div>
  </div>
</template>

<script>
// internal modules
import { mapState, mapActions } from 'vuex'
import auth from '@/mixins/auth'
import appStates from '@/mixins/appStates'

// external modules
import _ from 'lodash'
import Spinner from 'vue-simple-spinner'

// components & views
import { PageTitleDefault, SearchInPage, PaginationDefault, LvTable } from '@/components'

export default {
  name: 'PromoCodes',
  components: {
    PaginationDefault,
    PageTitleDefault,
    SearchInPage,
    LvTable,
    Spinner
  },
  mixins: [auth, appStates],
  data () {
    return {
      // search query model
      search: '',
      // param to fetch users data from API.
      params: {
        limit: 10,
        param: 'all'
      },
      // user table data
      tableData: {
        // will be rendered as table headings
        fields: ['', 'Name', 'Discount', 'Expired', 'Promo Used']
      }
    }
  },
  computed: {
    /**
     * INIT STATES
     * ~~~~~~
     * Initiate States from vuex store
     */
    ...mapState({
      promo: state => state.promo.promo,
      pagination: state => state.promo.pagination,
      isLoaded: state => state.isLoaded,
      errorMsg: state => state.errorMsg
    }),
    /**
     * SETUP TABLE DATA
     * ~~~~~
     */
    setupTableData () {
      const tableData = []
      // pick all the data required to be displayed in table
      // console.log(this.promo.promo)
      const sorted = _.map(this.promo, val => {
        return _.pick(val, ['promo_id', 'image', 'title_promo', 'discount', 'expired', 'tours', 'promotion_used'])
      })

      // Loop through the sorted users object to assign the data from API to be used in table
      _.forIn(sorted, (v, k) => {
        const image = {
          image: {
            value: v.image,
            tag: 'img'
          }
        }

        const name = {
          name: {
            value: v.title_promo,
            className: 'title-link'
          }
        }

        const discount = {
          discount: {
            value: v.discount
          }
        }

        const expired = {
          expired: {
            value: v.expired
          }
        }

        const promoUsed = {
          promoUsed: {
            value: v.promotion_used
          }
        }

        // Set action button
        const actionButtons = {
          actionButtons: {
            viewButton: {
              iconsrc: 'assets/img/ic-edit-line.svg',
              identifier: v.promo_id
            }
          }
        }

        // need to be in order, matching this.tableData.fields
        tableData[k] = { ...image, ...name, ...discount, ...expired, ...promoUsed, ...actionButtons }
      })

      // filter to be used in search
      const filtered = _.filter(tableData, (data) => {
        return data.name.value.toLowerCase().includes(this.search.toLowerCase())
      })

      return filtered
    }
  },
  methods: {
    /**
     * INIT ACTIONS
     * ~~~~~
     * initiates actions that will be used in this SFC
     */
    ...mapActions([
      'getPromos'
    ]),
    /**
     * HANDLE PAGING
     * ~~~~~
     * Pagination requests
     */
    handlePaging () {
      const params = {
        limit: this.params.limit,
        page: this.$route.params.page,
        param: this.params.param
      }
      this.getPromos(params)
        .then(() => {
          this.isUnauthorized()
        })
    }
  },
  mounted () {
    /**
     * GET PROMOS DATA
     * ~~~~~
     */
    const pg = (this.$route.params.page) || 1
    const params = {
      limit: this.params.limit,
      page: pg,
      param: this.params.param
    }

    if (this.promo.length < 1) {
      this.getPromos(params)
        .then(() => {
          this.isUnauthorized()
        })
    }
  }
}
</script>
