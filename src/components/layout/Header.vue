<script lang="ts">
import {Options, Vue} from "vue-class-component";
@Options({components: {},})

export default class Header extends Vue {
  logo() {
    this.$router.push("about");
  }
}
</script>

<template>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
  <header>
    <div class="header-logo">
      <img src="@/assets/img/header-logo.svg" alt="logo" @click="logo" title="Go to About page">
    </div>
    <div class="menu">
      <router-link to="/">Main</router-link>
      <router-link to="/projects">Projects</router-link>
      <router-link to="/education">Education</router-link>
      <router-link to="/experience">Experience</router-link>
      <router-link to="/skills">Skills</router-link>
        <div class="dropdown">
<!--          <router-link to="/certificates" class="dropbtn" onclick=preventDefault()>Certificates<span class="fa fa-angle-down"></span></router-link>-->
<!--          <router-link to="/certificates" class="dropbtn" onclick="return false">Certificates<span class="fa fa-angle-down"></span></router-link>-->
          <router-link to="/certificates" class="dropbtn">Certificates<span class="fa fa-angle-down"></span></router-link>
          <div class="dropdown-content">
            <router-link to="/certificates/backend">Backend</router-link>
            <router-link to="/certificates/frontend">Frontend</router-link>
            <router-link to="/certificates/database">Database</router-link>
            <router-link to="/certificates/designer">Designer</router-link>
            <router-link to="/certificates/pm">PM</router-link>
            <router-link to="/certificates/english">English</router-link>
            <router-link to="/certificates/other">Other</router-link>
          </div>
        </div>
      <router-link to="/about">About</router-link>
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
  background: linear-gradient(to bottom, rgba(204, 204, 204, 0.5), rgba(107, 106, 106, 0.9));
  //background-color: hsl(0, 0%, 100%);
  //background-image:
  //    radial-gradient(at 40% 20%, hsl(29, 41%, 86%) 0px, transparent 50%),
  //    radial-gradient(at 80% 0%, hsl(189, 61%, 79%) 0px, transparent 50%),
  //    radial-gradient(at 0% 50%, hsl(355, 35%, 93%) 0px, transparent 50%),
  //    radial-gradient(at 76% 52%, hsl(341, 77%, 91%) 0px, transparent 50%),
  //    radial-gradient(at 0% 100%, hsl(22, 68%, 91%) 0px, transparent 50%),
  //    radial-gradient(at 79% 100%, hsl(244, 50%, 95%) 0px, transparent 50%),
  //    radial-gradient(at 0% 0%, hsl(344, 67%, 88%) 0px, transparent 50%);
}

.header-logo {
  margin: 10px;
  display: flex;
  img {
    max-width: 100%;
    height: 4rem;
    max-height:100%;
    cursor: pointer;
  }
  img:hover {
    box-shadow: 3px 3px 4px 0 purple;
  }
}

.menu {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  align-items: center;
  margin: 10px;

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
    @media(max-width: 768px) {
      font-size: 1rem;
    }
  }

  a:hover {
    background-color: rgba(236, 236, 235, 0.2);
    border: 1px solid rgba(112, 111, 111, 0.9);
    box-shadow: 3px 3px 4px 0 lightgrey;
    color: darkcyan;
  }

  a:focus {
    background-color: rgba(236, 236, 235, 0.2);
    border: 1px solid rgba(112, 111, 111, 0.9);
    box-shadow: 3px 3px 4px 0 lightgrey;
    color: darkred;
  }

  .fa {
    margin-left: 5px;
    color: inherit;
  }

  .dropdown {
    position: relative;
    display: inline-block;

    .dropdown-content {
      position: absolute;
      visibility: hidden;
      opacity: 0;
      transition: 0.6s opacity, 0.6s visibility;
      margin-top: 0.3rem;
      text-align: left;
      background-color: #f1f1f1;
      border-radius: 5px;
      width: max-content;
      overflow: auto;
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

  .dropdown:hover .dropbtn {
    color: red;
  }
  .dropdown:hover > .dropdown-content {
    visibility: visible;
    opacity: 1;
  }
  //.dropdown:active > .dropdown-content {
  //  visibility: hidden;
  //  opacity: 0;
  //}
  //.dropdown:hover > .dropdown-content::after {
  //  visibility: hidden;
  //  opacity: 0;
  //}
}
</style>
