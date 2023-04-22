<script>
import {Options, Vue} from "vue-class-component";
import axios from "axios";

@Options({
  data() {
    return {
      loading: false,
      rates: [
        {ccy: "EUR", base_ccy: "UAH", buy: "", sale: ""},
        {ccy: "USD", base_ccy: "UAH", buy: "", sale: ""},
      ],
    };
  },
  created() {
    // Получаем текущие курсы валют при создании компонента
    this.fetchCurrencyRates();
  },
  methods: {
    fetchCurrencyRates() {
      // Получаем данные о курсах валют через API PrivatBank
      this.loading = true;
      axios
        .get('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5')
        // https://api.privatbank.ua/p24api/pubinfo?exchange&coursid=5
        // https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5
        .then((response) => {
          const rates = [];
          response.data.forEach(item => {
            rates.push({
              ccy: item.ccy,
              base_ccy: item.base_ccy,
              buy: item.buy,
              sale: item.sale,
            });
          });
          this.rates = rates;
        })
        .catch((error) => {
          console.error(error);
        })
        .finally(() => {
          this.loading = false;
        });
    },
  },
  components: {},
})
export default class PrivatBankRates2 extends Vue {
}

</script>

<template>
  <div v-if="loading">Загрузка...</div>
  <div v-if="rates" class="table">
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
      <tbody>
      <tr v-for="(rate, index) in rates" :key="index">
        <td class="name">{{ rate.ccy }}</td>
        <td class="buy">{{ rate.buy }}</td>
        <td class="sale">{{ rate.sale }}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<style lang="scss" scoped>
.table {
  .bank {
    font-size: 2.5rem;
    color: black;
    a {text-decoration: none;}
    a:hover {color: cornflowerblue;}
  }
  .name {
    text-align: center;
    color: deepskyblue;
    width: 300px;
  }

  .buy {
    text-align: center;
    color: deeppink;
    width: 250px;
  }

  .sale {
    text-align: center;
    color: mediumseagreen;
    width: 250px;
  }
}

@media(max-width: 1020px) {
  .table {
    .bank {font-size: 2rem;}
  }
}

@media (max-width: 768px) {
  .table {
    .bank {font-size: 1.6rem;}
    .name, .buy, .sale {width: max-content;}
  }
}
</style>