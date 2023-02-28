<template>
  <div class="skills">
    <h1>Hard & Soft skills</h1>
    <line></line>
    <codersrank-skills-chart username="zorger27" labels="true" legend="true" active-skills="JSON, JavaScript, Vue, CSS, SCSS, HTML, TypeScript" branding="false"></codersrank-skills-chart>
    <div class="container">
      <div class="type-skills">
        <div class="hard-skills">
          <h3>Hard skills</h3>
          <ul>
            <li><span>&#9745;</span>Html5, CSS3, JavaScript</li>
            <li><span>&#9745;</span>Vue.JS, Angular</li>
            <li><span>&#9745;</span>Git, Github</li>
            <li><span>&#9745;</span>Figma, Photoshop</li>
          </ul>
        </div>
        <div class="soft-skills">
          <h3>Soft skills</h3>
          <ul>
            <li><span>&#9745;</span>Management</li>
            <li><span>&#9745;</span>Strategic Thinking</li>
            <li><span>&#9745;</span>Critical Thinking</li>
            <li><span>&#9745;</span>Negotiation</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {Vue} from "vue-class-component";
export default class skills extends Vue {}
</script>

<style lang="scss" scoped>
.skills {
  flex: 1 0 auto;
  text-align: left;
  h3 {
    text-decoration: underline;
    margin-bottom: -0.7rem;
    padding: 0 0 0.3rem 1.5rem;
  }
  span {
    margin-right: 0.5rem;
  }
  .container {
    display: flex;
    justify-content: left;
  }
  .type-skills {
    display: inline-flex;
    margin-right: 0.5rem;
  }
  .hard-skills ul {
    list-style: none;
    padding: 0 0 0.3rem 1.5rem;
  }
  .soft-skills ul {
    list-style: none;
    padding: 0 0 0.3rem 1.5rem;  }

  codersrank-skills-chart {
    margin-top: 1rem;
    padding-right: 0.5rem;
    width: 75%;
  }
  @media(max-width:1200px) {
    codersrank-skills-chart {
      width: 100%;
    }
  }
  @media(max-width:768px) {
    codersrank-skills-chart {
      width: 100%;
    }
  }
}
</style>