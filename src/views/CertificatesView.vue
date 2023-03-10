<template>
  <div class="certificates">
    <h1>Certificates</h1>
    <line></line>
      <div class="prj back"><router-link class="block" to="/certificates/backend">
        <b>Backend Diplomas & Certificates:</b><br>
        <i>1) Java Developer<br>
        2) PHP Developer<br>
        3) Python Developer<br>
        4) Ruby Developer</i>
      </router-link></div>
      <div class="prj front"><router-link class="block" to="/certificates/frontend">
        <b>Frontend Diplomas & Certificates:</b><br>
        <i>1) HTML Coder<br>
        2) JavaScript Developer<br>
        3) Angular Developer<br>
        4) React Developer<br>
        5) Frontend Developer</i>
      </router-link></div>
      <div class="prj"><b><router-link class="block" to="/certificates/database">DataBase Developer Certificates</router-link></b></div>
      <div class="prj"><b><router-link class="block" to="/certificates/designer">UX/UI Designer Certificates</router-link></b></div>
      <div class="prj"><b><router-link class="block" to="/certificates/pm">Project Management Certificates</router-link></b></div>
      <div class="prj"><b><router-link class="block" to="/certificates/other">Other Certificates</router-link></b></div>
      <div class="prj eng"><b><router-link class="block" to="/certificates/english">English language Certificates</router-link></b></div>
  </div>
</template>

<script lang="ts">
import {Vue} from "vue-class-component";
export default class certificates extends Vue {}

</script>

<style lang="scss" scoped>
.certificates {
  flex: 1 0 auto;
   .prj {
      display: flex;
      justify-content: center;
      font-size: 1.5rem;
      margin-bottom: 1rem;
      b {
        color: darkred;
      }
    }
  .prj:hover {
    .block {
      background: lightblue;
      box-shadow: 3px 3px 4px 0 lightgrey;
      border-color: lightskyblue;
    }
      b {
        color: red;
        text-decoration: none;
      }
    }

  .front, .back {
      b {
        text-decoration: underline;
      }
    }
  .eng {
    b {
      color: darkgreen;
    }
    b:hover{
      color: green;
    }
  }
  .block {
      font-size: 1.2rem;
  }

}
</style>