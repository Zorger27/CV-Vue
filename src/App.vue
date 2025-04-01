<template>
  <div id="app">
    <Header v-if="!is404Page"/>
    <router-view @route-update="updateIs404Page"></router-view>
    <Footer v-if="!is404Page && !isFooterHidden"/>
  </div>
</template>

<script>
import {onMounted, ref, watch, provide} from 'vue';
import { useRoute } from 'vue-router';
import Header from "@/components/layout/Header.vue";
import Footer from "@/components/layout/Footer.vue";
import "@/assets/style/global.scss";
import "@/assets/style/fontawesome-free-6.5.1/css/all.min.css";

export default {
  name: 'App',
  components: { Header, Footer },
  setup() {
    const route = useRoute();
    const is404Page = ref(route.name === 'PageNotFound');
    const isFooterHidden = ref(false);

    // Функция обновления состояния 404
    const updateIs404Page = (newValue) => {
      is404Page.value = newValue;
    };

    // ✅ Проверяем localStorage при загрузке
    onMounted(() => {
      if (route.name) {
        const storedState = localStorage.getItem(`footerHidden_${route.name}`);
        isFooterHidden.value = storedState === 'true';
      }
    });

    // ✅ Функция для переключения футера
    const toggleFooter = () => {
      isFooterHidden.value = !isFooterHidden.value;
      localStorage.setItem(`footerHidden_${route.name}`, isFooterHidden.value);
    };

    // ✅ Передаём состояние и функцию в provide
    provide('isFooterHidden', isFooterHidden);
    provide('toggleFooter', toggleFooter);

    watch(
      () => route.name,
      (newRouteName) => {
        is404Page.value = newRouteName === 'PageNotFound';
        const storedState = localStorage.getItem(`footerHidden_${newRouteName}`);
        isFooterHidden.value = storedState === 'true';
      }
    );

    return { is404Page, isFooterHidden, updateIs404Page };
  }
}
</script>

<style lang="scss">

</style>
