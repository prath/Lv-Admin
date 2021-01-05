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
              <h4>Featured Content Edit</h4>
            </div>

            <div class="sub-heading">
              <p>Detail Featured Content</p>
            </div>

            <div class="columns is-gapless">
              <div class="column">
                <div class="form-group">
                  <label for="first_name">Title</label>
                  <input
                    id="harga"
                    type="text"
                    class="form-control"
                    placeholder=""
                    value="5 Tips Untuk Traveling Pemula"
                  />
                </div>
              </div>
            </div>

            <div class="columns is-gapless">
              <div class="column">
                <div class="form-group">
                  <label for="last_name">Description</label>
                  <textarea
                    id=""
                    name=""
                    cols="30"
                    rows="10"
                    class="form-control"
                  >
                  Travelling menjadi aktivitas yang begitu populer belakangan ini. Tak hanya banyak dibahas di berbagai media saja, kegiatan travelling ini juga telah menjadi hobi bagi banyak orang. Namun sebagaimana aktivitas hobi lainnya, travelling membutuhkan sejumlah dana, di mana besaran dana ini tergantung dari banyak hal misalnya tujuan destinasi wisata yang dipilih, transportasi, biaya makan, penginapan dan yang lainnya. Berbagai biaya inilah yang pada akhirnya membuat travelling kerap identik dengan sebutan “hobi mahal”, meskipun pada dasarnya hal ini tidaklah selalu benar.

Tidak harus selalu mahal, Anda juga bisa menikmati travelling dengan dana yang minim, bahkan pas-pasan. Anda bisa menerapkan tips-tips berikut ini untuk mewujudkan travelling walau dengan budget yang pas-pasan.
                  </textarea>
                </div>
              </div>
            </div>

            <div class="sub-heading">
              <p>Featured Image</p>
            </div>

            <div class="custom-file grey">
              <input
                id="customFile"
                type="file"
                class="custom-file-input"
              />
              <img
                src="@/assets/img/ic-image-white.svg"
                alt=""
              />
            </div>

            <div class="sub-heading">
              <p>Please Check Tour Packages List</p>
            </div>

            <hr class="space" />

            <multiselect
              v-model="value"
              :options="options"
              :multiple="true"
              :close-on-select="false"
              :clear-on-select="false"
              :preserve-search="true"
              :preselect-first="false"
              :searchable="true"
              placeholder="Find Tour Packages"
              label="name"
              track-by="name"
            >
              <template
                slot="selection"
                slot-scope="{ values, search, isOpen }"
              >
                <span
                  v-if="values.length &amp;&amp; !isOpen"
                  class="multiselect__single"
                >{{ values.length }} options selected</span>
              </template>
            </multiselect>

            <hr class="space" />

            <div class="columns">
              <div class="column is-full">
                <table class="table is-fullwidth table--orders">
                  <thead>
                    <tr>
                      <th>Tour Name</th>
                      <th>Start Date</th>
                      <th>End Date</th>
                    </tr>
                  </thead>

                  <tbody>
                    <template v-for="(tour, k) in value">
                      <tr :key="k">
                        <td>
                          <div class="wrapper">
                            <div>
                              <span class="order_number">{{ tour.name }}</span> <br />
                              <p>{{ tour.type }}</p>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div class="wrapper">
                            <span>{{ tour.startDate }}</span>
                          </div>
                        </td>
                        <td>
                          <div class="wrapper">
                            <span>{{ tour.endDate }}</span>
                          </div>
                        </td>
                      </tr>
                    </template>
                  </tbody>
                </table>
              </div>
            </div>

            <div class="clear"></div>
          </div>
        </div>
        <div class="column sidebar is-one-third">
          <router-link to="/curated-contents">
            <button class="btn btn--primary btn--default btn--full padding-b-m">
              Save
            </button>
          </router-link>

          <router-link
            to="/curated-contents"
          >
            <button
              class="btn btn--transparent btn--default btn--full"
            >
              Cancel
            </button>
          </router-link>

          <hr />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Multiselect from 'vue-multiselect'
export default {
  components: {
    Multiselect
  },
  data () {
    return {
      value: [
        { name: 'Kayaking di Perairan Bandung', type: 'Open Trip', id: '1', startDate: '01/05/2020', endDate: '15/05/2020' },
        { name: 'Hang Gliding Tandem', type: 'Private Trip', id: '2', startDate: '01/05/2020', endDate: '15/05/2020' }
      ],
      options: [
        { name: 'Kayaking di Perairan Bandung', type: 'Open Trip', id: '1', startDate: '01/05/2020', endDate: '15/05/2020' },
        { name: 'Hang Gliding Tandem', type: 'Private Trip', id: '2', startDate: '01/05/2020', endDate: '15/05/2020' },
        { name: 'Barbecue Party di Outdoor, Bandung', type: 'Open Trip', id: '3', startDate: '01/05/2020', endDate: '15/05/2020' },
        { name: 'Naik Land Rover Keliling Bandung', type: 'Private Trip', id: '4', startDate: '01/05/2020', endDate: '15/05/2020' }
      ]
    }
  }
}
</script>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
