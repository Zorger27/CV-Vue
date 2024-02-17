<script lang="ts">
import { Options, Vue } from "vue-class-component";
@Options({})
export default class CubeCSSnew extends Vue {
  // Переменные для минимального и максимального размера куба
  minCubeSize: number = 1;
  maxCubeSize: number = 20;

  // Переменная для хранения значения ползунка
  sliderValue: number = 5;

  // Computed свойство для вычисления размера куба
  get calculatedCubeSize(): string {
    return `${this.sliderValue}rem`;
  }

  // Обработчик события изменения ползунка
  onSliderChange(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.sliderValue = parseInt(target.value, 10);
  }

}
</script>

<template>
  <div class="inner">
    <div class="input">
      <input id="cubeSizeSlider" type="range" :min="minCubeSize" :max="maxCubeSize" v-model="sliderValue" @input="onSliderChange"/>
    </div>
    <div class="body" :style="{ width: calculatedCubeSize, height: calculatedCubeSize }">
      <div class="container">
        <div class="back side"></div>
        <div class="left side"></div>
        <div class="right side"></div>
        <div class="top side"></div>
        <div class="bottom side"></div>
        <div class="front side"></div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.inner {
  display: flex;
  flex-direction: column;

  .input {
    color: red;
    margin-bottom: 6rem;
  }

  .body {
    perspective: 1000px;
    display: flex;
    justify-content: center;
    align-items: center;

    .side,
    .container {
      width: 100%;
      height: 100%;
    }

    .container {
      transform-style: preserve-3d;
      animation: 10s rotate infinite linear;

      &:before,
      &:after {
        content: "";
        display: block;
        position: absolute;
        //width: 100%;
        //height: 100%;
      }

      &:before {
        transform: rotateX(90deg);
      }

      &:after {
        transform: rotateY(90deg);
      }
    }

    .side {
      position: absolute;
      //width: 100%;
      //height: 100%;
      opacity: 0.8;
    }

    .back {
      transform: translateZ(-50%);
      background: pink;
    }

    .left {
      transform: translateX(-50%) rotateY(90deg);
      background: green;
    }

    .right {
      transform: translateX(50%) rotateY(90deg);
      background: black;
    }

    .top {
      transform: translateY(-50%) rotateX(90deg);
      background: blue;
    }

    .bottom {
      transform: translateY(50%) rotateX(90deg);
      background: red;
    }

    .front {
      $frontSize: 50%;
      transform: translateZ($frontSize);
      //transform: translateZ( calc (1 * 50%));
      //transform: translateZ(calc(1 * #{$cubeSize}));
      background: gold;
    }

    @keyframes rotate {
      100% {
        transform: rotateX(360deg) rotateY(360deg) rotateZ(360deg);
      }
    }
  }
}

</style>