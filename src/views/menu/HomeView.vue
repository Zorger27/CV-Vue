<script lang="ts">
import {Options, Vue} from 'vue-class-component';
import Slider from "@/components/util/Slider.vue";

@Options({components: {Slider},})
export default class home extends Vue {
  // images: { folder: string; file: string }[] = [
  //   { folder: '@/assets/diploma/', file: 'TP24303907D.jpg' },
  //   { folder: '@/assets/english/', file: '02_Conversational_English.jpg' },
  //   { folder: '@/assets/diploma/', file: 'TP31003654D.jpg' },
  // ];
  // sliderImages: string[] = this.images.map(({ folder, file }) => require(`${folder}${file}`));
  data() {
    return {
      sliderImages: [
        require('@/assets/certificates/diploma/TP24303907D.jpg'),
        require('@/assets/certificates/english/02_Conversational_English.jpg'),
        require('@/assets/certificates/diploma/TP31003654D.jpg'),
        require('@/assets/certificates/pm/03_Critical_Thinking.jpg'),
        require('@/assets/certificates/diploma/TP31617068D.jpg'),
        require('@/assets/documents/designer.jpg'),
        require('@/assets/certificates/diploma/TP37723782D.jpg'),
        require('@/assets/certificates/english/07_Intermediate_level_of_English.jpg'),
        require('@/assets/certificates/diploma/TP45473683D.jpg'),
        require('@/assets/certificates/diploma/TP63925579D.jpg'),
        require('@/assets/documents/frontend.jpg'),
        require('@/assets/certificates/diploma/TP77692345D.jpg'),
        require('@/assets/img/seashore.jpg'),
        require('@/assets/certificates/diploma/TP84806711D.jpg'),
        require('@/assets/certificates/english/10_English_for_advanced.jpg'),
        require('@/assets/certificates/diploma/TP88892276D.jpg'),
      ],
    }
  }
};
</script>

<template>
  <h1>{{ $t ('main.name')}}</h1>
  <h2>— {{ $t ('main.job')}} —</h2>
  <line></line>
  <div class="home">
    <div class="photo">
      <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="1000" height="820"
           viewBox="0 0 1000 820">
        <image id="Слой_2" data-name="Слой 2" y="1" width="1000" height="819"
      </svg>
      <!--      <img src="@/assets/img/photo.png" alt="My photo" title="My photo">-->
    </div>
    <div class="icons">
      <a href="tel:+380504411801" title="Call me: +380 50 441-18-01" target="_blank"><img class=logo-image
                                                                                          src="@/assets/ico/phone.svg"
                                                                                          alt="Mobile phone"></a>
      <a href="mailto:zorger27@gmail.com" title="Write me: Zorger27@GMail.com" target="_blank"><img class=logo-image
                                                                                                    src="@/assets/ico/gmail.svg"
                                                                                                    alt="E-mail"></a>
      <a href="skype:anatoliy.zorin?call" title="Call me by Skype: anatoliy.zorin" target="_blank"><img class=logo-image
                                                                                                        src="@/assets/ico/skype.svg"
                                                                                                        alt="Skype"></a>
      <a href="https://www.linkedin.com/in/anatolii-zorin/" title="My LinkedIn profile..." target="_blank"><img
          class=logo-image src="@/assets/ico/linkedin.svg" alt="LinkedIn"></a>
      <a href="https://github.com/Zorger27" title="My Github profile..." target="_blank"><img class=logo-image
                                                                                              src="@/assets/ico/github.svg"
                                                                                              alt="Github"></a>
      <a href="https://profile.codersrank.io/user/zorger27" title="My CodersRank profile..." target="_blank"><img
          class=logo-image src="@/assets/ico/codersrank.svg" alt="CodersRank.io"></a>
      <a href="/assets/file/Curriculum_VITAE.pdf" title="Download my CV in pdf format..." target="_blank"><img
          class=logo-image src="@/assets/ico/download.png" alt="Download file"></a>
      <!--        <a href="https://zorger27.github.io/file/Curriculum_VITAE.pdf" title="Download my CV in pdf format..." target="_blank"><img class=logo-image src="@/assets/ico/download.png" alt="Download file"></a>-->
    </div>
    <div class="info">
      <p>
        {{ $t ('main.info.text01')}}<br>
        {{ $t ('main.info.text02')}}<br>
      </p>
      <p>
        {{ $t ('main.info.text03')}} <b>2016</b>{{ $t ('main.info.text04')}}<br>
        {{ $t ('main.info.text05')}} <b>2020</b>{{ $t ('main.info.text06')}}<br>
        {{ $t ('main.info.text05')}} <b>2021</b>{{ $t ('main.info.text07')}}<br>
        {{ $t ('main.info.text05')}} <b>2022</b>{{ $t ('main.info.text08')}}<br>
      </p>
      <p>
        {{ $t ('main.info.text09')}}<br>
        {{ $t ('main.info.text10')}}<br>
        {{ $t ('main.info.text11')}}
      </p>
    </div>
  </div>
  <div class="slider">
    <Slider :images=sliderImages></Slider>
  </div>
</template>

<style lang="scss" scoped>
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
}
.slider {
  grid-area: slider;
  //justify-self: center;
  //margin-top: -1.5rem;
  //margin-bottom: 0.3rem;
}
.photo {
  grid-area: photo;
  text-align: center;
  //align-self: center;
  svg {
    height: 24rem;
  }
}

.icons {
  grid-area: icons;
  text-align: center;
  align-self: center;
  .logo-image {
    width: 4.7rem;
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
}

@media(max-width: 1020px) {
  .home {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
    grid-template-areas:
        "photo icons"
        "info info"
        "slider slider";
  }
  .photo {
    grid-area: photo;
    //align-self: unset;
  }
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

@media(max-width: 768px) {
  .home {
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    grid-template-areas:
        "photo"
        "icons"
        "info"
        "slider";
  }
  .photo {
    grid-area: photo;
    //align-self: unset;
  }
  .icons {
    grid-area: icons;
    align-self: center;
  }
  .info {
    grid-area: info;
    padding: 0 0.3rem;
    font-size: 1.17rem;
  }
}
</style>