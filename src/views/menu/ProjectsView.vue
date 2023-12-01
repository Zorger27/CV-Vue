<script lang="ts">
import {Options, Vue} from "vue-class-component";
import projectStore from "@/store/modules/project/projectStore";

@Options({
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
      <i @click="changeView"><span :class="['fa', tableView ? 'fa-list' : 'fa-th']"></span></i>
      <i @click="toggleOrder"><span :class="['fas', reverseOrder ? 'fa-arrow-alt-circle-up' : 'fa-arrow-alt-circle-down']"></span></i>
      <!--      <i @click="toggleOrder"><span :class="['fas', reverseOrder ? 'fa-chevron-circle-down' : 'fa-chevron-circle-up' ]"></span></i>-->
      <!--      <i @click="toggleOrder"><span :class="['fas', reverseOrder ? 'fa-arrow-down' : 'fa-arrow-up' ]"></span></i>-->
    </h1>
    <line></line>
    <div v-if="tableView" class="table">
      <table>
        <thead>
        <tr>
          <th>№</th>
          <th style="text-align: left;">{{ $t('projects.name') }}</th>
          <th>{{ $t('projects.type') }}</th>
          <th>{{ $t('projects.technologies') }}</th>
          <th>{{ $t('projects.linkCol') }}</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="prj in orderedProjects" :key="prj.id">
          <td class="nomer"><span style="color: black">{{ prj.id }}</span></td>
          <td class="name">{{ this.$i18n.locale === "ua" ? prj.title_ua : this.$i18n.locale === "es" ? prj.title_es : prj.title_en }}</td>
          <td class="number">{{ this.$i18n.locale === "ua" ? prj.type_ua : this.$i18n.locale === "es" ? prj.type_es : prj.type_en }}</td>
          <td class="grade">{{ prj.techno }}</td>
          <td class="date">
            <div v-if="prj.demolink">
              <a :href="prj.demolink" class="demolink" title="Link to the project" target="_blank"><b>{{ $t('projects.link') }}</b></a>
              <a :href="prj.sourcelink" class="no-demolink" title="Project at GitHub..." target="_blank"><b>{{
                  $t('projects.github')
                }}</b></a>
            </div>
            <a v-else :href="prj.sourcelink" class="no-demolink" title="Project at GitHub..."
               target="_blank"><b>{{ $t('projects.github') }}</b></a>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
    <div v-else class="container">
      <div v-for="prj in orderedProjects" :key="prj.id" class="prj">
        <div class="block">
          <h3><span style="color: black">{{ prj.id }}. </span>{{ this.$i18n.locale === "ua" ? prj.title_ua : this.$i18n.locale === "es" ? prj.title_es : prj.title_en }}</h3>
          <div>{{ $t('projects.type') }}: <strong>{{ this.$i18n.locale === "ua" ? prj.type_ua : this.$i18n.locale === "es" ? prj.type_es : prj.type_en }}</strong></div>
          <div>{{ $t('projects.technologies') }}: <strong>{{ prj.techno }}</strong></div>
          <div class="link">
            <div v-if="prj.demolink" class="link2">
              <a :href="prj.demolink" class="demolink" title="Link to the project" target="_blank"><b>{{ $t('projects.link') }}</b></a>
              <a :href="prj.sourcelink" class="no-demolink" title="Project at GitHub..." target="_blank"><b>{{ $t('projects.github') }}</b></a>
            </div>
            <div v-else><a :href="prj.sourcelink" class="no-demolink" title="Project at GitHub..." target="_blank"><b>{{$t('projects.github') }}</b></a></div>
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
    border: 1px solid darkred;
    padding: 0.5rem 1rem;
    margin: 0.3rem auto;
    border-radius: 5px;
    background-color: hsla(0, 100%, 50%, 1);
    background-image: radial-gradient(at 40% 20%, hsla(28, 100%, 74%, 1) 0px, transparent 50%),
    radial-gradient(at 80% 0%, hsla(189, 100%, 56%, 1) 0px, transparent 50%),
    radial-gradient(at 0% 50%, hsla(355, 100%, 93%, 1) 0px, transparent 50%),
    radial-gradient(at 76% 52%, hsla(340, 100%, 76%, 1) 0px, transparent 50%),
    radial-gradient(at 0% 100%, hsla(22, 100%, 77%, 1) 0px, transparent 50%),
    radial-gradient(at 79% 100%, hsla(242, 100%, 70%, 1) 0px, transparent 50%),
    radial-gradient(at 0% 0%, hsla(343, 100%, 76%, 1) 0px, transparent 50%);
  }

  .demolink:hover {
    background: linear-gradient(to bottom, rgb(255, 255, 255), rgb(152, 152, 255));
    color: darkblue;
    box-shadow: none;
    text-shadow: none;
    border: 1px solid darkslateblue;
  }

  .no-demolink {
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
    background-image: url("@/assets/background/background16.jpg");
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
  }

  .no-demolink:hover {
    color: darkblue;
    text-shadow: none;
    border: 1px solid lightskyblue;
    box-shadow: 3px 3px 4px 0 lightgrey;
    background: linear-gradient(to bottom, rgb(229, 251, 255), rgb(255, 240, 244)) no-repeat center;
  }

  .table {
    //width: 50rem;
    background-image: url("@/assets/background/background04.jpg");
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    margin-bottom: 1rem;

    .nomer {width: 2rem}
    .name {width: 24rem;}
    .number {width: 3rem;}
    .grade {min-width: 18rem;}
    .date {
      width: 3rem;
      font-size: 1.3rem;
    }

    th, .nomer, .number, .grade, .date {
      text-align: center;
    }
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
        background-image: url("@/assets/background/background09.jpg");
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.7);
        border-color: rgba(0, 0, 0, 0.3);
        .link .link2 {display: flex;}
      }
    }
  }

  @media(max-width: 1020px) {
    .table {
      font-size: 1.1rem;
      .nomer {width: 2rem}
      .name {width: 12rem;}
      .number {
        width: 3rem;
        font-size: 1.1rem;
      }
      .grade {
        min-width: 9rem;
        font-size: 1.1rem;
      }
      .date {
        width: 3rem;
        font-size: 1.1rem;
      }
    }

    .container {
      .prj {
        .block {
          max-width: fit-content;
        }
      }
    }
  }
  @media(max-width: 768px) {
    .table {
      margin-bottom: 0.5rem;
      font-size: 0.7rem;
      .nomer {width: 1rem}
      .name {min-width: 2rem;}
      .number {
        width: 3rem;
        //font-size: 0.9rem;
      }
      .grade {
        min-width: 3rem;
        //font-size: 0.9rem;
      }
      .date {
        width: 3rem;
        //font-size: 0.7rem;
      }

      thead {font-size: 0.7rem;}

      .nomer, .number, .grade, .date {
        font-size: 0.5rem;
      }
    }

    .container {
      .prj {
        max-width: 25rem;
        .block {
          max-width: fit-content;
        }
      }
    }
    .demolink, .no-demolink {
      width: max-content;
      //padding: 0.3rem 0.3rem;
      margin: 0.2rem auto;
    }
  }
}
</style>