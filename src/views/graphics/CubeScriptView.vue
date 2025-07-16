<script lang="ts">
import {Options, Vue} from "vue-class-component";
import {openGraphMixin} from "@/assets/ogimage/openGraphMixin";
import ToggleFullScreen from "@/components/util/ToggleFullScreen.vue";
import CubeJS from "@/components/other/CubeJS.vue";

@Options({
  mixins: [openGraphMixin],
  mounted() {
    const mainTitle = 'Cube (JavaScript)';
    const title = 'Portfolio - 3D Graphics - Cube (JavaScript)';
    const metaDescription = 'Anatolii Zorin\'s Portfolio with all diplomas, certificates, interesting projects and a detailed description of the experience gained at previous jobs.';
    const description = 'Anatolii Zorin\'s Portfolio - 3D Graphics - Cube (JavaScript)';
    const imageUrl = 'https://zorin.expert/assets/ogimage/extra/graphics/OG_Image_CubeJS.jpg';
    const url = 'https://zorin.expert/extra/graphics/cubejs';

    this.setOpenGraphTags(metaDescription, title, description, imageUrl, url);
    this.setPageTitle(mainTitle);

    window.addEventListener('wheel', this.handleMouseWheel);
  },
  beforeUnmount() {
    // Удаление обработчика события при уничтожении компонента
    window.removeEventListener('wheel', this.handleMouseWheel);
  },
  data() {
    return {
      scale: 1,
    };
  },
  methods: {
    handleMouseWheel(event: WheelEvent) {
      // Обработчик события прокрутки мыши
      // event.deltaY содержит информацию о направлении прокрутки

      // Пример изменения значения бегунка (scale) при прокрутке мыши
      if (event.deltaY > 0) {
        this.scale -= 0.03; // Уменьшение масштаба при прокрутке вниз
      } else {
        this.scale += 0.03; // Увеличение масштаба при прокрутке вверх
      }

      // Ограничение значений масштаба (если нужно)
      this.scale = Math.max(0.5, Math.min(2, this.scale));
    },
  },
  components: {CubeJS, ToggleFullScreen},
})
export default class CubeScript extends Vue {
}
</script>

<template>
  <div class="cube">
    <h1>
      <router-link class="back-to-menu" to="/extra/graphics" :title="$t('extra.graphics.back')"><i class="fa fa-arrow-circle-left"></i>
      </router-link>
      {{ $t('extra.graphics.cubejs') }} <ToggleFullScreen></ToggleFullScreen> <input type="range" v-model="scale" min="0.5" max="2" step="0.1" />
    </h1>
    <line></line>
    <div class="inner">
      <CubeJS :scale="scale"></CubeJS>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.cube {
  flex: 1 0 auto;
  background-image: url("@/assets/background/background01.webp");
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
    overflow: hidden;
  }
  @media (max-width: 768px) {
    .inner {
      height: 60vh;
    }
  }
}
</style>