<script>
export default {
  name: 'CubeJS',
  props: {
    scale: {
      type: Number,
      default: 1,
    },
  },
  data() {
    return {
      rotationX: 0,
      rotationY: 0,
    };
  },
  computed: {
    calculatedCubeSize() {
      return `${150 * this.scale}px`;
    },
    calculatedTranslateZ() {
      return `${(this.scale)}px`;
    },
    calculatedTranslateZBack() {
      return `${150 * this.scale}px`;
    },
    calculatedTranslateZSide() {
      return `${75 * this.scale}px`;
    },
  },
};
</script>

<template>
  <div class="cube-container">
<!--    <input type="range" v-model="scale" min="0.5" max="2" step="0.1" />-->
    <div class="cube" :style="{ width: calculatedCubeSize, height: calculatedCubeSize, transform: `rotateX(${rotationX}deg) rotateY(${rotationY}deg)` }">
      <div class="face front" :style="{ transform: `translateZ(${calculatedTranslateZ})` }"></div>
      <div class="face back" :style="{ transform: `rotateY(180deg) translateZ(${calculatedTranslateZBack})` }"></div>
      <div class="face left" :style="{ transform: `rotateY(-90deg) translateZ(${calculatedTranslateZSide}) translateX(-50%)` }"></div>
      <div class="face right" :style="{ transform: `rotateY(90deg) translateZ(${calculatedTranslateZSide}) translateX(50%)` }"></div>
      <div class="face top" :style="{ transform: `rotateX(90deg) translateZ(${calculatedTranslateZSide}) translateY(-50%)` }"></div>
      <div class="face bottom" :style="{ transform: `rotateX(-90deg) translateZ(${calculatedTranslateZSide}) translateY(50%)` }"></div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.cube-container {
  perspective: 800px;
  width: 300px;
  height: 300px;
  margin: 50px auto;

  input {
    width: 100%;
    margin-bottom: 50px;
  }

  .cube {
    position: relative;
    width: 100%;
    height: 100%;
    transform-style: preserve-3d;
    transform-origin: center center;
    transition: transform 0.3s ease;
    animation: 10s rotate infinite linear;

    .face {
      position: absolute;
      width: 100%;
      height: 100%;
      box-sizing: border-box;
      opacity: 0.8;
    }

    .front { background-color: #3498db; }
    .back { background-color: #e74c3c; }
    .left { background-color: #2ecc71; }
    .right { background-color: #f39c12; }
    .top { background-color: #9b59b6; }
    .bottom { background-color: #34495e; }

    @keyframes rotate {
      0% {
        transform: rotateX(0) rotateY(0) rotateZ(0);
      }
      25% {
        transform: rotateX(90deg) rotateY(180deg) rotateZ(45deg);
      }
      50% {
        transform: rotateX(180deg) rotateY(360deg) rotateZ(90deg);
      }
      75% {
        transform: rotateX(270deg) rotateY(540deg) rotateZ(135deg);
      }
      100% {
        transform: rotateX(360deg) rotateY(720deg) rotateZ(180deg);
      }
    }
  }
}
</style>