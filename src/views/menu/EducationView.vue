<script lang="ts">
import {Options, Vue} from "vue-class-component";
import englishdomStore from "@/store/modules/education/englishdomStore";
import languagesStore from "@/store/modules/education/languagesStore";
import itvdnStore from "@/store/modules/education/itvdnStore";
import progStore from "@/store/modules/education/progStore";
import knuteStore from "@/store/modules/education/knuteStore";
import {openGraphMixin} from "@/assets/ogimage/openGraphMixin";
@Options({
  mixins: [openGraphMixin],
  computed: {
    knuteStore() {return knuteStore},
    progStore() {return progStore},
    itvdnStore() {return itvdnStore},
    languagesStore() {return languagesStore},
    englishdomStore() {return englishdomStore}},
  data() {return {tableView: false}},
  mounted() {
    const mainTitle = 'My Education';
    const title = 'Portfolio - My Education';
    const metaDescription = 'Anatolii Zorin\'s Portfolio with all diplomas, certificates, interesting projects and a detailed description of the experience gained at previous jobs.';
    const description = 'Anatolii Zorin\'s Portfolio - My Education';
    const imageUrl = 'https://zorin.expert/assets/ogimage/menu/OG_Image_Education.jpg';
    const url = 'https://zorin.expert/education';

    this.setOpenGraphTags(metaDescription, title, description, imageUrl, url);
    this.setPageTitle(mainTitle);
  },
  methods: {changeView() {this.tableView = !this.tableView;}},
  components: {},})
export default class Education extends Vue {}
</script>

<template>
  <div class="education">
    <h1>{{ $t('education.title') }} <i @click="changeView" :title="tableView ? $t('extra.listView') : $t('extra.tableView')"><span :class="['fa', tableView ? 'fa-list' : 'fa-th']"></span></i></h1>
    <line></line>
    <div v-if="tableView" class="table">
      <table>
        <thead>
        <tr>
          <th class="title" colspan="5">
<!--            <i>11.2020 - {{ $t('education.present') }}</i>-->
            <i>11.2020 - 11.2024</i>
          </th>
        </tr>
        <tr>
          <th class="title" colspan="5">
            <a href="https://itvdn.com" title="Link to the ITVDN" target="_blank"><b style="color: #0303af">ITVDN - IT Video Developers Network</b></a>
          </th>
        </tr>
        <tr>
          <th>№</th>
          <th style="text-align: left;">{{ $t('cert.title') }}</th>
          <th>{{ $t('cert.number') }}</th>
          <th>{{ $t('cert.grade') }}</th>
          <th>{{ $t('cert.date') }}</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="sert in itvdnStore.state.itvdnStore" :key="sert.id">
          <td class="nomer">{{ sert.id }}</td>
          <td class="name"><a :href="sert.image" title="Diploma..." target="_blank">{{ this.$i18n.locale === "uk" ? sert.title_ua : this.$i18n.locale === "es" ? sert.title_es : sert.title_en }}</a></td>
          <td class="number">{{ sert.regnumber }}</td>
          <td class="grade">{{ sert.grade }}</td>
          <td class="date">{{ sert.examdate }}</td>
        </tr>
        </tbody>
      </table>
    </div>
    <div v-else class="container">
      <h2>
<!--        <span>11.2020 - {{ $t('education.present') }}</span><br>-->
        <span>11.2020 - 11.2024</span><br>
        <a href="https://itvdn.com" title="Link to the ITVDN" target="_blank"><b>ITVDN - IT Video Developers Network</b></a>
      </h2>
      <div v-for="sert in itvdnStore.state.itvdnStore" :key="sert.id" class="diploma">
        <a class="block" :href="sert.image" title="Diploma..." target="_blank">
          <h3>{{ sert.id }}. {{ this.$i18n.locale === "uk" ? sert.title_ua : this.$i18n.locale === "es" ? sert.title_es : sert.title_en }}</h3>
          <div>{{ $t('cert.number') }}: <strong>{{ sert.regnumber }}</strong></div>
          <div>{{ $t('cert.grade') }}: <strong>{{ sert.grade }}</strong></div>
          <div>{{ $t('cert.date') }}: {{ sert.examdate }}</div>
        </a>
      </div>
    </div>
    <div v-if="tableView" class="table">
      <table>
        <thead>
        <tr>
          <th class="title" colspan="5">
