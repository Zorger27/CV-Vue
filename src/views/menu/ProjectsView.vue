<script lang="ts">
import {Options, Vue} from "vue-class-component";
import projectStore from "@/store/modules/project/projectStore";
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
      <h1>{{$t ('projects.title')}}</h1>
      <line></line>
    <div v-for="prj in projectStore.state.projectStore" class="prj">
      <a class="block" :href="prj.sourcelink" title="Project at GitHub..." target="_blank">
        <h3>{{ prj.id }}. {{ prj.title }}</h3>
        <div>{{$t ('projects.type')}}<strong>{{ prj.type }}</strong></div>
        <div>{{$t ('projects.technologies')}}<strong>{{ prj.techno }}</strong></div>
        <a v-if="prj.demolink" :href="prj.demolink" title="Link to the project" target="_blank"><b>{{$t ('projects.link')}}</b></a>
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
        color: white;
        display: flex;
        width: max-content;
        border: 1px solid darkred;
        padding: 0.5rem 1rem;
        margin: 0.3rem auto;
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
      }
      a:hover {
        box-shadow: none;
        background: linear-gradient(to bottom, rgba(253, 253, 253, 0.5), rgba(72, 72, 171, 0.5));
        color: darkblue;
        border: 1px solid darkslateblue;
      }
    }
  }
}
</style>