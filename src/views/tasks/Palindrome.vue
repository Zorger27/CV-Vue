<script lang="ts">
import {Options, Vue} from "vue-class-component";
import {openGraphMixin} from "@/assets/ogimage/openGraphMixin";

@Options({
  mixins: [openGraphMixin],
  data() {
    return {
      inputText: '',
      result: null as boolean | null,
    };
  },
  mounted() {
    const mainTitle = 'Palindrome';
    const title = 'JS tasks - Palindrome';
    const metaDescription = 'Anatolii Zorin\'s Portfolio with all diplomas, certificates, interesting projects and a detailed description of the experience gained at previous jobs.';
    const description = 'Anatolii Zorin\'s Portfolio - Typical JavaScript interview task - Palindrome';
    const imageUrl = 'https://zorin.expert/assets/ogimage/extra/jstask/OG_Image_Palindrome.jpg';
    const url = 'https://zorin.expert/extra/tasks/palindrome';

    this.setOpenGraphTags(metaDescription, title, description, imageUrl, url);
    this.setPageTitle(mainTitle);
  },
  methods: {
    checkPalindrome(event: KeyboardEvent): void {
      if (event.key === 'Enter') {
        event.preventDefault();
        // this.$refs.result?.focus();
      }
    }
  },
  components: {}
})
export default class Palindrome extends Vue {
  inputText = '';

  get isPalindrome(): boolean {
    const input = this.inputText.toLowerCase().replace(/[^a-zа-яё0-9]/g, '');
    return input === input.split('').reverse().join('');
  }
}
</script>

<template>
  <div class="palindrome">
    <h1>
      <router-link class="back" to="/extra/tasks" :title="$t('extra.tasks.back')"><i class="fa fa-arrow-circle-left"></i>
      </router-link>
      {{ $t('extra.h1m.tasks.palindrome') }}
    </h1>
    <line></line>
    <p>{{ $t('extra.tasks.palindrome.pal-des01') }}<br>{{ $t('extra.tasks.palindrome.pal-des02') }}</p>
    <line></line>
    <h2 class="title">{{ $t('extra.tasks.palindrome.pal-des03') }}</h2>
    <input type="text" v-model="inputText" @keydown.enter.prevent="checkPalindrome" :placeholder="$t('extra.tasks.palindrome.pal-des07')"/>
    <h3 class="result"><span>{{ $t('extra.tasks.palindrome.pal-des04') }}</span> <span v-if="inputText.length > 0">
      <span v-if="isPalindrome" style="color: lightseagreen;">{{ $t('extra.tasks.palindrome.pal-des05') }}</span><span v-else style="color: red;">{{
        $t('extra.tasks.palindrome.pal-des06')
      }}</span>
      </span>
    </h3>
    <line></line>
    <div class="inner">
      <div class="certificate">
        <a class="block" href="/assets/tasks/Palindrome-JS.pdf" title="Download solution in pdf format..."
           target="_blank"><h3>{{ $t('extra.tasks.link-js') }}</h3>
        </a>
      </div>
      <div class="certificate">
        <a class="block" href="/assets/tasks/Palindrome-Vue.pdf" title="Download solution in pdf format..."
           target="_blank"><h3>{{ $t('extra.tasks.link-vue') }}</h3>
        </a>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.palindrome {
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
    width: 280px;
    padding: 0.6rem;
    margin: 0 5px;
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