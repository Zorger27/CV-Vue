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
    }
  },
  computed: {
    otherStore() {return otherStore},
    pmStore() {return pmStore},
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
    this.setCanonical(url);
    },
  methods: {
    changeView() {this.tableView = !this.tableView;},
  },
  components: {Slider},
})
export default class Skills extends Vue {}
</script>

<template>
  <div class="skills">
    <h1>
      {{$t('skills.title')}}
    </h1>
    <line></line>
    <div class="container">
      <div class="type-skills">
        <div class="hard-skills">
          <h3>{{$t('skills.hard.title')}}</h3>
          <ul>
            <li><span>&#9745;</span>{{$t('skills.hard.group01')}}</li>
            <li><span>&#9745;</span>{{$t('skills.hard.group02')}}</li>
            <li><span>&#9745;</span>{{$t('skills.hard.group03')}}</li>
            <li><span>&#9745;</span>{{$t('skills.hard.group04')}}</li>
            <li><span>&#9745;</span>{{$t('skills.hard.group05')}}</li>
          </ul>
        </div>
        <div class="soft-skills">
          <h3>{{$t('skills.soft.title')}}</h3>
          <ul>
            <li><span>&#9745;</span>{{$t('skills.soft.group01')}}</li>
            <li><span>&#9745;</span>{{$t('skills.soft.group02')}}</li>
            <li><span>&#9745;</span>{{$t('skills.soft.group03')}}</li>
            <li><span>&#9745;</span>{{$t('skills.soft.group04')}}</li>
            <li><span>&#9745;</span>{{$t('skills.soft.group05')}}</li>
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
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    grid-gap: 0.3rem;
    grid-auto-flow: column;
    grid-template-areas:
      "type-skills"
      "iq-test"
      "special-certificates";

    .type-skills {
      grid-area: type-skills;
      display: inline-flex;
      flex-wrap: wrap;
      justify-content: center;
      margin: 0 0.5rem 0 0;
      font-size: 1.8rem;

      h3 {
        text-decoration: underline;
        color: deeppink;
        margin-top: 0.5rem;
        margin-bottom: -1.7rem;
        padding: 0 0 0.3rem 1.5rem;
      }
      span {margin-right: 0.5rem;}

      .hard-skills {
        font-size: 1.6rem;
        width: 47rem;
        ul {
          list-style: none;
          padding: 0 0 0.3rem 1.5rem;
          margin: 1.4rem 0 0;
        }
      }

      .soft-skills {
        font-size: 1.6rem;
        width: 47rem;
        ul {
          list-style: none;
          padding: 0 0 0.3rem 1.5rem;
          margin: 1.4rem 0 0;
        }
      }
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
        .certificate {max-width: 27rem;}
      }
    }
  }
}

@media(max-width:1020px) {
  .skills {
    .container {
      grid-template-columns: 1fr;
      grid-template-areas:
        "type-skills"
        "iq-test"
        "special-certificates";

      .type-skills {
        grid-area: type-skills;
        display: inline-flex;
        flex-wrap: wrap;
        justify-content: space-around;
        h3 {
          font-size: 1.5rem;
          padding: 0 0 0.3rem 1.8rem;
        }

        .hard-skills {
          font-size: 1.1rem;
          width: 31.5rem;
          ul {padding: 0 0 0 0.3rem;}
        }
        .soft-skills {
          font-size: 1.1rem;
          width: 31.5rem;
          ul {padding: 0 0 0 0.3rem;}
        }
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

      .type-skills {
        display: grid;
        justify-content: left;
        font-size: 1.3rem;

        h3 {
          font-size: 1.3rem;
          padding: 0 0 0.3rem 1.9rem;
        }

        .hard-skills {
          font-size: 1.1rem;
          ul {padding: 0 0.2rem 0.1rem 0.5rem;}
        }
        .soft-skills {
          font-size: 1.1rem;
          ul {padding: 0 0.2rem 0.1rem 0.5rem;}
        }
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