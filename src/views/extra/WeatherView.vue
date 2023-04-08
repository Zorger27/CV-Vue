<script lang="ts">
import axios from "axios";
import {Options, Vue} from "vue-class-component";

export interface Weather {
  weather: {
    description: string;
    icon: string;
    temperature: number;
    feelsLike: number;
    humidity: number;
    windSpeed: number;
  };
}

@Options({components: {},})
export default class WeatherView extends Vue {

  error: string | null | undefined;
  loading: boolean | undefined;
  weather: any;


  data() {
    return {
      loading: true,
      weather: null,
      error: null
    };
  }
    mounted()
    {
      axios
          .get(
              "https://api.openweathermap.org/data/2.5/weather?q=Kiev&units=metric&lang=ru&appid=YOUR_API_KEY"
          )
          .then(response => {
            this.weather = response.data;
          })
          .catch(error => {
            this.error = "Не удалось загрузить данные о погоде.";
          })
          .finally(() => {
            this.loading = false;
          });
    }
}
</script>

<template>
  <div class="weather">
    <h1>
      <router-link class="back" to="/extra" title="Back to Extra page"><i class="fa fa-arrow-circle-left"></i>
      </router-link>
      {{ $t('extra.h1m.weather') }}
    </h1>
    <line></line>
    <div>
      <h1>Погода в Киеве</h1>
      <div v-if="loading">Загрузка...</div>
      <div v-if="error">{{ error }}</div>
      <div v-if="weather">
        <p>Температура: {{ weather.main.temp }}°C</p>
        <p>Ощущается как: {{ weather.main.feels_like }}°C</p>
        <p>Скорость ветра: {{ weather.wind.speed }} м/с</p>
        <p>Направление ветра: {{ weather.wind.deg }}°</p>
        <p>Влажность: {{ weather.main.humidity }}%</p>
        <p>Давление: {{ weather.main.pressure }} гПа</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.weather {
  flex: 1 0 auto;

  .back {
    display: none;
    @media (max-width: 768px) {
      display: inline-flex;
      text-decoration: none;
      margin-right: 0.1rem;
    }
  }
}
</style>