<script lang="ts">
import {Options, Vue} from "vue-class-component";
import otherStore from "@/store/modules/otherStore";

@Options({
  computed: {otherStore() {return otherStore}},
  components: {},})
export default class other extends Vue {}
</script>
<!---->
<template>
  <div class="other">
    <h1>Other certificates</h1>
    <line></line>
      <div v-for="sert in otherStore.state.otherStore" class="certificate">
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
.other {flex: 1 0 auto;}
</style>