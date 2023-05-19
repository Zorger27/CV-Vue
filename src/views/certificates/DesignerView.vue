<script lang="ts">
import {Options, Vue} from "vue-class-component";
import designerStore from "@/store/modules/certificates/designerStore";
import Slider from "@/components/util/Slider.vue";

@Options({
  computed: {
    designerStore() {
      return designerStore
    }
  },
  components: {Slider},
})
export default class Designer extends Vue {
  images = require.context('@/assets/certificates/designer/', false, /\.jpg$/)
  sliderImages = this.images.keys().map(key => this.images(key))
}
</script>

<template>
  <div class="designer">
    <h1>
      <router-link class="back" to="/certificates" title="Back to Certificates"><i class="fa fa-arrow-circle-left"></i>
      </router-link>
      {{ $t('cert.designer') }}
    </h1>
    <line></line>
    <div v-for="sert in designerStore.state.designerStore" class="certificate">
      <a class="block" :href="sert.image" title="Certificate..." target="_blank">
        <h3>{{ sert.id }}. {{ sert.title }}</h3>
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
.designer {
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