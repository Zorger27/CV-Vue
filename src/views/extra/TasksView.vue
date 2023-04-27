<script lang="ts">
import {Options, Vue} from "vue-class-component";
import tasksStore from "@/store/modules/project/tasksStore";

@Options({
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
      {{ $t('extra.h1m.tasks.title') }} <i @click="changeView"><span :class="['fa', tableView ? 'fa-th' : 'fa-list']"></span></i>
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
        <tr v-for="task in tasksStore.state.tasksStore">
          <td class="nomer">{{ task.id }}</td>
          <td class="name">
            <router-link :to="task.url" title="Task...">{{ this.$i18n.locale === "ua" ? task.titleua : task.title }}</router-link>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
    <div v-else v-for="task in tasksStore.state.tasksStore" class="diploma">
      <router-link :to="task.url" class="block" title="Task...">
        <h3><span style="color: darkgoldenrod">{{ task.id }}.</span> {{ this.$i18n.locale === "ua" ? task.titleua : task.title }}</h3>
      </router-link>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.tasks {
  flex: 1 0 auto;

  .back {
    display: none;
    @media (max-width: 768px) {
      display: inline-flex;
      text-decoration: none;
      margin-right: 0.1rem;
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
      //background: linear-gradient(to top, rgba(255, 255, 255, 0.5), rgba(27, 27, 217, 0.3));
      background: radial-gradient(at 0% 0%, hsla(189, 100%, 56%, 1) 0px, transparent 50%),
      radial-gradient(at 0% 100%, hsla(343, 100%, 76%, 1) 0px, transparent 50%),
      radial-gradient(at 80% 100%, hsla(28, 100%, 74%, 1) 0px, transparent 50%),
      radial-gradient(at 80% 0%, hsla(242, 100%, 70%, 1) 0px, transparent 50%);
      box-shadow: 3px 3px 4px 0 rgba(178, 25, 170, 0.5);
      h3 {color: black;}
    }
    a:hover {
      text-decoration: none;
      color: inherit;
      border: 1px solid rgba(112, 111, 111, 0.6);
      box-shadow: 3px 3px 4px 0 lightgrey;
      background: #f1f1f1;
      h3 {color: red;}
    }
  }
}
</style>