<script lang="ts">
import {Options, Vue} from "vue-class-component";
import {openGraphMixin} from "@/assets/ogimage/openGraphMixin";

@Options({
  mixins: [openGraphMixin],
  mounted() {
    const mainTitle = 'Find vowels';
    const title = 'JS tasks - Find vowels';
    const metaDescription = 'Anatolii Zorin\'s Portfolio with all diplomas, certificates, interesting projects and a detailed description of the experience gained at previous jobs.';
    const description = 'Anatolii Zorin\'s Portfolio - Typical JavaScript interview task - Find vowels';
    const imageUrl = 'https://zorin.expert/assets/ogimage/extra/jstask/OG_Image_Vowels.jpg';
    const url = 'https://zorin.expert/extra/tasks/findvowels';

    this.setOpenGraphTags(metaDescription, title, description, imageUrl, url);
    this.setPageTitle(mainTitle);
  },
  components: {},
})
export default class Findvowels extends Vue {
  inputString = "";
  vowelCount = 0;

  countVowels(): void {
    const vowels = ["a", "e", "i", "o", "u"];
    const str = this.inputString.toLowerCase();
    let count = 0;
    for (let i = 0; i < str.length; i++) {
      if (vowels.includes(str[i])) {
        count++;
      }
    }
    this.vowelCount = count;
  }
}
</script>

<template>
  <div class="findvowels">
    <h1>
      <router-link class="back" to="/extra/tasks" title="Back to Tasks page"><i class="fa fa-arrow-circle-left"></i>
      </router-link>
      {{ $t('extra.h1m.tasks.findvowels') }}
    </h1>
    <line></line>
    <p>{{ $t('extra.tasks.findvowels.find-des01') }}<br>{{ $t('extra.tasks.findvowels.find-des02') }}</p>
    <line></line>
      <h2 class="title">{{ $t('extra.tasks.findvowels.find-des03') }}</h2>
      <input v-model="inputString" @input="countVowels" :placeholder="$t('extra.tasks.findvowels.find-des04')">
      <h3 class="result">{{ $t('extra.tasks.findvowels.find-des05') }}<span style="color: lightseagreen;">{{ vowelCount }}</span></h3>
    <line></line>
    <div class="inner">
      <div class="certificate">
        <a class="block" href="/assets/tasks/FindVowels-JS.pdf" title="Download solution in pdf format..."
           target="_blank"><h3>{{ $t('extra.tasks.link-js') }}</h3>
        </a>
      </div>
      <div class="certificate">
        <a class="block" href="/assets/tasks/FindVowels-Vue.pdf" title="Download solution in pdf format..."
           target="_blank"><h3>{{ $t('extra.tasks.link-vue') }}</h3>
        </a>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.findvowels {
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
    .inner {margin-bottom: 0.7rem;}
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
    .inner {margin-bottom: 0.4rem;}
  }
}
</style>