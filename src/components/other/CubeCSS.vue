<script lang="ts">
import { Options, Vue } from "vue-class-component";
@Options({
  props: {
    cubeSize: {
      type: Number,
      required: true,
    },
  },
  // computed: {
  //   calculatedCubeSize(): string {
  //     return `${this.cubeSize}rem`;
  //   },
  // },
})
export default class CubeCSS extends Vue {}
</script>

<template>
  <div class="body">
    <div class="container">
      <div class="back side"></div>
      <div class="left side"></div>
      <div class="right side"></div>
      <div class="top side"></div>
      <div class="bottom side"></div>
      <div class="front side"></div>
    </div>
  </div>
</template>

<style scoped lang="scss">
$cubeSize: 5rem;

.body {
  height: calc(2 * #{$cubeSize});
  width: calc(2 * #{$cubeSize});
  perspective: 1000px;
  perspective-origin: center calc(-1 * #{$cubeSize});
  display: flex;
  justify-content: center;
  align-items: center;

  .side, .container{
    width: calc(2 * #{$cubeSize});
    height: calc(2 * #{$cubeSize});
  }
  .container{
    transform-style: preserve-3d;
    animation: 10s rotate infinite linear;
  }
  .container:before, .container:after{
    content: "";
    display: block;
    position: absolute;
    width: calc(2 * #{$cubeSize});
    height: calc(2 * #{$cubeSize});
  }
  .container:before{
    transform: rotateX(90deg);
  }
  .container:after{
    transform: rotatey(90deg);
  }
  .side{
    position: absolute;
    width: calc(2 * #{$cubeSize});
    height: calc(2 * #{$cubeSize});
    opacity: 0.8;
  }
  .back{
    transform: translateZ(calc(-1 * #{$cubeSize}));
    background: pink;
  }
  .left{
    transform: translateX(calc(-1 * #{$cubeSize})) rotateY(90deg);
    background: green;
  }
  .right{
    transform: translateX(calc(1 * #{$cubeSize})) rotateY(90deg);
    background: black;
  }
  .top{
    transform: translateY(calc(-1 * #{$cubeSize})) rotateX(90deg);
    background: blue;
  }
  .bottom{
    transform: translateY(calc(1 * #{$cubeSize})) rotateX(90deg);
    background: red;
  }
  .front{
    transform: translateZ(calc(1 * #{$cubeSize}));
    background: gold;
  }
  @keyframes rotate{
    100%{
      transform: rotateX(360deg) rotateY(360deg) rotateZ(360deg);
    }
  }
}
</style>