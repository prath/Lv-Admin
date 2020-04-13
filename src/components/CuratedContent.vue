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
          <h3>Curated Content List</h3>
          <p>List of Curated Contet</p>
        </div>

        <div class="column generic-heading is-one-third flex end-xs">
          <button class="btn btn--medium btn--primary is-right">
            Add Curated Content
          </button>
        </div>
      </div>


      <div class="columns filter-table-list">
        <div class="column is-full filter-wrapper">
          <div class="field filter-select">
            <div class="control">
              <div class="select">
                <select>
                  <option value="-">
                    Filter
                  </option>
                  <option value="by_date">
                    By Name
                  </option>
                  <option value="by_price">
                    By Place
                  </option>
                  <option value="by_category">
                    By Date
                  </option>
                </select>
              </div>
            </div>
          </div>
          <div class="form-group icon-search">
            <img
              src="assets/img/ic-search.svg"
              alt=""
            >
            <input
              id="form1"
              type="text"
              class="form-control"
              placeholder="Find Tour"
            >
          </div>
        </div>
      </div>

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
                        >
                        <span class="checkmark" />
                      </label>
                    </div>
                    <!--
                                            SHow when Checkbox Clicked
                                            <a href="#"><img src="assets/img/ic-delete.svg" alt="" /></a>
                                        -->
                  </div>
                </th>

                <th>Title</th>
                <th>Description</th>
                <th>Date Created</th>
                <th>Tour Packages</th>
                <th>Action</th>
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
                          checked="checked"
                        >
                        <span class="checkmark" />
                      </label>
                    </div>
                  </div>
                </td>

                <td>
                  <div class="wrapper">
                    <span class="info">5 Tips Untuk Traveling Pemula</span> <br>
                  </div>
                </td>

                <td>
                  <div class="wrapper">
                    <span class="info badges badges--verified">Liburan yang nyaman dimulai dari packing yang sempurna. Jika sudah menentukan tanggal keberangkatan, segera tentukan waktu untuk packing. Jangan terlalu mepet dengan jadwal keberangkatan.</span> <br>
                  </div>
                </td>
                <td>
                  <div class="wrapper">
                    <span class="info">01/12/2019</span> <br>
                  </div>
                </td>

                <td>
                  <div class="wrapper">
                    <div>
                      <span class="info">Hang Gliding Tandem, Jakarta</span>
                      <span class="info">Barbecue Party di Outdoor, Bandung</span>
                    </div>
                  </div>
                </td>

                <td>
                  <div class="wrapper">
                    <span class="info icon">
                      <a title="Edit User"><img
                        src="assets/img/ic-edit-line.svg"
                        title="Edit User"
                      ></a>
                      <a title="Delete User"><img
                        src="assets/img/ic-delete-line.svg"
                        title="Delete User"
                      ></a>
                    </span>
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
                          checked="checked"
                        >
                        <span class="checkmark" />
                      </label>
                    </div>
                  </div>
                </td>

                <td>
                  <div class="wrapper">
                    <span class="info">5 Tips Untuk Traveling Pemula</span> <br>
                  </div>
                </td>

                <td>
                  <div class="wrapper">
                    <span class="info badges badges--verified">Liburan yang nyaman dimulai dari packing yang sempurna. Jika sudah menentukan tanggal keberangkatan, segera tentukan waktu untuk packing. Jangan terlalu mepet dengan jadwal keberangkatan.</span> <br>
                  </div>
                </td>
                <td>
                  <div class="wrapper">
                    <span class="info">01/12/2019</span> <br>
                  </div>
                </td>

                <td>
                  <div class="wrapper">
                    <div>
                      <span class="info">Hang Gliding Tandem, Jakarta</span>
                      <span class="info">Barbecue Party di Outdoor, Bandung</span>
                    </div>
                  </div>
                </td>

                <td>
                  <div class="wrapper">
                    <span class="info icon">
                      <a title="Edit User"><img
                        src="assets/img/ic-edit-line.svg"
                        title="Edit User"
                      ></a>
                      <a title="Delete User"><img
                        src="assets/img/ic-delete-line.svg"
                        title="Delete User"
                      ></a>
                    </span>
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
                          checked="checked"
                        >
                        <span class="checkmark" />
                      </label>
                    </div>
                  </div>
                </td>

                <td>
                  <div class="wrapper">
                    <span class="info">Traveling Low Budget</span> <br>
                  </div>
                </td>

                <td>
                  <div class="wrapper">
                    <span class="info badges badges--verified">Tidak harus selalu mahal, Anda juga bisa menikmati travelling dengan dana yang minim, bahkan pas-pasan. Anda bisa menerapkan tips-tips berikut ini untuk mewujudkan travelling walau dengan budget yang pas-pasan.</span> <br>
                  </div>
                </td>
                <td>
                  <div class="wrapper">
                    <span class="info">01/12/2019</span> <br>
                  </div>
                </td>

                <td>
                  <div class="wrapper">
                    <div>
                      <span class="info">Kayaking di Perairan, Bandung</span>
                      <span class="info">Barbecue Party di Outdoor, Bandung</span>
                    </div>
                  </div>
                </td>

                <td>
                  <div class="wrapper">
                    <span class="info icon">
                      <a title="Edit User"><img
                        src="assets/img/ic-edit-line.svg"
                        title="Edit User"
                      ></a>
                      <a title="Delete User"><img
                        src="assets/img/ic-delete-line.svg"
                        title="Delete User"
                      ></a>
                    </span>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>