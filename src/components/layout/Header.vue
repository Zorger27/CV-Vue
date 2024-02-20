<script lang="ts">
import {Options, Vue} from "vue-class-component";
import languageSwitcher from "@/components/util/LanguageSwitcher.vue";
import Header3DLogo2 from "@/components/other/Header3DLogo2.vue";

@Options({
  data () {
    return {
      showMenu: false,
      showDropdownContent: false,
      showExtraContent: false,
      // getExtraImage: require('@/assets/img/login4.svg'),
      // getCertifitatesImage: require('@/assets/img/certifitates.svg')
      getHeader2Image: require('@/assets/img/menu2/header-logo2.svg'),
      getExtraImage: require('@/assets/img/menu2/extra2.svg'),
      getCertifitatesImage: require('@/assets/img/menu2/certifitates2.svg')
    }
  },
  methods: {
    hideMenu() {
      this.showMenu = false;
    },
    clickOutsideHandler(event: MouseEvent) {
      if (this.showMenu && !(event.target as HTMLElement).closest(".burger-menu")) {
        this.showMenu = false;
      } else if (this.showDropdownContent && !(event.target as HTMLElement).closest(".dropdown")) {
        this.showDropdownContent = false;
      } else if (this.showExtraContent && !(event.target as HTMLElement).closest(".dropdown")) {
        this.showExtraContent = false;
      }
    },
    search() {
      this.$router.push('/certificates');
    },
    extra() {
      this.$router.push('/extra');
    },
    cube() {
      this.$router.push('/extra/graphics/cube3d');
    },
  },
  mounted() {
    document.addEventListener("click", this.clickOutsideHandler);
  },
  beforeUnmount() {
    document.removeEventListener("click", this.clickOutsideHandler);
  },
  components: {languageSwitcher, Header3DLogo2},
})

export default class Header extends Vue {}
</script>

<template>
  <header>
    <div class="header-logo">
      <div class="burger-menu" @click="showMenu = !showMenu">
        <i :class="['fa', showMenu ? 'fa-times' : 'fa-bars', 'burger-menu-icon']"></i>
      </div>
      <div class="logo" @click="cube">
<!--        <Header3DLogo2 class="img"></Header3DLogo2>-->
        <img :src="getHeader2Image" alt="Header Image">
      </div>
      <div class="login" @click="extra">
        <img :src="getExtraImage" alt="Enter to Extra Page" title="Enter to Extra Page">
<!--        <img :src="extraImage" alt="Enter to Extra Page">-->
      </div>
      <div class="search" @click="search">
        <img :src="getCertifitatesImage" alt="Search certificates..." title="Search certificates...">
<!--        <img :src="certifitatesImage" alt="Search certificates...">-->
      </div>
      <language-switcher class="language"></language-switcher>
    </div>
    <div class="menu" :class="{ 'is-active': showMenu }">
      <router-link to="/" @click="hideMenu">{{ $t('header.main') }}</router-link>
      <router-link to="/projects" @click="hideMenu">{{ $t('header.projects') }}</router-link>
      <div class="dropdown" @click="showExtraContent = !showExtraContent">
      <!--      <div v-if="loginStore.state.isAuthenticated" class="dropdown" @click="showExtraContent = !showExtraContent">-->
        <div class="dropbtn">{{ $t('header.extra') }}
          <span :class="['fa', showExtraContent ? 'fa-caret-up' : 'fa-caret-down']"></span>
        </div>
        <router-link to="/extra" class="dropbtnMob">{{ $t('header.extra') }}</router-link>
        <div class="dropdown-content" v-show="showExtraContent">
          <router-link to="/extra/calculator" @click="hideMenu">{{ $t('extra.calculator.title') }}</router-link>
          <router-link to="/extra/todo" @click="hideMenu">{{ $t('extra.todo.title') }}</router-link>
          <router-link to="/extra/notes" @click="hideMenu">{{ $t('extra.notes.title') }}</router-link>
          <router-link to="/extra/weather" @click="hideMenu">{{ $t('extra.weather.title') }}</router-link>
          <router-link to="/extra/rates" @click="hideMenu">{{ $t('extra.exchange.title') }}</router-link>
          <router-link to="/extra/cryptocur" @click="hideMenu">{{ $t('extra.cryptocur.title') }}</router-link>
          <router-link to="/extra/tasks" @click="hideMenu">{{ $t('extra.tasks.title') }}</router-link>
          <router-link to="/extra/graphics" @click="hideMenu">{{ $t('extra.graphics.title') }}</router-link>
          <router-link to="/extra/games" @click="hideMenu">{{ $t('extra.game.title') }}</router-link>
          <router-link to="/extra/ai" @click="hideMenu">{{ $t('extra.ai.title') }}</router-link>
        </div>
      </div>
      <router-link to="/education" @click="hideMenu">{{ $t('header.education') }}</router-link>
      <router-link to="/experience" @click="hideMenu">{{ $t('header.experience') }}</router-link>
      <router-link to="/skills" @click="hideMenu">{{ $t('header.skills') }}</router-link>
      <div class="dropdown" @click="showDropdownContent = !showDropdownContent">
        <!--          <a class="dropbtn">Certificates<span class="fa fa-angle-down"></span></a>-->
        <div class="dropbtn">{{ $t('header.certificates.cert') }}
          <span :class="['fa', showDropdownContent ? 'fa-caret-up' : 'fa-caret-down']"></span>
        </div>
        <router-link to="/certificates" class="dropbtnMob">{{ $t('header.certificates.cert') }}</router-link>
        <div class="dropdown-content" v-show="showDropdownContent">
          <router-link to="/certificates/backend" @click="hideMenu">{{ $t('header.certificates.backend') }}</router-link>
          <router-link to="/certificates/frontend" @click="hideMenu">{{ $t('header.certificates.frontend') }}</router-link>
          <router-link to="/certificates/database" @click="hideMenu">{{ $t('header.certificates.database') }}</router-link>
          <router-link to="/certificates/designer" @click="hideMenu">{{ $t('header.certificates.designer') }}</router-link>
          <router-link to="/certificates/pm" @click="hideMenu">{{ $t('header.certificates.pm') }}</router-link>
          <router-link to="/certificates/english" @click="hideMenu">{{ $t('header.certificates.english') }}</router-link>
          <router-link to="/certificates/other" @click="hideMenu">{{ $t('header.certificates.other') }}</router-link>
        </div>
      </div>
      <router-link to="/about" @click="hideMenu">{{ $t('header.about') }}</router-link>
    </div>
  </header>
