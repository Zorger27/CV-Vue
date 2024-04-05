<script lang="ts">
import {Options, Vue} from "vue-class-component";
import {openGraphMixin} from "@/assets/ogimage/openGraphMixin";
import CurrentDate from "@/components/util/CurrentDate.vue";
import WeatherCreep3d from "@/components/other/WeatherCreep3d.vue";

@Options({
  mixins: [openGraphMixin],
  data() {
    return {
      cityName: '' as string,
      cities: [] as string[],
      cripView3d: false,
    }
  },
  mounted() {
    const mainTitle = 'Creeping Lines 3D';
    const title = 'Portfolio - Creeping Lines 3D';
    const metaDescription = 'Anatolii Zorin\'s Portfolio with all diplomas, certificates, interesting projects and a detailed description of the experience gained at previous jobs.';
    const description = 'Anatolii Zorin\'s Portfolio - Creeping Lines 3D';
    const imageUrl = 'https://zorin.expert/assets/ogimage/extra/graphics/OG_Image_Cube3D.jpg';
    const url = 'https://zorin.expert/extra/graphics/cube3d';

    this.setOpenGraphTags(metaDescription, title, description, imageUrl, url);
    this.setPageTitle(mainTitle);

    const savedCity = localStorage.getItem('weatherCity');
    if (savedCity) {
      this.cityName = savedCity;
      this.callUpdateCityName(savedCity);
    } else {
      this.cityName = this.$t("extra.weather.cities.Kyiv");
      this.callUpdateCityName(this.cityName);
    }
  },
  methods: {
    changeCrip3d() {
      this.cripView3d = !this.cripView3d;
    },
    clearCity() {
      this.cityName = "";
      // Устанавливаем фокус на поле ввода
      this.$refs.cityInput.focus();
    },
    callGetWeather() {
      if (this.$refs.weatherCreep3d) {
        this.$refs.weatherCreep3d.getWeather();
      }
      // Перезагрузка страницы
      window.location.reload();
    },
    callHandleCityInputChange(cityName: string) {
      if (this.$refs.weatherCreep3d) {
        this.$refs.weatherCreep3d.handleCityInputChange(cityName);
      }
    },
    callUpdateCityName(cityName: string) {
      this.cityName = cityName;
      if (this.$refs.weatherCreep3d) {
        this.$refs.weatherCreep3d.updateCityName(cityName);
      }
    },
  },
  components: {WeatherCreep3d, CurrentDate},
})
export default class CreepingLines3d extends Vue {
}
</script>

