
<script>
import HomeLayout from '@/Layouts/HomeLayout.vue';
// import axios from 'axios';

export default {
  components:{
    HomeLayout
  },
  data() {
    return {

        name:'',
        email:'',
        sub:'',
        sms:'',

    };
  },

 async created() {

  },


  methods: {
    
    async contact() {
      this.$setLoading(true);

     
        const formData = new FormData(); // Create a FormData object
        formData.append("name", this.name);
        formData.append("email", this.email);
        formData.append("sub", this.sub);
        formData.append("sms", this.sms);
    

       await axios
          .post("/api/contact.store", formData)
          .then((response) => {
    
            this.$setLoading(false);

            this.$notify({
              title: "message",
              text: response.data.message,
              type: "success",
            });
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
<template>
  <div>
    <HomeLayout>
    fsdfsdfs

    </HomeLayout>
  </div>
</template>

<style scoped>

</style>

