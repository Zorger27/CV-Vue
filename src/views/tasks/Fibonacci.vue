<script lang="ts">
import {Options, Vue} from "vue-class-component";
import {openGraphMixin} from "@/assets/ogimage/openGraphMixin";

@Options({
  mixins: [openGraphMixin],
  mounted() {
    const mainTitle = 'Fibonacci';
    const title = 'JS tasks - Fibonacci';
    const metaDescription = 'Anatolii Zorin\'s Portfolio with all diplomas, certificates, interesting projects and a detailed description of the experience gained at previous jobs.';
    const description = 'Anatolii Zorin\'s Portfolio - Typical JavaScript interview task - Fibonacci';
    const imageUrl = 'https://zorin.expert/assets/ogimage/extra/jstask/OG_Image_Fibonacci.jpg';
    const url = 'https://zorin.expert/extra/tasks/fibonacci';

    this.setOpenGraphTags(metaDescription, title, description, imageUrl, url);
    this.setPageTitle(mainTitle);
    this.setCanonical(url);
  },
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
      <router-link class="back" to="/extra/tasks" :title="$t('extra.tasks.back')"><i class="fa fa-arrow-circle-left"></i>
      </router-link>
      {{ $t('extra.h1m.tasks.fibonacci') }}
    </h1>
    <line></line>
    <p>{{ $t('extra.tasks.fibonacci.fib-des01') }}<br>{{ $t('extra.tasks.fibonacci.fib-des02') }}</p>
    <line></line>
    <div>
      <h3 class="title">{{ $t('extra.tasks.fibonacci.fib-des03') }}</h3>
      <input type="text" v-model="inputNumber" @input="onInput">
      <h3 class="result">
        {{ $t('extra.tasks.fibonacci.fib-des04') }}
        <span style="color: lightseagreen;">{{ inputNumber }}</span>
        {{ $t('extra.tasks.fibonacci.fib-des05') }}
        <span style="color: red;">{{ fibonacci }}</span>
      </h3>
    </div>
    <line></line>
    <div class="inner">
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
  </div>
</template>

<style lang="scss" scoped>
.fibonacci {
  flex: 1 0 auto;
  background: linear-gradient(to bottom, rgb(234, 250, 250), rgb(253, 229, 255)) no-repeat center;

  .certificate {
    text-align: center;
    .block {
      background: white;
      transition: border-color .2s ease-in-out, background-color .2s, box-shadow .2s;
    }
    .block:hover {
      background-image: url("@/assets/background/background09.webp");
      background-position: center;
      background-size: cover;
      background-repeat: no-repeat;
      border: 1px solid lightskyblue;
      box-shadow: 3px 3px 4px 0 darkblue;
    }
  }
  .inner {margin-bottom: 1rem;}

  .back {
    display: inline-flex;
    text-decoration: none;
    margin-right: 0.1rem;
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
    .inner {margin-bottom: 0.7rem;}
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
    .inner {margin-bottom: 0.4rem;}
  }
}
</style>