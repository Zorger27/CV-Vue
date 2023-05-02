<script lang="ts">
import {Options, Vue} from "vue-class-component";

@Options({components: {},})
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
      <router-link class="back" to="/extra/tasks" title="Back to Tasks page"><i class="fa fa-arrow-circle-left"></i>
      </router-link>
      {{ $t('extra.h1m.tasks.fizzbuzz') }}
    </h1>
    <line></line>
    <p>{{ $t('extra.tasks.fizz-des01') }}<br>{{ $t('extra.tasks.fizz-des02') }}<br>{{
        $t('extra.tasks.fizz-des03')
      }}<br>{{ $t('extra.tasks.fizz-des04') }}</p>
    <line></line>
    <div>
      <form @submit.prevent="generateNumbers">
        <label>
          {{ $t('extra.tasks.fizz-des05') }}
          <input type="number" v-model.number="number" min="1" required>
        </label>
        <button type="submit" class="btn">{{ $t('extra.tasks.fizz-des06') }}</button>
        <button type="button" class="btn" @click="clearNumbers" v-if="numbers">{{ $t('extra.tasks.fizz-des07') }}</button>
      </form>
      <div class="numbers" v-if="numbers">
        <span v-for="num in numbers" :key="num"
              :class="{ 'fizzbuzz': num === 'fizzbuzz', 'fizz': num === 'fizz', 'buzz': num === 'buzz' }">{{ num }}</span>
      </div>
    </div>
    <line></line>
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
</template>

<style lang="scss" scoped>
.fizzbuzz {
  flex: 1 0 auto;
  font-size: 1.6rem;

  .back {
    display: inline-flex;
    text-decoration: none;
    margin-right: 0.1rem;
  }

  input[type="number"] {
    flex: 1 0 auto;
    caret-color: red;
    border: 1px solid lightskyblue;
    font-size: 1.6rem;
    border-radius: 5px;
    width: 100px;
    padding: 0.6rem;
    margin: 5px 5px 10px 0;
  }

  input:active, :focus {
    outline: 1px solid lightskyblue;
    box-shadow: 3px 3px 4px 0 lightgrey;
  }
  .btn {
    border: 1px solid rgba(112, 111, 111, 0.6);
    border-radius: 5px;
    padding: 0.6rem;
    margin: 0.5rem;
    box-shadow: 3px 3px 4px 0 lightgrey;
  }
  .btn:hover, :focus {
    border: 1px solid lightskyblue;
    box-shadow: 3px 3px 4px 0 lightblue;
    background: none;
    color: blue;
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
  }

  .certificate {
    text-align: center;
  }

  p, .btn {
    font-size: 1.6rem;
  }

  @media (max-width: 1020px) {
    font-size: 1.3rem;
    input[type="number"] {
      font-size: 1.3rem;
      width: 85px;
    }
    p, .btn {
      font-size: 1.3rem;
    }
  }
  @media (max-width: 768px) {
    font-size: 1rem;
    input[type="number"] {
      font-size: 1rem;
      width: 65px;
    }
    p, .btn {
      font-size: 1rem;
    }
  }
}
</style>