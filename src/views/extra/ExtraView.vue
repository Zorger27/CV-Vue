<script lang="ts">
import {Options, Vue} from "vue-class-component";

@Options({components: {},})
export default class LoginPage extends Vue {}
</script>

<template>
  <div class="extra">
    <h1>{{ $t('extra.h1') }}</h1>
    <line></line>
    <div class="container">
      <div class="prj calculator">
        <router-link class="block" to="/extra/calculator"><b>{{ $t('extra.calculator') }}</b></router-link>
      </div>
      <div class="prj todo">
        <router-link class="block" to="/extra/todo"><b>{{ $t('extra.todo') }}</b></router-link>
      </div>
      <div class="prj notes">
        <router-link class="block" to="/extra/notes"><b>{{ $t('extra.notes') }}</b></router-link>
      </div>
      <div class="prj weather">
        <router-link class="block" to="/extra/weather"><b>{{ $t('extra.weather') }}</b></router-link>
      </div>
      <div class="prj exchange">
        <router-link class="block" to="/extra/exchange"><b>{{ $t('extra.exchange') }}</b></router-link>
      </div>
      <div class="prj cryptocur">
        <router-link class="block" to="/extra/cryptocur"><b>{{ $t('extra.cryptocur') }}</b></router-link>
      </div>
      <div class="prj tasks">
        <router-link class="block" to="/extra/tasks"><b>{{ $t('extra.tasks') }}</b></router-link>
      </div>
      <div class="prj cube">
        <router-link class="block" to="/extra/cube"><b>{{ $t('extra.cube') }}</b></router-link>
      </div>
      <div class="prj game">
        <router-link class="block" to="/extra/game"><b>{{ $t('extra.game') }}</b></router-link>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.extra {
  flex: 1 0 auto;
  .container {
    display: inline-grid;
    justify-items: center;
    align-items: center;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-areas:
      "calculator todo notes"
      "weather exchange cryptocur"
      "tasks cube game";
    grid-column-gap: 0.5rem;
    grid-row-gap: 0;
    grid-auto-flow: column;

    .calculator {grid-area: calculator;}
    .todo {grid-area: todo;}
    .notes {grid-area: notes;}
    .weather {grid-area: weather;}
    .exchange {grid-area: exchange;}
    .cryptocur {grid-area: cryptocur;}
    .tasks {grid-area: tasks;}
    .cube {grid-area: cube;}
    .game {grid-area: game;}

    .block {font-size: 1.5rem;}

    .prj {
      font-size: 1.5rem;
      margin-bottom: 1rem;
      b {
        color: darkred;
      }
    }

    .prj:hover {
      .block {
        background: lightblue;
        box-shadow: 3px 3px 4px 0 lightgrey;
        border-color: lightskyblue;
      }
      b {
        color: red;
        text-decoration: none;
      }
    }
  }
}

@media (max-width: 768px) {
  .extra {
    .container {
      display: inherit;
      //display: inline-grid;
      //justify-items: center;
      //grid-template-columns: 1fr 1fr;
      //grid-template-rows: auto;
      //grid-template-areas:
      //"calculator weather"
      //"todo notes"
      //"exchange cryptocur"
      //"tasks cube"
      //"game game";
      //grid-column-gap: 0.5rem;
      //grid-row-gap: 0;
      //grid-auto-flow: column;
      //
      .block {
        font-size: 1.2rem;
      }
    }
  }
}
</style>