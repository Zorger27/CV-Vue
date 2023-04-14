<script lang="ts">
import {Options, Vue} from "vue-class-component";
import axios from "axios";

@Options({
  data() {
    return {
      cryptos: [
        {id: 'bitcoin-cash', name: 'Bitcoin Cash', price: 0},
        {id: 'binancecoin', name: 'Binance Coin', price: 0},
        {id: 'avalanche-2', name: 'Avalanche', price: 0},
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
              'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin-cash,binancecoin,avalanche-2&vs_currencies=usd'
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
export default class Cryptocurrencies3 extends Vue {
}
</script>

<template>
  <div v-for="(crypto, index) in cryptos" :key="index" class="crypto">
    <span class="name">{{ crypto.name }}</span>=
    <span class="price">{{ crypto.price }}</span>usd
  </div>
</template>

<style lang="scss" scoped>

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
@media(max-width:1020px) {
  .crypto {
    font-size: 1.55rem;
    padding: 0.8rem;
    margin: 0.5rem;
  }
}

@media (max-width: 768px) {
  .crypto {
    font-size: 1.3rem;
    padding: 0.6rem;
    margin: 0.4rem;
  }
}

</style>