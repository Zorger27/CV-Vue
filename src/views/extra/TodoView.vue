<script lang="ts">
import {Options, Vue} from "vue-class-component";
import TodoList from "@/components/other/TodoList.vue";
import {openGraphMixin} from "@/assets/ogimage/openGraphMixin";

@Options({
  mixins: [openGraphMixin],
  mounted() {
    const mainTitle = 'To-do list';
    const title = 'Portfolio - To-do list';
    const metaDescription = 'Anatolii Zorin\'s Portfolio with all diplomas, certificates, interesting projects and a detailed description of the experience gained at previous jobs.';
    const description = 'Anatolii Zorin\'s Portfolio - To-do list';
    const imageUrl = 'https://zorin.expert/assets/ogimage/extra/OG_Image_Todo.jpg';
    const url = 'https://zorin.expert/extra/todo';

    this.setOpenGraphTags(metaDescription, title, description, imageUrl, url);
    this.setPageTitle(mainTitle);
    this.setCanonical(url);
  },
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
  background: linear-gradient(to bottom, rgb(255, 250, 229), rgb(234, 250, 246)) no-repeat center;

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