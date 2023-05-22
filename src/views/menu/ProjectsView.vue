<script lang="ts">
import {Options, Vue} from "vue-class-component";
import projectStore from "@/store/modules/project/projectStore";

@Options({
  computed: {
    projectStore() {
      return projectStore
    }
  },
  data() {
    return {tableView: false}
  },
  methods: {
    changeView() {
      this.tableView = !this.tableView;
    }
  },
  components: {},
})

export default class Projects extends Vue {
}
</script>

<template>
  <div class="projects">
    <h1>{{ $t('projects.title') }}
    <i @click="changeView"><span :class="['fa', tableView ? 'fa-th' : 'fa-list']"></span></i>
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
        <tr v-for="prj in projectStore.state.projectStore" :key="prj.id">
          <td class="nomer">{{ prj.id }}</td>
          <td class="name"><a :href="prj.sourcelink" title="Project at GitHub..." target="_blank">{{ prj.title }}</a></td>
          <td class="number">{{ prj.type }}</td>
          <td class="grade">{{ prj.techno }}</td>
          <td class="date">
            <a v-if="prj.demolink" :href="prj.demolink" class="demolink" title="Link to the project" target="_blank"><b>{{ $t('projects.link') }}</b></a>
            <a v-else :href="prj.sourcelink" class="no-demolink" title="Link to the project at GitHub..." target="_blank"><b>{{ $t('projects.github') }}</b></a>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
    <div v-else class="container">
      <div v-for="prj in projectStore.state.projectStore" :key="prj.id" class="prj">
        <a class="block" :href="prj.sourcelink" title="Project at GitHub..." target="_blank">
          <h3>{{ prj.id }}. {{ prj.title }}</h3>
          <div>{{ $t('projects.type') }}: <strong>{{ prj.type }}</strong></div>
          <div>{{ $t('projects.technologies') }}: <strong>{{ prj.techno }}</strong></div>
          <a v-if="prj.demolink" :href="prj.demolink" class="demolink" title="Link to the project" target="_blank"><b>{{ $t('projects.link') }}</b></a>
          <a v-else :href="prj.sourcelink" class="no-demolink" title="Link to the project at GitHub..." target="_blank"><b>{{ $t('projects.github') }}</b></a>
        </a>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.projects {
  flex: 1 0 auto;

  .table {
    //background: linear-gradient(to bottom, rgb(229, 251, 255), rgb(255, 240, 244)) no-repeat center;
    //background-color: rgb(255, 255, 255);
    background-image: url("@/assets/background/background04.jpg");
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    margin-bottom: 0.5rem;
    th, .nomer, .number, .grade, .date {
      text-align: center;
    }
    a {text-decoration: none;}
    .demolink {color: darkgreen;}
    .demolink:hover {
      color: lightseagreen;
    }
  }

  .container {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    margin: 0.5rem auto;

    .prj {
      .block {
        background-image: url("@/assets/background/background09.jpg");
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;

        .demolink {
          text-decoration: none;
          color: white;
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
          box-shadow: none;
          background: linear-gradient(to bottom, rgb(255, 255, 255), rgb(152, 152, 255));
          color: darkblue;
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
          background: linear-gradient(to bottom, rgb(255, 255, 255), rgb(152, 152, 255));
          color: darkblue;
          border: 1px solid darkslateblue;
        }
        .no-demolink:hover {
          color: white;
          border: 1px solid darkred;
          background-color: hsla(0, 100%, 50%, 1);
          background-image: radial-gradient(at 40% 20%, hsla(28, 100%, 74%, 1) 0px, transparent 50%),
          radial-gradient(at 80% 0%, hsla(189, 100%, 56%, 1) 0px, transparent 50%),
          radial-gradient(at 0% 50%, hsla(355, 100%, 93%, 1) 0px, transparent 50%),
          radial-gradient(at 76% 52%, hsla(340, 100%, 76%, 1) 0px, transparent 50%),
          radial-gradient(at 0% 100%, hsla(22, 100%, 77%, 1) 0px, transparent 50%),
          radial-gradient(at 79% 100%, hsla(242, 100%, 70%, 1) 0px, transparent 50%),
          radial-gradient(at 0% 0%, hsla(343, 100%, 76%, 1) 0px, transparent 50%);
        }
      }

      .block:hover {
        box-shadow: 3px 3px 4px 0 rgba(0, 0, 0, 0.7);
        border-color: rgba(0, 0, 0, 0.4);
      }
    }
  }

  @media(max-width: 1020px) {
    .container {
      .prj {
        .block {
          max-width: 20rem;
        }
      }
    }
  }
  @media(max-width: 768px) {
    .container {
      .prj {
        .block {
          max-width: 9.5rem;

          .demolink, .no-demolink {
            width: max-content;
            padding: 0.3rem 0.3rem;
            margin: 0.3rem auto;
          }
        }
      }
    }
    .table {
      font-size: 0.9rem;
      thead {font-size: 0.7rem;}
      .nomer, .number, .grade, .date {font-size: 0.5rem;}
    }
  }
}
</style>