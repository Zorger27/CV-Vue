<template>
  <div class="certificates">
    <h1>{{ $t('cert.title') }}</h1>
    <line></line>
    <div class="container">
      <div class="prj back">
        <router-link class="block" to="/certificates/backend">
          <b>{{ $t('cert.back.backend') }}</b><br>
          <i>{{ $t('cert.back.java') }}<br>
            {{ $t('cert.back.php') }}<br>
            {{ $t('cert.back.python') }}<br>
            {{ $t('cert.back.ruby') }}</i>
        </router-link>
      </div>
      <div class="prj front">
        <router-link class="block" to="/certificates/frontend">
          <b>{{ $t('cert.front.frontend') }}</b><br>
          <i>{{ $t('cert.front.html') }}<br>
            {{ $t('cert.front.javascript') }}<br>
            {{ $t('cert.front.angular') }}<br>
            {{ $t('cert.front.react') }}<br>
            {{ $t('cert.front.frontend2') }}</i>
        </router-link>
      </div>
      <div class="prj database">
        <router-link class="block" to="/certificates/database"><b>{{ $t('cert.database') }}</b></router-link>
      </div>
      <div class="prj designer">
        <router-link class="block" to="/certificates/designer"><b>{{ $t('cert.designer') }}</b></router-link>
      </div>
      <div class="prj pm">
        <router-link class="block" to="/certificates/pm"><b>{{ $t('cert.project') }}</b></router-link>
      </div>
      <div class="prj other">
        <router-link class="block" to="/certificates/other"><b>{{ $t('cert.other') }}</b></router-link>
      </div>
      <div class="prj eng">
        <router-link class="block" to="/certificates/english"><b>{{ $t('cert.english') }}</b></router-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {Vue} from "vue-class-component";

export default class Certificates extends Vue {
}

</script>

<style lang="scss" scoped>
.certificates {
  flex: 1 0 auto;
  background-image: url("@/assets/background/background17.jpg");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  .container {
    display: inline-grid;
    justify-items: center;
    align-items: center;
    grid-template-columns: 1fr 1fr;
    //grid-template-rows: auto;
    grid-template-areas:
      "back front"
      "database designer"
      "pm other"
      "eng eng";
    grid-column-gap: 0.5rem;
    grid-row-gap: 0;
    grid-auto-flow: column;

    .back {grid-area: back;}
    .front {grid-area: front;}
    .database {grid-area: database;}
    .designer {grid-area: designer;}
    .pm {grid-area: pm;}
    .other {grid-area: other;}

    .eng {
      grid-area: eng;
      //b {
      //  color: green;
      //}
    }
    .eng > .block > b {
      color: green;
    }

    .block {font-size: 1.5rem;}

    .front, .back {
      b {
        text-decoration: underline;
      }
    }
    .prj {
      //display: flex;
      //justify-content: center;
      font-size: 1.5rem;
      margin-bottom: 1rem;
      b {
        color: darkred;
      }
    }

    .prj:hover {
      .block {
        background: linear-gradient(to bottom, rgb(229, 251, 255), rgb(255, 240, 244)) no-repeat center;
        box-shadow: 3px 3px 4px 0 lightgrey;
        border-color: lightskyblue;
      }
      b {
        color: red;
        text-decoration: none;
      }
    }
  }
}

@media (max-width: 768px) {
  .certificates {
    .container {
      display: grid;
      justify-items: center;
      grid-template-columns: 1fr;
      //grid-template-rows: auto;
      grid-template-areas:
      "back"
      "front"
      "database"
      "designer"
      "pm"
      "other"
      "eng";
      grid-column-gap: 0.5rem;
      grid-row-gap: 0;
      grid-auto-flow: column;
      //.prj {
      //  display: flex;
      //  justify-content: center;
      //}

      .block {font-size: 1.2rem;}

      .eng {
        b {
          color: green;
        }
      }
    }
  }
}


</style>