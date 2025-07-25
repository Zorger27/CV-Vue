<script lang="ts">
import {Options, Vue} from "vue-class-component";
import otherStore from "@/store/modules/certificates/otherStore";
import Slider from "@/components/util/Slider.vue";
import pmStore from "@/store/modules/certificates/pmStore";
import {openGraphMixin} from "@/assets/ogimage/openGraphMixin";

@Options({
  mixins: [openGraphMixin],
  data() {
    return {
      sliderImages: [
        require('@/assets/certificates/other/09_D0000952361.webp'),
        require('@/assets/certificates/pm/03_Critical_Thinking.webp'),
        require('@/assets/certificates/pm/04_Strategic_Thinking.webp'),
        require('@/assets/certificates/other/10_TP17348317.webp'),
        require('@/assets/certificates/other/01_TP03316433.webp'),
        require('@/assets/certificates/other/02_TP18727720.webp')
      ],
      tableView: false,
      isCodersrankSkillsChartVisible: false,
      windowWidth: window.innerWidth,
    }
  },
  computed: {
    otherStore() {return otherStore},
    pmStore() {return pmStore},
    isSmallScreen() {return this.windowWidth <= 768;},
    isMediumScreen() {return this.windowWidth > 768 && this.windowWidth <= 1020;},
    gridColumns() {
      if (!this.isCodersrankSkillsChartVisible) {
        return '1fr';
      } else if (this.isSmallScreen || this.isMediumScreen) {
        return '1fr';
      } else {
        return '2fr 1fr';
      }
    },
    gridAreas() {
      if (!this.isCodersrankSkillsChartVisible) {
        return '"type-skills" "iq-test" "special-certificates"';
      } else if (this.isSmallScreen || this.isMediumScreen) {
        return '"codersrank-skills-chart" "type-skills" "iq-test" "special-certificates"';
      } else {
        return '"codersrank-skills-chart type-skills" "iq-test iq-test" "special-certificates special-certificates"';
      }
    },
    shouldApplyAdditionalStyles() {return !this.isCodersrankSkillsChartVisible && (!this.isSmallScreen || !this.isMediumScreen);},
    selectedOther() {
      return [
        otherStore.state.otherStore[8],
        pmStore.state.pmStore[2],
        pmStore.state.pmStore[3],
        otherStore.state.otherStore[9],
        otherStore.state.otherStore[0],
        otherStore.state.otherStore[1]
      ];
    },
    getPdfUrl() {
      if (this.$i18n.locale === 'uk') {
        return '/assets/file/IQ_test_report_17-07-2023_ukr.pdf';
      } else if (this.$i18n.locale === 'es') {
        return '/assets/file/IQ_test_report_17-07-2023_esp.pdf';
      } else {
        return '/assets/file/IQ_test_report_17-07-2023_eng.pdf';
      }
    },
    getImageUrl() {
      if (this.$i18n.locale === 'uk') {
        return require('@/assets/documents/My IQ score 17-07-2023 ukr.webp');
      } else if (this.$i18n.locale === 'es') {
        return require('@/assets/documents/My IQ score 17-07-2023 esp.webp');
      } else {
        return require('@/assets/documents/My IQ score 17-07-2023 eng.webp');
      }
    }
  },
  mounted() {
    const mainTitle = 'My Skills';
    const title = 'Portfolio - My Skills';
    const metaDescription = 'Anatolii Zorin\'s Portfolio with all diplomas, certificates, interesting projects and a detailed description of the experience gained at previous jobs.';
    const description = 'Anatolii Zorin\'s Portfolio - My Skills';
    const imageUrl = 'https://zorin.expert/assets/ogimage/menu/OG_Image_Skills.jpg';
    const url = 'https://zorin.expert/skills';

    this.setOpenGraphTags(metaDescription, title, description, imageUrl, url);
    this.setPageTitle(mainTitle);

    // const savedValue = localStorage.getItem('isCodersrankSkillsChartVisible');
    //   if (savedValue) {this.isCodersrankSkillsChartVisible = savedValue === 'true';}
    window.addEventListener('resize', this.handleResize);
    },
  beforeUnmount() {
    window.removeEventListener('resize', this.handleResize);
    },
  watch: {
    isSmallScreen() { this.updateLayout(); },
    isMediumScreen() { this.updateLayout(); },
  },
  methods: {
    changeView() {this.tableView = !this.tableView;},
    // changeChart() {
    //   this.isCodersrankSkillsChartVisible = !this.isCodersrankSkillsChartVisible;
    //   localStorage.setItem('isCodersrankSkillsChartVisible', this.isCodersrankSkillsChartVisible.toString());
    //   },
    handleResize() {this.windowWidth = window.innerWidth;},
    updateLayout() {this.$forceUpdate();},
  },
  components: {Slider},
})
export default class Skills extends Vue {}
</script>

