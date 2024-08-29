<template>
  <div>
    <AdminDeshboardLayout>
      <div class="page-container">
        <div class="main-content">
          <div class="section-gap">
            <div class="team2-area ">
              <div class="row">
                <div
                  class="col-lg-6 col-md-6 col-sm-6 col-xs-12"
                  data-wow-duration="1.3s"
                  v-animate
                  data-animation="fadeInUp animated"
                >
                  <div class="team-list pb-3">
                    <div class="conte">
                      <div class="dbox">
                        <div class="dleft">
                          <div class="details">
                            <i style="font-size: 50px" class="fa fa-users"></i>
                          </div>
                        </div>

                        <div class="dright">
                          <div class="content">
                            <h3>6565 $</h3>
                            <span>Total Users</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="col-lg-6 col-md-6 col-sm-6 col-xs-12"
                  data-wow-duration="1.6s"
                  v-animate
                  data-animation="fadeInRight animated"
                >
                  <div class="team-list pb-3">
                    <div class="conte">
                      <div class="dbox">
                        <div class="dleft">
                          <div class="details">
                            <i
                              style="font-size: 50px"
                              class="fa fa-download"
                            ></i>
                          </div>
                        </div>

                        <div class="dright">
                          <div class="content">
                            <h3>erwrw</h3>
                            <span>Total Deposit</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            <div class="container-fluid">
              <!--Page Content-->
              <div class="row">
                <div class="col-xl-12">
                  <div class="site-card">
                    <div class="site-card-header">
                      <h3 class="title">All Transaction Log</h3>
                    </div>
                    <div class="site-card-body">
                      <div class="site-table">
                        <div class="table-filter">
                          <div class="filter">
                            <form>
                              <div class="search">
                                <div>
                                  <input
                                    type="text"
                                    id="search"
                                    placeholder="Search"
                                    v-model="searchQuery"
                                  />
                                </div>

                                <div class="apply-btn">
                                  Total : {{ transaction.length }}
                                </div>
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
                                    <router-link
                                      :to="{
                                        name: 'userdetails',
                                        params: { id: transactionItem.user_id },
                                      }"
                                    >
                                      <i
                                        class="fa fa-eye"
                                        style="color: beige; font-size: 25px"
                                      ></i
                                    ></router-link>

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
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AdminDeshboardLayout>
  </div>
</template>
    

<script>
import axios from "axios";
import { transactionStore } from "../../stores/transaction";
import AdminDeshboardLayout from "./../../Layouts/AdminLayouts.vue";
export default {
  components: {
    AdminDeshboardLayout,
  },
  data() {
    return {
      selectedOption: "all", // Initial selected option
      filterOptions: ["all", "pending", "rejected", "success"], // Dropdown options

      transaction: [],
      searchQuery: "",

      // paginate
      currentPage: 1, // The current page number
      itemsPerPage: 10, // Number of items to display per page
    };
  },
  computed: {
    search() {
      if (!this.searchQuery) {
        return this.transaction;
      } else {
        const searchText = this.searchQuery.toLowerCase();
        return this.transaction.filter((item) => {
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
          (transaction) => transaction.status === "pending"
        );
      } else if (this.selectedOption === "rejected") {
        return this.search.filter(
          (transaction) => transaction.status === "rejected"
        );
      } else {
        return this.search.filter(
          (transaction) => transaction.status === "success"
        );
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

  async created() {
    // transactionStore===================================
    const getTransaction = transactionStore();

    // Try to get the data from the store
    const transactionData = getTransaction.allTransaction;

    if (transactionData) {
      this.transaction = transactionData;
    } else {
      // If data is not available, fetch it and set the component property
      this.transaction = await getTransaction.allUserTransaction();
    }
    this.$setLoading(false);
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
    async trxEdit(id, status) {
      this.$setLoading(true);

      const data = {
        status: status,
      };

      await axios
        .put(`api/transaction.edit/${id}`, data)
        .then((response) => {
          this.$notify({
            title: "message",
            text: response.data.message,
            type: "success",
          });

          const index = this.transaction.findIndex((item) => item.id === id);
          if (index !== -1) {
            this.transaction[index].status = status;

            this.$set(this.transaction, index, this.transaction[index]);
          }
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

<style scoped>
.team-list {
  height: 100% !important;
}
.details {
  width: 100px;
  height: 100px;
  border-end-end-radius: 100px;
  border-end-start-radius: 100px;
  border-top-left-radius: 100px;
  background: linear-gradient(
    3600deg,
    rgba(87, 63, 234, 0.2) 0%,
    rgba(161, 145, 255, 0.2) 100%
  );
  text-align: center;
  align-content: center;
}
.team-list :hover .details {
  background: linear-gradient(
    to right,
    rgba(57, 100, 208, 1) 0%,
    rgba(45, 193, 201, 1) 100%
  );
}
.team2-area {
  background: transparent !important;
}
</style>
