<template>
  <div>
    <!-- Header User Dashboard -->
    <header class="header header--user-dashboard">
      <div class="logo">
        <a href="#">
          <img
            src="../assets/img/logo-lokaventour.svg"
            alt
          />
        </a>
      </div>

      <div class="user-setting">
        <ul>
          <li>
            <a @click="logout">
              <div class="avatar avatar--extra-small">
                <img
                  src="../assets/img/avatar.png"
                  alt
                />
              </div>
            </a>
          </li>
        </ul>
      </div>
    </header>
    <!-- End Header User Dashboard -->

    <aside class="column side-icon">
      <nav>
        <ul>
          <li>
            <a @click="openMenu('dashboard')" href="#">
              <img src="@/assets/img/icons/dashboard.svg" alt="Dashboard" />
            </a>
          </li>
          <li>
            <a @click="openMenu('users')" href="#">
              <img src="@/assets/img/icons/users.svg" alt="Users" />
            </a>
          </li>
          <li>
            <a @click="openMenu('activities')" href="#">
              <img src="@/assets/img/icons/activities.svg" alt="Activities" />
            </a>
          </li>
          <li>
            <a @click="openMenu('content')" href="#">
              <img src="@/assets/img/icons/content.svg" alt="Content Management" />
            </a>
          </li>
          <li>
            <a @click="openMenu('transactions')" href="#">
              <img src="@/assets/img/icons/transactions.svg" alt="Transactions" />
            </a>
          </li>
        </ul>

        <ul class="bottom">
          <li>
            <a href="#">
              <img src="@/assets/img/ic-settings.svg" alt="settings" />
            </a>
          </li>

        </ul>
      </nav>
    </aside>

    <aside class="column side-menu">

      <nav>
        <ul>
          <!--
            MENU DASHBOARD
           -->
          <template v-if="menu.dashboard">
            <li>
              <router-link to="/dashboard">
                Dashboard
              </router-link>
            </li>
            <li class="divider"></li>
            <li>
              <router-link to="/pricing-structure">
                Pricing Structure Configuration
              </router-link>
            </li>
            <li class="divider"></li>
            <li>
              <router-link to="/pricing-structure">
                Promo Codes
              </router-link>
            </li>
          </template>

          <!--
            MENU USERS
           -->
          <template v-if="menu.users">
            <li>
              <router-link to="/verification-requests">
                Verification Requests
              </router-link>
            </li>
            <li class="divider"></li>
            <li>
              <router-link to="/users">
                Hosts
              </router-link>
            </li>
            <li>
              <router-link to="/users">
                Guests
              </router-link>
            </li>
            <li class="divider"></li>
            <li>
              <router-link to="/users">
                Pilot Hosts
              </router-link>
            </li>
            <li>
              <router-link to="/users">
                Pilot Guests
              </router-link>
            </li>
            <li class="divider"></li>
            <li>
              <router-link to="/verification-requests">
                Deactivated Users
              </router-link>
            </li>
            <li>
              <router-link to="/verification-requests">
                Deleted Users
              </router-link>
            </li>
          </template>

          <!--
            MENU ACTIVITIES
           -->
          <template v-if="menu.activities">
            <li>
              <router-link to="/active-tour">
                Ongoing Activities
              </router-link>
            </li>
            <li>
              <router-link to="/packages">
                Activity Packages
              </router-link>
            </li>
            <li class="divider"></li>
            <li>
              <router-link to="/booking-list">
                Bookings
              </router-link>
            </li>
            <li>
              <router-link to="/booking-contact">
                Bookings by Contact
              </router-link>
            </li>
            <li class="divider"></li>
            <li>
              <router-link to="/tour-preferences">
                Activity Preferences Settings
              </router-link>
            </li>
            <li class="divider"></li>
            <li>
              <router-link to="/categories-tags">
                Categories & Tags
              </router-link>
            </li>
          </template>

          <!--
            MENU CONTENT MANAGEMENT
           -->
          <template v-if="menu.content">
            <li>
              <router-link to="/featured-contents">
                Featured Activities
              </router-link>
            </li>
            <li>
              <router-link to="/featured-contents">
                Legal Content
              </router-link>
            </li>
            <li>
              <router-link to="/featured-contents">
                FAQs
              </router-link>
            </li>
            <li>
              <router-link to="/featured-contents">
                Promo Content
              </router-link>
            </li>
            <li>
              <router-link to="/featured-contents">
                Cover Images
              </router-link>
            </li>
          </template>

          <!--
            MENU TRANSACTIONS
           -->
          <template v-if="menu.transactions">
            <li>
              <router-link to="/refund-list">
                Tax
              </router-link>
            </li>
            <li>
              <router-link to="/financial-report">
                Financial Report
              </router-link>
            </li>
          </template>
        </ul>

      </nav>

    </aside>
  </div>
</template>

<script>
import _ from 'lodash'

export default {
  name: 'Header',
  data () {
    return {
      menu: {
        dashboard: true,
        users: false,
        activities: false,
        content: false,
        transactions: false
      }
    }
  },
  computed: {

  },
  methods: {
    logout: function () {
      localStorage.removeItem('accessToken')
      localStorage.removeItem('hostId')
      this.$router.push({ path: '/' })
    },
    openMenu: function (param) {
      _.forEach(this.menu, (v, k) => {
        if (v === true) {
          this.menu[k] = false
        }
      })
      this.menu[param] = true
    }
  }
}
</script>

<style scoped>
.divider {
  border-bottom: 1px solid #cfd4da;
  width: 100%;
}

li {
  line-height: 1.2;
}
</style>
