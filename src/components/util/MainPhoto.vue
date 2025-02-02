<script lang="ts">
import {Options, Vue} from 'vue-class-component';

@Options({
  data() {
    return {
      getPhotoImage: require('@/assets/img/photo/photo1.svg'),
    }
  },
  mounted() {},
  methods: {},
  components: {},
})
export default class MainPhoto extends Vue {};
</script>

<template>
  <img :src="getPhotoImage" class="photo-image" alt="My Photo Image">
</template>

<style scoped lang="scss">

.photo-image {
  width: 100%;
  height: auto;
}

</style>