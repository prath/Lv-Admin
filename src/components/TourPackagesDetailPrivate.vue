<template>
  <div class="column site-content">
    <div class="container-fluid">
      <!--
                ////// TOUR DETAIL
                ////////////////////////////////////////////////////////////
            -->

      <div class="columns">
        <div class="column generic-heading is-two-third">
          <h3>TOUR DETAIL</h3>
          <p>Tour Name : <b> {{ items.title }} </b></p>
        </div>
        <div class="column generic-heading is-one-third has-text-right is-vcentered ">
          <span class="badges badges--primary">{{ items.type_tour }}</span>
        </div>
      </div>

      <div class="columns">
        <div class="column is-two-third">
          <div class="card card--statistic">
            <div class="heading columns border is-vcentered">
              <h4 class="column">
                Description
              </h4>
              <div
                v-for="(item, i) in items.schedules"
                :key="i"
                class="flex item-durations"
              >
                <p
                  v-if="i <= 0"
                  class=" column is-pulled-right has-text-right"
                ></p>
              </div>
            </div>

            <div class="clear"></div>

            <div class="description_tour">
              <div
                v-for="(item, i) in items.medias"
                :key="i"
                class="flex item-durations"
              >
                <img
                  v-if="i <= 0"
                  :src="item.url"
                  alt=""
                />
              </div>
              <div class="clear"></div>
              <p>
                {{ items.description }}
              </p>
            </div>

            <div class="clear"></div>
            <div class="heading columns">
              <h4 class="column">
                Term of Services & Policy
              </h4>
            </div>
            <p>{{ items.terms_of_service }}</p>
            <div
              v-for="(item, i) in items.custom_policies"
              :key="i"
              class="flex item-durations price-flex"
            >
              <p>{{ item.policy }}</p>
            </div>

            <div class="clear"></div>
            <div class="heading columns">
              <h4 class="column">
                Price
              </h4>
            </div>

            <div
              v-for="(item, i) in items.prices"
              :key="i"
              class="flex item-durations price-flex"
            >
              <ol>
                <li> <h6>{{ item.min_participant }} - {{ item.max_participant }} Persons : Rp. {{ Number(item.price).toLocaleString('id') }},- / pax </h6></li>
                <li><h6>Kid Price : Rp. {{ Number(item.kid_price).toLocaleString('id') }},- / pax</h6></li>
                <li><h6>Min Kids Age : {{ item.min_kid_age }} to {{ item.max_kid_age }} Years</h6></li>
              </ol>
              <div class="clear"></div>
            </div>

            <div class="clear"></div>
            <div class="heading columns">
              <h4 class="column">
                Schedules
              </h4>
            </div>

            <table class="table is-fullwidth table--orders--detail">
              <tbody>
                <div
                  v-for="(item, i) in items.schedules"
                  :key="i"
                  class="flex item-durations price-flex"
                >
                  <tr class="product">
                    <td>
                      <div class="wrapper">
                        <div>
                          <span><b> {{ item.start_date | formatDate }}</b></span>
                          <p> {{ item.start_date | formatDay }}</p>
                        </div>
                      </div>
                    </td>

                    <td>
                      <div class="wrapper">
                        <div>
                          <p>{{ item.durations > 1 ? item.durations + ' Day' : item.durations + ' Days' }}</p>
                        </div>
                      </div>
                    </td>

                    <td>
                      <div class="wrapper"></div>
                    </td>
                  </tr>
                </div>
              </tbody>
            </table>

            <div class="clear"></div>
            <div class="heading columns">
              <h4 class="column">
                Location
              </h4>
            </div>

            <div class="mapouter">
              <div class="gmap_canvas">
                <iframe
                  id="gmap_canvas"
                  width="100%"
                  height="auto"
                  :src="'https://maps.google.com/maps?q='+items.location+'ciwidey%20&t=&z=10&ie=UTF8&iwloc=&output=embed'"
                  frameborder="0"
                  scrolling="no"
                  marginheight="0"
                  marginwidth="0"
                  style="height:500px"
                ></iframe>
              </div>
            </div>

            <!--

            <div class="clear" />
            <div class="heading column">
              <h4>Rating</h4>
            </div>

            <div class="comments">
              <div class="comment-wrapper">
                <div class="comments">
                  <div class="comment-wrapper">
                    <div class="user">
                      <div>
                        <div class="avatar avatar--small">
                          <img
                            src="../assets/img/avatar.png"
                            alt=""
                          >
                        </div>
                      </div>
                      <div class="name">
                        <p>
                          <span class="bold">Pratama Hasriyan</span>
                        </p>
                      </div>
                    </div>

                    <div class="content">
                      <span class="four-star">
                        <img
                          src="../assets/img/ic-star-full.svg"
                          alt=""
                        >
                        <img
                          src="../assets/img/ic-star-full.svg"
                          alt=""
                        >
                        <img
                          src="../assets/img/ic-star-full.svg"
                          alt=""
                        >
                        <img
                          src="../assets/img/ic-star-full.svg"
                          alt=""
                        >
                        <img
                          src="../assets/img/ic-star-empty.svg"
                          alt=""
                        >
                      </span>
                      <p>
                        Taufik is so friendly, enthousiastic and open! We had a great
                        time with her. She told us a lot of stories and bad great tips
                        dit the rest of our stay in Bandung. I would recommend this
                        experience to anyone!
                      </p>
                    </div>

                  </div>
                </div>

                <div class="comments">
                  <div class="comment-wrapper">
                    <div class="user">
                      <div>
                        <div class="avatar avatar--small">
                          <img
                            src="../assets/img/avatar.png"
                            alt=""
                          >
                        </div>
                      </div>
                      <div class="name">
                        <p>
                          <span class="bold">Pratama Hasriyan</span>
                        </p>
                      </div>
                    </div>

                    <div class="content">
                      <span class="three-star">
                        <img
                          src="../assets/img/ic-star-full.svg"
                          alt=""
                        >
                        <img
                          src="../assets/img/ic-star-full.svg"
                          alt=""
                        >
                        <img
                          src="../assets/img/ic-star-empty.svg"
                          alt=""
                        >
                        <img
                          src="../assets/img/ic-star-empty.svg"
                          alt=""
                        >
                        <img
                          src="../assets/img/ic-star-empty.svg"
                          alt=""
                        >
                      </span>
                      <p>
                        Had an amazing tour with Michelle! I was traveling with my
                        grandmother and she Made a special tour for us so it was
                        suitable for my grandmother. Michelle was super friendly and
                        gave us wonderful tips for the rest of our stay, would recommend
                        this
                      </p>
                    </div>

                  </div>
                </div>
              </div>
            </div>

            <div class="clear" />
            <div class="heading columns">
              <h4 class="column">
                Activity
              </h4>
            </div>

            <div class="columns">
              <ul class="activity">
                <li>
                  <div class="avatar avatar--medium">
                    <img
                      src="../assets/img/ic-order-completed.svg"
                      alt=""
                    >
                  </div>

                  <div class="info_activity">
                    <span><b>Order telah Sampai tujuan</b></span>
                    <p>May 11, 2018 3:35PM</p>
                  </div>
                </li>

                <li>
                  <div class="avatar avatar--medium">
                    <img
                      src="../assets/img/ic-order-shipped.svg"
                      alt=""
                    >
                  </div>

                  <div class="info_activity">
                    <span><b>Order telah dikirim</b></span>
                    <p>May 11, 2018 3:35PM</p>
                  </div>
                </li>

                <li>
                  <div class="avatar avatar--medium">
                    <img
                      src="../assets/img/ic-email-confirm.svg"
                      alt=""
                    >
                  </div>

                  <div class="info_activity">
                    <span><b>Email konfirmasi pengiriman telah dikirimkan</b></span>
                    <p>May 11, 2018 3:35PM</p>
                  </div>
                </li>

                <li>
                  <div class="avatar avatar--medium">
                    <img
                      src="../assets/img/ic-tracking-number.svg"
                      alt=""
                    >
                  </div>

                  <div class="info_activity">
                    <span><b>Nomor Tracking telah ditambahkan</b></span>
                    <p>May 11, 2018 3:35PM</p>
                  </div>
                </li>

                <li>
                  <div class="avatar avatar--medium">
                    <img
                      src="../assets/img/ic-payment.svg"
                      alt=""
                    >
                  </div>

                  <div class="info_activity">
                    <span><b>Pembayaran telah dilakukan</b></span>
                    <p>May 11, 2018 3:35PM</p>
                  </div>
                </li>

                <li>
                  <div class="avatar avatar--medium">
                    <img
                      src="../assets/img/ic-order-create.svg"
                      alt=""
                    >
                  </div>

                  <div class="info_activity">
                    <span><b>Order dibuat</b></span>
                    <p>May 11, 2018 3:35PM</p>
                  </div>
                </li>
              </ul>
            </div>
            -->
          </div>
        </div>
        <div class="column sidebar is-one-third">
          <div class="title">
            Categories
          </div>

          <div class="detail-info">
            <div
              v-for="(item, i) in items.categories"
              :key="i"
              class="flex item-durations price-flex"
            >
              <p>
                <b>{{ item }}, </b>
              </p>
            </div>
          </div>

          <hr class="no-line sm" />

          <div class="title">
            Tags
          </div>

          <div class="detail-info">
            <div
              v-for="(item, i) in items.tags"
              :key="i"
              class="flex item-durations price-flex"
            >
              <p><b>{{ item }}, </b></p>
            </div>
          </div>

          <hr class="no-line sm" />
          <div class="title">
            Type
          </div>

          <div class="detail-info">
            <p><b>{{ items.type_tour === 'open' ? 'Open Tour' : 'Private Tour' }}</b></p>
          </div>

          <hr class="no-line sm" />
          <div class="title">
            Status
          </div>

          <div class="flex between-xs">
            <div class="field filter-select is-full has-text-left ">
              <div class="control">
                <div class="select">
                  <select v-model="delete_status">
                    <option :value="false">
                      Active
                    </option>
                    <option :value="true">
                      Inactive
                    </option>
                  </select>
                </div>
              </div>
            </div>

            <div class="is-full has-text-right">
              <button
                type="button"
                class="btn btn--primary btn--medium"
              >
                Save Changes
              </button>
            </div>
          </div>
          <hr />
          <div class="title">
            Host
          </div>
          <div class="avatar-profile">
            <div class="avatar avatar--small">
              <img
                src="../assets/img/ic-default-avatar.svg"
                alt=""
              />
            </div>
            <h5>{{ item_host.business_name }}</h5>
          </div>
          <hr class="no-line sm" />
          <div class="detail-info">
            <p><b>{{ item_host.business_category }}</b></p>
            <p><b>{{ item_host.address }}</b></p>
            <p><a href="#"><b>{{ total_packages.length }} Tour Packages</b></a></p>
          </div>

          <hr />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import moment from 'moment'
