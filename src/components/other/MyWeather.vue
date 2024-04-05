<script lang="ts">
import axios from "axios";
import {Options, Vue} from "vue-class-component";
import {mapGetters} from "vuex";

interface WeatherData {
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    humidity: number;
    pressure: number;
  };
  weather: [
    {
      id: number,
      main: string,
      description: string,
      icon: string
    }
  ];
  wind: {
    speed: number;
    deg: number;
  };
  sys: {
    country: string;
    sunrise: number;
    sunset: number;
  },
}
@Options({
  data() {
    return {
      loading: true as boolean | undefined,
      error: null as string | null | undefined,
      weather: null as WeatherData | null,
      cityName: '' as string,
    };
  },
  computed: {
    cities() {
      return ["Kyiv", "Odessa", "Kharkiv", "Dubai", "Antalya", "Shanghai", "Benidorm", "Valencia"].map((city, index) => {
        return this.$t(`extra.weather.cities.${city}`, index);
      });
    },
    ...mapGetters({
      vuexGetCountryName: 'getCountryName' // 'getCountryName' это имя геттера в Vuex хранилище
    }),
    countryName() {
      const countryCode = this.weather.sys.country;
      const language = this.$i18n.locale; // Получение текущего языка интерфейса
      return this.vuexGetCountryName(countryCode, language);
    }
  },
  mounted() {
    if (this.cityName) {
      this.getWeather();
    }
    this.$emit('update:cities', this.cities);
  },
  methods: {
    async getWeather() {
      this.loading = true;
      this.weather = null;
      this.error = null;

      try {
        const openWeatherMapToken = process.env["VUE_APP_OPENWEATHERMAP_TOKEN"];
        const language = this.$i18n.locale; // Получение текущего языка интерфейса
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${this.cityName}&units=metric&lang=${language}&appid=${openWeatherMapToken}`
        );
        this.weather = response.data;
      } catch (error) {
        console.error("Error fetching weather data:", error);
        this.error = `${this.$t('extra.weather.error')}: ${this.$t('extra.weather.unknown-city')}`;
      } finally {
        this.loading = false;
      }
    },
    saveCityToLocalStorage(city: string) {
      localStorage.setItem("weatherCity", city);
    },
    handleCityInputChange(city: string) {
      this.cityName = city;
      this.saveCityToLocalStorage(city);
    },
    updateCityName(city: string) {
      this.cityName = city;
      this.getWeather();
      this.saveCityToLocalStorage(city);
    },
    formatTime(timestamp: number) {
      const date = new Date(timestamp * 1000); // Преобразование в миллисекунды
      return date.toLocaleTimeString(); // Возвращает строку времени в формате по умолчанию
    },
  },
  props: {
    cityName: {
      type: String,
      required: true
    },
    tableView: {
      type: Boolean,
      required: true
    },
  },
  components: {},
})
export default class MyWeather extends Vue {}
</script>

<template>
  <div v-if="tableView && weather && weather.sys" class="table">
    <table>
      <thead>
      <tr>
        <th class="title" colspan="3">{{ $t('extra.weather.h1') }} {{ cityName }}</th>
      </tr>
      <tr>
        <th>№</th>
        <th>{{ $t('extra.weather.indicator') }}</th>
        <th>{{ $t('extra.weather.value') }}</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td class="nomer">1</td>
        <td class="name">{{ $t('extra.weather.country') }}</td>
        <td class="price">{{ countryName }}</td>
      </tr>
      <tr>
        <td class="nomer">2</td>
        <td class="name">{{ $t('extra.weather.sunrise') }}</td>
        <td class="price">{{ formatTime(weather.sys.sunrise) }}</td>
      </tr>
      <tr>
        <td class="nomer">3</td>
        <td class="name">{{ $t('extra.weather.sunset') }}</td>
        <td class="price">{{ formatTime(weather.sys.sunset) }}</td>
      </tr>
      <tr>
        <td class="nomer">4</td>
        <td class="name">{{ $t('extra.weather.description') }}</td>
        <td class="price">{{ weather.weather[0].description }}</td>
      </tr>
      <tr>
        <td class="nomer">5</td>
        <td class="name">{{ $t('extra.weather.temp') }}</td>
        <td class="price">{{ weather.main.temp }}°C</td>
      </tr>
      <tr>
        <td class="nomer">6</td>
        <td class="name">{{ $t('extra.weather.feels') }}</td>
        <td class="price">{{ weather.main.feels_like }}°</td>
      </tr>
      <tr>
        <td class="nomer">7</td>
        <td class="name">{{ $t('extra.weather.temp-min') }}</td>
        <td class="price">{{ weather.main.temp_min }}°C</td>
      </tr>
      <tr>
        <td class="nomer">8</td>
        <td class="name">{{ $t('extra.weather.temp-max') }}</td>
        <td class="price">{{ weather.main.temp_max }}°C</td>
      </tr>
      <tr>
        <td class="nomer">9</td>
        <td class="name">{{ $t('extra.weather.speed') }}</td>
        <td class="price">{{ weather.wind.speed }} m/s</td>
      </tr>
      <tr>
        <td class="nomer">10</td>
        <td class="name">{{ $t('extra.weather.direction') }}</td>
        <td class="price">{{ weather.wind.deg }}°</td>
      </tr>
      <tr>
        <td class="nomer">11</td>
        <td class="name">{{ $t('extra.weather.humidity') }}</td>
        <td class="price">{{ weather.main.humidity }}%</td>
      </tr>
      <tr>
        <td class="nomer">12</td>
        <td class="name">{{ $t('extra.weather.pressure') }}</td>
        <td class="price">{{ weather.main.pressure }} hPa</td>
      </tr>
      </tbody>
    </table>
  </div>
  <div v-else-if="!tableView && weather" class="inner">
    <div class="city">
      <h1>{{ $t('extra.weather.h1') }}{{ this.cityName }}</h1>
      <div class="indicators" v-if="weather">
        <p class="country">{{ $t('extra.weather.country') }}: {{ countryName }}</p>
        <p>{{ $t('extra.weather.sunrise') }}: {{ formatTime(weather.sys.sunrise) }}</p>
        <p>{{ $t('extra.weather.sunset') }}: {{ formatTime(weather.sys.sunset) }}</p>
        <line></line>
        <p>{{ $t('extra.weather.description') }}: {{ weather.weather[0].description }}</p>
        <p>{{ $t('extra.weather.temp') }}: {{ weather.main.temp }}°C</p>
        <p>{{ $t('extra.weather.feels') }}: {{ weather.main.feels_like }}°C</p>
        <p>{{ $t('extra.weather.temp-min') }}: {{ weather.main.temp_min }}°C</p>
        <p>{{ $t('extra.weather.temp-max') }}: {{ weather.main.temp_max }}°C</p>
        <p>{{ $t('extra.weather.speed') }}: {{ weather.wind.speed }} m/s</p>
        <p>{{ $t('extra.weather.direction') }}: {{ weather.wind.deg }}°</p>
        <p>{{ $t('extra.weather.humidity') }}: {{ weather.main.humidity }}%</p>
        <p>{{ $t('extra.weather.pressure') }}: {{ weather.main.pressure }} hPa</p>
      </div>
    </div>
  </div>
  <div v-if="loading" class="error">{{ $t('extra.weather.loading') }}</div>
  <div v-if="error" class="error">{{ error }}</div>
</template>

<style lang="scss" scoped>
.table {
  .nomer {color: black;}
  .name {color: darkblue;}
  .price {color: darkmagenta;}
  .title {font-size: 2.3rem; color: darkblue;}
  background-image: url("@/assets/background/background01.webp");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}
.inner {
  display: inline-flex;
  justify-content: center;
  align-items: center;

  .city {
    display: inline-flex;
    flex-direction: column;
    padding: 0 1rem 1rem 1rem;
    margin-bottom: 1rem;
    border: 1px solid #ddd;
    border-radius: 5px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.7);
    //box-shadow: 3px 3px 4px 0 lightgrey;
    background-image: url("@/assets/background/background01.webp");
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;

    h1 {
      text-decoration: underline;
      font-size: 2.2rem;
      color: darkblue;
      margin: 0.5rem;
    }

    .indicators {
      color: black;
      font-size: 1.9rem;
      //font-weight: bold;
      display: inline-flex;
      flex-direction: column;
      align-items: flex-start;
      padding: 0 1rem;

      p {margin: 0.3rem 0.5rem;}
      line {width: 100%;}
      .country {
        font-style: italic;
        color: #780485;
      }
    }
  }
}
.error {
  font-size: 2rem;
  font-weight: bold;
  color: darkred;
  margin: 1rem auto;
}
@media(max-width: 1020px) {
  .error {
    font-size: 1.6rem;
    font-weight: bold;
    color: darkred;
    margin: 1rem auto;
  }
}

@media (max-width: 768px) {
  .table {
    margin-bottom: 0.7rem;
    .title {font-size: 1.8rem;}
  }

  .inner {
    display: flex;
    flex-direction: column;

    .city {
      padding: 0 0.5rem;
      margin-bottom: 0.7rem;
      width: 21rem;

      h1 {
        font-size: 1.7rem;
        margin: 0.5rem 0 0.2rem 0;
      }

      .indicators {
        font-size: 1.35rem;
        font-weight: normal;
        padding: 0;
        p {margin: 0.2rem 0;}
        .country {
          font-size: 1.2rem;
          font-style: italic;
          color: #780485;
        }
      }
    }
  }
  .error {
    font-size: 1.5rem;
    font-weight: bold;
    color: darkred;
    margin: 1rem auto;
  }
}
</style>