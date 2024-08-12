import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import ServicesView from '../views/ServicesView.vue'
import ContactView from '../views/ContactView.vue'
import AboutView from '../views/AboutView.vue'
import riskView from '../views/RiskView.vue'

import LeadView from '../views/LeadView.vue'

// user

import DeshboardView from '../views/Deshboard/DeshboardView.vue'
// import UserView from '../views/Deshboard/UserView.vue'
import KycView from '../views/Deshboard/KycView.vue'
import DepositView from '../views/Deshboard/DepositView.vue'
import depositLog from '../views/Deshboard/depositLog.vue'
import WithdrawView from '../views/Deshboard/WithdrawView.vue'
import withdrawLog from '../views/Deshboard/withdrawLog.vue'
// import EconomicView from '../views/Deshboard/EconomicView.vue'
import TransactionView from '../views/Deshboard/TransactionView.vue'
// import PaymentDetailsView from '../views/Deshboard/PaymentDetailsView.vue'
import AccountView from '../views/Deshboard/AccountView.vue'
import ChangeView from '../views/Deshboard/ChangeView.vue'


// admin


// import AdminDeshboardview from '../views/Admin/DeshboardView.vue'
// import UserManageview from '../views/Admin/UserManageview.vue'
// import LeadsManageview from '../views/Admin/LeadsManageview.vue'
// import Leadsview from '../views/Admin/Leadsview.vue'

// import AdminTransactionView from '../views/Admin/TransactionView.vue'
// import UserDetailsview from '../views/Admin/UserDetailsView.vue'


import LoginComponent from '../views/Auth/SignIn.vue'
import RegisterComponent from '../views/Auth/SignUp.vue'
import ForgetComponent from '../views/Auth/Forget.vue'
// import authenticated from '../midleware/auth.js';
// import { logout } from "../midleware/auth.js";
// import { setloading } from '../utils/extra'
// import axios from 'axios';



const router = createRouter({
  
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [



    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta:{
   
        // requiresAuth:'auth'
      },
      
    },
    {
      path: '/about',
      name: 'about',
     
      component: AboutView,
      meta:{

      },
    },
    {
      path: '/login',
      name: 'login',
   
      component:LoginComponent,
      meta:{
      requiresGuest:true,
      },
    },
    {
      path: '/register',
      name: 'register',

      component:RegisterComponent,
      meta:{
        requiresGuest:true,
      },
    },
    {
      path: '/forget',
      name: 'forget',

      component:ForgetComponent,

    },
    {
      path: '/servics',
      name: 'servics',

      component:ServicesView,
     
    },
    {
      path: '/contact',
      name: 'contactUs',
  
      component:ContactView,
 
    },
    {
      path: '/risk/disclosure',
      name: 'risk',
  
      component:riskView,
 
    },
    {
      path: '/leads',
      name: 'info',
  
      component:LeadView,
 
    },
    


    // user Deshboard--------------------------------------------------
    {
      path: '/dashboard',
      name: 'dashboard',

      component:DeshboardView,
      meta:{
        requiresAuth:true,
      },
    },
    {
      path: '/kyc',
      name: 'kyc',

      component:KycView,
      meta:{
        requiresAuth:true,
      },
    },
    // {
    //   path: '/profile',
    //   name: 'profile',

    //   component:UserView,
    //   meta:{
    //     requiresAuth:true,
    //   },
    // },
    // {
    //   path: '/economic',
    //   name: 'economic',

    //   component:EconomicView,
    //   meta:{
    //     requiresAuth:true,
    //   },
    // },
    {
      path: '/deposit',
      name: 'deposit',

      component:DepositView,
      meta:{
        requiresAuth:true,
      },
    },
    {
      path: '/deposit/log',
      name: 'deposit-log',

      component:depositLog,
      meta:{
        requiresAuth:true,
      },
    },
    
    {
      path: '/withdraw',
      name: 'withdraw',

      component:WithdrawView,
      meta:{
        requiresAuth:true,
      },
    },
    {
      path: '/withdraw/log',
      name: 'withdraw-log',

      component:withdrawLog,
      meta:{
        requiresAuth:true,
      },
    },
    {
      path: '/transaction',
      name: 'transaction',

      component:TransactionView,
      meta:{
        requiresAuth:true,
      },
    },
    // {
    //   path: '/payment/details',
    //   name: 'payment',

    //   component:PaymentDetailsView,
    //   meta:{
    //     requiresAuth:true,
    //   },
    // },
    {
      path: '/account',
      name: 'account',

      component:AccountView,
      meta:{
        requiresAuth:true,
      },
    },
    {
      path: '/change',
      name: 'change',

      component:ChangeView,
      meta:{
        requiresAuth:true,
      },
    },




    // admin----------------------------
    // {
    //   path: '/admin/dashboard',
    //   name: 'admindashboard',

    //   component:AdminDeshboardview,
    //   meta:{
    //     requiresAuth:true,
    //   },
    // },
    // {
    //   path: '/admin/user',
    //   name: 'alluser',

    //   component:UserManageview,
    //   meta:{
    //     requiresAuth:true,
    //   },
    // },
    // {
    //   path: '/admin/user.details/:id?',
    //   name: 'userdetails',

    //   component:UserDetailsview,
    //   meta:{
    //     requiresAuth:true,
    //   },
    // },
    // {
    //   path: '/admin/leads',
    //   name: 'leads',

    //   component:LeadsManageview,
    //   meta:{
    //     requiresAuth:true,
    //   },
    // },
    // {
    //   path: '/admin/leadcollect',
    //   name: 'lead',

    //   component:Leadsview,
    //   meta:{
    //     requiresAuth:true,
    //   },
    // },
    
    // {
    //   path: '/admin/transaction',
    //   name: 'Admintransaction',

    //   component:AdminTransactionView,
    //   meta:{
    //     requiresAuth:true,
    //   },
    // },
    
  ],
  scrollBehavior(to, from, savedPosition) {
    // always scroll to top
    return { top: 0 }
  },

})










export default router
