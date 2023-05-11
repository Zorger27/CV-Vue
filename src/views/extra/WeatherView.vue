<script lang="ts">
import {Options, Vue} from "vue-class-component";
import OpenWeather from "@/components/other/OpenWeather.vue";
import MyWeather from "@/components/other/MyWeather.vue";

@Options({
  components: {MyWeather, OpenWeather},
})
export default class WeatherView extends Vue {
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
    <div class="container">
      <MyWeather class="myWidget"></MyWeather>
      <OpenWeather class="widget" :widgetId="15" :cityId="'703448'"/>
      <!--        <Weather :widgetId="15" :cityId="'2643743'"/>-->
      <!--        <Weather :widgetId="15" :cityId="'2520645'"/>-->
      <!--        <Weather :widgetId="15" :cityId="'2509954'"/>-->
      <!--        <Weather :widgetId="15" :cityId="'703448'" :appId="'openWeatherMapToken'" :units="'metric'"/>-->
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

  .container {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;

    .myWidget {
      display: inline-flex;
    }

    .widget {
      display: inline-flex;
      margin: 1rem;
    }
  }

}
</style>