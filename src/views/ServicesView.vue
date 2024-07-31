
<script>

import HomeLayout from '@/Layouts/HomeLayout.vue';
// import axios from 'axios';

export default {
  components:{
    HomeLayout
  },
  data() {
    return {
    };
  },

 async created() {
   
    this.$setLoading(false);
  },


  methods: {
  
   
  },
};
</script>

<template>

    <HomeLayout>
      <div  class="wd_scroll_wrap">
      <section class="projects bg-img pd-t100 pd-b70 jarallax">
        <div class="container">
          <div class="row">
            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center">
              <div class="section-heading">
                <h2
                  class="wow fadeInUp animated"
                  data-wow-duration="1.0s"
                  style="
                    visibility: visible;
                    animation-duration: 1s;
                    animation-name: fadeInUp;
                  "
                >
                  Advantage of the Project
                </h2>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12">
              <div
                class="project-list wow fadeInUp animated"
                data-wow-duration="1.0s"
                style="
                  visibility: visible;
                  animation-duration: 1s;
                  animation-name: fadeInUp;
                "
              >
                <div class="content">
                  <span class="icons"
                    ><img src="./../assets/frontend/images/icons/6.png" alt=""
                  /></span>
                  <h3>Blockchain <br />Technology</h3>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12">
              <div
                class="project-list wow fadeInUp animated"
                data-wow-duration="1.3s"
                style="
                  visibility: visible;
                  animation-duration: 1.3s;
                  animation-name: fadeInUp;
                "
              >
                <div class="content">
                  <span class="icons"
                    ><img src="./../assets/frontend/images/icons/7.png" alt=""
                  /></span>
                  <h3>Advanced <br />Security System</h3>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12">
              <div
                class="project-list wow fadeInUp animated"
                data-wow-duration="1.6s"
                style="
                  visibility: visible;
                  animation-duration: 1.6s;
                  animation-name: fadeInUp;
                "
              >
                <div class="content">
                  <span class="icons"
                    ><img src="./../assets/frontend/images/icons/8.png" alt=""
                  /></span>
                  <h3>Multicurrency <br />Coins</h3>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12">
              <div
                class="project-list wow fadeInUp animated"
                data-wow-duration="1.9s"
                style="
                  visibility: visible;
                  animation-duration: 1.9s;
                  animation-name: fadeInUp;
                "
              >
                <div class="content">
                  <span class="icons"
                    ><img src="./../assets/frontend/images/icons/9.png" alt=""
                  /></span>
                  <h3>Internal <br />Exchange</h3>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12">
              <div
                class="project-list wow fadeInUp animated"
                data-wow-duration="2.1s"
                style="
                  visibility: visible;
                  animation-duration: 2.1s;
                  animation-name: fadeInUp;
                "
              >
                <div class="content">
                  <span class="icons"
                    ><img src="./../assets/frontend/images/icons/10.png" alt=""
                  /></span>
                  <h3>Safety <br />Fund</h3>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12">
              <div
                class="project-list wow fadeInUp animated"
                data-wow-duration="2.4s"
                style="
                  visibility: visible;
                  animation-duration: 2.4s;
                  animation-name: fadeInUp;
                "
              >
                <div class="content">
                  <span class="icons"
                    ><img src="./../assets/frontend/images/icons/11.png" alt=""
                  /></span>
                  <h3>Cooperation <br />With Arbitration</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    <div  class="wd_scroll_wrap">
      <section class="steps-area section">
        <div id="steps-js">
          <div class="container">
            <div class="row">
              <div class="col-lg-11 col-md-11 col-sm-12 col-xs-12">
                <div class="steps-heading">
                  <h2
                    class="wow fadeInUp animated"
                    data-wow-duration="1.0s"
                    style="
                      visibility: visible;
                      animation-duration: 1s;
                      animation-name: fadeInUp;
                    "
                  >
                    Few Steps For a Loan
                  </h2>
                  <div class="right-con">
                    <span>Scroll Down</span>
                    <a data-scroll data-options='{ "speed": 100 }' href="#steps"
                      ><i class="fa fa-angle-down"></i
                    ></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="steps" class="steps-details bg-mg">
        <div class="container">
          <div class="row">
            <div
              class="col-lg-10 col-md-10 col-sm-12 col-xs-12 col-md-offset-1 col-lg-offset-1"
            >
              <div class="steps-cont">
                <ul>
                  <li class="l-con">
                    <div
                      class="cont wow fadeInUp animated"
                      data-wow-duration="1.0s"
                      style="
                        visibility: visible;
                        animation-duration: 1s;
                        animation-name: fadeInUp;
                      "
                    >
                      <h2>01. Registration On The Platform</h2>
                      <p>
                        Nam in lectus eget nisi aliquam ultrices. Aliquam at
                        efficitur <br />nulla. Cras sodales eu nibh vel
                        scelerisque.
                      </p>
                    </div>
                    <span><i class="fa fa-users"></i></span>
                  </li>
                  <li class="r-con">
                    <div
                      class="cont wow fadeInUp animated"
                      data-wow-duration="1.3s"
                      style="
                        visibility: visible;
                        animation-duration: 1.3s;
                        animation-name: fadeInUp;
                      "
                    >
                      <h2>02. Passing Verification</h2>
                      <p>
                        Nam in lectus eget nisi aliquam ultrices. Aliquam at
                        efficitur <br />nulla. Cras sodales eu nibh vel
                        scelerisque.
                      </p>
                    </div>
                    <span><i class="fa fa-check-square-o"></i></span>
                  </li>
                  <li class="l-con">
                    <div
                      class="cont wow fadeInUp animated"
                      data-wow-duration="1.6s"
                      style="
                        visibility: visible;
                        animation-duration: 1.6s;
                        animation-name: fadeInUp;
                      "
                    >
                      <h2>03. Creating An Application For a Loan</h2>
                      <p>
                        Nam in lectus eget nisi aliquam ultrices. Aliquam at
                        efficitur <br />nulla. Cras sodales eu nibh vel
                        scelerisque.
                      </p>
                    </div>
                    <span><i class="fa fa-edit"></i></span>
                    <div class="mid-icons"></div>
                  </li>
                  <li class="r-con">
                    <div
                      class="cont wow fadeInUp animated"
                      data-wow-duration="1.9s"
                      style="
                        visibility: visible;
                        animation-duration: 1.9s;
                        animation-name: fadeInUp;
                      "
                    >
                      <h2>04. Financing a Loan</h2>
                      <p>
                        Nam in lectus eget nisi aliquam ultrices. Aliquam at
                        efficitur <br />nulla. Cras sodales eu nibh vel
                        scelerisque.
                      </p>
                    </div>
                    <span><i class="fa fa-university"></i></span>
                  </li>
                  <li class="l-con">
                    <div
                      class="cont wow fadeInUp animated"
                      data-wow-duration="2.1s"
                      style="
                        visibility: visible;
                        animation-duration: 2.1s;
                        animation-name: fadeInUp;
                      "
                    >
                      <h2>05. Activating a Loan</h2>
                      <p>
                        Nam in lectus eget nisi aliquam ultrices. Aliquam at
                        efficitur <br />nulla. Cras sodales eu nibh vel
                        scelerisque.
                      </p>
                    </div>
                    <span><i class="fa fa-bell"></i></span>
                  </li>
                  <li class="r-con">
                    <div
                      class="cont wow fadeInUp animated"
                      data-wow-duration="2.4s"
                      style="
                        visibility: visible;
                        animation-duration: 2.4s;
                        animation-name: fadeInUp;
                      "
                    >
                      <h2>06. Receiving Funds</h2>
                      <p>
                        Nam in lectus eget nisi aliquam ultrices. Aliquam at
                        efficitur <br />nulla. Cras sodales eu nibh vel
                        scelerisque.
                      </p>
                    </div>
                    <span><i class="fa fa-paw"></i></span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div class="sud">
        <svg
          version="1.1"
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          viewBox="0 0 1920 181.1"
          style="enable-background: new 0 0 1920 181.1"
          xml:space="preserve"
        >
     
          <g>
            <path
              class="st0"
              d="M0,80c0,0,28.9-4.2,43-13c14.3-9,71-35.7,137,5c17.3,7.7,33.3,13,48,11c17.3,0.3,50.3,4.7,66,23
                     c20.3,9.7,68,40.3,134-12c24-11,59-16.3,104,2c21,7.3,85,27.7,117-14c24-30.7,62.7-55,141-12c26,10.3,72,14.7,110-14
                     c37.7-19,89.7-29,122,53c23,32.7,47.7,66.3,97,26c24-22.7,51-78.3,137-38c0,0,28.3,15.7,52,15c23.7-0.7,50.7,4.3,76,41
                     c19.7,19.7,71,36.7,121-2c0,0,22.3-16,55-12c0,0,32.7,6.7,56-71c23.3-76,79-92,122-29c9.3,13.7,25,42,62,43c37,1,51.7,25.3,67,48
                     c15.3,22.7,51,22.7,53,23v28.1H0V80z"
            />
          </g>
        </svg>
      </div>
    </div>

    </HomeLayout>

</template>

<style scoped>
.projects{
	background:#08091b;
}
</style>

