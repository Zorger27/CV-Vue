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
          Введите число:
          <input type="number" v-model.number="number" min="1" required>
        </label>
        <button type="submit">Генерировать</button>
      </form>
      <div v-if="numbers">
        <p>{{ numbers.join(' ') }}</p>
      </div>
    </div>
    <line></line>
    <div class="certificate">
      <a class="block" href="/assets/tasks/FizzBuzz-JS.pdf" title="Download solution in pdf format..."
         target="_blank"><h3>{{ $t('extra.tasks.link-js') }}</h3>
      </a>
    </div>
    <div class="certificate">
      <a class="block" href=# title="Download solution in pdf format..."
         target="_blank"><h3>{{ $t('extra.tasks.link-vue') }}</h3>
      </a>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.fizzbuzz {
  flex: 1 0 auto;

  .back {
    display: inline-flex;
    text-decoration: none;
    margin-right: 0.1rem;
  }
  .certificate {
    text-align: center;
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