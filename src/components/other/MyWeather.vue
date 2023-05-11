<script lang="ts">
import axios from "axios";
import {Options, Vue} from "vue-class-component";
import {WeatherData} from "@/store/types";
import CurrentDate from "@/components/util/CurrentDate.vue";

@Options({
  data() {
    return {
      loading: true,
      error: null
    };
  },
  components: {CurrentDate},
})
export default class WeatherView extends Vue {
  error: string | null | undefined;
  loading: boolean | undefined;
  weather: WeatherData | null = null;

  mounted() {
    const openWeatherMapToken = process.env.VUE_APP_OPENWEATHERMAP_TOKEN;
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=Kiev&units=metric&lang=ru&appid=${openWeatherMapToken}`
      )
      .then(response => {
        this.weather = response.data;
      })
      .catch(error => {
        this.error = `${this.$t('extra.weather.error')}`;
      })
      .finally(() => {
        this.loading = false;
      });
  }
}
</script>

<template>
  <div class="inner">
    <div class="city">
      <h1>{{ $t('extra.weather.h1') }}</h1>
      <CurrentDate></CurrentDate>
      <div v-if="loading">{{ $t('extra.loading') }}</div>
      <div v-if="error">{{ error }}</div>
      <div class="indicators" v-if="weather">
        <p>{{ $t('extra.weather.temp') }}: {{ weather.main.temp }}°C</p>
        <p>{{ $t('extra.weather.feels') }}: {{ weather.main.feels_like }}°C</p>
        <p>{{ $t('extra.weather.speed') }}: {{ weather.wind.speed }} m/s</p>
        <p>{{ $t('extra.weather.direction') }}: {{ weather.wind.deg }}°</p>
        <p>{{ $t('extra.weather.humidity') }}: {{ weather.main.humidity }}%</p>
        <p>{{ $t('extra.weather.pressure') }}: {{ weather.main.pressure }} hPa</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.inner {
  display: inline-flex;
  justify-content: center;
  align-items: center;

  .city {
    display: inline-flex;
    flex-direction: column;
    padding: 0 1rem 1rem 1rem;
    margin: 1rem;
    border: 1px solid #ddd;
    border-radius: 5px;
    box-shadow: 3px 3px 4px 0 lightgrey;
    background-image: url("@/assets/img/background1.jpg");
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;

    h1 {
      text-decoration: underline;
      color: darkblue;
      margin: 0.5rem;
    }

    .indicators {
      font-weight: bold;
      display: inline-flex;
      flex-direction: column;
      align-items: flex-start;
      padding: 0 1rem 0 1rem;

      p {
        margin: 0.5rem;
      }
    }
  }
}

@media (max-width: 768px) {
  .inner {
    display: flex;
    flex-direction: column;

    .city {
      h1 {
        margin: 0.5rem 0 0.2rem 0;
      }

      .indicators {
        padding: 0;

        p {
          margin: 0.2rem 0;
        }
      }
    }
  }
}
</style>