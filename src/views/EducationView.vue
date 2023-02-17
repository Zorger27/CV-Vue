<template>
  <div class="education">
    <h1>Education</h1>
    <line></line>
      <p>
        09.1994 - 01.1999<br>
        <b>Kyiv national university of trade and economics (KNUTE)</b><br>
        <a href="https://zorger27.github.io/img/knute.jpg" title="Certificate..." target="_blank">Accounting and Related Services</a><br>
<!--        <a :href="`~@/assets/doc/knute.jpg`" title="Certificate..." target="_blank">Accounting and Related Services</a><br>-->
      </p>
      <p>
        04.2017 - 11.2017<br>
        <b>PROG.kiev.ua</b><br>
        <a href="https://zorger27.github.io/img/designer.jpg" title="Certificate..." target="_blank">Web-Designer (UI/UX Designer)</a><br>
        <a href="https://zorger27.github.io/img/frontend.jpg" title="Certificate..." target="_blank">Frontend Developer</a><br>
      </p>
      <p>
        11.2020 - present<br>
        <b>ITVDN - IT Video Developers Network</b><br>
        <a href="https://testprovider.com/ru/search-certificate/tp31617068d" title="Diploma..." target="_blank">Java Developer</a><br>
        <a href="https://testprovider.com/ru/search-certificate/tp24303907d" title="Diploma..." target="_blank">HTML Coder</a><br>
        <a href="https://testprovider.com/ru/search-certificate/tp84806711d" title="Diploma..." target="_blank">JavaScript Developer</a><br>
        <a href="https://testprovider.com/ru/search-certificate/tp31003654d" title="Diploma..." target="_blank">Angular Developer</a><br>
        <a href="https://testprovider.com/ru/search-certificate/tp37723782d" title="Diploma..." target="_blank">React Developer</a><br>
        <a href="https://testprovider.com/ru/search-certificate/tp77692345d" title="Diploma..." target="_blank">Frontend Developer</a><br>
        <a href="https://testprovider.com/ru/search-certificate/tp88892276d" title="Diploma..." target="_blank">PHP Developer</a><br>
        <a href="https://testprovider.com/ru/search-certificate/tp45473683d" title="Diploma..." target="_blank">Python Developer</a><br>
        <a href="https://testprovider.com/ru/search-certificate/tp63925579d" title="Diploma..." target="_blank">Ruby Developer</a><br>
      </p>
      <p>
        11.2021 - present<br>
        <b>EnglishDom - English language</b><br>
        <!--            <a href="https://www.englishdom.com/cn/a7aad5cd" title="Certificate..." target="_blank">Elementary</a><br>-->
        <a href="https://www.englishdom.com/cn/c100d53f" title="Certificate..." target="_blank">Pre-Intermediate</a><br>
        <a href="https://www.englishdom.com/cn/9d6c54e8" title="Certificate..." target="_blank">Intermediate</a><br>
        <a href="https://www.englishdom.com/cn/fbc6541a" title="Certificate..." target="_blank">Upper-Intermediate</a><br>
      </p>
  </div>
  <div class="languages">
    <h1>Languages</h1>
    <line></line>
    <p>English – <a href="https://www.englishdom.com/cn/fbc6541a" title="Certificate..." target="_blank">Upper-Intermediate</a></p>
    <p>Spanish – <a href="https://zorger27.github.io/img/spanish.jpg" title="Certificate..." target="_blank">Upper-Intermediate</a></p>
<!--    <p>Spanish – <a href="src/assets/doc/spanish.jpg" title="Certificate..." target="_blank">Upper-Intermediate</a></p>-->
  </div>

</template>

<script>
import {Vue} from "vue-class-component";
export default class education extends Vue {}
</script>

<style lang="scss" scoped>
p {
  padding: 0 0 0.3rem 1.5rem;
}
.education {
  flex: 1 0 auto;
  text-align: left;
}
.languages {
  margin-top: -1rem;
  flex: 1 0 auto;
  text-align: left;
  //margin: -2rem 0;
  p {
    margin: 0.5rem 0.3rem 0 0;
  }
}
</style>