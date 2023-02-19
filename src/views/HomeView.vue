<template>
  <h1>Anatolii Zorin</h1>
  <h2>— Web Developer —</h2>
  <line></line>
  <div class="home">
    <div class="photo">
      <img src="@/assets/img/photo.svg" alt="My photo" title="My photo">
    </div>
    <div class="icons">
      <p>
        <a href="tel:+380504411801" title="Call me: +380 50 441-18-01" target="_blank"><img class=logo-image src="@/assets/ico/phone.svg" alt="Mobile phone"></a>
        <a href="mailto:zorger27@gmail.com" title="Write me: Zorger27@GMail.com" target="_blank"><img class=logo-image src="@/assets/ico/gmail.svg" alt="E-mail"></a>
        <a href="skype:anatoliy.zorin?call" title="Call me by Skype: anatoliy.zorin" target="_blank"><img class=logo-image src="@/assets/ico/skype.svg" alt="Skype"></a>
        <a href="https://www.linkedin.com/in/anatolii-zorin/" title="My LinkedIn profile..." target="_blank"><img class=logo-image src="@/assets/ico/linkedin.svg" alt="LinkedIn"></a>
        <a href="https://github.com/Zorger27" title="My Github profile..." target="_blank"><img class=logo-image src="@/assets/ico/github.svg" alt="Github"></a>
        <a href="https://profile.codersrank.io/user/zorger27" title="My CodersRank profile..." target="_blank"><img class=logo-image src="@/assets/ico/codersrank.svg" alt="CodersRank.io"></a>
        <a href="/assets/file/Curriculum_VITAE.pdf" title="Download my CV in pdf format..." target="_blank"><img class=logo-image src="@/assets/ico/download.png" alt="Download file"></a>
      </p>
    </div>
    <div class="info">
      <p>
        I've always enjoyed creating something new.<br>
        Programming helps to realise this desire.<br>
      </p>
      <p>
        Since <b>2016</b>, I have combined the administrative work as CEO with the work of Digital Marketer (Google Ads, Analytics, SEM), Web Designer (Photoshop, Illustrator, Figma) and Frontend Developer (Javascript / HTML / CSS).<br>
        In <b>2020</b>, I took up intensive study of Backend (Java, Scala, Kotlin).<br>
        In <b>2021</b>, I restored and updated my knowledge of Frontend (Vue, Angular, React).<br>
        In <b>2022</b>, I continued my IT education (PHP, Python, Ruby).<br>
      </p>
      <p>
        I'm easy learning.<br>
        I have good analytical skills.<br>
        I'm comfortable working in a team or solo.
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import {Vue} from 'vue-class-component';
export default class home extends Vue {};
</script>

<style lang="scss" scoped>
h1 {
  color: purple;
  margin-bottom: 0;
}
.home {
  flex: 1 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 4fr;
  grid-template-rows: auto;
  grid-gap: 1rem;
  grid-auto-flow: column;
  grid-template-areas: "photo icons info";

  .photo {
    margin-top: -2rem;
    grid-area: photo;
    text-align: center;
    height: 22rem;
  }

  .icons {
    grid-area: icons;
    text-align: center;

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
  }
}
@media(max-width:1020px) {
  .home {
    grid-template-columns: 1fr 1fr 2fr;
    grid-template-areas:
        "photo icons"
        "info info";
  }
  .photo {
    img {
      height: 22rem;
    }
  }
}

@media(max-width:768px) {
  .home {
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-areas:
        "photo"
        "icons"
        "info";
  }
  .photo {
    img {
    height: 22rem;
    }
  }
}
</style>
