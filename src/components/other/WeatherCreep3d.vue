<script>
import {ref, onMounted, onUnmounted, watch, computed} from 'vue';
import * as THREE from 'three';
import {FontLoader} from "three/examples/jsm/loaders/FontLoader";
import {TextGeometry} from "three/examples/jsm/geometries/TextGeometry";
import axios from "axios";
import {useI18n} from "vue-i18n";
import {useStore} from 'vuex';

export default {
  name: 'WeatherCreep3d',
  props: {
    weatherCreepView3d: {
      type: Boolean,
      required: true
    },
    cityName: {
      type: String,
    },
  },
  emits: ['update:cityName', 'update:cities'],
  setup(props, { emit }) {
    const { t, locale } = useI18n();
    const store = useStore(); // Хранилище Vuex
    const marquee = ref(null);
    const weather = ref(null);
    const loading = ref(true);
    const error = ref(null);
    const countryCode = ref(''); // Объявляем здесь, чтобы было доступно везде в setup()
    const countryName = ref(''); // Переменная для хранения имени страны
    let scene, camera, renderer, initialWeatherIndicators = [];
    // Вычисляемое свойство для городов
    const cities = computed(() => {
      return ["Kyiv", "Odessa", "Kharkiv", "Dubai", "Antalya", "Shanghai", "Benidorm", "Valencia"].map(city => {
        return t(`extra.weather.cities.${city}`);
      });
    });

    // Следим за изменениями locale, чтобы обновлять countryName
    watch(locale, (newLocale) => {
      // Теперь проверка на countryCode.value актуальна, так как countryCode объявлено вне getWeather
      if (countryCode.value) {
        countryName.value = store.getters.getCountryName(countryCode.value, newLocale);
      }
    });
    watch(() => props.cityName, (newCityName) => {
      // Здесь можно обработать изменение города.
      // Например, обновить локальные данные, повторно запросить данные о погоде и т.д.
      handleCityInputChange(newCityName);
      updateCityName(newCityName);
      getWeather();
    });

    const saveCityToLocalStorage = (city) => {
      localStorage.setItem("weatherCity", city);
    };

    const handleCityInputChange = async (city) => {
      // Очищаем предыдущие данные о погоде
      clearWeatherData();
      // Эмитируем событие вместе с новым значением города
      emit('update:cityName', city);
      await getWeather();
      saveCityToLocalStorage(city);
      animate();
    };

    const updateCityName = async (city) => {
      // Очищаем предыдущие данные о погоде
      clearWeatherData();
      // Эмитируем изменение имени города, вместо прямого изменения пропса
      // props.cityName = city;
      emit('update:cityName', city);
      emit('update:cities', cities.value); // Обновление списка городов, если это необходимо
      await getWeather();
      saveCityToLocalStorage(city);
      animate();

      // // Перезагрузка страницы
      // window.location.reload();
      // Принудительно обновляем компонент
      // this.$forceUpdate();
    };

    const clearWeatherData = () => {
      // Очищаем предыдущие данные о погоде
      initialWeatherIndicators.forEach(indicator => {
        scene.remove(indicator); // Удаляем объекты из сцены
      });
      initialWeatherIndicators = []; // Очищаем массив объектов
      renderer.renderLists.dispose(); // Очищаем кэш рендерера

      // Остановить анимацию после очистки данных о погоде, используя сохраненный ID
      if (animationId !== null) {
        cancelAnimationFrame(animationId);
        animationId = null; // Сброс ID анимации, чтобы избежать его повторной отмены
      }
    };
    const getWeather = async () => {
      loading.value = true;
      weather.value = null;
      error.value = null;
      try {
        const openWeatherMapToken = process.env["VUE_APP_OPENWEATHERMAP_TOKEN"];
        const language = locale.value; // Получение текущего языка интерфейса
        const currentCity = props.cityName;
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${currentCity}&units=metric&lang=${language}&appid=${openWeatherMapToken}`
        );

        // Обновляем countryCode
        countryCode.value = response.data.sys.country;
        // Обновляем countryName в зависимости от полученного countryCode и текущего языка интерфейса
        countryName.value = store.getters.getCountryName(countryCode.value, locale.value);

        // Преобразуем ответ от API в массив данных о погоде
        const weatherArray = [
          { key: t('extra.weather.h2'), value: props.cityName },
          { key: t('extra.weather.country'), value: countryName.value },
          { key: t('extra.weather.sunrise'), value: new Date(response.data.sys.sunrise * 1000).toLocaleTimeString() },
          { key: t('extra.weather.sunset'), value: new Date(response.data.sys.sunset * 1000).toLocaleTimeString() },
          { key: t('extra.weather.description'), value: response.data.weather[0].description },
          { key: t('extra.weather.temp'), value: `${response.data.main.temp} °C` },
          { key: t('extra.weather.feels'), value: `${response.data.main.feels_like} °C` },
          { key: t('extra.weather.temp-min'), value: `${response.data.main.temp_min} °C` },
          { key: t('extra.weather.temp-max'), value: `${response.data.main.temp_max} °C` },
          { key: t('extra.weather.speed'), value: `${response.data.wind.speed} m/s` },
          { key: t('extra.weather.direction'), value: `${response.data.wind.deg}°` },
          { key: t('extra.weather.humidity'), value: `${response.data.main.humidity}%` },
          { key: t('extra.weather.pressure'), value: `${response.data.main.pressure} hPa` },
        ];

        // Перебираем полученные данные о погоде и создаем объекты для отображения в 3D
        weatherArray.forEach((weather) => {
          createWeatherObject(weather); // Вызываем функцию createWeatherObject для создания объекта погоды
        });
      } catch (error) {
        // Обработка ошибки при загрузке данных о погоде
        console.error("Error fetching weather data:", error);
        error.value = `${t('extra.weather.error')}: ${t('extra.weather.unknown-city')}`;
      } finally {
        loading.value = false;
      }
    };

    let nextPositionX = 0; // Стартовая позиция для первого объекта
    const texturePaths = [
      '/assets/img/cube3/cube3-15.webp',
      '/assets/img/cube3/cube3-13.webp',
      '/assets/img/cube3/cube3-09.webp',
      '/assets/img/cube3/cube3-02.webp',
      '/assets/img/cube3/cube3-06.webp',
      '/assets/img/cube3/cube3-08.webp',
      '/assets/img/cube3/cube3-17.webp',
      '/assets/img/cube3/cube3-18.webp',
      '/assets/img/cube3/cube3-25.webp',
      '/assets/img/cube3/cube3-27.webp',
      '/assets/img/cube3/cube3-07.webp',
      '/assets/img/cube3/cube3-22.webp',
      '/assets/img/cube3/cube3-19.webp'
    ];
    // Функция для перемешивания массива
    const shuffleArray = (array) => {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
    };
    shuffleArray(texturePaths); // Просто перемешиваем texturePaths, не присваивая результат

    const createWeatherObject = (weather) => {
      const weatherInd = `${weather.key}: ${weather.value}`;

      // Берем текстуру из перемешанного массива
      const texturePath = texturePaths.pop(); // Теперь берем последний элемент из уже перемешанного массива

      // Асинхронная загрузка шрифта
      const loadFont = new Promise((resolve, reject) => {
        const loader = new FontLoader();
        loader.load('https://threejs.org/examples/fonts/droid/droid_serif_regular.typeface.json', resolve, undefined, (error) => reject('Font load error: ' + error.message));
      });

      // Асинхронная загрузка текстуры
      const loadTexture = new Promise((resolve, reject) => {
        const textureLoader = new THREE.TextureLoader();
        textureLoader.load(texturePath, resolve, undefined, (error) => reject('Texture load error: ' + error.message));
      });

      // Ожидаем загрузку шрифта и текстуры
      Promise.all([loadFont, loadTexture]).then(([font, texture]) => {
        const geometry = new TextGeometry(weatherInd, {
          font: font,
          size: 0.2,
          height: 0.02,
        });

        geometry.computeBoundingBox();
        const textWidth = geometry.boundingBox.max.x - geometry.boundingBox.min.x;

        const material = new THREE.MeshBasicMaterial({ map: texture });

        const weatherObject = new THREE.Mesh(geometry, material);
        weatherObject.rotation.y = THREE.MathUtils.degToRad(27);
        weatherObject.rotation.x = THREE.MathUtils.degToRad(-5);

        // Выставляем позицию с учетом предыдущего текста и добавляем "пробелы" между ними
        weatherObject.position.x = nextPositionX;
        // Обновляем nextPositionX для следующего объекта, добавляем ширину текущего текста и примерное расстояние для двух "пробелов"
        // Подберите значение 0.2 (или другое) в зависимости от желаемого расстояния между словами
        nextPositionX += textWidth + 0.2;

        initialWeatherIndicators.push(weatherObject);
        scene.add(weatherObject);
      }).catch(error => {
        console.error('Error loading font or texture. Details:', error);
      })
      //   .finally(() => {
      //   console.log('Promise processing finished, check for uncaught errors.');
      // });
    };

    const init = () => {
      scene = new THREE.Scene();
      camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
      camera.position.z = 1.3;
      renderer = new THREE.WebGLRenderer({alpha: true});
      // renderer = new THREE.WebGLRenderer();
      renderer.setSize(window.innerWidth, window.innerHeight);
      scene.add(camera);

      marquee.value.appendChild(renderer.domElement);

      getWeather();
      animate();
    };

    let animationId = null; // Глобальная переменная для хранения ID анимации
    const animate = () => {
      // requestAnimationFrame(animate);

      // Отменяем предыдущую запланированную анимацию (если она есть)
      if (animationId !== null) {
        cancelAnimationFrame(animationId);
      }
      const speed = 0.01; // Скорость движения

      // Используем `initialWeatherIndicators` для итерации
      initialWeatherIndicators.forEach((indicator, index) => {
        // Двигаем объекты влево
        indicator.position.x -= speed;

        // Вычисляем правую границу видимости для объекта
        if (indicator.geometry && indicator.geometry.boundingBox) {
          const objectRightEdge = indicator.position.x + (indicator.geometry.boundingBox.max.x - indicator.geometry.boundingBox.min.x);

          // Перемещаем объект обратно в начало, когда он полностью выходит за левую границу видимости
          if (objectRightEdge < -window.innerWidth / window.innerHeight * 2.5) {
            const lastIndicator = initialWeatherIndicators[initialWeatherIndicators.length - 1];
            const spaceBetween = 0.2; // Желаемое расстояние между объектами
            indicator.position.x = lastIndicator.position.x + lastIndicator.geometry.boundingBox.max.x - lastIndicator.geometry.boundingBox.min.x + spaceBetween;

            // Переупорядочиваем массив, чтобы сохранить последовательность
            initialWeatherIndicators.splice(index, 1);
            initialWeatherIndicators.push(indicator);
          }
        }
      });

      renderer.render(scene, camera);

      // Запланировать следующий кадр анимации
      animationId = requestAnimationFrame(animate);
    };

    const onWindowResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();

      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    };

    window.addEventListener('resize', () => {
      onWindowResize();
    });

    onMounted(() => {
      init();
      onWindowResize();
    });

    onUnmounted(() => {
      renderer.dispose();
    });
    // console.error('cityName:', props.cityName)
    // console.log('cityName:', props.cityName)

    return {
      marquee,
      weather,
      loading,
      error,
      countryName,
      cities,
      getWeather, // Экспорт функции, если вызывать её из шаблона
      handleCityInputChange,
      updateCityName,
      initialWeatherIndicators,
    };
  },
}
</script>

<template>
  <div class="inner" v-show="weatherCreepView3d">
    <div class="marquee" ref="marquee"></div>
    <div v-if="loading" class="error">{{ $t('extra.weather.loading') }}</div>
    <div v-else class="error">{{ error }}</div>
  </div>
</template>

<style lang="scss" scoped>
.inner {
  overflow: hidden;
  position: relative;

  .marquee {
    overflow: hidden;
    background: none;
  }
  .error {
    font-size: 2rem;
    font-weight: bold;
    color: darkred;
    margin: 1rem auto;
  }
}

@media(max-width: 1020px) {
  .inner {
    .error {
      font-size: 1.6rem;
      font-weight: bold;
      color: darkred;
      margin: 1rem auto;
    }
  }
}
@media (max-width: 768px) {
  .inner {
    .error {
      font-size: 1.5rem;
      font-weight: bold;
      color: darkred;
      margin: 1rem auto;
    }
  }
}
</style>