<script lang="ts">
import {Options, Vue} from "vue-class-component";
import CurrentDate from "@/components/util/CurrentDate.vue";
import Cryptocurrencies from "@/components/other/Cryptocurrencies.vue";
import CryptosCreep3d from "@/components/other/CryptosCreep3d.vue";
import CryptosCreep from "@/components/other/CryptosCreep.vue";
import {openGraphMixin} from "@/assets/ogimage/openGraphMixin";

@Options({
  mixins: [openGraphMixin],
  data() {
    return {
      tableView: false,
      cripView: true,
      cryptosCreepView3d: false,
      speed: 1,
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
    this.setCanonical(url);
  },
  methods: {
    changeView() {
      this.tableView = !this.tableView;
    },
    changeCrip() {
      this.cripView = !this.cripView;
    },
    changeCryptosCreepView3d() {
      this.cryptosCreepView3d = !this.cryptosCreepView3d;
    },
  },
  components: {CryptosCreep, CryptosCreep3d, CurrentDate, Cryptocurrencies},
})
export default class Cryptocur extends Vue {
}
</script>

<template>
  <div class="cryptocur">
    <h1>
      <router-link class="back" to="/extra" title="Back to Extra page"><i class="fa fa-arrow-circle-left"></i></router-link>
      {{ $t('extra.cryptocur.title') }}
    </h1>
    <line></line>
    <CurrentDate></CurrentDate>
    <h1 class="bank"> {{ $t('extra.cryptocur.h1') }}
      <a href="https://www.coingecko.com" title="In more detail..." target="_blank">
        CoinGecko
      </a> <i @click="changeView" :title="tableView ? $t('extra.listView') : $t('extra.tableView')"><span :class="['fa', tableView ? 'fa-list' : 'fa-th']"></span></i> <i
        @click="changeCryptosCreepView3d" :title="cryptosCreepView3d ? $t('extra.cryptocur.cripView3dClose') : $t('extra.cryptocur.cripView3dStart')"><span :class="['fa-brands', cryptosCreepView3d ? 'fa-ethereum' : 'fa-bitcoin']"></span></i> <i
        @click="changeCrip" :title="cripView ? $t('extra.cryptocur.cripViewClose') : $t('extra.cryptocur.cripViewStart')"> <span :class="['fa', cripView ? 'fa-face-grin-stars' : 'fa-wallet']"></span></i> <input
        :title="$t('extra.cryptocur.cripSpeed')" v-show="cripView" type="range" v-model.number="speed" min="0" max="6" step="0.2"/>
    </h1>
    <div class="creep3d">
      <CryptosCreep3d :cryptos-creep-view3d="cryptosCreepView3d"></CryptosCreep3d>
    </div>
    <CryptosCreep class="creep" :crip-view="cripView" :speed="speed"></CryptosCreep>
    <Cryptocurrencies :table-view="tableView"></Cryptocurrencies>
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

  .bank {
    font-size: 2.5rem;
    background: transparent;
    a {text-decoration: none;color: rebeccapurple;}
    a:hover {color: cornflowerblue;}
  }
  .creep3d {
    background: transparent;
    max-height: 20vh;
    max-width: 100%;
    position: relative;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    background: none;
  }

  .creep {
    background: transparent;
  }
}

@media(max-width: 1020px) {
  .cryptocur {
    .bank {font-size: 2.3rem;margin: 0.6rem auto;}
  }
}

@media (max-width: 768px) {
  .cryptocur {
    .bank {font-size: 2rem;margin: 0.5rem auto;}
  }
}

</style>