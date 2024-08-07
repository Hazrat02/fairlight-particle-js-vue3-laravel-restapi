<template>
    <HomeLayout>
        <section class="section">
            working
            <slot />
        </section>
    
    </HomeLayout>
   
</template>
<script>
import HomeLayout from "./HomeLayout.vue";

export default {
  components: {
    HomeLayout,
  },
};
</script>