<script lang="ts">
import {Options, Vue} from "vue-class-component";
import databaseStore from "@/store/modules/certificates/databaseStore";
import Slider from "@/components/util/Slider.vue";
@Options({
  computed: {
    databaseStore() {
      return databaseStore
    }
  },
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
    </h1>
    <line></line>
    <div v-for="sert in databaseStore.state.databaseStore" class="certificate">
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
</style>