</template>

<style lang="scss" scoped>
header {
  height: auto;
  padding: 0;
  display: flex;
  position: relative;
  justify-content: space-between;
  background-image: radial-gradient(at 0% 100%, hsla(189, 100%, 56%, 1) 0px, transparent 50%),
  radial-gradient(at 0% 0%, hsla(242, 100%, 70%, 1) 0px, transparent 50%),
  radial-gradient(at 80% 0%, hsla(28, 100%, 74%, 1) 0px, transparent 50%),
  radial-gradient(at 79% 100%, hsla(343, 100%, 76%, 1) 0px, transparent 50%),
  radial-gradient(at 50% 50%, hsla(355, 100%, 93%, 1) 0px, transparent 50%);

  .burger-menu {
    grid-area: burger-menu;
    display: none;
  }

  .dropbtn {
    display: flex;
    @media (max-width: 768px) {
      display: none;
    }
  }

  .dropbtnMob {
    display: none;
    @media (max-width: 768px) {
      display: flex;
    }
  }
  .header-logo {
    margin: 0.3rem;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: auto;
    grid-row-gap: 0;
    grid-auto-flow: column;
    grid-template-areas: "logo login search language";

    .logo {
      grid-area: logo;
      align-self: center;
      justify-self: center;
      margin-top: 0.3rem;
      max-width: 100%;
      max-height: 100%;
      cursor: pointer;
      img {
        width: 3.1rem;
        height: 3.1rem;
        //border: 1px black solid;
        cursor: pointer;
      }
      .img {
        width: 4rem;
        height: 4rem;
        //border: 1px black solid;
        cursor: pointer;
      }
    }

    .login {
      grid-area: login;
      align-self: center;
      justify-self: center;
      margin-top: 0.3rem;
      max-width: 100%;
      //width: 3.1rem;
      max-height: 100%;
      cursor: pointer;
      img {
        width: 3.1rem;
        height: 3.1rem;
        //border: 1px black solid;
        cursor: pointer;
      }
    }

    .search {
      grid-area: search;
      align-self: center;
      justify-self: center;
      margin-top: 0.3rem;
      max-width: 100%;
      //width: 2rem;
      max-height: 100%;
      cursor: pointer;
      img {
        width: 3.1rem;
        height: 3.1rem;
        //border: 1px black solid;
        cursor: pointer;
      }
    }

    .language {
      grid-area: language;
      margin-left: 0.5rem;
      align-self: center;
      justify-self: left;
      padding: 0.5rem;
      color: darkblue;
      border: 1px solid transparent;
      font-weight: bold;
      font-size: medium;
      outline: 0 !important;
      appearance: none;
      cursor: pointer;
    }

    .language:hover {
      color: red;
      cursor: pointer;
    }

    @media (max-width: 768px) {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr 2fr;
      grid-template-rows: auto;
      grid-template-areas: "burger-menu language search login logo";
      grid-column-gap: 0.5rem;
      grid-row-gap: 0;
      grid-auto-flow: column;
      padding-right: 0;
      margin-right: 0.5rem;

      .logo {
        justify-self: right;
      }

      .burger-menu {
        display: grid;
        grid-area: burger-menu;
        background-color: inherit;
        align-self: center;
        justify-self: left;
        padding: 0.1rem 0.5rem 0.2rem 0.5rem;
        cursor: pointer;

        .burger-menu-icon {
          color: darkblue;
          background-color: inherit;
          text-shadow: 2px 2px 4px white;
          font-size: 2.5rem;
        }
      }
      .burger-menu:hover {
        background-color: inherit;

        .burger-menu-icon {
          color: red;
        }
      }
    }

    .language {
      align-self: center;
      justify-self: center;
      border: 1px solid transparent;
      border-radius: 5px;
      font-weight: bold;
      font-size: medium;
      outline: 0 !important;
      appearance: none;
    }

    .login, .login:hover {
      align-self: center;
      justify-self: center;
      padding: 0;

      a, a:hover, a:focus {
        border: none;
        box-shadow: none;
        text-decoration: none;
      }
    }
  }
  .menu {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-end;
    align-items: center;
    margin: 10px;
    @media (max-width: 768px) {
      display: none;
      position: absolute;
      flex-direction: column;
      align-items: start;
      width: max-content;
      top: 90%;
      left: 0;
      //right: 0;
      margin-top: 0.5rem;
      padding: 0.6rem 1rem;
      background-color: #f1f1f1;
      box-shadow: 3px 3px 4px 0 rgba(0, 0, 0, 0.2);
      border: 1px solid rgba(59, 58, 58, 0.9);
      border-radius: 5px;
      text-decoration: none;
      &.is-active {
        display: flex;
        text-decoration: none;
        z-index: 1;

        a {
          border: none;
        }

        a::after {
          /* Удаляем подчёркивание и другие стили для ссылок */
          content: none;
          background-color: transparent;
          border-radius: 0;
          transform: scaleX(1);
        }

        a:hover {
          border: none;
          text-decoration: underline;
          box-shadow: none;
        }

        a:focus {
          box-shadow: none;
          border: none;
          text-decoration: none;
        }
      }
    }

    .dropbtn, a {
      border: 2px solid transparent;
      margin-right: 10px;
      font-size: 1.5rem;
      font-weight: bold;
      position: relative;
      text-decoration: none;
      padding: 5px;
      color: darkblue;
      cursor: pointer;
      @media(max-width: 1020px) {
        font-size: 1.1rem;
      }
    }

    .dropbtn::after, a::after {
      content: "";
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      height: 2px; /* Высота подчёркивания */
      background-color: rgba(112, 111, 111, 0.9);
      border-radius: 5px; /* Закругленные края подчёркивания */
      transform: scaleX(0); /* Начнём с нулевой ширины */
      transform-origin: center bottom;
      transition: transform 0.3s ease; /* Плавное появление при наведении */
    }

    .dropbtn:hover::after, a:hover::after {
      transform: scaleX(1); /* Увеличим ширину при наведении */
    }

    .dropbtn:hover, a:hover {
      color: darkcyan;
    }

    .dropbtn:focus, a:focus {
      color: darkred;
    }

    .fa {
      margin-left: 0.3rem;
      margin-top: 0.2rem;
      font-weight: bold;
      text-shadow: 2px 2px 4px white;
      color: red;
    }

    .dropdown {
      position: relative;
      display: inline-block;

      .dropdown-content {
        position: absolute;
        margin-top: 1.2rem;
        text-align: left;
        background-color: #f1f1f1;
        border: 1px solid rgba(59, 58, 58, 0.9);
        border-radius: 5px;
        width: max-content;
        box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
        z-index: 1;
        @media(max-width: 1020px) {
          margin-top: 1.45rem;
        }

        a {
          color: darkblue;
          padding: 0.6rem 1.2rem;
          text-decoration: none;
          border: none;
          display: block;
        }

        a::after {
          /* Удаляем подчёркивание и другие стили для ссылок */
          content: none;
          background-color: transparent;
          border-radius: 0;
          transform: scaleX(1);
        }

        a:hover {
          background-color: rgba(236, 236, 235, 0.2);
          box-shadow: none;
          color: darkcyan;
          border: none;
          text-decoration: underline;
        }

        a:focus {
          background-color: rgba(236, 236, 235, 0.2);
          box-shadow: none;
          color: darkred;
          border: none;
          text-decoration: none;
        }
      }
    }
  }
}
</style>
