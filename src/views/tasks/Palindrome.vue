<script lang="ts">
import {Options, Vue} from "vue-class-component";

@Options({components: {},})
export default class Palindrome extends Vue {
}
</script>

<template>
  <div class="palindrome">
    <h1>
      <router-link class="back" to="/extra/tasks" title="Back to Tasks page"><i class="fa fa-arrow-circle-left"></i>
      </router-link>
      {{ $t('extra.h1m.tasks.palindrome') }}
    </h1>
    <line></line>
    <p>{{ $t('extra.tasks.pal-des01') }}<br>{{ $t('extra.tasks.pal-des02') }}</p>
    <line></line>
  </div>
</template>

<style lang="scss" scoped>
.palindrome {
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