<script lang="ts">
import {Options, Vue} from "vue-class-component";
import projectStore from "@/store/modules/project/projectStore";
import {openGraphMixin} from "@/assets/ogimage/openGraphMixin";

@Options({
  mixins: [openGraphMixin],
  computed: {
    projectStore() {
      return projectStore
    },
    orderedProjects() {
      if (this.reverseOrder) {
        // Если reverseOrder равен true, возвращаем проекты в обратном порядке
        return this.projectStore.state.projectStore.slice().reverse();
      } else {
        // Иначе возвращаем проекты в исходном порядке
        return this.projectStore.state.projectStore;
      }
    },
  },
  data() {
    return {
      tableView: false,
      reverseOrder: true,
    }
  },
  mounted() {
    const mainTitle = 'My Projects';
    const title = 'Portfolio - My Projects';
    const metaDescription = 'Anatolii Zorin\'s Portfolio with all diplomas, certificates, interesting projects and a detailed description of the experience gained at previous jobs.';
    const description = 'Anatolii Zorin\'s Portfolio - Here are my projects';
    const imageUrl = 'https://zorin.expert/assets/ogimage/menu/OG_Image_Projects.jpg';
    const url = 'https://zorin.expert/projects';

    this.setOpenGraphTags(metaDescription, title, description, imageUrl, url);
    this.setPageTitle(mainTitle);
  },
  methods: {
    changeView() {
      this.tableView = !this.tableView;
    },
    toggleOrder() {
      this.reverseOrder = !this.reverseOrder; // Инвертируем значение reverseOrder при клике на кнопку
    },
  },
  components: {},
})

export default class Projects extends Vue {
}
</script>

