<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  props: {
    // Пропсы, которые принимает слайдер
    images: {
      type: Array,
      required: true, // Массив изображений обязателен для работы слайдера
    },
    transitionDuration: {
      type: Number,
      default: 500, // Длительность перехода между слайдами в миллисекундах
    },
    interval: {
      type: Number,
      default: 5000, // Интервал времени в миллисекундах между автоматическим переключением слайдов
    },
  },
  data() {
    return {
      // Текущее состояние слайдера
      currentSlide: 1,  // Индекс текущего слайда, начинаем с 1, чтобы учесть дубликат последнего слайда
      transformValue: -100, // Позиция слайдера для CSS-трансформации (начинаем со второго слайда)
      timerId: null as number | null, // ID таймера для автоматического переключения слайдов
      touchStartX: 0, // Начальная координата X для отслеживания жестов
      touchMoveX: 0, // Текущая координата X для отслеживания жестов
      transitioning: false, // Флаг, указывающий, происходит ли в данный момент переход между слайдами
    };
  },
  mounted() {
    this.startAutoPlay(); // Запускаем автоматическое переключение слайдов при монтировании компонента
  },
  methods: {
    startAutoPlay() {
      // Запуск автоматического переключения слайдов с интервалом, заданным в props
      this.timerId = window.setInterval(() => {
        this.nextSlide(); // Переключение на следующий слайд
      }, this.interval);
    },
    stopAutoPlay() {
      // Остановка автоматического переключения слайдов
      if (this.timerId !== null) {
        clearInterval(this.timerId); // Очищаем таймер
        this.timerId = null;
      }
      // Через время, равное длительности перехода, перезапускаем автоигру
      setTimeout(() => {
        this.startAutoPlay();
      }, this.transitionDuration);
    },
    nextSlide() {
      // Переход к следующему слайду
      if (!this.transitioning) { // Если в данный момент не происходит перехода
        this.transitioning = true; // Устанавливаем флаг перехода
        this.currentSlide++;
        this.transformValue -= 100;

        if (this.currentSlide === this.images.length + 1) {
          // Если мы достигли дубликата последнего слайда
          setTimeout(() => {
            this.currentSlide = 1; // Перемещаемся на первый реальный слайд
            this.transformValue = -100;
            this.transitioning = false; // Сбрасываем флаг перехода
          }, this.transitionDuration);
        } else {
          setTimeout(() => {
            this.transitioning = false; // После завершения перехода сбрасываем флаг
          }, this.transitionDuration);
        }
      }
    },
    previousSlide() {
      // Переход к предыдущему слайду
      if (!this.transitioning) { // Если в данный момент не происходит перехода
        this.transitioning = true; // Устанавливаем флаг перехода
        this.currentSlide--;
        this.transformValue += 100;

        if (this.currentSlide === 0) {
          // Если мы достигли дубликата первого слайда
          setTimeout(() => {
            this.currentSlide = this.images.length; // Перемещаемся на последний реальный слайд
            this.transformValue = -100 * this.images.length;
            this.transitioning = false; // Сбрасываем флаг перехода
          }, this.transitionDuration);
        } else {
          setTimeout(() => {
            this.transitioning = false; // После завершения перехода сбрасываем флаг
          }, this.transitionDuration);
        }
      }
    },
    openInNewWindow(index: number) {
      // Открытие изображения в новом окне по двойному клику
      const imageUrl = this.images[index];
      window.open(imageUrl, '_blank');
    },
    goToSlide(index: number) {
      // Переключение на определённый слайд при клике на точку навигации
      this.currentSlide = index + 1; // Учёт дубликата первого слайда
      this.transformValue = -(index + 1) * 100;
      this.stopAutoPlay(); // Остановка автоигры при ручном переключении
    },
    handleTouchStart(event: TouchEvent) {
      // Начало отслеживания жеста (начальная координата X)
      this.touchStartX = event.touches[0].clientX;
      this.touchMoveX = this.touchStartX;
    },
    handleTouchMove(event: TouchEvent) {
      // Отслеживание движения пальца по экрану
      this.touchMoveX = event.touches[0].clientX;
    },
    handleTouchEnd() {
      // Завершение отслеживания жеста и определение направления свайпа
      const deltaX = this.touchMoveX - this.touchStartX;

      if (deltaX > 50) {
        this.previousSlide(); // Свайп вправо - переход на предыдущий слайд
      } else if (deltaX < -50) {
        this.nextSlide(); // Свайп влево - переход на следующий слайд
      }
    },
  },
  components: {},
})
export default class Slider extends Vue {}
</script>

