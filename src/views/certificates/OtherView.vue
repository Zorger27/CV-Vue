<script lang="ts">
import {Options, Vue} from "vue-class-component";
import otherStore from "@/store/modules/certificates/otherStore";
import Slider from "@/components/util/Slider.vue";

@Options({
  computed: {otherStore() {return otherStore}},
  components: {Slider},})
export default class other extends Vue {
  images = require.context('@/assets/certificates/other/', false, /\.jpg$/)
  sliderImages = this.images.keys().map(key => this.images(key))
}
</script>

<template>
  <div class="other">
    <h1>
      <router-link class="back" to="/certificates" title="Back to Certificates"><i class="fa fa-arrow-circle-left"></i>
      </router-link>
      {{ $t('cert.other') }}
    </h1>
    <line></line>
      <div v-for="sert in otherStore.state.otherStore" class="certificate">
        <a class="block" :href="sert.image" title="Certificate..." target="_blank">
          <h3>{{ sert.id }}. {{ this.$i18n.locale === "ua" ? sert.titleua : sert.title }}</h3>
          <div>{{ $t('cert.number') }}<strong>{{ sert.regnumber }}</strong></div>
          <div>{{ $t('cert.grade') }}<strong>{{ this.$i18n.locale === "ua" ? sert.gradeua : sert.grade }}</strong></div>
          <div>{{ $t('cert.date') }}{{ sert.examdate }}</div>
        </a>
      </div>
  </div>
  <div class="slider">
    <Slider :images=sliderImages></Slider>
  </div>
</template>

<style lang="scss" scoped>
.other {
  flex: 1 0 auto;
  .back {
    display: none;
    @media (max-width: 768px) {
      display: inline-flex;
      text-decoration: none;
      margin-right: 0.1rem;
    }
  }
  //.slider {
  //  margin: 0.3rem auto 0.3rem auto;
  //}
}
</style>