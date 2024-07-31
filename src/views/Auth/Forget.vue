<template>
  <AuthLayout>
    <div class="wd_scroll_wrap">
      <section class="tokens-area">
        <div class="pt-5">
          <div class="container accordion-body">
            <div
              class="col-lg-5 col-md-5 col-sm-12 col-xs-12 text-left wow fadeInUp animated"
              data-wow-duration="1.3s"
              style="
                visibility: visible;
                animation-duration: 1.3s;
                animation-name: fadeInUp;
              "
            >
              <h2
                class="wow fadeInUp animated text-spacial"
                data-wow-duration="1.0s"
                style="
                  visibility: visible;
                  animation-duration: 1s;
                  animation-name: fadeInUp;
                "
              >
                Rounds of Sale of Tokens
              </h2>

              There are many variations of passages of Lorem Ipsum available.
              There are many variations of passages.
            </div>
            <div
              class="col-lg-7 col-md-7 col-sm-12 col-xs-12 text-right wow fadeInUp animated"
              data-wow-duration="1.6s"
              style="
                visibility: visible;
                animation-duration: 1.6s;
                animation-name: fadeInUp;
              "
            >
              <div class="tokens mr-r50">
                <div class="token-name">Reset code</div>
                <div class="token-body" style="position: relative">
                  <form @submit.prevent="register" class="">
                    <div
                      v-if="page == '2'"
                      @click="this.page = '1'"
                      style="cursor: pointer"
                    >
                      <i
                        class="fa fa-arrow-circle-left"
                        style="
                          font-size: 30px;
                          position: absolute;
                          top: 5px;
                          left: 5px;
                          color: rgb(45, 193, 201);
                        "
                      ></i>
                    </div>
                    <!-- Email input -->
                    <div v-if="this.page == '1'">
                   
                      <div class="form-outline mb-1">
                        <div style="position: relative">
                          <input
                            name="email"
                            placeholder="Enter Your Email"
                            type="email"
                            v-model="email"
                            class="form-control"
                            required
                          />

                          <div
                            v-if="sendcode"
                            style="
                              position: absolute;
                              top: 20%;
                              right: 5%;
                              cursor: pointer;
                            "
                            @click="sentCode"
                          >
                            Send Code
                          </div>
                          <div
                            v-if="resendcode"
                            style="
                              position: absolute;
                              top: 20%;
                              right: 5%;
                              cursor: pointer;
                            "
                            @click="sentCode"
                          >
                            Resent
                          </div>
                          <div
                            v-if="countdown"
                            style="
                              position: absolute;
                              top: 20%;
                              right: 5%;
                              cursor: pointer;
                            "
                          >
                            00:00:{{ countdown }}
                          </div>
                        </div>

                        <div class="d-flex">
                          <label
                            class="form-label justify-content-start"
                            for="form3Example3"
                            >Email address</label
                          > <span style="color: red; font-size: 25px;">*</span>
                        </div>
                      </div>

                    </div>
                  
                      <div class="form-outline mb-1">
                        <input
                          id="userCode"
                          placeholder="Enter Your Code"
                          type="text"
                          v-model="userCode"
                          class="form-control"
                          required
                        />

                        <div class="d-flex">
                          <label
                            class="form-label justify-content-start"
                            for="userCode"
                            >Code</label
                          ><span style="color: red; font-size: 25px">*</span>
                        </div>
                      </div>

                      <!-- Password input -->
                      <div class="form-outline mb-1">
                        <div style="position: relative">
                          <input
                            name="password"
                            placeholder="******"
                            v-model="password"
                            :type="passwordFieldType"
                            id="password"
                            class="form-control"
                            required
                          />

                          <i
                            style="
                              position: absolute;
                              top: 15%;
                              right: 5%;
                              font-size: 25px;
                            "
                            class="fa"
                            :class="icon"
                            @click="togglePasswordVisibility"
                          ></i>
                        </div>

                        <div class="d-flex">
                          <label class="form-label" for="password"
                            >New password</label
                          >
                          <span style="color: red; font-size: 25px">*</span>
                        </div>
                      </div>
                      <div class="form-outline mb-1">
                        <input
                          name="password_confirmation"
                          placeholder="******"
                          :type="passwordFieldType"
                          v-model="password_confirmation"
                          class="form-control"
                          required
                        />

                        <div class="d-flex">
                          <label class="form-label" for="password_confirmation"
                            >Retype password</label
                          >
                          <span style="color: red; font-size: 25px">*</span>
                        </div>
                      </div>


                       <!-- Checkbox -->
                       <div
                          class="form-check d-flex justify-content-center mb-4"
                        >
                          <input
                            class="form-check-input me-2"
                            type="checkbox"
                            id="form2Example33"
                            required
                          />
                          <p>
                            <RouterLink style="color: green" to="/risk/disclosure"
                              >Read all terms & conditions</RouterLink
                            >
                          </p>
                        </div>

                      <button class="btn1 mt-3" type="submit">
                        Reset Now
                      </button>
               
                  </form>
                </div>
              </div>
            </div>
            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center">
              <p
                class="token-con wow fadeInUp animated"
                data-wow-duration="1.9s"
                style="
                  visibility: visible;
                  animation-duration: 1.9s;
                  animation-name: fadeInUp;
                "
              >
                The sale of tokens It is a long established fact that a reader
                will be distracted by the<span>
                  readable content of a page when looking at its layout.</span
                >There are many variations of passages of Lorem Ipsum available.
                There are many variations of passages.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  </AuthLayout>
