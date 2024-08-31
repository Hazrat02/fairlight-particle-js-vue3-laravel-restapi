<template>
  <div>
    <AdminDeshboardLayout>
      <div class="page-container">
        <div class="main-content">
          <div class="section-gap">
            <div class="emp-profile">
              <form method="post">
                <div class="row">
                  <div class="col-md-4">
                    <div class="profile-img">
                      <img
                        v-if="authUser.profile"
                        class=""
                        :src="authUser.profile"
                        style="width: 150px; height: 150px"
                      />
                      <img
                        v-else
                        class=""
                        style="width: 150px; height: 150px"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS52y5aInsxSm31CvHOFHWujqUx_wWTS9iM6s7BAm21oEN_RiGoog"
                      />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="profile-head">
                      <h3>
                        {{ authUser.name }}
                      </h3>
                      <h4>
                        {{ authUser.email }}
                      </h4>

                      <div class="mob-shortcut-btn">
                        <router-link
                        :to="{
                                name: 'AdminDeposit',
                                params: { id: this.$route.params.id },
                              }"
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
                          ><i class="fa fa-shopping-bag"></i> All
                          Log</router-link
                        >
                        <router-link
                        :to="{
                                name: 'AdminWithdraw',
                                params: { id: this.$route.params.id },
                              }"
                          v-animate
                          data-animation="bounceInDown animated"
                          data-wow-duration="2s"
                          ><i class="fa fa-arrow-up"></i> Withdraw</router-link
                        >
                      </div>
                    </div>
                  </div>
                </div>
                <hr />
                <div class="row">
                  <div class="col-md-3">
                    <div class="profile-work">
                      <h3>LINK</h3>

                      <a
                        :class="{
                          active: currentSection === 'profile',
                        }"
                        @click="handleClick('profile')"
                      >
                        Profile</a
                      >
                      <br />
                      <a
                        class=""
                        :class="{
                          active: currentSection === 'trx',
                        }"
                        @click="handleClick('trx')"
                      >
                        TRX</a
                      ><br />
                      <a
                        class=""
                        :class="{
                              'active': currentSection === 'doc',
                            }"
                            @click="handleClick('doc')"
                      >
                        KYC</a
                      ><br />
                   
                    </div>
                  </div>
                  <div class="col-md-9">
                    <div
                      class="tab-content profile-tab"
                      v-if="currentSection === 'profile'"
                    >
                      <div class="tab-pane show active">
                        
                        <div class="row">
                          <div class="col-md-6">
                            <label>Main Assets</label>
                          </div>
                          <div class="col-md-6">
                            <p>{{authUser.main_balance}} $</p>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-md-6">
                            <label>Profit Assets</label>
                          </div>
                          <div class="col-md-6">
                            <p>{{authUser.live_balance}} $</p>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-md-6">
                            <label>Name</label>
                          </div>
                          <div class="col-md-6">
                            <p>{{authUser.name}}</p>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-md-6">
                            <label>Email</label>
                          </div>
                          <div class="col-md-6">
                            <p>{{authUser.email}}</p>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-md-6">
                            <label>Phone</label>
                          </div>
                          <div class="col-md-6">
                            <p>{{authUser.Phone}}</p>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-md-6">
                            <label>Country</label>
                          </div>
                          <div class="col-md-6">
                            <p>{{authUser.country}}</p>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-md-6">
                            <label>Birthday</label>
                          </div>
                          <div class="col-md-6">
                            <p>{{authUser.birth}}</p>
                          </div>
                        </div>
                      </div>
                      <div
                        class="tab-pane fade"
                        id="profile"
                        role="tabpanel"
                        aria-labelledby="profile-tab"
                      >
                        <div class="row">
                          <div class="col-md-6">
                            <label>Experience</label>
                          </div>
                          <div class="col-md-6">
                            <p>Expert</p>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-md-6">
                            <label>Hourly Rate</label>
                          </div>
                          <div class="col-md-6">
                            <p>10$/hr</p>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-md-6">
                            <label>Total Projects</label>
                          </div>
                          <div class="col-md-6">
                            <p>230</p>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-md-6">
                            <label>English Level</label>
                          </div>
                          <div class="col-md-6">
                            <p>Expert</p>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-md-6">
                            <label>Availability</label>
                          </div>
                          <div class="col-md-6">
                            <p>6 months</p>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-md-12">
                            <label>Your Bio</label><br />
                            <p>Your detail description</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <section class="tables py-0" v-if="currentSection == 'trx'">
                      <div class="table-responsive">
                          <table class="table table-hover">
                            <thead>
                              <tr>
                                <th>Description</th>
                                <th>Transactions ID</th>
                                <th>Amount</th>
                                <th>Wallet</th>
                                <th>Status</th>
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
                                  <strong
                                    v-if="transactionItem.address === 'Live'"
                                    >Profit</strong
                                  >
                                  <strong v-else> Main </strong>
                                </td>
                                <td>
                                  <div
                                    v-if="transactionItem.status != 'pending'"
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
                                  <div
                                    v-else
                                    class="pe-2"
                                    style="
                                      display: flex;
                                      justify-content: space-between;
                                    "
                                  >
                                    

                                    <i
                                      @click="
                                        trxEdit(transactionItem.id, 'success')
                                      "
                                      class="fa fa-check"
                                      style="color: green; font-size: 25px"
                                    ></i>
                                    <i
                                      @click="
                                        trxEdit(transactionItem.id, 'rejected')
                                      "
                                      else
                                      class="fa fa-times"
                                      style="color: red; font-size: 25px"
                                    ></i>
                                  </div>
                                </td>
                              </tr>
                            </tbody>
                          </table>

                          <!-- Pagination -->
                          <nav
                            class="site-pagination"
                            style="text-align: center"
                            v-show="totalPages > 1"
                          >
                            <ul class="pagination">
                              <li
                                class="page-item"
                                :class="{ disabled: currentPage === 1 }"
                                @click="previousPage"
                                aria-label="&laquo; Previous"
                              >
                                <span class="page-link">&lsaquo;</span>
                              </li>

                              <li
                                v-for="page in totalPages"
                                :key="page"
                                class="page-item"
                                :class="{ active: page === currentPage }"
                                @click="goToPage(page)"
                              >
                                <span class="page-link">{{ page }}</span>
                              </li>

                              <li
                                class="page-item"
                                :class="{
                                  disabled: currentPage === totalPages,
                                }"
                                @click="nextPage"
                                aria-label="Next &raquo;"
                              >
                                <span class="page-link">&rsaquo;</span>
                              </li>
                            </ul>
                          </nav>
                          <!-- End Pagination -->
                        </div>
                    </section>

                    <div v-if="currentSection == 'doc'">
                    <section class="pt-0 mt-4" v-if="idkyc">
                      <div class="">
                        <div class="row justify-content-between">
                          <div class="col-12">
                            <div class="card bg-secondary">
                              <div class="card-body">
                                <div
                                  class="row gy-3 align-items-center"
                                  v-if="authUser.id_kyc != 'No'"
                                >
                                  <div class="col-12">
                                    <div class="">
                                      <div>
                                        <b for="">Proof of ID: </b
                                        ><button
                                          v-if="authUser.id_kyc == 'pending'"
                                          class="btn btn-success mt-2"
                                          @click="kyc('id_kyc')"
                                        >
                                          Approve
                                        </button>
                                      </div>
                                    </div>

                                    <div class="col-12">
                                      <div class="card bg-secondary">
                                        <div class="card-body">
                                          <div
                                            class="row gy-3 justify-content-between"
                                          >
                                            <div class="col-lg-6">
                                              <b>Id Front:</b>
                                              <div
                                                class="card mb-0"
                                                style="border: solid white 2px"
                                              >
                                                <a
                                                  :href="idkyc.id_front"
                                                  v-if="idkyc.id_front"
                                                >
                                                {{ idkyc.id_front }}
                                                  <img
                                                    class="img-fluid"
                                                    :src="idkyc.id_front"
                                                    alt=""
                                                  />
                                                </a>
                                                <span v-else>No Data</span>
                                              </div>
                                            </div>
                                            <div class="col-lg-6">
                                              <b>Id Back:</b>
                                              <div
                                                class="card mb-0"
                                                style="
                                                  border: solid rgb(101, 95, 95)
                                                    2px;
                                                "
                                              >
                                                <a
                                                  :href="idkyc.id_back"
                                                  v-if="idkyc.id_back"
                                                >
                                                  <img
                                                    class="img-fluid"
                                                    :src="idkyc.id_back"
                                                    alt=""
                                                  />
                                                </a>

                                                <span v-else>No Data</span>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div
                                    class="row align-items-center"
                                    v-if="authUser.ad_kyc != 'No'"
                                  >
                                    <div class="">
                                      <div>
                                        <b for="">Proof of Address: </b>
                                        <button
                                          v-if="authUser.ad_kyc == 'pending'"
                                          class="btn btn-success mt-2"
                                          @click="kyc('ad_kyc')"
                                        >
                                          Approve
                                        </button>
                                      </div>
                                    </div>
                                    <div class="col-md-6 col-12">
                                      <div class="col-lg-10">
                                        <div>
                                          <b for="">Country: </b
                                          ><span>{{ idkyc.country }}</span>
                                        </div>
                                      </div>
                                      <div class="col-lg-10">
                                        <div>
                                          <b for="">City: </b
                                          ><span>{{ idkyc.city }}</span>
                                        </div>
                                      </div>

                                      <div class="col-lg-10">
                                        <div>
                                          <b for="">Address: </b
                                          ><span>{{ idkyc.address }}</span>
                                        </div>
                                      </div>
                                      <div class="col-lg-10">
                                        <div>
                                          <b for="">Postel Number: </b
                                          ><span>{{ idkyc.postel }}</span>
                                        </div>
                                      </div>
                                    </div>
                                    <div class="col-md-6 col-12">
                                      <div class="card">
                                        <div class="card-body">
                                          <div
                                            class="row gy-3 r justify-content-center"
                                          >
                                            <div class="">
                                              <div
                                                class="card mb-0"
                                                style="border: solid white 2px"
                                              >
                                                <a
                                                  :href="idkyc.ad_file"
                                                  v-if="idkyc.ad_file"
                                                >
                                                  <img
                                                    class="img-fluid"
                                                    :src="idkyc.ad_file"
                                                    alt=""
                                                  />
                                                </a>
                                                <span v-else> No Data </span>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div
                                    class="row align-items-center"
                                    v-if="idkyc.se_file"
                                  >
                                    <div class="">
                                      <div>
                                        <b for="">Proof of Selfie: </b>
                                        <button
                                          v-if="authUser.id_kyc == 'pending'"
                                          class="btn btn-success mt-2"
                                          @click="kyc('id_kyc')"
                                        >
                                          Approve
                                        </button>
                                      </div>
                                    </div>

                                    <div class="col-12">
                                      <div class="card">
                                        <div class="card-body">
                                          <div
                                            class="row justify-content-between"
                                          >
                                            <div class="">
                                              <div
                                                class="card mb-0"
                                                style="border: solid white 2px"
                                              >
                                                <a
                                                  :href="idkyc.se_file"
                                                  v-if="idkyc.se_file"
                                                >
                                                  <img
                                                    class="img-fluid"
                                                    :src="idkyc.se_file"
                                                    alt=""
                                                  />
                                                </a>
                                                <span v-else> No Data </span>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div
                                    class="row align-items-center"
                                    v-if="idkyc.ot_file"
                                  >
                                    <div class="">
                                      <div>
                                        <b for="">Proof of Other: </b>
                                        <button
                                          v-if="authUser.id_kyc == 'pending'"
                                          class="btn btn-success mt-2"
                                          @click="kyc('id_kyc')"
                                        >
                                          Approve
                                        </button>
                                      </div>
                                    </div>

                                    <div class="col-12">
                                      <div class="card">
                                        <div class="card-body">
                                          <div
                                            class="row justify-content-between"
                                          >
                                            <div class="">
                                              <div
                                                class="card mb-0"
                                                style="border: solid white 2px"
                                              >
                                                <a
                                                  :href="idkyc.ot_file"
                                                  v-if="idkyc.ot_file"
                                                >
                                                  <img
                                                    class="img-fluid"
                                                    :src="idkyc.ot_file"
                                                    alt=""
                                                  />
                                                </a>
                                                <span v-else> No Data </span>
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
                      </div>
                    </section>

                    <div v-else>No Data</div>
                  </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <section class="pt-0 mt-4">
        <div class="container-fluid">
          <div class="row justify-content-center gy-4">
            <div class="col-lg-4">
              <!-- User block-->
              <div class="card mb-4 bg-secondary">
                <div class="card-body text-center">
                  <img
                    v-if="authUser.profile"
                    class="rounded-circle img-fluid"
                    :src="authUser.profile"
                    style="width: 150px; height: 150px"
                    alt="Richard Nevoreski"
                  />
                  <img
                    v-else
                    class="rounded-circle img-fluid"
                    style="width: 150px; height: 150px"
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                    alt="Richard Nevoreski"
                  />

                  <h5 class="my-3">{{ authUser.name }}</h5>
                  <p class="text-muted mb-1">Email: {{ authUser.email }}</p>
                  <p class="text-muted mb-1">
                    Wallet: {{ authUser.main_balance }}
                  </p>
                  <p class="text-muted mb-1">
                    Live: {{ authUser.live_balance }}
                  </p>

                  <div class="d-flex justify-content-center mb-2">
                    <a
                      data-bs-toggle="modal"
                      data-bs-target="#depositModal"
                      class="btn btn-outline-success"
                    >
                      Deposit
                    </a>
                    <a
                      data-bs-toggle="modal"
                      data-bs-target="#withdrawModal"
                      class="btn btn-primary"
                    >
                      Withdarw
                    </a>

                    <button
                      class="btn btn-outline-success ms-1"
                      data-bs-toggle="modal"
                      data-bs-target="#transferModal"
                    >
                      Transfer
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-12">
              <div class="card">
                <header class="">
                  <nav class="bg-dark pt-1 z-index-10">
                    <div class="px-1">
                      <ul
                        class="list-inline list-unstyled mb-0 d-flex align-items-center justify-content-between"
                      >
                        <li class="sidebar-item">
                          <a
                            class="sidebar-link"
                            :class="{
                              'bg-dash-dark-2': currentSection === 'profile',
                            }"
                            @click="handleClick('profile')"
                          >
                            Profile</a
                          >
                        </li>
                        <li class="sidebar-item">
                          <a
                            class="sidebar-link"
                            :class="{
                              'bg-dash-dark-2': currentSection === 'trx',
                            }"
                            @click="handleClick('trx')"
                          >
                            TRX</a
                          >
                        </li>

                        <li class="sidebar-item">
                          <a
                            class="sidebar-link"
                            :class="{
                              'bg-dash-dark-2': currentSection === 'doc',
                            }"
                            @click="handleClick('doc')"
                          >
                            Doc</a
                          >
                        </li>
                        <li class="sidebar-item">
                          <a
                            class="sidebar-link"
                            :class="{
                              'bg-dash-dark-2': currentSection === 'economic',
                            }"
                            @click="handleClick('economic')"
                          >
                            Economic</a
                          >
                        </li>
                        <li class="sidebar-item">
                          <a
                            class="sidebar-link"
                            :class="{
                              'bg-dash-dark-2': currentSection === 'payment',
                            }"
                            @click="handleClick('payment')"
                          >
                            Payment</a
                          >
                        </li>
                      </ul>
                    </div>
                  </nav>
                </header>
                <div class="card-body bg-secondary">
                  <div
                    v-if="currentSection === 'profile'"
                    class="row gy-3 align-items-center"
                  >
                    <div class="col-md-6 col-12">
                      <div class="card mb-4 bg-secondary">
                        <div class="card-body">
                          <div class="row">
                            <div class="col-sm-3">
                              <p class="mb-0">Full Name</p>
                            </div>
                            <div class="col-sm-9">
                              <p class="text-muted mb-0">{{ authUser.name }}</p>
                            </div>
                          </div>
                          <hr />
                          <div class="row">
                            <div class="col-sm-3">
                              <p class="mb-0">Email</p>
                            </div>
                            <div class="col-sm-9">
                              <p class="text-muted mb-0">
                                {{ authUser.email }}
                              </p>
                            </div>
                          </div>
                          <hr />
                          <div class="row">
                            <div class="col-sm-3">
                              <p class="mb-0">Phone</p>
                            </div>
                            <div class="col-sm-9">
                              <p class="text-muted mb-0">
                                {{ authUser.Phone }}
                              </p>
                            </div>
                          </div>
                          <hr />
                          <div class="row">
                            <div class="col-sm-3">
                              <p class="mb-0">Communication Language</p>
                            </div>
                            <div class="col-sm-9">
                              <p class="text-muted mb-0">Einglish</p>
                            </div>
                          </div>
                          <hr />
                          <div class="row">
                            <div class="col-sm-3">
                              <p class="mb-0">Address</p>
                            </div>
                            <div class="col-sm-9">
                              <p class="text-muted mb-0">
                                {{ authUser.country }}
                              </p>
                            </div>
                          </div>
                          <hr />
                          <div class="row">
                            <div class="col-sm-3">
                              <p class="mb-0">Password</p>
                            </div>
                            <div class="col-sm-9">
                              <p class="text-muted mb-0">Hidden</p>
                            </div>
                          </div>
                          <hr />
                          <div class="row">
                            <div class="col-sm-3">
                              <p class="mb-0">Wallet</p>
                            </div>
                            <div class="col-sm-9">
                              <p class="text-muted mb-0">
                                {{ authUser.wallet }}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-6 col-12">
                      <div class="card bg-secondary mb-4 mb-lg-0">
                        <div class="card-body p-0">
                          <ul class="list-group list-group-flush rounded-3">
                            <li
                              class="list-group-item d-flex justify-content-between align-items-center p-3"
                            >
                              <p class="text-warning">{{ authUser.id_kyc }}</p>
                              <p class="mb-0">Proof of ID approved</p>
                            </li>
                            <li
                              class="list-group-item d-flex justify-content-between align-items-center p-3"
                            >
                              <p class="text-success">{{ authUser.ad_kyc }}</p>
                              <p class="mb-0">Proof of Address approved</p>
                            </li>
                            <li
                              class="list-group-item d-flex justify-content-between align-items-center p-3"
                            >
                              <p style="color: #55acee">
                                {{ authUser.ec_kyc }}
                              </p>
                              <p class="mb-0">Economic Profile approved</p>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div v-if="currentSection == 'payment'">
                    <section class="container" v-if="authPayment">
                      <div class="card bg-secondary p-4">
                        <div
                          class="card-body row justify-content-evenly"
                          v-if="authPayment.method == 'bank'"
                        >
                          <div class="col-lg-8">
                            <div class="row">
                              <div class="col-sm-3">
                                <p class="mb-0">Payment Method</p>
                              </div>
                              <div class="col-sm-9">
                                <p class="text-muted mb-0">
                                  {{ authPayment.method }}
                                </p>
                              </div>
                            </div>
                            <hr />
                            <div class="row">
                              <div class="col-sm-3">
                                <p class="mb-0">Bank Holder Name</p>
                              </div>
                              <div class="col-sm-9">
                                <p class="text-muted mb-0">
                                  {{ authPayment.holder }}
                                </p>
                              </div>
                            </div>
                            <hr />
                            <div class="row">
                              <div class="col-sm-3">
                                <p class="mb-0">Account Number</p>
                              </div>
                              <div class="col-sm-9">
                                <p class="text-muted mb-0">
                                  {{ authPayment.bank_address }}
                                </p>
                              </div>
                            </div>
                            <hr />
                            <div class="row">
                              <div class="col-sm-3">
                                <p class="mb-0">Recipient Bank Name</p>
                              </div>
                              <div class="col-sm-9">
                                <p class="text-muted mb-0">
                                  {{ authPayment.bank_name }}
                                </p>
                              </div>
                            </div>
                            <hr />
                            <div class="row">
                              <div class="col-sm-3">
                                <p class="mb-0">Recipient Bank IFSC</p>
                              </div>
                              <div class="col-sm-9">
                                <p class="text-muted mb-0">
                                  {{ authPayment.ifsc }}
                                </p>
                              </div>
                            </div>
                          </div>
                          <div class="col-lg-4" style="object-fit: cover">
                            <img
                              v-if="authPayment.doc"
                              class="img-fluid"
                              :src="authPayment.doc"
                              alt=""
                            />
                            <img
                              v-else
                              class="img-fluid"
                              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQW_80vVH0RghGLTxWZjz0EYc9JanOzT-m0wEUvdU0caY6bKU5n8oF5hbOHZlU9GVUM1dQ&usqp=CAU"
                              alt=""
                            />
                          </div>
                        </div>
                        <div
                          class="card-body row justify-content-evenly"
                          v-if="authPayment.method == 'crypto'"
                        >
                          <div class="col-lg-8">
                            <div class="row">
                              <div class="col-sm-3">
                                <p class="mb-0">Payment Method</p>
                              </div>
                              <div class="col-sm-9">
                                <p class="text-muted mb-0">
                                  {{ authPayment.method }}
                                </p>
                              </div>
                            </div>
                            <hr />
                            <div class="row">
                              <div class="col-sm-3">
                                <p class="mb-0">Wallet Address:</p>
                              </div>
                              <div class="col-sm-9">
                                <p class="text-muted mb-0">
                                  {{ authPayment.wallet_address }}
                                </p>
                              </div>
                            </div>
                            <hr />
                            <div class="row">
                              <div class="col-sm-3">
                                <p class="mb-0">Currency:</p>
                              </div>
                              <div class="col-sm-9">
                                <p class="text-muted mb-0">USDT</p>
                              </div>
                            </div>
                            <hr />
                            <div class="row">
                              <div class="col-sm-3">
                                <p class="mb-0">Wallet Tag Number:</p>
                              </div>
                              <div class="col-sm-9">
                                <p class="text-muted mb-0">
                                  {{ authPayment.tag }}
                                </p>
                              </div>
                            </div>
                          </div>
                          <div class="col-lg-4" style="object-fit: cover">
                            <img
                              v-if="authPayment.qr"
                              class="img-fluid"
                              :src="authPayment.qr"
                              alt=""
                            />
                            <img
                              v-else
                              class="img-fluid"
                              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQW_80vVH0RghGLTxWZjz0EYc9JanOzT-m0wEUvdU0caY6bKU5n8oF5hbOHZlU9GVUM1dQ&usqp=CAU"
                              alt=""
                            />
                          </div>
                        </div>
                      </div>
                    </section>

                    <div v-else>No Data</div>
                  </div>
                  <div v-if="currentSection == 'doc'">
                    <section class="pt-0 mt-4" v-if="idkyc">
                      <div class="">
                        <div class="row justify-content-between">
                          <div class="col-12">
                            <div class="card bg-secondary">
                              <div class="card-body">
                                <div
                                  class="row gy-3 align-items-center"
                                  v-if="authUser.id_kyc != 'No'"
                                >
                                  <div class="col-12">
                                    <div class="">
                                      <div>
                                        <b for="">Proof of ID: </b
                                        ><button
                                          v-if="authUser.id_kyc == 'pending'"
                                          class="btn btn-success mt-2"
                                          @click="kyc('id_kyc')"
                                        >
                                          Approve
                                        </button>
                                      </div>
                                    </div>

                                    <div class="col-12">
                                      <div class="card bg-secondary">
                                        <div class="card-body">
                                          <div
                                            class="row gy-3 justify-content-between"
                                          >
                                            <div class="col-lg-6">
                                              <b>Id Front:</b>
                                              <div
                                                class="card mb-0"
                                                style="border: solid white 2px"
                                              >
                                                <a
                                                  :href="idkyc.id_front"
                                                  v-if="idkyc.id_front"
                                                >
                                                  <img
                                                    class="img-fluid"
                                                    :src="idkyc.id_front"
                                                    alt=""
                                                  />
                                                </a>
                                                <span v-else>No Data</span>
                                              </div>
                                            </div>
                                            <div class="col-lg-6">
                                              <b>Id Back:</b>
                                              <div
                                                class="card mb-0"
                                                style="
                                                  border: solid rgb(101, 95, 95)
                                                    2px;
                                                "
                                              >
                                                <a
                                                  :href="idkyc.id_back"
                                                  v-if="idkyc.id_back"
                                                >
                                                  <img
                                                    class="img-fluid"
                                                    :src="idkyc.id_back"
                                                    alt=""
                                                  />
                                                </a>

                                                <span v-else>No Data</span>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div
                                    class="row align-items-center"
                                    v-if="authUser.ad_kyc != 'No'"
                                  >
                                    <div class="">
                                      <div>
                                        <b for="">Proof of Address: </b>
                                        <button
                                          v-if="authUser.ad_kyc == 'pending'"
                                          class="btn btn-success mt-2"
                                          @click="kyc('ad_kyc')"
                                        >
                                          Approve
                                        </button>
                                      </div>
                                    </div>
                                    <div class="col-md-6 col-12">
                                      <div class="col-lg-10">
                                        <div>
                                          <b for="">Country: </b
                                          ><span>{{ idkyc.country }}</span>
                                        </div>
                                      </div>
                                      <div class="col-lg-10">
                                        <div>
                                          <b for="">City: </b
                                          ><span>{{ idkyc.city }}</span>
                                        </div>
                                      </div>

                                      <div class="col-lg-10">
                                        <div>
                                          <b for="">Address: </b
                                          ><span>{{ idkyc.address }}</span>
                                        </div>
                                      </div>
                                      <div class="col-lg-10">
                                        <div>
                                          <b for="">Postel Number: </b
                                          ><span>{{ idkyc.postel }}</span>
                                        </div>
                                      </div>
                                    </div>
                                    <div class="col-md-6 col-12">
                                      <div class="card">
                                        <div class="card-body">
                                          <div
                                            class="row gy-3 r justify-content-center"
                                          >
                                            <div class="">
                                              <div
                                                class="card mb-0"
                                                style="border: solid white 2px"
                                              >
                                                <a
                                                  :href="idkyc.ad_file"
                                                  v-if="idkyc.ad_file"
                                                >
                                                  <img
                                                    class="img-fluid"
                                                    :src="idkyc.ad_file"
                                                    alt=""
                                                  />
                                                </a>
                                                <span v-else> No Data </span>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div
                                    class="row align-items-center"
                                    v-if="idkyc.se_file"
                                  >
                                    <div class="">
                                      <div>
                                        <b for="">Proof of Selfie: </b>
                                        <button
                                          v-if="authUser.id_kyc == 'pending'"
                                          class="btn btn-success mt-2"
                                          @click="kyc('id_kyc')"
                                        >
                                          Approve
                                        </button>
                                      </div>
                                    </div>

                                    <div class="col-12">
                                      <div class="card">
                                        <div class="card-body">
                                          <div
                                            class="row justify-content-between"
                                          >
                                            <div class="">
                                              <div
                                                class="card mb-0"
                                                style="border: solid white 2px"
                                              >
                                                <a
                                                  :href="idkyc.se_file"
                                                  v-if="idkyc.se_file"
                                                >
                                                  <img
                                                    class="img-fluid"
                                                    :src="idkyc.se_file"
                                                    alt=""
                                                  />
                                                </a>
                                                <span v-else> No Data </span>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div
                                    class="row align-items-center"
                                    v-if="idkyc.ot_file"
                                  >
                                    <div class="">
                                      <div>
                                        <b for="">Proof of Other: </b>
                                        <button
                                          v-if="authUser.id_kyc == 'pending'"
                                          class="btn btn-success mt-2"
                                          @click="kyc('id_kyc')"
                                        >
                                          Approve
                                        </button>
                                      </div>
                                    </div>

                                    <div class="col-12">
                                      <div class="card">
                                        <div class="card-body">
                                          <div
                                            class="row justify-content-between"
                                          >
                                            <div class="">
                                              <div
                                                class="card mb-0"
                                                style="border: solid white 2px"
                                              >
                                                <a
                                                  :href="idkyc.ot_file"
                                                  v-if="idkyc.ot_file"
                                                >
                                                  <img
                                                    class="img-fluid"
                                                    :src="idkyc.ot_file"
                                                    alt=""
                                                  />
                                                </a>
                                                <span v-else> No Data </span>
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
                      </div>
                    </section>

                    <div v-else>No Data</div>
                  </div>
                  <section class="tables py-0" v-if="currentSection == 'trx'">
                    <div class=" ">
                      <div class="row gy-4">
                        <div class="col-lg-12">
                          <div class="card mb-0 bg-secondary">
                            <div class="row justify-content-between">
                              <div class="p-2 ms-3 col-3">
                                <label>Result: </label>
                                <span> {{ this.authTransaction.length }}</span>
                              </div>
                              <div class="col-6 p-3">
                                <div class="input-group">
                                  <div class="input-group-text">
                                    <select
                                      class="form-select"
                                      v-model="selectedOption"
                                    >
                                      <option selected disabled>Select</option>
                                      <option value="all">All</option>
                                      <option value="pending">Pending</option>
                                      <option value="success">Success</option>
                                      <option value="rejected">Rejected</option>
                                    </select>
                                  </div>
                                  <input
                                    style="border: solid white 1px"
                                    class="form-control"
                                    type="text"
                                    v-model="searchQuery"
                                    placeholder="search.."
                                  />
                                </div>
                              </div>
                            </div>
                            <div class="card-body pt-0">
                              <div class="table-responsive">
                                <table class="table mb-0">
                                  <thead>
                                    <tr>
                                      <th>#</th>
                                      <th>Date</th>
                                      <th>Type</th>
                                      <th>Payment Method</th>
                                      <th>Amount</th>
                                      <th>Account</th>

                                      <th>Status</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr
                                      v-for="(
                                        transactionItem, index
                                      ) in displayedItems"
                                      :key="index"
                                    >
                                      <th scope="row">{{ index }}</th>
                                      <td>
                                        {{
                                          transactionItem.created_at.substring(
                                            0,
                                            10
                                          )
                                        }}
                                      </td>

                                      <td>{{ transactionItem.type }}</td>
                                      <td>{{ transactionItem.method }}</td>
                                      <td>${{ transactionItem.amount }}</td>
                                      <td>
                                        {{ transactionItem.address }} Account
                                      </td>
                                      <td>
                                        <span
                                          v-if="
                                            transactionItem.status != 'pending'
                                          "
                                          class="badge"
                                          :class="{
                                            'bg-danger':
                                              transactionItem.status ===
                                              'rejected',
                                            'bg-success':
                                              transactionItem.status ===
                                              'success',
                                          }"
                                        >
                                          {{ transactionItem.status }}
                                        </span>
                                        <span
                                          v-else
                                          class="d-flex justify-content-evenly"
                                        >
                                          <i
                                            @click="
                                              trxEdit(
                                                transactionItem.id,
                                                'success'
                                              )
                                            "
                                            class="fa fa-check"
                                            style="
                                              color: green;
                                              font-size: 20px;
                                            "
                                          >
                                          </i>
                                          <i
                                            @click="
                                              trxEdit(
                                                transactionItem.id,
                                                'rejected'
                                              )
                                            "
                                            else
                                            class="fa fa-times"
                                            style="color: red; font-size: 20px"
                                          ></i>
                                        </span>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                                <nav
                                  v-show="totalPages > 1"
                                  aria-label="Page navigation example mt-3"
                                >
                                  <ul class="pagination justify-content-center">
                                    <li
                                      class="page-item"
                                      :class="{
                                        disabled: currentPage === 1,
                                      }"
                                    >
                                      <button
                                        class="page-link"
                                        @click="previousPage"
                                        :disabled="currentPage === 1"
                                      >
                                        Previous
                                      </button>
                                    </li>
                                    <li class="page-item">
                                      <span class="page-link"
                                        >Page {{ currentPage }} of
                                        {{ totalPages }}</span
                                      >
                                    </li>

                                    <li class="page-item">
                                      <button
                                        class="page-link"
                                        @click="nextPage"
                                        :class="{
                                          disabled: currentPage === totalPages,
                                        }"
                                      >
                                        Next
                                      </button>
                                    </li>
                                  </ul>
                                </nav>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
                <section class="" v-if="currentSection == 'economic'">
                  <div
                    class="container-fluid bg-secondary pb-4"
                    v-if="geteconomic"
                  >
                    <div class="row justify-content-center gy-4">
                      <div class="col-12">
                        <div class="">
                          <div class="">
                            <div class="row gy-3 align-items-center">
                              <div class="col-12 col-md-6">
                                <div class="card mb-4 bg-secondary">
                                  <div class="card-body">
                                    <div class="row">
                                      <div class="col-sm-3">
                                        <p class="mb-0">Employment status:</p>
                                      </div>
                                      <div class="col-sm-9">
                                        <p class="text-muted mb-0">
                                          {{ geteconomic.employ }}
                                        </p>
                                      </div>
                                    </div>
                                    <hr />
                                    <div class="row">
                                      <div class="col-sm-3">
                                        <p class="mb-0">Industry:</p>
                                      </div>
                                      <div class="col-sm-9">
                                        <p class="text-muted mb-0">
                                          {{ geteconomic.industry }}
                                        </p>
                                      </div>
                                    </div>
                                    <hr />
                                    <div class="row">
                                      <div class="col-sm-3">
                                        <p class="mb-0">
                                          Source of Income/Funds:
                                        </p>
                                      </div>
                                      <div class="col-sm-9">
                                        <p class="text-muted mb-0">
                                          {{ geteconomic.source_of_income }}
                                        </p>
                                      </div>
                                    </div>
                                    <hr />
                                    <div class="row">
                                      <div class="col-sm-3">
                                        <p class="mb-0">
                                          Estimated Annual Income (USD):
                                        </p>
                                      </div>
                                      <div class="col-sm-9">
                                        <p class="text-muted mb-0">
                                          {{ geteconomic.est_annual_income }}
                                        </p>
                                      </div>
                                    </div>
                                    <hr />
                                    <div class="row">
                                      <div class="col-sm-3">
                                        <p class="mb-0">
                                          Have you ever traded in derivatives or
                                          FX & CFD products before?:
                                        </p>
                                      </div>
                                      <div class="col-sm-9">
                                        <p class="text-muted mb-0">
                                          {{ geteconomic.ever_traded }}
                                        </p>
                                      </div>
                                    </div>
                                    <hr />
                                    <div class="row">
                                      <div class="col-sm-3">
                                        <p class="mb-0">
                                          Do you have previous work experience
                                          or any qualification that can help you
                                          to understand the risks related to
                                          trading in leveraged products?:
                                        </p>
                                      </div>
                                      <div class="col-sm-9">
                                        <p class="text-muted mb-0">
                                          {{ geteconomic.previous_work_exp }}
                                        </p>
                                      </div>
                                    </div>
                                    <hr />
                                    <div class="row">
                                      <div class="col-sm-3">
                                        <p class="mb-0">
                                          Are you a US citizen for tax
                                          purposes?:
                                        </p>
                                      </div>
                                      <div class="col-sm-9">
                                        <p class="text-muted mb-0">
                                          {{ geteconomic.are_you_us_citizen }}
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </div>

                                <button
                                  v-if="authUser.ec_kyc == 'pending'"
                                  class="btn btn-success"
                                  @click="kyc('ec_kyc')"
                                >
                                  Approve
                                </button>
                              </div>
                              <div class="col-md-6 col-12">
                                <div class="card bg-secondary mb-4 mb-lg-0">
                                  <div class="card-body p-0">
                                    <ul
                                      class="list-group list-group-flush rounded-3"
                                    >
                                      <li
                                        class="list-group-item d-flex justify-content-between align-items-center p-3"
                                      >
                                        <p class="text-warning">
                                          {{ authUser.id_kyc }}
                                        </p>
                                        <p class="mb-0">Proof of ID approved</p>
                                      </li>
                                      <li
                                        class="list-group-item d-flex justify-content-between align-items-center p-3"
                                      >
                                        <p class="text-success">
                                          {{ authUser.ad_kyc }}
                                        </p>
                                        <p class="mb-0">
                                          Proof of Address approved
                                        </p>
                                      </li>
                                      <li
                                        class="list-group-item d-flex justify-content-between align-items-center p-3"
                                      >
                                        <p style="color: #55acee">
                                          {{ authUser.ec_kyc }}
                                        </p>
                                        <p class="mb-0">
                                          Economic Profile approved
                                        </p>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div v-else>No Data</div>
                </section>
              </div>
            </div>
          </div>
        </div>

        <div
          class="modal fade text-start"
          id="depositModal"
          tabindex="-1"
          aria-labelledby="depositModal"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content bg-secondary">
              <div class="modal-header">
                <h5 class="modal-title" id="depositModal">Deposit Money</h5>
                <button
                  class="btn-close btn-close-white"
                  type="button"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">
                <form
                  enctype="multipart/form-data"
                  @submit.prevent="trx2('deposit')"
                >
                  <div class="mb-2">
                    <label class="" for="Account">Account Category</label>
                    <select
                      class="form-select"
                      id="Account"
                      required
                      v-model="address"
                    >
                      <option selected disabled>Select</option>
                      <option value="Wallet">
                        Wallet Account (${{ authUser.main_balance }})
                      </option>
                      <option value="Live">
                        Live Account (${{ authUser.live_balance }})
                      </option>
                    </select>
                  </div>
                  <div class="mb-2">
                    <label class="" for="Amount">Deposit Amount</label>
                    <div class="input-group">
                      <div class="input-group-text">$</div>
                      <input
                        required
                        v-model="amount"
                        class="form-control"
                        id="Amount"
                        type="text"
                        placeholder="Min 10"
                      />
                    </div>
                  </div>
                  <div class="mb-2">
                    <label class="" for="inlineFormSelectPref"
                      >Payment Method</label
                    >
                    <select
                      class="form-select"
                      id="inlineFormSelectPref"
                      v-model="method"
                      required
                    >
                      <option selected disabled>Select</option>
                      <option value="btc">Bitcoin</option>
                      <option value="bnb">BNB</option>
                      <option value="ltc">Lite Coin</option>
                      <option value="Trust Wallet">Trust Wallet</option>
                      <option value="Bit Pay">Bit Pay</option>
                    </select>
                  </div>
                  <div class="mt-1">
                    <button class="btn btn-success" type="submit">
                      Deposit Now
                    </button>
                  </div>
                </form>
              </div>
              <div class="modal-footer">
                <button
                  class="btn btn-primary"
                  type="button"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
        <div
          class="modal fade text-start"
          id="withdrawModal"
          tabindex="-1"
          aria-labelledby="withdrawModal"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content bg-secondary">
              <div class="modal-header">
                <h5 class="modal-title" id="withdrawModal">Withdraw Money</h5>
                <button
                  class="btn-close btn-close-white"
                  type="button"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">
                <form
                  enctype="multipart/form-data"
                  @submit.prevent="trx2('withdraw')"
                >
                  <div class="mb-2">
                    <label class="" for="Account">Account Category</label>
                    <select
                      class="form-select"
                      id="Account"
                      required
                      v-model="address"
                    >
                      <option selected disabled>Select</option>
                      <option value="Wallet">
                        Wallet Account (${{ authUser.main_balance }})
                      </option>
                      <option value="Live">
                        Live Account (${{ authUser.live_balance }})
                      </option>
                    </select>
                  </div>
                  <div class="mb-2">
                    <label class="" for="Amount">Deposit Amount</label>
                    <div class="input-group">
                      <div class="input-group-text">$</div>
                      <input
                        required
                        v-model="amount"
                        class="form-control"
                        id="Amount"
                        type="text"
                        placeholder="Min 10"
                      />
                    </div>
                  </div>
                  <div class="mb-2">
                    <label class="" for="inlineFormSelectPref"
                      >Payment Method</label
                    >
                    <select
                      class="form-select"
                      id="inlineFormSelectPref"
                      v-model="method"
                      required
                    >
                      <option selected disabled>Select</option>
                      <option value="btc">Bitcoin</option>
                      <option value="bnb">BNB</option>
                      <option value="ltc">Lite Coin</option>
                      <option value="Trust Wallet">Trust Wallet</option>
                      <option value="Bit Pay">Bit Pay</option>
                    </select>
                  </div>
                  <div class="mt-1">
                    <button class="btn btn-success" type="submit">
                      Withdraw Now
                    </button>
                  </div>
                </form>
              </div>
              <div class="modal-footer">
                <button
                  class="btn btn-primary"
                  type="button"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
        <div
          class="modal fade text-start"
          id="transferModal"
          tabindex="-1"
          aria-labelledby="transferModal"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content bg-secondary">
              <div class="modal-header">
                <h5 class="modal-title" id="transferModal">Transfer Money</h5>
                <button
                  class="btn-close btn-close-white"
                  type="button"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">
                <form enctype="multipart/form-data" @submit.prevent="transfer">
                  <div class="mb-2">
                    <select
                      class="form-select"
                      id="Account"
                      required
                      v-model="address"
                    >
                      <option selected disabled>Select</option>
                      <option value="Wallet">
                        Wallet Account (${{ authUser.main_balance }})
                      </option>
                      <option value="Live">
                        Live Account (${{ authUser.live_balance }})
                      </option>
                    </select>
                  </div>

                  <div class="centered-line mt-5 mb-5">
                    <hr />
                    <div class="centered-text">To</div>
                  </div>
                  <div class="mb-2">
                    <input
                      disabled
                      v-model="fromAddress"
                      class="form-control disabled"
                      type="text"
                    />
                  </div>
                  <div class="mb-2">
                    <label class="mt-2" for="Amount">Transfer Amount</label>
                    <div class="input-group">
                      <div class="input-group-text">$</div>
                      <input
                        required
                        v-model="amount"
                        class="form-control"
                        id="Amount"
                        type="text"
                        placeholder="Min 10"
                      />
                    </div>
                  </div>

                  <div class="mt-2">
                    <button class="btn btn-success" type="submit">
                      Transfer Now
                    </button>
                  </div>
                </form>
              </div>
              <div class="modal-footer">
                <button
                  class="btn btn-primary"
                  type="button"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </AdminDeshboardLayout>
  </div>
