<template>
  <div class="certificates">
    <h1>{{ $t('cert.title') }}</h1>
    <line></line>
      <div class="prj back"><router-link class="block" to="/certificates/backend">
        <b>{{ $t('cert.back.backend') }}</b><br>
        <i>{{ $t('cert.back.java') }}<br>
          {{ $t('cert.back.php') }}<br>
          {{ $t('cert.back.python') }}<br>
          {{ $t('cert.back.ruby') }}</i>
      </router-link></div>
      <div class="prj front"><router-link class="block" to="/certificates/frontend">
        <b>{{ $t('cert.front.frontend') }}</b><br>
        <i>{{ $t('cert.front.html') }}<br>
          {{ $t('cert.front.javascript') }}<br>
          {{ $t('cert.front.angular') }}<br>
          {{ $t('cert.front.react') }}<br>
          {{ $t('cert.front.frontend2') }}</i>
      </router-link></div>
      <div class="prj"><router-link class="block" to="/certificates/database"><b>{{ $t('cert.database') }}</b></router-link></div>
      <div class="prj"><router-link class="block" to="/certificates/designer"><b>{{ $t('cert.designer') }}</b></router-link></div>
      <div class="prj"><router-link class="block" to="/certificates/pm"><b>{{ $t('cert.project') }}</b></router-link></div>
      <div class="prj"><router-link class="block" to="/certificates/other"><b>{{ $t('cert.other') }}</b></router-link></div>
      <div class="prj eng"><router-link class="block" to="/certificates/english"><b>{{ $t('cert.english') }}</b></router-link></div>
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