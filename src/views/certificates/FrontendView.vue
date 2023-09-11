<script lang="ts">
import {Options, Vue} from "vue-class-component";
import htmlStore from "@/store/modules/certificates/frontend/htmlStore";
import javascriptStore from "@/store/modules/certificates/frontend/javascriptStore";
import angularStore from "@/store/modules/certificates/frontend/angularStore";
import reactStore from "@/store/modules/certificates/frontend/reactStore";
import frontStore from "@/store/modules/certificates/frontend/frontStore";

@Options({
  computed: {
    htmlStore() {return htmlStore},
    javascriptStore() {return javascriptStore},
    angularStore() {return angularStore},
    reactStore() {return reactStore},
    frontStore() {return frontStore}
  },
  data() {return {tableView: false}},
  methods: {changeView() {this.tableView = !this.tableView;}},
  components: {},
})

export default class Frontend extends Vue {
}
</script>

<template>
  <div class="frontend">
    <h1>
      <router-link class="back" to="/certificates" title="Back to Certificates"><i class="fa fa-arrow-circle-left"></i>
      </router-link>
      {{ $t('cert.front.h1') }}
      <i @click="changeView"><span :class="['fa', tableView ? 'fa-list' : 'fa-th']"></span></i>
    </h1>
    <line></line>
    <div v-if="tableView" class="table">
      <table>
        <thead>
        <tr>
          <th class="title" colspan="5"><span>✅ </span>
            <b>
              <a class="attention" href="https://testprovider.com/ru/search-certificate/tp24303907d"
               title="Diploma..." target="_blank">{{ $t('cert.front.html1') }}
              </a>
            </b>
          </th>
        </tr>
        <tr>
          <th>№</th>
          <th>{{ $t('cert.title') }}</th>
          <th>{{ $t('cert.number') }}</th>
          <th>{{ $t('cert.grade') }}</th>
          <th>{{ $t('cert.date') }}</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="sert in htmlStore.state.htmlStore" :key="sert.id">
          <td class="nomer">{{ sert.id }}</td>
          <td class="name"><a :href="sert.image" title="In more detail..." target="_blank">{{ this.$i18n.locale === "ua" ? sert.title_ua : this.$i18n.locale === "es" ? sert.title_es : sert.title_en }}</a></td>
          <td class="number">{{ sert.regnumber }}</td>
          <td class="grade">{{ sert.grade }}</td>
          <td class="date">{{ sert.examdate }}</td>
        </tr>
        </tbody>
      </table>
    </div>
    <div v-else class="container">
      <h2 class="diplom"><span>✅ </span><b><a class="attention"
                                              href="https://testprovider.com/ru/search-certificate/tp24303907d"
                                              title="Diploma..." target="_blank">{{ $t('cert.front.html1') }}</a></b></h2>
      <div class="inner">
        <div v-for="sert in htmlStore.state.htmlStore" :key="sert.id" class="certificate">
          <a class="block" :href="sert.image" title="Certificate..." target="_blank">
            <h3>{{ sert.id }}. {{ this.$i18n.locale === "ua" ? sert.title_ua : this.$i18n.locale === "es" ? sert.title_es : sert.title_en }}</h3>
            <div>{{ $t('cert.number') }}: <strong>{{ sert.regnumber }}</strong></div>
            <div>{{ $t('cert.grade') }}: <strong>{{ sert.grade }}</strong></div>
            <div>{{ $t('cert.date') }}: {{ sert.examdate }}</div>
          </a>
        </div>
      </div>
    </div>
    <div v-if="tableView" class="table">
      <table>
        <thead>
        <tr>
          <th class="title" colspan="5"><span>✅ </span>
            <b>
              <a class="attention"
                 href="https://testprovider.com/ru/search-certificate/tp84806711d"
                 title="Diploma..." target="_blank">{{ $t('cert.front.javascript1') }}
              </a>
            </b>
          </th>
        </tr>
        <tr>
          <th>№</th>
          <th>{{ $t('cert.title') }}</th>
          <th>{{ $t('cert.number') }}</th>
          <th>{{ $t('cert.grade') }}</th>
          <th>{{ $t('cert.date') }}</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="sert in javascriptStore.state.javascriptStore" :key="sert.id">
          <td class="nomer">{{ sert.id }}</td>
          <td class="name"><a :href="sert.image" title="In more detail..." target="_blank">{{ this.$i18n.locale === "ua" ? sert.title_ua : this.$i18n.locale === "es" ? sert.title_es : sert.title_en }}</a></td>
          <td class="number">{{ sert.regnumber }}</td>
          <td class="grade">{{ sert.grade }}</td>
          <td class="date">{{ sert.examdate }}</td>
        </tr>
        </tbody>
      </table>
    </div>
    <div v-else class="container">
      <h2 class="diplom"><span>✅ </span><b><a class="attention"
                                              href="https://testprovider.com/ru/search-certificate/tp84806711d"
                                              title="Diploma..." target="_blank">{{ $t('cert.front.javascript1') }}</a></b></h2>
      <div class="inner">
        <div v-for="sert in javascriptStore.state.javascriptStore" :key="sert.id" class="certificate">
          <a class="block" :href="sert.image" title="Certificate..." target="_blank">
            <h3>{{ sert.id }}. {{ this.$i18n.locale === "ua" ? sert.title_ua : this.$i18n.locale === "es" ? sert.title_es : sert.title_en }}</h3>
            <div>{{ $t('cert.number') }}: <strong>{{ sert.regnumber }}</strong></div>
            <div>{{ $t('cert.grade') }}: <strong>{{ sert.grade }}</strong></div>
            <div>{{ $t('cert.date') }}: {{ sert.examdate }}</div>
          </a>
        </div>
      </div>
    </div>
    <div v-if="tableView" class="table">
      <table>
        <thead>
        <tr>
          <th class="title" colspan="5"><span>✅ </span>
            <b>
              <a class="attention"
                 href="https://testprovider.com/ru/search-certificate/tp31003654d"
                 title="Diploma..." target="_blank">{{ $t('cert.front.angular1') }}
              </a>
            </b>
          </th>
        </tr>
        <tr>
          <th>№</th>
          <th>{{ $t('cert.title') }}</th>
          <th>{{ $t('cert.number') }}</th>
          <th>{{ $t('cert.grade') }}</th>
          <th>{{ $t('cert.date') }}</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="sert in angularStore.state.angularStore" :key="sert.id">
          <td class="nomer">{{ sert.id }}</td>
          <td class="name"><a :href="sert.image" title="In more detail..." target="_blank">{{ this.$i18n.locale === "ua" ? sert.title_ua : this.$i18n.locale === "es" ? sert.title_es : sert.title_en }}</a></td>
          <td class="number">{{ sert.regnumber }}</td>
          <td class="grade">{{ sert.grade }}</td>
          <td class="date">{{ sert.examdate }}</td>
        </tr>
        </tbody>
      </table>
    </div>
    <div v-else class="container">
      <h2 class="diplom"><span>✅ </span><b><a class="attention"
                                              href="https://testprovider.com/ru/search-certificate/tp31003654d"
                                              title="Diploma..." target="_blank">{{ $t('cert.front.angular1') }}</a></b></h2>
      <div class="inner">
        <div v-for="sert in angularStore.state.angularStore" :key="sert.id" class="certificate">
          <a class="block" :href="sert.image" title="Certificate..." target="_blank">
            <h3>{{ sert.id }}. {{ this.$i18n.locale === "ua" ? sert.title_ua : this.$i18n.locale === "es" ? sert.title_es : sert.title_en }}</h3>
            <div>{{ $t('cert.number') }}: <strong>{{ sert.regnumber }}</strong></div>
            <div>{{ $t('cert.grade') }}: <strong>{{ sert.grade }}</strong></div>
            <div>{{ $t('cert.date') }}: {{ sert.examdate }}</div>
          </a>
        </div>
      </div>
    </div>
    <div v-if="tableView" class="table">
      <table>
        <thead>
        <tr>
          <th class="title" colspan="5"><span>✅ </span>
            <b>
              <a class="attention"
                 href="https://testprovider.com/ru/search-certificate/tp37723782d"
                 title="Diploma..." target="_blank">{{ $t('cert.front.react1') }}
              </a>
            </b>
          </th>
        </tr>
        <tr>
          <th>№</th>
          <th>{{ $t('cert.title') }}</th>
          <th>{{ $t('cert.number') }}</th>
          <th>{{ $t('cert.grade') }}</th>
          <th>{{ $t('cert.date') }}</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="sert in reactStore.state.reactStore" :key="sert.id">
          <td class="nomer">{{ sert.id }}</td>
          <td class="name"><a :href="sert.image" title="In more detail..." target="_blank">{{ this.$i18n.locale === "ua" ? sert.title_ua : this.$i18n.locale === "es" ? sert.title_es : sert.title_en }}</a></td>
          <td class="number">{{ sert.regnumber }}</td>
          <td class="grade">{{ sert.grade }}</td>
          <td class="date">{{ sert.examdate }}</td>
        </tr>
        </tbody>
      </table>
    </div>
    <div v-else class="container">
      <h2 class="diplom"><span>✅ </span><b><a class="attention"
                                              href="https://testprovider.com/ru/search-certificate/tp37723782d"
                                              title="Diploma..." target="_blank">{{ $t('cert.front.react1') }}</a></b></h2>
      <div class="inner">
        <div v-for="sert in reactStore.state.reactStore" :key="sert.id" class="certificate">
          <a class="block" :href="sert.image" title="Certificate..." target="_blank">
            <h3>{{ sert.id }}. {{ this.$i18n.locale === "ua" ? sert.title_ua : this.$i18n.locale === "es" ? sert.title_es : sert.title_en }}</h3>
            <div>{{ $t('cert.number') }}: <strong>{{ sert.regnumber }}</strong></div>
            <div>{{ $t('cert.grade') }}: <strong>{{ sert.grade }}</strong></div>
            <div>{{ $t('cert.date') }}: {{ sert.examdate }}</div>
          </a>
        </div>
      </div>
    </div>
    <div v-if="tableView" class="table" style="margin-bottom: 1rem">
      <table>
        <thead>
        <tr>
          <th class="title" colspan="5"><span>✅ </span>
            <b>
              <a class="attention"
                 href="https://testprovider.com/ru/search-certificate/tp77692345d"
                 title="Diploma..." target="_blank">{{ $t('cert.front.frontend1') }}
              </a>
            </b>
          </th>
        </tr>
        <tr>
          <th>№</th>
          <th>{{ $t('cert.title') }}</th>
          <th>{{ $t('cert.number') }}</th>
          <th>{{ $t('cert.grade') }}</th>
          <th>{{ $t('cert.date') }}</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="sert in frontStore.state.frontStore" :key="sert.id">
          <td class="nomer">{{ sert.id }}</td>
          <td class="name"><a :href="sert.image" title="In more detail..." target="_blank">{{ this.$i18n.locale === "ua" ? sert.title_ua : this.$i18n.locale === "es" ? sert.title_es : sert.title_en }}</a></td>
          <td class="number">{{ sert.regnumber }}</td>
          <td class="grade">{{ sert.grade }}</td>
          <td class="date">{{ sert.examdate }}</td>
        </tr>
        </tbody>
      </table>
    </div>
    <div v-else class="container" style="margin-bottom: 0.5rem">
      <h2 class="diplom"><span>✅ </span><b><a class="attention"
                                              href="https://testprovider.com/ru/search-certificate/tp77692345d"
                                              title="Diploma..." target="_blank">{{ $t('cert.front.frontend1') }}</a></b></h2>
      <div class="inner">
        <div v-for="sert in frontStore.state.frontStore" :key="sert.id" class="certificate">
          <a class="block" :href="sert.image" title="Certificate..." target="_blank">
            <h3>{{ sert.id }}. {{ this.$i18n.locale === "ua" ? sert.title_ua : this.$i18n.locale === "es" ? sert.title_es : sert.title_en }}</h3>
            <div>{{ $t('cert.number') }}: <strong>{{ sert.regnumber }}</strong></div>
            <div>{{ $t('cert.grade') }}: <strong>{{ sert.grade }}</strong></div>
            <div>{{ $t('cert.date') }}: {{ sert.examdate }}</div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.frontend {
  flex: 1 0 auto;
  .table {background: white;}
  background: linear-gradient(to bottom, rgb(229, 237, 255), rgb(250, 246, 234)) no-repeat center;
  .certificate {
    .block {
      background: white;
      transition: border-color .2s ease-in-out, background-color .2s, box-shadow .2s;
    }
    .block:hover {
      background-image: url("@/assets/background/background01.jpg");
      background-position: center;
      background-size: cover;
      background-repeat: no-repeat;
    }
  }

  .back {
    display: none;
    @media (max-width: 768px) {
      display: inline-flex;
      text-decoration: none;
      margin-right: 0.1rem;
    }
  }
  h2 {
    margin: 0.5rem auto;
  }
  .inner {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    .certificate {
      max-width: 27rem;
    }
  }
}
@media(max-width:768px) {
  .diplom, .title {font-size: 1.2rem}
  .table {
    font-size: 0.9rem;
    .name {width: 12rem;}
    .nomer, .number, .grade, .date {font-size: 0.5rem;}
  }
}
</style>