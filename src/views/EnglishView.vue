<script lang="ts">
import {Options, Vue} from "vue-class-component";
import englishStore from "@/store/modules/englishStore";
@Options({
  computed: {
    englishStore() {
      return englishStore
    }
  },
  components: {},})
export default class english extends Vue {
}
</script>

<template>
  <div class="english">
    <h1>English language certificates</h1>
    <line></line>
    <div v-for="sert in englishStore.state.englishStore" class="certificate">
      <a class="block" :href="sert.image" title="Certificate..." target="_blank">
        <h3>{{ sert.id }}. {{ sert.title }}</h3>
        <div>Level: <strong>{{ sert.regnumber }}</strong></div>
        <div>Exam date: {{ sert.examdate }}</div>
      </a>
<!--      <div class="block">-->
<!--        <h3>{{ sert.id }}. {{ sert.title }}</h3>-->
<!--        <div>Level: <strong>{{ sert.regnumber }}</strong></div>-->
<!--&lt;!&ndash;        <div>Grade: <strong>{{ sert.grade }}</strong></div>&ndash;&gt;-->
<!--        <div>Exam date: {{ sert.examdate }}</div>-->
<!--&lt;!&ndash;        <img src="{{ sert.image }}"  alt="certificate"><br>&ndash;&gt;-->
<!--        <a :href="sert.image" title="Certificate..." target="_blank">Certificate Link</a>-->
<!--      </div>-->
    </div>
  </div>
</template>

<style lang="scss" scoped>
.english {flex: 1 0 auto;}
</style>