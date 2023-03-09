<template>
  <div id="app">
    <Header v-if="$router.name !== 'PageNotFound'"></Header>
        <router-view></router-view>
    <Footer v-if="$router.name !== 'PageNotFound'"></Footer>
  </div>
</template>

<script lang="ts">
import Header from "@/components/layout/Header.vue";
import Footer from "@/components/layout/Footer.vue";
import "@/assets/style/global.scss";

export default {
  name: "app", components: {
    Header,
    Footer,
  }
  // head: {
  //   link: [
  //     {
  //       rel: "icon",
  //       href: require(".//assets/favicon-32x32.png")
  //     },
  //   ]
  // }
};
</script>

<style lang="scss">

</style>
