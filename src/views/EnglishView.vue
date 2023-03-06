<script lang="ts">
import {Options, Vue} from "vue-class-component";
import englishStore from "@/store/modules/englishStore";
import Slider from "@/components/Slider.vue";
@Options({
  computed: {
    englishStore() {
      return englishStore
    }
  },
  components: {Slider},})
export default class english extends Vue {
  images = require.context('/public/english/', false, /\.jpg$/)
  sliderImages = this.images.keys().map(key => this.images(key))
  // data() {
  //   return {
  //     sliderImages: [
  //       require('@/assets/english/01 English for beginners.jpg'),
  //       require('@/assets/english/02 Conversational English.jpg'),
  //       require('@/assets/english/03 English for traveling.jpg'),
  //       require('@/assets/english/04 English for IT.jpg'),
  //       require('@/assets/english/05 Interview in English.jpg'),
  //       require('@/assets/english/06 Business English.jpg'),
  //       require('@/assets/english/07 Intermediate level of English.jpg'),
  //       require('@/assets/english/08 Irregular Verbs.jpg'),
  //       require('@/assets/english/09 English with native speaker.jpg'),
  //       require('@/assets/english/10 English for advanced.jpg'),
  //     ],
  //   }
  // }
}
</script>

<template>
  <div class="english">
    <h1>English language certificates</h1>
    <line></line>
    <div v-for="sert in englishStore.state.englishStore" class="certificate">
      <a class="block" :href="sert.image" title="Certificate..." target="_blank">
        <h3>{{ sert.id }}. {{ sert.title }}</h3>
        <div>Level: <strong>{{ sert.regnumber }}</strong></div>
        <div>Exam date: {{ sert.examdate }}</div>
      </a>
    </div>
    <div class="slider">
      <Slider :images=sliderImages></Slider>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.english {
  flex: 1 0 auto;
  .slider {
    margin: 0.3rem auto 0.3rem auto;
  }
}
</style>