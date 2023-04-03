<script lang="ts">
import {Options, Vue} from "vue-class-component";

@Options({components: {},})
export default class CubeView extends Vue {
}
</script>

<template>
  <div class="cube">
    <h1>
      <router-link class="back-to-menu" to="/extra" title="Back to Extra page"><i class="fa fa-arrow-circle-left"></i>
      </router-link>
      {{ $t('extra.h1m.cube') }}
    </h1>
    <line></line>
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
  </div>
</template>

<style lang="scss" scoped>
.cube {
  flex: 1 0 auto;
  .back-to-menu {
    display: none;
    @media (max-width: 768px) {
      display: inline-flex;
      text-decoration: none;
      margin-right: 0.1rem;
    }
  }
  .body {
    height: 10rem;
    width: 10rem;
    margin: 6rem auto;
    //border: 1px solid blue;
    //border-radius: 5%;
    //box-shadow: inset 0 0 15px 0 lightblue;
    perspective: 1000px;
    perspective-origin: center -5rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .side,
  .container{
    width: 10rem;
    height: 10rem;
  }
  .container{
    transform-style: preserve-3d;
    animation: 10s rotate infinite linear;
  }
  .container:before,
  .container:after{
    content: "";
    display: block;
    position: absolute;
    width: 10rem;
    height: 10rem;
  }
  .container:before{
    transform: rotateX(90deg);
  }
  .container:after{
    transform: rotatey(90deg);
  }
  .side{
    position: absolute;
    width: 10rem;
    height: 10rem;
    opacity: 0.8;
  }
  .back{
    transform: translateZ(-5rem);
    background: pink;
  }
  .left{
    transform: translateX(-5rem) rotateY(90deg);
    background: green;
  }
  .right{
    transform: translateX(5rem) rotateY(90deg);
    background: black;
  }
  .top{
    transform: translateY(-5rem) rotateX(90deg);
    background: blue;
  }
  .bottom{
    transform: translateY(5rem) rotateX(90deg);
    background: red;
  }
  .front{
    transform: translateZ(5rem);
    background: gold;
  }
  @keyframes rotate{
    100%{
      transform: rotatex(360deg) rotateY(360deg) rotateZ(360deg);
      /*transform: rotateY(360deg);*/
    }
  }
}
@media (max-width: 768px) {
  .cube {
    .body {
      margin: 6rem auto;
    }
  }
}
</style>