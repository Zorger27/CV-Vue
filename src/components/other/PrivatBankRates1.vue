<script lang="ts">
import {Options, Vue} from "vue-class-component";

interface ExchangeRate {
  ccy: string;
  base_ccy: string;
  buy: string;
  sale: string;
}
@Options({
  data() {
    return {
      rates: [] as ExchangeRate[],
    };
  },
  async created() {
    const url = "https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5";
    try {
      const response = await fetch(url);
      const data = await response.json();
      this.rates = data.map((item: any) => ({
        ccy: item.ccy,
        base_ccy: item.base_ccy,
        buy: Number(item.buy).toFixed(2),
        sale: Number(item.sale).toFixed(2),
      })) as ExchangeRate[];
    } catch (error) {
      console.error(error);
    }
  },
})
export default class PrivatBankRates1 extends Vue {}
</script>

<template>
  <div class="table">
    <table>
      <thead>
      <tr>
        <th class="bank" colspan="3"><a href="https://api.privatbank.ua/#p24/exchange" title="In more detail..." target="_blank">{{ $t('extra.exchange.bank') }}</a></th>
      </tr>
      <tr>
        <th>{{ $t('extra.exchange.currency') }}</th>
        <th>{{ $t('extra.exchange.purchase') }}</th>
        <th>{{ $t('extra.exchange.sale') }}</th>
      </tr>
      </thead>
      <tbody v-if="rates.length">
      <tr v-for="(rate, index) in rates" :key="index">
        <td class="name">{{ rate.ccy }}</td>
        <td class="buy">{{ rate.buy }}</td>
        <td class="sale">{{ rate.sale }}</td>
      </tr>
      </tbody>
      <tbody v-else>
      <tr>
        <td colspan="3">{{ $t('extra.loading') }}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<style lang="scss" scoped>
.bank {
  font-size: 2.5rem;
  color: black;
  a {text-decoration: none;}
  a:hover {color: cornflowerblue;}
}
.table {
  .code {color: darkgoldenrod;}
  .price {text-align: center;}
}

@media(max-width: 1020px) {
  .bank {font-size: 2rem;}
}
@media (max-width: 768px) {
  .bank {font-size: 1.6rem;}
}
</style>