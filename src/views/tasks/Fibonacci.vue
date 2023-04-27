<script lang="ts">
import {Options, Vue} from "vue-class-component";

@Options({
  data() {
    return {
      inputNumber: 0,
      cache: new Map<number, number>(),
    };
  },
  methods: {
    fibonacci(n: number): number {
      if (n === 0) return 0;
      if (n === 1) return 1;

      if (this.cache.has(n)) {
        return this.cache.get(n)!;
      }

      const result = this.fibonacci(n - 1) + this.fibonacci(n - 2);
      this.cache.set(n, result);

      return result;
    },
  },
  components: {}
})
export default class Fibonacci extends Vue {
}
</script>

<template>
  <div class="fibonacci">
    <h1>
      <router-link class="back" to="/extra/tasks" title="Back to Tasks page"><i class="fa fa-arrow-circle-left"></i>
      </router-link>
      {{ $t('extra.h1m.tasks.fibonacci') }}
    </h1>
    <line></line>
    <p>{{ $t('extra.tasks.fib-des01') }}<br>{{ $t('extra.tasks.fib-des02') }}</p>
    <line></line>
    <div>
      <h3 class="title">{{ $t('extra.tasks.fib-des03') }}</h3>
      <input type="number" v-model="inputNumber">
      <h3 class="result">
        {{ $t('extra.tasks.fib-des04') }}
        <span style="color: lightseagreen; font-weight: bolder">{{ inputNumber }}</span>
        {{ $t('extra.tasks.fib-des05') }}
        <span style="color: red; font-weight: bolder">{{ fibonacci(inputNumber) }}</span>
      </h3>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.fibonacci {
  flex: 1 0 auto;

  .back {
    display: inline-flex;
    text-decoration: none;
    margin-right: 0.1rem;
  }
  input[type="number"] {
    border: 1px solid #e0e0e0;
    font-size: 2rem;
    border-radius: 5px;
    width: 100px;
    padding: 0.6rem;
    margin: 0 5px;
  }
  input:active, :focus {
    outline: 1px solid lightskyblue;
    outline-offset: 0;
    box-shadow: 3px 3px 4px 0 lightgrey;
  }

  p {
    font-size: 1.6rem;
  }
  .title, .result {
    font-size: 2rem;
    color: darkblue;
  }

  @media (max-width: 1020px) {
    p {
      font-size: 1.3rem;
    }
    .title, .result {
      font-size: 1.7rem;
    }
  }
  @media (max-width: 768px) {
    p {
      font-size: 1rem;
    }
    .title, .result {
      font-size: 1.4rem;
    }

  }
}
</style>