<script lang="ts">
import {Options, Vue} from "vue-class-component";

@Options({components: {},})
export default class ExchangeView extends Vue {
}
</script>

<template>
  <div class="exchange">
    <h1>
      <router-link class="back" to="/extra" title="Back to Extra page"><i class="fa fa-arrow-circle-left"></i>
      </router-link>
      {{ $t('extra.h1m.exchange') }}
    </h1>
    <line></line>
    <h1>{{ $t('login.h1') }}</h1>
  </div>
</template>

<style lang="scss" scoped>
.exchange {
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