<script lang="ts">
import {Options, Vue} from "vue-class-component";
import axios from "axios";

@Options({
  data() {
    return {
      cryptos: [
        {id: 'bitcoin', name: 'Bitcoin', url: 'https://www.coingecko.com/en/coins/bitcoin', price: 0},
        {id: 'ethereum', name: 'Ethereum', url: 'https://www.coingecko.com/en/coins/ethereum', price: 0},
        {id: 'litecoin', name: 'Litecoin', url: 'https://www.coingecko.com/en/coins/litecoin', price: 0},
        {id: 'tether', name: 'Tether', url: 'https://www.coingecko.com/en/coins/tether', price: 0},
        {id: 'avalanche-2', name: 'Avalanche', url: 'https://www.coingecko.com/en/coins/avalanche', price: 0},
        {id: 'filecoin', name: 'Filecoin', url: 'https://www.coingecko.com/en/coins/filecoin', price: 0},
        {id: 'bitcoin-cash', name: 'Bitcoin Cash', url: 'https://www.coingecko.com/en/coins/bitcoin-cash', price: 0},
        {id: 'binancecoin', name: 'BNB', url: 'https://www.coingecko.com/en/coins/bnb', price: 0},
        {id: 'dogecoin', name: 'Dogecoin', url: 'https://www.coingecko.com/en/coins/dogecoin', price: 0},
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
  props: {
    tableView: {
      type: Boolean,
      required: true
    }
  },
  components: {},
})
export default class Cryptocurrencies extends Vue {
}
</script>

<template>
  <div v-if="tableView" class="table">
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
        <td class="name"><a :href="crypto.url" title="In more detail..." target="_blank">{{ crypto.name }}</a>
        </td>
        <td class="price">{{ crypto.price }} <span style="color: black">{{ $t('extra.exchange.usd') }}</span></td>
      </tr>
      </tbody>
    </table>
  </div>
  <div v-else class="container">
    <div v-for="(crypto, index) in cryptos" :key="crypto.id" class="crypto">
      <a :href="crypto.url" title="In more detail..." target="_blank">
        <span class="name">{{ crypto.name }}</span>=<span class="price">{{ crypto.price }}</span>{{ $t('extra.exchange.usd') }}
      </a>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.table {
  background-color: white;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.7);
  margin-bottom: 1rem;
  .name {
    width: 20rem;
  }
  .price {
    width: 16rem;
  }
}
.container {
  margin-bottom: 1rem;
  .crypto {
    display: inline-flex;
    font-size: 2rem;
    padding: 1rem;
    margin: 0.5rem;
    border: 1px solid lightgrey;
    border-radius: 5px;
    background-color: #f1f1f1;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.7);
    transition: border-color .2s ease-in-out, background-color .2s, box-shadow .2s;
    a {text-decoration: none;}

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

  .crypto:hover {
    border-color: lightskyblue;
    box-shadow: 0 4px 8px lightsteelblue;
  }
}


@media(max-width: 1020px) {
  .crypto {
    font-size: 1.6rem;
    padding: 0.8rem;
    margin: 0.5rem;
  }
}
@media (max-width: 768px) {
  .table {
    margin-bottom: 1rem;
    .name {
      width: 9rem;
    }
    .price {
      width: fit-content;
    }
  }
  .container {
    margin-bottom: 0.5rem;
    .crypto {
      font-size: 1.5rem;
      padding: 0.6rem;
      margin: 0.4rem;
    }
  }
}
</style>