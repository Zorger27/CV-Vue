<script lang="ts">
import {Options, Vue} from "vue-class-component";
import databaseStore from "@/store/modules/databaseStore";
@Options({
  computed: {
    databaseStore() {
      return databaseStore
    }
  },
  components: {},})
export default class database extends Vue {}
</script>

<template>
  <div class="database">
    <h1>DataBase Developer certificates</h1>
    <line></line>
    <div v-for="sert in databaseStore.state.databaseStore" class="certificate">
      <div class="block">
        <h3>{{ sert.id }}. {{ sert.title }}</h3>
        <div>Level: <strong>{{ sert.regnumber }}</strong></div>
        <div>Grade: <strong>{{ sert.grade }}</strong></div>
        <div>Exam date: {{ sert.examdate }}</div>
        <a href={{sert.image}} target="_blank" title="Certificate...">Certificate Link</a>
        <!--        <div style="font-size: 0.7rem">{{ sert.image }}</div>-->
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.database {flex: 1 0 auto;}
</style>