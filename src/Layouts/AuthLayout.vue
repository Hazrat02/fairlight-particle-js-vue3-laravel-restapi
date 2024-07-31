<script>
import HomeLayout from "./HomeLayout.vue";
import animationBg from "../components/Bgs.vue";

export default {
  components: {
    HomeLayout,
    animationBg,
  },
};
</script>
<template>
  <HomeLayout>
    <!-- ======= Header ======= -->

    <animationBg  />
    <slot />
  </HomeLayout>
</template>

<style>

</style>