<template>
  <div class="skills">
    <h1>
      {{$t('skills.title')}}
<!--      <i @click="changeChart" class="dandruff"><span :class="['fa', isCodersrankSkillsChartVisible ? 'fa-check-circle' : 'fa-hat-wizard']"></span></i>-->
    </h1>
    <line></line>
    <div class="container" :style="{gridTemplateColumns: gridColumns, gridTemplateAreas: gridAreas}">
<!--      <div v-if="isCodersrankSkillsChartVisible">-->
<!--        <codersrank-skills-chart username="zorger27" labels="true" legend="true" skills="JSON, JavaScript, Vue, CSS, SCSS, HTML, TypeScript" branding="false"></codersrank-skills-chart>-->
<!--      </div>-->
      <div :class="{'type-skills': true, 'additional-styles': shouldApplyAdditionalStyles}">
        <div class="hard-skills">
          <h3>{{$t('skills.hard')}}</h3>
          <ul>
            <li><span>&#9745;</span>Html5, CSS3, JavaScript</li>
            <li><span>&#9745;</span>Vue.js, Angular, Three.js</li>
            <li><span>&#9745;</span>Git, GitHub</li>
            <li><span>&#9745;</span>Figma, Photoshop</li>
          </ul>
        </div>
        <div class="soft-skills">
          <h3>{{$t('skills.soft.sskills')}}</h3>
          <ul>
            <li><span>&#9745;</span>{{$t('skills.soft.management')}}</li>
            <li><span>&#9745;</span>{{$t('skills.soft.strategic')}}</li>
            <li><span>&#9745;</span>{{$t('skills.soft.critical')}}</li>
            <li><span>&#9745;</span>{{$t('skills.soft.negotiation')}}</li>
          </ul>
        </div>
      </div>
      <div class="iq-test">
        <line></line>
        <h2>{{$t('skills.iq.title')}}</h2>
        <div class="iq">
          <div class="iq-photo">
            <img :src="getImageUrl" alt="Localized IQ score Image">
          </div>
          <div class="iq-desc">
            <ul>
              <li>{{$t('skills.iq.organization')}}<span style="font-weight: bold">IMPULSE</span></li>
              <li>{{$t('skills.iq.date')}}<span style="font-weight: bold">17.07.2023</span></li>
              <li>
                <a style="text-decoration: none" :href="getPdfUrl" :title="$t('skills.iq.iqReport')" target="_blank">
                  <span>{{$t('skills.iq.report')}}</span>
                  <i class="fas fa-cloud-download"></i>
                </a>
              </li>
              <li><a href="https://impulse.onelink.me/92Ym/testiq" title="Test your IQ here" target="_blank">{{$t('skills.iq.test')}}</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div class="special-certificates">
        <line></line>
        <h2>{{$t('skills.special')}} <i @click="changeView" :title="tableView ? $t('extra.listView') : $t('extra.tableView')"><span :class="['fa', tableView ? 'fa-list' : 'fa-th']"></span></i></h2>
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
            <tr v-for="(sert, index) in selectedOther" :key="sert.id">
              <td class="nomer">{{ index + 1 }}</td>
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
        <div v-else class="inner">
          <div v-for="(sert, index) in selectedOther" :key="sert.id" class="certificate">
            <a class="block" :href="sert.image" title="Certificate..." target="_blank">
              <h3>{{ index + 1 }}. {{
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
    </div>
    <div class="slider">
      <Slider :images=sliderImages></Slider>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.skills {
  flex: 1 0 auto;
  background: linear-gradient(to bottom, rgb(255, 240, 244), rgb(229, 251, 255)) no-repeat center;
  text-align: left;

  .table {background: white;}
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
  h2 {
    text-align: center;
    padding: 0;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
    font-size: 2rem;
  }
  .container {
    display: grid;
    //grid-template-columns: 2fr 1fr;
    grid-template-rows: auto;
    grid-gap: 0.5rem;
    grid-auto-flow: column;
    //grid-template-areas:
    //  "codersrank-skills-chart type-skills"
    //  "iq-test iq-test"
    //  "special-certificates special-certificates";

    codersrank-skills-chart {
      grid-area: codersrank-skills-chart;
      padding: 0.3rem;
      //margin-top: 0.5rem;
      //margin-bottom: 0.5rem;
      width: 100%;
    }

    .type-skills {
      grid-area: type-skills;
      //display: inline-flex;
      //flex-wrap: wrap;
      //justify-content: space-around;
      margin: 0 0.5rem 0 0;
      font-size: 2rem;

      h3 {
        text-decoration: underline;
        color: deeppink;
        margin-top: 0.5rem;
        margin-bottom: -1.7rem;
        padding: 0 0 0.3rem 1.5rem;
      }
      span {
        margin-right: 0.5rem;
      }

      .hard-skills {
        ul {
          list-style: none;
          padding: 0 0 0.3rem 1.5rem;
          margin: 1.4rem 0 0;
        }
      }
      .soft-skills {
        ul {
          list-style: none;
          padding: 0 0 0.3rem 1.5rem;
          margin: 1.4rem 0 0;
        }
      }
    }
    .additional-styles {
      display: inline-flex;
      flex-wrap: wrap;
      justify-content: space-around;
    }

    .iq-test {
      grid-area: iq-test;
      .iq {
        display: inline-flex;
        margin-left: 1rem;
        .iq-photo { img {height: 15rem;} }
        .iq-desc {
          font-size: 1.8rem;
          i {color: deeppink;}
          i:hover {color: blue;}
        }
      }
    }
    .special-certificates {
      grid-area: special-certificates;
      text-align: center;
      .table {
        font-size: 1.8rem;
      }
      .inner {
        display: inline-flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        //margin-bottom: 0.5rem;
        .certificate {
          max-width: 27rem;
        }
      }
    }
  }
}

@media(max-width:1020px) {
  .skills {
    //h1 {font-size: 1.9rem;}
    .container {
      grid-gap: 0.4rem;
      //grid-template-columns: 1fr;
      //grid-template-areas:
      //  "codersrank-skills-chart"
      //  "type-skills"
      //  "iq-test"
      //  "special-certificates";

      .type-skills {
        display: inline-flex;
        justify-content: space-around;
        font-size: 1.7rem;
      }
      .iq-test {
        .iq {
          margin-left: 0.7rem;
          .iq-photo {img {height: 12rem;} }
          .iq-desc {font-size: 1.6rem;}
        }
      }
      .special-certificates {
        .table {
          font-size: 1.60rem;
          padding: 0.8rem;
          margin: 0.5rem auto;
          tr, td, th {padding: 0.4rem;}
          .number, .grade, .date {font-size: 1.4rem}
        }
      }
    }
  }
}

@media(max-width:768px) {
  .skills {
    h1 {font-size: 1.8rem;}
    .container {
      grid-gap: 0.3rem;

      codersrank-skills-chart {
        padding: 0.2rem;
        --label-font-size: 9px;
        --label-font-weight: 300;
      }

      .type-skills {
        display: grid;
        justify-content: left;
        font-size: 1.4rem;
      }
      .iq-test {
        .iq {
          display: block;
          margin: 0 0.5rem;
          .iq-photo {
            text-align: center;
            img {height: 15rem;}
          }
          .iq-desc {
            font-size: 1.4rem;
            text-align: left;
            ul {
              margin: 0.5rem 0 0 0;
            }
          }
        }
      }
      .special-certificates {
        h2 {
          font-size: 1.6rem;
        }
        .table {
          font-size: 0.9rem;
          padding: 0;
          margin: 0.5rem auto;
          border: none;
          border-radius: unset;
          tr, td, th {padding: 0.3rem;}
          .nomer, .name, .version, .price {width: max-content;}
          .nomer, .number, .grade, .date {
            font-size: 0.5rem;
          }
        }
      }
    }
  }
}
</style>