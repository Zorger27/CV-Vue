<script lang="ts">
import {Options, Vue} from "vue-class-component";

@Options({components: {},})
export default class LoginPage extends Vue {}
</script>

<template>
  <div class="extra">
    <h2>{{ $t('extra.h1') }}</h2>
    <line></line>
    <h1>Hello World!!! 🤠😎</h1>
  </div>
</template>

<style lang="scss" scoped>
.extra {
  flex: 1 0 auto;
}
</style>