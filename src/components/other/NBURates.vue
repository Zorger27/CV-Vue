<script lang="ts">
import {Options, Vue} from "vue-class-component";
import axios from "axios";

interface ExchangeRate {
  cc: string
  txt: string
  rate: number
  exchangedate: string
}
@Options({
  data() {
    return {
      rates: [] as ExchangeRate[],
    }
  },
  created() {
    this.fetchExchangeRates()
  },
  methods: {
    async fetchExchangeRates() {
      try {
        const response = await axios.get<ExchangeRate[]>(
          'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json'
        )
        this.rates = response.data.filter(
          (rate) =>
            rate.cc === 'USD' ||
            rate.cc === 'EUR' ||
            rate.cc === 'GBP' ||
            rate.cc === 'AED' ||
            rate.cc === 'TRY' ||
            rate.cc === 'XAU' ||
            rate.cc === 'XAG' ||
            rate.cc === 'XPT' ||
            rate.cc === 'XPD'
        )
      } catch (error) {
        console.error(error)
      }
    },
  },
  props: {
    tableView2: {
      type: Boolean,
      required: true
    }
  },
  components: {},
})
export default class NBURates extends Vue {}
</script>

<template>
  <div v-if="tableView2" class="table">
    <table>
      <thead>
      <tr>
        <th class="bank" colspan="4"><a href="https://portal.bank.gov.ua/uk/8" title="In more detail..." target="_blank">{{ $t('extra.exchange.nbu') }}</a></th>
      </tr>
      <tr>
        <th>№</th>
        <th>{{ $t('extra.exchange.code') }}</th>
        <th>{{ $t('extra.exchange.currency') }}</th>
        <th>{{ $t('extra.exchange.rate') }}</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(rate, index) in rates" :key="index">
        <td class="nomer">{{ index + 1 }}</td>
        <td class="code">{{ rate.cc }}</td>
        <td class="name">{{ rate.txt }}</td>
        <td class="price">{{ rate.rate.toFixed(2) }}</td>
      </tr>
      </tbody>
    </table>
  </div>
  <div v-else>
    <h1 class="bank"><a href="https://portal.bank.gov.ua/uk/8" title="In more detail..." target="_blank">{{ $t('extra.exchange.nbu') }}</a></h1>
    <div v-for="(rate, index) in rates" :key="index" class="rates">
      <span class="name">{{ rate.txt }}</span>=<span class="price">{{ rate.rate.toFixed(2) }}</span>{{ $t('extra.exchange.uah') }}
    </div>
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
.rates {
  display: inline-flex;
  font-size: 2rem;
  padding: 1rem;
  margin: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 5px;
  background-color: #f1f1f1;
  box-shadow: 3px 3px 4px 0 lightgrey;
  .name {
    margin-right: 5px;
    color: deepskyblue;
  }
  .price {
    margin-right: 5px;
    margin-left: 5px;
    color: deeppink;
  }
}

@media(max-width: 1020px) {
  .bank {font-size: 2rem;}
  .rates {
    font-size: 1.55rem;
    padding: 0.8rem;
    margin: 0.5rem;
  }
}
@media (max-width: 768px) {
  .bank {font-size: 1.6rem;}
  .rates {
    font-size: 1.3rem;
    padding: 0.6rem;
    margin: 0.4rem;
  }
}
</style>