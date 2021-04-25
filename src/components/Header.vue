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

    <!--
      MENU ICON LEFT
     -->
    <aside class="column side-icon">
      <nav>
        <ul>
          <li>
            <a @click="openMenu('dashboard'); $router.push('/dashboard')">
              <img src="@/assets/img/icons/dashboard.svg" alt="Dashboard" />
            </a>
          </li>
          <li>
            <a @click="openMenu('users'); $router.push('/hosts')">
              <img src="@/assets/img/icons/users.svg" alt="Users" />
            </a>
          </li>
          <li>
            <a @click="openMenu('activities'); $router.push('/ongoing-activities')">
              <img src="@/assets/img/icons/activities.svg" alt="Activities" />
            </a>
          </li>
          <!-- <li>
            <a @click="openMenu('content'); $router.push('/featured-activities')">
              <img src="@/assets/img/icons/content.svg" alt="Content Management" />
            </a>
          </li>
          <li>
            <a @click="openMenu('transactions'); $router.push('/tax')">
              <img src="@/assets/img/icons/transactions.svg" alt="Transactions" />
            </a>
          </li>-->
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

    <!--
      SUBMENU LEFT
      -->
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
              <router-link to="/verification-requests">
                Verification Requests
              </router-link>
            </li>
            <li class="divider"></li>
            <li>
              <router-link to="/pricing-structure">
                Profit, Fees &amp; Taxes
              </router-link>
            </li>
            <li>
              <router-link to="/promo-codes">
                Promo Codes
              </router-link>
            </li>
          </template>

          <!--
            MENU USERS
           -->
          <template v-if="menu.users">
            <li>
              <router-link to="/hosts">
                Hosts
              </router-link>
            </li>
            <li>
              <router-link to="/guests">
                Guests
              </router-link>
            </li>
            <li class="divider"></li>
            <li>
              <router-link to="/pilot-hosts">
                Pilot Hosts
              </router-link>
            </li>
            <li>
              <router-link to="/pilot-guests">
                Pilot Guests
              </router-link>
            </li>
            <!-- <li class="divider"></li>
            <li>
              <router-link to="/deactivated-users">
                Deactivated Users
              </router-link>
            </li>
            <li>
              <router-link to="/deleted-users">
                Deleted Users
              </router-link>
            </li> -->
          </template>

          <!--
            MENU ACTIVITIES
           -->
          <template v-if="menu.activities">
            <!-- <li>
              <router-link to="/ongoing-activities">
                Ongoing Activities
              </router-link>
            </li>
            <li>
              <router-link to="/activity-packages">
                Activity Packages
              </router-link>
            </li>
            <li class="divider"></li> -->
            <li>
              <router-link to="/bookings">
                Bookings
              </router-link>
            </li>
            <li>
              <router-link to="/bookings-by-contact">
                Bookings by Contact
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
              <router-link to="/featured-activities">
                Featured Activities
              </router-link>
            </li>
            <li>
              <router-link to="/legal-contents">
                Legal Contents
              </router-link>
            </li>
            <li>
              <router-link to="/faq">
                FAQs
              </router-link>
            </li>
            <li>
              <router-link to="/promo-contents">
                Promo Content
              </router-link>
            </li>
            <li>
              <router-link to="/cover-images">
                Cover Images
              </router-link>
            </li>
          </template>

          <!--
            MENU TRANSACTIONS
           -->
          <template v-if="menu.transactions">
            <li>
              <router-link to="/tax-transactions">
                Tax Transactions
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
        dashboard: false,
        users: false,
        activities: false,
        content: false,
        transactions: false
      }
    }
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
  },
  created () {
    const activeRoute = this.$route.meta.group
    this.menu[activeRoute] = true
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

.side-menu li a:hover {
  color: #5594F4;
}
</style>
