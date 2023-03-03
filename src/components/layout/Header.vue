<script lang="ts">
import {Options, Vue} from "vue-class-component";
@Options({components: {},})

export default class Header extends Vue {
  showMenu = false;
  showDropdownContent = false;

  hideMenu() {
    this.showMenu = false;
  }
  clickOutsideHandler(event: MouseEvent) {
    if (this.showMenu && !(event.target as HTMLElement).closest(".burger-menu"))
    {this.showMenu = false;}
    else if (this.showDropdownContent && !(event.target as HTMLElement).closest(".dropdown"))
    {this.showDropdownContent = false;}
  }
  //   if (this.showDropdownContent && !(event.target as HTMLElement).closest(".dropdown"))
  //   {this.showDropdownContent = false;}
  // }
  mounted() {
    document.addEventListener("click", this.clickOutsideHandler);
  }
  beforeUnmount() {
    document.removeEventListener("click", this.clickOutsideHandler);
  }
  logo() {
    this.$router.push("about");
  }
}
</script>

<template>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
  <header>
    <div class="burger-menu" @click="showMenu = !showMenu">
<!--      <i class="fa fa-bars burger-menu-icon"></i>-->
      <i :class="['fa', showMenu ? 'fa-times' : 'fa-bars', 'burger-menu-icon']"></i>
    </div>
    <div class="title">
      <h2>My CV mobile</h2>
    </div>
    <div class="header-logo">
      <img src="@/assets/img/header-logo.svg" alt="logo" @click="logo" title="Go to About page">
    </div>
    <div class="menu" :class="{ 'is-active': showMenu }">
      <router-link to="/" @click="hideMenu">Main</router-link>
      <router-link to="/projects" @click="hideMenu">Projects</router-link>
      <router-link to="/education" @click="hideMenu">Education</router-link>
      <router-link to="/experience" @click="hideMenu">Experience</router-link>
      <router-link to="/skills" @click="hideMenu">Skills</router-link>
        <div class="dropdown" @click="showDropdownContent = !showDropdownContent">
<!--          <a class="dropbtn">Certificates<span class="fa fa-angle-down"></span></a>-->
          <a class="dropbtn">Certificates<span :class="['fa', showDropdownContent ? 'fa-caret-up' : 'fa-caret-down']"></span></a>
          <router-link to="/certificates" class="dropbtnMob">Certificates</router-link>
          <div class="dropdown-content" v-show="showDropdownContent">
            <router-link to="/certificates/backend" @click="hideMenu">Backend</router-link>
            <router-link to="/certificates/frontend" @click="hideMenu">Frontend</router-link>
            <router-link to="/certificates/database" @click="hideMenu">Database</router-link>
            <router-link to="/certificates/designer" @click="hideMenu">Designer</router-link>
            <router-link to="/certificates/pm" @click="hideMenu">PM</router-link>
            <router-link to="/certificates/english" @click="hideMenu">English</router-link>
            <router-link to="/certificates/other" @click="hideMenu">Other</router-link>
          </div>
        </div>
      <router-link to="/about" @click="hideMenu">About</router-link>
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
  background: linear-gradient(to bottom, rgba(229, 228, 228, 0.5), rgba(59, 58, 58, 0.9));
  .burger-menu {
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
  @media (max-width: 768px) {
    .burger-menu {
      display: block;
      background-color: inherit;
      border: 1px solid transparent;
      border-radius: 5px;
      //box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
      align-self: center;
      padding: 0.5rem 1rem;
      cursor: pointer;
      margin-left: 0.7rem;
      .burger-menu-icon {
        color: darkblue;
        background-color: inherit;
        text-shadow: 2px 2px 4px white;
        font-size: 2.5rem;
      }
    }
    .burger-menu:hover {
      background-color: inherit;
      border: 1px solid rgba(112, 111, 111, 0.9);
      box-shadow: 3px 3px 4px 0 lightgrey;
      .burger-menu-icon {
        color: red;
      }
    }
  }
}

.header-logo {
  margin: 10px;
  display: flex;
  img {
    margin: auto 0.2rem auto 0;
    max-width: 100%;
    height: 4rem;
    max-height:100%;
    cursor: pointer;
  }
  @media(max-width:1200px) {
    img {
      height: 5rem;
    }
  }
  @media(max-width:768px) {
      img {
        height: 4rem;
      }
  }
}
.title {
  display: none;
  @media(max-width:768px) {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-left: 0.5rem;
    color: white;
    text-shadow: 3px 3px 4px darkblue;
    background-color: inherit;
    //padding-right: 2rem;
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
    border-radius: 5px;
    text-decoration: none;
    &.is-active {
      display: flex;
      text-decoration: none;
      z-index: 1;
      a {
        border: none;
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

  a {
    border: 1px solid transparent;
    border-radius: 5px;
    margin-right: 10px;
    font-size: 1.5rem;
    font-weight: bold;
    text-decoration: none;
    padding: 5px;
    color: darkblue;
    @media(max-width: 1020px) {
      font-size: 1.3rem;
    }
  }

  a:hover {
    background-color: rgba(236, 236, 235, 0.2);
    border: 1px solid rgba(112, 111, 111, 0.9);
    box-shadow: 3px 3px 4px 0 lightgrey;
    color: darkcyan;
    cursor: pointer;
  }

  a:focus {
    background-color: rgba(236, 236, 235, 0.2);
    border: 1px solid rgba(112, 111, 111, 0.9);
    box-shadow: 3px 3px 4px 0 lightgrey;
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
      margin-top: 0.3rem;
      text-align: left;
      background-color: #f1f1f1;
      border-radius: 5px;
      width: max-content;
      box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
      z-index: 1;

      a {
        color: darkblue;
        padding: 0.6rem 1.2rem;
        text-decoration: none;
        border: none;
        display: block;
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
</style>
