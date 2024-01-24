<script lang="ts">
import {Options, Vue} from "vue-class-component";
import CurrentDate from "@/components/util/CurrentDate.vue";
import Cryptocurrencies from "@/components/other/Cryptocurrencies.vue";
import {openGraphMixin} from "@/assets/ogimage/openGraphMixin";

@Options({
  mixins: [openGraphMixin],
  data() {
    return {
      tableView: true
    }
  },
  mounted() {
    const mainTitle = 'Cryptocurrencies';
    const title = 'Portfolio - Cryptocurrencies';
    const metaDescription = 'Anatolii Zorin\'s Portfolio with all diplomas, certificates, interesting projects and a detailed description of the experience gained at previous jobs.';
    const description = 'Anatolii Zorin\'s Portfolio - Cryptocurrencies';
    const imageUrl = 'https://zorin.expert/assets/ogimage/extra/OG_Image_Cryptocurrencies.jpg';
    const url = 'https://zorin.expert/extra/cryptocur';

    this.setOpenGraphTags(metaDescription, title, description, imageUrl, url);
    this.setPageTitle(mainTitle);
  },
  methods: {
    changeView() {
      this.tableView = !this.tableView;
    }
  },
  components: {CurrentDate, Cryptocurrencies},
})
export default class Cryptocur extends Vue {
}
</script>

<template>
  <div class="cryptocur">
    <h1>
      <router-link class="back" to="/extra" title="Back to Extra page"><i class="fa fa-arrow-circle-left"></i>
      </router-link>
      {{ $t('extra.cryptocur.title') }}
      <i @click="changeView"><span :class="['fa', tableView ? 'fa-list' : 'fa-th']"></span></i>
    </h1>
    <line></line>
    <h2>{{ $t('extra.cryptocur.h1') }} <a href="https://www.coingecko.com" target="_blank">CoinGecko</a></h2>
    <div>
      <CurrentDate></CurrentDate>
    </div>
    <div>
      <Cryptocurrencies :table-view="tableView"></Cryptocurrencies>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.cryptocur {
  flex: 1 0 auto;
  background-image: url("@/assets/background/background03.webp");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  .back {
    display: none;
    @media (max-width: 768px) {
      display: inline-flex;
      text-decoration: none;
      margin-right: 0.1rem;
    }
  }

  .fa.fa-th {
    color: deepskyblue;
  }

  .fa.fa-list {
    color: deeppink;
  }

  h2 {
    font-size: 2rem;
    margin-bottom: 0.5rem;
  }

  @media (max-width: 768px) {
    h2 {
      font-size: 1.5rem;
    }
  }

}

</style>