<template>
  <!-- <a href="javascript:" id="return-to-top"><i class="fa fa-angle-up"></i></a> -->
  <!-- preloader Start -->
  <div id="preloader" v-if="this.$isLoading()">
    <div id="status">
      <img style="border-radius: 100px;"
        src="./../assets/frontend/images/banner/loader.gif"
        id="preloader_image"
        alt="loader"
      />
    </div>
  </div>
  <!--Header area start here-->

  <div section-scroll="0" class="wd_scroll_wrap">
    <header class="header menu_fixed">
      <div class="container-fluid">
        <div class="row">
          <div class="col-lg-3 col-md-3 col-sm-12 col-xs-6">
            <div class="logo-area">
              <RouterLink to="/"
                ><img
                  src="./../assets/frontend/images/logo/logo2.gif"
                  alt="logo"
                />
              </RouterLink>
            </div>
          </div>
          <!-- Mobile Menu  Start -->
          <div class="col-lg-9 col-md-9 col-sm-12 col-xs-6">
            <div class="menu-area hidden-xs">
              <nav class="wd_single_index_menu btc_main_menu">
                <ul>
                  <li>
                    <RouterLink
                      to="/"
                      :class="{
                        active: this.$route.path === '/',
                      }"
                      >Home</RouterLink
                    >
                  </li>
                  <li>
                    <RouterLink
                      to="/about"
                      :class="{
                        active: this.$route.path === '/about',
                      }"
                      >About</RouterLink
                    >
                  </li>
                  <li>
                    <RouterLink
                      :class="{
                        active: this.$route.path === '/servics',
                      }"
                      to="/servics"
                      >Service
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink
                      to="/contact"
                      :class="{
                        active: this.$route.path === '/contact',
                      }"
                      class="nav-item nav-link"
                      >Contact</RouterLink
                    >
                  </li>
                  <li v-if="authUser">
                    <a
                      class="nav-item nav-link"
                      style="cursor: pointer"
                      @click="logout"
                      >Logout</a
                    >
                  </li>
                </ul>
              </nav>

              <div class="login-btn">
                <RouterLink v-if="!authUser" to="/login" class="btn1"
                  ><i class="fa fa-user"></i><span>Login</span></RouterLink
                >

                <div v-if="authUser">
                  <RouterLink
                    v-if="authUser.role == '0'"
                    to="/admin/dashboard"
                    class="btn1"
                    >Dashboard</RouterLink
                  >
                  <RouterLink v-else to="/dashboard" class="btn1"
                    >Dashboard</RouterLink
                  >
                </div>
              </div>
            </div>
            <!-- mobile menu area start -->
            <div class="rp_mobail_menu_main_wrapper visible-xs">
              <div class="row">
                <div class="col-xs-12">
                  <div id="toggle" @click="showSidebar = true">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      version="1.1"
                      id="Capa_1"
                      x="0px"
                      y="0px"
                      viewBox="0 0 31.177 31.177"
                      style="enable-background: new 0 0 31.177 31.177"
                      xml:space="preserve"
                      width="25px"
                      height="25px"
                    >
                      <g>
                        <g>
                          <path
                            class="menubar"
                            d="M30.23,1.775H0.946c-0.489,0-0.887-0.398-0.887-0.888S0.457,0,0.946,0H30.23    c0.49,0,0.888,0.398,0.888,0.888S30.72,1.775,30.23,1.775z"
                            fill="#fff"
                          />
                        </g>
                        <g>
                          <path
                            class="menubar"
                            d="M30.23,9.126H12.069c-0.49,0-0.888-0.398-0.888-0.888c0-0.49,0.398-0.888,0.888-0.888H30.23    c0.49,0,0.888,0.397,0.888,0.888C31.118,8.729,30.72,9.126,30.23,9.126z"
                            fill="#fff"
                          />
                        </g>
                        <g>
                          <path
                            class="menubar"
                            d="M30.23,16.477H0.946c-0.489,0-0.887-0.398-0.887-0.888c0-0.49,0.398-0.888,0.887-0.888H30.23    c0.49,0,0.888,0.397,0.888,0.888C31.118,16.079,30.72,16.477,30.23,16.477z"
                            fill="#fff"
                          />
                        </g>
                        <g>
                          <path
                            class="menubar"
                            d="M30.23,23.826H12.069c-0.49,0-0.888-0.396-0.888-0.887c0-0.49,0.398-0.888,0.888-0.888H30.23    c0.49,0,0.888,0.397,0.888,0.888C31.118,23.43,30.72,23.826,30.23,23.826z"
                            fill="#fff"
                          />
                        </g>
                        <g>
                          <path
                            class="menubar"
                            d="M30.23,31.177H0.946c-0.489,0-0.887-0.396-0.887-0.887c0-0.49,0.398-0.888,0.887-0.888H30.23    c0.49,0,0.888,0.398,0.888,0.888C31.118,30.78,30.72,31.177,30.23,31.177z"
                            fill="#fff"
                          />
                        </g>
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
              <div id="sidebar" :class="sideShow" class="animated">
                <h1><a href="#">Fairlight</a></h1>
                <div id="toggle_close" @click="showSidebar = false">
                  &times;
                </div>
                <div id="cssmenu" class="wd_single_index_menu">
                  <ul>
                    <li>
                      <RouterLink
                        to="/"
                        :class="{
                          active: this.$route.path === '/',
                        }"
                        >Home</RouterLink
                      >
                    </li>
                    <li>
                      <RouterLink
                        to="/about"
                        :class="{
                          active: this.$route.path === '/about',
                        }"
                        >About</RouterLink
                      >
                    </li>
                    <li>
                      <RouterLink
                        :class="{
                          active: this.$route.path === '/servics',
                        }"
                        to="/servics"
                        >Service</RouterLink
                      >
                    </li>
                    <li>
                      <RouterLink
                        to="/contact"
                        :class="{
                          active: this.$route.path === '/contact',
                        }"
                        >Contact</RouterLink
                      >
                    </li>
                    <li v-if="authUser">
                      <a
                        class="nav-item nav-link"
                        style="cursor: pointer"
                        @click="logout"
                        >Logout</a
                      >
                    </li>
                    <div class="mt-5 text-center">
                  <RouterLink v-if="!authUser" to="/login" class="btn1"
                    ><i class="fa fa-user"></i><span>Login</span></RouterLink
                  >
                  
                  <div  v-if="authUser">
                    <RouterLink
                      v-if="authUser.role == '0'"
                      to="/admin/dashboard"
                      class="btn1"
                      >Dashboard</RouterLink
                    >
                    <RouterLink
                      v-else
                      to="/dashboard"
                      class="btn1"
                      >Dashboard</RouterLink
                    >
                  </div>
                </div>
                  </ul>
                </div>
              </div>
            </div>
            <!-- Mobile Menu  End -->
          </div>
        </div>
      </div>
    </header>

    <slot name="headerarea" />
  </div>

  <div class="section">
    <slot />
  </div>
  <div class="btc_footer_main_wrapper pt-5 pb-5">
    <div class="container "    v-animate
          data-animation="fadeInUp animated"
          data-wow-duration="1s">
      <div class="row justify-content-between">
        <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
          <div class="">
            <RouterLink to="/"
              ><img
                src="./../assets/frontend/images/logo/logo2.gif"
                alt="logo"
              />
            </RouterLink>
          </div>
          <br />
          <div class="">
            <p>
              FairLight Investments - Address: 515 N Flagler Dr, West Palm Beach, FL 33401, United States

            </p>
            <p >
              Email : <a href="mail.google.com">support@fairlightinvestments.com</a>
            </p>
          </div>
        </div>
        <div
          class="col-lg-5 col-md-5 col-sm-6 col-xs-12 col-lg-offset-1 col-md-offset-1"
        >
          <div class="">
           
          
          </div>
          <div class="">
           <p>
            We believe in concentration as, in our experience, backing our best ideas drives the strongest long-term returns. We focus on small and mid cap companies because, in our view, these businesses receive less investor attention, have greater growth prospects, and are more likely to be acquired by larger companies.
           </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="wd_scroll_wrap">
    <footer class="">
      <div class="footer-bottom">
        <div class="container">
          <div class="row">
            <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
              <div
                class=" wow "
                data-wow-duration="1.9s"
                v-animate
          data-animation="fadeInUp animated"
      
              >
                <p>
            
                  © 2009-2028 <a href="https://fairlightinvestments.com/"><span>Fairlight</span></a> | All
                  rights reserved.
                </p>
              </div>
            </div>
            <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
              <div
                class="foo-link wow "
               
                v-animate
          data-animation="fadeInUp animated"
          data-wow-duration="1s"
              >
                <ul>
                  <li><router-link to="/contact">Contact Us</router-link></li>
                  <li><router-link to="/servics">Our Services</router-link></li>
                  <li><router-link to="/risk/disclosure">Risk Disclosure</router-link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>

    <div
      class=""
      style="position: fixed; z-index: 44444444443; bottom: 10px; right: 10px"
    >
      <a href="https://api.whatsapp.com/send/?phone=%2B8801783195999&text=Hi">
        <img
          style="width: 100px"
          src="./../assets/frontend/images/gif/soqJRMUcvCF0AdEx0V (1).gif"
          alt=""
        />
      </a>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import { isAuthenticated, logout } from "./../middleware/index";
