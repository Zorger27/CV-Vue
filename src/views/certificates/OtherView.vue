<script lang="ts">
import {Options, Vue} from "vue-class-component";
import otherStore from "@/store/modules/certificates/otherStore";
import Slider from "@/components/util/Slider.vue";

@Options({
  computed: {
    otherStore() {
      return otherStore
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
  components: {Slider},
})
export default class Other extends Vue {
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
      <i @click="changeView"><span :class="['fa', tableView ? 'fa-th' : 'fa-list']"></span></i>
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
        <tr v-for="sert in otherStore.state.otherStore" :key="sert.id">
          <td class="nomer">{{ sert.id }}</td>
          <td class="name"><a :href="sert.image" title="In more detail..." target="_blank">{{
              this.$i18n.locale === "ua" ? sert.title_ua : this.$i18n.locale === "es" ? sert.title_es : sert.title_en
            }}</a></td>
          <td class="number">{{ sert.regnumber }}</td>
          <td class="grade">{{
              this.$i18n.locale === "ua" ? sert.grade_ua : this.$i18n.locale === "es" ? sert.grade_es : sert.grade_en
            }}
          </td>
          <td class="date">{{ sert.examdate }}</td>
        </tr>
        </tbody>
      </table>
    </div>
    <div v-else v-for="sert in otherStore.state.otherStore" :key="sert.id" class="certificate">
      <a class="block" :href="sert.image" title="Certificate..." target="_blank">
        <h3>{{ sert.id }}. {{
            this.$i18n.locale === "ua" ? sert.title_ua : this.$i18n.locale === "es" ? sert.title_es : sert.title_en
          }}</h3>
        <div>{{ $t('cert.number') }}: <strong>{{ sert.regnumber }}</strong></div>
        <div>{{ $t('cert.grade') }}: <strong>{{
            this.$i18n.locale === "ua" ? sert.grade_ua : this.$i18n.locale === "es" ? sert.grade_es : sert.grade_en
          }}</strong></div>
        <div>{{ $t('cert.date') }}: {{ sert.examdate }}</div>
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
}
.slider {margin-bottom: 1rem;}

@media(max-width: 768px) {
  .slider {margin-bottom: 0.3rem;}
  .diplom, .title {
    font-size: 1.2rem
  }
  .table {
    font-size: 0.9rem;

    .nomer, .number, .grade, .date {
      font-size: 0.5rem;
    }
  }
}
</style>