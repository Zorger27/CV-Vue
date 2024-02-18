<script lang="ts">
import {Options, Vue} from "vue-class-component";
import {openGraphMixin} from "@/assets/ogimage/openGraphMixin";
import ToggleFullScreen from "@/components/util/ToggleFullScreen.vue";
import CubeCSS from "@/components/other/CubeCSS.vue";
import CubeCSSnew from "@/components/other/CubeCSSnew.vue";
import CubeCSSold from "@/components/other/CubeCSSold.vue";

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
  components: {CubeCSSold, CubeCSSnew, CubeCSS, ToggleFullScreen},
})
export default class Cube extends Vue {
}
</script>

<template>
  <div class="cube">
    <h1>
      <router-link class="back-to-menu" to="/extra/graphics" title="Back to 3D Graphics page"><i class="fa fa-arrow-circle-left"></i>
      </router-link>
      {{ $t('extra.graphics.cube') }} <ToggleFullScreen></ToggleFullScreen>
    </h1>
    <line></line>
    <div class="inner">
      <CubeCSS></CubeCSS>
<!--      <CubeCSSnew></CubeCSSnew>-->
<!--      <CubeCSSold></CubeCSSold>-->
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
  .inner {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 65vh;
  }
  @media (max-width: 768px) {
    .inner {
      height: 55vh;
    }
  }
}
</style>