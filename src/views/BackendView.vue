<script lang="ts">
import {Options, Vue} from "vue-class-component";
import javaStore from "@/store/modules/backend/javaStore";
import phpStore from "@/store/modules/backend/phpStore";
import pythonStore from "@/store/modules/backend/pythonStore";
import rubyStore from "@/store/modules/backend/rubyStore";
@Options({
  computed: {
    phpStore() {return phpStore},
    pythonStore() {return pythonStore},
    rubyStore() {return rubyStore},
    javaStore() {return javaStore}},
  components: {},})
export default class backend extends Vue {}
</script>

<template>
  <div class="backend">
    <h1>
      <router-link class="back" to="/certificates" title="Back to Certificates"><i class="fa fa-arrow-circle-left"></i>
      </router-link>
      Backend Diplomas & Certificates
    </h1>
    <line></line>
      <h2 class="diplom"><span>✅ </span><b><a class="attention" id="java" href="https://testprovider.com/ru/search-certificate/tp31617068d" title="Diploma..." target="_blank">Java Developer</a></b></h2>
        <div v-for="sert in javaStore.state.javaStore" class="certificate">
<!--          <certificate></certificate>-->
          <a class="block" :href="sert.image" title="Certificate..." target="_blank">
            <h3>{{ sert.id }}. {{ sert.title }}</h3>
            <div>Number: <strong>{{ sert.regnumber }}</strong></div>
            <div>Grade: <strong>{{ sert.grade }}</strong></div>
            <div>Exam date: {{ sert.examdate }}</div>
        </a>
      </div>
      <h2 class="diplom"><span>✅ </span><b><a class="attention" href="https://testprovider.com/ru/search-certificate/tp88892276D" title="Diploma..." target="_blank">PHP Developer</a></b></h2>
        <div v-for="sert in phpStore.state.phpStore" class="certificate">
         <a class="block" :href="sert.image" title="Certificate..." target="_blank">
            <h3>{{ sert.id }}. {{ sert.title }}</h3>
            <div>Number: <strong>{{ sert.regnumber }}</strong></div>
            <div>Grade: <strong>{{ sert.grade }}</strong></div>
            <div>Exam date: {{ sert.examdate }}</div>
          </a>
        </div>
    <h2 class="diplom"><span>✅ </span><b><a class="attention" href="https://testprovider.com/ru/search-certificate/tp45473683D" title="Diploma..." target="_blank">Python Developer</a></b></h2>
        <div v-for="sert in pythonStore.state.pythonStore" class="certificate">
          <a class="block" :href="sert.image" title="Certificate..." target="_blank">
            <h3>{{ sert.id }}. {{ sert.title }}</h3>
            <div>Number: <strong>{{ sert.regnumber }}</strong></div>
            <div>Grade: <strong>{{ sert.grade }}</strong></div>
            <div>Exam date: {{ sert.examdate }}</div>
          </a>
        </div>
    <h2 class="diplom"><span>✅ </span><b><a class="attention" href="https://testprovider.com/ru/search-certificate/tp63925579D" title="Diploma..." target="_blank">Ruby Developer</a></b></h2>
        <div v-for="sert in rubyStore.state.rubyStore" class="certificate">
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
.backend {
  flex: 1 0 auto;
  .back {
    display: none;
    @media (max-width: 768px) {
      display: inline-flex;
      text-decoration: none;
      margin-right: 0.1rem;
    }
  }
}
</style>