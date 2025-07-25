<script lang="ts">
import {Options, Vue} from "vue-class-component";
import tasksStore from "@/store/modules/project/tasksStore";
import {openGraphMixin} from "@/assets/ogimage/openGraphMixin";

@Options({
  mixins: [openGraphMixin],
  computed: {
    tasksStore() {
      return tasksStore
    }
  },
  data() {
    return {
      tableView: false
    }
  },
  mounted() {
    const mainTitle = 'JS tasks';
    const title = 'Portfolio - JS tasks';
    const metaDescription = 'Anatolii Zorin\'s Portfolio with all diplomas, certificates, interesting projects and a detailed description of the experience gained at previous jobs.';
    const description = 'Anatolii Zorin\'s Portfolio - Typical JavaScript interview tasks';
    const imageUrl = 'https://zorin.expert/assets/ogimage/extra/OG_Image_JStasks.jpg';
    const url = 'https://zorin.expert/extra/tasks';

    this.setOpenGraphTags(metaDescription, title, description, imageUrl, url);
    this.setPageTitle(mainTitle);
  },
  methods: {
    changeView() {
      this.tableView = !this.tableView;
    }
  },
  components: {},
})
export default class Tasks extends Vue {
}
</script>

<template>
  <div class="tasks">
    <h1>
      <router-link class="back" to="/extra" title="Back to Extra page"><i class="fa fa-arrow-circle-left"></i>
      </router-link>
      {{ $t('extra.h1m.tasks.title') }} <i @click="changeView" :title="tableView ? $t('extra.listView') : $t('extra.tableView')"><span :class="['fa', tableView ? 'fa-list' : 'fa-th']"></span></i>
    </h1>
    <line></line>
    <div v-if="tableView" class="table">
      <table>
        <thead>
        <tr>
          <th>№</th>
          <th>{{ $t('extra.h1m.tasks.name') }}</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="task in tasksStore.state.tasksStore" :key="task.id">
          <td class="nomer">{{ task.id }}</td>
          <td class="name">
            <router-link :to="task.url" title="Task...">
              {{ this.$i18n.locale === "ua" ? task.title_ua : this.$i18n.locale === "es" ? task.title_es : task.title_en }}
            </router-link>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
    <div v-else v-for="task in tasksStore.state.tasksStore" :key="task.id" class="diploma">
      <router-link :to="task.url" class="block" title="Task...">
        <h3><span style="color: darkgoldenrod">{{ task.id }}.</span>
          {{ this.$i18n.locale === "ua" ? task.title_ua : this.$i18n.locale === "es" ? task.title_es : task.title_en }}</h3>
      </router-link>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.tasks {
  flex: 1 0 auto;
  background-image: url("@/assets/background/background07.webp");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  .back {
    display: none;
    @media (max-width: 768px) {
      display: inline-flex;
      text-decoration: none;
      margin-right: 0.1rem;
    }
  }

  .table {
    margin: 1rem auto;
    background: linear-gradient(to bottom, rgb(229, 251, 255), rgb(255, 240, 244)) no-repeat center;
    //box-shadow: 3px 3px 4px 0 black;
    //box-shadow: 0 4px 8px rgba(0, 0, 0, 0.7);
    box-shadow: 0 4px 8px black;
    .name {
      width: 600px;
    }
  }

  .diploma, .block {
    font-size: 1.6rem;
    padding: 1.2rem;
    margin: 0;
    @media (max-width: 1020px) {
      font-size: 1.5rem;
      padding: 1rem;
      margin: 0;
    }
    @media (max-width: 768px) {
      font-size: 1.2rem;
      padding: 0.8rem;
      margin: 0;
    }
  }

  .diploma {
    a {
      border: 1px solid #780485;
      background-color: white;
      background-image:
        radial-gradient(at 0% 0%, hsla(189, 100%, 56%, 1) 0px, transparent 50%),
        radial-gradient(at 0% 100%, hsla(343, 100%, 76%, 1) 0px, transparent 50%),
        radial-gradient(at 80% 100%, hsla(28, 100%, 74%, 1) 0px, transparent 50%),
        radial-gradient(at 80% 0%, hsla(242, 100%, 70%, 1) 0px, transparent 50%);
      //box-shadow: 3px 3px 4px 0 rgba(178, 25, 170, 0.5);
      box-shadow: 3px 3px 4px 0 rgb(101, 29, 98);

      h3 {
        color: black;
      }
    }

    a:hover {
      text-decoration: none;
      color: inherit;
      border: 1px solid #bbeafa;
      box-shadow: 3px 3px 4px 0 rgba(0, 0, 0, 0.7);
      background: linear-gradient(to bottom, rgb(229, 251, 255), rgb(255, 240, 244)) no-repeat center;

      h3 {
        color: red;
      }
    }
  }

  @media (max-width: 1020px) {
    h1 {
      font-size: 1.9rem;
    }
    .table {
      margin: 0.8rem auto;
      .name {
        width: 400px;
      }
    }
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 1.7rem;
    }
    .table {
      margin: 0.5rem auto;
      .name {
        width: 280px;
      }
    }
  }
}
</style>