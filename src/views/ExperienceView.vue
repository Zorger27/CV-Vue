<script lang="ts">
import { Vue } from "vue-class-component";

export default class experience extends Vue {
};
</script>

<template>
  <div class="experience">
    <h1>Experience</h1>
    <line></line>
    <div class="container">
      <img class="codersrank-summary"
           src="https://cr-ss-service.azurewebsites.net/api/ScreenShot?widget=summary&username=zorger27&badges=3&show-avatar=true&branding=false&style=--border-radius:5px"
           alt="CodersrankSummary"/>
      <!--    <codersrank-summary username="zorger27" layout="horizontal" branding="false"></codersrank-summary>-->
      <div class="work">
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
    </div>
  </div>
</template>

<style lang="scss" scoped>
.experience {
  flex: 1 0 auto;
  text-align: left;
  font-size: x-large;

  .container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
    grid-gap: 1rem;
    grid-auto-flow: column;
    grid-template-areas: "codersrank-summary work";
  }

  .work {
    grid-area: work;

    p {
      padding: 0 0 0.3rem 1.5rem;
    }
  }

  img {
    grid-area: codersrank-summary;
    margin-top: 0.5rem;
    width: 100%;
    //box-shadow: 3px 3px 4px 0 lightgrey;
  }
}

@media(max-width: 1200px) {
  .experience {
    .container {
      grid-template-columns: 1fr;
      grid-template-areas:
        "codersrank-summary"
        "work";
    }
  }
  .work {
    display: inline-flex;
    justify-content: space-around;
  }
}

@media(max-width: 768px) {
  .experience {
    .container {
      grid-template-columns: 1fr;
      grid-template-areas:
        "codersrank-summary"
        "work";
    }
  }
  .work {
    display: grid;
    justify-content: left;
  }
}
</style>