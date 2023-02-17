<script lang="ts">
import {Options, Vue} from "vue-class-component";
import otherStore from "@/store/modules/otherStore";

@Options({
  computed: {
    otherStore() {
      return otherStore
    }
  },
  components: {},})
export default class other extends Vue {
  // @Prop() sert?: Item;
  // @Prop() sert?: ["otherStore"]
}
</script>
<!---->
<template>
  <div class="other">
    <h1>Other certificates</h1>
    <line></line>
    <!--    <router-view>-->
      <div v-for="sert in otherStore.state.otherStore" class="certificate">
        <a class="block" :href="sert.image" title="Certificate..." target="_blank">
          <h3>{{ sert.id }}. {{ sert.title }}</h3>
          <div>Number: <strong>{{ sert.regnumber }}</strong></div>
          <div>Grade: <strong>{{ sert.grade }}</strong></div>
          <div>Exam date: {{ sert.examdate }}</div>
        </a>
      </div>
<!--    </router-view>-->
<!--    <div v-for="item in otherStore" v-bind:key="item"></div>-->
<!--    <SertView v-for="item in otherStore" :key="item"></SertView>-->
<!--    <SertView></SertView>-->
    <!--    <div v-for="(title, id) in otherStore" :key="id">{{otherStore.title}}</div>-->
<!--    <h1>:title = {{otherStore.title}}</h1>-->
<!--    <sert-view> :otherStore = {{otherStore}}</sert-view>-->
<!--    <posts :posts="$store.state.posts" />-->
  </div>
</template>

<style lang="scss" scoped>
.other {flex: 1 0 auto;}
</style>