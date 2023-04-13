<script lang="ts">
import {Options, Vue} from "vue-class-component";
import axios from "axios";
import CurrentDate from "@/components/util/CurrentDate.vue";

@Options({
  data() {
    return {
      cryptos: [
        {id: 'bitcoin', name: 'Bitcoin', price: 0},
        {id: 'ethereum', name: 'Ethereum', price: 0},
        {id: 'litecoin', name: 'Litecoin', price: 0},
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
              'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,litecoin&vs_currencies=usd'
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
  components: {CurrentDate},
})
export default class Cryptocurrencies extends Vue {
}
</script>

<template>
  <h2>{{ $t('extra.cryptocur.h1') }} <a href="https://www.coingecko.com" target="_blank">CoinGecko</a></h2>
  <CurrentDate></CurrentDate>
  <div v-for="(crypto, index) in cryptos" :key="index">
    <p class="crypto"><span class="name">{{ crypto.name }}</span>=<span class="price">{{ crypto.price }}</span>usd</p>
  </div>
</template>

<style lang="scss" scoped>
h2 {
  margin-bottom: 0.5rem;
}

.crypto {
  display: inline-flex;
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

</style>