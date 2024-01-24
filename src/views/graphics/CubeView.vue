<script lang="ts">
import {Options, Vue} from "vue-class-component";
import {openGraphMixin} from "@/assets/ogimage/openGraphMixin";

@Options({
  mixins: [openGraphMixin],
  mounted() {
    const mainTitle = 'Cube (only CSS)';
    const title = 'Portfolio - 3D Graphics - Cube (only CSS)';
    const metaDescription = 'Anatolii Zorin\'s Portfolio with all diplomas, certificates, interesting projects and a detailed description of the experience gained at previous jobs.';
    const description = 'Anatolii Zorin\'s Portfolio - 3D Graphics - Cube (only CSS)';
    const imageUrl = 'https://zorin.expert/assets/ogimage/extra/graphics/OG_Image_Cube.jpg';
    const url = 'https://zorin.expert/extra/graphics/cube';

    this.setOpenGraphTags(metaDescription, title, description, imageUrl, url);
    this.setPageTitle(mainTitle);
  },
  components: {},
})
export default class Cube extends Vue {
}
</script>

<template>
  <div class="cube">
    <h1>
      <router-link class="back-to-menu" to="/extra/graphics" title="Back to 3D Graphics page"><i class="fa fa-arrow-circle-left"></i>
      </router-link>
      {{ $t('extra.graphics.cube') }}
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
  background-image: url("@/assets/background/background18.webp");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  .back-to-menu {
      display: inline-flex;
      text-decoration: none;
      margin-right: 0.1rem;
  }

  .body {
    height: 10rem;
    width: 10rem;
    margin: 6rem auto;
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