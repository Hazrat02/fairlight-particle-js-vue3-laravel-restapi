<template>
  <!-- <a href="javascript:" id="return-to-top"><i class="fa fa-angle-up"></i></a> -->
  <!-- preloader Start -->
  <!-- <div id="preloader">
        <div id="status"><img src="./../assets/frontend/images/banner/loader.gif" id="preloader_image" alt="loader">
        </div>
    </div> -->
  <!--Header area start here-->
  <div section-scroll="0" class="wd_scroll_wrap">
   
      <header class="header menu_fixed ">
        <div class="container-fluid">
          <div class="row">
            <div class="col-lg-3 col-md-3 col-sm-12 col-xs-6">
              <div class="logo-area">
                <RouterLink to="/"
                  ><img
                    src="./../assets/frontend/images/logo/logo.png"
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
                    <li><div class="nav-item nav-link">Logout</div></li>
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
                    <RouterLink
                      v-else
                      to="/dashboard"
                      class="btn-dark py-3 px-4 animated slideInDown"
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
                  <h1><a href="#">Bit Money</a></h1>
                  <div id="toggle_close" @click="showSidebar = false">&times;</div>
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
                      <li><a>Logout</a></li>
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
        <div class="container">
            <div class="row justify-content-between">
                <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12 ">
                    <div class="">
                        <a href="#"><img src="./../assets/frontend/images/logo/logo.png" alt="logo"/></a>
                    </div>
                    <br>
                    <div class="btc_footer_logo_right">
                        <p>123, A block, Street Name, City Name, Country Name , Zip 1234567</p>
                    </div>
                </div>
                <div class="col-lg-5 col-md-5 col-sm-6 col-xs-12 col-lg-offset-1 col-md-offset-1">
                    <div class="">
                        <p>Phone : (555) 2346-789</p>
                        <p class="btc_email_footer">Email : <a href="mail.google.com">support@example.com</a></p>
                    </div>
                    <div class="btc_footer_social_wrapper">
                        <ul>
                            <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                            <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                            <li><a href="#"><i class="fa fa-btc"></i></a></li>
                        </ul>
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
                class="copyright wow fadeInUp animated"
                data-wow-duration="1.9s"
                style="
                  visibility: visible;
                  animation-duration: 1s;
                  animation-name: fadeInUp;
                "
              >
                <p>
                  © 2020-2021 <a href="#"><span>Bit Money</span></a> | All
                  rights reserved. Design by
                </p>
              </div>
            </div>
            <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
              <div
                class="foo-link wow fadeInUp animated"
                data-wow-duration="1.0s"
                style="
                  visibility: visible;
                  animation-duration: 1s;
                  animation-name: fadeInUp;
                "
              >
                <ul>
                  <li><a href="#">WhitePaper</a></li>
                  <li><a href="#">Terms of Service</a></li>
                  <li><a href="#">Privacy Policy</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>
<script>
// import { useAuthUserStore } from "./../store/user";

export default {
  data() {
    return {
      authUser: "",
      showSidebar:false,
    };
  },
  computed: {
    // Calculate the total number of pages based on the total number of items and itemsPerPage
    sideShow() {
      if (this.showSidebar == true) {
       return 'sidebar rotateInDownLeft '
      } else {
        return ''
      }
    },
   
  },
  async created() {
    // this.$setLoading(false);
  },

  methods: {


    sidebar(){
      if (this.showSidebar == true) {
        this.showSidebar = false
      } else {
        this.showSidebar = true
      }
      
    }
  },
};
</script>

<style>

.active{
  color: rgb(43, 169, 188) !important;
}
</style>