<script lang="ts">
import {Options, Vue} from "vue-class-component";

@Options({components: {},})
export default class Anagram extends Vue {
}
</script>

<template>
  <div class="anagram">
    <h1>
      <router-link class="back" to="/extra/tasks" title="Back to Tasks page"><i class="fa fa-arrow-circle-left"></i>
      </router-link>
      {{ $t('extra.h1m.tasks.anagram') }}
    </h1>
    <line></line>
    <p>{{ $t('extra.tasks.an-des01') }}<br>{{ $t('extra.tasks.an-des02') }}<br>{{ $t('extra.tasks.an-des03') }}</p>
  </div>
</template>

<style lang="scss" scoped>
.anagram {
  flex: 1 0 auto;
  .back {
    display: inline-flex;
    text-decoration: none;
    margin-right: 0.1rem;
  }
  p {
    font-size: 1.6rem;
  }
  @media (max-width: 1020px) {
    p {
      font-size: 1.3rem;
    }
  }
  @media (max-width: 768px) {
    p {
      font-size: 1rem;
    }
  }
}
</style>