<!--            <i>11.2021 - {{ $t('education.present') }}</i>-->
            <i>11.2021 - 11.2023</i>
          </th>
        </tr>
        <tr>
          <th class="title" colspan="5">
            <a href="https://www.englishdom.com" title="Link to the EnglishDom" target="_blank"><b style="color: #0303af">EnglishDom</b></a>
          </th>
        </tr>
        <tr>
          <th>№</th>
          <th style="text-align: left;">{{ $t('cert.title') }}</th>
          <th>{{ $t('cert.level') }}</th>
          <th>{{ $t('cert.grade') }}</th>
          <th>{{ $t('cert.date') }}</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="sert in englishdomStore.state.englishdomStore" :key="sert.id">
          <td class="nomer">{{ sert.id }}</td>
          <td class="name"><a :href="sert.image" title="Certificate..." target="_blank">{{ this.$i18n.locale === "uk" ? sert.title_ua : this.$i18n.locale === "es" ? sert.title_es : sert.title_en }}</a></td>
          <td class="number">{{ sert.regnumber }}</td>
          <td class="grade">{{ this.$i18n.locale === "uk" ? sert.grade_ua : this.$i18n.locale === "es" ? sert.grade_es : sert.grade_en }}</td>
          <td class="date">{{ sert.examdate }}</td>
        </tr>
        </tbody>
      </table>
    </div>
    <div v-else class="container">
      <h2>
