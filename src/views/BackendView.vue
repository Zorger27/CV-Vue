<template>
  <div class="backend">
    <h1>Backend Diplomas & Certificates</h1>
    <line></line>
    <ol>
      <li class="diplom"><p><b><a class="attention" href="https://testprovider.com/ru/search-certificate/tp31617068d" title="Diploma..." target="_blank">Java Developer</a></b> (TP31617068D | 12.04.2021)</p></li>
      <li class="diplom"><p><b><a class="attention" href="https://testprovider.com/ru/search-certificate/tp88892276D" title="Diploma..." target="_blank">PHP Developer</a></b> (TP88892276D | 30.09.2022)</p></li>
      <li class="diplom"><p><b><a class="attention" href="https://testprovider.com/ru/search-certificate/tp45473683D" title="Diploma..." target="_blank">Python Developer</a></b> (TP45473683D | 16.11.2022)</p></li>
      <li class="diplom"><p><b><a class="attention" href="https://testprovider.com/ru/search-certificate/tp63925579D" title="Diploma..." target="_blank">Ruby Developer</a></b> (TP63925579D | 30.11.2022)</p></li>
    </ol>
  </div>
</template>

<script lang="ts">
import {Vue} from "vue-class-component";
export default class backend extends Vue {}

</script>

<style lang="scss" scoped>
.backend {
  flex: 1 0 auto;
  li {
    text-align: left;
    list-style-type: decimal;
    p{
      margin: 0;
    }
  }
  .attention{
    color: #a20909;
  }
  .attention:hover{
    color: red;
  }
  .diplom{
    list-style-type: upper-roman;
  }
}
</style>