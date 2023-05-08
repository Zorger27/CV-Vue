<script lang="ts">
import {Options, Vue} from "vue-class-component";

@Options({components: {},})
export default class Anagram extends Vue {
  word1 = "";
  word2 = "";
  isAnagram = false;

  checkAnagram(): void {
    if (!this.word1 || !this.word2) {
      this.isAnagram = false;
      return;
    }
    const str1 = this.word1.toLowerCase().replace(/[^a-zа-яё0-9]/g, "");
    const str2 = this.word2.toLowerCase().replace(/[^a-zа-яё0-9]/g, "");
    this.isAnagram = str1.split("").sort().join("") === str2.split("").sort().join("");
  }
}
</script>

<template>
  <div class="anagram">
    <h1>
      <router-link class="back" to="/extra/tasks" title="Back to Tasks page"><i class="fa fa-arrow-circle-left"></i>
      </router-link>
      {{ $t('extra.h1m.tasks.anagram') }}
    </h1>
    <line></line>
    <p>{{ $t('extra.tasks.anagram.an-des01') }}<br>{{ $t('extra.tasks.anagram.an-des02') }}<br>{{ $t('extra.tasks.anagram.an-des03') }}</p>
    <line></line>
    <h2 class="title">{{ $t('extra.tasks.anagram.an-des04') }}</h2>
    <input v-model="word1" @input="checkAnagram" :placeholder="$t('extra.tasks.anagram.an-des05')">
    <input v-model="word2" @input="checkAnagram" :placeholder="$t('extra.tasks.anagram.an-des06')">
    <h3 class="result" v-if="isAnagram"><span>{{ $t('extra.tasks.anagram.an-des07') }}</span><span class="word1">{{
        word1
      }}</span><span>{{ $t('extra.tasks.anagram.an-des09') }}</span><span>{{ $t('extra.tasks.anagram.an-des08') }}</span><span class="word2">{{
        word2
      }}</span> - <span style="color: lightseagreen;">{{ $t('extra.tasks.anagram.an-des10') }}</span></h3>
    <h3 class="result" v-else><span>{{ $t('extra.tasks.anagram.an-des07') }}</span><span class="word1">{{
        word1
      }}</span><span>{{ $t('extra.tasks.anagram.an-des09') }}</span><span>{{ $t('extra.tasks.anagram.an-des08') }}</span><span class="word2">{{ word2 }}</span> -
      <span style="color: red;">{{ $t('extra.tasks.anagram.an-des11') }}</span></h3>
    <line></line>
    <div class="certificate">
      <a class="block" href="/assets/tasks/Anagram-JS.pdf" title="Download solution in pdf format..."
         target="_blank"><h3>{{ $t('extra.tasks.link-js') }}</h3>
      </a>
    </div>
    <div class="certificate">
      <a class="block" href="/assets/tasks/Anagram-Vue.pdf" title="Download solution in pdf format..."
         target="_blank"><h3>{{ $t('extra.tasks.link-vue') }}</h3>
      </a>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.anagram {
  flex: 1 0 auto;

  .back {
    display: inline-flex;
    text-decoration: none;
    margin-right: 0.1rem;
  }

  .certificate {
    text-align: center;
  }

  input {
    flex: 1 0 auto;
    caret-color: red;
    border: 1px solid lightskyblue;
    font-size: 2rem;
    border-radius: 5px;
    width: 320px;
    padding: 0.6rem;
    margin: 5px;
  }

  input:active, :focus {
    outline: 1px solid lightskyblue;
    box-shadow: 3px 3px 4px 0 lightgrey;
  }

  p {
    font-size: 1.6rem;
  }

  .title, .result {
    font-size: 2rem;
    color: darkblue;
  }

  .word1 {
    color: royalblue;
  }

  .word2 {
    color: steelblue;
  }

  @media (max-width: 1020px) {
    input {
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
    input {
      font-size: 1.4rem;
      width: 280px;
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