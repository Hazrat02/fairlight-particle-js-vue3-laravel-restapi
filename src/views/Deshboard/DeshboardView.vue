<template>
  <DeshboardLayout>
    <div class="panel-layout">
      <!--Header-->
      <div class="panel-header">
        <div class="logo">
          <router-link to="/">
            <img
              class="logo-unfold"
              src="./../../assets/frontend/images/logo/logo2.gif"
              alt="Logo"
            />
            <img
              class="logo-fold"
              src="./../../assets/frontend/images/logo/logo2.gif"
              alt="Logo"
            />
          </router-link>
        </div>
        <div class="nav-wrap">
          <div class="nav-left">
            <button class="sidebar-toggle">
              <i class="fa fa-arrow-left"></i>
              <!-- Replaced with Font Awesome icon -->
            </button>
            <div class="mob-logo">
              <router-link to="/">
                <img
                  src="./../../assets/frontend/images/logo/logo2.gif"
                  alt="Site Name"
                />
              </router-link>
            </div>
          </div>
          <div class="nav-right">
            <div class="single-nav-right">
              <div class="single-right">
                <div class="color-switcher">
                  <i class="fa fa-moon dark-icon" data-mode="dark"></i>
                  <i class="fa fa-sun light-icon" data-mode="light"></i>
                </div>
              </div>

              <div class="single-nav-right user-notifications208">
                <button
                  type="button"
                  class="item notification-dot"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i class="fa fa-bell"></i>
                  <!-- Replaced with Font Awesome icon -->
                  <div class="number">0</div>
                </button>
                <div class="dropdown-menu dropdown-menu-end notification-pop">
                  <div class="noti-head">Notifications <span>0</span></div>
                  <div class="all-noti">
                    <p>Notification Not Found</p>
                  </div>
                </div>
              </div>

              <div class="single-right">
                <select
                  name="language"
                  id=""
                  class="site-nice-select"
                  onchange="window.location.href=this.options[this.selectedIndex].value;"
                >
                  <option
                    value="https://ensurepms.com/language-update?name=en"
                    selected
                  >
                    English
                  </option>
                  <option value="https://ensurepms.com/language-update?name=es">
                    Spanish
                  </option>
                  <option value="https://ensurepms.com/language-update?name=fr">
                    Franch
                  </option>
                </select>
              </div>
              <div class="single-right">
                <button
                  type="button"
                  class="item"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i class="fa fa-user"></i>
                  <!-- Replaced with Font Awesome icon -->
                </button>
                <ul class="dropdown-menu dropdown-menu-end">
                  <li>
                    <a
                      href="https://ensurepms.com/user/settings"
                      class="dropdown-item"
                      type="button"
                      ><i class="fa fa-cog"></i>Settings</a
                    >
                  </li>
                  <li>
                    <a
                      href="https://ensurepms.com/user/change-password"
                      class="dropdown-item"
                      type="button"
                    >
                      <i class="fa fa-lock"></i>Change Password
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://ensurepms.com/user/support-ticket/index"
                      class="dropdown-item"
                      type="button"
                    >
                      <i class="fa fa-headset"></i>Support Tickets
                    </a>
                  </li>
                  <li class="logout">
                    <form
                      method="POST"
                      action="https://ensurepms.com/logout"
                      id="logout-form"
                    >
                      <input
                        type="hidden"
                        name="_token"
                        value="CQv1VSBHkGUBhhhIeGxNnyk646PMRykfuci1aDUd"
                      />
                      <a
                        href="https://ensurepms.com/logout"
                        class="dropdown-item"
                        onclick="event.preventDefault(); localStorage.clear();  $('#logout-form').submit();"
                        ><i class="fa fa-sign-out-alt"></i>Logout</a
                      >
                    </form>
                  </li>
                </ul>
              </div>

              <!-- Covart Icon -->
              <div class="single-right">
                <i class="fa fa-covart-icon"></i>
                <!-- Replace with your icon -->
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--/Header-->

      <div class="desktop-screen-show">
        <div class="side-nav">
          <div class="side-wallet-box default-wallet mb-0">
            <div class="user-balance-card">
              <div class="wallet-name">
                <div class="name">Account Balance</div>
                <div class="default">Wallet</div>
              </div>
              <div class="wallet-info">
                <div class="wallet-id">
                  <i class="fa fa-wallet"></i>Main Wallet
                  <!-- Replaced with Font Awesome icon -->
                </div>
                <div class="balance">$0</div>
              </div>
              <div class="wallet-info">
                <div class="wallet-id">
                  <i class="fa fa-landmark"></i>Profit Wallet
                  <!-- Replaced with Font Awesome icon -->
                </div>
                <div class="balance">$0</div>
              </div>
              <div class="wallet-info">
                <div class="wallet-id">
                  <i class="fa fa-landmark"></i>Long Term Gain Wallet
                  <!-- Replaced with Font Awesome icon -->
                </div>
                <div class="balance">$0</div>
              </div>
            </div>
            <div class="actions">
              <a
                href="https://ensurepms.com/user/deposit"
                class="user-sidebar-btn"
                ><i class="fa fa-arrow-down"></i>Deposit
                <!-- Replaced with Font Awesome icon -->
              </a>
              <a
                href="https://ensurepms.com/user/schemas"
                class="user-sidebar-btn red-btn"
                ><i class="fa fa-arrow-up"></i>Invest Now
                <!-- Replaced with Font Awesome icon -->
              </a>
            </div>
          </div>
          <div class="side-nav-inside">
            <ul class="side-nav-menu">
              <li class="side-nav-item active">
                <a href="https://ensurepms.com/user/dashboard"
                  ><i class="fa fa-th"></i><span>Dashboard</span>
                  <!-- Replaced with Font Awesome icon -->
                </a>
              </li>

              <li class="side-nav-item">
                <a href="https://ensurepms.com/user/schemas"
                  ><i class="fa fa-check-square"></i><span>All Schema</span>
                  <!-- Replaced with Font Awesome icon -->
                </a>
              </li>
              <li class="side-nav-item">
                <a href="https://ensurepms.com/user/invest-logs"
                  ><i class="fa fa-copy"></i><span>Schema Logs</span>
                  <!-- Replaced with Font Awesome icon -->
                </a>
              </li>

              <li class="side-nav-item">
                <a href="https://ensurepms.com/user/transactions"
                  ><i class="fa fa-inbox"></i><span>All Transactions</span>
                  <!-- Replaced with Font Awesome icon -->
                </a>
              </li>
              <li class="side-nav-item">
                <a href="https://ensurepms.com/user/my-rewards"
                  ><i class="fa fa-gift"></i><span>My Rewards</span>
                  <!-- Replaced with Font Awesome icon -->
                </a>
              </li>

              <li class="side-nav-item">
                <a href="https://ensurepms.com/user/deposit"
                  ><i class="fa fa-file-upload"></i><span>Add Money</span>
                  <!-- Replaced with Font Awesome icon -->
                </a>
              </li>
              <li class="side-nav-item">
                <a href="https://ensurepms.com/user/deposit/log"
                  ><i class="fa fa-folder-plus"></i><span>Add Money Log</span>
                  <!-- Replaced with Font Awesome icon -->
                </a>
              </li>

              <li class="side-nav-item">
                <a href="https://ensurepms.com/user/wallet-exchange"
                  ><i class="fa fa-exchange-alt"></i
                  ><span>Wallet Exchange</span>
                  <!-- Replaced with Font Awesome icon -->
                </a>
              </li>

              <li class="side-nav-item">
                <a href="https://ensurepms.com/user/send-money"
                  ><i class="fa fa-paper-plane"></i><span>Send Money</span>
                  <!-- Replaced with Font Awesome icon -->
                </a>
              </li>
              <li class="side-nav-item">
                <a href="https://ensurepms.com/user/send-money/log"
                  ><i class="fa fa-cloud"></i><span>Send Money Log</span>
                  <!-- Replaced with Font Awesome icon -->
                </a>
              </li>

              <li class="side-nav-item">
                <a href="https://ensurepms.com/user/withdraw"
                  ><i class="fa fa-university"></i><span>Withdraw</span>
                  <!-- Replaced with Font Awesome icon -->
                </a>
              </li>
              <li class="side-nav-item">
                <a href="https://ensurepms.com/user/withdraw/log"
                  ><i class="fa fa-credit-card"></i><span>Withdraw Log</span>
                  <!-- Replaced with Font Awesome icon -->
                </a>
              </li>

              <li class="side-nav-item">
                <a href="https://ensurepms.com/user/ranking-badge"
                  ><i class="fa fa-star"></i><span>Ranking Badge</span>
                  <!-- Replaced with Font Awesome icon -->
                </a>
              </li>

              <li class="side-nav-item">
                <a href="https://ensurepms.com/user/referral"
                  ><i class="fa fa-user-friends"></i><span>Referral</span>
                  <!-- Replaced with Font Awesome icon -->
                </a>
              </li>

              <li class="side-nav-item">
                <a href="https://ensurepms.com/user/settings"
                  ><i class="fa fa-cog"></i><span>Settings</span>
                  <!-- Replaced with Font Awesome icon -->
                </a>
              </li>
              <li class="side-nav-item">
                <a href="https://ensurepms.com/user/support-ticket/index"
                  ><i class="fa fa-tools"></i><span>Support Tickets</span>
                  <!-- Replaced with Font Awesome icon -->
                </a>
              </li>

              <li class="side-nav-item">
                <a href="https://ensurepms.com/user/notification/all"
                  ><i class="fa fa-bell"></i><span>Notifications</span>
                  <!-- Replaced with Font Awesome icon -->
                </a>
              </li>

              <li class="side-nav-item">
                <!-- Authentication -->
                <form method="POST" action="https://ensurepms.com/logout">
                  <input
                    type="hidden"
                    name="_token"
                    value="CQv1VSBHkGUBhhhIeGxNnyk646PMRykfuci1aDUd"
                  />
                  <button type="submit" class="site-btn grad-btn w-100">
                    <i class="fa fa-sign-out-alt"></i><span>Logout</span>
                    <!-- Replaced with Font Awesome icon -->
                  </button>
                </form>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- end sidebar -->

      <div class="page-container">
        <div class="main-content">
          <div class="section-gap">
            <div class="container-fluid">
              <div class="row desktop-screen-show">
                <div class="col">
                  <div
                    class="alert site-alert alert-dismissible fade show"
                    role="alert"
                  >
                    <div class="content">
                      <div class="icon">
                        <i class="fa fa-exclamation-triangle"></i>
                        <!-- Replaced with Font Awesome icon -->
                      </div>
                      You need to submit your
                      <strong>KYC and Other Documents</strong> before proceeding
                      to the system.
                    </div>
                    <div class="action">
                      <a href="" class="site-btn-sm grad-btn">
                        <i class="fa fa-info-circle"></i>Submit Now
                        <!-- Replaced with Font Awesome icon -->
                      </a>
                      <a
                        href=""
                        class="site-btn-sm red-btn ms-2"
                        type="button"
                        data-bs-dismiss="alert"
                        aria-label="Close"
                        ><i class="fa fa-times"></i>Later
                        <!-- Replaced with Font Awesome icon -->
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div class="row mobile-screen-show">
                <div class="col-12">
                  <div class="user-kyc-mobile">
                    <i class="fa fa-fingerprint kyc-star"></i>
                    <!-- Replaced with Font Awesome icon -->
                    Please Verify Your Identity
                    <a href="https://ensurepms.com/user/kyc">Submit Now</a>
                  </div>
                </div>
              </div>

              <!--Page Content-->

              <div class="desktop-screen-show">
                <div class="row user-cards">
                  <div class="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div class="single">
                      <div class="icon">
                        <i class="fa fa-inbox"></i>
                        <!-- Replaced with Font Awesome icon -->
                      </div>
                      <div class="content">
                        <h1><span class="count">323 $</span></h1>
                        <p>All Transactions</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div class="single">
                      <div class="icon">
                        <i class="fa fa-file-alt"></i>
                        <!-- Replaced with Font Awesome icon -->
                      </div>
                      <div class="content">
                        <h4><b>$</b><span class="count">0</span></h4>
                        <p>Total Deposit</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div class="single">
                      <div class="icon">
                        <i class="fa fa-check-square"></i>
                        <!-- Replaced with Font Awesome icon -->
                      </div>
                      <div class="content">
                        <h4><b>$</b><span class="count">0</span></h4>
                        <p>Total Investment</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div class="single">
                      <div class="icon">
                        <i class="fa fa-credit-card"></i>
                        <!-- Replaced with Font Awesome icon -->
                      </div>
                      <div class="content">
                        <h4><b>$</b><span class="count">0</span></h4>
                        <p>Total Profit</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div class="single">
                      <div class="icon">
                        <i class="fa fa-arrow-right"></i>
                        <!-- Replaced with Font Awesome icon -->
                      </div>
                      <div class="content">
                        <h4><b>$</b><span class="count">0</span></h4>
                        <p>Total Transfer</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div class="single">
                      <div class="icon">
                        <i class="fa fa-money-bill-wave"></i>
                        <!-- Replaced with Font Awesome icon -->
                      </div>
                      <div class="content">
                        <h4><b>$</b><span class="count">0</span></h4>
                        <p>Total Withdraw</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div class="single">
                      <div class="icon">
                        <i class="fa fa-gift"></i>
                        <!-- Replaced with Font Awesome icon -->
                      </div>
                      <div class="content">
                        <h4><b>$</b><span class="count">0</span></h4>
                        <p>Referral Bonus</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div class="single">
                      <div class="icon">
                        <i class="fa fa-book"></i>
                        <!-- Replaced with Font Awesome icon -->
                      </div>
                      <div class="content">
                        <h4><b>$</b><span class="count">0</span></h4>
                        <p>Deposit Bonus</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div class="single">
                      <div class="icon">
                        <i class="fa fa-gem"></i>
                        <!-- Replaced with Font Awesome icon -->
                      </div>
                      <div class="content">
                        <h4><b>$</b><span class="count">0</span></h4>
                        <p>Investment Bonus</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div class="single">
                      <div class="icon">
                        <i class="fa fa-user-plus"></i>
                        <!-- Replaced with Font Awesome icon -->
                      </div>
                      <div class="content">
                        <h4 class="count">0</h4>
                        <p>Total Referral</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div class="single">
                      <div class="icon">
                        <i class="fa fa-tachometer-alt"></i>
                        <!-- Replaced with Font Awesome icon -->
                      </div>
                      <div class="content">
                        <h4 class="count">1</h4>
                        <p>Rank Achieved</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div class="single">
                      <div class="icon">
                        <i class="fa fa-question-circle"></i>
                        <!-- Replaced with Font Awesome icon -->
                      </div>
                      <div class="content">
                        <h4 class="count">0</h4>
                        <p>Total Ticket</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="row">
                  <div class="col-xl-12">
                    <div class="site-card">
                      <div class="site-card-header">
                        <h3 class="title">Recent Transactions</h3>
                      </div>
                      <div class="site-card-body table-responsive">
                        <div class="site-datatable">
                          <table class="display data-table">
                            <thead>
                              <tr>
                                <th>Description</th>
                                <th>Transactions ID</th>
                                <th>Type</th>
                                <th>Amount</th>
                                <th>Fee</th>
                                <th>Status</th>
                                <th>Gateway</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr class="centered">
                                <td colspan="7">No Data Found</td>
                              </tr>
                            </tbody>
                          </table>
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
                        <div class="wallet">Live Wallet</div>
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
                        to="/"
                        v-animate
                        data-animation="bounceInDown animated"
                        data-wow-duration="1.0s"
                        ><i class="fa fa-arrow-down"></i> Deposit</router-link
                      >
                      <router-link
                        to="/"
                        v-animate
                        data-animation="bounceInDown animated"
                        data-wow-duration="1.5s"
                        ><i class="fa fa-shopping-bag"></i> Wallet</router-link
                      >
                      <router-link
                        to="/"
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
                              <div class="name">Schemas</div>
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
                                  src="https://ensurepms.com/assets/frontend/materials/schema-log.png"
                                  alt=""
                                />
                              </div>
                              <div class="name">Investment</div>
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

                            <div class="transaction-status pending">
                              Pending
                            </div>
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

                            <div class="transaction-status pending">
                              Pending
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

      <!-- Show in 575px in Mobile Screen -->
      <div class="mobile-screen-show">
        <div class="bottom-appbar">
          <a href="https://ensurepms.com/user/dashboard" class="active">
            <i class="fa fa-tachometer"></i>
            <!-- Replaced with Font Awesome icon -->
          </a>
          <a href="https://ensurepms.com/user/deposit" class="">
            <i class="fa fa-download"></i>
            <!-- Replaced with Font Awesome icon -->
          </a>
          <a href="https://ensurepms.com/user/schemas" class="">
            <i class="fa fa-arrow-up"></i>
            <!-- Replaced with Font Awesome icon -->
          </a>
          <a href="https://ensurepms.com/user/referral" class="">
            <i class="fa fa-gift"></i>
            <!-- Replaced with Font Awesome icon -->
          </a>
          <a href="https://ensurepms.com/user/settings" class="">
            <i class="fa fa-cogs"></i>
            <!-- Replaced with Font Awesome icon -->
          </a>
        </div>
      </div>

      <!-- Show in 575px in Mobile Screen End -->

      <!-- Automatic Popup -->

      <!-- /Automatic Popup End -->
    </div>
    <!--/Full Layout-->
  </DeshboardLayout>
</template>
  

<script>
import DeshboardLayout from "./../../Layouts/DashboardLayout.vue";
import { useAuthUserStore } from "./../../stores/user";
// import { transactionStore } from "../../store/transaction";
export default {
  components: {
    DeshboardLayout,
  },
  data() {
    return {
      authUser: [],

      transactions: [],
    };
  },
  methods: {},
  computed: {
    sumtrx() {
      const withdrawSuccessTransactions = Object.values(
        this.transactions
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
        this.transactions
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
        this.transactions
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

    // const getTransaction = transactionStore();

    // const transactionData = getTransaction.authTransaction;

    // if (transactionData) {
    //   this.transactions = transactionData;
    // } else {

    //   this.transactions = await getTransaction.authUserTransaction();
    // }

    this.$setLoading(false);
  },
};
</script>
<style>
.div {
  color: #316f0a;
}
</style>