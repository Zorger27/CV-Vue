<script lang="ts">
import {Options, Vue} from "vue-class-component";
import Notes from "@/components/other/Notes.vue";

@Options({components: {Notes},})
export default class NotesView extends Vue {
}
</script>

<template>
  <div class="notes">
    <h1>
      <router-link class="back" to="/extra" title="Back to Extra page"><i class="fa fa-arrow-circle-left"></i>
      </router-link>
      {{ $t('extra.h1m.notes') }}
    </h1>
    <line></line>
    <Notes></Notes>
  </div>
</template>

<style lang="scss" scoped>
.notes {
  flex: 1 0 auto;
  background: linear-gradient(to bottom, rgb(230, 238, 252), rgb(255, 251, 229)) no-repeat center;

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