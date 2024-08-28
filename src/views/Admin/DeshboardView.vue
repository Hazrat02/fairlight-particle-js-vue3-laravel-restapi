<template>
  <div>
    <AdminDeshboardLayout>
      <!-- Sale & Revenue Start -->
      <div class="container-fluid pt-4 px-4">
        <div class="row g-4">
          <div class="col-sm-6 col-xl-3">
            <div
              class="bg-secondary rounded d-flex align-items-center justify-content-between p-4"
            >
              <i class="fa fa-chart-line fa-3x text-primary"></i>
              <div class="ms-3">
                <p class="mb-2">Total User</p>
                <h4 class="mb-0">
                  {{ allUser.length }}
                </h4>
              </div>
            </div>
          </div>
          <div class="col-sm-6 col-xl-3">
            <div
              class="bg-secondary rounded d-flex align-items-center justify-content-between p-4"
            >
              <i class="fa fa-chart-bar fa-3x text-primary"></i>
              <div class="ms-3">
                <p class="mb-2">Total Deposits</p>
                <h4 class="mb-0">{{ filteredDeposit.length }}</h4>
              </div>
            </div>
          </div>
          <div class="col-sm-6 col-xl-3">
            <div
              class="bg-secondary rounded d-flex align-items-center justify-content-between p-4"
            >
              <i class="fa fa-chart-area fa-3x text-primary"></i>
              <div class="ms-3">
                <p class="mb-2">Total Withdrawals</p>
                <h4 class="mb-0">{{ filteredWithdraw.length }}</h4>
              </div>
            </div>
          </div>
          <div class="col-sm-6 col-xl-3">
            <div
              class="bg-secondary rounded d-flex align-items-center justify-content-between p-4"
            >
              <i class="fa fa-chart-pie fa-3x text-primary"></i>
              <div class="ms-3">
                <p class="mb-2">Total SMS</p>
                <h4 class="mb-0">{{ contactData.length }}</h4>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="container">
        <div class="container row justify-content-between">
          <div class="bg-secondary text-center rounded p-4 mt-4 col-lg-6">
            <h3 class="p-2 ms-3 text-start">Recent Registrations</h3>

            <div class="table-responsive">
              <table
                class="table text-start align-middle table-bordered table-hover mb-0"
              >
                <thead>
                  <tr class="text-white">
                    <th>SL. Number</th>
                    <th>User Name</th>
                    <th>Email</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(user, index) in filteredUsers" :key="index">
                    <th scope="row">{{ index }}</th>
                    <th scope="row">{{ index }}</th>
                    <td>{{ user.name }}</td>

                    <td>{{ user.email }}</td>
                    <td>
                      <router-link
                        :to="{
                          name: 'userdetails',
                          params: { id: user.id },
                        }"
                      >
                        <i class="fa fa-eye" style="color: beige"></i
                      ></router-link>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div class="bg-secondary text-center rounded p-4 mt-4 col-lg-6">
            <h3 class="p-2 ms-3 text-start">Recent Transactions</h3>

            <div class="table-responsive">
              <table
                class="table text-start align-middle table-bordered table-hover mb-0"
              >
                <thead>
                  <tr class="text-white">
                    <th>SL. Number</th>
                    <th>User Id</th>
                    <th>Type</th>
                    <th>Amount</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(item, index) in filteredTrx" :key="index">
                    <th scope="row">{{ index }}</th>
                    <td>{{ item.user_id }}</td>

                    <td>{{ item.type }}</td>
                    <td>{{ item.amount }}$</td>
                    <td>
                      <router-link
                        :to="{
                          name: 'userdetails',
                          params: { id: item.user_id },
                        }"
                      >
                        <i class="fa fa-eye" style="color: beige"></i
                      ></router-link>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div class="bg-secondary text-center rounded p-4 mt-4 mb-5">
            <h3 class="p-2 ms-3 text-start">Recent Message Details</h3>

            <div class="table-responsive">
              <table
                class="table text-start align-middle table-bordered table-hover mb-0"
              >
                <thead>
                  <tr class="text-white">
                    <th>SL. Number</th>
                    <th>User Name</th>
                    <th>Email</th>
                    <th>Message</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(item, index) in filteredSms" :key="index">
                    <th scope="row">{{ index }}</th>
                    <td>{{ item.name }}</td>

                    <td>{{ item.email }}</td>
                    <td>{{ item.sms }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      
    </AdminDeshboardLayout>
  </div>
</template>
  
<script>
import { useAuthUserStore } from "../../stores/user";
import { transactionStore } from "../../stores/transaction";
import { contactStore } from "../../stores/contact";

import AdminDeshboardLayout from "./../../Layouts/AdminLayouts.vue"
export default {
  components :{
    AdminDeshboardLayout
  },
  data() {
    return {
      allUser: [],
      limit: 5,
      transactions: [],
      contactData: [],
    };
  },
  methods: {},

  computed: {
    filteredUsers() {
      // Ensure that allUsers is defined and is an array before using slice
      if (!Array.isArray(this.allUser)) {
        return [];
      }

      // Get the current date in string format (e.g., "2024-01-05")
      const currentDateStr = new Date().toISOString().split("T")[0];

      // Use this computed property to filter the array based on created_at
      return this.allUser
        .filter((user) => {
          // Assuming user.created_at is a string in ISO format
          return user.created_at.split("T")[0] === currentDateStr;
        })
        .slice(0, this.limit);
    },
    filteredTrx() {
      // Ensure that allUsers is defined and is an array before using slice
      if (!Array.isArray(this.transactions)) {
        return [];
      }
      // Get the current date in string format (e.g., "2024-01-05")
      const currentDateStr = new Date().toISOString().split("T")[0];

      // Use this computed property to filter the array based on created_at
      return this.transactions.filter((transaction) => {
        // Assuming user.created_at is a string in ISO format
        return transaction.created_at.split("T")[0] === currentDateStr;
      });
    },
    filteredSms() {
      // Ensure that allUsers is defined and is an array before using slice
      if (!Array.isArray(this.contactData)) {
        return [];
      }

      // Get the current date in string format (e.g., "2024-01-05")
      const currentDateStr = new Date().toISOString().split("T")[0];

      // Use this computed property to filter the array based on created_at
      return this.contactData.filter((transaction) => {
        // Assuming user.created_at is a string in ISO format
        return transaction.created_at.split("T")[0] === currentDateStr;
      });
    },
    filteredDeposit() {
      const withdrawSuccessTransactions = Object.values(
        this.transactions
      ).filter(
        (transaction) =>
          transaction.type === "deposit" && transaction.status === "success"
      );
      // Use this computed property to filter the array
      return withdrawSuccessTransactions;
    },
    filteredWithdraw() {
      const withdrawSuccessTransactions = Object.values(
        this.transactions
      ).filter(
        (transaction) =>
          transaction.type === "withdraw" && transaction.status === "success"
      );
      // Use this computed property to filter the array
      return withdrawSuccessTransactions;
    },
  },
 
  async created() {
    const userStore = useAuthUserStore();
    const alluser = userStore.allUser;

    if (alluser) {
      this.allUser = alluser;
    } else {
      this.allUser = await userStore.getAllUser();
    }

    // transactionStore===================================
    const getTransaction = transactionStore();

    // Try to get the data from the store
    const transactionData = getTransaction.allTransaction;

    if (transactionData) {
      this.transactions = transactionData;
    } else {
      // If data is not available, fetch it and set the component property
      this.transactions = await getTransaction.allUserTransaction();
    }
    const getContact = contactStore();

    // Try to get the data from the store
    const contactData = getContact.contact;

    if (contactData) {
      this.contactData = contactData;
    } else {
      // If data is not available, fetch it and set the component property
      this.contactData = await getContact.getContact();
    }
    this.$setLoading(false);
  },
};
</script>

<style scoped>
@import "./../../assets/main.css";
</style>
