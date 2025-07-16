<script>
import {Options, Vue} from "vue-class-component";
import CurrentDate from "@/components/util/CurrentDate.vue";
import NBURates from "@/components/other/NBURates.vue";
import NBURatesCreepJS from "@/components/other/NBURatesCreepJS.vue";
import NBURatesCreep3d from "@/components/other/NBURatesCreep3d.vue";
import {openGraphMixin} from "@/assets/ogimage/openGraphMixin";

@Options({
  mixins: [openGraphMixin],
  data() {
    return {
      tableView: false,
      ratesCreepView3d: false,
      cripView: true,
      speed: 1,
    }
  },
  mounted() {
    const mainTitle = 'Currency Rates';
    const title = 'Portfolio - Exchange rates';
    const metaDescription = 'Anatolii Zorin\'s Portfolio with all diplomas, certificates, interesting projects and a detailed description of the experience gained at previous jobs.';
    const description = 'Anatolii Zorin\'s Portfolio - Exchange rates by National Bank of Ukraine';
    const imageUrl = 'https://zorin.expert/assets/ogimage/extra/OG_Image_Rates.jpg';
    const url = 'https://zorin.expert/extra/rates';

    this.setOpenGraphTags(metaDescription, title, description, imageUrl, url);
    this.setPageTitle(mainTitle);
  },
  methods: {
    changeView() {
      this.tableView = !this.tableView;
    },
    changeCrip() {
      this.cripView = !this.cripView;
    },
    changeRatesCreep3d() {
      this.ratesCreepView3d = !this.ratesCreepView3d;
    },
  },
  components: {NBURatesCreep3d, NBURatesCreepJS, NBURates, CurrentDate},
})
export default class CurrencyRates extends Vue {
}

</script>

<template>
  <div class="exchange">
    <h1>
      <router-link class="back" to="/extra" title="Back to Extra page"><i class="fa fa-arrow-circle-left"></i></router-link>
      {{ $t('extra.exchange.title') }}
    </h1>
    <line></line>
    <CurrentDate></CurrentDate>
    <h1 class="bank">
      <a href="https://bank.gov.ua/ua/open-data/api-dev" title="In more detail..." target="_blank">
        {{ $t('extra.exchange.nbu') }}
      </a> <i @click="changeView" :title="tableView ? $t('extra.listView') : $t('extra.tableView')"><span :class="['fa', tableView ? 'fa-list' : 'fa-th']"></span></i> <i
      @click="changeRatesCreep3d" :title="ratesCreepView3d ? $t('extra.exchange.cripView3dClose') : $t('extra.exchange.cripView3dStart')"><span :class="['fa', ratesCreepView3d ? 'fa-yin-yang' : 'fa-sack-dollar']"></span></i> <i
      @click="changeCrip" :title="cripView ? $t('extra.exchange.cripViewClose') : $t('extra.exchange.cripViewStart')"> <span :class="['fa', cripView ? 'fa-face-grin-stars' : 'fa-wallet']"></span></i> <input
      :title="$t('extra.exchange.cripSpeed')" v-show="cripView" type="range" v-model.number="speed" min="0" max="6" step="0.2"/>
    </h1>
    <div class="creep3d">
      <NBURatesCreep3d :rates-creep-view3d="ratesCreepView3d"></NBURatesCreep3d>
    </div>
    <NBURatesCreepJS class="creep" :crip-view="cripView" :speed="speed"></NBURatesCreepJS>
    <NBURates :table-view="tableView"></NBURates>
  </div>
</template>

<style lang="scss" scoped>
.exchange {
  flex: 1 0 auto;
  background-image: url("@/assets/background/background14.webp");
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

  .bank {
    font-size: 2.5rem;
    background: transparent;
    a {text-decoration: none;color: rebeccapurple;}
    a:hover {color: cornflowerblue;}
  }
  .creep3d {
    background: transparent;
    max-height: 30vh;
    max-width: 100%;
    position: relative;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .creep {
    background: transparent;
  }
}

@media(max-width: 1020px) {
  .exchange {
    .bank {font-size: 2.3rem;margin: 0.6rem auto;}
  }
}

@media (max-width: 768px) {
  .exchange {
    .bank {font-size: 2rem;margin: 0.5rem auto;}
  }
}
</style>