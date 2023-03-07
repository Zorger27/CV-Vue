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
        <div v-if="prj.demolink" class="demolink" >
          <a :href="prj.demolink" title="Link to the project" target="_blank"><b>Link to the project</b></a>
        </div>
      </a>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.projects {
  flex: 1 0 auto;
  .prj {
    .block {
      .demolink {
        text-decoration: none;
        color: white;
        display: inline-flex;
        border: 1px solid darkred;
        padding: 0.5rem;
        margin: 0.3rem 0;
        border-radius: 5px;
        background-color:hsla(0, 100%, 50%, 1);
        background-image:
            radial-gradient(at 40% 20%, hsla(28,100%, 74%,1) 0px, transparent 50%),
            radial-gradient(at 80% 0%, hsla(189,100%,56%,1) 0px, transparent 50%),
            radial-gradient(at 0% 50%, hsla(355,100%, 93%, 1) 0px, transparent 50%),
            radial-gradient(at 76% 52%, hsla(340,100%,76%, 1) 0px, transparent 50%),
            radial-gradient(at 0% 100%, hsla(22,100%, 77%, 1) 0px, transparent 50%),
            radial-gradient(at 79% 100%, hsla(242, 100%, 70%, 1) 0px, transparent 50%),
            radial-gradient(at 0% 0%, hsla(343,100%, 76%, 1) 0px, transparent 50%);
        a:hover {
          border: none;
          box-shadow: none;
        }
      }
      .demolink:hover {
        background: linear-gradient(to bottom, rgba(228, 229, 229, 0.5), rgba(72, 72, 171, 0.5));
        color: darkblue;
        border-color: darkslateblue;
      }
    }
  }
}
</style>