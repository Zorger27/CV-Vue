<script lang="ts">
import {Options, Vue} from "vue-class-component";
import htmlStore from "@/store/modules/certificates/frontend/htmlStore";
import javascriptStore from "@/store/modules/certificates/frontend/javascriptStore";
import angularStore from "@/store/modules/certificates/frontend/angularStore";
import reactStore from "@/store/modules/certificates/frontend/reactStore";
import frontStore from "@/store/modules/certificates/frontend/frontStore";
import phpStore from "@/store/modules/certificates/backend/phpStore";
import pythonStore from "@/store/modules/certificates/backend/pythonStore";
import rubyStore from "@/store/modules/certificates/backend/rubyStore";
import javaStore from "@/store/modules/certificates/backend/javaStore";
import designerStore from "@/store/modules/certificates/designerStore";
import databaseStore from "@/store/modules/certificates/databaseStore";
import otherStore from "@/store/modules/certificates/otherStore";
import englishStore from "@/store/modules/certificates/englishStore";
import pmStore from "@/store/modules/certificates/pmStore";
import itvdnStore from "@/store/modules/education/itvdnStore";
import progStore from "@/store/modules/education/progStore";
import knuteStore from "@/store/modules/education/knuteStore";

@Options({
  computed: {
    htmlStore() {return htmlStore},
    javascriptStore() {return javascriptStore},
    angularStore() {return angularStore},
    reactStore() {return reactStore},
    frontStore() {return frontStore},
    phpStore() {return phpStore},
    pythonStore() {return pythonStore},
    rubyStore() {return rubyStore},
    javaStore() {return javaStore},
    designerStore() {return designerStore},
    databaseStore() {return databaseStore},
    otherStore() {return otherStore},
    englishStore() {return englishStore},
    pmStore() {return pmStore},
    itvdnStore() {return itvdnStore},
    progStore() {return progStore},
    knuteStore() {return knuteStore},
    combinedCertificates() {
      const htmlCertificates = this.htmlStore.state.htmlStore;
      const javascriptCertificates = this.javascriptStore.state.javascriptStore;
      const angularCertificates = this.angularStore.state.angularStore;
      const reactCertificates = this.reactStore.state.reactStore;
      const frontCertificates = this.frontStore.state.frontStore;
      const phpCertificates = this.phpStore.state.phpStore;
      const pythonCertificates = this.pythonStore.state.pythonStore;
      const rubyCertificates = this.rubyStore.state.rubyStore;
      const javaCertificates = this.javaStore.state.javaStore;
      const designerCertificates = this.designerStore.state.designerStore;
      const databaseCertificates = this.databaseStore.state.databaseStore;
      return [...htmlCertificates, ...javascriptCertificates, ...angularCertificates, ...reactCertificates,
        ...frontCertificates, ...phpCertificates, ...pythonCertificates, ...rubyCertificates,
        ...javaCertificates, ...designerCertificates,
        ...databaseCertificates];
    },
    gradeCombinedCertificates() {
      const otherCertificates = this.otherStore.state.otherStore;
      const englishCertificates = this.englishStore.state.englishStore;
      const pmCertificates = this.pmStore.state.pmStore;
      return [...otherCertificates, ...pmCertificates, ...englishCertificates];
    },
  },
  data() {
    return {
      showDiplom: false,
      showCertificate: false
    }
  },
  methods: {
    diplomView() {
      this.showDiplom = !this.showDiplom;
    },
    certificateView() {
      this.showCertificate = !this.showCertificate;
    },
    getTitle(sert) {
      if (this.$i18n.locale === "ua") {
        return sert.title_ua;
      } else if (this.$i18n.locale === "es") {
        return sert.title_es;
      } else {
        return sert.title_en;
      }
    },
    getGrade(sert) {
      if (this.$i18n.locale === "ua") {
        return sert.grade_ua;
      } else if (this.$i18n.locale === "es") {
        return sert.grade_es;
      } else {
        return sert.grade_en;
      }
    },
    getRegNumber(sert) {
      if (this.$i18n.locale === "ua") {
        return sert.regnumber_ua;
      } else if (this.$i18n.locale === "es") {
        return sert.regnumber_es;
      } else {
        return sert.regnumber_en;
      }
    },
  },
  components: {},
})
export default class Search extends Vue {
}
</script>

