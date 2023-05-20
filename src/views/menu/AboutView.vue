<script lang="ts">
import {Options, Vue} from "vue-class-component";
import infoStore from "@/store/modules/service/infoStore";

@Options({
  computed: {
    infoStore() {
      return infoStore
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

export default class About extends Vue {}
</script>

<template>
  <div class="about">
<!--    <h1>{{$t ('about.title')}}</h1>-->
    <h1 class="main">
      {{$t ('about.title')}} <i @click="changeView"><span :class="['fa', tableView ? 'fa-th' : 'fa-list']"></span></i>
    </h1>
    <line></line>
    <!--    <h2>{{$t ('about.technologies')}}</h2>-->
    <div v-if="tableView" class="table">
      <table>
        <thead>
        <tr>
          <th class="title" colspan="3">{{ $t('about.technologies') }}</th>
        </tr>
        <tr>
          <th>№</th>
          <th>{{ $t('about.name') }}</th>
          <th>{{ $t('about.version') }}</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="info in infoStore.state.infoStore" :key="info.id">
          <td class="nomer">{{ info.id }}</td>
          <td class="name"><a :href="info.url" title="In more detail..." target="_blank">{{ info.title }}</a></td>
          <td class="version">{{ info.version }}</td>
        </tr>
        </tbody>
      </table>
    </div>
    <div v-else>
      <h1 class="title" style="text-decoration: underline">{{ $t('about.technologies') }}</h1>
      <div v-for="info in infoStore.state.infoStore" :key="info.id" class="prj">
        <a class="block" :href="info.url" title="In more detail..." target="_blank">
          <h3>
            <span style="color: black">{{ info.id }}.</span> <span>{{ info.title }}</span> <span
            style="color: red">{{ info.version ? 'v.' + info.version : info.version }}</span>
          </h3>
        </a>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.about {
  flex: 1 0 auto;
  text-align: center;
  background-image: url("@/assets/background/background20.jpg");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  .main {color: mediumvioletred;}
  .name {width: 400px;}
  .version {width: 150px;}
}
.prj a {
  background: inherit;
  padding: 1.2rem;
}
.prj a:hover {
  background: linear-gradient(to bottom, rgb(229, 251, 255), rgb(255, 240, 244)) no-repeat center;
  box-shadow: 3px 3px 4px 0 rgba(0, 0, 0, 0.7);
  border-color: #bbeafa;
}

.table {
  background: inherit;
}
.title {
  color: darkgoldenrod;
  font-size: 2.5rem;
}
@media(max-width: 1020px) {
  .title {font-size: 2rem;}
  .prj a {padding: 1rem;}
}
@media (max-width: 768px) {
  .title {font-size: 1.6rem;}
  .prj a {padding: 0.8rem;}
}
</style>