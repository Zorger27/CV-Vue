<template>
  <div class="slider-container">
    <div class="slider-wrapper" :style="{ transform: 'translateX(' + transformValue + '%)' }">
      <div class="slider-item" v-for="(image, index) in images" :key="index">
        <img :src="image" alt="slider image">
      </div>
    </div>
<!--    <div class="slider-controls">-->
<!--      <button class="left-control" @click="previousSlide"><i class="fa fa-angle-left"></i></button>-->
<!--      <button class="right-control" @click="nextSlide"><i class="fa fa-angle-right"></i></button>-->
<!--    </div>-->
  </div>
</template>

<script>
export default {
  name: 'Slider',
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
    previousSlide() {
      if (this.currentSlide === 0) {
        this.currentSlide = this.images.length - 1;
        this.transformValue = -100 * this.currentSlide;
      } else {
        this.currentSlide--;
        this.transformValue += 100;
      }
      this.stopAutoPlay();
    },
    nextSlide() {
      if (this.currentSlide === this.images.length - 1) {
        this.currentSlide = 0;
        this.transformValue = 0;
      } else {
        this.currentSlide++;
        this.transformValue -= 100;
      }
      this.stopAutoPlay();
    },
    startAutoPlay() {
      this.timerId = setInterval(() => {
        this.nextSlide();
      }, this.interval);
    },
    stopAutoPlay() {
      clearInterval(this.timerId);
      this.timerId = null;
      setTimeout(() => {
        this.startAutoPlay();
      }, this.transitionDuration);
    },
  },
};
</script>

<!--<script lang="ts">-->
<!--import { Options, Vue } from "vue-class-component";-->

<!--@Options({-->
<!--  components: {-->
<!--    props: {-->
<!--      images: {-->
<!--        type: Array,-->
<!--        required: true,-->
<!--      },-->
<!--      transitionDuration: {-->
<!--        type: Number,-->
<!--        default: 500,-->
<!--      },-->
<!--      interval: {-->
<!--        type: Number,-->
<!--        default: 5000,-->
<!--      },-->
<!--    },-->
<!--  },-->
<!--})-->
<!--export default class Slider extends Vue {-->
<!--  images!: Array<string>;-->
<!--  transitionDuration!: number;-->
<!--  interval!: number;-->
<!--  currentSlide = 0;-->
<!--  transformValue = 0;-->
<!--  timerId: number | null = null;-->

<!--  mounted() {-->
<!--    this.startAutoPlay();-->
<!--  }-->

<!--  previousSlide() {-->
<!--    if (this.currentSlide === 0) {-->
<!--      this.currentSlide = this.images.length - 1;-->
<!--      this.transformValue = -100 * this.currentSlide;-->
<!--    } else {-->
<!--      this.currentSlide&#45;&#45;;-->
<!--      this.transformValue += 100;-->
<!--    }-->
<!--    this.stopAutoPlay();-->
<!--  }-->

<!--  nextSlide() {-->
<!--    if (this.currentSlide === this.images.length - 1) {-->
<!--      this.currentSlide = 0;-->
<!--      this.transformValue = 0;-->
<!--    } else {-->
<!--      this.currentSlide++;-->
<!--      this.transformValue -= 100;-->
<!--    }-->
<!--    this.stopAutoPlay();-->
<!--  }-->

<!--  startAutoPlay() {-->
<!--    this.timerId = setInterval(() => {-->
<!--      this.nextSlide();-->
<!--    }, this.interval);-->
<!--  }-->

<!--  stopAutoPlay() {-->
<!--    clearInterval(this.timerId!);-->
<!--    this.timerId = null;-->
<!--    setTimeout(() => {-->
<!--      this.startAutoPlay();-->
<!--    }, this.transitionDuration);-->
<!--  }-->
<!--}-->
<!--</script>-->

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
      bottom: 0;
      border: none;
      background: transparent;
      color: darkred;
      font-size: 2.5rem;
      cursor: pointer;
      @media(max-width:1020px) {
        font-size: 2.0rem;
      }
      @media(max-width:768px) {
        font-size: 1.5rem;
      }
    }
    .left-control {
      left: 0.3rem;
    }
    .right-control {
      right: 0.3rem;
    }
  }
}
</style>
