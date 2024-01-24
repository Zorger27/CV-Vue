<script lang="ts">
import {Options, Vue} from "vue-class-component";
import experienceStore from "@/store/modules/project/experienceStore";
import {openGraphMixin} from "@/assets/ogimage/openGraphMixin";

@Options({
  mixins: [openGraphMixin],
  data() {return {isCodersrankSummaryVisible: true,}},
  computed: {experienceStore() {return experienceStore}},
  mounted() {
    const mainTitle = 'My Experience';
    const title = 'Portfolio - My Experience';
    const metaDescription = 'Anatolii Zorin\'s Portfolio with all diplomas, certificates, interesting projects and a detailed description of the experience gained at previous jobs.';
    const description = 'Anatolii Zorin\'s Portfolio - My Experience';
    const imageUrl = 'https://zorin.expert/assets/ogimage/menu/OG_Image_Experience.jpg';
    const url = 'https://zorin.expert/experience';

    this.setOpenGraphTags(metaDescription, title, description, imageUrl, url);
    this.setPageTitle(mainTitle);

    const savedValue = localStorage.getItem('isCodersrankSummaryVisible');
    if (savedValue) {this.isCodersrankSummaryVisible = savedValue === 'true';}
  },
  methods: {
    changeSummary() {
      this.isCodersrankSummaryVisible = !this.isCodersrankSummaryVisible;
      localStorage.setItem('isCodersrankSummaryVisible', this.isCodersrankSummaryVisible.toString());
      },
  },
  components: {},
})
export default class Experience extends Vue {
};
</script>

<template>
  <div class="experience">
    <h1>
      {{ $t('experience.title') }} <i @click="changeSummary" class="dandruff"><span :class="['fa', isCodersrankSummaryVisible ? 'fa-check-circle' : 'fa-hat-wizard']"></span></i>
    </h1>
    <line></line>
    <div class="container">
      <div v-if="isCodersrankSummaryVisible">
        <codersrank-summary username="zorger27" branding="false" layout="horizontal"></codersrank-summary>
      </div>
      <div class="work">
        <div v-for="exp in experienceStore.state.experienceStore" :key="exp.id">
          <h3>{{ exp.data_start }} -
            {{ this.$i18n.locale === "uk" ? exp.data_finish_ua : this.$i18n.locale === "es" ? exp.data_finish_es : exp.data_finish_en }}</h3>
          <h4><span style="color: black">{{
              $t('experience.company')
            }}: </span>{{ this.$i18n.locale === "uk" ? exp.company_ua : this.$i18n.locale === "es" ? exp.company_es : exp.company_en }}
          </h4>
          <h4><span style="color: black">{{
              $t('experience.job')
            }}: </span>{{ this.$i18n.locale === "uk" ? exp.job_ua : this.$i18n.locale === "es" ? exp.job_es : exp.job_en }}</h4>
          <p><span style="font-weight: bold; color: rebeccapurple">{{
              $t('experience.main-duties')
            }}: </span>{{
              this.$i18n.locale === "uk" ? exp.main_duties_ua : this.$i18n.locale === "es" ? exp.main_duties_es : exp.main_duties_en
            }}</p>
          <p><span style="font-weight: bold; color: rebeccapurple">{{
              $t('experience.related-duties')
            }}: </span>{{
              this.$i18n.locale === "uk" ? exp.related_duties_ua : this.$i18n.locale === "es" ? exp.related_duties_es : exp.related_duties_en
            }}</p>
          <p><span style="font-weight: bold; color: rebeccapurple">{{
              $t('experience.tasks')
            }}: </span>{{ this.$i18n.locale === "uk" ? exp.tasks_ua : this.$i18n.locale === "es" ? exp.tasks_es : exp.tasks_en }}</p>
          <p class="skills"><span style="color: black; font-style: normal; text-decoration: underline">{{
              $t('experience.skills')
            }}:</span> {{ exp.skills }}</p>
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
      margin: 1rem 2rem;

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

    codersrank-summary {
      margin: 0.5rem auto;
      max-width: 50%;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.7);
      border-radius: 5px;
      --border-radius: 5px;
      transition: border-color .2s ease-in-out, background-color .2s, box-shadow .2s;
    }
    codersrank-summary:hover {
      box-shadow: 3px 3px 4px 0 lightgrey;
    }
  }
}

@media(max-width: 1200px) {
  .experience {
    //h1 {font-size: 1.9rem;}
    .container {
      .work {
        margin: 0.5rem 1rem;
        display: flex;
        flex-direction: column;
        font-size: 1.4rem;

        .skills {
          font-size: 1.1rem;
        }
      }

      codersrank-summary {
        margin: 0.4rem auto;
        max-width: 80%;
        --border-radius: 5px;
      }
    }
  }
}

@media(max-width: 768px) {
  .experience {
    //h1 {font-size: 1.8rem;}
    .container {
      .work {
        margin: 0 0.3rem;
        display: flex;
        flex-direction: column;
        font-size: 1rem;

        h3, h4, p {
          margin: 0.3rem;
        }

        .skills {
          font-size: 0.7rem;
        }
      }

      codersrank-summary {
        margin: 0.5rem auto;
        max-width: 100%;
        --border-radius: 5px;
      }
    }
  }
}
</style>