<script lang="ts">
import {Options, Vue} from 'vue-class-component';
import Slider from "@/components/util/Slider.vue";
import {openGraphMixin} from "@/assets/ogimage/openGraphMixin";

@Options({
  mixins: [openGraphMixin],
  data() {
    return {
      sliderImages: [
        require('@/assets/certificates/diploma/TP24303907D.webp'),
        require('@/assets/certificates/english/09_IT_English_TestProvider.webp'),
        require('@/assets/certificates/diploma/TP31003654D.webp'),
        require('@/assets/certificates/pm/03_Critical_Thinking.webp'),
        require('@/assets/certificates/diploma/TP31617068D.webp'),
        require('@/assets/documents/designer.webp'),
        require('@/assets/certificates/diploma/TP37723782D.webp'),
        require('@/assets/certificates/english/14_Intermediate_level_of_English.webp'),
        require('@/assets/certificates/diploma/TP45473683D.webp'),
        require('@/assets/certificates/diploma/TP63925579D.webp'),
        require('@/assets/documents/frontend.webp'),
        require('@/assets/certificates/diploma/TP77692345D.webp'),
        require('@/assets/certificates/diploma/TP84806711D.webp'),
        require('@/assets/certificates/english/19_English_for_advanced.webp'),
        require('@/assets/certificates/diploma/TP88892276D.webp'),
      ],
      getPhotoImage: require('@/assets/img/photo.svg'),
      currentText: "main.job1",
      textIndex: 0,
      texts: ["main.job1", "main.job2", "main.job3", "main.job4", "main.job5"],
      fadeIn: true
    }
  },
  mounted() {
    const mainTitle = 'My Portfolio';
    const title = 'My Portfolio home page';
    const metaDescription = 'Anatolii Zorin\'s Portfolio with all diplomas, certificates, interesting projects and a detailed description of the experience gained at previous jobs.';
    const description = 'Basic information with contact details';
    const imageUrl = 'https://zorin.expert/assets/ogimage/menu/OG_Image_Home.jpg';
    const url = 'https://Zorin.Expert';

    this.setOpenGraphTags(metaDescription, title, description, imageUrl, url);
    this.setPageTitle(mainTitle);

    this.startTextRotation();
  },
  methods: {
    startTextRotation() {
      setInterval(() => {
        this.textIndex = (this.textIndex + 1) % this.texts.length;
        this.fadeIn = false; // Устанавливаем флаг fade-in в false для плавного исчезания
        setTimeout(() => {
          this.currentText = this.texts[this.textIndex];
          this.fadeIn = true; // Устанавливаем флаг fade-in в true для плавного появления
        }, 2000); // Задержка перед сменой текста
      }, 4000);
    }
  },
  components: {Slider},
})
export default class Home extends Vue {};
</script>

<template>
  <div class="container">
    <h1>{{ $t('main.name') }}</h1>
    <!--    <h2>— {{ $t('main.job') }} —</h2>-->
    <transition name="slide-fade" mode="out-in">
      <h2 :key="currentText" class="slide-fade" :class="{ 'fade-in': fadeIn }">
        {{ $t(currentText) }}
      </h2>
    </transition>
    <line></line>
    <div class="home">
      <div class="photo">
        <img :src="getPhotoImage" class="photo-image" alt="My Photo Image">
        <!--      <img src="@/assets/img/photo.png" alt="My photo" title="My photo">-->
      </div>
      <div class="icons">
        <!--        <a href="tel:+380504411801" title="Call me: +380 50 441-18-01" target="_blank"><img class=logo-image-->
        <!--                                                                                            src="@/assets/ico/phone.svg"-->
        <!--                                                                                            alt="WhatsApp"></a>-->
        <a href="https://wa.me/380504411801" title="WhatsApp chat with me" target="_blank"><img class="logo-image"
                                                                                                src="@/assets/ico/phone.svg"
                                                                                                alt="WhatsApp"></a>
        <a href="mailto:zorger27@gmail.com" title="Write me: Zorger27@GMail.com" target="_blank"><img class=logo-image
                                                                                                      src="@/assets/ico/mail.svg"
                                                                                                      alt="E-mail"></a>
        <a href="https://www.linkedin.com/in/anatolii-zorin/" title="My LinkedIn profile..." target="_blank"><img
          class=logo-image src="@/assets/ico/linkedin.svg" alt="LinkedIn"></a>
        <a href="https://github.com/Zorger27" title="My Github profile..." target="_blank"><img class=logo-image
                                                                                                src="@/assets/ico/github.svg"
                                                                                                alt="Github"></a>
        <a href="https://profile.codersrank.io/user/zorger27" title="My CodersRank profile..." target="_blank"><img
          class=logo-image src="@/assets/ico/codersrank.svg" alt="CodersRank.io"></a>
        <a href="https://www.pinterest.com/zorger27" title="My Pinterest profile..." target="_blank"><img class="logo-image"
                                                                                            src="@/assets/ico/pinterest.svg"
                                                                                            alt="Pinterest"></a>
        <!--        <a href="skype:anatoliy.zorin?chat" title="Skype chat with me" target="_blank"><img class="logo-image"-->