</template>
    
  
    <script>
import { useAuthUserStore } from "../../stores/user";
import { transactionStore } from "../../stores/transaction";

import axios from "axios";
import AdminDeshboardLayout from "./../../Layouts/AdminLayouts.vue";
export default {
  components: {
    AdminDeshboardLayout,
  },
  data() {
    return {
      authUser: "",
      checkbox: "",
      currentSection: "profile",
      userId: "",
      alluser: [],

      geteconomic: "",
      authPayment: "",
      idkyc: "",

      selectedOption: "all", // Initial selected option
      filterOptions: ["all", "pending", "rejected", "success"], // Dropdown options

      transaction: [],
      authTransaction: [],
      searchQuery: "",

      // paginate
      currentPage: 1, // The current page number
      itemsPerPage: 5, // Number of items to display per page

      address: "Select",
      method: "Select",
      amount: "",
    };
  },
  computed: {
    search() {
      if (!this.searchQuery) {
        return this.authTransaction;
      } else {
        const searchText = this.searchQuery.toLowerCase();
        return this.authTransaction.filter((item) => {
          const trxid = item.trxid ? item.trxid.toLowerCase() : ""; // Handle null trxid
          return (
            item.type.toLowerCase().includes(searchText) ||
            trxid.includes(searchText) ||
            item.status.toLowerCase().includes(searchText)
          );
        });
      }
    },
    filteredTransactions() {
      if (this.selectedOption === "all") {
        return this.search; // No filter applied, return all transactions
      } else if (this.selectedOption === "pending") {
        return this.search.filter(
          (authTransaction) => authTransaction.status === "pending"
        );
      } else if (this.selectedOption === "rejected") {
        return this.search.filter(
          (authTransaction) => authTransaction.status === "rejected"
        );
      } else {
        return this.search.filter(
          (authTransaction) => authTransaction.status === "success"
        );
      }
    },
    fromAddress() {
      if (this.address === "Wallet") {
        return "Live Account"; // No filter applied, return all transactions
      } else {
        return "Wallet Account";
      }
    },
    // Calculate the total number of pages based on the total number of items and itemsPerPage
    totalPages() {
      return Math.ceil(this.filteredTransactions.length / this.itemsPerPage);
    },
    // Get the items to display on the current page
    displayedItems() {
      const start = (this.currentPage - 1) * this.itemsPerPage;
      const end = start + this.itemsPerPage;
      return this.filteredTransactions.slice(start, end);
    },
  },
  methods: {
    handleClick(payload) {
      this.currentSection = payload;
    },
    async userUpdate() {
      this.$setLoading(true);

      const formData = new FormData(); // Create a FormData object
      formData.append("birth", this.birth);
      formData.append("phone", this.phone);
      formData.append("password", this.password);
      formData.append("password_confirmation", this.password_confirmation);
      formData.append("profile", this.profile); // Append the file to the FormData object

      await axios
        .post("/api/user/edit", formData, {
          headers: {
            "Content-Type": "multipart/form-data", // Set content type for file upload
          },
        })
        .then((response) => {
          (this.authUser = response.data.user),
          this.$toast.success(
                response.data.message
           );

           
        })
        .catch((error) => {
          this.$setLoading(false);

          this.$toast.error(
                error.response.data.message
           );

         
        });

      this.$setLoading(false);
    },
    // paginate=================================
    previousPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
    },
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
      }
    },
    async trxEdit(id, status) {
      this.$setLoading(true);

      const data = {
        status: status,
      };

      await axios
        .put(`api/transaction.edit/${id}`, data)
        .then((response) => {


          this.$toast.success(
                response.data.message
           );

       

          const index = this.transaction.findIndex((item) => item.id === id);
          if (index !== -1) {
            this.transaction[index].status = status;

            this.$set(this.transaction, index, this.transaction[index]);
          }
        })
        .catch((error) => {
          this.$setLoading(false);

          this.$toast.error(
                error.response.data.message
           );



        });

      this.$setLoading(false);
    },
    async kyc(type) {
      this.$setLoading(true);

      const data = {
        type: type,
      };

      await axios
        .put(`api/kyc.edit/${this.$route.params.id}`, data)
        .then((response) => {
          this.authUser = response.data.user;
          this.$setLoading(false);

          this.$toast.success(
                response.data.message
           );


        })
        .catch((error) => {
          this.$setLoading(false);
          this.$toast.error(
                error.response.data.message
           );

        });

      this.$setLoading(false);
    },

    
    async transfer() {
      this.$setLoading(true);

      const data = {
        id: this.$route.params.id,

        amount: this.amount,
        address: this.address,
      };

      //   if(this.amount > this.authUser.(this.address))

      await axios
        .post("api/transfer", data)
        .then((response) => {
          // transactionStore===================================
          this.authUser = response.data.user;
          this.$toast.success(
                response.data.message
           );


          this.$setLoading(false);
        })
        .catch((error) => {
          // Handle the error
          this.$setLoading(false);
          this.$toast.error(
                error.response.data.message
           );

        });
      this.$setLoading(false);
    },
  },

  async created() {
    const userStore = useAuthUserStore();
    const alluser = userStore.allUser;

    if (alluser) {
      this.alluser = alluser;
    } else {
      // userStore.reSetAuthUser();
      this.alluser = await userStore.getAllUser();
    }

    const filteredUsers = this.alluser.filter(
      (user) => user.id == this.$route.params.id
    );
    this.authUser = filteredUsers["0"];

    const getTransaction = transactionStore();

    // Try to get the data from the store
    const transactionData = getTransaction.allTransaction;

    if (transactionData) {
      this.transaction = transactionData;
    } else {
      // If data is not available, fetch it and set the component property
      this.transaction = await getTransaction.allUserTransaction();
    }

    this.authTransaction = this.transaction.filter(
      (user) => user.user_id == this.$route.params.id
    );

    await axios
      .get(`api/user.details/${this.$route.params.id}`)
      .then((response) => {
        this.geteconomic = response.data.economic;
        this.idkyc = response.data.kyc;
        this.authPayment = response.data.payment;
      });

    this.$setLoading(false);
  },
};
</script>
<style scoped>
.emp-profile {
  padding: 3%;
  margin-top: 3%;
  margin-bottom: 3%;
  border-radius: 0.5rem;
  background: #ffffff00;
}
.profile-img {
  text-align: center;
}
.profile-img img {
  width: 70%;
  height: 100%;
}
.profile-img .file {
  position: relative;
  overflow: hidden;
  margin-top: -20%;
  width: 70%;
  border: none;
  border-radius: 0;
  font-size: 15px;
  background: #212529b8;
}
.profile-img .file input {
  position: absolute;
  opacity: 0;
  right: 0;
  top: 0;
}
.profile-head h5 {
  color: #333;
}
.profile-head h6 {
  color: #0062cc;
}
.profile-edit-btn {
  border: none;
  border-radius: 1.5rem;
  width: 70%;
  padding: 2%;
  font-weight: 600;
  color: #6c757d;
  cursor: pointer;
}
.proile-rating {
  font-size: 12px;
  color: #818182;
  margin-top: 5%;
}
.proile-rating span {
  color: #495057;
  font-size: 15px;
  font-weight: 600;
}
.profile-head .nav-tabs {
  margin-bottom: 5%;
}
.profile-head .nav-tabs .nav-link {
  font-weight: 600;
  border: none;
}
.profile-head .nav-tabs .nav-link.active {
  border: none;
  border-bottom: 2px solid #0062cc;
}
.profile-work {
  padding: 14%;
  margin-top: -15%;
}
.profile-work p {
  font-size: 12px;
  color: #818182;
  font-weight: 600;
  margin-top: 10%;
}
.profile-work a {
  text-decoration: none;
  color: #495057;
  font-weight: 600;
  font-size: 14px;
}
.profile-work ul {
  list-style: none;
}
.profile-tab label {
  font-weight: 600;
}
.profile-tab p {
  font-weight: 600;
  color: #0062cc;
}

a {
  cursor: pointer !important;
}
</style>
 