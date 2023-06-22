<script lang="ts">
import {Options, Vue} from "vue-class-component";
import englishStore from "@/store/modules/certificates/englishStore";
import Slider from "@/components/util/Slider.vue";
@Options({
  computed: {
    englishStore() {
      return englishStore
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
  components: {Slider},})
export default class English extends Vue {
  images = require.context('@/assets/certificates/english/', false, /\.jpg$/)
  sliderImages = this.images.keys().map(key => this.images(key))
  // data() {
  //   return {
  //     sliderImages: [
  //       require('@/assets/english/01_English_for_beginners.jpg'),
  //       require('@/assets/english/02_Conversational_English.jpg'),
  //       require('@/assets/english/03_English_for_traveling.jpg'),
  //       require('@/assets/english/04_English_for_IT.jpg'),
  //       require('@/assets/english/05_Interview_in_English.jpg'),
  //       require('@/assets/english/06_Business_English.jpg'),
  //       require('@/assets/english/07_Intermediate_level_of_English.jpg'),
  //       require('@/assets/english/08_Irregular_Verbs.jpg'),
  //       require('@/assets/english/09_English_with_native_speaker.jpg'),
  //       require('@/assets/english/10_English_for_advanced.jpg'),
  //     ],
  //   }
  // }
}
</script>

<template>
  <div class="english">
    <h1>
      <router-link class="back" to="/certificates" title="Back to Certificates"><i class="fa fa-arrow-circle-left"></i>
      </router-link>
      {{ $t('cert.english') }}
      <i @click="changeView"><span :class="['fa', tableView ? 'fa-list' : 'fa-th']"></span></i>
    </h1>
    <line></line>
    <div v-if="tableView" class="table">
      <table>
        <thead>
        <tr>
          <th>№</th>
          <th>{{ $t('cert.title') }}</th>
          <th>{{ $t('cert.level') }}</th>
          <th>{{ $t('cert.grade') }}</th>
          <th>{{ $t('cert.date') }}</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="sert in englishStore.state.englishStore" :key="sert.id">
          <td class="nomer">{{ sert.id }}</td>
          <td class="name"><a :href="sert.image" title="In more detail..." target="_blank">{{ this.$i18n.locale === "ua" ? sert.title_ua : this.$i18n.locale === "es" ? sert.title_es : sert.title_en }}</a></td>
          <td class="number">{{ sert.regnumber }}</td>
          <td class="grade">{{ this.$i18n.locale === "ua" ? sert.grade_ua : this.$i18n.locale === "es" ? sert.grade_es : sert.grade_en }}</td>
          <td class="date">{{ sert.examdate }}</td>
        </tr>
        </tbody>
      </table>
    </div>
    <div v-else v-for="sert in englishStore.state.englishStore" :key="sert.id" class="certificate">
      <a class="block" :href="sert.image" title="Certificate..." target="_blank">
        <h3>{{ sert.id }}. {{ this.$i18n.locale === "ua" ? sert.title_ua : this.$i18n.locale === "es" ? sert.title_es : sert.title_en }}</h3>
        <div>{{ $t('cert.level') }}: <strong>{{ sert.regnumber }}</strong></div>
        <div>{{ $t('cert.grade') }}: <strong>{{ this.$i18n.locale === "ua" ? sert.grade_ua : this.$i18n.locale === "es" ? sert.grade_es : sert.grade_en }}</strong></div>
        <div>{{ $t('cert.date') }}: {{ sert.examdate }}</div>
      </a>
    </div>
  </div>
  <div class="slider">
    <Slider :images=sliderImages></Slider>
  </div>
</template>

<style lang="scss" scoped>
.english {
  flex: 1 0 auto;
  .back {
    display: none;
    @media (max-width: 768px) {
      display: inline-flex;
      text-decoration: none;
      color: limegreen;
      margin-right: 0.1rem;
      i:hover {
        color: green;
      }
    }
  }
}
.slider {margin-bottom: 1rem;}

@media(max-width:768px) {
  .slider {margin-bottom: 0.3rem;}
  .diplom, .title {font-size: 1.2rem}
  .table {
    font-size: 0.9rem;
    .nomer, .number, .grade, .date {font-size: 0.5rem;}
  }
}
</style>