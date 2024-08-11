<template>

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
                          <h3 class="title">All transaction Log</h3>
                        </div>
                        <div class="site-card-body">
                          <div class="site-table">
                            <div class="table-filter">
                              <div class="filter">
                                <form
                                  action="https://ensurepms.com/user/deposit/log"
                                  method="get"
                                >
                                  <div class="search">
                                    <input
                                      type="text"
                                      id="search"
                                      placeholder="Search"
                                      value=""
                                      name="query"
                                    />

                                    <button type="submit" class="apply-btn">
                                      <i icon-name="search"></i>Search
                                    </button>
                                  </div>
                                </form>
                              </div>
                            </div>
                            <div class="table-responsive">
                              <table class="table table-hover">
                                <thead>
                                  <tr>
                                    <th>Description</th>
                                    <th>Transactions ID</th>
                                    <th>Amount</th>
                                    <th>Fee</th>
                                    <th>Status</th>
                                    <th>Method</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td>
                                      <div class="table-description">
                                        <div class="icon">
                                          <i class="fa fa-arrow-down"></i>
                                        </div>
                                        <div class="description">
                                          <strong>usdt</strong>
                                          <div class="date">Aug 10</div>
                                        </div>
                                      </div>
                                    </td>
                                    <td><strong>TRX81HRPQ9UCZ</strong></td>
                                    <td>
                                      <strong class="green-color"
                                        >+56 USD</strong
                                      >
                                    </td>
                                    <td>
                                      <strong class="red-color">-0 USD</strong>
                                    </td>
                                    <td>
                                      <div class="site-badge warnning">
                                        Pending
                                      </div>
                                    </td>
                                    <td><strong>BT785485</strong></td>
                                  </tr>
                                </tbody>
                              </table>
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

</template>






<script>

import DeshboardLayout from "./../../Layouts/DashboardLayout.vue";

import axios from "axios";
import { useAuthUserStore } from "./../../stores/user";
import { transactionStore } from "./../../stores/transaction";

export default {
  components: {
    DeshboardLayout,
  },
  data() {
    return {
      transaction: "",
      authUser: "",

      filteredPayment: "",

      // paginate
      currentPage: 1, // The current page number
      itemsPerPage: 10, // Number of items to display per page
    };
  },

  computed: {
    // Calculate the total number of pages based on the total number of items and itemsPerPage
    totalPages() {
      return Math.ceil(this.transaction.length / this.itemsPerPage);
    },
    // Get the items to display on the current page
    displayedItems() {
      const start = (this.currentPage - 1) * this.itemsPerPage;
      const end = start + this.itemsPerPage;
      return this.transaction.slice(start, end);
    },
  },

  methods: {
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
  },

  async created() {
    // auth user data +++++++++++++++++++++++++++++

    const userStore = useAuthUserStore();
    const authUser = userStore.authUser;

    if (authUser) {
      this.authUser = authUser;
    } else {
      // userStore.reSetAuthUser();
      this.authUser = await userStore.reSetAuthUser();
    }

    // transactionStore===================================
    const getTransaction = transactionStore();

    // Try to get the data from the store
    const transactionData = getTransaction.authTransaction;

    if (transactionData) {
      this.transaction = transactionData;
    } else {
      // If data is not available, fetch it and set the component property
      this.transaction = await getTransaction.authUserTransaction();
    }

    this.$setLoading(false);
  },
};
</script>

