<script lang="ts">
import {Options, Vue} from "vue-class-component";
import infoStore from "@/store/modules/service/infoStore";

@Options({
  computed: {
    infoStore() {
      return infoStore
    }
  },
  data() {
    return {
      tableView: false
    }
  },
  methods: {
    changeView() {
      this.tableView = !this.tableView;
    }
  },
  components: {},
})

export default class About extends Vue {}
</script>

<template>
  <div class="about">
<!--    <h1>{{$t ('about.title')}}</h1>-->
    <h1>
      {{$t ('about.title')}} <i @click="changeView"><span :class="['fa', tableView ? 'fa-th' : 'fa-list']"></span></i>
    </h1>
    <line></line>
    <!--    <h2>{{$t ('about.technologies')}}</h2>-->
    <div v-if="tableView" class="table">
      <table>
        <thead>
        <tr>
          <th style="color: darkgoldenrod" colspan="3">{{ $t('about.technologies') }}</th>
        </tr>
        <tr>
          <th>№</th>
          <th>{{ $t('about.name') }}</th>
          <th>{{ $t('about.version') }}</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="info in infoStore.state.infoStore">
          <td class="nomer">{{ info.id }}</td>
          <td class="name"><a :href="info.url" title="In more detail..." target="_blank">{{ info.title }}</a></td>
          <td class="version">{{ info.version }}</td>
        </tr>
        </tbody>
      </table>
    </div>
    <div v-else>
      <h1 style="color: darkgoldenrod; text-decoration: underline">{{ $t('about.technologies') }}</h1>
      <div v-for="info in infoStore.state.infoStore" class="prj">
        <a class="block" :href="info.url" title="In more detail..." target="_blank">
          <h3>
            <span style="color: black">{{ info.id }}.</span> <span>{{ info.title }}</span> <span
            style="color: red">{{ info.version ? 'v.' + info.version : info.version }}</span>
          </h3>
        </a>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.about {
  flex: 1 0 auto;
  text-align: center;

  h1 {
    color: mediumvioletred;
  }

  .fa.fa-th {
    color: deepskyblue;
  }

  .fa.fa-list {
    color: green;
  }

  .table {
    display: inline-flex;
    font-size: 2rem;
    color: black;
    border: 1px solid #ddd;
    padding: 1rem;
    margin: 0.5rem;
    border-radius: 5px;
    background-color: rgba(220, 219, 219, 0.2);
    box-shadow: 3px 3px 4px 0 lightgrey;

    table {
      border-collapse: collapse;
    }

    tr, td, th {
      border: 1px solid #ddd;
      padding: 0.5rem;
    }

    .nomer {
      width: 70px;
    }

    .name {
      text-align: left;
      color: deepskyblue;
      width: 350px;

      a {
        color: inherit;
        text-decoration: none;
      }

      a:hover {
        color: #2e768d;
      }
    }

    .version {
      text-align: right;
      color: deeppink;
      width: 200px;
    }
  }

  @media(max-width: 1020px) {
    .table {
      font-size: 1.55rem;
      padding: 0.8rem;
      margin: 0.5rem;

      tr, td, th {
        padding: 0.4rem;
      }
    }
  }
  @media (max-width: 768px) {
    .table {
      font-size: 1.3rem;
      padding: 0;
      margin: 0.3rem;
      border: none;
      border-radius: unset;

      tr, td, th {
        padding: 0.3rem;
      }

      .nomer, .name, .version {
        width: max-content;
      }
    }
  }
}
</style>