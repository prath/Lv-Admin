<template>
  <div>
    <!-- Header User Dashboard -->
    <header class="header header--user-dashboard">
      <div class="logo">
        <a href="#">
          <img
            src="../assets/img/logo-lokaventour.svg"
            alt
          >
        </a>
      </div>

      <div class="user-setting">
        <ul>
          <li>
            <a
              href="#"
              class="notif notif--top"
            >
              <img
                src="../assets/img/ic-notif.svg"
                alt
              >
            </a>
          </li>
          <li>
              <a v-on:click="logout">
                <div class="avatar avatar--extra-small">
                  <img
                    src="../assets/img/avatar.png"
                    alt
                  >
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
            <a href="#">
              <img
                src="../assets/img/ic-dashboard.svg"
                alt
              >
            </a>
          </li>
          <li>
            <a
              href="#"
              class="notif notif--center"
            >
              <img
                src="../assets/img/ic-wallet.svg"
                alt
              >
            </a>
          </li>
          <li>
            <a href="#">
              <img
                src="../assets/img/ic-analytic.svg"
                alt
              >
            </a>
          </li>
          <li>
            <a
              href="#"
              class="notif notif--center"
            >
              <img
                src="../assets/img/ic-comment.svg"
                alt
              >
            </a>
          </li>
        </ul>

        <ul class="bottom">
          <li>
            <a href="#">
              <img
                src="../assets/img/ic-help.svg"
                alt
              >
            </a>
          </li>
          <li>
            <a href="#">
              <img
                src="../assets/img/ic-settings.svg"
                alt
              >
            </a>
          </li>
        </ul>
      </nav>
    </aside>
    <aside class="column side-menu">
      <nav>
        <ul>
          <li>
            <router-link to="/dashboard">
              Dashboard
            </router-link>
          </li>
          <li>
            <router-link to="/users">
              Users
            </router-link>
          </li>
          <li>
            <router-link to="/tour-packages">
              Tour Packages
            </router-link>
          </li>
          <li>
            <router-link to="/featured-contents">
              Featured Contents
            </router-link>
          </li>
          <li>
            <router-link to="/tour-preferences">
              Tour Preferences
            </router-link>
          </li>
          <li>
            <router-link to="/categories-tags">
              Categories & Tags
            </router-link>
          </li>
          <li>
            <router-link to="/booking-contact">
             Booking by Contact List
            </router-link>
          </li>
          <li>
            <router-link to="/booking-list">
             Booking Orders
            </router-link>
          </li>
          <li>
            <router-link to="/refund-list">
              Refund Management
            </router-link>
          </li>
          <li>
            <router-link to="/financial-report">
              Financial Report
            </router-link>
          </li>
        </ul>
      </nav>
    </aside>
  </div>
</template>

<script>
  export default {
    methods: {
     logout: function () {

        localStorage.removeItem('accessToken');
        localStorage.removeItem('hostId');
        this.$router.push({ path: '/' })
      }
    }
  }
  </script>