<!--                                                                                            src="@/assets/ico/skype.svg"-->
<!--                                                                                            alt="Skype"></a>-->
        <a href="https://www.facebook.com/anatoliy.zorin" title="My Facebook profile..." target="_blank"><img
          class=logo-image src="@/assets/ico/facebook.svg" alt="Facebook"></a>
        <a href="https://www.youtube.com/c/AnatoliiZorin" title="My YouTube channel..." target="_blank"><img
          class=logo-image src="@/assets/ico/youtube.svg" alt="YouTube"></a>
        <a href="https://x.com/Regroz" title="My X (ex. Twitter) profile..." target="_blank"><img
          class=logo-image src="@/assets/ico/twitter.svg" alt="Twitter"></a>
        <a href="/assets/file/Curriculum_VITAE.pdf" title="Download my CV in pdf format..." target="_blank"><img
          class=logo-image src="@/assets/ico/download.svg" alt="Download file"></a>
      </div>
      <div class="info">
        <p>
          {{ $t('main.info.text01') }}<br>
          {{ $t('main.info.text02') }}<br>
          {{ $t('main.info.text02add') }}<br>
        </p>
        <p>
          {{ $t('main.info.text03') }} <b>2016</b>{{ $t('main.info.text04') }}<br>
          {{ $t('main.info.text05') }} <b>2020</b>{{ $t('main.info.text06') }}<br>
          {{ $t('main.info.text05') }} <b>2021</b>{{ $t('main.info.text07') }}<br>
          {{ $t('main.info.text05') }} <b>2022</b>{{ $t('main.info.text08') }}<br>
          {{ $t('main.info.text05') }} <b>2023</b>{{ $t('main.info.text09') }}<br>
        </p>
        <p>
          {{ $t('main.info.text-end-1') }}<br>
          {{ $t('main.info.text-end-2') }}<br>
          {{ $t('main.info.text-end-3') }}
        </p>
      </div>
    </div>
    <div class="slider">
      <Slider :images=sliderImages></Slider>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  background-image: url("@/assets/background/background02.webp");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  h1 {
    color: purple;
    margin-bottom: 0;
  }

  .home {
    flex: 1 0 auto;
    display: grid;
    grid-template-columns: 2fr 1fr 3fr;
    grid-template-rows: auto;
    grid-column-gap: 1rem;
    grid-row-gap: 0;
    grid-auto-flow: column;
    grid-template-areas:
      "photo icons info"
      "slider slider slider";

    .photo {
      grid-area: photo;
      text-align: center;

      .photo-image {
        width: 100%;
        height: auto;
      }
    }

    .icons {
      grid-area: icons;
      text-align: center;
      align-self: center;

      .logo-image {
        width: 4.7rem;
        height: 4.7rem;
        border: 2px solid transparent;
        border-radius: 5px;
      }

      .logo-image:hover {
        border-color: #9f18bd;
      }
    }

    .info {
      grid-area: info;
      text-align: left;
      font-size: 1.37rem;

      p {
        margin: 1rem auto;
      }
    }
  }

  .slider {
    grid-area: slider;
    background-color: transparent;
    border-color: transparent;
    box-shadow: none;
  }

  .slide-fade-enter-active {
    transition: all 1s;
  }
  .slide-fade-leave-active {
    transition: all 1s;
  }
  .slide-fade-enter,
  .slide-fade-leave-to {
    opacity: 0;
    transform: translateX(60px);
  }
  .slide-fade {
    display: inline-block;
    margin: 0.5rem;
  }
  .fade-in {
    animation: fade-in-animation 1.2s ease-in-out;
    opacity: 1;
  }

  @keyframes fade-in-animation {
    0% {opacity: 0;}
    10% {opacity: 0.1;}
    20% {opacity: 0.2;}
    30% {opacity: 0.3;}
    40% {opacity: 0.4;}
    50% {opacity: 0.5;}
    60% {opacity: 0.6;}
    70% {opacity: 0.7;}
    80% {opacity: 0.8;}
    90% {opacity: 0.9;}
    100% {opacity: 1;}
  }
}

@media(max-width: 1020px) {
  .container {
    .home {
      grid-template-columns: 1fr 1fr;
      grid-template-rows: auto;
      grid-template-areas:
        "photo icons"
        "info info"
        "slider slider";

      .photo {grid-area: photo;}

      .icons {
        grid-area: icons;
        align-self: center;
        padding-right: 1rem;
      }

      .info {
        grid-area: info;
        font-size: 1.27rem;
        padding: 0 0.5rem;
      }
    }
  }
}

@media(max-width: 768px) {
  .container {
    h2 {
      font-size: 1.4rem;
    }
    .slide-fade-enter,
    .slide-fade-leave-to {
      transform: translateX(40px);
    }

    .home {
      grid-template-columns: 1fr;
      grid-template-rows: auto;
      grid-template-areas:
        "photo"
        "icons"
        "info"
        "slider";

      .photo {grid-area: photo;}

      .icons {
        grid-area: icons;
        padding-right: 0;
        align-self: center;

        .logo-image {
          width: 3.7rem;
          height: 3.7rem;
        }
      }

      .info {
        grid-area: info;
        padding: 0 0.3rem;
        font-size: 1.17rem;

        p {
          margin: 0.5rem auto;
        }
      }
    }
  }
}
</style>
