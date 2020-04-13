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
              <h4>Curated Content Edit</h4>
            </div>

            <div class="sub-heading">
              <p>Detail Curated Content</p>
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
                  >
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
              >
              <img
                src="assets/img/ic-image-white.svg"
                alt=""
              >
            </div>


            <div class="sub-heading">
              <p>Please Check Tour Packages List</p>
            </div>

            <hr class="space">

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
                              >
                              <span class="checkmark" />
                            </label>
                          </div>
                          <!-- SHow when Checkbox Clicked
                                                <a href="#"><img src="assets/img/ic-delete.svg" alt="" /></a>
                                                -->
                        </div>
                      </th>

                      <th>Tour Name</th>
                      <th>Status</th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr>
                      <td>
                        <div class="wrapper">
                          <div class="form-check">
                            <label class="container">
                              <input
                                type="checkbox"
                                checked
                              >
                              <span class="checkmark" />
                            </label>
                          </div>
                        </div>
                      </td>

                      <td>
                        <div class="wrapper">
                          <div>
                            <span class="order_number">Kayaking di Perairan Bandung</span> <br>
                            <p>Open Trip</p>
                          </div>
                        </div>
                      </td>
                      <td>
                        <div class="wrapper">
                          <span class="badges badges--processed">4 days left</span>
                        </div>
                      </td>
                    </tr>

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
                          <div>
                            <span class="order_number">Hang Gliding Tandem</span> <br>
                            <p>Private Tour</p>
                          </div>
                        </div>
                      </td>
                      <td>
                        <div class="wrapper">
                          <span class="badges badges--processed">4 days left</span>
                        </div>
                      </td>
                    </tr>

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
                          <div>
                            <span class="order_number">Hang Gliding Tandem</span> <br>
                            <p>Open Trip</p>
                          </div>
                        </div>
                      </td>
                      <td>
                        <div class="wrapper">
                          <span class="badges badges--processed">4 days left</span>
                        </div>
                      </td>
                    </tr>

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
                          <div>
                            <span class="order_number">Naik Land Rover Keliling Bandung</span> <br>
                            <p>Private Tour</p>
                          </div>
                        </div>
                      </td>
                      <td>
                        <div class="wrapper">
                          <span class="badges badges--processed">4 days left</span>
                        </div>
                      </td>
                    </tr>

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
                          <div>
                            <span class="order_number">Naik Land Rover Keliling Bandung</span> <br>
                            <p>Private Tour</p>
                          </div>
                        </div>
                      </td>

                      <td>
                        <div class="wrapper">
                          <span class="badges badges--processed">4 days left</span>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>




            <div class="clear" />
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

          <hr>
        </div>
      </div>
    </div>
  </div>
</template>
