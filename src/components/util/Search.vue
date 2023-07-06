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
    hasResults() {
      return (
        this.combinedCertificates.some((sert) => this.checkDoc(sert)) ||
        this.gradeCombinedCertificates.some((sert) => this.checkDoc(sert)) ||
        this.itvdnStore.state.itvdnStore.some((sert) => this.checkDoc(sert)) ||
        this.progStore.state.progStore.some((sert) => this.checkDocProg(sert))
      );
    },
  },
  data() {
    return {
      searchValue: "",
    }
  },
  methods: {
    clearSearch() {
      this.searchValue = "";
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
    checkDoc(sert) {
      const title = this.getTitle(sert).toLowerCase();
      const searchValue = this.searchValue.toLowerCase();
      const words = searchValue.split(" ");
      const examDate = sert.examdate.toLowerCase();
      const regNumber = sert.regnumber.toLowerCase();
      let hasMatch = false;

      words.forEach((word) => {
        if (title.includes(word) || examDate.includes(word) || regNumber.includes(word)) {
          hasMatch = true;
        }
      });
      return hasMatch;
    },

    checkDocProg(sert) {
      const title = this.getTitle(sert).toLowerCase();
      const searchValue = this.searchValue.toLowerCase();
      const words = searchValue.split(" ");
      const examDate = sert.examdate.toLowerCase();
      const regNumber = this.getRegNumber(sert).toLowerCase();
      let hasMatch = false;

      words.forEach((word) => {
        if (title.includes(word) || examDate.includes(word) || regNumber.includes(word)) {
          hasMatch = true;
        }
      });
      return hasMatch;
    },

  },
  components: {},
})
export default class Search extends Vue {
}
</script>

<template>
  <div class="search">
    <div class="search-bar">
      <input type="text" :placeholder="$t('cert.search')" v-model="searchValue"><i title="Clear" @click="clearSearch"
                                                                                   class="fas fa-trash-alt"></i>
    </div>
    <div class="inner" v-if="searchValue.length !== 0">
      <template v-for="sert in combinedCertificates" :key="sert.id">
        <div class="certificate" v-if="checkDoc(sert)">
          <a class="block" :href="sert.image" title="Certificate..." target="_blank">
            <h3>{{ sert.id }}. {{ getTitle(sert) }}</h3>
            <div>{{ $t('cert.number') }}: <strong>{{ sert.regnumber }}</strong></div>
            <div>{{ $t('cert.grade') }}: <strong>{{ sert.grade }}</strong></div>
            <div>{{ $t('cert.date') }}: {{ sert.examdate }}</div>
          </a>
        </div>
      </template>
      <template v-for="sert in gradeCombinedCertificates" :key="sert.id">
        <div class="certificate" v-if="checkDoc(sert)">
          <a class="block" :href="sert.image" title="Certificate..." target="_blank">
            <h3>{{ sert.id }}. {{ getTitle(sert) }}</h3>
            <div>{{ $t('cert.number') }}: <strong>{{ sert.regnumber }}</strong></div>
            <div>{{ $t('cert.grade') }}: <strong>{{ getGrade(sert) }}</strong></div>
            <div>{{ $t('cert.date') }}: {{ sert.examdate }}</div>
          </a>
        </div>
      </template>
      <template v-for="sert in itvdnStore.state.itvdnStore" :key="sert.id">
        <div class="diploma" v-if="checkDoc(sert)">
          <a class="block" :href="sert.image" title="Diploma..." target="_blank">
            <h3>{{ sert.id }}. {{ getTitle(sert) }}</h3>
            <div>{{ $t('cert.number') }}: <strong>{{ sert.regnumber }}</strong></div>
            <div>{{ $t('cert.grade') }}: <strong>{{ sert.grade }}</strong></div>
            <div>{{ $t('cert.date') }}: {{ sert.examdate }}</div>
          </a>
        </div>
      </template>
      <template v-for="sert in progStore.state.progStore" :key="sert.id">
        <div class="diploma" v-if="checkDocProg(sert)">
          <a class="block" :href="sert.image" title="Certificate..." target="_blank">
            <h3>{{ sert.id }}. {{ getTitle(sert) }}</h3>
            <div>{{ $t('cert.number') }}: <strong>{{ getRegNumber(sert) }}</strong></div>
            <div>{{ $t('cert.grade') }}: <strong>{{ getGrade(sert) }}</strong></div>
            <div>{{ $t('cert.date') }}: {{ sert.examdate }}</div>
          </a>
        </div>
      </template>
      <!-- Вывод сообщения об отсутствии результатов -->
      <div class="hasResults" v-if="searchValue.length !== 0 && !hasResults">
        {{ $t('cert.hasNoResults') }}️
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.search {
  flex: 1 0 auto;
  margin-bottom: 1rem;

  .search-bar {
    margin: 1rem auto;
    font-size: 1.6rem;

    input {
      border: 1px solid lightskyblue;
      border-radius: 5px;
      font-size: 1.6rem;
      transition: border-color .2s ease-in-out, background-color .2s, box-shadow .2s;
    }

    input:active, :focus {
      outline: 1px solid lightskyblue;
      outline-offset: 0;
      box-shadow: 3px 3px 4px 0 grey;
    }

    .fa-trash-alt {
      font-size: 1.6rem;
      margin-left: 7px;
    }

    .fa-trash-alt:hover {
      color: red;
    }
  }

  .inner {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;

    .certificate {
      max-width: 27rem;

      .block {
        background-color: floralwhite;
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
    .hasResults {
      font-size: 1.6rem;
      font-weight: bold;
      margin: 0.5rem;
      color: darkgreen;
    }
  }

  @media (max-width: 768px) {
    margin-bottom: 0.5rem;
    .search-bar {
      margin: 0.7rem auto;
      font-size: 1.3rem;

      input[type="text"] {
        border-radius: 3px;
        font-size: 1.3rem;
      }

      .fa-trash-alt {
        font-size: 1.3rem;
      }
    }
    .inner {
      .hasResults {
        font-size: 1.3rem;
        margin: 0.2rem;
        color: darkgreen;
      }
    }
  }
}
</style>