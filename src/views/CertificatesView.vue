<template>
  <div class="certificates">
    <h1>Certificates</h1>
    <line></line>
<!--    <h4>Сделать карусель дипломов</h4>-->
<!--    <line></line>-->
    <ol>
      <li><b><router-link to="/certificates/backend">Backend Diplomas & Certificates</router-link></b>
        <ol>
          <li class="diplom"><p><b><a class="attention" href="https://testprovider.com/ru/search-certificate/tp31617068d" title="Diploma..." target="_blank">Java Developer</a></b> (TP31617068D | 12.04.2021)</p></li>
          <li class="diplom"><p><b><a class="attention" href="https://testprovider.com/ru/search-certificate/tp88892276D" title="Diploma..." target="_blank">PHP Developer</a></b> (TP88892276D | 30.09.2022)</p></li>
          <li class="diplom"><p><b><a class="attention" href="https://testprovider.com/ru/search-certificate/tp45473683D" title="Diploma..." target="_blank">Python Developer</a></b> (TP45473683D | 16.11.2022)</p></li>
          <li class="diplom"><p><b><a class="attention" href="https://testprovider.com/ru/search-certificate/tp63925579D" title="Diploma..." target="_blank">Ruby Developer</a></b> (TP63925579D | 30.11.2022)</p></li>
        </ol>
      </li>
      <li><b><router-link to="/certificates/frontend">Frontend Diplomas & Certificates</router-link></b>
        <ol>
          <li class="diplom"><p><b><a class="attention" href="https://testprovider.com/ru/search-certificate/tp24303907d" title="Diploma..." target="_blank">HTML Coder</a></b> (TP24303907D | 16.06.2021)</p></li>
          <li class="diplom"><p><b><a class="attention" href="https://testprovider.com/ru/search-certificate/tp84806711d" title="Diploma..." target="_blank">JavaScript Developer</a></b> (TP84806711D | 01.07.2021)</p></li>
          <li class="diplom"><p><b><a class="attention" href="https://testprovider.com/ru/search-certificate/tp31003654d" title="Diploma..." target="_blank">Angular Developer</a></b> (TP31003654D | 02.08.2021)</p></li>
          <li class="diplom"><p><b><a class="attention" href="https://testprovider.com/ru/search-certificate/tp37723782d" title="Diploma..." target="_blank">React Developer</a></b> (TP37723782D | 09.08.2021)</p></li>
          <li class="diplom"><p><b><a class="attention" href="https://testprovider.com/ru/search-certificate/tp77692345d" title="Diploma..." target="_blank">Frontend Developer</a></b> (TP77692345D | 12.08.2021)</p></li>
        </ol>
      </li>
      <li><b><router-link to="/certificates/database">DataBase Developer Certificates</router-link></b></li>
      <li><b><router-link to="/certificates/designer">UX/UI Designer Certificates</router-link></b></li>
      <li><b><router-link to="/certificates/pm">Project Management Certificates</router-link></b></li>
      <li><b><router-link to="/certificates/other">Other Certificates</router-link></b></li>
      <li><b><router-link to="/certificates/english">English language Certificates</router-link></b></li>
    </ol>
  </div>
</template>

<script lang="ts">
import {Vue} from "vue-class-component";
export default class certificates extends Vue {}

</script>

<style lang="scss" scoped>
.certificates {
  flex: 1 0 auto;
  font-size: larger;
  li {
    text-align: left;
    list-style-type: upper-roman;
    p{
      margin: 0;
    }
  }
  .attention{
    color: #a20909;
  }
  .attention:hover{
    color: red;
  }
  .diplom{
    list-style-type: decimal;
  }
}
</style>