<template>
  <div class="totalSert">
    <div class="sert">
      <div>
        <span class="itogo">{{ $t('cert.itogo') }}</span>
        <span class="sertActive" @click="diplomView()">{{ $t('cert.diplomView') }} <span :class="['fas', showDiplom ? 'fa-chevron-circle-down' : 'fa-chevron-circle-up' ]"></span></span> — <span class="colvo">{{itvdnStore.state.itvdnStore.length + (knuteStore.state.knuteStore.length-1) + progStore.state.progStore.length}}</span>
      </div>
      <div>
        <span class="itogo">{{ $t('cert.itogo') }}</span>
        <span class="sertActive" @click="certificateView()">{{ $t('cert.certificateView') }} <span :class="['fas', showCertificate ? 'fa-chevron-circle-down' : 'fa-chevron-circle-up' ]"></span></span> — <span class="colvo">{{combinedCertificates.length + gradeCombinedCertificates.length}}</span>
      </div>
    </div>
    <div class="inner">
      <div v-if="showDiplom" class="showDiplom">
        <div v-for="sert in itvdnStore.state.itvdnStore" :key="sert.id" class="diploma">
          <a class="block" :href="sert.image" title="Diploma..." target="_blank">
            <h3>{{ sert.id }}. {{ getTitle(sert) }}</h3>
            <div>{{ $t('cert.number') }}: <strong>{{ sert.regnumber }}</strong></div>
            <div>{{ $t('cert.grade') }}: <strong>{{ sert.grade }}</strong></div>
            <div>{{ $t('cert.date') }}: {{ sert.examdate }}</div>
          </a>
        </div>
        <div v-for="sert in progStore.state.progStore" :key="sert.id" class="diploma">
          <a class="block" :href="sert.image" title="Certificate..." target="_blank">
            <h3>{{ sert.id }}. {{ getTitle(sert) }}</h3>
            <div>{{ $t('cert.number') }}: <strong>{{ getRegNumber(sert) }}</strong></div>
            <div>{{ $t('cert.grade') }}: <strong>{{ getGrade(sert) }}</strong></div>
            <div>{{ $t('cert.date') }}: {{ sert.examdate }}</div>
          </a>
        </div>
        <div class="diploma">
          <a class="block" :href="knuteStore.state.knuteStore[1].image" title="Diploma..." target="_blank">
            <h3>{{ knuteStore.state.knuteStore[1].id }}. {{ getTitle(knuteStore.state.knuteStore[1]) }}</h3>
            <div>{{ $t('cert.number') }}: <strong>{{ knuteStore.state.knuteStore[1].regnumber }}</strong></div>
            <div>{{ $t('cert.grade') }}: <strong>{{ getGrade(knuteStore.state.knuteStore[1]) }}</strong></div>
            <div>{{ $t('education.graduation') }}: {{ knuteStore.state.knuteStore[1].examdate }}</div>
          </a>
        </div>
      </div>
      <div v-if="showCertificate" class="showCertificate">
        <div v-for="sert in combinedCertificates" :key="sert.id" class="certificate">
          <a class="block" :href="sert.image" title="Certificate..." target="_blank">
            <h3>{{ sert.id }}. {{ getTitle(sert) }}</h3>
            <div>{{ $t('cert.number') }}: <strong>{{ sert.regnumber }}</strong></div>
            <div>{{ $t('cert.grade') }}: <strong>{{ sert.grade }}</strong></div>
            <div>{{ $t('cert.date') }}: {{ sert.examdate }}</div>
          </a>
        </div>
        <div v-for="sert in gradeCombinedCertificates" :key="sert.id" class="certificate">
          <a class="block" :href="sert.image" title="Certificate..." target="_blank">
            <h3>{{ sert.id }}. {{ getTitle(sert) }}</h3>
            <div>{{ $t('cert.number') }}: <strong>{{ sert.regnumber }}</strong></div>
            <div>{{ $t('cert.grade') }}: <strong>{{ getGrade(sert) }}</strong></div>
            <div>{{ $t('cert.date') }}: {{ sert.examdate }}</div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.totalSert {
  .sert {
    display: inline-grid;
    align-items: center;
    justify-content: center;
    margin: 0;
    font-size: 1.7rem;
    font-weight: bold;
    //.itogo {
    //  color: saddlebrown;
    //}
    .sertActive {
      color: lightseagreen;
    }
    .sertActive:hover {
      color: darkgoldenrod;
      cursor: pointer;
      //text-decoration: underline;
    }
    .fa-chevron-circle-down {
      color: royalblue;
    }
    .fa-chevron-circle-up {
      color: mediumvioletred;
    }
    .colvo {
      color: red;
      text-shadow: 2px 2px 4px black;
    }
  }

  .inner {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;

    .showDiplom {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;
    }
    .showCertificate {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;
      .certificate {
        max-width: 27rem;

        .block {
          background-color: whitesmoke;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.7);
          transition: border-color .2s ease-in-out, background-color .2s, box-shadow .2s;
        }

        .block:hover {
          background: linear-gradient(to bottom, rgb(229, 251, 255), rgb(251, 255, 240)) no-repeat center;
          //border-color: #bbeafa;
          border-color: lightgrey;
          //box-shadow: 3px 3px 4px 0 rgba(0, 0, 0, 0.4);
          box-shadow: 3px 3px 4px 0 lightgrey;
        }
      }
    }
  }

  @media (max-width: 768px) {
    margin-bottom: 0.5rem;
    .sert {
      display: inline-grid;
      align-items: center;
      justify-content: center;
      font-size: 1.4rem;
    }
  }
}
</style>