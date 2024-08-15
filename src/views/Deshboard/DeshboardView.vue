<template>
  <DeshboardLayout>
    <div class="page-container">
      <div class="main-content">
        <div class="section-gap">
          <div class="container-fluid">
            <div class="desktop-screen-show">
              <div class="">
                <section class="video-des bg-img">
                  <div class="">
                    <div class="row">
                      <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div class="deslidt">
                          <ul>
                            <li>
                              <div class="serials">
                                <div
                                  class="col-sm-6 col-xs-12 left-con"
                                  v-animate
                                  data-animation="fadeInUp animated"
                                  data-wow-duration="1.0s"
                                >
                                  <div class="box-con">
                                    <div class="dbox">
                                      <div class="dleft">
                                        <div class="imgs">
                                          <i class="fa fa-download"></i>
                                        </div>
                                      </div>
                                      <div class="dright">
                                        <div class="content">
                                          <h3>38283 $</h3>
                                          <p>total deposit</p>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  class="col-sm-6 col-xs-12 right-con"
                                  data-wow-duration="1.3s"
                                  v-animate
                                  data-animation="fadeInUp animated"
                                >
                                  <div class="box-con">
                                    <div class="dbox">
                                      <div class="dleft">
                                        <div class="content">
                                          <h3>4324 $</h3>
                                          <p>Total Withdraw</p>
                                        </div>
                                      </div>
                                      <div class="dright">
                                        <div class="imgs">
                                          <i class="fa fa-bank"></i>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li>
                              <div class="serials">
                                <div
                                  class="col-sm-6 col-xs-12 left-con"
                                  v-animate
                                  data-animation="fadeInUp animated"
                                  data-wow-duration="1.6s"
                                >
                                  <div class="box-con">
                                    <div class="dbox">
                                      <div class="dleft">
                                        <div class="imgs">
                                          <i class="fa fa-download"></i>
                                        </div>
                                      </div>
                                      <div class="dright">
                                        <div class="content">
                                          <h3>38283 $</h3>
                                          <p>total deposit</p>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  class="col-sm-6 col-xs-12 right-con"
                                  data-wow-duration="2s"
                                  v-animate
                                  data-animation="fadeInRight animated"
                                >
                                  <div class="box-con">
                                    <div class="dbox">
                                      <div class="dleft">
                                        <div class="content">
                                          <h3>4324 $</h3>
                                          <p>Total Withdraw</p>
                                        </div>
                                      </div>
                                      <div class="dright">
                                        <div class="imgs">
                                          <i class="fa fa-bank"></i>
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
              </div>
            </div>
            <div class="desktop-screen-show">
              <div class="row">
                <div class="col-xl-12">
                  <div class="site-card">
                    <div class="site-card-header">
                      <h3 class="title">Recent Transaction</h3>
                    </div>
                    <div class="site-card-body">
                      <div class="site-table">
                        <div class="table-responsive">
                          <table class="table table-hover">
                            <thead>
                              <tr>
                                <th>Description</th>
                                <th>Transactions ID</th>
                                <th>Amount</th>
                                <th>Status</th>
                                <th>Wallet</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr
                                v-for="(
                                  transactionItem, index
                                ) in displayedItems"
                                :key="index"
                              >
                                <td>
                                  <div class="table-description">
                                    <div class="icon">
                                      <i
                                        class="fa fa-arrow-down"
                                        v-if="
                                          transactionItem.type === 'deposit'
                                        "
                                      ></i>
                                      <i class="fa fa-arrow-up" v-else></i>
                                    </div>
                                    <div class="description">
                                      <strong>{{
                                        transactionItem.method
                                      }}</strong>
                                      <div class="date">
                                        {{
                                          transactionItem.created_at.substring(
                                            0,
                                            10
                                          )
                                        }}
                                      </div>
                                    </div>
                                  </div>
                                </td>
                                <td>
                                  <strong>{{ transactionItem.trx }}</strong>
                                </td>
                                <td>
                                  <strong
                                    class="green-color"
                                    v-if="transactionItem.type === 'deposit'"
                                    >+{{ transactionItem.amount }} USD</strong
                                  >
                                  <strong class="red-color" v-else
                                    >-{{ transactionItem.amount }} USD</strong
                                  >
                                </td>
                                <td>
                                  <div
                                    class="site-badge"
                                    :class="{
                                      warnning:
                                        transactionItem.status === 'pending',
                                      failed:
                                        transactionItem.status === 'rejected',
                                      success:
                                        transactionItem.status === 'success',
                                    }"
                                  >
                                    {{ transactionItem.status }}
                                  </div>
                                </td>
                                <td>
                                  <strong
                                    v-if="transactionItem.address === 'Live'"
                                    >Profit</strong
                                  >
                                  <strong v-else> Main </strong>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="mobile-screen-show">
              <div class="row">
                <div class="col-12">
                  <div
                    class="user-ranking-mobile"
                    v-animate
                    data-animation="fadeInRight animated"
                    data-wow-duration="1.0s"
                  >
                    <div class="icon">
                      <img
                        v-if="authUser.profile"
                        :src="authUser.profile"
                        alt=""
                      />
                      <img
                        v-else
                        src="https://ensurepms.com/assets/global/materials/user.png"
                        alt=""
                      />
                    </div>
                    <div class="name">
                      <h4>Hi, {{ authUser.name }}</h4>
                      <p>
                        Email - <span>{{ authUser.email }}</span>
                      </p>
                    </div>
                    <div class="rank-badge">
                      <img
                        src="https://ensurepms.com/assets/global/images/PZwfiFCPi9nH2kbYGdWo.png"
                        alt=""
                      />
                    </div>
                  </div>

                  <div
                    class="user-wallets-mobile"
                    v-animate
                    data-animation="fadeInLeft animated"
                    data-wow-duration="1.0s"
                  >
                    <img
                      src="https://ensurepms.com/assets/frontend/materials/wallet-shadow.png"
                      alt=""
                      class="wallet-shadow"
                    />
                    <div class="head">All Wallets in USD</div>
                    <div class="one">
                      <div class="balance">
                        <span class="symbol">$</span
                        ><span class="after-dot"
                          >{{ authUser.main_balance }}
                        </span>
                      </div>
                      <div class="wallet">Main Wallet</div>
                    </div>

                    <div class="one p-wal">
                      <div class="balance">
                        <span class="symbol">$</span>
                        {{ authUser.live_balance }}
                      </div>
                      <div class="wallet">Profit Wallet</div>
                    </div>
                    <div class="info">
                      <i icon-name="info"></i>Total balance : $
                      {{
                        Number(authUser.main_balance) +
                        Number(authUser.live_balance)
                      }}
                    </div>
                  </div>
                </div>

                <div class="col-12">
                  <div class="mob-shortcut-btn">
                    <router-link
                      to="/deposit"
                      v-animate
                      data-animation="bounceInDown animated"
                      data-wow-duration="1.0s"
                      ><i class="fa fa-arrow-down"></i> Deposit</router-link
                    >
                    <router-link
                      to="/transaction"
                      v-animate
                      data-animation="bounceInDown animated"
                      data-wow-duration="1.5s"
                      ><i class="fa fa-shopping-bag"></i> All Log</router-link
                    >
                    <router-link
                      to="/withdraw"
                      v-animate
                      data-animation="bounceInDown animated"
                      data-wow-duration="2s"
                      ><i class="fa fa-arrow-up"></i> Withdraw</router-link
                    >
                  </div>
                </div>

                <div class="col-12">
                  <!-- all navigation -->
                  <div class="all-feature-mobile mb-3 mobile-screen-show">
                    <div class="title">All Navigations</div>
                    <div class="contents row">
                      <div
                        class="col-lg-4 col-md-4 col-sm-4 col-xs-4"
                        v-animate
                        data-animation="bounceInUp animated"
                        data-wow-duration="1.0s"
                      >
                        <div class="single">
                          <a href="">
                            <div class="icon">
                              <img
                                src="https://ensurepms.com/assets/frontend/materials/schema.png"
                                alt=""
                              />
                            </div>
                            <div class="name">profile</div>
                          </a>
                        </div>
                      </div>
                      <div
                        class="col-lg-4 col-md-4 col-sm-4 col-xs-4"
                        v-animate
                        data-animation="bounceInUp animated"
                        data-wow-duration="1.3s"
                      >
                        <div class="single">
                          <a href="">
                            <div class="icon">
                              <img
                                src="https://ensurepms.com/assets/frontend/materials/withdraw-log.png"
                                alt=""
                              />
                            </div>
                            <div class="name">Withdraw Log</div>
                          </a>
                        </div>
                      </div>
                      <div
                        class="col-lg-4 col-md-4 col-sm-4 col-xs-4"
                        v-animate
                        data-animation="bounceInUp animated"
                        data-wow-duration="1.6s"
                      >
                        <div class="single">
                          <a href="">
                            <div class="icon">
                              <img
                                src="https://ensurepms.com/assets/frontend/materials/transactions.png"
                                alt=""
                              />
                            </div>
                            <div class="name">Transactions</div>
                          </a>
                        </div>
                      </div>
                      <div
                        class="col-lg-4 col-md-4 col-sm-4 col-xs-4"
                        v-animate
                        data-animation="bounceInUp animated"
                        data-wow-duration="1.9s"
                      >
                        <div class="single">
                          <a href="">
                            <div class="icon">
                              <img
                                src="https://ensurepms.com/assets/frontend/materials/deposit.png"
                                alt=""
                              />
                            </div>
                            <div class="name">Deposit</div>
                          </a>
                        </div>
                      </div>
                      <div
                        class="col-lg-4 col-md-4 col-sm-4 col-xs-4"
                        v-animate
                        data-animation="bounceInUp animated"
                        data-wow-duration="2.2s"
                      >
                        <div class="single">
                          <a href="">
                            <div class="icon">
                              <img
                                src="https://ensurepms.com/assets/frontend/materials/deposit-log.png"
                                alt=""
                              />
                            </div>
                            <div class="name">Deposit Log</div>
                          </a>
                        </div>
                      </div>
                      <div
                        class="col-lg-4 col-md-4 col-sm-4 col-xs-4"
                        v-animate
                        data-animation="bounceInUp animated"
                        data-wow-duration="2.5s"
                      >
                        <div class="single">
                          <a href="">
                            <div class="icon">
                              <img
                                src="https://ensurepms.com/assets/frontend/materials/wallet-exchange.png"
                                alt=""
                              />
                            </div>
                            <div class="name">Wallet Exch.</div>
                          </a>
                        </div>
                      </div>
                    </div>
                    <!-- <div class="moretext">
                        <div class="row contents">
                          <div class="col-4">
                            <div class="single">
                              <a href="https://ensurepms.com/user/send-money">
                                <div class="icon">
                                  <img
                                    src="https://ensurepms.com/assets/frontend/materials/transfer.png"
                                    alt=""
                                  />
                                </div>
                                <div class="name">Transfer</div>
                              </a>
                            </div>
                          </div>
                          <div class="col-4">
                            <div class="single">
                              <a
                                href="https://ensurepms.com/user/send-money/log"
                              >
                                <div class="icon">
                                  <img
                                    src="https://ensurepms.com/assets/frontend/materials/transfer-log.png"
                                    alt=""
                                  />
                                </div>
                                <div class="name">Transfer Log</div>
                              </a>
                            </div>
                          </div>
                          <div class="col-4">
                            <div class="single">
                              <a href="https://ensurepms.com/user/withdraw">
                                <div class="icon">
                                  <img
                                    src="https://ensurepms.com/assets/frontend/materials/withdraw.png"
                                    alt=""
                                  />
                                </div>
                                <div class="name">Withdraw</div>
                              </a>
                            </div>
                          </div>
                          <div class="col-4">
                            <div class="single">
                              <a href="https://ensurepms.com/user/withdraw/log">
                                <div class="icon">
                                  <img
                                    src="https://ensurepms.com/assets/frontend/materials/withdraw-log.png"
                                    alt=""
                                  />
                                </div>
                                <div class="name">Withdraw Log</div>
                              </a>
                            </div>
                          </div>
                          <div class="col-4">
                            <div class="single">
                              <a
                                href="https://ensurepms.com/user/ranking-badge"
                              >
                                <div class="icon">
                                  <img
                                    src="https://ensurepms.com/assets/frontend/materials/ranking.png"
                                    alt=""
                                  />
                                </div>
                                <div class="name">Ranking Badge</div>
                              </a>
                            </div>
                          </div>
                          <div class="col-4">
                            <div class="single">
                              <a href="https://ensurepms.com/user/referral">
                                <div class="icon">
                                  <img
                                    src="https://ensurepms.com/assets/frontend/materials/referral.png"
                                    alt=""
                                  />
                                </div>
                                <div class="name">Referral</div>
                              </a>
                            </div>
                          </div>
                          <div class="col-4">
                            <div class="single">
                              <a href="https://ensurepms.com/user/settings">
                                <div class="icon">
                                  <img
                                    src="https://ensurepms.com/assets/frontend/materials/settings.png"
                                    alt=""
                                  />
                                </div>
                                <div class="name">Settings</div>
                              </a>
                            </div>
                          </div>
                          <div class="col-4">
                            <div class="single">
                              <a
                                href="https://ensurepms.com/user/support-ticket/index"
                              >
                                <div class="icon">
                                  <img
                                    src="https://ensurepms.com/assets/frontend/materials/support-ticket.png"
                                    alt=""
                                  />
                                </div>
                                <div class="name">Support Ticket</div>
                              </a>
                            </div>
                          </div>
                          <div class="col-4">
                            <div class="single">
                              <a
                                href="https://ensurepms.com/user/notification/all"
                              >
                                <div class="icon">
                                  <img
                                    src="https://ensurepms.com/assets/frontend/materials/profile.png"
                                    alt=""
                                  />
                                </div>
                                <div class="name">Notifications</div>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div> -->
                  </div>

                  <!-- all Statistic -->
                  <div class="all-feature-mobile mb-3 p-4 mobile-screen-show">
                    <div class="title">All Statistic</div>
                    <div class="row">
                      <div class="col-12">
                        <div class="all-cards-mobile">
                          <div class="contents row">
                            <div
                              class="col-12"
                              v-animate
                              data-animation="fadeInUp animated"
                              data-wow-duration="1s"
                            >
                              <div class="single-card">
                                <div class="icon">
                                  <i class="fa fa-compress"></i>
                                </div>
                                <div class="content">
                                  <div class="amount count">0</div>
                                  <div class="name">All Transactions</div>
                                </div>
                              </div>
                            </div>
                            <div
                              class="col-12"
                              v-animate
                              data-animation="fadeInUp animated"
                              data-wow-duration="1.5s"
                            >
                              <div class="single-card">
                                <div class="icon">
                                  <i class="fa fa-arrow-down"></i>
                                </div>
                                <div class="content">
                                  <div class="amount">
                                    $<span class="count">0</span>
                                  </div>
                                  <div class="name">Total Deposit</div>
                                </div>
                              </div>
                            </div>
                            <div
                              class="col-12"
                              v-animate
                              data-animation="fadeInUp animated"
                              data-wow-duration="2s"
                            >
                              <div class="single-card">
                                <div class="icon">
                                  <i class="fa fa-arrow-up"></i>
                                </div>
                                <div class="content">
                                  <div class="amount">
                                    $<span class="count">0</span>
                                  </div>
                                  <div class="name">Total Withdraw</div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <!-- <div class="moretext-2">
                              <div class="contents row">
                                <div class="col-12">
                                  <div class="single-card">
                                    <div class="icon">
                                      <i icon-name="credit-card"></i>
                                    </div>
                                    <div class="content">
                                      <div class="amount">
                                        $<span class="count">0</span>
                                      </div>
                                      <div class="name">Total Profit</div>
                                    </div>
                                  </div>
                                </div>
                                <div class="col-12">
                                  <div class="single-card">
                                    <div class="icon">
                                      <i icon-name="log-in"></i>
                                    </div>
                                    <div class="content">
                                      <div class="amount">
                                        $<span class="count">0</span>
                                      </div>
                                      <div class="name">Total Transfer</div>
                                    </div>
                                  </div>
                                </div>
                                <div class="col-12">
                                  <div class="single-card">
                                    <div class="icon">
                                      <i icon-name="send"></i>
                                    </div>
                                    <div class="content">
                                      <div class="amount">
                                        $<span class="count">0</span>
                                      </div>
                                      <div class="name">Total Withdraw</div>
                                    </div>
                                  </div>
                                </div>
                                <div class="col-12">
                                  <div class="single-card">
                                    <div class="icon">
                                      <i icon-name="users-2"></i>
                                    </div>
                                    <div class="content">
                                      <div class="amount">
                                        $<span class="count">0</span>
                                      </div>
                                      <div class="name">Referral Bonus</div>
                                    </div>
                                  </div>
                                </div>
                                <div class="col-12">
                                  <div class="single-card">
                                    <div class="icon">
                                      <i icon-name="anchor"></i>
                                    </div>
                                    <div class="content">
                                      <div class="amount">
                                        $<span class="count">0</span>
                                      </div>
                                      <div class="name">Deposit Bonus</div>
                                    </div>
                                  </div>
                                </div>
                                <div class="col-12">
                                  <div class="single-card">
                                    <div class="icon">
                                      <i icon-name="archive"></i>
                                    </div>
                                    <div class="content">
                                      <div class="amount">
                                        $<span class="count">0</span>
                                      </div>
                                      <div class="name">Investment Bonus</div>
                                    </div>
                                  </div>
                                </div>
                                <div class="col-12">
                                  <div class="single-card">
                                    <div class="icon">
                                      <i icon-name="gift"></i>
                                    </div>
                                    <div class="content">
                                      <div class="amount count">0</div>
                                      <div class="name">Total Referral</div>
                                    </div>
                                  </div>
                                </div>
                                <div class="col-12">
                                  <div class="single-card">
                                    <div class="icon">
                                      <i icon-name="award"></i>
                                    </div>
                                    <div class="content">
                                      <div class="amount count">1</div>
                                      <div class="name">Rank Achieved</div>
                                    </div>
                                  </div>
                                </div>
                                <div class="col-12">
                                  <div class="single-card">
                                    <div class="icon">
                                      <i icon-name="alert-triangle"></i>
                                    </div>
                                    <div class="content">
                                      <div class="amount count">0</div>
                                      <div class="name">Total Ticket</div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div> -->
                        </div>
                      </div>
                    </div>
                  </div>

                  <!-- Recent Transactions -->
                  <div
                    class="all-feature-mobile mobile-transactions mb-3 mobile-screen-show"
                  >
                    <div class="title">Recent Transactions</div>
                    <div class="contents">
                      <div class="single-transaction">
                        <div class="transaction-left">
                          <div class="transaction-des">
                            <div class="transaction-title">
                              Deposit With Gpay, PhonePay, All UPI Wallet
                            </div>
                            <div class="transaction-id">TRXP4JLVPVCX9</div>
                            <div class="transaction-date">
                              Aug 09 2024 12:55
                            </div>
                          </div>
                        </div>
                        <div class="transaction-right">
                          <div class="transaction-amount">+45 USD</div>
                          <div class="transaction-fee sub">-0 USD Fee</div>
                          <div class="transaction-gateway">UPI87459</div>

                          <div class="transaction-status pending">Pending</div>
                        </div>
                      </div>
                      <div class="single-transaction">
                        <div class="transaction-left">
                          <div class="transaction-des">
                            <div class="transaction-title">
                              Deposit With Bank Transfer
                            </div>
                            <div class="transaction-id">TRXV8HUPDSHN9</div>
                            <div class="transaction-date">
                              Aug 09 2024 12:53
                            </div>
                          </div>
                        </div>
                        <div class="transaction-right">
                          <div class="transaction-amount">+56 USD</div>
                          <div class="transaction-fee sub">-0 USD Fee</div>
                          <div class="transaction-gateway">BT785485</div>

                          <div class="transaction-status pending">Pending</div>
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

    <!--/Full Layout-->
  </DeshboardLayout>
