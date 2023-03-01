<script lang="ts">
import {Options, Vue} from "vue-class-component";
import htmlStore from "@/store/modules/frontend/htmlStore";
import javascriptStore from "@/store/modules/frontend/javascriptStore";
import angularStore from "@/store/modules/frontend/angularStore";
import reactStore from "@/store/modules/frontend/reactStore";
import frontStore from "@/store/modules/frontend/frontStore";
@Options({
  computed: {
    htmlStore() {return htmlStore},
    javascriptStore() {return javascriptStore},
    angularStore() {return angularStore},
    reactStore() {return reactStore},
    frontStore() {return frontStore}},
  components: {},})

export default class frontend extends Vue {}
</script>

<template>
  <div class="frontend">
    <h1>Frontend Diplomas & Certificates</h1>
    <line></line>
      <h2 class="diplom"><span>✅ </span><b><a class="attention" href="https://testprovider.com/ru/search-certificate/tp24303907d" title="Diploma..." target="_blank">HTML Coder</a></b></h2>
    <div v-for="sert in htmlStore.state.htmlStore" class="certificate">
      <a class="block" :href="sert.image" title="Certificate..." target="_blank">
        <h3>{{ sert.id }}. {{ sert.title }}</h3>
        <div>Number: <strong>{{ sert.regnumber }}</strong></div>
        <div>Grade: <strong>{{ sert.grade }}</strong></div>
        <div>Exam date: {{ sert.examdate }}</div>
      </a>
    </div>
      <h2 class="diplom"><span>✅ </span><b><a class="attention" href="https://testprovider.com/ru/search-certificate/tp84806711d" title="Diploma..." target="_blank">JavaScript Developer</a></b></h2>
    <div v-for="sert in javascriptStore.state.javascriptStore" class="certificate">
      <a class="block" :href="sert.image" title="Certificate..." target="_blank">
        <h3>{{ sert.id }}. {{ sert.title }}</h3>
        <div>Number: <strong>{{ sert.regnumber }}</strong></div>
        <div>Grade: <strong>{{ sert.grade }}</strong></div>
        <div>Exam date: {{ sert.examdate }}</div>
      </a>
    </div>
      <h2 class="diplom"><span>✅ </span><b><a class="attention" href="https://testprovider.com/ru/search-certificate/tp31003654d" title="Diploma..." target="_blank">Angular Developer</a></b></h2>
    <div v-for="sert in angularStore.state.angularStore" class="certificate">
      <a class="block" :href="sert.image" title="Certificate..." target="_blank">
        <h3>{{ sert.id }}. {{ sert.title }}</h3>
        <div>Number: <strong>{{ sert.regnumber }}</strong></div>
        <div>Grade: <strong>{{ sert.grade }}</strong></div>
        <div>Exam date: {{ sert.examdate }}</div>
      </a>
    </div>
      <h2 class="diplom"><span>✅ </span><b><a class="attention" href="https://testprovider.com/ru/search-certificate/tp37723782d" title="Diploma..." target="_blank">React Developer</a></b></h2>
    <div v-for="sert in reactStore.state.reactStore" class="certificate">
      <a class="block" :href="sert.image" title="Certificate..." target="_blank">
        <h3>{{ sert.id }}. {{ sert.title }}</h3>
        <div>Number: <strong>{{ sert.regnumber }}</strong></div>
        <div>Grade: <strong>{{ sert.grade }}</strong></div>
        <div>Exam date: {{ sert.examdate }}</div>
      </a>
    </div>
      <h2 class="diplom"><span>✅ </span><b><a class="attention" href="https://testprovider.com/ru/search-certificate/tp77692345d" title="Diploma..." target="_blank">Frontend Developer</a></b></h2>
    <div v-for="sert in frontStore.state.frontStore" class="certificate">
      <a class="block" :href="sert.image" title="Certificate..." target="_blank">
        <h3>{{ sert.id }}. {{ sert.title }}</h3>
        <div>Number: <strong>{{ sert.regnumber }}</strong></div>
        <div>Grade: <strong>{{ sert.grade }}</strong></div>
        <div>Exam date: {{ sert.examdate }}</div>
      </a>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.frontend {
  flex: 1 0 auto;
}
</style>