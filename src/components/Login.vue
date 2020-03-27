<template>
  <div>
    <!-- Header User Dashboard -->
    <header class="header header--signup-dashboard">
      <div class="logo">
        <a href="#">
          <img
            src="assets/img/logo-lokaventour.png"
            alt=""
          >
        </a>

        <div class="field store-select">
          <div class="control">
            <p>Your Partner in Tour</p>
          </div>
        </div>
      </div>
    </header>
    <!-- End Header User Dashboard -->

    <div class="container">
      <div class="columns user-content">
        <div class="column is-two-thirds">
          <div class="page-heading">
            <h3>Selamat datang Kembali</h3>
            <p>
              Isikan form di bawah ini untuk mengisi informasi anda agar kami dapat memberikan suggest tour
              untuk anda.
            </p>

            <form action="">
              <div class="form-group column is-two-thirds">
                <input
                  type="email"
                  class="form-control"
                  placeholder="Email / Username Anda"
                >
              </div>
              <div class="form-group column is-two-thirds">
                <input
                  type="password"
                  class="form-control"
                  placeholder="password"
                >
              </div>

              <div class="form-group">
                <a
                  href="#"
                  class=" text-primary text-underline"
                >Lupa Password</a>
              </div>
              <router-link to="/dashboard">
                <button class="btn btn--primary btn--default">
                  Selanjutnya
                </button>
              </router-link>
            </form>
          </div>
        </div>

        <div class="column is-one-thirds is-centered">
          <img
            src="assets/img/signup-art.png"
            alt=""
          >
        </div>
      </div>
    </div>
  </div>
</template>