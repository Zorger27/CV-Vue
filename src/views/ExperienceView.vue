<script lang="ts">
import {Options, Vue} from "vue-class-component";
export default class experience extends Vue {};
</script>

<template>
  <div class="experience">
    <h1>Experience</h1>
    <line></line>
    <img src="https://cr-ss-service.azurewebsites.net/api/ScreenShot?widget=summary&username=zorger27&badges=3&show-avatar=true&branding=false&style=--border-radius:5px"
     alt="CodersrankSummary"/>
<!--    <codersrank-summary username="zorger27" layout="horizontal" branding="false"></codersrank-summary>-->
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

<style lang="scss" scoped>
.experience {
  flex: 1 0 auto;
  text-align: left;
  p {
    padding: 0 0 0.3rem 1.5rem;
  }
  img {
    margin-top: 0.5rem;
    width: 75%;
    //box-shadow: 3px 3px 4px 0 lightgrey;
  }
  @media(max-width:1200px) {
    img {
      width: 100%;
    }
  }
  @media(max-width:768px) {
    img {
      width: 100%;
    }
  }
}
</style>