import axios from 'axios'
export default {
  filters: {
    formatDate: function (value) {
      if (value) {
        return moment(String(value)).format('DD MMMM YYYY')
      }
    },
    formatDay: function (value) {
      if (value) {
        return moment(String(value)).format('dddd')
      }
    }

  },
  data () {
    return {
      items: '',
      tourId: this.$route.params.id_tour,
      apiUrl: `${process.env.VUE_APP_API_BASE_URL}`,
      isLoading: false,
      accessToken: '',
      delete_status: '',
      item_host: '',
      total_packages: ''
    }
  },
  created () {
    this.$router.onReady(() => {
      if (this.$route.name === 'tourdetailprivate') {
        if (!localStorage.accessToken) {
          this.$router.push({ path: '/' })
        }
        this.isLoading = true
        axios.get(this.apiUrl + 'package/' + this.tourId)
          .then((res) => {
            console.log('RESPONSE RECEIVED: ', res)
            this.items = res.data.data
            this.isLoading = false
            this.delete_status = this.items.delete_status

            this.getHost(this.items.host_id)
            this.getTotalTour(this.items.host_id)
          })
          .catch((err) => {
            console.log('AXIOS ERROR: ', err.response.data.title)
            this.isLoading = false
          })
      }
    })
  },
  methods: {
    getHost: function (hostId) {
      if (hostId) {
        axios.get(this.apiUrl + 'host/get/' + hostId)
          .then((res) => {
            console.log('RESPONSE RECEIVED: ', res)
            this.item_host = res.data.data
            this.isLoading = false
          })
          .catch((err) => {
            console.log('AXIOS ERROR: ', err.response.data.title)
            this.isLoading = false
          })
      }
    },
    getTotalTour: function (hostId) {
      if (hostId) {
        axios.get(this.apiUrl + 'package/by-tourhosts/' + hostId)
          .then((res) => {
            console.log('RESPONSE RECEIVED: ', res)
            this.total_packages = res.data.data
            this.isLoading = false
          })
          .catch((err) => {
            console.log('AXIOS ERROR: ', err.response.data.title)
            this.isLoading = false
          })
      }
    }
  }
}
</script>

<style scoped>
    .product{
      display: flex;
      justify-content: space-between;
    }
    .price-flex{
      flex-direction: column;
    }
    .price-flex h6{
      margin-bottom: 10px;
    }
    .mapouter {
        position: relative;
        text-align: right;
        height: 500px;
        width: 100%;
    }

    .gmap_canvas {
        overflow: hidden;
        background: none !important;
        height: 500px !important;
        width: 100%;
    }
</style>
