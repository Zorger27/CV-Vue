<script lang="ts">
import { Options, Vue } from "vue-class-component";
import projectStore from "@/store/modules/project/projectStore";

@Options({
  computed: {
    filteredProjects() {
      return this.filterProjects(this.searchValue);
    },
    hasResults() {
      return this.filteredProjects.length > 0;
    },
  },
  data() {
    return {
      searchValue: "",
    };
  },
  methods: {
    clearSearch() {
      this.searchValue = "";
    },
    filterProjects(searchValue: string) {
      if (!searchValue) return projectStore.state.projectStore;

      const lowerCaseSearchValue = searchValue.toLowerCase();

      return projectStore.state.projectStore.filter((project) => {
        return (
          project.title_en.toLowerCase().includes(lowerCaseSearchValue) ||
          project.title_ua.toLowerCase().includes(lowerCaseSearchValue) ||
          project.title_es.toLowerCase().includes(lowerCaseSearchValue) ||
          project.start_date_en.toLowerCase().includes(lowerCaseSearchValue) ||
          project.start_date_ua.toLowerCase().includes(lowerCaseSearchValue) ||
          project.start_date_es.toLowerCase().includes(lowerCaseSearchValue) ||
          project.end_date_en.toLowerCase().includes(lowerCaseSearchValue) ||
          project.end_date_ua.toLowerCase().includes(lowerCaseSearchValue) ||
          project.end_date_es.toLowerCase().includes(lowerCaseSearchValue) ||
          project.techno.toLowerCase().includes(lowerCaseSearchValue)
        );
      });
    },
  },
  components: {},
})
export default class ProjectsSearch extends Vue {}
</script>

<template>
  <div class="search">
    <div class="search-bar">
      <input type="text" :placeholder="$t('projects.search')" v-model="searchValue"/>
      <i title="Clear" @click="clearSearch" class="fas fa-trash-alt"></i>
    </div>
    <div class="inner" v-if="searchValue.length !== 0">
      <template v-if="hasResults">
        <div v-for="prj in filteredProjects" :key="prj.id" class="prj">
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
      </template>
      <!-- Вывод сообщения об отсутствии результатов -->
      <div class="hasResults" v-if="searchValue.length !== 0 && !hasResults">
        {{ $t("projects.hasNoResults") }}️
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.search {
  margin-bottom: 1rem;

  .search-bar {
    margin: 1rem auto;
    font-size: 1.6rem;

    input {
      padding: 0.5rem;
      border: 1px solid lightskyblue;
      border-radius: 5px;
      font-size: 1.6rem;
      transition: border-color 0.2s ease-in-out, background-color 0.2s,
      box-shadow 0.2s;
    }

    input:active,
    :focus {
      outline: 1px solid lightskyblue;
      outline-offset: 0;
      box-shadow: 3px 3px 4px 0 grey;
    }

    .fa-trash-alt {font-size: 1.6rem; margin-left: 7px;}
    .fa-trash-alt:hover {color: red;}
  }

  .inner {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;

    .prj {
      max-width: 31rem;
      .block {
        background-image: url("@/assets/background/background12.webp");
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
          background-color: hsla(0, 100%, 50%, 1);
          background-image: radial-gradient(at 40% 20%, hsla(28, 100%, 74%, 1) 0px, transparent 50%),
          radial-gradient(at 80% 0%, hsl(14, 97%, 72%) 0px, transparent 50%),
          radial-gradient(at 0% 50%, hsla(355, 100%, 93%, 1) 0px, transparent 50%),
          radial-gradient(at 76% 52%, hsla(340, 100%, 76%, 1) 0px, transparent 50%),
          radial-gradient(at 0% 100%, hsla(22, 100%, 77%, 1) 0px, transparent 50%),
          radial-gradient(at 79% 100%, hsl(0, 79%, 78%) 0px, transparent 50%),
          radial-gradient(at 0% 0%, hsla(343, 100%, 76%, 1) 0px, transparent 50%);
        }

        .youtube:hover {
          color: black;
          text-shadow: 2px 2px 4px white;
          box-shadow: none;
          background-image: url("@/assets/img/cube3/cube3-18.webp");
          background-position: center;
          background-size: cover;
          background-repeat: no-repeat;
        }
      }
    }

    .hasResults {
      font-size: 1.6rem;
      font-weight: bold;
      margin: 0.5rem;
      color: darkgreen;
    }
  }
  @media(max-width: 1020px) {
    .inner {
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

  @media (max-width: 768px) {
    margin-bottom: 0.5rem;
    .search-bar {
      margin: 0.5rem auto;
      font-size: 1.3rem;

      input[type="text"] {
        padding: 0.4rem;
        border-radius: 3px;
        font-size: 1.3rem;
      }

      .fa-trash-alt {
        font-size: 1.3rem;
      }
    }
    .inner {
      .hasResults {
        font-size: 1.3rem;
        margin: 0.2rem;
        color: darkgreen;
      }
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
          .demolink, .github, .youtube {
            width: max-content;
            padding: 0.5rem 0.7rem;
            margin: 0.2rem auto;
          }
        }
      }
    }
  }
}
</style>