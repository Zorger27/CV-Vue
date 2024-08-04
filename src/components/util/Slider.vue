<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  props: {
    images: {
      type: Array,
      required: true,
    },
    transitionDuration: {
      type: Number,
      default: 500,
    },
    interval: {
      type: Number,
      default: 5000,
    },
  },
  data() {
    return {
      currentSlide: 1,  // Стартуем с 1-го, так как будет дубликат последнего слайда
      transformValue: -100,
      timerId: null as number | null,
      touchStartX: 0,
      touchMoveX: 0,
      transitioning: false,  // Флаг для предотвращения быстрой смены слайдов
    };
  },
  mounted() {
    this.startAutoPlay();
  },
  methods: {
    startAutoPlay() {
      this.timerId = window.setInterval(() => {
        this.nextSlide();
      }, this.interval);
    },
    stopAutoPlay() {
      if (this.timerId !== null) {
        clearInterval(this.timerId);
        this.timerId = null;
      }
      setTimeout(() => {
        this.startAutoPlay();
      }, this.transitionDuration);
    },
    nextSlide() {
      if (!this.transitioning) {
        this.transitioning = true;
        this.currentSlide++;
        this.transformValue -= 100;

        if (this.currentSlide === this.images.length + 1) {
          setTimeout(() => {
            this.currentSlide = 1;
            this.transformValue = -100;
            this.transitioning = false;
          }, this.transitionDuration);
        } else {
          setTimeout(() => {
            this.transitioning = false;
          }, this.transitionDuration);
        }
      }
    },
    previousSlide() {
      if (!this.transitioning) {
        this.transitioning = true;
        this.currentSlide--;
        this.transformValue += 100;

        if (this.currentSlide === 0) {
          setTimeout(() => {
            this.currentSlide = this.images.length;
            this.transformValue = -100 * this.images.length;
            this.transitioning = false;
          }, this.transitionDuration);
        } else {
          setTimeout(() => {
            this.transitioning = false;
          }, this.transitionDuration);
        }
      }
    },
    openInNewWindow(index: number) {
      const imageUrl = this.images[index];
      window.open(imageUrl, '_blank');
    },
    goToSlide(index: number) {
      this.currentSlide = index + 1;
      this.transformValue = -(index + 1) * 100;
      this.stopAutoPlay();
    },
    handleTouchStart(event: TouchEvent) {
      this.touchStartX = event.touches[0].clientX;
      this.touchMoveX = this.touchStartX;
    },
    handleTouchMove(event: TouchEvent) {
      this.touchMoveX = event.touches[0].clientX;
    },
    handleTouchEnd() {
      const deltaX = this.touchMoveX - this.touchStartX;

      if (deltaX > 50) {
        this.previousSlide();
      } else if (deltaX < -50) {
        this.nextSlide();
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
