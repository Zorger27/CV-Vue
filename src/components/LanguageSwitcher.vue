<template>
  <select v-model="locale">
    <option v-for="sLocale in availableLocales" :key="`locale.${sLocale}`" :value="sLocale" :selected="locale === sLocale">
      {{ t(`locale.${sLocale}`) }}
    </option>
  </select>
</template>

<script lang="ts">
import { useI18n } from "vue-i18n";
export default {
  name: "LanguageSwitcher",
  setup () {
    const { t, locale, availableLocales } = useI18n()
    return { t, locale, availableLocales }
  }
  // savelocale () {
  //   const currentLocale = sLocale
  //   document.querySelector("html").setAttribute("lang", sLocale)
  //   localStorage.setItem("user-locale", sLocale)
  // }
}
</script>

<style lang="scss" scoped>
select {
  background: inherit;
  border: none;
  padding: 0;
  //outline: 0 !important;
  //appearance: none;
}
select:focus {
  border: none;
}
</style>