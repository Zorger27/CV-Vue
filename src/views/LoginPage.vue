<script lang="ts">
import {Options, Vue} from "vue-class-component";

@Options({components: {},})
export default class LoginPage extends Vue {
}
</script>

<template>
  <h1> Login Page </h1>
  <line></line>
  <div class="login">
    <h2> Here will be the authorization form! 😉 </h2>
  </div>
</template>

<style lang="scss" scoped>
.login {
  flex: 1 0 auto;
}
</style>