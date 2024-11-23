<template>
  <section class="slider-area">
    <div id="particles-js">
      <video class="video-bg" autoplay loop muted playsinline>
    <source src="./../assets/frontend/video/banner.mp4" type="video/mp4">
    Your browser does not support the video tag.
  </video>
   

      <div
        id="carousel-example-generic"
        class="carousel slide"
        data-ride="carousel"
      >
        <div class="carousel-inner" role="listbox">
          <div class="item active">
            <div class="carousel-captions caption-1">
              <div class="container">
                <div class="row ">
                  <div class="col-lg-9 col-md-9 col-sm-12 col-xs-12">
                    <div class="slider-content col-md-10">
                      <h2 v-animate data-animation="animated bounceInLeft" >
                        Algorithm Based Forex Account Handling Services -
                        <br />
                        Fixed Income Securities Systems
                      </h2>
                      <div class="">
                        <RouterLink
                          v-if="!authUser"
                          to="/login"
                          class="btn1"
                          v-animate
                          data-animation="animated bounceInUp"
                          ><i class="fa fa-user"> </i
                          ><span> Login</span></RouterLink
                        >

                        <div v-if="authUser">
                          <RouterLink
                            v-if="authUser.role == '0'"
                            to="/admin/dashboard"
                            class="btn2"
                            v-animate
                            data-animation="animated bounceInUp"
                            >Dashboard</RouterLink
                          >
                          <RouterLink
                            v-else
                            to="/dashboard"
                            class="btn2"
                            v-animate
                            data-animation="animated bounceInUp"
                            >Dashboard</RouterLink
                          >
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                    <div class="hero-area animated bounceInDown">
                      <div class="">
                        <div class="row">
                          <div class="">
                            <div class="hero-image">
                              <img
                                class="main-image"
                                src="./../assets/frontend/images/hero/home2-bg.png"
                                alt="#"
                              />
                              <img
                                class="h2-move-1" style="width: 30%"
                                src="./../assets/frontend/images/hero/h2-bit-l.png"
                                alt="#"
                              />
                              <img
                                class="h2-move-2" 
                                src="./../assets/frontend/images/hero/h2-bit-m.png"
                              />
                              <img
                                class="h2-move-3"
                                style="width: 20%"
                                src="./../assets/frontend/images/icons/4.png"
                                alt="#"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>


<script>

import { isAuthenticated } from "./../middleware/index";
import { useAuthUserStore } from "./../stores/user";

export default {

  data() {
    return {
      authUser: [],
    };
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
};
</script>
<style scoped>
   .video-bg {
      position: fixed;
      top: 0;
      left: 0;
      min-width: 100%;
      min-height: 120%;
      object-fit: cover; /* Make the video cover the background */
      z-index: -1; /* Keep the video behind other content */
      color: blueviolet;
    }

    #particles-js{
      background: linear-gradient(150deg, rgba(86, 29, 29, 0.353) 0%, rgb(0, 0, 0) 80%);
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3); /* Optional shadow */
 
    }
</style>