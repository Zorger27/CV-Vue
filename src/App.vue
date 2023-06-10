<template>
  <div id="app">
    <Header v-if="!is404Page"/>
<!--    <transition name="fade" mode="out-in" v-if="shouldAnimate">-->
      <router-view></router-view>
<!--    </transition>-->
<!--    <router-view v-else></router-view>-->
    <Footer v-if="!is404Page"/>
  </div>
</template>

<script lang="ts">
import {Options, Vue} from 'vue-class-component';
import {useRoute} from 'vue-router';
import Header from "@/components/layout/Header.vue";
import Footer from "@/components/layout/Footer.vue";
import "@/assets/style/global.scss";

@Options({
  // data() {
  //   return {
  //     shouldAnimate: false,
  //   };
  // },
  // created() {
  //   if (this.$route.name === 'ProjectsView') {
  //     this.shouldAnimate = true;
  //   }
  // },
  components: {Header, Footer},
})
export default class App extends Vue {
  route = useRoute();

  get is404Page() {
    return this.route.name === 'PageNotFound';
  }

  // get LoginPage() {
  //   return this.route.name === 'LoginPage';
  // }
};
</script>

<style lang="scss">
.fade-enter-active {
  animation: slidePageIn 1s forwards;
  animation-timing-function: cubic-bezier(0.4, -0.49, 0.36, 1);
}

.fade-leave-active {
  animation: slidePageDown 1s forwards;
  animation-timing-function: cubic-bezier(0.4, -0.49, 0.36, 1);
}

@keyframes slidePageIn {
  from {
    opacity: 0;
    transform: translateY(-100%);
  }
  to {
    opacity: 1;
    transform: translateY(0%);
  }
}

@keyframes slidePageDown {
  from {
    opacity: 1;
  }
  to {
    opacity: 0.1;
    transform: translateY(100%);
  }
}
</style>
