<script lang="ts">
import {Options, Vue} from "vue-class-component";
import pmStore from "@/store/modules/certificates/pmStore";
import Slider from "@/components/util/Slider.vue";
@Options({
  computed: {
    pmStore() {
      return pmStore
    }
  },
  components: {Slider},})
export default class Pm extends Vue {
  images = require.context('@/assets/certificates/pm/', false, /\.jpg$/)
  sliderImages = this.images.keys().map(key => this.images(key))
}
</script>

<template>
  <div class="pm">
    <h1>
      <router-link class="back" to="/certificates" title="Back to Certificates"><i class="fa fa-arrow-circle-left"></i>
      </router-link>
      {{ $t('cert.project') }}
    </h1>
    <line></line>
<!--    <Certificate v-for="certificate in pmStore.state.pmStore" :key="certificate.id" :certificate="certificate" />-->
    <div v-for="sert in pmStore.state.pmStore" class="certificate">
      <a class="block" :href="sert.image" title="Certificate..." target="_blank">
        <h3>{{ sert.id }}. {{ this.$i18n.locale === "ua" ? sert.titleua : sert.title }}</h3>
        <div>{{ $t('cert.number') }}: <strong>{{ sert.regnumber }}</strong></div>
        <div>{{ $t('cert.grade') }}: <strong>{{ this.$i18n.locale === "ua" ? sert.gradeua : sert.grade }}</strong></div>
        <div>{{ $t('cert.date') }}: {{ sert.examdate }}</div>
      </a>
    </div>
  </div>
  <div class="slider">
    <Slider :images=sliderImages></Slider>
  </div>
</template>

<style lang="scss" scoped>
.pm {
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
</style>