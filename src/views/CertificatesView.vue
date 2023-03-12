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
      <div class="prj"><router-link class="block" to="/certificates/database"><b>DataBase Developer Certificates</b></router-link></div>
      <div class="prj"><router-link class="block" to="/certificates/designer"><b>UX/UI Designer Certificates</b></router-link></div>
      <div class="prj"><router-link class="block" to="/certificates/pm"><b>Project Management Certificates</b></router-link></div>
      <div class="prj"><router-link class="block" to="/certificates/other"><b>Other Certificates</b></router-link></div>
      <div class="prj eng"><router-link class="block" to="/certificates/english"><b>English language Certificates</b></router-link></div>
  </div>
</template>

<script lang="ts">
import {Vue} from "vue-class-component";
export default class certificates extends Vue {}

</script>

<style lang="scss" scoped>
.certificates {
  flex: 1 0 auto;
  .block {
    font-size: 1.2rem;
  }
  .front, .back {
      b {
        text-decoration: underline;
      }
    }
  .eng {
    b {
      color: green;
    }
  }
  //  b:hover{
  //    color: green;
  //  }
  //}
}
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
</style>