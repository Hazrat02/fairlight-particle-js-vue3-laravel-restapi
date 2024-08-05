<template>
  <section class="slider-area">
    <div id="particles-js">

        <bgs  />

      <div
        id="carousel-example-generic"
        class="carousel slide"
        data-ride="carousel"
      >
        <div class="carousel-inner" role="listbox">
          <div class="item active">
            <div class="carousel-captions caption-1">
              <div class="container">
                <div class="row">
                  <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <div class="slider-content">
                      <ul>
                        <li v-animate
                          data-animation="animated bounceInDown"
                          class="slider_social_icon1"
                        >
                          <a href="#"><i class="fa fa-facebook"></i></a>
                        </li>
                        <li v-animate
                          data-animation="animated bounceInDown"
                          class="slider_social_icon2"
                        >
                          <a href="#"><i class="fa fa-twitter"></i></a>
                        </li>
                        <li v-animate
                          data-animation="animated bounceInDown"
                          class="slider_social_icon3"
                        >
                          <a href="#"><i class="fa fa-send-o"></i></a>
                        </li>
                        <li v-animate
                          data-animation="animated bounceInDown"
                          class="slider_social_icon4"
                        >
                          <a href="#"><i class="fa fa-bitcoin"></i></a>
                        </li>
                        <li v-animate
                          data-animation="animated bounceInDown"
                          class="slider_social_icon5"
                        >
                          <a href="#"><i class="fa fa-envelope"></i></a>
                        </li>
                      </ul>
                      <h2 v-animate data-animation="animated bounceInLeft" >
                        Bit Money - Lending & <br />
                        Investment Platform
                      </h2>
                      <div class="buttons">
                        <RouterLink
                          v-if="!authUser"
                          to="/login"
                          class="btn2" v-animate
                          data-animation="animated bounceInUp"
                          ><i class="fa fa-user"></i>
                          <span> Login</span></RouterLink
                        >
                        <div v-if="authUser">
                          <RouterLink
                            v-if="authUser.role == '0'"
                            to="/admin/dashboard"
                            class="btn2" v-animate
                            data-animation="animated bounceInUp"
                            >Dashboard</RouterLink
                          >
                          <RouterLink
                            v-else
                            to="/dashboard"
                            class="btn2" v-animate
                            data-animation="animated bounceInUp"
                            >Dashboard</RouterLink
                          >
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
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
                                class="h2-move-1"
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
import { ref } from 'vue';
import bgs from "./Bgs.vue"



export default {
  components: {
    bgs,
  },

  data() {
    return {
      cryptoData: "",
    };
  },
  methods : {
    //  starType (){
    //   return 'star'
    //  } 
  }
};
</script>
<style scoped>

</style>