</template>
  

<script>
import DeshboardLayout from "./../../Layouts/DashboardLayout.vue";
import { useAuthUserStore } from "./../../stores/user";
import { transactionStore } from "../../stores/transaction";
export default {
  components: {
    DeshboardLayout,
  },
  data() {
    return {
      authUser: [],

      transaction: [],
    };
  },
  methods: {},
  computed: {
    displayedItems() {
      return this.transaction.slice(0, 3);
    },
    sumtrx() {
      const withdrawSuccessTransactions = Object.values(
        this.transaction
      ).filter(
        (transaction) =>
          transaction.type === "Withdraw" && transaction.status === "success"
      );

      const sum = withdrawSuccessTransactions.reduce(
        (total, transaction) => total + transaction.amount,
        0
      );

      return sum;
    },
    lastWithdrawCreatedAt() {
      // Filter withdraw transactions with status success
      const withdrawSuccessTransactions = Object.values(
        this.transaction
      ).filter(
        (transaction) =>
          transaction.type === "Withdraw" && transaction.status === "success"
      );

      // If there are no successful withdraw transactions, return '00-00-0000'
      if (withdrawSuccessTransactions.length === 0) {
        return "00-00-0000";
      }

      // Sort the transactions by created_at in descending order
      const sortedTransactions = withdrawSuccessTransactions.sort(
        (a, b) => new Date(b.created_at) - new Date(a.created_at)
      );

      // Get the created_at value of the first transaction (latest one)
      const lastWithdrawCreatedAt = new Date(sortedTransactions[0].created_at);

      // Format the date to 'MM-DD-YYYY'
      const formattedDate = lastWithdrawCreatedAt.toLocaleDateString("en-US", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
      });

      return formattedDate;
    },
    lastDepositCreatedAt() {
      // Filter withdraw transactions with status success
      const withdrawSuccessTransactions = Object.values(
        this.transaction
      ).filter(
        (transaction) =>
          transaction.type === "deposit" && transaction.status === "success"
      );

      // If there are no successful withdraw transactions, return '00-00-0000'
      if (withdrawSuccessTransactions.length === 0) {
        return "00-00-0000";
      }

      // Sort the transactions by created_at in descending order
      const sortedTransactions = withdrawSuccessTransactions.sort(
        (a, b) => new Date(b.created_at) - new Date(a.created_at)
      );

      // Get the created_at value of the first transaction (latest one)
      const lastWithdrawCreatedAt = new Date(sortedTransactions[0].created_at);

      // Format the date to 'MM-DD-YYYY'
      const formattedDate = lastWithdrawCreatedAt.toLocaleDateString("en-US", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
      });

      return formattedDate;
    },
  },
  mounted() {},
  async created() {
    const userStore = useAuthUserStore();
    const authUser = userStore.authUser;

    if (authUser) {
      this.authUser = authUser;
    } else {
      // userStore.reSetAuthUser();
      this.authUser = await userStore.reSetAuthUser();
    }

    const getTransaction = transactionStore();

    const transactionData = getTransaction.authTransaction;

    if (transactionData) {
      this.transaction = transactionData;
    } else {
      this.transaction = await getTransaction.authUserTransaction();
    }

    this.$setLoading(false);
  },
};
</script>
<style scoped>
.imgs {
  width: 80px !important;
  height: 80px !important;
}
.imgs i {
  color: rgb(255, 255, 255);
  font-size: 40px;
}

.video-des .deslidt ul li {
  margin-bottom: 0px;
}
.video-des .deslidt ul li .serials {
  margin: 5px;
}
.video-des .deslidt ul li:first-child {
  padding-top: 20px;
}
</style>