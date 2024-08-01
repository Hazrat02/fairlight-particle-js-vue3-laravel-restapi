
<script>
import HomeLayout from "@/Layouts/HomeLayout.vue";
// import axios from 'axios';

export default {
  components: {
    HomeLayout,
  },
  data() {
    return {
      name: "",
      email: "",
      sub: "",
      sms: "",
    };
  },

  async created() {},

  methods: {
    async contact() {
      this.$setLoading(true);

      const formData = new FormData(); // Create a FormData object
      formData.append("name", this.name);
      formData.append("email", this.email);
      formData.append("sub", this.sub);
      formData.append("sms", this.sms);

      await axios
        .post("/api/contact.store", formData)
        .then((response) => {
          this.$setLoading(false);

          this.$notify({
            title: "message",
            text: response.data.message,
            type: "success",
          });
        })
        .catch((error) => {
          this.$setLoading(false);
          this.$notify({
            title: "Error message",
            text: error.response.data.message,
            type: "error",
          });
        });

      this.$setLoading(false);
    },
  },
};
</script>
<template>
  <div>
    <HomeLayout>
      <div class="sud" style="background-color: dimgray;">
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
      <div class="btc_contact_main_wrapper pb-4">
        <div class="btc_contact_img_overlay"></div>
        <div class="container">
          <div class="row">
            <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 fadeInUp animated" >
              <div class="btc_contact_form_box">
                <form class="row">
                  <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <div class="btc_contact_heading_wrapper">
                      <h3>Contact with <span> US</span></h3>
                      <div class="btc_contact_cont_bottom_line"></div>
                      <div class="btc_contact_cont_bottom_line_state"></div>
                    </div>
                  </div>
                  <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <div class="btc_contact_input_form1">
                      <input type="text" placeholder="Full Name*" />
                      <i class="fa fa-user-o"></i>
                    </div>
                  </div>
                  <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <div class="btc_contact_input_form2">
                      <input type="email" placeholder="Your Email*" />
                      <i class="fa fa-envelope-o"></i>
                    </div>
                  </div>

                  <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 mt-3">
                    <div class="btc_contact_input_form2">
                      <textarea
                        name=""
                        id=""
                        cols=""
                        rows="3"
                        placeholder="Something..."
                      ></textarea>
                    </div>
                  </div>
                  <div
                    class="col-lg-12 col-md-12 col-sm-12 col-xs-12 mt-3 text-center"
                  >
                    <div class="btc_contact_btn_wrapper animated bounceInUp">
                      <button class="btn3">Send Mail</button>
                    </div>
                  </div>
                  <div class="text-center">
                    <div class="btc_footer_social_wrapper mt-5 text-center">
                      <ul>
                        <li data-animation="animated bounceInDown" class="">
                          <a href="#"><i class="fa fa-facebook"></i></a>
                        </li>
                        <li data-animation="animated bounceInDown" class="">
                          <a href="#"><i class="fa fa-twitter"></i></a>
                        </li>
                        <li data-animation="animated bounceInDown" class="">
                          <a href="#"><i class="fa fa-send-o"></i></a>
                        </li>
                        <li data-animation="animated bounceInDown" class="">
                          <a href="#"><i class="fa fa-bitcoin"></i></a>
                        </li>
                        <li data-animation="animated bounceInDown" class="">
                          <a href="#"><i class="fa fa-envelope"></i></a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 fadeInDown animated">
              <div class="btc_contact_accordi_wrapper">
                <div class="row">
                  <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <div class="btc_contact_accord_heading_wrapper">
                      <h5>Start Now</h5>
                      <h3>Ready to Earn with Bitcoin?</h3>
                      <span>#</span>
                      <p>
                        Proin gravida nibh vel velit auctor et. Aenean
                        sollicitudin, lorem quis bdum auctor, nisi elit
                        consequat ipsum, nec sagittis sem.
                      </p>
                      <div>
                        Phone : (555) 2346-789 <br />Email : support@example.com
                      </div>
                    </div>
                    <div class="trucking_faq_wrapeer">
                      <div class="accordionFifteen">
                        <div
                          class="panel-group"
                          id="accordionFifteenLeft"
                          role="tablist"
                        >
                          <div class="panel panel-default truck_pannel">
                            <div class="panel-heading desktop">
                              <h4 class="panel-title">
                                <a
                                  data-toggle="collapse"
                                  data-parent="#accordionFifteenLeft"
                                  href="#collapseFifteenLeftone"
                                  aria-expanded="true"
                                >
                                  How Cryptocurrency Begun and Its Impact To
                                  Financial ?</a
                                >
                              </h4>
                            </div>
                            <div
                              id="collapseFifteenLeftone"
                              class="panel-collapse collapse in"
                              aria-expanded="true"
                              role="tabpanel"
                            >
                              <div class="panel-body">
                                <div class="panel_cont">
                                  <p>
                                    Morbi accumsan ipsum velit. Nam nec aks tel
                                    lus a odio tincidunt auctor. Proi gravida
                                    nibh vel velit auctor.
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <!-- /.panel-default -->
                          <div class="panel panel-default truck_pannel">
                            <div class="panel-heading horn">
                              <h4 class="panel-title">
                                <a
                                  class="collapsed"
                                  data-toggle="collapse"
                                  data-parent="#accordionFifteenLeft"
                                  href="#collapseFifteenLeftTwo"
                                  aria-expanded="false"
                                  >Cryptocurrency - Who Are Involved With It
                                  ?</a
                                >
                              </h4>
                            </div>
                            <div
                              id="collapseFifteenLeftTwo"
                              class="panel-collapse collapse"
                              aria-expanded="false"
                              style="height: 0px"
                              role="tabpanel"
                            >
                              <div class="panel-body">
                                <div class="panel_cont">
                                  <p>
                                    Morbi accumsan ipsum velit. Nam nec aks tel
                                    lus a odio tincidunt auctor. Proi gravida
                                    nibh vel velit auctor.
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <!-- /.panel-default -->
                          <div class="panel panel-default truck_pannel">
                            <div class="panel-heading bell">
                              <h4 class="panel-title">
                                <a
                                  class="collapsed"
                                  data-toggle="collapse"
                                  data-parent="#accordionFifteenLeft"
                                  href="#collapseFifteenLeftThree"
                                  aria-expanded="false"
                                  >Risks & Rewards Of Investing In Bitcoin ?</a
                                >
                              </h4>
                            </div>
                            <div
                              id="collapseFifteenLeftThree"
                              class="panel-collapse collapse"
                              aria-expanded="false"
                              style="height: 0px"
                              role="tabpanel"
                            >
                              <div class="panel-body">
                                <div class="panel_cont">
                                  <p>
                                    Morbi accumsan ipsum velit. Nam nec aks tel
                                    lus a odio tincidunt auctor. Proi gravida
                                    nibh vel velit auctor.
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <!-- /.panel-default -->
                        </div>
                        <!--end of /.panel-group-->
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </HomeLayout>
  </div>
</template>

<style scoped>
.btc_footer_social_wrapper {
  width: 100% !important;
  margin-left: -50px;
}

</style>

