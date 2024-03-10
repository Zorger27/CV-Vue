<script>
import { ref, onMounted, onUnmounted } from 'vue';
import * as THREE from 'three';
import {FontLoader} from "three/examples/jsm/loaders/FontLoader";
import {TextGeometry} from "three/examples/jsm/geometries/TextGeometry";
import axios from 'axios';

export default {
  name: 'NBURatesCreep3d',
  props: {
    cripView3d: {
      type: Boolean,
      required: true
    },
  },
  setup() {
    const marquee = ref(null);
    let scene, camera, renderer, currencies = [];

    const fetchExchangeRates = async () => {
      try {
        const response = await axios.get("https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json");
        const selectedRates = response.data
          .filter(rate => ["USD", "EUR", "GBP", "AED", "TRY", "XAU", "XAG", "XPT", "XPD"].includes(rate.cc));

        selectedRates.forEach((rate) => {
          createCurrencyObject(rate);
        });
      } catch (error) {
        console.error(error);
      }
    };

    let nextPositionX = 0; // Стартовая позиция для первого объекта

    const createCurrencyObject = (rate) => {
      const currencyText = `${rate.txt} = ${rate.rate.toFixed(2)} грн.`;
      const loader = new FontLoader();

      loader.load('https://threejs.org/examples/fonts/droid/droid_serif_regular.typeface.json', (font) => {
        const geometry = new TextGeometry(currencyText, {
          font: font,
          size: 0.2,
          height: 0.01,
        });

        geometry.computeBoundingBox();
        const textWidth = geometry.boundingBox.max.x - geometry.boundingBox.min.x;

        const textureLoader = new THREE.TextureLoader();
        textureLoader.load('/assets/img/cube3/cube3-15.webp', function (texture) {
          const material = new THREE.MeshBasicMaterial({ map: texture });
          const currencyObject = new THREE.Mesh(geometry, material);

          // Выставляем позицию с учетом предыдущего текста и добавляем "пробелы" между ними
          currencyObject.position.x = nextPositionX;
          // Обновляем nextPositionX для следующего объекта, добавляем ширину текущего текста и примерное расстояние для двух "пробелов"
          // Подберите значение 0.2 (или другое) в зависимости от желаемого расстояния между словами
          nextPositionX += textWidth + 0.2;

          currencies.push(currencyObject);
          scene.add(currencyObject);
        });
      });
    };

    const init = () => {
      scene = new THREE.Scene();
      camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
      camera.position.z = 2;
      renderer = new THREE.WebGLRenderer({alpha: true});
      // renderer = new THREE.WebGLRenderer();
      renderer.setSize(window.innerWidth, window.innerHeight);
      scene.add(camera);

      marquee.value.appendChild(renderer.domElement);

      fetchExchangeRates();
      animate();
    };

    const animate = () => {
      requestAnimationFrame(animate);

      const speed = 0.01; // Скорость движения

      currencies.forEach((currency, index) => {
        // Двигаем объекты влево
        currency.position.x -= speed;

        // Вычисляем правую границу видимости для объекта
        // Мы учитываем ширину объекта, чтобы дождаться его полного исчезновения.
        const objectRightEdge = currency.position.x + (currency.geometry.boundingBox.max.x - currency.geometry.boundingBox.min.x);

        // Перемещаем объект обратно в начало, когда он полностью выходит за левую границу видимости
        if (objectRightEdge < -window.innerWidth / window.innerHeight * 2.5) {
          // Положение последнего элемента в массиве, чтобы определить, куда переместить текущий объект
          const lastCurrency = currencies[currencies.length - 1];
          const spaceBetween = 0.2; // Желаемое расстояние между объектами
          currency.position.x = lastCurrency.position.x + lastCurrency.geometry.boundingBox.max.x - lastCurrency.geometry.boundingBox.min.x + spaceBetween;

          // Переупорядочиваем массив, чтобы сохранить последовательность
          currencies.splice(index, 1);
          currencies.push(currency);
        }
      });

      renderer.render(scene, camera);
    };

    const onWindowResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();

      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    };

    const updateCameraPosition = () => {
      if (window.innerWidth <= 768) {
        camera.position.z = 2.5;
      } else {
        camera.position.z = 1;
      }
    };

    window.addEventListener('resize', () => {
      onWindowResize();
      updateCameraPosition();
    });

    onMounted(() => {
      init();
      onWindowResize();
      updateCameraPosition();
    });

    onUnmounted(() => {
      renderer.dispose();
    });

    return {
      marquee
    };
  },
};
</script>

<template>
  <div class="container" v-show="cripView3d">
    <div class="marquee" ref="marquee"></div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  //margin-bottom: 1rem;
  overflow: hidden;
  position: relative;

  .marquee {
    overflow: hidden;
  }
}
</style>
