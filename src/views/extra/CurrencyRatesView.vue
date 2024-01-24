<script>
import {Options, Vue} from "vue-class-component";
import CurrentDate from "@/components/util/CurrentDate.vue";
import NBURates from "@/components/other/NBURates.vue";
import {openGraphMixin} from "@/assets/ogimage/openGraphMixin";

@Options({
  mixins: [openGraphMixin],
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
  components: {NBURates, CurrentDate},
})
export default class CurrencyRates extends Vue {
}

</script>

<template>
  <div class="exchange">
    <h1>
      <router-link class="back" to="/extra" title="Back to Extra page"><i class="fa fa-arrow-circle-left"></i>
      </router-link>
      {{ $t('extra.h1m.exchange') }}
    </h1>
    <line></line>
    <div><CurrentDate></CurrentDate></div>
    <div><NBURates></NBURates></div>
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
  .fa.fa-th {color: deepskyblue;}
  .fa.fa-list {color: deeppink;}
}
</style>