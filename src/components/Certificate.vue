<script lang="ts">
import {Vue} from "vue-class-component";

export default class Certificate extends Vue{
  certificate!: any;
}
</script>

<template>
  <div class="certificate">
    <a class="block" :href="certificate.image" title="Certificate..." target="_blank">
      <h3>{{ certificate.id }}. {{ certificate.title }}</h3>
      <div>Number: <strong>{{ certificate.regnumber }}</strong></div>
      <div>Grade: <strong>{{ certificate.grade }}</strong></div>
      <div>Exam date: {{ certificate.examdate }}</div>
    </a>
  </div>
</template>

<style lang="scss" scoped>
.certificate {
  /* your certificate styles here */
}
</style>