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
      cripView3d: false,
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
    changeCrip3d() {
      this.cripView3d = !this.cripView3d;
    },
  },
  components: {NBURatesCreep3d, NBURatesCreepJS, NBURates, CurrentDate},
})
export default class CurrencyRates extends Vue {
}

</script>

<template>
  <div class="exchange">
    <h1>{{ $t('extra.exchange.title') }}</h1>
    <line></line>
    <CurrentDate></CurrentDate>
    <h1 class="bank">
      <a href="https://bank.gov.ua" title="In more detail..." target="_blank">
        {{ $t('extra.exchange.nbu') }}
      </a> <i @click="changeView"><span :class="['fa', tableView ? 'fa-list' : 'fa-th']"></span></i>
      <i @click="changeCrip3d"><span :class="['fa', cripView3d ? 'fa-gift' : 'fa-yin-yang']"></span></i> <i
      @click="changeCrip"> <span :class="['fa', cripView ? 'fa-check-circle' : 'fa-sack-dollar']"></span></i> <input
      v-show="cripView" type="range" v-model.number="speed" min="0" max="4" step="0.2" />
    </h1>
    <div class="creep3d">
      <NBURatesCreep3d :crip-view3d="cripView3d"></NBURatesCreep3d>
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
  h1 {
    font-size: 2.5rem;
    margin: 0.7rem auto;
    color: black;
  }

  .bank {
    font-size: 2.5rem;
    a {text-decoration: none;color: rebeccapurple;}
    a:hover {color: cornflowerblue;}
  }
  .creep3d {
    max-height: 30vh;
    max-width: 100%;
    position: relative;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .creep {
    background: none;
  }
}

@media(max-width: 1020px) {
  .exchange {
    h1 {
      font-size: 2.3rem;
      margin: 0.6rem auto;
    }
    .bank {font-size: 2rem;}
  }
}

@media (max-width: 768px) {
  .exchange {
    h1 {
      font-size: 2rem;
      margin: 0.5rem auto;
    }
    .bank {font-size: 1.6rem;}
  }
}
</style>