<script lang="ts">
import {Options, Vue} from "vue-class-component";
import Calculator from "@/components/other/Calculator.vue";

@Options({
  methods: {},
  computed: {},
  components: {Calculator},
})
export default class CalculatorView extends Vue {
}
</script>

<template>
  <div class="calc">
    <h1>
      <router-link class="back" to="/extra" title="Back to Extra page"><i class="fa fa-arrow-circle-left"></i>
      </router-link>
      {{ $t('extra.h1m.calculator') }}
    </h1>
    <line></line>
    <Calculator></Calculator>
  </div>
</template>

<style lang="scss" scoped>
.calc {
  flex: 1 0 auto;
  background: linear-gradient(to bottom, rgb(234, 250, 246), rgb(255, 250, 229)) no-repeat center;

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