<script lang="ts">
import axios from "axios";
import {Options, Vue} from "vue-class-component";
import {WeatherData} from "@/store/types";
import Weather from "@/components/other/Weather.vue";

@Options({
  data() {
    return {
      currentDate: new Date(),
      loading: true,
      error: null
    };
  },
  computed: {
    formattedDate(): string {
      const locale = localStorage.getItem('user-locale') ?? 'en';
      const dateOptions = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      };
      if (locale === 'es') {
        return this.currentDate.toLocaleDateString('es-ES', dateOptions);
      } else if (locale === 'ua') {
        return this.currentDate.toLocaleDateString('uk-UA', dateOptions);
      } else {
        return this.currentDate.toLocaleDateString('en-US', dateOptions);
      }
    }
  },
  components: {Weather},
})
export default class WeatherView extends Vue {
  error: string | null | undefined;
  loading: boolean | undefined;
  // weather: any;
  weather: WeatherData | null = null;

  mounted() {
    axios
        .get(
            "https://api.openweathermap.org/data/2.5/weather?q=Kiev&units=metric&lang=ru&appid=19ad8a076c538b3807d373633618d6d7"
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
  <div class="weather">
    <h1>
      <router-link class="back" to="/extra" title="Back to Extra page"><i class="fa fa-arrow-circle-left"></i>
      </router-link>
      {{ $t('extra.h1m.weather') }}
    </h1>
    <line></line>
    <div class="inner">
      <div class="city">
        <h1>{{ $t('extra.weather.h1') }}</h1>
        <h2>{{ formattedDate }}</h2>
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
      <div class="widget">
        <Weather :widgetId="15" :cityId="'703448'" :appId="'19ad8a076c538b3807d373633618d6d7'" :units="'metric'"/>
<!--        <Weather :widgetId="15" :cityId="'2643743'"/>-->
<!--        <Weather :widgetId="15" :cityId="'2520645'"/>-->
<!--        <Weather :widgetId="15" :cityId="'2509954'"/>-->
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

  .inner {
    display: inline-flex;
    justify-content: center;
    align-items: center;

    .city {
      display: inline-flex;
      flex-direction: column;
      padding: 0 1rem 1rem 1rem;
      margin: 1rem;
      border: 1px solid rgba(112, 111, 111, 0.6);
      border-radius: 5px;
      box-shadow: 3px 3px 4px 0 lightgrey;

      h1 {
        text-decoration: underline;
        color: darkblue;
        margin: 0.5rem;
      }

      h2 {
        margin: 0.5rem;
        color: darkmagenta;
      }

      h2:first-letter {
        text-transform: capitalize;
      }

      .indicators {
        display: inline-flex;
        flex-direction: column;
        align-items: start;
        padding: 0 1rem 0 1rem;

        p {
          margin: 0.5rem;
        }
      }
    }

    .widget {
      display: flex;
      justify-content: center;
      margin: 1rem;
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

        h2 {
          margin: 0.2rem 0;
        }

        .indicators {
          padding: 0;

          p {
            margin: 0.2rem 0;
          }
        }
      }
      .widget {
        display: flex;
        justify-content: center;
      }
    }
  }
}
</style>