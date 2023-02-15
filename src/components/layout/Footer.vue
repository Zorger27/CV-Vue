<script lang="ts">
import {Options, Vue} from "vue-class-component";

@Options({components: {},})

export default class Footer extends Vue {
  logoFooter() {
    this.$router.push("projects");
  }
}
</script>

<template>
  <footer>
    <img src="@/assets/img/footer-logo.svg" alt="logo" class="footer-logo" @click="logoFooter" title="Go to Projects page">
    <p class="footer-text">Designed By <b><a href="https://zorger27.github.io" title="CV (Landing Page)" target="_blank">Zorger</a></b> for Project № 14 (07.02.2023)</p>
  </footer>
</template>

<style lang="scss" scoped>
footer {
  height: auto;
  display: flex;
  flex: 0 0 auto;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  background: linear-gradient(to top, rgba(204, 204, 204, 0.5), rgba(107, 106, 106, 0.9));
  //background-color: #9b9b9b;
  img {
    max-width: 100%;
    height: 4rem;
    max-height:100%;
    cursor: pointer;
  }
  //img:hover {
  //  box-shadow: 3px 3px 4px 0 floralwhite;
  //}
  @media (max-width: 768px) {
    padding: 10px 0;
  }
}
.footer-logo {
  margin-right: 20px;
  @media (max-width: 768px) {
    margin-bottom: 10px;
  }
}
.footer-text {
  font-size: 1.5rem;
  font-style: italic;
  letter-spacing: 1px;
  color: #fff;
  @media (max-width: 768px) {
    font-size: 1rem;
  }
}
</style>