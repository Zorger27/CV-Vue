<script lang="ts">
import {Options, Vue} from "vue-class-component";

@Options({
  data() {
    return {
      inputNumber: "",
      memoizedFibonacci: new Map<number, number>(),
    };
  },
  computed: {
    fibonacci(): number | undefined {
      const n = parseInt(this.inputNumber);
      if (!Number.isNaN(n) && n >= 0) {
        if (this.memoizedFibonacci.has(n)) {
          return this.memoizedFibonacci.get(n);
        }
        let a = 0;
        let b = 1;
        for (let i = 0; i < n; i++) {
          const c = a + b;
          a = b;
          b = c;
        }
        this.memoizedFibonacci.set(n, a);
        return a;
      }
    },
  },
  methods: {
    onInput(): void {
      this.memoizedFibonacci.clear();
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
      <input type="text" v-model="inputNumber" @input="onInput">
      <h3 class="result">
        {{ $t('extra.tasks.fib-des04') }}
        <span style="color: lightseagreen;">{{ inputNumber }}</span>
        {{ $t('extra.tasks.fib-des05') }}
        <span style="color: red;">{{ fibonacci }}</span>
      </h3>
    </div>
    <line></line>
    <div class="certificate">
      <a class="block" href="/assets/tasks/Fibonacci-JS.pdf" title="Download solution in pdf format..."
         target="_blank"><h3>{{ $t('extra.tasks.link-js') }}</h3>
      </a>
    </div>
    <div class="certificate">
      <a class="block" href="/assets/tasks/Fibonacci-Vue.pdf" title="Download solution in pdf format..."
         target="_blank"><h3>{{ $t('extra.tasks.link-vue') }}</h3>
      </a>
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
  .certificate {
    text-align: center;
  }

  input[type="text"] {
    flex: 1 0 auto;
    caret-color: red;
    border: 1px solid lightskyblue;
    font-size: 2rem;
    border-radius: 5px;
    width: 80px;
    padding: 0.6rem;
    margin: 0 5px;
  }

  input:active, :focus {
    outline: 1px solid lightskyblue;
    //outline-offset: 0;
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
    input[type="text"] {
      font-size: 1.7rem;
    }
    p {
      font-size: 1.3rem;
    }
    .title, .result {
      font-size: 1.7rem;
    }
  }
  @media (max-width: 768px) {
    input[type="text"] {
      font-size: 1.4rem;
    }
    p {
      font-size: 1rem;
    }
    .title, .result {
      font-size: 1.4rem;
    }

  }
}
</style>