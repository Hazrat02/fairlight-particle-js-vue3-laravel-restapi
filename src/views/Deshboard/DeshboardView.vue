<template>
  <DeshboardLayout>
    Hi {{ authUser.name }}
  </DeshboardLayout>
</template>
  

<script>
import DeshboardLayout from './../../Layouts/DashboardLayout.vue'
import { useAuthUserStore } from "./../../stores/user";
// import { transactionStore } from "../../store/transaction";
export default {
  components:{
    DeshboardLayout
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
     
     
    const withdrawSuccessTransactions = Object.values(this.transactions).filter(
      transaction => transaction.type === 'Withdraw' && transaction.status === 'success'
    );
    
    const sum = withdrawSuccessTransactions.reduce((total, transaction) => total + transaction.amount, 0);

    return sum;
    },
    lastWithdrawCreatedAt() {
     // Filter withdraw transactions with status success
     const withdrawSuccessTransactions = Object.values(this.transactions).filter(
      transaction => transaction.type === 'Withdraw' && transaction.status === 'success'
    );

    // If there are no successful withdraw transactions, return '00-00-0000'
    if (withdrawSuccessTransactions.length === 0) {
      return '00-00-0000';
    }

    // Sort the transactions by created_at in descending order
    const sortedTransactions = withdrawSuccessTransactions.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));

    // Get the created_at value of the first transaction (latest one)
    const lastWithdrawCreatedAt = new Date(sortedTransactions[0].created_at);

    // Format the date to 'MM-DD-YYYY'
    const formattedDate = lastWithdrawCreatedAt.toLocaleDateString('en-US', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    });

    return formattedDate;
  },
    lastDepositCreatedAt() {
     // Filter withdraw transactions with status success
     const withdrawSuccessTransactions = Object.values(this.transactions).filter(
      transaction => transaction.type === 'deposit' && transaction.status === 'success'
    );

    // If there are no successful withdraw transactions, return '00-00-0000'
    if (withdrawSuccessTransactions.length === 0) {
      return '00-00-0000';
    }

    // Sort the transactions by created_at in descending order
    const sortedTransactions = withdrawSuccessTransactions.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));

    // Get the created_at value of the first transaction (latest one)
    const lastWithdrawCreatedAt = new Date(sortedTransactions[0].created_at);

    // Format the date to 'MM-DD-YYYY'
    const formattedDate = lastWithdrawCreatedAt.toLocaleDateString('en-US', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    });

    return formattedDate;
  },
  },
  mounted() {
    


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
.div{
  color: #316f0a;
}
</style>