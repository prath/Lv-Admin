<template>
  <div class="column site-content">
    <div class="container-fluid">
      <!--
                ////////////////////////////////////////////////////
                more comming tour
            -->

      <hr class="space-lg" />

      <div class="columns">
        <div class="column generic-heading is-two-third">
          <h3>Featured Content List</h3>
          <p>List of Featured Contents</p>
        </div>

        <div class="column generic-heading is-one-third flex end-xs">
          <router-link to="featured-add">
            <button class="btn btn--medium btn--primary is-right">
              Add Featured Content
            </button>
          </router-link>
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
              src="@/assets/img/ic-search.svg"
              alt=""
            />
            <input
              id="form1"
              type="text"
              class="form-control"
              placeholder="Find Tour"
            />
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

                <th>Title</th>

                <th>Date Created</th>
                <th>Tour Packages</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              <template v-for="(content, k) in contentList">
                <tr :key="k">
                  <td>
                    <div class="wrapper">
                      <div class="form-check">
                        <label class="container">
                          <input
                            type="checkbox"
                          />
                          <span class="checkmark"></span>
                        </label>
                      </div>
                    </div>
                  </td>

                  <td>
                    <div class="wrapper">
                      <span class="info">{{ content.title }}</span> <br />
                    </div>
                  </td>

                  <td>
                    <div class="wrapper">
                      <span class="info">{{ content.dateCreated }}</span> <br />
                    </div>
                  </td>

                  <td>
                    <div class="wrapper">
                      <div>
                        <ul>
                          <template v-for="(tour, k) in content.tour">
                            <li :key="k">
                              <p>{{ tour.name }}</p>
                            </li>
                          </template>
                        </ul>
                      </div>
                    </div>
                  </td>

                  <td>
                    <div class="wrapper">
                      <span class="info icon">
                        <router-link to="featured-edit">
                          <a title="Edit User"><img
                            src="@/assets/img/ic-edit-line.svg"
                            title="Edit User"
                          /></a></router-link>
                        <router-link to="featured-edit">
                          <a title="Delete User"><img
                            src="@/assets/img/ic-delete-line.svg"
                            title="Delete User"
                          /></a>
                        </router-link>
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
export default {
  data () {
    return {

      contentList: [
        {
          id: '1',
          title: 'Traveling Low Budget',
          dateCreated: '01/12/2019',
          tour: [{ name: 'Kayaking di Perairan, Bandung' }, { name: 'Barbecue Party di Outdoor, Bandung' }]
        },
        {
          id: '2',
          title: '5 Tips Untuk Traveling Pemula',
          dateCreated: '11/12/2019',
          tour: [{ name: 'Kayaking di Perairan, Bandung' }, { name: 'Barbecue Party di Outdoor, Bandung' }]
        }

      ]

    }
  }
}
</script>
