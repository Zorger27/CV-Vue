<script lang="ts">
import {Vue} from "vue-class-component";
export default class PageNotFound extends Vue {}
</script>

<template>
  <div class="container">
    <div class="inner">
      <h1>
        404
      </h1>
      <p>Page not found, back to home page</p>
      <a>
        <button>
          <router-link to="/">Back to HOME</router-link>
        </button>
      </a>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  display: flex;
  height: 100%;
}
.inner {
  margin: 10rem auto;
}
h1 {
  font-size: 130px;
  letter-spacing: 20px;
  margin: 20px;
}
p {
  font-size: 18px;
}
a {
  text-decoration: none;
  color: inherit;
}
</style>