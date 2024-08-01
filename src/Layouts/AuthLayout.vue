<script>
import HomeLayout from "./HomeLayout.vue";
import animationBg from "../components/authBg.vue";

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

    <animationBg type="star" />
    <slot />
  </HomeLayout>
</template>

<style>

</style>
