<script lang="ts">
import {Options, Vue} from "vue-class-component";
import infoStore from "@/store/modules/service/infoStore";
import {openGraphMixin} from "@/assets/ogimage/openGraphMixin";

@Options({
  mixins: [openGraphMixin],
  computed: {infoStore() {return infoStore}},
  data() {
    return {
      tableView: false,
      showMore: false
    }
  },
  mounted() {
    const mainTitle = 'About this Portfolio';
    const title = 'Portfolio - About this project';
    const metaDescription = 'Anatolii Zorin\'s Portfolio with all diplomas, certificates, interesting projects and a detailed description of the experience gained at previous jobs.';
    const description = 'Anatolii Zorin\'s Portfolio';
    const imageUrl = 'https://zorin.expert/assets/ogimage/menu/OG_Image_About.jpg';
    const url = 'https://zorin.expert/about';

    this.setOpenGraphTags(metaDescription, title, description, imageUrl, url);
    this.setPageTitle(mainTitle);
  },
  methods: {changeView() {this.tableView = !this.tableView;}},
  components: {},
})

export default class About extends Vue {}
</script>

<template>
  <div class="about">
    <h1 class="main">
      {{$t ('about.title')}} <i @click="changeView" :title="tableView ? $t('extra.listView') : $t('extra.tableView')"><span :class="['fa', tableView ? 'fa-list' : 'fa-th']"></span></i>
    </h1>
    <line></line>
    <h2 @click="showMore = !showMore" class="more">{{$t ('about.more01')}}<i style="color: red; margin-left: 0.5rem"
                                                                                               class="fas fa-hand-pointer"></i></h2>
    <p v-if="showMore" style="margin: 0">{{$t ('about.more02')}}</p>
    <p v-if="showMore" style="margin: 0">{{$t ('about.more03')}}</p>
    <p v-if="showMore" style="margin: 0">{{$t ('about.more04')}}</p>
    <h3 v-if="showMore" style="color: deeppink; margin: 0.5rem">{{$t ('about.more05')}}</h3>
    <line></line>
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
    <div v-else class="div">
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
  background-image: url("@/assets/background/background20.webp");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  .main {color: mediumvioletred;}
  .name {width: 400px;}
  .version {width: 150px;}
}
.prj {
  padding: 0.8rem;
  a {
    background: inherit;
    padding: 1.2rem;
    transition: border-color .2s ease-in-out, background-color .2s, box-shadow .2s;
  }
}

.prj a:hover {
  //background: linear-gradient(to bottom, rgb(229, 251, 255), rgb(255, 240, 244)) no-repeat center;
  background-image: url("@/assets/background/background13.webp");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  //box-shadow: 3px 3px 4px 0 rgba(0, 0, 0, 0.5);
  border-color: rebeccapurple;
  box-shadow: 3px 3px 4px mediumpurple;
  //box-shadow: 3px 3px 4px 0 lightgrey;
  //border-color: #bbeafa;
}

.table {
  background: inherit;
  margin-bottom: 1rem;
}
.title {color: darkgoldenrod;font-size: 2.5rem;margin: 0.8rem 0;}

.more {
  display: inline-flex;
  color: lightseagreen;
  cursor: pointer;
  border-bottom: 1px solid transparent;
  margin: 0.5rem;
}

.more:hover,
.more:focus {
  border-bottom: 1px solid lightseagreen;
}

@media(max-width: 1020px) {
  .title {font-size: 2rem;margin: 0.8rem 0;}
  .prj {
    padding: 0.6rem;
    a {padding: 1rem;}
  }
}
@media (max-width: 768px) {
  .title {font-size: 1.6rem;margin: 0.8rem 0;}
  .table {margin-bottom: 0.5rem;}
  .prj {
    padding: 0.3rem;
    a {padding: 0.8rem;}
  }
  .div {margin-bottom: 0.5rem;}
}
</style>