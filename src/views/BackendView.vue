<script lang="ts">
import {Options, Vue} from "vue-class-component";
import javaStore from "@/store/modules/javaStore";
@Options({
  computed: {
    javaStore() {
      return javaStore
    }
  },
  components: {},})
export default class backend extends Vue {}
</script>

<template>
  <div class="backend">
    <h1>Backend Diplomas & Certificates</h1>
    <line></line>
      <h2 class="diplom"><span>✅ </span><b><a class="attention" href="https://testprovider.com/ru/search-certificate/tp31617068d" title="Diploma..." target="_blank">Java Developer</a></b> (TP31617068D | 12.04.2021)</h2>
      <div v-for="sert in javaStore.state.javaStore" class="certificate">
        <a class="block" :href="sert.image" title="Certificate..." target="_blank">
          <h3>{{ sert.id }}. {{ sert.title }}</h3>
          <div>Number: <strong>{{ sert.regnumber }}</strong></div>
          <div>Grade: <strong>{{ sert.grade }}</strong></div>
          <div>Exam date: {{ sert.examdate }}</div>
        </a>
      </div>
      <h2 class="diplom"><span>✅ </span><b><a class="attention" href="https://testprovider.com/ru/search-certificate/tp88892276D" title="Diploma..." target="_blank">PHP Developer</a></b> (TP88892276D | 30.09.2022)</h2>
      <h2 class="diplom"><span>✅ </span><b><a class="attention" href="https://testprovider.com/ru/search-certificate/tp45473683D" title="Diploma..." target="_blank">Python Developer</a></b> (TP45473683D | 16.11.2022)</h2>
      <h2 class="diplom"><span>✅ </span><b><a class="attention" href="https://testprovider.com/ru/search-certificate/tp63925579D" title="Diploma..." target="_blank">Ruby Developer</a></b> (TP63925579D | 30.11.2022)</h2>
  </div>
</template>

<style lang="scss" scoped>
.backend {
  flex: 1 0 auto;
}
</style>