<script lang="ts">
import {Options, Vue} from "vue-class-component";
import databaseStore from "@/store/modules/certificates/databaseStore";
import Slider from "@/components/util/Slider.vue";
@Options({
  computed: {
    databaseStore() {return databaseStore}},
  data() {return {tableView: false}},
  methods: {changeView() {this.tableView = !this.tableView;}},
  components: {Slider},})
export default class Database extends Vue {
  images = require.context('@/assets/certificates/database/', false, /\.jpg$/)
  sliderImages = this.images.keys().map(key => this.images(key))
}
</script>

<template>
  <div class="database">
    <h1>
      <router-link class="back" to="/certificates" title="Back to Certificates"><i class="fa fa-arrow-circle-left"></i>
      </router-link>
      {{ $t('cert.database') }}
      <i @click="changeView"><span :class="['fa', tableView ? 'fa-list' : 'fa-th']"></span></i>
    </h1>
    <line></line>
    <div v-if="tableView" class="table">
      <table>
        <thead>
        <tr>
          <th>№</th>
          <th>{{ $t('cert.title') }}</th>
          <th>{{ $t('cert.number') }}</th>
          <th>{{ $t('cert.grade') }}</th>
          <th>{{ $t('cert.date') }}</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="sert in databaseStore.state.databaseStore" :key="sert.id">
          <td class="nomer">{{ sert.id }}</td>
          <td class="name"><a :href="sert.image" title="In more detail..." target="_blank">{{ this.$i18n.locale === "ua" ? sert.title_ua : this.$i18n.locale === "es" ? sert.title_es : sert.title_en }}</a></td>
          <td class="number">{{ sert.regnumber }}</td>
          <td class="grade">{{ sert.grade }}</td>
          <td class="date">{{ sert.examdate }}</td>
        </tr>
        </tbody>
      </table>
    </div>
    <div v-else v-for="sert in databaseStore.state.databaseStore" :key="sert.id" class="certificate">
      <a class="block" :href="sert.image" title="Certificate..." target="_blank">
        <h3>{{ sert.id }}. {{ this.$i18n.locale === "ua" ? sert.title_ua : this.$i18n.locale === "es" ? sert.title_es : sert.title_en }}</h3>
        <div>{{ $t('cert.number') }}: <strong>{{ sert.regnumber }}</strong></div>
        <div>{{ $t('cert.grade') }}: <strong>{{ sert.grade }}</strong></div>
        <div>{{ $t('cert.date') }}: {{ sert.examdate }}</div>
      </a>
    </div>
  </div>
  <div class="slider">
    <Slider :images=sliderImages></Slider>
  </div>
</template>

<style lang="scss" scoped>
.database {
  flex: 1 0 auto;
  .back {
    display: none;
    @media (max-width: 768px) {
      display: inline-flex;
      text-decoration: none;
      margin-right: 0.1rem;
    }
  }
}
.slider {margin-bottom: 1rem;}

@media(max-width:768px) {
  .slider {margin-bottom: 0.3rem;}
  .diplom, .title {font-size: 1.2rem}
  .table {
    font-size: 0.9rem;
    .name {width: 12rem;}
    .nomer, .number, .grade, .date {font-size: 0.5rem;}
  }
}
</style>