<template>
  <div class="projects">
    <h1>{{ $t('projects.title') }}
      <i @click="changeView"><span :class="['fa', tableView ? 'fa-list' : 'fa-th']"></span></i> <i
        @click="toggleOrder"><span :class="['fas', reverseOrder ? 'fa-arrow-alt-circle-up' : 'fa-arrow-alt-circle-down']"></span></i>
    </h1>
    <line></line>
    <div v-if="tableView" class="table">
      <table>
        <thead>
        <tr>
          <th>№</th>
          <th style="text-align: left;">{{ $t('projects.name') }}</th>
          <th>{{ $t('projects.description') }}</th>
          <th>{{ $t('projects.technologies') }}</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="prj in orderedProjects" :key="prj.id">
          <td class="nomer"><span style="color: black">{{ prj.id }}</span></td>
          <td class="name">
            <div>{{ this.$i18n.locale === "uk" ? prj.title_ua : this.$i18n.locale === "es" ? prj.title_es : prj.title_en }}</div>
            <div class="work"><span>{{ this.$i18n.locale === "uk" ? prj.start_date_ua : this.$i18n.locale === "es" ? prj.start_date_es : prj.start_date_en }}</span><span class="tire">–</span><span>{{ this.$i18n.locale === "uk" ? prj.end_date_ua : this.$i18n.locale === "es" ? prj.end_date_es : prj.end_date_en }}</span></div>
            <div class="type">{{ this.$i18n.locale === "uk" ? prj.type_ua : this.$i18n.locale === "es" ? prj.type_es : prj.type_en }}</div>
            <div class="link">
              <div v-if="prj.demolink && prj.youtubelink" class="link2">
                <a :href="prj.demolink" class="demolink" title="Link to the project" target="_blank"><b>{{ $t('projects.link') }}</b></a>
                <a :href="prj.sourcelink" class="github" title="Project at GitHub..." target="_blank"><b>{{ $t('projects.github') }}</b></a>
                <a :href="prj.youtubelink" class="youtube" title="Project at YouTube..." target="_blank"><b>{{ $t('projects.youtube') }}</b></a>
              </div>
              <div v-else-if="prj.demolink && prj.sourcelink" class="link2">
                <a :href="prj.demolink" class="demolink" title="Link to the project" target="_blank"><b>{{ $t('projects.link') }}</b></a>
                <a :href="prj.sourcelink" class="github" title="Project at GitHub..." target="_blank"><b>{{ $t('projects.github') }}</b></a>
              </div>
              <div v-else-if="prj.sourcelink && prj.youtubelink" class="link2">
                <a :href="prj.sourcelink" class="github" title="Project at GitHub..." target="_blank"><b>{{ $t('projects.github') }}</b></a>
                <a :href="prj.youtubelink" class="youtube" title="Project at YouTube..." target="_blank"><b>{{ $t('projects.youtube') }}</b></a>
              </div>
              <div v-else><a :href="prj.sourcelink" class="github" title="Project at GitHub..." target="_blank"><b>{{$t('projects.github') }}</b></a></div>
            </div>
          </td>
          <td class="description">{{ this.$i18n.locale === "uk" ? prj.description_ua : this.$i18n.locale === "es" ? prj.description_es : prj.description_en }}</td>
          <td class="grade">{{ prj.techno }}</td>
        </tr>
        </tbody>
      </table>
    </div>
    <div v-else class="container">
      <div v-for="prj in orderedProjects" :key="prj.id" class="prj">
        <div class="block">
          <h3><span style="color: black">{{ prj.id }}. </span>{{ this.$i18n.locale === "uk" ? prj.title_ua : this.$i18n.locale === "es" ? prj.title_es : prj.title_en }}</h3>
          <div class="working-date"><span>{{ this.$i18n.locale === "uk" ? prj.start_date_ua : this.$i18n.locale === "es" ? prj.start_date_es : prj.start_date_en }}</span><span v-if="prj.end_date_en" class="tire">–</span><span>{{ this.$i18n.locale === "uk" ? prj.end_date_ua : this.$i18n.locale === "es" ? prj.end_date_es : prj.end_date_en }}</span></div>
          <div class="description">{{ this.$i18n.locale === "uk" ? prj.description_ua : this.$i18n.locale === "es" ? prj.description_es : prj.description_en }}</div>
          <div><strong>{{ $t('projects.type') }}: </strong>{{ this.$i18n.locale === "uk" ? prj.type_ua : this.$i18n.locale === "es" ? prj.type_es : prj.type_en }}</div>
          <div><strong>{{ $t('projects.technologies') }}: </strong>{{ prj.techno }}</div>
          <div class="link">
            <div v-if="prj.demolink && prj.youtubelink" class="link2">
              <a :href="prj.demolink" class="demolink" title="Link to the project" target="_blank"><b>{{ $t('projects.link') }}</b></a>
              <a :href="prj.sourcelink" class="github" title="Project at GitHub..." target="_blank"><b>{{ $t('projects.github') }}</b></a>
              <a :href="prj.youtubelink" class="youtube" title="Project at YouTube..." target="_blank"><b>{{ $t('projects.youtube') }}</b></a>
            </div>
            <div v-else-if="prj.demolink && prj.sourcelink" class="link2">
              <a :href="prj.demolink" class="demolink" title="Link to the project" target="_blank"><b>{{ $t('projects.link') }}</b></a>
              <a :href="prj.sourcelink" class="github" title="Project at GitHub..." target="_blank"><b>{{ $t('projects.github') }}</b></a>
            </div>
            <div v-else-if="prj.sourcelink && prj.youtubelink" class="link2">
              <a :href="prj.sourcelink" class="github" title="Project at GitHub..." target="_blank"><b>{{ $t('projects.github') }}</b></a>
              <a :href="prj.youtubelink" class="youtube" title="Project at YouTube..." target="_blank"><b>{{ $t('projects.youtube') }}</b></a>
            </div>
            <div v-else><a :href="prj.sourcelink" class="github" title="Project at GitHub..." target="_blank"><b>{{$t('projects.github') }}</b></a></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.projects {
  flex: 1 0 auto;
  background: linear-gradient(to bottom, rgb(255, 249, 229), rgb(255, 240, 244)) no-repeat center;

  .demolink {
    text-decoration: none;
    color: white;
    text-shadow: 2px 2px 4px black;
    display: flex;
    width: max-content;
    border: 1px solid darkgreen;
    padding: 0.5rem 1rem;
    margin: 0.3rem auto;
    border-radius: 5px;
    background-image: url("@/assets/img/cube3/cube3-17.webp");
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    //background-color: hsl(48, 100%, 50%);
    //background-image: radial-gradient(at 40% 20%, hsl(203, 85%, 87%) 0px, transparent 50%),
    //radial-gradient(at 80% 0%, hsl(189, 87%, 68%) 0px, transparent 50%),
    //radial-gradient(at 0% 50%, hsl(118, 100%, 93%) 0px, transparent 50%),
    //radial-gradient(at 76% 52%, hsl(159, 100%, 76%) 0px, transparent 50%),
    //radial-gradient(at 0% 100%, hsl(165, 53%, 81%) 0px, transparent 50%),
    //radial-gradient(at 79% 100%, hsl(212, 78%, 79%) 0px, transparent 50%),
    //radial-gradient(at 0% 0%, hsl(146, 100%, 76%) 0px, transparent 50%);
  }

  .demolink:hover {
    background: linear-gradient(to bottom, rgb(255, 255, 255), rgb(152, 152, 255));
    color: darkblue;
    box-shadow: none;
    text-shadow: none;
    border: 1px solid darkslateblue;
  }

  .github {
    text-decoration: none;
    display: flex;
    width: max-content;
    padding: 0.5rem 1rem;
    margin: 0.3rem auto;
    border-radius: 5px;
    box-shadow: none;
    color: white;
    text-shadow: 2px 2px 4px darkblue;
    border: 1px solid darkslateblue;
    transition: border-color .2s ease-in-out, background-color .2s, box-shadow .2s;
    background-image: url("@/assets/background/background16.webp");
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
  }

  .github:hover {
    color: darkblue;
    text-shadow: none;
    border: 1px solid lightskyblue;
    //box-shadow: 3px 3px 4px 0 lightgrey;
    background: linear-gradient(to bottom, rgb(229, 251, 255), rgb(255, 240, 244)) no-repeat center;
  }

  .youtube {
    text-decoration: none;
    display: flex;
    width: max-content;
    padding: 0.5rem 1rem;
    margin: 0.3rem auto;
    border-radius: 5px;
    box-shadow: none;
    color: white;
    text-shadow: 2px 2px 4px black;
    border: 1px solid darkred;
    //transition: border-color .2s ease-in-out, background-color .2s, box-shadow .2s;
    background-color: hsla(0, 100%, 50%, 1);
    background-image: radial-gradient(at 40% 20%, hsla(28, 100%, 74%, 1) 0px, transparent 50%),
    radial-gradient(at 80% 0%, hsl(14, 97%, 72%) 0px, transparent 50%),
    radial-gradient(at 0% 50%, hsla(355, 100%, 93%, 1) 0px, transparent 50%),
    radial-gradient(at 76% 52%, hsla(340, 100%, 76%, 1) 0px, transparent 50%),
    radial-gradient(at 0% 100%, hsla(22, 100%, 77%, 1) 0px, transparent 50%),
    radial-gradient(at 79% 100%, hsl(0, 79%, 78%) 0px, transparent 50%),
    radial-gradient(at 0% 0%, hsla(343, 100%, 76%, 1) 0px, transparent 50%);
    //background-color: orangered;
  }

  .youtube:hover {
    color: black;
    //text-shadow: none;
    text-shadow: 2px 2px 4px white;
    box-shadow: none;
    //border: 1px solid rgba(0, 0, 0, 0.35);
    //border: 1px solid darkred;
    //box-shadow: 3px 3px 4px 0 lightgrey;
    //background-color: mistyrose;
    //background: linear-gradient(to bottom, rgb(255, 246, 209), rgb(255, 240, 244)) no-repeat center;
    background-image: url("@/assets/img/cube3/cube3-18.webp");
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
  }

  .table {
    //width: 50rem;
    background-image: url("@/assets/background/background04.webp");
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    margin-bottom: 1rem;

    .nomer {width: 1.8rem;font-size: 1.4rem;font-weight: bold}
    .name {
      font-size: 1.5rem;
      font-weight: bold;
      color: #af0661;
      width: 22rem;
      .work {
        display: inline;
        font-size: 1.2rem;
        font-weight: normal;
        font-style: italic;
        color: rebeccapurple;
        .tire {margin: 0 0.5rem;}
      }
      .type {
        font-size: 1.3rem;
        //font-style: italic;
        font-weight: normal;
        color: black;
      }
      .demolink, .github, .youtube {
        font-size: 1.3rem;
        display: inline-flex;
        width: max-content;
        padding: 0.5rem 1rem;
        margin: 0.3rem 0.8rem 0.3rem 0;
      }
    }
    .description {
      width: 20rem;
      text-align: left;
      font-style: italic;
      font-size: 1.2rem;
      color: midnightblue;
    }
    .grade {
      font-size: 1.1rem;
      width: 12rem;
      color: #0303af
    }

    th {font-size: 1.6rem}
    th, .nomer, .number, .grade, .date {text-align: center;}
  }

  .container {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    margin: 0.5rem auto;

    .prj {
      max-width: 31rem;
      .block {
        background-image: url("@/assets/background/background09.webp");
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.7);
        border-color: rgba(0, 0, 0, 0.3);
        .link .link2 {display: flex;}
        .working-date {
          color: rebeccapurple;
          .tire {margin: 0 0.5rem;}
        }
        .description {
          font-style: italic;
          font-size: 1.1rem;
          margin: 0.3rem 0;
          color: midnightblue;
        }
      }
    }
  }

  @media(max-width: 1020px) {
    .table {
      .nomer {width: 1.3rem;font-size: 1.1rem;}
      .name {
        font-size: 1.2rem;
        width: 18rem;
        .work {
          font-size: 1rem;
          .tire {margin: 0 0.3rem;}
        }
        .type {
          font-size: 1rem;
        }
        .demolink, .github, .youtube {
          font-size: 1rem;
          padding: 0.4rem 0.6rem;
          margin: 0.2rem 0.6rem 0.2rem 0;
        }
      }
      .description {width: 17rem;font-size: 1rem;}
      .grade {font-size: 0.9rem;min-width: 9rem;}
      th {font-size: 1.3rem}
    }

    .container {
      .prj {
        .block {
          max-width: fit-content;
          .working-date {
            .tire {margin: 0 0.4rem;}
          }
          .description {
            font-size: 1rem;
            margin: 0.2rem 0;
          }
        }
      }
    }
  }
  @media(max-width: 768px) {
    .table {
      margin-bottom: 0.8rem;

      .nomer {width: 1rem;font-size: 0.6rem;}
      .name {
        font-size: 0.7rem;
        width: 12rem;
        .work {
          font-size: 0.5rem;
          .tire {margin: 0 0.2rem;}
        }
        .type {
          font-size: 0.5rem;
        }
        .demolink, .github, .youtube {
          font-size: 0.6rem;
          padding: 0.3rem 0.5rem;
          margin: 0.2rem 0.5rem 0.2rem 0;
        }
      }
      .description {
        width: 10rem;
        font-size: 0.5rem;
      }
      .grade {font-size: 0.5rem;min-width: 3rem}
      th {font-size: 0.7rem}
    }

    .container {
      .prj {
        max-width: 25rem;
        .block {
          max-width: fit-content;
          .working-date {
            .tire {margin: 0 0.2rem;}
          }
          .description {
            font-size: 0.7rem;
            margin: 0.1rem 0;
          }
        }
      }
    }
    .demolink, .github, .youtube {
      width: max-content;
      padding: 0.5rem 0.7rem;
      margin: 0.2rem auto;
    }
  }
}
</style>