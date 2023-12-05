<script lang="ts">
import {Options, Vue} from "vue-class-component";
import javaStore from "@/store/modules/certificates/backend/javaStore";
import phpStore from "@/store/modules/certificates/backend/phpStore";
import pythonStore from "@/store/modules/certificates/backend/pythonStore";
import rubyStore from "@/store/modules/certificates/backend/rubyStore";

@Options({
  computed: {
    phpStore() {return phpStore},
    pythonStore() {return pythonStore},
    rubyStore() {return rubyStore},
    javaStore() {return javaStore}
  },
  data() {return {tableView: false}},
  methods: {changeView() {this.tableView = !this.tableView;}},
  components: {},
})
export default class Backend extends Vue {
}
</script>

<template>
  <div class="backend">
    <h1>
      <router-link class="back" to="/certificates" title="Back to Certificates"><i class="fa fa-arrow-circle-left"></i>
      </router-link>
      {{ $t('cert.back.h1') }}
      <i @click="changeView"><span :class="['fa', tableView ? 'fa-list' : 'fa-th']"></span></i>
    </h1>
    <line></line>
    <div v-if="tableView" class="table">
      <table>
        <thead>
        <tr>
          <th class="title" colspan="5"><span>✅ </span>
            <b>
              <a class="attention" id="java"
                 href="https://testprovider.com/ru/search-certificate/tp31617068d"
                 title="Diploma..." target="_blank">{{ $t('cert.back.java1') }}
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
        <tr v-for="sert in javaStore.state.javaStore" :key="sert.id">
          <td class="nomer">{{ sert.id }}</td>
          <td class="name"><a :href="sert.image" title="In more detail..." target="_blank">{{ this.$i18n.locale === "uk" ? sert.title_ua : this.$i18n.locale === "es" ? sert.title_es : sert.title_en }}</a></td>
          <td class="number">{{ sert.regnumber }}</td>
          <td class="grade">{{ sert.grade }}</td>
          <td class="date">{{ sert.examdate }}</td>
        </tr>
        </tbody>
      </table>
    </div>
    <div v-else class="container">
      <h2 class="diplom"><span>✅ </span><b><a class="attention" id="java"
                                              href="https://testprovider.com/ru/search-certificate/tp31617068d"
                                              title="Diploma..." target="_blank">{{ $t('cert.back.java1') }}</a></b></h2>
      <div class="inner">
        <div v-for="sert in javaStore.state.javaStore" :key="sert.id" class="certificate">
          <a class="block" :href="sert.image" title="Certificate..." target="_blank">
            <h3>{{ sert.id }}. {{ this.$i18n.locale === "uk" ? sert.title_ua : this.$i18n.locale === "es" ? sert.title_es : sert.title_en }}</h3>
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
                 href="https://testprovider.com/ru/search-certificate/tp88892276D"
                 title="Diploma..." target="_blank">{{ $t('cert.back.php1') }}
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
        <tr v-for="sert in phpStore.state.phpStore" :key="sert.id">
          <td class="nomer">{{ sert.id }}</td>
          <td class="name"><a :href="sert.image" title="In more detail..." target="_blank">{{ this.$i18n.locale === "uk" ? sert.title_ua : this.$i18n.locale === "es" ? sert.title_es : sert.title_en }}</a></td>
          <td class="number">{{ sert.regnumber }}</td>
          <td class="grade">{{ sert.grade }}</td>
          <td class="date">{{ sert.examdate }}</td>
        </tr>
        </tbody>
      </table>
    </div>
    <div v-else class="container">
      <h2 class="diplom"><span>✅ </span><b><a class="attention"
                                              href="https://testprovider.com/ru/search-certificate/tp88892276D"
                                              title="Diploma..." target="_blank">{{ $t('cert.back.php1') }}</a></b></h2>
      <div class="inner">
        <div v-for="sert in phpStore.state.phpStore" :key="sert.id" class="certificate">
          <a class="block" :href="sert.image" title="Certificate..." target="_blank">
            <h3>{{ sert.id }}. {{ this.$i18n.locale === "uk" ? sert.title_ua : this.$i18n.locale === "es" ? sert.title_es : sert.title_en }}</h3>
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
                 href="https://testprovider.com/ru/search-certificate/tp45473683D"
                 title="Diploma..." target="_blank">{{ $t('cert.back.python1') }}
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
        <tr v-for="sert in pythonStore.state.pythonStore" :key="sert.id">
          <td class="nomer">{{ sert.id }}</td>
          <td class="name"><a :href="sert.image" title="In more detail..." target="_blank">{{ this.$i18n.locale === "uk" ? sert.title_ua : this.$i18n.locale === "es" ? sert.title_es : sert.title_en }}</a></td>
          <td class="number">{{ sert.regnumber }}</td>
          <td class="grade">{{ sert.grade }}</td>
          <td class="date">{{ sert.examdate }}</td>
        </tr>
        </tbody>
      </table>
    </div>
    <div v-else class="container">
      <h2 class="diplom"><span>✅ </span><b><a class="attention"
                                              href="https://testprovider.com/ru/search-certificate/tp45473683D"
                                              title="Diploma..." target="_blank">{{ $t('cert.back.python1') }}</a></b></h2>
      <div class="inner">
        <div v-for="sert in pythonStore.state.pythonStore" :key="sert.id" class="certificate">
          <a class="block" :href="sert.image" title="Certificate..." target="_blank">
            <h3>{{ sert.id }}. {{ this.$i18n.locale === "uk" ? sert.title_ua : this.$i18n.locale === "es" ? sert.title_es : sert.title_en }}</h3>
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
                 href="https://testprovider.com/ru/search-certificate/tp63925579D"
                 title="Diploma..." target="_blank">{{ $t('cert.back.ruby1') }}
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
        <tr v-for="sert in rubyStore.state.rubyStore" :key="sert.id">
          <td class="nomer">{{ sert.id }}</td>
          <td class="name"><a :href="sert.image" title="In more detail..." target="_blank">{{ this.$i18n.locale === "uk" ? sert.title_ua : this.$i18n.locale === "es" ? sert.title_es : sert.title_en }}</a></td>
          <td class="number">{{ sert.regnumber }}</td>
          <td class="grade">{{ sert.grade }}</td>
          <td class="date">{{ sert.examdate }}</td>
        </tr>
        </tbody>
      </table>
    </div>
    <div v-else class="container" style="margin-bottom: 0.5rem">
      <h2 class="diplom"><span>✅ </span><b><a class="attention"
                                              href="https://testprovider.com/ru/search-certificate/tp63925579D"
                                              title="Diploma..." target="_blank">{{ $t('cert.back.ruby1') }}</a></b></h2>
      <div class="inner">
        <div v-for="sert in rubyStore.state.rubyStore" :key="sert.id" class="certificate">
          <a class="block" :href="sert.image" title="Certificate..." target="_blank">
            <h3>{{ sert.id }}. {{ this.$i18n.locale === "uk" ? sert.title_ua : this.$i18n.locale === "es" ? sert.title_es : sert.title_en }}</h3>
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
.backend {
  flex: 1 0 auto;
  .table {background: white;}
  background: linear-gradient(to bottom, rgb(250, 246, 234), rgb(229, 237, 255)) no-repeat center;
  .certificate {
    .block {
      background: white;
      transition: border-color .2s ease-in-out, background-color .2s, box-shadow .2s;
    }
    .block:hover {
      background-image: url("@/assets/background/background13.jpg");
      background-position: center;
      background-size: cover;
      background-repeat: no-repeat;
      border-color: rebeccapurple;
      box-shadow: 3px 3px 4px mediumpurple;
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
  //.table {
  //  margin-bottom: 1rem;
  //}
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
  .diplom, .title {font-size: 1.2rem;}
  .table {
    //margin-bottom: 0.5rem;
    font-size: 0.9rem;
    .name {width: 12rem;}
    .nomer, .number, .grade, .date {font-size: 0.5rem;}
  }
}
</style>