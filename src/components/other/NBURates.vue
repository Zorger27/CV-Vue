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
        const response = await axios.get<ExchangeRate[]>("https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json");
        // Оставляем только выбранные валюты
        this.rates = response.data.filter(rate => ["USD", "EUR", "GBP", "AED", "TRY", "XAU", "XAG", "XPT", "XPD"].includes(rate.cc));
      } catch (error) {
        console.error(error);
      }
    },
  },
  props: {
    tableView: {
      type: Boolean,
      required: true
    }
  },
  components: {},
})
export default class NBURates extends Vue {}
</script>

<template>
  <div v-if="tableView" class="table">
    <table>
      <thead>
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
  <div v-else class="inner">
    <div v-for="(rate, index) in rates" :key="index" class="rates">
      <span class="name">{{ rate.txt }}</span>=<span class="price">{{ rate.rate.toFixed(2) }}</span>{{ $t('extra.exchange.uah') }}
    </div>
  </div>
</template>

<style lang="scss" scoped>
.bank {
  font-size: 2.5rem;
  margin: 0;
  a {text-decoration: none; color: rebeccapurple;}
  a:hover {color: cornflowerblue;}
}
.inner {
  margin-bottom: 1rem;
  .rates {
    display: inline-flex;
    font-size: 2rem;
    padding: 1rem;
    margin: 0.5rem;
    border: 1px solid lightgrey;
    border-radius: 5px;
    background-color: #f1f1f1;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.7);
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
}

@media(max-width: 1020px) {
  .bank {font-size: 2rem;}
  .inner {
    .rates {
      font-size: 1.6rem;
      padding: 0.8rem;
      margin: 0.5rem;
    }
  }
}
@media (max-width: 768px) {
  .bank {font-size: 1.6rem;}
  .inner {
    margin-bottom: 0.5rem;
    .rates {
      font-size: 1.5rem;
      padding: 0.6rem;
      margin: 0.4rem;
    }
  }
}
</style>