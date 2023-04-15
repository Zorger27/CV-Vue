<script lang="ts">
import {Options, Vue} from "vue-class-component";
import axios from "axios";

@Options({
  data() {
    return {
      cryptos: [
        {id: 'bitcoin', name: 'Bitcoin', price: 0},
        {id: 'ethereum', name: 'Ethereum', price: 0},
        {id: 'litecoin', name: 'Litecoin', price: 0},
        {id: 'tether', name: 'Tether', price: 0},
        {id: 'avalanche-2', name: 'Avalanche', price: 0},
        {id: 'filecoin', name: 'Filecoin', price: 0},
        {id: 'bitcoin-cash', name: 'Bitcoin Cash', price: 0},
        {id: 'binancecoin', name: 'Binance Coin', price: 0},
        {id: 'dogecoin', name: 'Dogecoin', price: 0},
      ],
    };
  },
  created() {
    // Получаем текущие курсы криптовалют при создании компонента
    this.fetchCryptoRates();
  },
  methods: {
    fetchCryptoRates() {
      // Получаем данные о курсах криптовалют через API CoinGecko
      axios
          .get(
              'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,litecoin,tether,avalanche-2,filecoin,bitcoin-cash,binancecoin,dogecoin&vs_currencies=usd'
          )
          .then((response) => {
            // Обновляем курсы криптовалют в нашем компоненте
            this.cryptos.forEach((crypto) => {
              crypto.price = response.data[crypto.id].usd;
            });
          })
          .catch((error) => {
            console.error(error);
          });
    },
  },
  components: {},
})
export default class Cryptocurrencies extends Vue {
}
</script>

<template>
  <div class="table">
    <table>
      <thead>
      <tr>
        <th>№</th>
        <th>{{ $t('extra.cryptocur.name') }}</th>
        <th>{{ $t('extra.cryptocur.price') }}</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(crypto, index) in cryptos" :key="crypto.id">
        <td class="nomer">{{ index + 1 }}</td>
        <td class="name">{{ crypto.name }}</td>
        <td class="price">{{ crypto.price }} <span style="color: black">usd</span></td>
      </tr>
      </tbody>
    </table>
  </div>

  <!--  // Это просто другой ВИД курсов криптовалют-->
  <!--  <div v-for="(crypto, index) in cryptos" :key="crypto.id" class="crypto">-->
  <!--      <span class="name">{{ crypto.name }}</span>=-->
  <!--      <span class="price">{{ crypto.price }}</span>usd-->
  <!--  </div>-->
</template>

<style lang="scss" scoped>

.table {
  display: inline-flex;
  font-size: 2rem;
  color: black;
  border: 1px solid #ddd;
  padding: 1rem;
  margin: 0.5rem;
  border-radius: 5px;
  background-color: rgba(220, 219, 219, 0.2);
  box-shadow: 3px 3px 4px 0 lightgrey;

  table {
    border-collapse: collapse;
  }

  tr, td, th {
    border: 1px solid #ddd;
    padding: 0.5rem;
  }

  .nomer {
    width: 70px;
  }

  .name {
    text-align: left;
    color: deepskyblue;
    width: 300px;
  }

  .price {
    text-align: right;
    color: deeppink;
    width: 250px;
  }
}

.crypto {
  display: inline-flex;
  font-size: 2rem;
  padding: 1rem;
  margin: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 5px;
  background-color: #f1f1f1;
  box-shadow: 3px 3px 4px 0 lightgrey;

  .name {
    font-weight: bold;
    margin-right: 5px;
    color: deepskyblue;
  }

  .price {
    font-weight: bold;
    margin-right: 5px;
    margin-left: 5px;
    color: deeppink;
  }
}

@media(max-width: 1020px) {
  .crypto {
    font-size: 1.55rem;
    padding: 0.8rem;
    margin: 0.5rem;
  }
  .table {
    font-size: 1.55rem;
    padding: 0.8rem;
    margin: 0.5rem;

    tr, td, th {
      padding: 0.4rem;
    }
  }
}

@media (max-width: 768px) {
  .crypto {
    font-size: 1.3rem;
    padding: 0.6rem;
    margin: 0.4rem;
  }
  .table {
    font-size: 1.3rem;
    padding: 0;
    margin: 0.3rem;
    border: none;
    border-radius: unset;

    tr, td, th {
      padding: 0.3rem;
    }
    .nomer {
      width: max-content;
    }
    .name {
      width: max-content;
    }
    .price {
      width: max-content;

    }
  }
}

</style>