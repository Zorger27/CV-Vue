<script lang="ts">
import {Options, Vue} from "vue-class-component";
import pmStore from "@/store/modules/pmStore";
@Options({
  computed: {
    pmStore() {
      return pmStore
    }
  },
  components: {},})
export default class pm extends Vue {}
</script>

<template>
  <div class="pm">
    <h1>
      <router-link class="back" to="/certificates" title="Back to Certificates"><i class="fa fa-arrow-circle-left"></i>
      </router-link>
      Project Management certificates
    </h1>
    <line></line>
<!--    <Certificate v-for="certificate in pmStore.state.pmStore" :key="certificate.id" :certificate="certificate" />-->
    <div v-for="sert in pmStore.state.pmStore" class="certificate">
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
.pm {
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