</template>




<script>
import AuthLayout from "@/Layouts/AuthLayout.vue";

import axios from "axios";

// import { useAuthUserStore } from "./../../stores/user";

// import { notify } from 'vue3-notify'
export default {
  components: {
    AuthLayout,
  },
  data() {
    return {
      phone: "",
      authEmail: "",
      oldCode: "",
      passwordType: "password",
      page: "1",
      showicon: true,
      sendcode: true,
      showPassword: false,
      resendcode: false,
      userCode: "",
      countdown: "",
      name: "",
      email: "",
      password: "",
      password_confirmation: "",
      profile: "",
      birth: "",
      country: "Select",
    };
  },
  computed: {
    passwordFieldType() {
      return this.showPassword ? "text" : "password";
    },
    icon() {
      return this.showicon ? "fa-eye-slash" : "fa-eye";
    },
  },

  created() {
    // this.$setLoading(false);
  },

  methods: {
    next() {
      this.page = 2;
      console.log(this.page);

      this.sentCode();
    },

    image(event) {
      this.profile = event.target.files[0];
    },

    async sentCode() {
      (this.sendcode = false), (this.countdown = "60");
      this.startCountdown();

      const data = {
        useReffer: "",
        type: "register",
        email: this.email,
        sub: "CWM registation code",
        bodytext: "Your CWM registation code is:",
        footertext: "Do not share our code anyone.It is very importent",
        btn: "",
      };
      await axios
        .post("/api/auth/forgetcode", data)
        .then((response) => {
          this.oldCode = response.data.code;
          this.authEmail = response.data.email;
        })
        .catch((error) => {
          this.$notify({
            title: "Error message",
            text: "Server busy now.Please try later!",
            type: "error",
          });
        });
    },
    startCountdown() {
      if (this.countdown > "0") {
        setTimeout(() => {
          this.countdown--;
          this.startCountdown();
        }, 1000);
      } else {
        this.resendcode = true;
      }
    },
    togglePasswordVisibility() {
      this.showPassword = !this.showPassword;
      this.showicon = !this.showicon;
    },
    showNotification() {
      this.$notify({
        title: "Important message",
        text: "Hello user!",
      });
    },
    async register() {
      if (this.userCode == this.oldCode) {
        const formData = new FormData(); // Create a FormData object
        formData.append("birth", this.birth);
        formData.append("phone", this.phone);
        formData.append("email", this.authEmail);
        formData.append("password", this.password);
        formData.append("name", this.name);
        formData.append("password_confirmation", this.password_confirmation);
        formData.append("profile", this.profile); // Append the file to the FormData object
        formData.append("country", this.country); // Append the file to the FormData object

        await axios
          .post("/api/auth/register", formData, {
            headers: {
              "Content-Type": "multipart/form-data", // Set content type for file upload
            },
          })
          .then((response) => {
            this.$router.push("/login");
            this.$notify({
              title: "message",
              text: response.data.message,
              type: "success",
            });
          })
          .catch((error) => {
            this.$notify({
              title: "Error message",
              text: error.response.data.message,
              type: "error",
            });
          });
      } else {
        this.$notify({
          title: "Error message",
          text: "Code does not match!",
          type: "error",
        });
      }
    },
  },
};
</script>









<style scoped>
.token-body {

  background: linear-gradient(
    to right,
    rgba(36, 39, 48, 0.833) 0%,
    rgba(10, 47, 58, 0.568) 100%
  ) !important;
  backdrop-filter: blur(1440px) !important; /* Adjust the blur value as needed */
}
.tokens-area {
  background:transparent !important;

}
</style>