<template>
  <div class="weather">
    <h1>
      <router-link class="back-to-menu" to="/extra/graphics" title="Back to 3D Graphics page"><i class="fa fa-arrow-circle-left"></i>
      </router-link>
      {{ $t('extra.graphics.creep3d') }}
    </h1>
    <line></line>
    <CurrentDate></CurrentDate>
    <div class="inner">
      <div class="input-group">
        <label for="city">{{ $t('extra.weather.city') }}</label>
        <input type="text" id="city" v-model="cityName" @change="callHandleCityInputChange(cityName)" @keydown.enter="callGetWeather"
               ref="cityInput"> <i title="Clear" @click="clearCity" class="fas fa-trash-alt"></i>
        <button class="get" @click="callGetWeather" :title="$t('extra.weather.btn')">{{ $t('extra.weather.get') }}</button>
        <button class="getMobile" @click="callGetWeather" :title="$t('extra.weather.btn')"><i class="fas fa-arrow-circle-down"></i></button>
        <select class="city-list" v-model="cityName" @change="callUpdateCityName(cityName)">
          <option v-for="city in cities" :key="city" :value="city">{{ city }}</option>
        </select>
      </div>
      <h2 class="title">{{ $t('extra.weather.title1') }}
        <i :title="[cripView3d ? 'Close 3D Creeping line' : 'Start 3D Creeping line']" @click="changeCrip3d">
          <span :class="['fa','fa-solid', cripView3d ? 'fa-yin-yang' : 'fa-cubes']"></span></i>
      </h2>
    </div>
    <div class="creep3d">
      <WeatherCreep3d :crip-view3d="cripView3d" :cityName="cityName" @update:cityName="cityName = $event" @update:cities="cities = $event" ref="weatherCreep3d"></WeatherCreep3d>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.weather {
  flex: 1 0 auto;
  background: linear-gradient(to bottom, rgb(255, 250, 229), rgb(247, 234, 250)) no-repeat center;

  .back {
    display: none;
    @media (max-width: 768px) {
      display: inline-flex;
      text-decoration: none;
      margin-right: 0.1rem;
    }
  }

  .inner {
    //display: flex;
    //justify-content: center;
    //align-items: center;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    grid-column-gap: 0.5rem;
    grid-row-gap: 0;
    grid-auto-flow: column;
    grid-template-areas:
        "input-group"
        "title";

    .title {
      grid-area: title;
      display: grid;
      grid-auto-flow: column;
      justify-content: center;
      align-items: center;
      font-size: 2.3rem;
      margin: 0 0 0.5rem 0;
      color: black;

      .fa-solid.fa-sun, .fa-solid.fa-cloud {margin: 0 0.5rem;}
      .fa.fa-yin-yang, .fa-solid.fa-cubes {margin: 0 0.5rem;}
      .fa-solid.fa-cloud-sun-rain {margin-right: 0.5rem}

      //.fa-solid.fa-sun:hover {color: gold;}
      //.fa-solid.fa-cloud:hover {color: blue;}
      //.fa.fa-yin-yang:hover {color: gold;}
      //.fa-solid.fa-cubes:hover {color: blue;}
      //.fa-solid.fa-umbrella:hover {color: purple;}
    }

    .input-group {
      grid-area: input-group;
      font-size: 2.3rem;
      margin: 0.7rem 0;
      display: grid;
      grid-auto-flow: column;
      justify-content: center;
      align-items: center;

      .getMobile {
        display: none;
      }

      .get {
        display: inline-flex;
      }

      label, input, button, select {
        margin: 0 0.4rem 0 0;
        font-size: 1.5rem;
      }

      label {
        font-weight: bold;
        font-size: 2rem;
        color: black;
      }

      input[type="text"] {
        flex: 1 0 auto;
        color: black;
        caret-color: red;
        border: 1px solid #ddd;
        border-radius: 5px;
        width: 120px;
        padding: 0.4rem;
        margin: 0;
      }

      input:active, input:focus {
        outline: 1px solid transparent;
        box-shadow: 3px 3px 4px 0 lightgrey;
      }

      button {
        padding: 0.43rem;
        background-color: #f9f9f9;
        border: 1px solid #ddd;
        border-radius: 5px;
        text-align: center;
        cursor: pointer;
        transition: border-color .2s ease-in-out, background-color .2s, box-shadow .2s;
      }

      button:hover {
        background-color: #f1f1f1;
        box-shadow: 3px 3px 4px 0 lightgrey;
        border-color: #ddd;
      }

      select {
        border-radius: 5px;
        padding: 0.4rem;
        border: 1px solid #ddd;
        margin: 0;
      }

      .fas.fa-trash-alt {
        font-size: 1.7rem;
        padding: 0;
        margin: 0 0.6rem;
      }

      .fas.fa-trash-alt:hover {
        color: red;
      }
    }
  }

  .creep3d {
    max-height: 25vh;
    max-width: 100%;
    position: relative;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    background: none;
  }
}

@media(max-width: 1020px) {
  .weather {
    .inner {
      .title {
        font-size: 2.1rem;
      }
      .input-group {
        label, input, button, select {
          margin: 0.3rem 0.2rem 0;
          font-size: 1.2rem;
        }
        label {
          font-size: 1.7rem;
        }
        button {
          margin: 0 0.2rem 0 0;
        }
        select {
          margin: 0;
        }
      }
    }
  }
}

@media (max-width: 768px) {
  .weather {
    .inner{
      grid-column-gap: 0;
      grid-row-gap: 0;

      .title {
        justify-content: center;
        align-items: center;
        font-size: 2rem;
        margin: 0.3rem 0 0.5rem 0;
        .fa-solid.fa-sun, .fa-solid.fa-cloud {
          margin: 0 0.5rem;
        }
      }

      .input-group {
        margin: 0.8rem 0 0;
        .get {
          display: none;
        }
        .getMobile {
          display: inline-flex;
          border-color: #ddd;
          color: lightskyblue;
          padding: 0.27rem;
          font-size: 1.2rem;
          margin: 0 0.5rem 0 0;
        }

        label, input, button, select {
          margin: 0.3rem 0.2rem 0;
          font-size: 1.1rem;
        }
        label {
          font-size: 1.5rem;
          margin: 0 0.2rem 0 0;
        }
        input[type="text"] {
          width: 75px;
          padding: 0.2rem;
          margin: 0;
        }
        select {
          border-radius: 5px;
          padding: 0.2rem;
          margin: 0;
        }
        .fas.fa-trash-alt {
          font-size: 1.4rem;
          padding: 0 0.5rem;
          margin: 0;
        }
      }
    }
    .creep3d {
      max-height: 25vh;
    }
  }
}
</style>