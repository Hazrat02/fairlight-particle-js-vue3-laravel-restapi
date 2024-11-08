<script>
import HomeLayout from "./../Layouts/HomeLayout.vue";
import homebody from "./../components/homebody.vue";
import about from "./../components/about.vue";
import token from "./../components/carousel.vue";
import contactUs from "./../components/contact.vue";
import crypto from './../components/cryptoPrice.vue';


export default {
  components: {
    HomeLayout,
    homebody,
    about,
    token,
    contactUs,
    crypto
  },

  data() {
    return {
      cryptoData: "",

    };
  },

  created() {
   
    // this.$toast.error("This is a success notification from SomeComponent!");

  },

 

  methods: {
    onPlay() {
      console.log("Video is playing");
    },
    onPause() {
      console.log("Video is paused");
    },

    
  },
};
</script>

<template>
  <HomeLayout>
    <template v-slot:headerarea>
      <!--Slider area start here-->
      <homebody />
      <!--Slider area end here-->
      <crypto />
    </template>

    <!--About area start here-->
 
    <div class="wd_scroll_wrap">

 





      <about />
      <div class="wd_scroll_wrap">
      <section class="features-area section">
        <div id="features-js">
          <div class="container">
            <div class="row">
              <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <div
                  class="section-heading2"
                  v-animate
                  data-animation="fadeInUp animated"
                  data-wow-duration="1.0s"
                >
                  <h2>Our Features</h2>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <div class="featured-lists">
                  <ul>
                    <li>
                      <div
                        class="col-sm-6 pd-0 hidden-xs"
                        v-animate
                        data-animation="fadeInUp animated"
                        data-wow-duration="1.3s"
                      >
                        <div class="contents-l mr-b30">
                          <h2>B2B Small & Mid Cap Lending Platform</h2>
                          <p>
                            Unique platform for business to business lending and
                            investment with small & mid cap institutions with
                            <br />a safety fund and cooperation with world-wide
                            arbitration.
                          </p>
                        </div>
                      </div>
                      <div
                        class="col-sm-6 pd-0"
                        v-animate
                        data-animation="fadeInUp animated"
                        data-wow-duration="1.3s"
                      >
                        <div class="imgs-l">
                          <figure>
                            <img
                              src="./../assets/frontend/images/features/1.png"
                              alt=""
                            />
                          </figure>
                        </div>
                      </div>
                      <div
                        class="col-sm-6 pd-0 mobile-screen-show"
                        data-wow-duration="1.3s"
                        v-animate
                        data-animation="fadeInUp animated"
                      >
                        <div class="contents-l mr-b30">
                          <h2>B2B Small & Mid Cap Lending Platform</h2>
                          <p>
                            Unique platform for business to business lending and
                            investment with small & mid cap institutions with
                            <br />a safety fund and cooperation with world-wide
                            arbitration.
                          </p>
                        </div>
                      </div>
                    </li>
                    <li class="rl">
                      <div
                        class="col-sm-6 pd-0 floatright mr-b30 hidden-xs"
                        data-wow-duration="1.6s"
                        v-animate
                        data-animation="fadeInUp animated"
                      >
                        <div class="contents-r">
                          <h2>Weekly Systematic Debt Collection</h2>
                          <p>
                            Experience weekly ROI through consistent cash flow
                            through a unified central debt collection system.
                          </p>
                        </div>
                      </div>
                      <div
                        class="col-sm-6 pd-0"
                        data-wow-duration="1.6s"
                        v-animate
                        data-animation="fadeInUp animated"
                      >
                        <div class="imgs-r">
                          <figure>
                            <img
                              src="./../assets/frontend/images/features/2.png"
                              alt=""
                            />
                          </figure>
                        </div>
                      </div>
                      <div
                        class="col-sm-6 pd-0 floatright mr-b30 visible-xs"
                        data-wow-duration="1.6s"
                        v-animate
                        data-animation="fadeInUp animated"
                      >
                        <div class="contents-r">
                          <h2>Weekly Systematic Debt Collection</h2>
                          <p>
                            Experience weekly ROI through consistent cash flow
                            through a unified central debt collection system.
                          </p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div
                        class="col-sm-6 pd-0 hidden-xs"
                        data-wow-duration="1.9s"
                        v-animate
                        data-animation="fadeInUp animated"
                      >
                        <div class="contents-l mr-b30">
                          <h2>Exchange Platform</h2>
                          <p>
                            Currency exchange platform with a surcharge of
                            minimum 10% on each transaction allowing our system
                            to earn high returns in exchange of
                            <br />substantial liquidity and safe conduit for
                            smooth transactions.
                          </p>
                        </div>
                      </div>
                      <div
                        class="col-sm-6 pd-0"
                        data-wow-duration="1.9s"
                        v-animate
                        data-animation="fadeInUp animated"
                      >
                        <div class="imgs-l">
                          <figure>
                            <img
                              src="./../assets/frontend/images/features/3.png"
                              alt=""
                            />
                          </figure>
                        </div>
                      </div>
                      <div
                        class="col-sm-6 pd-0 visible-xs"
                        data-wow-duration="1.9s"
                        v-animate
                        data-animation="fadeInUp animated"
                      >
                        <div class="contents-l mr-b30">
                          <h2>Exchange Platform</h2>
                          <p>
                            Currency exchange platform with a surcharge of
                            minimum 10% on each transaction allowing our system
                            to earn high returns in exchange of
                            <br />substantial liquidity and safe conduit for
                            smooth transactions.
                          </p>
                        </div>
                      </div>
                    </li>
                    <li class="rl">
                      <div
                        class="col-sm-6 pd-0 floatright mr-b30 hidden-xs"
                        data-wow-duration="2.1s"
                        v-animate
                        data-animation="fadeInUp animated"
                      >
                        <div class="contents-r">
                          <h2>Secure Investment</h2>
                          <p>
                            Safe investment system due to implementation of strict protocols with respect to borrower’s verification, debt collection system executions and other necessary aspects for smooth ROI.

                          </p>
                        </div>
                      </div>
                      <div
                        class="col-sm-6 pd-0"
                        data-wow-duration="2.1s"
                        v-animate
                        data-animation="fadeInUp animated"
                      >
                        <div class="imgs-r">
                          <figure>
                            <img
                              src="./../assets/frontend/images/features/4.png"
                              alt=""
                            />
                          </figure>
                        </div>
                      </div>
                      <div
                        class="col-sm-6 pd-0 floatright mr-b30 visible-xs"
                        data-wow-duration="2.1s"
                        v-animate
                        data-animation="fadeInUp animated"
                      >
                        <div class="contents-r">
                          <h2>Secure Investment</h2>
                          <p>
                            Safe investment system due to implementation of strict protocols with respect to borrower’s verification, debt collection system executions and other necessary aspects for smooth ROI.

                          </p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div
                        class="col-sm-6 pd-0 hidden-xs"
                        data-wow-duration="2.1s"
                        v-animate
                        data-animation="fadeInUp animated"
                      >
                        <div class="contents-l mr-b30">
                          <h2>Online Wallet 
                          </h2>
                          <p>
                            Secure online wallet system to both investor & borrower independently to transact smoothly with company backed escrow systems.
                          </p>
                        </div>
                      </div>
                      <div
                        class="col-sm-6 pd-0"
                        data-wow-duration="1.9s"
                        v-animate
                        data-animation="fadeInUp animated"
                      >
                        <div class="imgs-l">
                          <figure>
                            <img style="border-radius: 300px;"
                              src="https://static.vecteezy.com/system/resources/previews/039/288/676/non_2x/smartphone-icon-vector.jpg"
                              alt=""
                            />
                          </figure>
                        </div>
                      </div>
                      <div
                        class="col-sm-6 pd-0 visible-xs"
                        data-wow-duration="1.9s"
                        v-animate
                        data-animation="fadeInUp animated"
                      >
                        <div class="contents-l mr-b30">
                          <h2>Online Wallet 
                          </h2>
                          <p>
                            Secure online wallet system to both investor & borrower independently to transact smoothly with company backed escrow systems.
                          </p>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>


     
    </div>
    <div class="wd_scroll_wrap">
      <section class="projects  st1 pd-t100 pd-b70 jarallax">
        <div class="container">
          <div class="row">
            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center z-10">
              <div class="section-heading">
                <h2
                  v-animate
                  data-animation="fadeInUp animated"
                  data-wow-duration="1.0s"
                >
                  Advantage of the Project
                </h2>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12">
              <div
                v-animate
                data-animation="fadeInUp animated"
                class="project-list"
                data-wow-duration="1.0s"
              >
                <div class="content">
                  <span class="icons"
                    ><img src="./../assets/frontend/images/icons/6.png" alt=""
                  /></span>
                  <h3>Global network of Small  & MidCap Industries </h3>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12">
              <div
                class="project-list"
                v-animate
                data-animation="fadeInUp animated"
                data-wow-duration="1.3s"
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
                v-animate
                data-animation="fadeInUp animated"
                class="project-list"
                data-wow-duration="1.6s"
              >
                <div class="content">
                  <span class="icons"
                    ><img src="./../assets/frontend/images/icons/8.png" alt=""
                  /></span>
                  <h3>High Weekly <br />ROI </h3>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12">
              <div
                v-animate
                data-animation="fadeInUp animated"
                class="project-list"
                data-wow-duration="1.9s"
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
                v-animate
                data-animation="fadeInUp animated"
                class="project-list"
                data-wow-duration="2.1s"
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
                v-animate
                data-animation="fadeInUp animated"
                class="project-list"
                data-wow-duration="2.4s"
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



      <section class="steps-area section">
        <div id="steps-js">
          <div class="container">
            <div class="row">
              <div class="col-lg-11 col-md-11 col-sm-12 col-xs-12">
                <div class="steps-heading">
                  <h2
                    v-animate
                    data-animation="fadeInUp animated"
                    data-wow-duration="1.0s"
                  >
                    How can you start?
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
                      v-animate
                      data-animation="fadeInUp animated"
                      class="cont"
                      data-wow-duration="1.0s"
                    >
                      <h2>01. Registration On The Platform</h2>
                      <p>
                        Click “Login/Register” at the top right corner of the homepage & finish up with the registration process. For any assistance please do not hesitate to connect with our support team.

                      </p>
                    </div>
                    <span><i class="fa fa-users"></i></span>
                  </li>
                  <li class="r-con">
                    <div
                      v-animate
                      data-animation="fadeInUp animated"
                      class="cont"
                      data-wow-duration="1.3s"
                    >
                      <h2>02. Complete KYC Verification</h2>
                      <p>
                        Once you have successfully registered, please upload your KYC and pass verification to activate your account. Please keep your login credentials safe and do not share it with any third party.

                      </p>
                    </div>
                    <span><i class="fa fa-check-square-o"></i></span>
                  </li>
                  <li class="l-con">
                    <div
                      v-animate
                      data-animation="fadeInUp animated"
                      class="cont"
                      data-wow-duration="1.6s"
                    >
                      <h2>03. Fund Your Account</h2>
                      <p>
                       Now that your account is registered and verified, you may now deposit funds into your secure wallet to enable your investments with us.

                      </p>
                    </div>
                    <span><i class="fa fa-edit"></i></span>
                    <div class="mid-icons"></div>
                  </li>
                  <li class="r-con">
                    <div
                      v-animate
                      data-animation="fadeInUp animated"
                      class="cont"
                      data-wow-duration="1.9s"
                    >
                      <h2>04. Deposit & Withdrawals</h2>
                      <p>
                         Once your investment cycle is live, you may choose to deposit or withdraw as per your financial appetite accordingly in coordination with your assigned account manager.

                      </p>
                    </div>
                    <span><i class="fa fa-university"></i></span>
                  </li>
                  <!-- <li class="l-con">
                    <div
                      v-animate
                      data-animation="fadeInUp animated"
                      class="cont"
                      data-wow-duration="2.1s"
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
                      v-animate
                      data-animation="fadeInUp animated"
                      class="cont"
                      data-wow-duration="2.4s"
                    >
                      <h2>06. Receiving Funds</h2>
                      <p>
                        Nam in lectus eget nisi aliquam ultrices. Aliquam at
                        efficitur <br />nulla. Cras sodales eu nibh vel
                        scelerisque.
                      </p>
                    </div>
                    <span><i class="fa fa-paw"></i></span>
                  </li> -->
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
    <div class="wd_scroll_wrap">
      <section class="video-area section">
        <div id="video-js">
          <div class="container">
            <div class="row">
              <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <div class="videos-heding">
                  <h2
                    v-animate
                    data-animation="fadeInUp animated"
                    data-wow-duration="1.0s"
                  >
                  Debt ETF B2B lending platform
                  </h2>
                  <div class="videos-box">
                    <video
                      class="video-js"
                      src="./../assets/frontend/video/btc.mp4"
                      controls
                      width="400"
                      height="400"
                      @play="onPlay"
                      @pause="onPause"
                      poster="https://cdn.pixabay.com/photo/2016/08/20/06/09/video-1606945_1280.png"
                    >
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div class="wd_scroll_wrap">
        <section class="video-des bg-img">
       
          <div class="container">
            <div class="row">
              <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                
                <div class="deslidt">
              
                  <ul>
                    
                    <li>
                      <span class="years"><span class="con">2009-2017</span></span>
                      <div class="serials">
                        <span class="cre"></span>
                        <div
                          class="col-sm-6 col-xs-12 left-con"
                          data-wow-duration="2.3s"
                          v-animate
                          data-animation="fadeInUp animated"
                        >
                          <div class="box-con">
                            <div class="dbox">
                              <div class="dleft">
                                <div class="imgs">
                                  <img
                                    src="./../assets/frontend/images/video/2.png"
                                    alt=""
                                  />
                                </div>
                              </div>
                              <div class="dright">
                                <div class="content">
                                  <h3>Origin of Concept</h3>
                                  <p>(Company formation & registration)</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          class="col-sm-6 col-xs-12 right-con"
                          data-wow-duration="2.3s"
                          v-animate
                          data-animation="fadeInUp animated"
                        >
                        <div class="box-con">
                            <div class="dbox">
                              <div class="dleft">
                                <div class="content">
                                  <h3>Business Strategy </h3>
                                  <p>(Start of Development)</p>
                                </div>
                              </div>
                              <div class="dright">
                                <div class="imgs">
                                  <img
                                    src="./../assets/frontend/images/video/3.png"
                                    alt=""
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="serials">
                        <div
                          class="col-sm-12 col-xs-12 center-con"
                          data-wow-duration="2.5s"
                          v-animate
                          data-animation="fadeInUp animated"
                        >
                          <div class="box-con" style="align-items: center !important">
                            <div class="dbox p-4" style="align-items: center !important">
                              <div class="dleft" style="">
                                <div class="imgs">
                                  <img
                                    src="./../assets/frontend/images/video/6.png"
                                    alt=""
                                  />
                                </div>
                                
                              </div>
                              <div class="dright">
                                <div class="content">
                             
                                  <h3>
                                    (2Q 2017)
                                  </h3>
                                       <p>Launch of Global Unified Platform - (Beta Test Mode)</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <span class="years"><span class="con">2017-2023</span></span>
                      <div class="serials">
                        <span class="cre"></span>
                        <div
                          class="col-sm-6 col-xs-12 left-con"
                          data-wow-duration="2.3s"
                          v-animate
                          data-animation="fadeInUp animated"
                        >
                          <div class="box-con">
                            <div class="dbox">
                              <div class="dleft">
                                <div class="imgs">
                                  <img
                                    src="./../assets/frontend/images/video/7.png"
                                    alt=""
                                  />
                                </div>
                              </div>
                              <div class="dright">
                                <div class="content">
                                  
                                  <h3>Establish Offices </h3>
                                  <p>(Establish International Representative Offices Across - Singapore, Dubai & Sydney)</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          class="col-sm-6 col-xs-12 right-con"
                          data-wow-duration="2.3s"
                          v-animate
                          data-animation="fadeInUp animated"
                        >
                          <div class="box-con">
                            <div class="dbox">
                              <div class="col-sm-8 col-xs-8">
                                <div class="content">
                                  <h3>
                                    ICO Launch

                                  </h3>
                                  <p>ICO Launch Identification System with API Partners
                                  </p>
                                 
                                </div>
                              </div>
                              <div class="col-sm-4 col-xs-4">
                                <div class="imgs" >
                                  <img 
                                    src="./../assets/frontend/images/video/8.png"
                                    alt=""
                                  />
                                </div>
                              </div>
                            </div>



                           
                          </div>
                        </div>
                      </div>
                      <div class="serials">
                        <div
                          class="col-sm-12 col-xs-12 center-con"
                          data-wow-duration="2.5s"
                          v-animate
                          data-animation="fadeInUp animated"
                        >
                          <div class="box-con" style="align-items: center !important">
                            <div class="dbox p-4" style="align-items: center !important">
                              <div class="dleft" style="">
                                <div class="imgs">
                                  <img
                                    src="./../assets/frontend/images/video/9.png"
                                    alt=""
                                  />
                                </div>
                                
                              </div>
                              <div class="dright">
                                <div class="content">
                             
                                  <h3>
                                    (3Q 2018)
                                  </h3>
                                       <p>Achieve Global Certifications of FCA, Financial Modeling & Valuation Analyst (FMVA) certification, Chartered Alternative Investment Analyst (CAIA) designation, Financial Risk Manager (FRM) certification</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
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
            id="Layer_2"
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
    </div>
    <div class="wd_scroll_wrap">
    
      <section class="tokens-area  bg-img">
        <div class="container">
          <div class="row">
            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <div class="section-heading">
                <h2
                  class=" "
                  data-wow-duration="1.0s"
                  v-animate
                  data-animation="fadeInUp animated"
                >
                Diversification of Portfolio
                </h2>
              </div>
            </div>
            <div
              class="container"  data-wow-duration="2.0s"
                  v-animate
                  data-animation="bounceInRight animated"
            >



              <token />








            
            </div>
          </div>
        </div>
      </section>

    </div>
    <contactUs />
  </HomeLayout>
</template>



<style scoped>
.st0 {
  fill-rule: evenodd;
  clip-rule: evenodd;
  fill: #10122d;
}

.st1{
  background: #000000;
}

</style>