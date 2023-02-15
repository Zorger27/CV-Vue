<template>
  <div class="experience">
    <h1>Experience</h1>
    <line></line>
      <p>15.01.2001 - 13.01.2023<br>
        <b>LIS Ltd.</b><br>
        CEO<br>
        <i>Full enterprise management.</i><br>
      </p>
      <p>27.12.2016 - 13.01.2023<br>
        <b>Yugov & D Ltd.</b><br>
        CEO<br>
        <i>Full enterprise management.</i><br>
      </p>
  </div>
</template>

<script lang="ts">
import {Vue} from "vue-class-component";
export default class experience extends Vue {}
</script>

<style lang="scss" scoped>
.experience {
  flex: 1 0 auto;
  text-align: left;
  p {
    padding: 0 0 0.3rem 1.5rem;
  }
}
</style>