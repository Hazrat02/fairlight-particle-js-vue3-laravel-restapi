<template>
  <div id="app">

  <router-view />
  </div>
</template>

<script>
// import { useToast } from "vue-toastification";
// import 'vue-toastification/dist/index.css';
  export default {
    name: 'App',

    // setup() {

    //   const toast = useToast();


    //   toast.success("My toast content", {
    //     timeout: 2000
    //   });

    //   return { toast }
    // },
    created(){
      // toast.success("My toast content", {
      //   timeout: 2000
      // });
      // this.toast.success("I'm an info toast!");
      // this.toast.info("I'm an info toast!");

      this.$toast.success("This is a success notification from SomeComponent!");
    },
    onMounted(){
      // toast.success("My toast content", {
      //   timeout: 2000
      // });
      this.$toast.success("This is a success notification from SomeComponent!");
    },

    methods: {
      // myMethod() {

      //   // Since you returned `toast` from setup(), you can access it now
      //   this.toast.info("I'm an info toast!");
      // }
    }
  }
</script>

