<template>
  <div class="projects">
      <h1>Projects</h1>
      <line></line>
      <ol>
        <li><strong>MY Curriculum VITAE</strong> (Landing page)<br>
          <p>– <a href="https://github.com/Zorger27/zorger27.github.io" title="Project..." target="_blank">View on Github</a></p>
          <p>– <i>Technologies: HTML5, CSS3, Grid CSS, FlexBox CSS</i></p>
        </li>
        <li><strong>Calculator</strong> (WEB-application)<br>
          <p>– <a href="https://github.com/Zorger27/calculator" title="Project..." target="_blank">View on Github</a></p>
          <p>– <i>Technologies: HTML5, CSS3, JavaScript</i></p>
        </li>
        <li><strong>Sidebar Menu</strong> (WEB-application)<br>
          <p>– <a href="https://github.com/Zorger27/Sidebar-Menu" title="Project..." target="_blank">View on Github</a></p>
          <p>– <i>Technologies: HTML5, CSS3, Boxicons CSS, JavaScript</i></p>
        </li>
        <li><strong>Website template for a blogger</strong> (SPA)<br>
          <p>– <a href="https://github.com/Zorger27/Blog-site" title="Project..." target="_blank">View on Github</a></p>
          <p>– <i>Technologies: Vue.JS, HTML5, CSS3, TypeScript</i></p>
        </li>
        <li><strong>To-Do list</strong> (WEB-application)<br>
          <p>– <a href="https://github.com/Zorger27/To-Do-list" title="Project..." target="_blank">View on Github</a></p>
          <p>– <i>Technologies: HTML5, CSS3, FlexBox CSS, JavaScript</i></p>
        </li>
        <li><strong>Typical JavaScript interview tasks</strong> (WEB-application)<br>
          <p>– <a href="https://github.com/Zorger27/Typical-JS-tasks" title="Project..." target="_blank">View on Github</a></p>
          <p>– <i>Technologies: HTML5, CSS3, FlexBox CSS, JavaScript</i></p>
        </li>
        <li><strong>Dropdown Menu</strong> (WEB-application)<br>
          <p>– <a href="https://github.com/Zorger27/Dropdown-Menu" title="Project..." target="_blank">View on Github</a></p>
          <p>– <i>Technologies: HTML5, CSS3</i></p>
        </li>
        <li><strong>Memory game</strong> (WEB-application)<br>
          <p>– <a href="https://github.com/Zorger27/Memory-game" title="Project..." target="_blank">View on Github</a></p>
          <p>– <i>Technologies: HTML5, CSS3, FlexBox CSS, JavaScript</i></p>
        </li>
      </ol>
  </div>
</template>

<script>
import {Vue} from "vue-class-component";
export default class projects extends Vue {}
</script>

<style lang="scss" scoped>
.projects {
  flex: 1 0 auto;
  text-align: left;
  p {
    margin: 0.2rem 0.5rem;
  }
}
</style>