<script lang="ts">
import {Options, Vue} from "vue-class-component";
import TodoList from "@/components/other/TodoList.vue";

@Options({
  components: {TodoList},
})
export default class Todo extends Vue {
}
</script>

<template>
  <div class="todo">
    <h1>
      <router-link class="back" to="/extra" title="Back to Extra page"><i class="fa fa-arrow-circle-left"></i>
      </router-link>
      {{ $t('extra.h1m.todo') }}
    </h1>
    <line></line>
    <TodoList></TodoList>
  </div>
</template>

<style lang="scss" scoped>
.todo {
  flex: 1 0 auto;

  .back {
    display: none;
    @media (max-width: 768px) {
      display: inline-flex;
      text-decoration: none;
      margin-right: 0.1rem;
    }
  }
}
</style>