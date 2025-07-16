<script lang="ts">
import {Options, Vue} from "vue-class-component";
import otherStore from "@/store/modules/certificates/otherStore";
import Slider from "@/components/util/Slider.vue";
import {openGraphMixin} from "@/assets/ogimage/openGraphMixin";

@Options({
  mixins: [openGraphMixin],
  computed: {
    otherStore() {
      return otherStore
    }
  },
  data() {
    const images = require.context('@/assets/certificates/other/', false, /\.(jpg|jpeg|png|webp)$/);
    return {
      tableView: false,
      images: images,
      sliderImages: images.keys().map((key: string) => images(key))
    };
  },
  mounted() {
    const mainTitle = 'Other certificates';
    const title = 'Portfolio - Other certificates';
    const metaDescription = 'Anatolii Zorin\'s Portfolio with all diplomas, certificates, interesting projects and a detailed description of the experience gained at previous jobs.';
    const description = 'Anatolii Zorin\'s Portfolio - Other certificates';
    const imageUrl = 'https://zorin.expert/assets/ogimage/certificates/OG_Image_Other.jpg';
    const url = 'https://zorin.expert/certificates/other';

    this.setOpenGraphTags(metaDescription, title, description, imageUrl, url);
    this.setPageTitle(mainTitle);
  },
  methods: {
    changeView() {
      this.tableView = !this.tableView;
    }
  },
  components: {Slider},
})
export default class Other extends Vue {}
</script>

<template>
  <div class="inner">
    <div class="other">
      <h1>
        <router-link class="back" to="/certificates" title="Back to Certificates"><i class="fa fa-arrow-circle-left"></i>
        </router-link>
        {{ $t('cert.other') }}
        <i @click="changeView" :title="tableView ? $t('extra.listView') : $t('extra.tableView')"><span :class="['fa', tableView ? 'fa-list' : 'fa-th']"></span></i>
      </h1>
      <line></line>
      <div v-if="tableView" class="table">
        <table>
          <thead>
          <tr>
            <th>№</th>
            <th>{{ $t('cert.title') }}</th>
            <th>{{ $t('cert.number') }}</th>
            <th>{{ $t('cert.grade') }}</th>
            <th>{{ $t('cert.date') }}</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="sert in otherStore.state.otherStore" :key="sert.id">
            <td class="nomer">{{ sert.id }}</td>
            <td class="name"><a :href="sert.image" title="In more detail..." target="_blank">{{
                this.$i18n.locale === "uk" ? sert.title_ua : this.$i18n.locale === "es" ? sert.title_es : sert.title_en
              }}</a></td>
            <td class="number">{{ sert.regnumber }}</td>
            <td class="grade">{{
                this.$i18n.locale === "uk" ? sert.grade_ua : this.$i18n.locale === "es" ? sert.grade_es : sert.grade_en
              }}
            </td>
            <td class="date">{{ sert.examdate }}</td>
          </tr>
          </tbody>
        </table>
      </div>
      <div v-else class="container">
        <div v-for="sert in otherStore.state.otherStore" :key="sert.id" class="certificate">
          <a class="block" :href="sert.image" title="Certificate..." target="_blank">
            <h3>{{ sert.id }}. {{
                this.$i18n.locale === "uk" ? sert.title_ua : this.$i18n.locale === "es" ? sert.title_es : sert.title_en
              }}</h3>
            <div>{{ $t('cert.number') }}: <strong>{{ sert.regnumber }}</strong></div>
            <div>{{ $t('cert.grade') }}: <strong>{{
                this.$i18n.locale === "uk" ? sert.grade_ua : this.$i18n.locale === "es" ? sert.grade_es : sert.grade_en
              }}</strong></div>
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
  background: linear-gradient(to bottom, rgb(234, 250, 250), rgb(253, 229, 255)) no-repeat center;
  .certificate {
    .block {
      background: white;
      transition: border-color .2s ease-in-out, background-color .2s, box-shadow .2s;
    }
    .block:hover {
      background-image: url("@/assets/background/background14.webp");
      background-position: center;
      background-size: cover;
      background-repeat: no-repeat;
      //border-color: rebeccapurple;
      //box-shadow: 3px 3px 4px mediumpurple;
    }
  }

  .other {
    flex: 1 0 auto;

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
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
      .certificate {
        max-width: 27rem;
      }
    }
  }

  .slider {
    margin-bottom: 1rem;
  }

  @media(max-width: 768px) {
    .other {
      h1 {
        font-size: 1.9rem;
      }
      .slider {
        margin-bottom: 0.3rem;
      }
      .table {
        font-size: 0.9rem;
        .name {width: 12rem;}
        .nomer, .number, .grade, .date {
          font-size: 0.5rem;
        }
      }
    }
  }
}
</style>