import { useAuthUserStore } from "./../stores/user";

export default {
  components: {},
  data() {
    return {
      authUser: "",
      showSidebar: false,
    };
  },
  computed: {
    // Calculate the total number of pages based on the total number of items and itemsPerPage
    sideShow() {
      if (this.showSidebar == true) {
        return "sidebar rotateInDownLeft ";
      } else {
        return "";
      }
    },
  },

  async created() {
    if (isAuthenticated() == true) {
      // auth user data +++++++++++++++++++++++++++++

      const userStore = useAuthUserStore();
      const authUser = userStore.authUser;

      if (authUser) {
        this.authUser = authUser;
      } else {
        // userStore.reSetAuthUser();
        this.authUser = await userStore.reSetAuthUser();
      }
    } else {
      this.authUser = "";
    }
  },

  methods: {
    sidebar() {
      if (this.showSidebar == true) {
        this.showSidebar = false;
      } else {
        this.showSidebar = true;
      }
    },
    async logout() {
      this.$setLoading(true);
      logout();
      await axios
        .post("api/auth/logout")
        .then((response) => {
          this.$setLoading(false);

          this.$toast.info(response.data.message);

          // Change the authenticated value to false

          this.$router.push("/login");
        })
        .catch((error) => {
          this.$setLoading(false);
          this.$toast.error(error.response.data.message);
        });
      this.$setLoading(false);
    },
  },
};
</script>

<style>
.active {
  color: rgb(43, 169, 188) !important;
}

</style>