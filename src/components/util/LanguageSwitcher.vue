<template>
  <select v-model="locale" @change="savelocale(locale)">
    <option v-for="sLocale in availableLocales" :key="`locale.${sLocale}`" :value="sLocale"
            :selected="locale === sLocale">
      {{ t(`locale.${sLocale}`) }}
    </option>
  </select>
</template>

<script lang="ts">
import {onMounted} from "vue";
import {useI18n} from "vue-i18n";

export default {
  name: "LanguageSwitcher",
  setup() {
    const {t, locale, availableLocales} = useI18n()
    const savelocale = (sLocale) => {
      localStorage.setItem("user-locale", sLocale);
    }

    // при инициализации компонента попробуем загрузить значение из localStorage
    const savedLocale = localStorage.getItem("user-locale")
    if (savedLocale && availableLocales.includes(savedLocale)) {
      locale.value = savedLocale
    }

    // const htmlElement = document.querySelector("html");
    // if (htmlElement) {
    //   htmlElement.setAttribute("lang", locale.value);
    // }

    return {t, locale, availableLocales, savelocale}
  }
}
</script>

<style lang="scss" scoped>
select {
  background: inherit;
  border: none;
  padding: 0;
}

select:focus {
  border: none;
}
</style>