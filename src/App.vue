<template>
  <div id="app">
    <Header v-if="!is404Page"/>
      <router-view></router-view>
    <Footer v-if="!is404Page"/>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"/>
  </div>
</template>

<script lang="ts">
import {Options, Vue} from 'vue-class-component';
import {useRoute} from 'vue-router';
import Header from "@/components/layout/Header.vue";
import Footer from "@/components/layout/Footer.vue";
import "@/assets/style/global.scss";

@Options({
  components: {Header, Footer},
})
export default class App extends Vue {
  route = useRoute();
  get is404Page() {
    return this.route.name === 'PageNotFound';
  }
};
</script>

<style lang="scss">

</style>
