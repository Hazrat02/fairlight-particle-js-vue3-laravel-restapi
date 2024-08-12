<template>
  <div>
    <DeshboardLayout>
      <div class="page-container">
        <div class="main-content">
          <div class="section-gap">
            <div class="container-fluid">
              <!--Page Content-->
              <div class="row justify-content-center">
                <div class="col-xl-8 col-lg-12 col-md-12 col-sm-12 col-12">
                  <div class="site-card">
                    <div class="site-card-header d-flex justify-between">
                      <h3 class="title">KYC</h3>
                      <router-link class="btn1" to="/account">Settings</router-link>
                    </div>

                    <div class="site-card-body">
                      <form enctype="multipart/form-data" @submit.prevent="kyc">
                        <div class="form-outline mb-4 col-lg-8">
                          <div class="form-outline">
                            <div>
                              <select
                                class="form-control"
                                required
                                v-model="selectValue"
                              >
                                <option selected disabled>Select</option>
                                <option value="id">Proof of ID</option>
                                <option value="address">
                                  Proof of Address
                                </option>
                                <option value="other">Other</option>
                                <option value="selfie">Selfie</option>
                              </select>
                            </div>
                          </div>
                        </div>

                        <div class="mb-3" v-if="selectValue == 'id'">
                          <div class="row kycData">
                            <div
                              class="col-xl-12 col-md-12"
                              v-animate
                              data-animation="fadeInRight animated"
                              data-wow-duration="1s"
                            >
                              <div
                                style="
                                  display: flex;
                                  justify-content: space-between;
                                "
                              >
                                <div>
                                  <label class="form-label" for="form3Example4"
                                    >ID Type</label
                                  >
                                  <span style="color: red; font-size: 25px">
                                    *
                                  </span>
                                </div>
                              </div>
                              <div class="form-outline mb-4 col-lg-8">
                                <div class="form-outline">
                                  <div>
                                    <select
                                      class="form-control"
                                      required
                                      v-model="selectIdValue"
                                    >
                                      <option selected disabled>Select</option>
                                      <option value="id">Passport</option>
                                      <option value="id">
                                        Nationality Identity Card
                                      </option>
                                      <option value="id">
                                        Driving Licence
                                      </option>
                                      <option value="id">Other</option>
                                    </select>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div
                              class="col-xl-12 col-md-12"
                              v-animate
                              data-animation="fadeInUp animated"
                              data-wow-duration="1.1s"
                            >
                              <div class="body-title">
                                Front Image Of Docs
                                <span style="color: red; font-size: 25px">
                                  *
                                </span>
                              </div>
                              <div class="wrap-custom-file">
                                <input
                                  type="file"
                                  name="kyc_credential[Front Image Of NID]"
                                  id="2"
                                  accept=".gif, .jpg, .png"
                                  required=""
                                  @change="frontimage"
                                />
                                <label for="2">
                                  <div v-if="!this.front">
                                    <img
                                      class="upload-icon"
                                      src="https://ensurepms.com/assets/global/materials/upload.svg"
                                      alt=""
                                    />
                                    <span>Select Front Image Of docs </span>
                                  </div>
                                  <div v-else>
                                    <img
                                      class=""
                                     :src="front ? showImg(front) : ''"
                                      alt=""
                                    />
                                  
                                   
                                  </div>
                                </label>
                              </div>
                            </div>

                            <div
                              class="col-xl-12 col-md-12"
                              v-animate
                              data-animation="fadeInUp animated"
                              data-wow-duration="1.5s"
                            >
                              <div class="body-title">
                                Back Image Of Docs
                                <span style="color: red; font-size: 25px">
                                  *
                                </span>
                              </div>
                              <div class="wrap-custom-file">
                                <input
                                  type="file"
                                  @change="backimage"                                  id="3"
                                  accept=".gif, .jpg, .png"
                                  required=""
                                />
                                <label for="3">
                                  <div v-if="!this.back">
                                    <img
                                      class="upload-icon"
                                      src="https://ensurepms.com/assets/global/materials/upload.svg"
                                      alt=""
                                    />
                                    <span>Select Back Image Of docs</span>
                                  </div>
                                  <div v-else>
                                    <img
                                      class=""
                                     :src="back ? showImg(back) : ''"
                                      alt=""
                                    />
                                  
                                   
                                  </div>
                                  
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div
                          class="buttons"
                          v-animate
                          data-animation="bounceInRight animated"
                          data-wow-duration="1.5s"
                         
                        >
                          <button type="submit" class="btn1">
                            Submit Now<i class="fa fa-arrow-right"></i>
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              <!--Page Content-->
            </div>
          </div>
        </div>
      </div>
    </DeshboardLayout>
  </div>
