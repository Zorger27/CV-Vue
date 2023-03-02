<template>
  <div class="certificates">
    <h1>Certificates</h1>
    <line></line>
<!--    <h4>Сделать карусель дипломов</h4>-->
<!--    <line></line>-->
    <ol>
      <li><b><router-link to="/certificates/backend">Backend Diplomas & Certificates</router-link></b>
        <ol>
<!--          <li class="diplom"><p><b><a class="attention" href="https://testprovider.com/ru/search-certificate/tp31617068d" title="Diploma..." target="_blank">Java Developer</a></b></p></li>-->
          <li class="diplom"><p><b><router-link to="/certificates/backend">Java Developer</router-link></b></p></li>
          <li class="diplom"><p><b><router-link to="/certificates/backend">PHP Developer</router-link></b></p></li>
          <li class="diplom"><p><b><router-link to="/certificates/backend">Python Developer</router-link></b></p></li>
          <li class="diplom"><p><b><router-link to="/certificates/backend">Ruby Developer</router-link></b></p></li>
        </ol>
      </li>
      <li><b><router-link to="/certificates/frontend">Frontend Diplomas & Certificates</router-link></b>
        <ol>
          <li class="diplom"><p><b><router-link to="/certificates/frontend">HTML Coder</router-link></b></p></li>
          <li class="diplom"><p><b><router-link to="/certificates/frontend">JavaScript Developer</router-link></b></p></li>
          <li class="diplom"><p><b><router-link to="/certificates/frontend">Angular Developer</router-link></b></p></li>
          <li class="diplom"><p><b><router-link to="/certificates/frontend">React Developer</router-link></b></p></li>
          <li class="diplom"><p><b><router-link to="/certificates/frontend">Frontend Developer</router-link></b></p></li>
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
  li {
    text-align: left;
    color: black;
    font-weight: bold;
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
    color: black;
    font-weight: bold;
    p {
      a {color: #a20909;}
      a:hover {
        color: red;
        text-transform: uppercase;
        text-decoration: none;
      }
    }
  }
}
</style>