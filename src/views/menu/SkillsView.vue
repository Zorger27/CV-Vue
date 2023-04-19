<template>
  <div class="skills">
    <h1>{{$t('skills.title')}}</h1>
    <line></line>
    <div class="container">
      <img class="codersrank-skills-chart" src="https://cr-skills-chart-widget.azurewebsites.net/api/api?username=zorger27&labels=true&legend=true&skills=JSON,JavaScript,Vue,CSS,SCSS,HTML,TypeScript&branding=false"
       alt="Codersrank skills chart"/>
<!--      <codersrank-skills-chart username="zorger27" labels="true" legend="true" skills="JSON, JavaScript, Vue, CSS, SCSS, HTML, TypeScript" branding="false"></codersrank-skills-chart>-->
      <div class="type-skills">
        <div class="hard-skills">
          <h3>{{$t('skills.hard')}}</h3>
          <ul>
            <li><span>&#9745;</span>Html5, CSS3, JavaScript</li>
            <li><span>&#9745;</span>Vue.JS, Angular</li>
            <li><span>&#9745;</span>Git, Github</li>
            <li><span>&#9745;</span>Figma, Photoshop</li>
          </ul>
        </div>
        <div class="soft-skills">
          <h3>{{$t('skills.soft.sskills')}}</h3>
          <ul>
            <li><span>&#9745;</span>{{$t('skills.soft.management')}}</li>
            <li><span>&#9745;</span>{{$t('skills.soft.strategic')}}</li>
            <li><span>&#9745;</span>{{$t('skills.soft.critical')}}</li>
            <li><span>&#9745;</span>{{$t('skills.soft.negotiation')}}</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {Vue} from "vue-class-component";
export default class Skills extends Vue {}
</script>

<style lang="scss" scoped>
.skills {
  flex: 1 0 auto;
  text-align: left;
  h3 {
    text-decoration: underline;
    color: deeppink;
    margin-top: 0.5rem;
    margin-bottom: -0.7rem;
    padding: 0 0 0.3rem 1.5rem;
  }
  span {
    margin-right: 0.5rem;
  }
  .container {
    display: grid;
    grid-template-columns: 2fr 1fr;
    grid-template-rows: auto;
    grid-gap: 1rem;
    grid-auto-flow: column;
    grid-template-areas: "codersrank-skills-chart type-skills";
  }
  .hard-skills ul {
    list-style: none;
    padding: 0 0 0.3rem 1.5rem;
  }
  .soft-skills ul {
    list-style: none;
    padding: 0 0 0.3rem 1.5rem;
  }
}
img {
  grid-area: codersrank-skills-chart;
  margin-top: 0.5rem;
  width: 100%;
}

.type-skills {
  grid-area: type-skills;
  margin: 0 0.5rem 0 0;
  font-size: xx-large;
}

@media(max-width:1020px) {
  .skills {
    .container {
      grid-template-columns: 1fr;
      grid-template-areas:
        "codersrank-skills-chart"
        "type-skills";
    }
  }
  .type-skills {
    display: inline-flex;
    justify-content: space-around;
    font-size: x-large;
  }
}

@media(max-width:768px) {
  .skills {
    .container {
      grid-template-columns: 1fr;
      grid-template-areas:
        "codersrank-skills-chart"
        "type-skills";
    }
  }
  .type-skills {
    display: grid;
    justify-content: left;
    font-size: large;
  }
}
</style>