</template>
    
  <script>
import DeshboardLayout from "./../../Layouts/DashboardLayout.vue";
import { useAuthUserStore } from "../../stores/user";
import { transactionStore } from "../../stores/transaction";
import axios from "axios";

export default {
  components: {
    DeshboardLayout,
  },
  data() {
    return {
      authUser: [],
      country: "Select",

      selectValue: "Select",
      selectIdValue: "Select",
      front: "",
      back: "",
      file: "",
    };
  },

  computed: {
  



    // filteredUsers() {
    //   const oneMonthAgoUser = this.alluser.filter((item) => {
    //     const itemDate = new Date(item.created_at);
    //     const thirtyDaysAgo = new Date();
    //     thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
    //     return item.vip > 0 && itemDate < thirtyDaysAgo;
    //   });
    //   const lastMonthUser = this.alluser.filter((item) => {
    //     const itemDate = new Date(item.created_at);
    //     const thirtyDaysAgo = new Date();
    //     thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
    //     return item.vip > 0 && itemDate >= thirtyDaysAgo;
    //   });
    //   return {
    //     count: this.alluser
    //       .filter((user) => user.vip > 0)
    //       .length.toString()
    //       .padStart(4, "0"),
    //     change: (lastMonthUser.length / oneMonthAgoUser.length) * 100,
    //   };
    // },
    // filterTrx() {
    //   const oneMonthAgotransaction = this.transaction.filter((item) => {
    //     const itemDate = new Date(item.created_at);
    //     const thirtyDaysAgo = new Date();
    //     thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
    //     return itemDate < thirtyDaysAgo;
    //   });
    //   const lastMonthtransaction = this.transaction.filter((item) => {
    //     const itemDate = new Date(item.created_at);
    //     const thirtyDaysAgo = new Date();
    //     thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
    //     return itemDate >= thirtyDaysAgo;
    //   });
    //   return {
    //     count: this.transaction.length.toString().padStart(4, "0"),
    //     change:
    //       (lastMonthtransaction.length / oneMonthAgotransaction.length) * 100,
    //   };
    // },
  },

  methods: {

    showImg(file) {
    if (file instanceof File) {
      return URL.createObjectURL(file);
    }
    return '';
  },
    frontimage(event) {
    if (event.target.files && event.target.files[0]) {
      this.front = event.target.files[0];
    } else {
      this.front = null; // Reset if no file is selected
    }
  },
    backimage(event) {
      this.back = event.target.files[0];
    },
    fileimage(event) {
      this.file = event.target.files[0];
    },

    async kyc() {
      this.$setLoading(true);

      const formData = new FormData(); // Create a FormData object
      formData.append("front", this.front);
      formData.append("type", this.selectValue);
      formData.append("back", this.back);
      formData.append("file", this.file);
      formData.append("country", this.country);
      formData.append("city", this.city);
      formData.append("address", this.address);
      formData.append("postel", this.postel);

      await axios
        .post("/api/kyc", formData, {
          headers: {
            "Content-Type": "multipart/form-data", // Set content type for file upload
          },
        })
        .then((response) => {
          this.front = "";
          this.back = "";
          this.file = "";
          this.city = "";
          this.address = "";
          this.posel = "";
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

  async created() {
    const userStore = useAuthUserStore();
    const authUser = userStore.authUser;

    if (authUser) {
      this.authUser = authUser;
    } else {
      // userStore.reSetAuthUser();
      this.authUser = await userStore.reSetAuthUser();
    }

    this.$setLoading(false);
  },
};
</script>
