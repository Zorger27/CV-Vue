<script lang="ts">
import {Options, Vue} from "vue-class-component";

@Options({components: {},})
export default class Findvowels extends Vue {
}
</script>

<template>
  <div class="findvowels">
    <h1>
      <router-link class="back" to="/extra/tasks" title="Back to Tasks page"><i class="fa fa-arrow-circle-left"></i>
      </router-link>
      {{ $t('extra.h1m.tasks.findvowels') }}
    </h1>
    <line></line>
    <p>{{ $t('extra.tasks.find-des01') }}<br>{{ $t('extra.tasks.find-des02') }}</p>
    <line></line>
  </div>
</template>

<style lang="scss" scoped>
.findvowels {
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