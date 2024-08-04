<script lang="ts">
import {Options, Vue} from "vue-class-component";
import englishStore from "@/store/modules/certificates/englishStore";
import Slider from "@/components/util/Slider.vue";
import {openGraphMixin} from "@/assets/ogimage/openGraphMixin";
@Options({
  mixins: [openGraphMixin],
  computed: {englishStore() {return englishStore},
    orderedSert() {
      if (this.reverseOrder) {
        return this.englishStore.state.englishStore.slice().reverse();
      } else {
        return this.englishStore.state.englishStore;
      }
    },
  },
  data() {
    const images = require.context('@/assets/certificates/english/', false, /\.(jpg|jpeg|png|webp)$/);
    return {
      tableView: false,
      reverseOrder: false, // Изначально установлен в false для последовательного порядка
      images: images,
      sliderImages: images.keys().map((key: string) => images(key))
    }
  },
  mounted() {
    const mainTitle = 'English language';
    const title = 'Portfolio - English language certificates';
    const metaDescription = 'Anatolii Zorin\'s Portfolio with all diplomas, certificates, interesting projects and a detailed description of the experience gained at previous jobs.';
    const description = 'Anatolii Zorin\'s Portfolio - English language certificates';
    const imageUrl = 'https://zorin.expert/assets/ogimage/certificates/OG_Image_English.jpg';
    const url = 'https://zorin.expert/certificates/english';

    this.setOpenGraphTags(metaDescription, title, description, imageUrl, url);
    this.setPageTitle(mainTitle);
  },
  methods: {
    changeView() {
      this.tableView = !this.tableView;
    },
    toggleOrder() {
      this.reverseOrder = !this.reverseOrder; // Инвертируем значение reverseOrder при клике на кнопку
    },
  },
  components: {Slider},})
export default class English extends Vue {}
</script>

<template>
  <div class="inner">
    <div class="english">
      <h1>
        <router-link class="back" to="/certificates" title="Back to Certificates"><i class="fa fa-arrow-circle-left"></i>
        </router-link>
        {{ $t('cert.english') }}
        <i @click="changeView"><span :class="['fa', tableView ? 'fa-list' : 'fa-th']"></span></i> <i
        @click="toggleOrder"><span :class="['fas', reverseOrder ? 'fa-arrow-alt-circle-up' : 'fa-arrow-alt-circle-down']"></span></i>
      </h1>
      <line></line>
      <div v-if="tableView" class="table">
        <table>
          <thead>
          <tr>
            <th>№</th>
            <th>{{ $t('cert.title') }}</th>
            <th>{{ $t('cert.level') }}</th>
            <th>{{ $t('cert.grade') }}</th>
            <th>{{ $t('cert.date') }}</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="sert in orderedSert" :key="sert.id">
            <td class="nomer">{{ sert.id }}</td>
            <td class="name"><a :href="sert.image" title="In more detail..." target="_blank">{{ this.$i18n.locale === "uk" ? sert.title_ua : this.$i18n.locale === "es" ? sert.title_es : sert.title_en }}</a></td>
            <td class="number">{{ sert.regnumber }}</td>
            <td class="grade">{{ this.$i18n.locale === "uk" ? sert.grade_ua : this.$i18n.locale === "es" ? sert.grade_es : sert.grade_en }}</td>
            <td class="date">{{ sert.examdate }}</td>
          </tr>
          </tbody>
        </table>
      </div>
      <div v-else class="container">
        <div v-for="sert in orderedSert" :key="sert.id" class="certificate">
          <a class="block" :href="sert.image" title="Certificate..." target="_blank">
            <h3>{{ sert.id }}. {{ this.$i18n.locale === "uk" ? sert.title_ua : this.$i18n.locale === "es" ? sert.title_es : sert.title_en }}</h3>
            <div>{{ $t('cert.level') }}: <strong>{{ sert.regnumber }}</strong></div>
            <div>{{ $t('cert.grade') }}: <strong>{{ this.$i18n.locale === "uk" ? sert.grade_ua : this.$i18n.locale === "es" ? sert.grade_es : sert.grade_en }}</strong></div>
            <div>{{ $t('cert.date') }}: {{ sert.examdate }}</div>
          </a>
        </div>
      </div>
    </div>
    <div class="slider">
      <Slider :images=sliderImages></Slider>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.inner {
  .table {background: white;}
  background: linear-gradient(to bottom, rgb(229, 255, 229), rgb(250, 247, 234)) no-repeat center;
  .certificate {
    .block {
      background: white;
      transition: border-color .2s ease-in-out, background-color .2s, box-shadow .2s;
    }
    .block:hover {
      background-image: url("@/assets/background/background06.webp");
      background-position: center;
      background-size: cover;
      background-repeat: no-repeat;
    }
  }

  .english {
    flex: 1 0 auto;
    .back {
      display: none;
      @media (max-width: 768px) {
        display: inline-flex;
        text-decoration: none;
        color: limegreen;
        margin-right: 0.1rem;
        i:hover {
          color: green;
        }
      }
    }
    .container {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;
      .certificate {
        max-width: 27rem;
      }
    }
  }
  .slider {margin-bottom: 1rem;}

  @media(max-width: 1020px) {
    .english {
      .container {.certificate {max-width: 24rem;}}
    }
  }

  @media(max-width:768px) {
    h1 {font-size: 1.9rem;}
    .slider {margin-bottom: 0.3rem;}
    .diplom, .title {font-size: 1.2rem}
    .table {
      font-size: 0.9rem;
      .name {width: 12rem;}
      .nomer, .number, .grade, .date {font-size: 0.5rem;}
    }
  }
}
</style>