<script lang="ts">
import {Options, Vue} from "vue-class-component";
import Search from "@/components/util/Search.vue";

@Options({
  components: {Search},
})
export default class Certificates extends Vue {}
</script>

<template>
  <div class="certificates">
    <h1>{{ $t('cert.title-main') }}</h1>
    <line></line>
    <Search></Search>
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
        <!--        <router-link class="block" to="/certificates/frontend" :search="searchValue">-->
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

<style lang="scss" scoped>
.certificates {
  flex: 1 0 auto;
  background: linear-gradient(to bottom, rgb(247, 234, 250), rgb(255, 250, 229)) no-repeat center;

  .search-bar {
    margin: 1rem auto;
    font-size: 1.6rem;

    input {
      border: 1px solid lightskyblue;
      border-radius: 5px;
      font-size: 1.6rem;
      transition: border-color .2s ease-in-out, background-color .2s, box-shadow .2s;
    }

    input:active, :focus {
      outline: 1px solid lightskyblue;
      outline-offset: 0;
      box-shadow: 3px 3px 4px 0 grey;
    }
    .fa-trash-alt {
      font-size: 1.6rem;
      margin-left: 7px;
    }
    .fa-trash-alt:hover {
      color: hotpink;
    }
  }

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
      font-size: 1.5rem;
      margin-bottom: 1rem;
      .block {
        box-shadow: 3px 3px 4px 0 palevioletred;
        background-image: url("@/assets/background/background21.jpg");
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
      }
      b {
        color: darkred;
      }
    }

    .prj:hover {
      .block {
        background: linear-gradient(to bottom, rgb(229, 251, 255), rgb(255, 240, 244)) no-repeat center;
        box-shadow: 3px 3px 4px 0 rgba(0, 0, 0, 0.7);
        border-color: #bbeafa;
      }
      b {
        color: red;
        text-decoration: none;
      }
    }
  }
}

@media (max-width: 768px) {
  .search-bar {
    margin: 0.3rem auto;
    font-size: 1.3rem;

    input[type="text"] {
      border-radius: 3px;
      font-size: 1.3rem;
    }
    .fa-trash-alt {
      font-size: 1.3rem;
    }

  }
  .certificates {
    h1 {
      font-size: 1.7rem;
      //margin: 0.4rem auto;
    }
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