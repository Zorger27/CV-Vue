<script lang="ts">
import {Options, Vue} from "vue-class-component";
import {openGraphMixin} from "@/assets/ogimage/openGraphMixin";

interface ImageData {
  id: string;
  url: string;
  alt: string;
}

@Options({
  mixins: [openGraphMixin],
  mounted() {
    const mainTitle = 'Picture randomizer';
    const title = 'Artificial intelligence - Picture randomizer';
    const metaDescription = 'Anatolii Zorin\'s Portfolio with all diplomas, certificates, interesting projects and a detailed description of the experience gained at previous jobs.';
    const description = 'Anatolii Zorin\'s Portfolio - Artificial intelligence - Picture randomizer by Lorem Picsum';
    const imageUrl = 'https://zorin.expert/assets/ogimage/extra/ai/OG_Image_Randomizer.jpg';
    const url = 'https://zorin.expert/extra/ai/picsum';

    this.setOpenGraphTags(metaDescription, title, description, imageUrl, url);
    this.setPageTitle(mainTitle);
  },
  data() {
    return {
      showMore: false,
      selectedSize: '256',
      imageCount: 6,
      images: [] as ImageData[],
    };
  },
  methods: {
    generateImages() {
      this.images = [];
      for (let i = 0; i < this.imageCount; i++) {
        const id = Math.random().toString(36).slice(2, 31);
        const imageUrl = `https://picsum.photos/${this.selectedSize}/${this.selectedSize}?random=${id}`;
        const altText = `Image ${i + 1}`;
        this.images.push({id, url: imageUrl, alt: altText});
      }
    },
    setMaxImageCount() {
      this.imageCount = 30;
    },
    clearImages() {
      this.images = [];
      this.selectedSize = '256';
      this.imageCount = 6;
    }
  },
  components: {},
})
export default class LoremPicsum extends Vue {
}
</script>

<template>
  <div class="picsum">
    <h1>
      <router-link class="back" to="/extra/ai" title="Back to AI page"><i class="fa fa-arrow-circle-left"></i>
      </router-link>
      {{ $t('extra.ai.picsum.title') }}
    </h1>
    <line></line>
    <h2 @click="showMore = !showMore" class="more">{{$t ('extra.ai.picsum.more01')}}<i style="color: rebeccapurple; margin-left: 0.5rem"
                                                                             class="fas fa-hand-pointer"></i></h2>
    <p v-if="showMore" style="margin: 0">{{$t ('extra.ai.picsum.more02')}}</p>
    <p v-if="showMore" style="margin: 0">{{$t ('extra.ai.picsum.more03')}}</p>
    <h3 v-if="showMore" style="color: darkred; margin: 0.5rem">{{$t ('extra.ai.picsum.more04')}}</h3>
    <line></line>
    <div class="container">
      <div class="input">
        <div class="psize">
          <label for="size">{{ $t('extra.ai.picsum.size') }}</label>
          <select id="size" class="select" v-model="selectedSize">
            <option value="128">128x128</option>
            <option value="256">256x256</option>
            <option value="512">512x512</option>
            <option value="1024">1024x1024</option>
            <option value="2048">2048x2048</option>
            <option value="4096">4096x4096</option>
          </select>
        </div>
        <div class="qty">
          <label for="count">{{ $t('extra.ai.picsum.count') }}</label>
          <input id="count" type="number" min="1" max="30" v-model.number="imageCount" @keyup.enter="generateImages"/>
          <button @click="setMaxImageCount">{{ $t('extra.ai.picsum.max') }}</button>
        </div>
        <div class="btns">
          <button class="gen" @click="generateImages">{{ $t('extra.ai.picsum.create') }}</button>
          <button class="clear" @click="clearImages">{{ $t('extra.ai.picsum.clear') }}</button>
        </div>
      </div>
      <h2 v-if="images.length > 0">{{ $t('extra.ai.picsum.gen') }}</h2>
      <div v-if="images.length > 0" class="image-container">
        <div v-for="image in images" :key="image.id" class="image-wrapper">
          <img :src="image.url" :alt="image.alt" class="image"/>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.picsum {
  flex: 1 0 auto;
  background-image: url("@/assets/background/background15.webp");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  .back {
    display: inline-flex;
    text-decoration: none;
    margin-right: 0.1rem;
  }
  .more {
    display: inline-flex;
    color: deeppink;
    cursor: pointer;
    border-bottom: 1px solid transparent;
    margin: 0.5rem;
  }

  .more:hover, :focus {
    border-bottom: 1px solid deeppink;
  }

  .container {
    input {
      font-size: 1.6rem;
      border: 1px solid lightskyblue;
      border-radius: 5px;
    }

    input:active, :focus {
      outline: 1px solid lightskyblue;
      outline-offset: 0;
      box-shadow: 3px 3px 4px 0 lightgrey;
    }

    button {
      font-size: 1.4rem;
      color: black;
      font-weight: bold;
      border: 1px solid lightslategrey;
      border-radius: 5px;
      background-image: url("@/assets/background/background10.webp");
      background-position: center;
      background-size: cover;
      background-repeat: no-repeat;
      padding: 0.4rem 0.7rem;
      transition: border-color .2s ease-in-out, background-color .2s, box-shadow .2s;
    }

    button:hover {
      box-shadow: 3px 3px 4px 0 grey;
    }

    .input {
      font-size: 1.6rem;
      padding: 0.5rem;

      .psize {
        padding: 0.2rem;

        select {
          font-size: 1.6rem;
          border: 1px solid lightskyblue;
          border-radius: 5px;
        }

        select:active, :focus {
          outline: 1px solid lightskyblue;
          outline-offset: 0;
          box-shadow: 3px 3px 4px 0 lightgrey;
        }
      }

      .qty {
        padding: 0.2rem;

        input {
          margin-right: 0.5rem;
        }
      }

      .btns {
        button {
          margin-top: 0.5rem;
        }

        .gen {
          margin-right: 0.5rem;
        }
      }
    }

    h2 {
      font-size: 1.9rem;
      margin: 0.3rem;
      text-decoration: underline;
    }

    .image-container {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;

      .image-wrapper {
        margin: 0.5rem;
        max-width: 100%;
        .image {
          width: 100%;
          height: auto;
        }
      }
    }
  }

  @media (max-width: 768px) {
    h1 {
      //font-size: 1.5rem;
      //margin: 0.3rem;
    }
    .container {
      input {font-size: 1.3rem;}

      button {
        font-size: 1.2rem;
        padding: 0.3rem 0.6rem;
        font-weight: normal;
        border-radius: 3px;
      }

      .input {
        font-size: 1.3rem;
        padding: 0.5rem;
        .psize {padding: 0.2rem;
          select {font-size: 1.3rem;}
        }
        .qty {padding: 0.2rem;
          input {margin-right: 0.5rem;}
        }
        .btns {
          button {margin-top: 0.5rem;}
          .gen {margin-right: 0.5rem;}
        }
      }
      h2 {
        font-size: 1.5rem;
        margin: 0.3rem;
      }
    }
  }
}

</style>