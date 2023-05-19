<script lang="ts">
import {Options, Vue} from "vue-class-component";
import englishdomStore from "@/store/modules/education/englishdomStore";
import languagesStore from "@/store/modules/education/languagesStore";
import itvdnStore from "@/store/modules/education/itvdnStore";
import progStore from "@/store/modules/education/progStore";
import knuteStore from "@/store/modules/education/knuteStore";
@Options({
  computed: {
    knuteStore() {return knuteStore},
    progStore() {return progStore},
    itvdnStore() {return itvdnStore},
    languagesStore() {return languagesStore},
    englishdomStore() {return englishdomStore}},
  components: {},})
export default class Education extends Vue {}
</script>

<template>
  <div class="education">
    <h1>{{$t ('education.title')}}</h1>
    <line></line>
    <h2><span>09.1994 - 01.1999</span><br>
      <b>{{$t ('education.knute')}}</b>
    </h2>
    <div v-for="sert in knuteStore.state.knuteStore" class="diploma">
      <a class="block" :href="sert.image" title="Diploma..." target="_blank">
        <h3>{{ sert.id }}. {{ this.$i18n.locale === "ua" ? sert.title_ua : this.$i18n.locale === "es" ? sert.title_es : sert.title_en }}</h3>
        <div>{{ $t('cert.number') }}: <strong>{{ sert.regnumber }}</strong></div>
        <div>{{ $t('cert.grade') }}: <strong>{{ this.$i18n.locale === "ua" ? sert.grade_ua : this.$i18n.locale === "es" ? sert.grade_es : sert.grade_en }}</strong></div>
        <div>{{$t ('education.graduation')}}: {{ sert.examdate }}</div>
      </a>
    </div>
    <h2><span>04.2017 - 11.2017</span><br>
      <b>PROG.kiev.ua</b>
    </h2>
    <div v-for="sert in progStore.state.progStore" class="diploma">
      <a class="block" :href="sert.image" title="Certificate..." target="_blank">
        <h3>{{ sert.id }}. {{ this.$i18n.locale === "ua" ? sert.title_ua : this.$i18n.locale === "es" ? sert.title_es : sert.title_en }}</h3>
        <div>{{ $t('cert.grade') }}: <strong>{{ this.$i18n.locale === "ua" ? sert.grade_ua : this.$i18n.locale === "es" ? sert.grade_es : sert.grade_en }}</strong></div>
        <div>{{ $t('cert.date') }}: {{ sert.examdate }}</div>
      </a>
    </div>
    <h2><span>11.2020 - present</span><br>
      <b>ITVDN - IT Video Developers Network</b>
    </h2>
    <div v-for="sert in itvdnStore.state.itvdnStore" class="diploma">
      <a class="block" :href="sert.image" title="Diploma..." target="_blank">
        <h3>{{ sert.id }}. {{ sert.title }}</h3>
        <div>{{ $t('cert.number') }}: <strong>{{ sert.regnumber }}</strong></div>
        <div>{{ $t('cert.grade') }}: <strong>{{ sert.grade }}</strong></div>
        <div>{{ $t('cert.date') }}: {{ sert.examdate }}</div>
      </a>
    </div>
    <h2><span>11.2021 - present</span><br>
      <b>EnglishDom</b>
    </h2>
    <div v-for="sert in englishdomStore.state.englishdomStore" class="diploma">
      <a class="block" :href="sert.image" title="Certificate..." target="_blank">
        <h3>{{ sert.id }}. {{ sert.title }}</h3>
        <div>{{ $t('cert.level') }}: <strong>{{ sert.regnumber }}</strong></div>
        <div>{{ $t('cert.date') }}: {{ sert.examdate }}</div>
      </a>
    </div>
  </div>
  <div class="languages">
    <h1>{{$t ('education.languages')}}</h1>
    <line></line>
    <div v-for="sert in languagesStore.state.languagesStore" class="certificate">
      <a class="block" :href="sert.image" title="Certificate..." target="_blank">
        <h3>{{ sert.id }}. {{ sert.title }}</h3>
        <div>{{ $t('cert.level') }}: <strong>{{ sert.regnumber }}</strong></div>
        <div>{{ $t('cert.date') }}: {{ sert.examdate }}</div>
      </a>
    </div>
  </div>
</template>

<style lang="scss" scoped>
p {
  padding: 0 0 0.3rem 1.5rem;
}
.education {
  flex: 1 0 auto;
  text-align: left;
  span {
    color: black;
    font-style: italic;
  }
  h2 {
    color: #0303af;
    font-size: x-large;
    margin-bottom: 0;
    padding-left: 1rem;
  }
}
.languages {
  margin-top: -1rem;
  flex: 1 0 auto;
  text-align: left;
  //margin: -2rem 0;
  p {
    margin: 0.5rem 0.3rem 0 0;
  }
  .certificate {
    a {
      background: linear-gradient(to bottom, rgb(229, 251, 255), rgb(255, 240, 244)) no-repeat center;
    }
    a:hover {
      background-image: url("@/assets/background/background06.jpg");
      background-position: center;
      background-size: cover;
      background-repeat: no-repeat;
    }
  }
}
@media(max-width:1020px) {
  .education {
    h2 {
      font-size: larger;
      padding-left: 0.5rem;
    }
  }
  .languages {
    text-align: center;
  }
}
@media(max-width:768px) {
  .education {
    h2 {
      font-size: medium;
      padding-left: 0.3rem;
    }
  }
  .languages {
    margin-bottom: 0.5rem;
    text-align: center;
    h1 {
      font-size: 1.8rem;
      margin: 1.2rem 0 0.5rem 0;
    }
    .certificate {
      max-width: 10rem;
    }
  }
}
</style>