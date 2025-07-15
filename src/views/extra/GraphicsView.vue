<script lang="ts">
import {Options, Vue} from "vue-class-component";
import {openGraphMixin} from "@/assets/ogimage/openGraphMixin";

@Options({
  mixins: [openGraphMixin],
  mounted() {
    const mainTitle = '3D Graphics';
    const title = 'Portfolio - 3D Graphics';
    const metaDescription = 'Anatolii Zorin\'s Portfolio with all diplomas, certificates, interesting projects and a detailed description of the experience gained at previous jobs.';
    const description = 'Anatolii Zorin\'s Portfolio - 3D Graphics';
    const imageUrl = 'https://zorin.expert/assets/ogimage/extra/OG_Image_Graphics.jpg';
    const url = 'https://zorin.expert/extra/graphics';

    this.setOpenGraphTags(metaDescription, title, description, imageUrl, url);
    this.setPageTitle(mainTitle);
  },
  components: {},
})
export default class Graphics extends Vue {
}
</script>

<template>
  <div class="graphics">
    <h1>
      <router-link class="back" to="/extra" title="Back to Extra page"><i class="fa fa-arrow-circle-left"></i>
      </router-link>
      {{ $t('extra.graphics.title') }}
    </h1>
    <line></line>
    <div class="container">
      <div class="diploma">
        <router-link to="/extra/graphics/cube" class="block" title="Cube (CSS)"><h3>{{ $t('extra.graphics.cube') }}</h3></router-link>
      </div>
      <div class="diploma">
        <router-link to="/extra/graphics/cubejs" class="block" title="Cube (JavaScript)"><h3>{{ $t('extra.graphics.cubejs') }}</h3></router-link>
      </div>
      <div class="diploma">
        <router-link to="/extra/graphics/cube3d" class="block" title="CuboVerse"><h3>{{ $t('extra.graphics.cube3d') }}</h3></router-link>
      </div>
      <div class="diploma">
        <router-link to="/extra/graphics/creep3d" class="block" title="Creeping Lines (Three.js)"><h3>{{ $t('extra.graphics.creep3d') }}</h3></router-link>
      </div>
      <div class="diploma">
        <router-link to="/extra/graphics/configurator3d" class="block" title="3D Configurator (Three.js)"><h3>{{ $t('extra.graphics.configurator3d.title') }}</h3></router-link>
      </div>
      <div class="diploma">
        <router-link to="/extra/graphics/couture3d" class="block" title="Couture Metaverse 3D (Three.js)"><h3>{{ $t('extra.graphics.couture3d.title') }}</h3></router-link>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.graphics {
  flex: 1 0 auto;
  background-image: url("@/assets/background/background17.webp");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  .back {
    display: none;
    @media (max-width: 768px) {
      display: inline-flex;
      text-decoration: none;
      margin-right: 0.1rem;
    }
  }

  .container {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    margin: 0.5rem auto;
    .diploma, .block {
      font-size: 1.6rem;
      padding: 1.2rem;
      margin: 0;
      @media (max-width: 1020px) {
        font-size: 1.5rem;
        padding: 1rem;
        margin: 0;
      }
      @media (max-width: 768px) {
        font-size: 1.2rem;
        padding: 0.8rem;
        margin: 0;
      }
    }
  }

  .diploma {
    a {
      border: 1px solid #780485;
      background-color: white;
      background-image: radial-gradient(at 0% 0%, hsla(189, 100%, 56%, 1) 0px, transparent 50%),
      radial-gradient(at 0% 100%, hsla(343, 100%, 76%, 1) 0px, transparent 50%),
      radial-gradient(at 80% 100%, hsla(28, 100%, 74%, 1) 0px, transparent 50%),
      radial-gradient(at 80% 0%, hsla(242, 100%, 70%, 1) 0px, transparent 50%);
      box-shadow: 3px 3px 4px 0 rgba(178, 25, 170, 0.5);

      h3 {
        color: black;
      }
    }

    a:hover {
      text-decoration: none;
      color: inherit;
      border: 1px solid #bbeafa;
      box-shadow: 3px 3px 4px 0 rgba(0, 0, 0, 0.7);
      background: linear-gradient(to bottom, rgb(229, 251, 255), rgb(255, 240, 244)) no-repeat center;

      h3 {
        color: red;
      }
    }
  }
}
</style>