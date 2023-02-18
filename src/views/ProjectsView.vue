<script lang="ts">
import {Options, Vue} from "vue-class-component";
import projectStore from "@/store/modules/projectStore";
@Options({
  computed: {
    projectStore() {
      return projectStore
    }
  },
  components: {},})

export default class projects extends Vue {}
</script>

<template>
  <div class="projects">
      <h1>Projects</h1>
      <line></line>
    <div v-for="prj in projectStore.state.projectStore" class="prj">
      <a class="block" :href="prj.sourcelink" title="Project at GitHub..." target="_blank">
        <h3>{{ prj.id }}. {{ prj.title }}</h3>
        <div>Type: <strong>{{ prj.type }}</strong></div>
        <div>Technologies: <strong>{{ prj.techno }}</strong></div>
        <a v-if="prj.demolink" :href="prj.demolink" title="Link to the project" target="_blank">Link to the project</a>
      </a>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.projects {
  flex: 1 0 auto;
  .prj {
    .block {
     a {
        text-decoration: none;
        color: darkred;
      }
      a:hover {
        border: none;
        box-shadow: none;
        text-decoration: underline;
        //font-weight: bold;
        color: red;
      }
    }
  }
}
</style>