<template>
  <div class="slider-container" @touchstart="handleTouchStart" @touchmove="handleTouchMove" @touchend="handleTouchEnd">

    <div class="slider-wrapper"
         :style="{
        transform: 'translateX(' + transformValue + '%)',
        transition: transitioning ? 'transform ' + transitionDuration + 'ms' : 'none'
      }"
    >
      <!-- Добавляем дубликат последнего слайда перед первым -->
      <div class="slider-item" @dblclick="openInNewWindow(images.length - 1)">
        <img :src="images[images.length - 1]" alt="slider image">
      </div>

      <div class="slider-item" v-for="(image, index) in images" :key="index" @dblclick="openInNewWindow(index)">
        <img :src="image" alt="slider image">
      </div>

      <!-- Добавляем дубликат первого слайда после последнего -->
      <div class="slider-item" @dblclick="openInNewWindow(0)">
        <img :src="images[0]" alt="slider image">
      </div>
    </div>

    <div class="slider-controls">
      <button class="left-control" @click="previousSlide"><i class="fa fa-arrow-alt-circle-left"></i></button>
      <button class="right-control" @click="nextSlide"><i class="fa fa-arrow-alt-circle-right"></i></button>
    </div>

    <div class="slider-dots">
      <span class="slider-dot"
            v-for="(image, index) in images" :key="index"
            :class="{ active: index + 1 === currentSlide }"
            @click="goToSlide(index)"
      ></span>
    </div>

<!--    <div class="slider-dots">-->
<!--      <span class="slider-dot"-->
<!--        v-for="(index) in images.length" :key="index - 1" -->
<!--        :class="{ active: index - 1 === currentSlide }"-->
<!--        @click="goToSlide(index - 1)"-->
<!--      ></span>-->
<!--    </div>-->

  </div>
</template>

<style lang="scss" scoped>
.slider-container {
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100%;

  .slider-wrapper {
    display: flex;
    transition: transform 0.5s ease-out;

    .slider-item {
      flex: 0 0 100%;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }

  .slider-controls {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 100%;
    pointer-events: none;

    .left-control, .right-control {
      pointer-events: all;
      position: absolute;
      top: 0;
      bottom: 1.5rem;
      border: none;
      background: transparent;
      font-size: 2.5rem;
      cursor: pointer;

      .fa.fa-arrow-alt-circle-left, .fa.fa-arrow-alt-circle-right {
        color: mediumvioletred;
        background: transparent;
        border-radius: 50%;
        outline: none;
        transition: color 0.3s ease-in-out;
      }

      .fa.fa-arrow-alt-circle-left:hover, .fa.fa-arrow-alt-circle-right:hover,
      .fa.fa-arrow-alt-circle-left:active, .fa.fa-arrow-alt-circle-right:active {
        color: lightseagreen;
        background: transparent;
        //filter: drop-shadow(30px 10px 4px #4444dd);
        //filter: contrast(1.3) brightness(1.9) invert(1);
        //filter: invert(100%);
      }

      @media(max-width: 1020px) {
        font-size: 2.0rem;
      }
      @media(max-width: 768px) {
        font-size: 1.5rem;
      }
    }

    .left-control {
      left: 0.1rem;
    }

    .right-control {
      right: 0.1rem;
    }
  }

  .slider-dots {
    display: flex;
    justify-content: center;
    margin-top: 10px;

    .slider-dot {
      display: inline-block;
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background-color: #ccc;
      margin: 0 5px;
      cursor: pointer;
    }

    .slider-dot.active {
      background-color: purple;
    }
  }
}
@media(max-width: 768px) {
  .slider-container {
    .slider-controls {
      display: none;
    }
  }
}
</style>
