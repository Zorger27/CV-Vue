<script lang="ts">
import {Options, Vue} from "vue-class-component";

@Options({components: {},})
export default class CubeView extends Vue {
}
</script>

<template>
  <div class="cube">
    <h1>
      <router-link class="back" to="/extra" title="Back to Extra page"><i class="fa fa-arrow-circle-left"></i>
      </router-link>
      {{ $t('extra.cube') }}
    </h1>
    <line></line>
  </div>
</template>

<style lang="scss" scoped>
.cube {
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