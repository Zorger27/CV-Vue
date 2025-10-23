<script lang="ts">
import {Options, Vue} from "vue-class-component";
import {openGraphMixin} from "@/assets/ogimage/openGraphMixin";

@Options({
  mixins: [openGraphMixin],
  mounted() {
    const mainTitle = 'Fizzbuzz';
    const title = 'JS tasks - Fizzbuzz';
    const metaDescription = 'Anatolii Zorin\'s Portfolio with all diplomas, certificates, interesting projects and a detailed description of the experience gained at previous jobs.';
    const description = 'Anatolii Zorin\'s Portfolio - Typical JavaScript interview task - Fizzbuzz';
    const imageUrl = 'https://zorin.expert/assets/ogimage/extra/jstask/OG_Image_FizzBuzz.jpg';
    const url = 'https://zorin.expert/extra/tasks/fizzbuzz';

    this.setOpenGraphTags(metaDescription, title, description, imageUrl, url);
    this.setPageTitle(mainTitle);
    this.setCanonical(url);
  },
  components: {},
})
export default class Fizzbuzz extends Vue {
  number = 1;
  numbers: Array<string | number> = [];

  generateNumbers(): void {
    this.numbers = [];
    for (let i = 1; i <= this.number; i++) {
      if (i % 3 === 0 && i % 5 === 0) {
        this.numbers.push("fizzbuzz");
      } else if (i % 3 === 0) {
        this.numbers.push("fizz");
      } else if (i % 5 === 0) {
        this.numbers.push("buzz");
      } else {
        this.numbers.push(i);
      }
    }
  }

  clearNumbers(): void {
    this.numbers = [];
    this.number = 1;
  }
}
</script>

<template>
  <div class="fizzbuzz">
    <h1>
      <router-link class="back" to="/extra/tasks" :title="$t('extra.tasks.back')"><i class="fa fa-arrow-circle-left"></i>
      </router-link>
      {{ $t('extra.h1m.tasks.fizzbuzz') }}
    </h1>
    <line></line>
    <p>{{ $t('extra.tasks.fizzbuzz.fizz-des01') }}<br>{{ $t('extra.tasks.fizzbuzz.fizz-des02') }}<br>{{
        $t('extra.tasks.fizzbuzz.fizz-des03')
      }}<br>{{ $t('extra.tasks.fizzbuzz.fizz-des04') }}</p>
    <line></line>
    <div>
      <div class="form">
        <form @submit.prevent="generateNumbers">
          <label>
            {{ $t('extra.tasks.fizzbuzz.fizz-des05') }}
            <input type="number" v-model.number="number" min="1" required>
          </label>
          <button type="submit" class="btn" title="Generate"><i class="fas fa-magic"></i></button>
          <button type="button" class="btn" title="Clear" @click="clearNumbers" v-if="numbers"><i class="fas fa-trash-alt"></i></button>
        </form>
      </div>
      <div class="numbers" v-if="numbers">
        <span v-for="num in numbers" :key="num"
              :class="{ 'fizzbuzz': num === 'fizzbuzz', 'fizz': num === 'fizz', 'buzz': num === 'buzz' }">{{ num }}</span>
      </div>
    </div>
    <line></line>
    <div class="inner">
      <div class="certificate">
        <a class="block" href="/assets/tasks/FizzBuzz-JS.pdf" title="Download solution in pdf format..."
           target="_blank"><h3>{{ $t('extra.tasks.link-js') }}</h3>
        </a>
      </div>
      <div class="certificate">
        <a class="block" href="/assets/tasks/FizzBuzz-Vue.pdf" title="Download solution in pdf format..."
           target="_blank"><h3>{{ $t('extra.tasks.link-vue') }}</h3>
        </a>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.fizzbuzz {
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
  label {
    font-size: 2rem;
    color: darkblue;
    font-weight: bold;
  }

  input[type="number"] {
    flex: 1 0 auto;
    color: black;
    caret-color: red;
    border: 1px solid lightskyblue;
    font-size: 1.6rem;
    border-radius: 5px;
    width: 100px;
    padding: 0.6rem;
    margin: 10px 5px 15px 0;
  }

  input:active, :focus {
    outline: 1px solid lightskyblue;
    box-shadow: 3px 3px 4px 0 lightgrey;
  }
  .btn {
    border: 1px solid rgba(112, 111, 111, 0.6);
    //background: whitesmoke;
    text-decoration: none;
    border-radius: 5px;
    padding: 0.6rem;
    margin: 0.5rem;
    box-shadow: 3px 3px 4px 0 lightgrey;
  }
  .btn:hover, :focus {
    border: 1px solid lightskyblue;
    box-shadow: 3px 3px 4px 0 lightblue;
    background: none;
    color: red;
  }

  .numbers {
    white-space: pre-wrap;

    span {
      display: inline-block;
      margin-right: 5px;
    }
  }

  .fizz {
    color: blue;
  }

  .buzz {
    color: green;
  }

  .fizzbuzz {
    color: red;
    background: inherit;
  }

  p, .btn {
    font-size: 1.6rem;
  }

  @media (max-width: 1020px) {
    label {
      font-size: 1.6rem;
    }
    input[type="number"] {
      font-size: 1.3rem;
      width: 80px;
    }
    p, .btn {
      font-size: 1.3rem;
    }
    .inner {margin-bottom: 0.7rem;}
  }
  @media (max-width: 768px) {
    label {
      font-size: 1.2rem;
    }
    input[type="number"] {
      font-size: 1rem;
      width: 65px;
    }
    p, .btn {
      font-size: 1rem;
      margin: 0.2rem 0.2rem;
    }
    .inner {margin-bottom: 0.4rem;}
  }
}
</style>