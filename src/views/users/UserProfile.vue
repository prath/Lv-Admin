<template>
  <div class="site-content">
    <div class="container-fluid">
      <div class="columns">
        <div class="column generic-heading is-two-third">
          <h3>Account Settings</h3>
          <p>Atur akun anda disini.</p>
        </div>
      </div>

      <div class="columns card card--statistic">
        <div class="column is-half">
          <div class="heading border">
            <h4>Update User Name or Email</h4>
          </div>
          <div class="clear"></div>
          <div class="form-group">
            <label for="harga">User Name</label>
            <input
              id="harga"
              type="text"
              class="form-control"
              placeholder="Isi username anda"
            />
            <p class="info">
              * Changing your username will also change your site's free web address (i.e.
              username.mayaraya.com/siteaddress). If you connected your domain, there will be no change.
            </p>
          </div>

          <div class="form-group">
            <label for="harga">Email Address</label>
            <input
              id="harga"
              type="email"
              class="form-control"
              placeholder="Isi email anda"
            />
          </div>

          <div class="form-group line has-text-right">
            <button
              type="submit"
              class="btn btn--primary btn--default"
            >
              Save Changes
            </button>
          </div>

          <div class="heading border">
            <h4>Update Your Password</h4>
          </div>

          <div class="clear"></div>

          <div class="form-group">
            <label for="harga">Current Password</label>
            <input
              id="current_password"
              type="text"
              class="form-control"
              placeholder=""
            />
          </div>

          <div class="form-group">
            <label for="harga">New Password</label>
            <input
              id="new_password"
              type="text"
              class="form-control"
              placeholder=""
            />
          </div>

          <div class="form-group line">
            <label for="harga">Retype New Password</label>
            <input
              id="retype_password"
              type="text"
              class="form-control"
              placeholder=""
            />
          </div>

          <div class="is-full has-text-right">
            <button
              type="submit"
              class="btn btn--primary btn--default"
            >
              Save Changes
            </button>
          </div>
        </div>
        <div class="column is-half">
          <div class="heading border">
            <h4>Update Name or Profile Image</h4>
          </div>

          <div class="clear"></div>
          <div class="form-group">
            <label for="harga">First Name</label>
            <input
              id="first_name"
              type="text"
              class="form-control"
              placeholder=""
            />
          </div>

          <div class="form-group">
            <label for="harga">Last Name</label>
            <input
              id="last_name"
              type="text"
              class="form-control"
              placeholder=""
            />
          </div>

          <div class="form-group line">
            <div class="columns">
              <div class="column is-one-third">
                <div class="custom-file grey circle">
                  <input
                    id="customFile"
                    type="file"
                    class="custom-file-input"
                  />
                  <img
                    src="@/assets/img/ic-user-white.svg"
                    alt=""
                  />
                </div>
              </div>
              <div class="column is-two-fifths">
                <p class="info">
                  For best results, upload a high resolution image.
                </p>
                <div class="custom-file no-border columns is-full">
                  <input
                    id="customFile"
                    type="file"
                    class="custom-file-input hide"
                  />
                  <label
                    class="custom-file-label btn btn--default btn--secondary "
                    for="customFile"
                  >Choose file</label>
                </div>
                <a
                  href="#"
                  class="text-primary text-bold m-t-md padding-h-md"
                >Remove Image</a>
              </div>
            </div>
          </div>

          <div class="is-full has-text-right">
            <button
              type="button"
              class="btn btn--primary btn--default"
            >
              Save Changes
            </button>
          </div>

          <div class="clear"></div>
          <div class="heading border">
            <h4>Deactivate Your Account</h4>
          </div>

          <p class="padding-v-md margin-none">
            To deactivate your account, first delete all of the sites in it.
            If your
            site has any Premium
            Plans or domains connected to it, you'll need to cancel or transfer them first. <a
              href="#"
              class="text-primary text-bold"
            > Learn More</a>
          </p>

          <div class="clear"></div>
          <div class="heading border">
            <h4>Delete Shop</h4>
          </div>

          <div class="shop-wrapper">
            <div class="shop-list">
              <p>MySite.com</p>
              <a
                href="#"
                class="text-primary"
              >Archieve</a>
              <a
                href="#"
                class="text-danger"
              >Delete</a>
            </div>
            <div class="shop-list">
              <p>MyOtherSite.com</p>
              <a
                href="#"
                class="text-primary"
              >Archieve</a>
              <a
                href="#"
                class="text-danger"
              >Delete</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
