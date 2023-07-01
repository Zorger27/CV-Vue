<script lang="ts">
import {Options, Vue} from "vue-class-component";

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
      currentSlide: 0,
      transformValue: 0,
      timerId: null,
    };
  },
  mounted() {
    this.startAutoPlay();
  },
  methods: {
    startAutoPlay() {
      this.timerId = setInterval(() => {
        this.nextSlide();
      }, this.interval);
    },
    nextSlide() {
      if (this.currentSlide === this.images.length - 1) {
        this.currentSlide = 0;
        this.transformValue = 0;
      } else {
        this.currentSlide++;
        this.transformValue -= 100;
      }
    },
    stopAutoPlay() {
      clearInterval(this.timerId);
      this.timerId = null;
      setTimeout(() => {
        this.startAutoPlay();
      }, this.transitionDuration);
    },
    goToSlide(index: number) {
      this.currentSlide = index;
      this.transformValue = -index * 100;
      this.stopAutoPlay();
    }
  },
  components: {},
})
export default class Slider extends Vue {
}
</script>

<template>
  <div class="slider-container">
    <div class="slider-wrapper" :style="{ transform: 'translateX(' + transformValue + '%)' }">
      <div class="slider-item" v-for="(image, index) in images" :key="index">
        <img :src="image" alt="slider image">
      </div>
    </div>
    <div class="slider-dots">
      <span class="slider-dot"
          v-for="(image, index) in images" :key="index"
          :class="{ active: index === currentSlide }"
          @click="goToSlide(index)"
      ></span>
    </div>
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
</style>
