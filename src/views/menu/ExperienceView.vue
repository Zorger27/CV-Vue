<script lang="ts">
import {Options, Vue} from "vue-class-component";
import experienceStore from "@/store/modules/project/experienceStore";

@Options({
  computed: {
    experienceStore() {
      return experienceStore
    }
  },
  components: {},
})
export default class Experience extends Vue {
};
</script>

<template>
  <div class="experience">
    <h1>{{ $t('experience.title') }}</h1>
    <line></line>
    <div class="container">
      <div class="codersrank-summary">
        <img src="https://cr-ss-service.azurewebsites.net/api/ScreenShot?widget=summary&username=zorger27&badges=3&show-avatar=true&branding=false&style=--border-radius:5px" alt="CodersrankSummary"/>
      </div>
      <div class="work">
        <div v-for="exp in experienceStore.state.experienceStore" :key="exp.id">
          <h3>{{exp.data_start}} - {{this.$i18n.locale === "ua" ? exp.data_finish_ua : this.$i18n.locale === "es" ? exp.data_finish_es : exp.data_finish_en}}</h3>
          <h4><span style="color: black">{{ $t('experience.company') }}: </span>{{ this.$i18n.locale === "ua" ? exp.company_ua : this.$i18n.locale === "es" ? exp.company_es : exp.company_en }}</h4>
          <h4><span style="color: black">{{ $t('experience.job') }}: </span>{{ this.$i18n.locale === "ua" ? exp.job_ua : this.$i18n.locale === "es" ? exp.job_es : exp.job_en }}</h4>
          <p><span style="font-weight: bold; color: rebeccapurple">{{ $t('experience.main-duties') }}: </span>{{ this.$i18n.locale === "ua" ? exp.main_duties_ua : this.$i18n.locale === "es" ? exp.main_duties_es : exp.main_duties_en }}</p>
          <p><span style="font-weight: bold; color: rebeccapurple">{{ $t('experience.related-duties') }}: </span>{{ this.$i18n.locale === "ua" ? exp.related_duties_ua : this.$i18n.locale === "es" ? exp.related_duties_es : exp.related_duties_en }}</p>
          <p><span style="font-weight: bold; color: rebeccapurple">{{ $t('experience.interesting-tasks') }}: </span>{{ this.$i18n.locale === "ua" ? exp.interesting_tasks_ua : this.$i18n.locale === "es" ? exp.interesting_tasks_es : exp.interesting_tasks_en }}</p>
          <p class="skills"> <span style="color: black; font-style: normal; text-decoration: underline">{{ $t('experience.skills') }}:</span> {{ exp.skills }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.experience {
  flex: 1 0 auto;
  text-align: left;
  background: linear-gradient(to bottom, rgb(229, 251, 255), rgb(255, 240, 244)) no-repeat center;

  .container {
    display: flex;
    flex-direction: column;
    .work {
      display: flex;
      flex-direction: column;
      font-size: 1.8rem;
      h3 {
        color: darkred;
        margin: 0.5rem auto;
        font-style: italic;
      }

      h4 {
        color: darkblue;
        margin: 0.5rem auto;
      }
      p {
        margin: 0.5rem auto;
        padding-left: 1rem;
      }
      .skills {
        font-size: 1.4rem;
        padding-left: 0;
        font-style: italic;
      }
    }

    .codersrank-summary {
      text-align: center;
      img {
        justify-self: center;
        margin-top: 0.5rem;
        max-width: 50%;
      }
    }
  }
}

@media(max-width: 1200px) {
  .experience {
    .container {
      .work {
        display: flex;
        flex-direction: column;
        font-size: 1.4rem;
        .skills {font-size: 1.1rem;}
      }
      .codersrank-summary {
        img {max-width: 80%;}
      }
    }
  }
}

@media(max-width: 768px) {
  .experience {
    .container {
      .work {
        display: flex;
        flex-direction: column;
        font-size: 1rem;
        .skills {font-size: 0.7rem;}
      }
      .codersrank-summary {
        img {
          max-width: 100%;
        }
      }
    }
  }
}
</style>