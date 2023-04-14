<script lang="ts">
import {Options, Vue} from "vue-class-component";
import CurrentDate from "@/components/util/CurrentDate.vue";
import Cryptocurrencies1 from "@/components/other/Cryptocurrencies1.vue";
import Cryptocurrencies2 from "@/components/other/Cryptocurrencies2.vue";
import Cryptocurrencies3 from "@/components/other/Cryptocurrencies3.vue";

@Options({
  components: {Cryptocurrencies3, Cryptocurrencies2, CurrentDate, Cryptocurrencies1},
})
export default class CryptocurView extends Vue {
}
</script>

<template>
  <div class="cryptocur">
    <h1>
      <router-link class="back" to="/extra" title="Back to Extra page"><i class="fa fa-arrow-circle-left"></i>
      </router-link>
      {{ $t('extra.cryptocur.title') }}
    </h1>
    <line></line>
    <h2>{{ $t('extra.cryptocur.h1') }} <a href="https://www.coingecko.com" target="_blank">CoinGecko</a></h2>
    <div><CurrentDate></CurrentDate></div>
    <div><Cryptocurrencies1></Cryptocurrencies1></div>
    <div><Cryptocurrencies2></Cryptocurrencies2></div>
    <div><Cryptocurrencies3></Cryptocurrencies3></div>
  </div>
</template>

<style lang="scss" scoped>
.cryptocur {
  flex: 1 0 auto;

  .back {
    display: none;
    @media (max-width: 768px) {
      display: inline-flex;
      text-decoration: none;
      margin-right: 0.1rem;
    }
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