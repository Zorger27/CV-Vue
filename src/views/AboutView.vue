<template>
  <div class="about">
    <h1>MY Curriculum VITAE on Vue.JS</h1>
        <line></line>
    <h2>Technologies</h2>
    <ol>
      <li><a href="https://v3.ru.vuejs.org" title="Vue.JS v.3.0" target="_blank">Vue.JS v.3.0</a></li>
      <li><a href="https://vuex.vuejs.org" title="Vuex" target="_blank">Vuex</a></li>
      <li>HTML5</li>
      <li>CSS3</li>
      <li><a href="https://developer.mozilla.org/ru/docs/Learn/CSS/CSS_layout/Flexbox" title="FlexBox CSS" target="_blank">FlexBox CSS</a></li>
      <li><a href="https://developer.mozilla.org/ru/docs/Web/CSS/CSS_Grid_Layout" title="Grid CSS" target="_blank">Grid CSS</a></li>
      <li>JavaScript</li>
      <li>TypeScript</li>
    </ol>
    <line></line>
    <h3>Project setup: <strong>npm install</strong></h3>
    <h3>Compiles and hot-reloads for development: <strong>npm run serve</strong></h3>
    <h3>Compiles and minifies for production: <strong>npm run build</strong></h3>
<!--    <line></line>-->
  </div>
</template>

<script lang="ts">
import {Vue} from "vue-class-component";
export default class about extends Vue {}
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