<!--        <span>11.2021 - {{ $t('education.present') }}</span><br>-->
        <span>11.2021 - 11.2023</span><br>
        <a href="https://www.englishdom.com" title="Link to the EnglishDom" target="_blank"><b>EnglishDom</b></a>
      </h2>
      <div v-for="sert in englishdomStore.state.englishdomStore" :key="sert.id" class="diploma">
        <a class="block" :href="sert.image" title="Certificate..." target="_blank">
          <h3>{{ sert.id }}. {{ this.$i18n.locale === "uk" ? sert.title_ua : this.$i18n.locale === "es" ? sert.title_es : sert.title_en }}</h3>
          <div>{{ $t('cert.level') }}: <strong>{{ sert.regnumber }}</strong></div>
          <div>{{ $t('cert.grade') }}: <strong>{{ this.$i18n.locale === "uk" ? sert.grade_ua : this.$i18n.locale === "es" ? sert.grade_es : sert.grade_en }}</strong></div>
          <div>{{ $t('cert.date') }}: {{ sert.examdate }}</div>
        </a>
      </div>
    </div>
    <div v-if="tableView" class="table">
      <table>
        <thead>
        <tr>
          <th class="title" colspan="5">
            <i>04.2017 - 11.2017</i>
          </th>
        </tr>
        <tr>
          <th class="title" colspan="5">
            <a href="https://prog.academy" title="Link to the Prog.academy" target="_blank"><b style="color: #0303af">PROG.kiev.ua</b></a>
          </th>
        </tr>
        <tr>
          <th>№</th>
          <th style="text-align: left;">{{ $t('cert.title') }}</th>
          <th>{{ $t('cert.number') }}</th>
          <th>{{ $t('cert.grade') }}</th>
          <th>{{ $t('cert.date') }}</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="sert in progStore.state.progStore" :key="sert.id">
          <td class="nomer">{{ sert.id }}</td>
          <td class="name"><a :href="sert.image" title="Certificate..." target="_blank">{{ this.$i18n.locale === "uk" ? sert.title_ua : this.$i18n.locale === "es" ? sert.title_es : sert.title_en }}</a></td>
          <td class="number">{{ this.$i18n.locale === "uk" ? sert.regnumber_ua : this.$i18n.locale === "es" ? sert.regnumber_es : sert.regnumber_en }}</td>
          <td class="grade">{{ this.$i18n.locale === "uk" ? sert.grade_ua : this.$i18n.locale === "es" ? sert.grade_es : sert.grade_en }}</td>
          <td class="date">{{ sert.examdate }}</td>
        </tr>
        </tbody>
      </table>
    </div>
    <div v-else class="container">
      <h2><span>04.2017 - 11.2017</span><br>
        <a href="https://prog.academy" title="Link to the Prog.academy" target="_blank"><b>PROG.kiev.ua</b></a>
      </h2>
      <div v-for="sert in progStore.state.progStore" :key="sert.id" class="diploma">
        <a class="block" :href="sert.image" title="Certificate..." target="_blank">
          <h3>{{ sert.id }}. {{ this.$i18n.locale === "uk" ? sert.title_ua : this.$i18n.locale === "es" ? sert.title_es : sert.title_en }}</h3>
          <div>{{ $t('cert.number') }}: <strong>{{ this.$i18n.locale === "uk" ? sert.regnumber_ua : this.$i18n.locale === "es" ? sert.regnumber_es : sert.regnumber_en }}</strong></div>
          <div>{{ $t('cert.grade') }}: <strong>{{ this.$i18n.locale === "uk" ? sert.grade_ua : this.$i18n.locale === "es" ? sert.grade_es : sert.grade_en }}</strong></div>
          <div>{{ $t('cert.date') }}: {{ sert.examdate }}</div>
        </a>
      </div>
    </div>
    <div v-if="tableView" class="table">
      <table>
        <thead>
        <tr>
          <th class="title" colspan="5">
            <i>09.1994 - 01.1999</i>
          </th>
        </tr>
        <tr>
          <th class="title" colspan="5">
            <a href="https://knute.edu.ua" title="Link to the University" target="_blank"><b style="color: #0303af">{{$t ('education.knute')}}</b></a>
          </th>
        </tr>
        <tr>
          <th>№</th>
          <th style="text-align: left;">{{ $t('cert.title') }}</th>
          <th>{{ $t('cert.number') }}</th>
          <th>{{ $t('cert.grade') }}</th>
          <th>{{ $t('education.graduation') }}</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="sert in knuteStore.state.knuteStore" :key="sert.id">
          <td class="nomer">{{ sert.id }}</td>
          <td class="name"><a :href="sert.image" title="Diploma..." target="_blank">{{ this.$i18n.locale === "uk" ? sert.title_ua : this.$i18n.locale === "es" ? sert.title_es : sert.title_en }}</a></td>
          <td class="number">{{ sert.regnumber }}</td>
          <td class="grade">{{ this.$i18n.locale === "uk" ? sert.grade_ua : this.$i18n.locale === "es" ? sert.grade_es : sert.grade_en }}</td>
          <td class="date">{{ sert.examdate }}</td>
        </tr>
        </tbody>
      </table>
    </div>
    <div v-else class="container">
      <h2><span>09.1994 - 01.1999</span><br>
        <a href="https://knute.edu.ua" title="Link to the University" target="_blank"><b>{{$t ('education.knute')}}</b></a>
      </h2>
      <div v-for="sert in knuteStore.state.knuteStore" :key="sert.id" class="diploma">
        <a class="block" :href="sert.image" title="Diploma..." target="_blank">
          <h3>{{ sert.id }}. {{ this.$i18n.locale === "uk" ? sert.title_ua : this.$i18n.locale === "es" ? sert.title_es : sert.title_en }}</h3>
          <div>{{ $t('cert.number') }}: <strong>{{ sert.regnumber }}</strong></div>
          <div>{{ $t('cert.grade') }}: <strong>{{ this.$i18n.locale === "uk" ? sert.grade_ua : this.$i18n.locale === "es" ? sert.grade_es : sert.grade_en }}</strong></div>
          <div>{{ $t('education.graduation') }}: {{ sert.examdate }}</div>
        </a>
      </div>
    </div>
    <div class="languages">
    <h1>{{$t ('education.languages')}}</h1>
    <line></line>
      <div v-if="tableView" class="table" style="margin-left: 0">
        <table>
          <thead>
          <tr>
            <th>№</th>
            <th style="text-align: left;">{{ $t('cert.title') }}</th>
            <th>{{ $t('cert.level') }}</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="sert in languagesStore.state.languagesStore" :key="sert.id">
            <td class="nomer">{{ sert.id }}</td>
            <td class="name" style="width: max-content"><a :href="sert.image" title="Certificate..." target="_blank">{{ this.$i18n.locale === "uk" ? sert.title_ua : this.$i18n.locale === "es" ? sert.title_es : sert.title_en }}</a></td>
            <td class="number" style="width: max-content">{{ sert.regnumber }}</td>
          </tr>
          </tbody>
        </table>
      </div>
      <div v-else v-for="sert in languagesStore.state.languagesStore" :key="sert.id" class="certificate">
        <a class="block" :href="sert.image" title="Certificate..." target="_blank">
          <h3>{{ sert.id }}. {{ this.$i18n.locale === "uk" ? sert.title_ua : this.$i18n.locale === "es" ? sert.title_es : sert.title_en }}</h3>
          <div>{{ $t('cert.level') }}: <strong>{{ sert.regnumber }}</strong></div>
        </a>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.education {
  flex: 1 0 auto;
  h1 {font-size: 2.2rem;}
  text-align: left;
  background: linear-gradient(to bottom, rgb(236, 252, 236), rgb(250, 247, 234)) no-repeat center;
  //background-image: url("@/assets/background/background17.webp");
  //background-position: center;
  //background-size: cover;
  //background-repeat: no-repeat;

  .table {
    margin-left: 1rem;
    margin-right: 1rem;
    background: white;
    th, .nomer, .number, .grade, .date {
      text-align: center;
      a {text-decoration: none; color: inherit;}
      a:hover {color: darkcyan;}
    }
    .title {width: 74rem;}
    .nomer {width: 2rem}
    .name {width: 24rem;}
    .number {width: 3rem;}
    .grade {
      width: 3rem;
      font-size: 1.37rem;
      font-weight: bold;
    }
    .date {width: 3rem;}
  }

  .container {
    h2 {
      color: #0303af;
      font-size: 1.8rem;
      margin-bottom: 0;
      margin-top: 0;
      padding-left: 1rem;
      span {
        color: black;
        font-style: italic;
      }
      a {
        text-decoration: none;
        color: inherit;
      }
      a:hover {color: darkcyan;}
    }
  }
}
.languages {
  margin-top: -1rem;
  flex: 1 0 auto;
  text-align: center;
  .table {.number {max-width: fit-content;}}
  .certificate {
    a {
      background: linear-gradient(to bottom, rgb(229, 251, 255), rgb(255, 240, 244)) no-repeat center;
    }
    a:hover {
      background-image: url("@/assets/background/background06.webp");
      background-position: center;
      background-size: cover;
      background-repeat: no-repeat;
    }
  }
}
@media(max-width:1020px) {
  .education {
    .table {
      margin-left: 0.5rem;
      margin-right: 0.5rem;
      .title {width: 60rem;}
      .nomer {width: 1rem}
      .name {width: 18rem;}
      .number {width: 4rem;}
      .grade {
        font-size: 1rem;
        font-weight: bold;
        width: 6rem;
      }
      .date {width: 2rem;}
    }
    .container {
      h2 {
        font-size: 1.6rem;
        padding-left: 0.5rem;
      }
    }
  }
}
@media(max-width:768px) {
  .education {
    .table {
      margin-left: 0.3rem;
      margin-right: 0.3rem;
      font-size: 0.9rem;
      .title {width: 30rem;}
      .nomer {width: 1rem}
      .name {width: 12rem;}
      .number {width: 3rem;}
      .grade {
        width: 3rem;
        font-size: 0.9rem;
        //font-weight: bold;
      }
      .date {width: 2rem;}
      .nomer, .number, .grade, .date {font-size: 0.5rem;}
    }
    .container {
      h2 {
        font-size: 1.3rem;
        padding-left: 0.3rem;
      }
    }
  }
  .languages {
    margin-bottom: 0.5rem;
    text-align: center;
    h1 {
      font-size: 1.6rem;
      margin: 1.2rem 0 0.5rem 0;
    }
    .certificate {
      max-width: 10rem;
    }
  }
  .diplom, .title {font-size: 1.2rem}
}
</style>