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
  components: {Slider},})
export default class english extends Vue {
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
    </h1>
    <line></line>
    <div v-for="sert in englishStore.state.englishStore" class="certificate">
      <a class="block" :href="sert.image" title="Certificate..." target="_blank">
        <h3>{{ sert.id }}. {{ sert.title }}</h3>
        <div>{{ $t('cert.level') }}<strong>{{ sert.regnumber }}</strong></div>
        <div>{{ $t('cert.date') }}{{ sert.examdate }}</div>
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
  //.slider {
  //  margin: 0.3rem auto 0.3rem auto;
  //}
}
</style>