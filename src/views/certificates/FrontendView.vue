<script lang="ts">
import {Options, Vue} from "vue-class-component";
import htmlStore from "@/store/modules/certificates/frontend/htmlStore";
import javascriptStore from "@/store/modules/certificates/frontend/javascriptStore";
import angularStore from "@/store/modules/certificates/frontend/angularStore";
import reactStore from "@/store/modules/certificates/frontend/reactStore";
import frontStore from "@/store/modules/certificates/frontend/frontStore";

@Options({
  computed: {
    htmlStore() {
      return htmlStore
    },
    javascriptStore() {
      return javascriptStore
    },
    angularStore() {
      return angularStore
    },
    reactStore() {
      return reactStore
    },
    frontStore() {
      return frontStore
    }
  },
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
    </h1>
    <line></line>
    <h2 class="diplom"><span>✅ </span><b><a class="attention"
                                            href="https://testprovider.com/ru/search-certificate/tp24303907d"
                                            title="Diploma..." target="_blank">{{ $t('cert.front.html1') }}</a></b></h2>
    <div v-for="sert in htmlStore.state.htmlStore" class="certificate">
      <a class="block" :href="sert.image" title="Certificate..." target="_blank">
        <h3>{{ sert.id }}. {{ sert.title }}</h3>
        <div>{{ $t('cert.number') }}<strong>{{ sert.regnumber }}</strong></div>
        <div>{{ $t('cert.grade') }}<strong>{{ sert.grade }}</strong></div>
        <div>{{ $t('cert.date') }}{{ sert.examdate }}</div>
      </a>
    </div>
    <h2 class="diplom"><span>✅ </span><b><a class="attention"
                                            href="https://testprovider.com/ru/search-certificate/tp84806711d"
                                            title="Diploma..." target="_blank">{{ $t('cert.front.javascript1') }}</a></b></h2>
    <div v-for="sert in javascriptStore.state.javascriptStore" class="certificate">
      <a class="block" :href="sert.image" title="Certificate..." target="_blank">
        <h3>{{ sert.id }}. {{ sert.title }}</h3>
        <div>{{ $t('cert.number') }}<strong>{{ sert.regnumber }}</strong></div>
        <div>{{ $t('cert.grade') }}<strong>{{ sert.grade }}</strong></div>
        <div>{{ $t('cert.date') }}{{ sert.examdate }}</div>
      </a>
    </div>
    <h2 class="diplom"><span>✅ </span><b><a class="attention"
                                            href="https://testprovider.com/ru/search-certificate/tp31003654d"
                                            title="Diploma..." target="_blank">{{ $t('cert.front.angular1') }}</a></b></h2>
    <div v-for="sert in angularStore.state.angularStore" class="certificate">
      <a class="block" :href="sert.image" title="Certificate..." target="_blank">
        <h3>{{ sert.id }}. {{ sert.title }}</h3>
        <div>{{ $t('cert.number') }}<strong>{{ sert.regnumber }}</strong></div>
        <div>{{ $t('cert.grade') }}<strong>{{ sert.grade }}</strong></div>
        <div>{{ $t('cert.date') }}{{ sert.examdate }}</div>
      </a>
    </div>
    <h2 class="diplom"><span>✅ </span><b><a class="attention"
                                            href="https://testprovider.com/ru/search-certificate/tp37723782d"
                                            title="Diploma..." target="_blank">{{ $t('cert.front.react1') }}</a></b></h2>
    <div v-for="sert in reactStore.state.reactStore" class="certificate">
      <a class="block" :href="sert.image" title="Certificate..." target="_blank">
        <h3>{{ sert.id }}. {{ sert.title }}</h3>
        <div>{{ $t('cert.number') }}<strong>{{ sert.regnumber }}</strong></div>
        <div>{{ $t('cert.grade') }}<strong>{{ sert.grade }}</strong></div>
        <div>{{ $t('cert.date') }}{{ sert.examdate }}</div>
      </a>
    </div>
    <h2 class="diplom"><span>✅ </span><b><a class="attention"
                                            href="https://testprovider.com/ru/search-certificate/tp77692345d"
                                            title="Diploma..." target="_blank">{{ $t('cert.front.frontend1') }}</a></b></h2>
    <div v-for="sert in frontStore.state.frontStore" class="certificate">
      <a class="block" :href="sert.image" title="Certificate..." target="_blank">
        <h3>{{ sert.id }}. {{ sert.title }}</h3>
        <div>{{ $t('cert.number') }}<strong>{{ sert.regnumber }}</strong></div>
        <div>{{ $t('cert.grade') }}<strong>{{ sert.grade }}</strong></div>
        <div>{{ $t('cert.date') }}{{ sert.examdate }}</div>
      </a>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.frontend {
  flex: 1 0 auto;

  .back {
    display: none;
    @media (max-width: 768px) {
      display: inline-flex;
      text-decoration: none;
      margin-right: 0.1rem;
    }
  }
}
</style>