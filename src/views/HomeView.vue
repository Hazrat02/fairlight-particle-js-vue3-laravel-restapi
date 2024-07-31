<script>
import HomeLayout from "./../Layouts/HomeLayout.vue";
import homebody from "./../components/homebody.vue";
import about from "./../components/about.vue";

export default {
  components: {
    HomeLayout,
    homebody,
    about
  },

  data() {
    return {
      cryptoData: "",
    };
  },

  created() {
    // axios
    //   .get(
    //     "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Clitecoin%2Ctron%2Cdogecoin%2Ccoredao%2Cmatic-network%2Cethereum&vs_currencies=Usd&include_market_cap=true&include_24hr_vol=true&include_24hr_change=true"
    //   )
    //   .then((response) => {
    //     this.cryptoData = response.data;
    //       this.$setLoading(false);
    //     });
  },
};
</script>

<template>
  
  <HomeLayout>
 
    <template v-slot:headerarea>
      <!--Slider area start here-->
      <homebody />
      <!--Slider area end here-->
      <section class="currency-area">
        <div class="container-fliud">
          <div class="row">
            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <div
                class="rete-list bt_title wow fadeInUp animated"
                data-wow-duration="1.0s"
                style="
                  visibility: visible;
                  animation-duration: 1s;
                  animation-name: fadeInUp;
                "
              >
                <div class="content">
                  <div class="con">
                    <h2>
                      <img
                        src="./../assets/frontend/images/icons/1.png"
                        alt=""
                      /><span>Bitcoin</span>
                    </h2>
                    <button class="btn3">4.160651 BTC</button>
                  </div>
                </div>
              </div>
              <div
                class="rete-list bt_title wow fadeInUp animated"
                data-wow-duration="1.3s"
                style="
                  visibility: visible;
                  animation-duration: 1.3s;
                  animation-name: fadeInUp;
                "
              >
                <div class="content">
                  <div class="con">
                    <h2>
                      <img
                        src="./../assets/frontend/images/icons/2.png"
                        alt=""
                      /><span>Ethereum</span>
                    </h2>
                    <button class="btn3">3.245000 ETH</button>
                  </div>
                </div>
              </div>
              <div
                class="rete-list bt_title wow fadeInUp animated"
                data-wow-duration="1.6s"
                style="
                  visibility: visible;
                  animation-duration: 1.6s;
                  animation-name: fadeInUp;
                "
              >
                <div class="content">
                  <div class="con">
                    <h2>
                      <img
                        src="./../assets/frontend/images/icons/3.png"
                        alt=""
                      /><span>Dollar (USD)</span>
                    </h2>
                    <button class="btn3">58634.000 USD</button>
                  </div>
                </div>
              </div>
              <div
                class="rete-list bt_title wow fadeInUp animated"
                data-wow-duration="1.9s"
                style="
                  visibility: visible;
                  animation-duration: 1.9s;
                  animation-name: fadeInUp;
                "
              >
                <div class="content">
                  <div class="con">
                    <h2>
                      <img
                        src="./../assets/frontend/images/icons/4.png"
                        alt=""
                      /><span>Total USD</span>
                    </h2>
                    <button class="btn3">111969.062 USD</button>
                  </div>
                </div>
              </div>
              <div
                class="rete-list hidden-md wow fadeInUp animated"
                data-wow-duration="2.1s"
                style="
                  visibility: visible;
                  animation-duration: 2.1s;
                  animation-name: fadeInUp;
                "
              >
                <div class="content">
                  <div class="con">
                    <h2>
                      <img
                        src="./../assets/frontend/images/icons/5.png"
                        alt=""
                      /><span>Token Sale</span>
                    </h2>
                    <button class="btn3">346636.775</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </template>

    <!--About area start here-->
    <about />
    <div class="wd_scroll_wrap">
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
    <div class="wd_scroll_wrap">
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
    <div class="wd_scroll_wrap">
      <section class="video-area section">
        <div id="video-js">
          <div class="container">
            <div class="row">
              <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <div class="videos-heding">
                  <h2
                    class="wow fadeInUp animated"
                    data-wow-duration="1.0s"
                    style="
                      visibility: visible;
                      animation-duration: 1s;
                      animation-name: fadeInUp;
                    "
                  >
                    Development of Bit Money Platform<br />(Road Map)
                  </h2>
                  <div class="videos-box">
                    <video
                      id="my-video"
                      class="video-js"
                      controls
                      preload="auto"
                      width="770"
                      height="400"
                      poster="./../assets/frontend/images/video/1.png"
                      data-setup='{ "techOrder": ["youtube"], "sources": [{ "type": "video/youtube", "src": "https://youtu.be/Gc2en3nHxA4"}], "youtube": { "customVars": { "wmode": "transparent" } } }'
                    ></video>
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
                      <span class="years"><span class="con">2020</span></span>
                      <div class="serials">
                        <span class="cre"></span>
                        <div
                          class="col-sm-6 col-xs-12 left-con wow fadeInUp animated"
                          data-wow-duration="1.0s"
                          style="
                            visibility: visible;
                            animation-duration: 1s;
                            animation-name: fadeInUp;
                          "
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
                                  <h3>Idea</h3>
                                  <p>(September - October)</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          class="col-sm-6 col-xs-12 right-con wow fadeInUp animated"
                          data-wow-duration="1.3s"
                          style="
                            visibility: visible;
                            animation-duration: 1.3s;
                            animation-name: fadeInUp;
                          "
                        >
                          <div class="box-con">
                            <div class="dbox">
                              <div class="dleft">
                                <div class="content">
                                  <h3>Market Research</h3>
                                  <p>(October - December)</p>
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
                    </li>
                    <li>
                      <span class="years"><span class="con">2020</span></span>
                      <div class="serials">
                        <span class="cre"></span>
                        <div
                          class="col-sm-6 col-xs-12 left-con wow fadeInUp animated"
                          data-wow-duration="1.6s"
                          style="
                            visibility: visible;
                            animation-duration: 1.6s;
                            animation-name: fadeInUp;
                          "
                        >
                          <div class="box-con">
                            <div class="dbox">
                              <div class="dleft">
                                <div class="imgs">
                                  <img
                                    src="./../assets/frontend/images/video/3.png"
                                    alt=""
                                  />
                                </div>
                              </div>
                              <div class="dright">
                                <div class="content">
                                  <p>(1Q 2020)</p>
                                  <h3>
                                    Formation of foundersteam Business plan
                                  </h3>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          class="col-sm-6 col-xs-12 right-con wow fadeInUp animated"
                          data-wow-duration="1.9s"
                          style="
                            visibility: visible;
                            animation-duration: 1.9s;
                            animation-name: fadeInUp;
                          "
                        >
                          <div class="box-con">
                            <div class="dbox">
                              <div class="dleft">
                                <div class="content">
                                  <p>(2Q 2020)</p>
                                  <h3>
                                    Start of Platform<br />
                                    Development
                                  </h3>
                                </div>
                              </div>
                              <div class="dright">
                                <div class="imgs">
                                  <img
                                    src="./../assets/frontend/images/video/4.png"
                                    alt=""
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="serials">
                        <span class="cre"></span>
                        <div
                          class="col-sm-6 col-xs-12 left-con wow fadeInUp animated"
                          data-wow-duration="2.1s"
                          style="
                            visibility: visible;
                            animation-duration: 2.1s;
                            animation-name: fadeInUp;
                          "
                        >
                          <div class="box-con">
                            <div class="dbox">
                              <div class="dleft">
                                <div class="imgs">
                                  <img
                                    src="./../assets/frontend/images/video/5.png"
                                    alt=""
                                  />
                                </div>
                              </div>
                              <div class="dright">
                                <div class="content">
                                  <p>(3Q 2020)</p>
                                  <h3>
                                    WhitePaper<br />
                                    Landing page
                                  </h3>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          class="col-sm-6 col-xs-12 right-con wow fadeInUp animated"
                          data-wow-duration="2.1s"
                          style="
                            visibility: visible;
                            animation-duration: 2.1s;
                            animation-name: fadeInUp;
                          "
                        >
                          <div class="box-con">
                            <div class="dbox">
                              <div class="dleft">
                                <div class="content">
                                  <p>(4Q 2020)</p>
                                  <h3>
                                    Pre-Sale<br />Launch Platform<br />in beta
                                    test mode
                                  </h3>
                                </div>
                              </div>
                              <div class="dright">
                                <div class="imgs">
                                  <img
                                    src="./../assets/frontend/images/video/6.png"
                                    alt=""
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <span class="years"><span class="con">2020</span></span>
                      <div class="serials">
                        <span class="cre"></span>
                        <div
                          class="col-sm-6 col-xs-12 left-con wow fadeInUp animated"
                          data-wow-duration="2.3s"
                          style="
                            visibility: visible;
                            animation-duration: 2.3s;
                            animation-name: fadeInUp;
                          "
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
                                  <p>(1Q 2020)</p>
                                  <h3>
                                    ICO Launch<br />Identification<br />Systemsand
                                    work<br />with API Partners
                                  </h3>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          class="col-sm-6 col-xs-12 right-con wow fadeInUp animated"
                          data-wow-duration="2.3s"
                          style="
                            visibility: visible;
                            animation-duration: 2.3s;
                            animation-name: fadeInUp;
                          "
                        >
                          <div class="box-con">
                            <div class="dbox">
                              <div class="dleft">
                                <div class="content">
                                  <p>(2Q 2020)</p>
                                  <h3>
                                    Launch the<br />Platform in<br />Full mode
                                  </h3>
                                </div>
                              </div>
                              <div class="dright">
                                <div class="imgs">
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
                          class="col-sm-12 col-xs-12 center-con wow fadeInUp animated"
                          data-wow-duration="2.5s"
                          style="
                            visibility: visible;
                            animation-duration: 2.5s;
                            animation-name: fadeInUp;
                          "
                        >
                          <div class="box-con">
                            <div class="dbox">
                              <div class="dleft">
                                <div class="imgs">
                                  <img
                                    src="./../assets/frontend/images/video/9.png"
                                    alt=""
                                  />
                                </div>
                              </div>
                              <div class="dright">
                                <div class="content">
                                  <p>(4Q 2020)</p>
                                  <h3>
                                    Establishing<br />Representative<br />Office
                                  </h3>
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
      <section class="tokens-area section">
        <div id="token-js">
          <div class="container">
            <div class="row">
              <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <div class="section-heading2">
                  <h2
                    class="wow fadeInUp animated"
                    data-wow-duration="1.0s"
                    style="
                      visibility: visible;
                      animation-duration: 1s;
                      animation-name: fadeInUp;
                    "
                  >
                    Rounds of Sale of Tokens
                  </h2>
                </div>
              </div>
              <div
                class="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-lg-offset-1 col-md-offset-1"
              >
                <div
                  class="col-lg-6 col-md-6 col-sm-6 col-xs-12 text-right wow fadeInUp animated"
                  data-wow-duration="1.3s"
                  style="
                    visibility: visible;
                    animation-duration: 1.3s;
                    animation-name: fadeInUp;
                  "
                >
                  <div class="tokens mr-l50">
                    <div class="token-name">Pre-sale</div>
                    <div class="token-body">
                      <p>Target – to Raise USD 5000</p>
                      <button class="left-btn">Price 1 BIT – $0.25</button>
                      <span class="easypiechart skill-circle">
                        <span class="percent head-font">20</span>
                        <br />
                        <span class="con">Special Bonus</span>
                      </span>
                    </div>
                  </div>
                </div>
                <div
                  class="col-lg-6 col-md-6 col-sm-6 col-xs-12 text-right wow fadeInUp animated"
                  data-wow-duration="1.6s"
                  style="
                    visibility: visible;
                    animation-duration: 1.6s;
                    animation-name: fadeInUp;
                  "
                >
                  <div class="tokens mr-r50">
                    <div class="token-name">ICO</div>
                    <div class="token-body">
                      <p>Target – to Raise USD 20,000</p>
                      <button class="right-btn">Price 1 BIT - $1.00</button>
                      <div class="prices">
                        <h3 class="f-20">Bonus for ICO :</h3>
                        <table>
                          <thead>
                            <tr>
                              <th>Time</th>
                              <th>bonus</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>1day</td>
                              <td>35%</td>
                            </tr>
                            <tr>
                              <td>2 - 4 Days</td>
                              <td>20%</td>
                            </tr>
                            <tr>
                              <td>5 - 13 Days</td>
                              <td>10%</td>
                            </tr>
                            <tr>
                              <td>14 - 31 Day</td>
                              <td>0%</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center"
                >
                  <p
                    class="token-con wow fadeInUp animated"
                    data-wow-duration="1.9s"
                    style="
                      visibility: visible;
                      animation-duration: 1.9s;
                      animation-name: fadeInUp;
                    "
                  >
                    The sale of tokens It is a long established fact that a
                    reader will be distracted by the<span>
                      readable content of a page when looking at its
                      layout.</span
                    >There are many variations of passages of Lorem Ipsum
                    available. There are many variations of passages.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="token-details section bg-img">
        <div class="container">
          <div class="row">
            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
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
                  Distribution of Tokens
                </h2>
              </div>
            </div>
            <div
              class="col-lg-8 col-md-8 col-sm-12 col-xs-12 col-lg-offset-2 col-md-offset-2"
            >
              <div
                class="tokes-chart-slider wow animate fadeIn"
                data-wow-duration="1s"
              >
                <div class="cart-list">
                  <div class="chart col-sm-6">
                    <div id="e_chart_3" class="" style="height: 400px"></div>
                    <div class="imgs">
                      <img
                        src="./../assets/frontend/images/icons/l.png"
                        alt=""
                      />
                    </div>
                  </div>
                  <div class="col-sm-6">
                    <div class="label-chatrs">
                      <div class="lsits">
                        <span class="clabels-text">85%</span>
                        <p>For participants of Pre-Sale and ICO</p>
                      </div>
                      <div class="lsits">
                        <span class="clabels-text">8%</span>
                        <p>Reserved for the team.</p>
                      </div>
                      <div class="lsits">
                        <span class="clabels-text">4%</span>
                        <p>Reserved for the consultants.</p>
                      </div>
                      <div class="lsits">
                        <span class="clabels-text">3%</span>
                        <p>Bounty campaign</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="cart-list">
                  <div class="chart col-sm-6">
                    <div id="e_chart_2" class="" style="height: 400px"></div>
                    <div class="imgs">
                      <img
                        src="./../assets/frontend/images/icons/l.png"
                        alt=""
                      />
                    </div>
                  </div>
                  <div class="col-sm-6">
                    <div class="label-chatrs">
                      <div class="lsits">
                        <span class="clabels-text">85%</span>
                        <p>For participants of Pre-Sale and ICO</p>
                      </div>
                      <div class="lsits">
                        <span class="clabels-text">8%</span>
                        <p>Reserved for the team.</p>
                      </div>
                      <div class="lsits">
                        <span class="clabels-text">4%</span>
                        <p>Reserved for the consultants.</p>
                      </div>
                      <div class="lsits">
                        <span class="clabels-text">3%</span>
                        <p>Bounty campaign</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="contents text-center">
                <h2
                  class="wow fadeInUp animated"
                  data-wow-duration="1.3s"
                  style="
                    visibility: visible;
                    animation-duration: 1.3s;
                    animation-name: fadeInUp;
                  "
                >
                  The issued tokens will be distributed as follows:
                </h2>
                <a
                  href="#"
                  class="btn1 wow fadeInUp animated"
                  data-wow-duration="1.6s"
                  style="
                    visibility: visible;
                    animation-duration: 1.6s;
                    animation-name: fadeInUp;
                  "
                  >Download WhitePaper</a
                >
              </div>
            </div>
          </div>
        </div>
      </section>
      <div class="sud">
        <svg
          version="1.1"
          id="Layer_3"
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
      <section class="blog-area section">
        <div class="container">
          <div class="row">
            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <div class="section-heading2">
                <h2
                  class="wow fadeInUp animated"
                  data-wow-duration="1.0s"
                  style="
                    visibility: visible;
                    animation-duration: 1s;
                    animation-name: fadeInUp;
                  "
                >
                  Latest News
                </h2>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="blog-slider">
              <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <div
                  class="blog wow fadeInUp animated"
                  data-wow-duration="1.3s"
                  style="
                    visibility: visible;
                    animation-duration: 1.3s;
                    animation-name: fadeInUp;
                  "
                >
                  <figure>
                    <img src="./../assets/frontend/images/blog/1.jpg" alt="" />
                  </figure>
                  <div class="content">
                    <span
                      ><i class="fa fa-calendar-o"></i>January 29, 2020</span
                    >
                    <h4>
                      <a href="#"
                        >Report about the team's trip to the road show</a
                      >
                    </h4>
                    <p>
                      Nam nec tellus a odio tincidunt auctor are odio sed non
                      mauris. This is Photoshop's ern of Lorem Ipsum Proin
                      gravida.
                    </p>
                    <a href="#" class="blog-btn"
                      >read more <i class="fa fa-arrow-circle-o-right"></i
                    ></a>
                  </div>
                </div>
              </div>
              <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <div
                  class="blog wow fadeInUp animated"
                  data-wow-duration="1.6s"
                  style="
                    visibility: visible;
                    animation-duration: 1.6s;
                    animation-name: fadeInUp;
                  "
                >
                  <figure>
                    <img src="./../assets/frontend/images/blog/2.jpg" alt="" />
                  </figure>
                  <div class="content">
                    <span
                      ><i class="fa fa-calendar-o"></i>January 29, 2020</span
                    >
                    <h4>
                      <a href="#"
                        >Report about the team's trip to the road show</a
                      >
                    </h4>
                    <p>
                      Nam nec tellus a odio tincidunt auctor are odio sed non
                      mauris. This is Photoshop's ern of Lorem Ipsum Proin
                      gravida.
                    </p>
                    <a href="#" class="blog-btn"
                      >read more <i class="fa fa-arrow-circle-o-right"></i
                    ></a>
                  </div>
                </div>
              </div>
              <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <div
                  class="blog wow fadeInUp animated"
                  data-wow-duration="1.8s"
                  style="
                    visibility: visible;
                    animation-duration: 1.8s;
                    animation-name: fadeInUp;
                  "
                >
                  <figure>
                    <img src="./../assets/frontend/images/blog/3.jpg" alt="" />
                  </figure>
                  <div class="content">
                    <span
                      ><i class="fa fa-calendar-o"></i>January 29, 2020</span
                    >
                    <h4>
                      <a href="#"
                        >Report about the team's trip to the road show</a
                      >
                    </h4>
                    <p>
                      Nam nec tellus a odio tincidunt auctor are odio sed non
                      mauris. This is Photoshop's ern of Lorem Ipsum Proin
                      gravida.
                    </p>
                    <a href="#" class="blog-btn"
                      >read more <i class="fa fa-arrow-circle-o-right"></i
                    ></a>
                  </div>
                </div>
              </div>
              <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <div class="blog">
                  <figure>
                    <img src="./../assets/frontend/images/blog/1.jpg" alt="" />
                  </figure>
                  <div class="content">
                    <span
                      ><i class="fa fa-calendar-o"></i>January 29, 2020</span
                    >
                    <h4>
                      <a href="#"
                        >Report about the team's trip to the road show</a
                      >
                    </h4>
                    <p>
                      Nam nec tellus a odio tincidunt auctor are odio sed non
                      mauris. This is Photoshop's ern of Lorem Ipsum Proin
                      gravida.
                    </p>
                    <a href="#" class="blog-btn"
                      >read more <i class="fa fa-arrow-circle-o-right"></i
                    ></a>
                  </div>
                </div>
              </div>
              <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <div class="blog">
                  <figure>
                    <img src="./../assets/frontend/images/blog/2.jpg" alt="" />
                  </figure>
                  <div class="content">
                    <span
                      ><i class="fa fa-calendar-o"></i>January 29, 2020</span
                    >
                    <h4>
                      <a href="#"
                        >Report about the team's trip to the road show</a
                      >
                    </h4>
                    <p>
                      Nam nec tellus a odio tincidunt auctor are odio sed non
                      mauris. This is Photoshop's ern of Lorem Ipsum Proin
                      gravida.
                    </p>
                    <a href="#" class="blog-btn"
                      >read more <i class="fa fa-arrow-circle-o-right"></i
                    ></a>
                  </div>
                </div>
              </div>
              <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <div class="blog">
                  <figure>
                    <img src="./../assets/frontend/images/blog/3.jpg" alt="" />
                  </figure>
                  <div class="content">
                    <span
                      ><i class="fa fa-calendar-o"></i>January 29, 2020</span
                    >
                    <h4>
                      <a href="#"
                        >Report about the team's trip to the road show</a
                      >
                    </h4>
                    <p>
                      Nam nec tellus a odio tincidunt auctor are odio sed non
                      mauris. This is Photoshop's ern of Lorem Ipsum Proin
                      gravida.
                    </p>
                    <a href="#" class="blog-btn"
                      >read more <i class="fa fa-arrow-circle-o-right"></i
                    ></a>
                  </div>
                </div>
              </div>
            </div>
            <div class="view-btn">
              <a href="#">All News</a>
            </div>
          </div>
        </div>
      </section>
      <section class="media-area section bg-img jarallax">
        <div class="container">
          <div class="row">
            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
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
                  Press (Media)
                </h2>
              </div>
            </div>
            <div
              class="col-lg-8 col-md-8 col-sm-12 col-xs-12 col-lg-offset-2 col-md-offset-2"
            >
              <div class="mediabrand">
                <ul>
                  <li
                    class="wow fadeInUp animated"
                    data-wow-duration="1.3s"
                    style="
                      visibility: visible;
                      animation-duration: 1.3s;
                      animation-name: fadeInUp;
                    "
                  >
                    <a href="#"
                      ><img
                        src="./../assets/frontend/images/media/1.png"
                        alt=""
                    /></a>
                  </li>
                  <li
                    class="wow fadeInUp animated"
                    data-wow-duration="1.6s"
                    style="
                      visibility: visible;
                      animation-duration: 1.6s;
                      animation-name: fadeInUp;
                    "
                  >
                    <a href="#"
                      ><img
                        src="./../assets/frontend/images/media/2.png"
                        alt=""
                    /></a>
                  </li>
                  <li
                    class="wow fadeInUp animated"
                    data-wow-duration="1.9s"
                    style="
                      visibility: visible;
                      animation-duration: 1.9s;
                      animation-name: fadeInUp;
                    "
                  >
                    <a href="#"
                      ><img
                        src="./../assets/frontend/images/media/3.png"
                        alt=""
                    /></a>
                  </li>
                  <li
                    class="wow fadeInUp animated"
                    data-wow-duration="2.1s"
                    style="
                      visibility: visible;
                      animation-duration: 2.1s;
                      animation-name: fadeInUp;
                    "
                  >
                    <a href="#"
                      ><img
                        src="./../assets/frontend/images/media/4.png"
                        alt=""
                    /></a>
                  </li>
                  <li
                    class="wow fadeInUp animated"
                    data-wow-duration="2.4s"
                    style="
                      visibility: visible;
                      animation-duration: 2.4s;
                      animation-name: fadeInUp;
                    "
                  >
                    <a href="#"
                      ><img
                        src="./../assets/frontend/images/media/5.png"
                        alt=""
                    /></a>
                  </li>
                  <li
                    class="wow fadeInUp animated"
                    data-wow-duration="2.7s"
                    style="
                      visibility: visible;
                      animation-duration: 2.7s;
                      animation-name: fadeInUp;
                    "
                  >
                    <a href="#"
                      ><img
                        src="./../assets/frontend/images/media/6.png"
                        alt=""
                    /></a>
                  </li>
                  <li
                    class="wow fadeInUp animated"
                    data-wow-duration="2.7s"
                    style="
                      visibility: visible;
                      animation-duration: 2.7s;
                      animation-name: fadeInUp;
                    "
                  >
                    <a href="#"
                      ><img
                        src="./../assets/frontend/images/media/7.png"
                        alt=""
                    /></a>
                  </li>
                  <li
                    class="wow fadeInUp animated"
                    data-wow-duration="2.7s"
                    style="
                      visibility: visible;
                      animation-duration: 2.7s;
                      animation-name: fadeInUp;
                    "
                  >
                    <a href="#"
                      ><img
                        src="./../assets/frontend/images/media/8.png"
                        alt=""
                    /></a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </HomeLayout>
</template>


<style scoped>
/* .slider-area {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
}
#particles-js {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 1;
}
.carousel-inner {
  position: relative;
  z-index: 2;
} */

.st0 {
  fill-rule: evenodd;
  clip-rule: evenodd;
  fill: #10122d;
}
</style>