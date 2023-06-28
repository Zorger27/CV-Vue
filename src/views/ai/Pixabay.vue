<script lang="ts">
import {Options, Vue} from "vue-class-component";
import axios from "axios";

interface MediaData {
  id: string;
  url: string;
  alt: string;
  type: string;
}

@Options({
  data() {
    return {
      showMore: false,
      theme: "",
      imageCount: 6,
      selectedType: "photo",
      images: [] as MediaData[],
      videos: [] as MediaData[],
    };
  },
  methods: {
    async generateImage() {
      this.selectedType = "photo";
      this.images = [];
      const apiKey = process.env.VUE_APP_PIXABAY_API_KEY;
      const mediaType = "photo";
      const url = `https://pixabay.com/api/?key=${apiKey}&q=${encodeURIComponent(
        this.theme
      )}&image_type=${mediaType}&per_page=${this.imageCount}`;
      try {
        const response = await axios.get(url);
        if (response.data.hits) {
          for (const hit of response.data.hits) {
            this.images.push({
              id: hit.id.toString(),
              url: hit.webformatURL,
              alt: hit.tags,
              type: "image",
            });
          }
        }
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    },
    async generateVideo() {
      this.selectedType = "video";
      this.videos = [];
      const apiKey = process.env.VUE_APP_PIXABAY_API_KEY;
      const url = `https://pixabay.com/api/videos/?key=${apiKey}&q=${encodeURIComponent(
        this.theme
      )}&per_page=${this.imageCount}`;
      try {
        const response = await axios.get(url);
        if (response.data.hits) {
          for (const hit of response.data.hits) {
            this.videos.push({
              id: hit.id.toString(),
              url: hit.videos.large.url,
              alt: hit.tags,
              type: "video",
            });
          }
        }
      } catch (error) {
        console.error("Error fetching videos:", error);
      }
    },
    setMaxMediaCount() {
      this.imageCount = 30;
    },
    clearMedia() {
      this.images = [];
      this.theme = "";
      this.imageCount = 6;
      this.selectedType = "photo";
      this.videos = [];
    }
  },
  components: {},
})
export default class Pixabay extends Vue {
}
</script>

<template>
  <div class="pixabay">
    <h1>
      <router-link class="back" to="/extra/ai" title="Back to AI page"><i class="fa fa-arrow-circle-left"></i>
      </router-link>
      {{ $t('extra.ai.pixabay.title') }}
    </h1>
    <line></line>
    <h2 @click="showMore = !showMore" class="more">{{ $t('extra.ai.pixabay.info01') }}<i
      style="color: rebeccapurple; margin-left: 0.5rem"
      class="fas fa-hand-pointer"></i></h2>
    <p v-if="showMore" style="margin: 0">{{ $t('extra.ai.pixabay.info02') }}</p>
    <p v-if="showMore" style="margin: 0">{{ $t('extra.ai.pixabay.info03') }}</p>
    <h3 v-if="showMore" style="color: darkred; margin: 0.5rem">{{ $t('extra.ai.pixabay.info04') }}</h3>
    <line></line>
    <div class="generator">
      <div class="input-group">
        <label for="theme">{{ $t('extra.ai.pixabay.theme1') }}</label>
        <input id="theme" type="text" v-model="theme" :placeholder="$t('extra.ai.pixabay.theme2')" @keyup.enter="generateImage()"/>
      </div>
      <div class="input-group">
        <label for="count">{{ $t('extra.ai.pixabay.count') }}</label>
        <input id="count" style="margin-right: 0.5rem;" type="number" min="1" max="30" v-model.number="imageCount"
               @keyup.enter="generateImage"/>
        <button @click="setMaxMediaCount">{{ $t('extra.ai.pixabay.max') }}</button>
      </div>
      <div class="input-group">
        <label for="type">{{ $t('extra.ai.pixabay.type') }}</label>
        <select id="type" v-model="selectedType">
          <option value="photo">{{ $t('extra.ai.pixabay.photo') }}</option>
          <option value="video">{{ $t('extra.ai.pixabay.video') }}</option>
        </select>
      </div>
      <div class="btns">
        <button class="gen" @click="selectedType === 'photo' ? generateImage() : generateVideo()">{{
            $t('extra.ai.pixabay.create')
          }}
        </button>
        <button class="clear" @click="clearMedia">{{ $t('extra.ai.pixabay.clear') }}</button>
      </div>
      <h2 v-if="selectedType === 'photo' && images.length > 0">{{ $t('extra.ai.pixabay.gen1') }}</h2>
      <h2 v-if="selectedType === 'video' && videos.length > 0">{{ $t('extra.ai.pixabay.gen2') }}</h2>
      <div class="media-container">
        <div v-if="selectedType === 'photo'" class="media-row photo">
          <div v-for="item in images" :key="item.id" class="media-wrapper">
            <a :href="item.url" target="_blank">
              <img :src="item.url" :alt="item.alt">
            </a>
          </div>
        </div>
        <div v-else-if="selectedType === 'video'" class="media-row video">
          <div v-for="item in videos" :key="item.id" class="media-wrapper">
<!--            <a :href="item.url" target="_blank">-->
              <video :src="item.url" controls></video>
<!--            </a>-->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.pixabay {
  flex: 1 0 auto;
  background-image: url("@/assets/background/background14.jpg");
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
    //text-shadow: 2px 2px 4px white;
    cursor: pointer;
    border-bottom: 1px solid transparent;
    margin: 0.5rem;
  }

  .more:hover, :focus {
    border-bottom: 1px solid deeppink;
  }

  .generator {
    margin-top: 1rem;

    .input-group {
      margin: 0.5rem auto;
      font-size: 1.6rem;

      input {
        border: 1px solid lightskyblue;
        border-radius: 5px;
        font-size: 1.6rem;
      }

      input:active, :focus {
        outline: 1px solid lightskyblue;
        outline-offset: 0;
        box-shadow: 3px 3px 4px 0 lightgrey;
      }

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

    button {
      font-size: 1.4rem;
      color: black;
      font-weight: bold;
      border: 1px solid lightslategrey;
      border-radius: 5px;
      background-image: url("@/assets/background/background10.jpg");
      background-position: center;
      background-size: cover;
      background-repeat: no-repeat;
      padding: 0.4rem 0.7rem;
      transition: border-color .2s ease-in-out, background-color .2s, box-shadow .2s;
    }

    button:hover {
      box-shadow: 3px 3px 4px 0 grey;
    }

    .btns {
      button {
        margin-top: 0.5rem;
      }

      .gen {
        margin-right: 0.5rem;
      }
    }

    h2 {
      font-size: 1.9rem;
      margin: 0.3rem;
      text-decoration: underline;
    }

    .media-container {
      .photo {
        //display: flex;
        //flex-wrap: wrap;
        //justify-content: center;

        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        grid-template-rows: auto;
        justify-content: center;
        align-items: center;

        .media-wrapper {
          margin: 5px;
          display: flex;
          flex-wrap: wrap;

          img {
            max-width: 100%;
            height: auto;
          }
        }
      }

      .video {
        //display: flex;
        //flex-wrap: wrap;
        //justify-content: center;

        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        grid-template-rows: auto;
        justify-content: center;
        align-items: center;

        .media-wrapper {
          margin: 5px;
          //max-width: 30%;
          display: flex;
          flex-wrap: wrap;

          video {
            max-width: 100%;
            height: auto;
          }
        }
      }
    }
  }
  @media(max-width: 1020px) {
    .generator {
      .input-group {
        margin: 0.4rem auto;
        font-size: 1.5rem;

        input {
          font-size: 1.5rem;
        }
        select {
          font-size: 1.5rem;
        }
      }

      .media-container {
        .photo {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          grid-template-rows: auto;
          .media-wrapper {
            margin: 4px;
            img {
              max-width: 100%;
              height: auto;
            }
          }
        }
        .video {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          grid-template-rows: auto;
          .media-wrapper {
            margin: 4px;
            video {
              max-width: 100%;
              height: auto;
            }
          }
        }
      }
    }
  }

  @media (max-width: 768px) {
    .generator {
      .input-group {
        margin: 0.3rem auto;
        font-size: 1.3rem;

        input {
          font-size: 1.3rem;
        }

        input[type="text"] {
          max-width: 60%;
        }

        select {
          font-size: 1.3rem;
        }
      }

      h2 {
        font-size: 1.5rem;
        margin: 0.3rem;
      }

      button {
        font-size: 1.2rem;
        padding: 0.3rem 0.6rem;
        font-weight: normal;
        border-radius: 3px;
      }

      .media-container {
        .photo {
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-template-rows: auto;
          .media-wrapper {
            margin: 3px;
            img {
              max-width: 100%;
              height: auto;
            }
          }
        }
        .video {
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-template-rows: auto;
          .media-wrapper {
            margin: 3px;
            video {
              max-width: 100%;
              height: auto;
            }
          }
        }
      }
    }
  }
}

</style>