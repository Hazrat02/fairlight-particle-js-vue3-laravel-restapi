<template>
    <!-- <HomeLayout> -->
        <section class="dark-theme">
            
            <slot />
        </section>
    
    <!-- </HomeLayout> -->
   
</template>
<script>
import HomeLayout from "./HomeLayout.vue";

export default {
  components: {
    HomeLayout,
  },
};
</script>