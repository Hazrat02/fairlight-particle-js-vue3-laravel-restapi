<template>
  <div>
    <DeshboardLayout>
      <div class="page-container">
        <div class="main-content">
          <div class="section-gap">
            <div class="container-fluid">
             
              <!--Page Content-->
              <div class="row">
                <div class="col-xl-12">
                  <div class="site-card">
                    <div class="site-card-header">
                      <h3 class="title">Deposit Money</h3>
                      <div class="card-header-links">
                        <router-link to="/deposit/log"
                          class="btn1"
                          >Deposit History</router-link
                        >
                      </div>
                    </div>
                    <div class="site-card-body">
                      <div class="progress-steps">
                        <div class="single-step current" v-animate
                                  data-animation="fadeInRight animated"
                                  data-wow-duration="1.5s">
                          <div class="number">01</div>
                          <div class="content">
                            <h4>Deposit Amount</h4>
                            <p>Enter your deposit details</p>
                          </div>
                        </div>
                        <div class="single-step" v-animate
                                  data-animation="fadeInLeft animated"
                                  data-wow-duration="1.5s" :class="{'current': page === '2' }">
                          <div class="number" >02</div>
                          <div class="content">
                            <h4>Success</h4>
                            <p>Success Your Deposit</p>
                          </div>
                        </div>
                      </div>
                      <div class="progress-steps-form"  v-if="page === '1'">
                        <form
                        @submit.prevent="depositNow"
                        >
                  
                          <div class="row">
                            <div class="col-xl-6 col-md-12 mb-3">
                              <label
                                for="exampleFormControlInput1"
                                class="form-label"
                                >Payment Method:</label
                              >
                              <div class="input-group">
                                <select
                                  name="gateway_code"
                                  id="gatewaySelect"
                                  class="site-nice-select"
                                >
                                  <option selected disabled>
                                    --Select Gateway--
                                  </option>
                                  <option value="BT785485">
                                    Bank Transfer
                                  </option>
                                  <option value="UPI87459">
                                    Gpay, PhonePay, All UPI Wallet
                                  </option>
                                </select>
                              </div>
                              <div class="input-info-text charge"></div>
                            </div>
                            <div class="col-xl-6 col-md-12">
                              <label
                                for="exampleFormControlInput1"
                                class="form-label"
                                >Enter Amount:</label
                              >
                              <div class="input-group">
                                <input
                                  type="text"
                                  name="amount"
                                  class="form-control"
                                  oninput="this.value = validateDouble(this.value)"
                                  aria-label="Amount"
                                  id="amount"
                                  aria-describedby="basic-addon1"
                                />
                                <span class="input-group-text" id="basic-addon1"
                                  >USD</span
                                >
                              </div>
                              <div class="input-info-text min-max"></div>
                            </div>
                          </div>
                          <img
                            style="max-width: 300px"
                            class="img-fluid"
                            id="qrimage"
                            src=""
                          />
                          <div class="row manual-row"></div>

                          <div class="transaction-list table-responsive">
                            <div class="user-panel-title">
                              <h3>Review Details:</h3>
                            </div>
                            <table class="table">
                              <tbody>
                                <tr>
                                  <td><strong>Amount</strong></td>
                                  <td>
                                    <span class="amount">4564</span>
                                    <span class="currency">$</span>
                                  </td>
                                </tr>
                                <tr>
                                  <td><strong>Charge</strong></td>
                                  <td class="charge2"></td>
                                </tr>
                                <tr>
                                  <td><strong>Payment Method</strong></td>
                                  <td id="logo">
                                    <img src="" class="payment-method" alt="" />
                                  </td>
                                </tr>
                                <tr>
                                  <td><strong>Total</strong></td>
                                  <td class="total"></td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                          <div class="buttons" v-animate
                                  data-animation="bounceInRight animated"
                                  data-wow-duration="1.5s" :class="Proceed">
                            <button type="submit" class="btn1" >
                              Proceed to Payment<i
                                class="fa fa-arrow-right"
                              ></i>
                            </button>
                          </div>
                        </form>

                        
                      </div>
                      <div class="progress-steps-form" v-if="page === '2'" v-animate
                                  data-animation="bounceInRight animated"
                                  data-wow-duration="1.5s">
                        <div class="transaction-status centered">
                          <div class="icon success">
                            <i class="fa fa-check"></i>
                          </div>
                          <h2>$ 56 Deposit Pending</h2>
                          <p>
                            The amount has been Pending added into your account
                          </p>
                          <p>Transaction ID: TRXJ0MTSFTIPN</p>
                          <a
                            href=""
                            class="btn1"
                          >
                            <i class="fa fa-eye"></i>View History
                          </a>
                        </div>
                      </div>
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
import { useAuthUserStore } from "./../../stores/user";
// import { transactionStore } from "../../store/transaction";
import axios from "axios";
export default {
  components: {
    DeshboardLayout,
  },
  data() {
    return {
      authUser: [],
      amount: "",
      address: "Select",
      method: "Select",
      page: "1",
      Proceed: "",
    };
  },
  methods: {
    async depositNow() {
      this.Proceed = 'bounceOutRight animated'
     
      this.$setLoading(true);
      this.page = '2'
      // const data = {
      //   status: "pending",
      //   method: this.method,
      //   type: "deposit",
      //   amount: this.amount,
      //   address: this.address,
      // };

      // await axios
      //   .post("api/deposit", data)
      //   .then((response) => {
      //     this.$setLoading(false);
      //     this.$router.push("/transaction");

      //     this.$notify({
      //       title: "message",
      //       text: response.data.message,
      //       type: "success",
      //     });
      //     const getTransaction = transactionStore();

      //     getTransaction.addTransaction(response.data);
      //   })
      //   .catch((error) => {
      //     this.$setLoading(false);
      //     this.$notify({
      //       title: "Error message",
      //       text: error.response.data.message,
      //       type: "error",
      //     });
      //   });
    },
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

    this.$setLoading(false);
  },
};
</script>

<style scoped>

</style>