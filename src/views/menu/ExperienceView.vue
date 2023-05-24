<script lang="ts">
import { Vue } from "vue-class-component";

export default class Experience extends Vue {
};
</script>

<template>
  <div class="experience">
    <h1>{{$t ('experience.title')}}</h1>
    <line></line>
    <div class="container">
      <img class="codersrank-summary"
           src="https://cr-ss-service.azurewebsites.net/api/ScreenShot?widget=summary&username=zorger27&badges=3&show-avatar=true&branding=false&style=--border-radius:5px"
           alt="CodersrankSummary"/>
      <div class="work">
        <p>15.01.2001 - 13.01.2023<br>
          <b>{{$t ('experience.lis')}}</b><br>
          {{$t ('experience.rang')}}<br>
          <i>{{$t ('experience.job')}}</i><br>
        </p>
        <p>27.12.2016 - 13.01.2023<br>
          <b>{{$t ('experience.yugov')}}</b><br>
          {{$t ('experience.rang')}}<br>
          <i>{{$t ('experience.job')}}</i><br>
        </p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.experience {
  flex: 1 0 auto;
  text-align: left;
  .container {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    grid-gap: 1rem;
    grid-auto-flow: column;
    grid-template-areas:
        "codersrank-summary"
        "work";
  }
}

.work {
  grid-area: work;
  font-size: 2rem;
  p {
    margin-top: 0.5rem;
    padding: 0 0 0.3rem 1.5rem;
  }
}

.codersrank-summary {
  grid-area: codersrank-summary;
  justify-self: center;
  margin-top: 0.5rem;
  max-width: 60%;
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
    display: grid;
    justify-content: left;
    font-size: 1.7rem;
  }
  .codersrank-summary {
    max-width: 80%;
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
    font-size: 1.4rem;
  }
  .codersrank-summary {
    max-width: 100%;
  }
}
</style>