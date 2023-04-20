<template>
  <div class="about">
    <h1>{{$t ('about.title')}}</h1>
        <line></line>
    <h2>{{$t ('about.technologies')}}</h2>
    <ol>
      <li><a href="https://v3.ru.vuejs.org" title="Vue.JS" target="_blank">Vue.JS v.3.2.13</a></li>
      <li><a href="https://vuex.vuejs.org" title="Vuex" target="_blank">Vuex v.4.0.0</a></li>
      <li><a href="https://vue-i18n.intlify.dev" title="i18n" target="_blank">i18n v.9.2.2</a></li>
      <li><a href="https://axios-http.com" title="Axios" target="_blank">Axios v.1.3.5</a></li>
      <li>HTML5</li>
      <li>CSS3</li>
      <li><a href="https://developer.mozilla.org/ru/docs/Learn/CSS/CSS_layout/Flexbox" title="FlexBox CSS" target="_blank">FlexBox CSS</a></li>
      <li><a href="https://developer.mozilla.org/ru/docs/Web/CSS/CSS_Grid_Layout" title="Grid CSS" target="_blank">Grid CSS</a></li>
      <li>JavaScript</li>
      <li>TypeScript v.4.5.5</li>
      <li><a href="https://openweathermap.org" title="OpenWeather" target="_blank">OpenWeatherMap API</a></li>
      <li><a href="https://www.coingecko.com" title="CoinGecko" target="_blank">CoinGecko API</a></li>
      <li><a href="https://api.privatbank.ua/#p24/exchange" title="PrivatBank" target="_blank">PrivatBank API</a></li>
    </ol>
<!--    <line></line>-->
<!--    <h3>Project setup: <strong>npm install</strong></h3>-->
<!--    <h3>Compiles and hot-reloads for development: <strong>npm run serve</strong></h3>-->
<!--    <h3>Compiles and minifies for production: <strong>npm run build</strong></h3>-->
<!--    <line></line>-->
  </div>
</template>

<script lang="ts">
import {Options, Vue} from "vue-class-component";
@Options({components: {},})

export default class About extends Vue {}
</script>

<style lang="scss" scoped>
.about {
  flex: 1 0 auto;
  text-align: left;
  h1 {
    color: mediumvioletred;
  }
  h2 {
    margin-bottom: 1px;
    text-decoration: underline;
    padding: 0 0 0.3rem 1.5rem;
  }
  h3 {
    margin-bottom: 2px;
    padding: 0 0 0.3rem 1.5rem;
  }
  ol {
    margin-top: 1px;
  }
  strong {
    color: darkred;
  }
}
</style>