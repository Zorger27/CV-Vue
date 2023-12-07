<script lang="ts">
import {Options, Vue} from "vue-class-component";
// import loginStore from "../../store/modules/service/loginStore";
// import {mapGetters} from "vuex";

@Options({
  // computed: {
  //   loginStore() {
  //     return loginStore
  //   }
  // },
  // methods: {
  //   ...mapGetters(["getCurrentUser"]),
  //   currentUser() {
  //     return this.getCurrentUser || {};
  //   }
  // },
  components: {},
})
export default class Extra extends Vue {
}
</script>

<template>
  <div class="extra">
    <h1>
      {{ $t('extra.h2') }}
<!--      {{ $t('extra.h1') }}-->
<!--      <span class="currentUser">-->
<!--        {{-->
<!--          this.$i18n.locale === "ua" ? loginStore.state.currentUser.name_ua : this.$i18n.locale === "es" ? loginStore.state.currentUser.name_es : loginStore.state.currentUser.name_en-->
<!--        }} {{-->
<!--          this.$i18n.locale === "ua" ? loginStore.state.currentUser.surname_ua : this.$i18n.locale === "es" ? loginStore.state.currentUser.surname_es : loginStore.state.currentUser.surname_en-->
<!--        }}-->
<!--      </span>-->
    </h1>
    <line></line>
    <div class="container">
      <div class="prj calculator">
        <router-link class="block" to="/extra/calculator"><b>{{ $t('extra.calculator.title') }}</b></router-link>
      </div>
      <div class="prj todo">
        <router-link class="block" to="/extra/todo"><b>{{ $t('extra.todo.title') }}</b></router-link>
      </div>
      <div class="prj notes">
        <router-link class="block" to="/extra/notes"><b>{{ $t('extra.notes.title') }}</b></router-link>
      </div>
      <div class="prj weather">
        <router-link class="block" to="/extra/weather"><b>{{ $t('extra.weather.title') }}</b></router-link>
      </div>
      <div class="prj exchange">
        <router-link class="block" to="/extra/rates"><b>{{ $t('extra.exchange.title') }}</b></router-link>
      </div>
      <div class="prj cryptocur">
        <router-link class="block" to="/extra/cryptocur"><b>{{ $t('extra.cryptocur.title') }}</b></router-link>
      </div>
      <div class="prj tasks">
        <router-link class="block" to="/extra/tasks"><b>{{ $t('extra.tasks.title') }}</b></router-link>
      </div>
      <div class="prj cube">
        <router-link class="block" to="/extra/cube"><b>{{ $t('extra.cube') }}</b></router-link>
      </div>
      <div class="prj game">
        <router-link class="block" to="/extra/games"><b>{{ $t('extra.game.title') }}</b></router-link>
      </div>
      <div class="prj ai">
        <router-link class="block" to="/extra/ai"><b>{{ $t('extra.ai.title') }}</b></router-link>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.extra {
  flex: 1 0 auto;
  background-image: url("@/assets/background/background13.webp");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  .container {
    display: inline-grid;
    justify-items: center;
    align-items: center;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-areas:
      "calculator todo notes"
      "weather exchange cryptocur"
      "tasks cube game"
      "ai ai ai";
    grid-column-gap: 0.5rem;
    grid-row-gap: 0;
    grid-auto-flow: column;
    margin-bottom: 1rem;

    .calculator {
      grid-area: calculator;
    }

    .todo {
      grid-area: todo;
    }

    .notes {
      grid-area: notes;
    }

    .weather {
      grid-area: weather;
    }

    .exchange {
      grid-area: exchange;
    }

    .cryptocur {
      grid-area: cryptocur;
    }

    .tasks {
      grid-area: tasks;
    }

    .cube {
      grid-area: cube;
    }

    .game {
      grid-area: game;
    }

    .ai {
      grid-area: ai;
    }

    .block {
      font-size: 1.5rem;
    }

    .prj {
      font-size: 1.5rem;
      .block {
        padding: 1.5rem;
        margin: 0.5rem;
        box-shadow: 3px 3px 4px 0 rebeccapurple;
        background-image: url("@/assets/background/background08.webp");
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;

        b {
          color: darkred;
        }
      }
    }

    .prj:hover {
      .block {
        box-shadow: 3px 3px 4px 0 rgba(0, 0, 0, 0.7);
        border-color: #bbeafa;
        background: linear-gradient(to bottom, rgb(229, 251, 255), rgb(255, 240, 244)) no-repeat center;
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
    //h1 {
    //  font-size: 1.7rem;
    //  margin: 0.3rem;
    //}
    .container {
      margin-bottom: 0.5rem;
      display: inherit;

      .prj {
        .block {
          padding: 0.8rem;
          margin: 0.2rem;
          font-size: 1.2rem;
        }
      }
    }
  }
}
</style>