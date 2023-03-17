<script lang="ts">
import {Options, Vue} from "vue-class-component";
import designerStore from "@/store/modules/designerStore";

@Options({
  computed: {
    designerStore() {
      return designerStore
    }
  },
  components: {},
})
export default class designer extends Vue {
}
</script>

<template>
  <div class="designer">
    <h1>
      <router-link class="back" to="/certificates" title="Back to Certificates"><i class="fa fa-arrow-circle-left"></i>
      </router-link>
      Designer certificates
    </h1>
    <line></line>
    <div v-for="sert in designerStore.state.designerStore" class="certificate">
      <a class="block" :href="sert.image" title="Certificate..." target="_blank">
        <h3>{{ sert.id }}. {{ sert.title }}</h3>
        <div>Number: <strong>{{ sert.regnumber }}</strong></div>
        <div>Grade: <strong>{{ sert.grade }}</strong></div>
        <div>Exam date: {{ sert.examdate }}</div>
      </a>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.designer {
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