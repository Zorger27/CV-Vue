<script lang="ts">
import {Options, Vue} from "vue-class-component";

@Options({})
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
$cubeTranslate: 5rem;
$cubeSize: $cubeTranslate * 2;

.body {
  height: $cubeSize;
  width: $cubeSize;
  perspective: 1000px;
  perspective-origin: center -$cubeTranslate;
  display: flex;
  justify-content: center;
  align-items: center;

  .side, .container{
    width: $cubeSize;
    height: $cubeSize;
  }
  .container{
    transform-style: preserve-3d;
    animation: 10s rotate infinite linear;
  }
  .container:before, .container:after{
    content: "";
    display: block;
    position: absolute;
    width: $cubeSize;
    height: $cubeSize;
  }
  .container:before{
    transform: rotateX(90deg);
  }
  .container:after{
    transform: rotatey(90deg);
  }
  .side{
    position: absolute;
    width: $cubeSize;
    height: $cubeSize;
    opacity: 0.8;
  }
  .back{
    transform: translateZ(-$cubeTranslate);
    background: pink;
  }
  .left{
    transform: translateX(-$cubeTranslate) rotateY(90deg);
    background: green;
  }
  .right{
    transform: translateX($cubeTranslate) rotateY(90deg);
    background: black;
  }
  .top{
    transform: translateY(-$cubeTranslate) rotateX(90deg);
    background: blue;
  }
  .bottom{
    transform: translateY($cubeTranslate) rotateX(90deg);
    background: red;
  }
  .front{
    transform: translateZ($cubeTranslate);
    background: gold;
  }
  @keyframes rotate{
    100%{
      transform: rotateX(360deg) rotateY(360deg) rotateZ(360deg);
    }
  }
}
</style>