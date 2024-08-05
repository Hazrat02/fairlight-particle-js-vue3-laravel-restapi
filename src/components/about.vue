<template>
  <section>
    <div class="wd_scroll_wrap">
      <section class="about-area pd-t70 pd-b100 jarallax bg-img">
        <div class="container">
          <div class="row">
            <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
              <div class="about-content">
                <h2
                  v-animate
                  data-animation="fadeInUp animated"
                  class="f-40 fw-400"
                  data-wow-duration="1.0s"
                >
                  About The Project
                </h2>
                <p
                  v-animate
                  data-animation="fadeInUp animated"
                  data-wow-duration="1.3s"
                >
                  Bit Money is a lending and investment, multicurrency and
                  multifunctional online platform based on blockchain
                  technology. There investors and borrowers meet each other and
                  have the opportunity to lend money on mutually beneficial.
                </p>
                <p
                  v-animate
                  data-animation="fadeInUp animated"
                  data-wow-duration="1.6s"
                >
                  Bit Money is a unique service that allows individuals to
                  access loans from the comfort of their home in fiat currencies
                  or crypto-currencies.
                </p>
                <p
                  v-animate
                  data-animation="fadeInUp animated"
                  data-wow-duration="1.9s"
                >
                  Bit Money is a multi-functional platform which allows each
                  participant to keep money in a multi-currency online wallet,
                  buy and sell currency on the exchange, invest money, get a
                  loan in a convenient currency.
                </p>
                <div class="buttons">
                  <router-link to="/about" href="#" class="btn3"
                    >See more..</router-link
                  >
                </div>
              </div>
            </div>
            <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
              <div
                v-animate
                data-animation="fadeInDown animated"
                class="about-img"
                data-wow-duration="2.0s"
              >
                <img src="./../assets/frontend/images/about/1.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <!--About area end here-->
      <div class="sud" style="color: dimgray !important">
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
              style="fill: #10122d"
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
      <section class="features-area section">
        <div id="features-js">
          <div class="container">
            <div class="row">
              <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <div
                  class="section-heading2 " 
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
                          <h2>Lending</h2>
                          <p>
                            Unique platform for lending and investment with a
                            safety fund <br />and cooperation with world-wide
                            arbitration.
                          </p>
                          <a href="#" class="btn1">read more</a>
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
                        class="col-sm-6 pd-0"
                        data-wow-duration="1.3s"
                        v-animate
                  data-animation="fadeInUp animated"
                      >
                        <div class="contents-l mr-b30">
                          <h2>Lending</h2>
                          <p>
                            ss Unique platform for lending and investment with a
                            safety fund <br />and cooperation with world-wide
                            arbitration.
                          </p>
                        </div>
                      </div>
                    </li>
                    <li class="rl">
                      <div
                        class="col-sm-6 pd-0 floatright mr-b30 hidden-xs "
                        data-wow-duration="1.6s"
                        v-animate
                  data-animation="fadeInUp animated"
                      >
                        <div class="contents-r">
                          <h2>Exchange Money</h2>
                          <p>
                            Exchange between all popular currencies with a
                            couple of clicks. <br />Instant send from one
                            currency to another.
                          </p>
                        </div>
                      </div>
                      <div
                        class="col-sm-6 pd-0 "
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
                          <h2>Exchange Money</h2>
                          <p>
                            Exchange between all popular currencies with a
                            couple of clicks. <br />Instant send from one
                            currency to another.
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
                          <h2>Investment</h2>
                          <p>
                            Improved system of borrower's verification.
                            Providing <br />verification services for other
                            services.
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
                          <h2>Investment</h2>
                          <p>
                            Improved system of borrower's verification.
                            Providing <br />verification services for other
                            services.
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
                          <h2>Online Wallet</h2>
                          <p>
                            Keep your money, exchange your money, invest your
                            money, pay <br />services and make purchases.
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
                        class="col-sm-6 pd-0 floatright mr-b30 visible-xs "
                        data-wow-duration="2.1s"
                        v-animate
                  data-animation="fadeInUp animated"
                      >
                        <div class="contents-r">
                          <h2>Online Wallet</h2>
                          <p>
                            Keep your money, exchange your money, invest your
                            money, pay <br />services and make purchases.
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
  </section>
</template>