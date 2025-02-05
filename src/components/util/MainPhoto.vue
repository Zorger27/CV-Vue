<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
  data() {
    return {
      photos: [
        require('@/assets/img/photo/photo1.svg'),
        require('@/assets/img/photo/photo2.svg'),
        require('@/assets/img/photo/photo3.svg'),
        require('@/assets/img/photo/photo4.svg'),
      ],
      currentPhotoIndex: 2,
    };
  },
  mounted() {
    this.loadPhotoFromLocalStorage();
  },
  methods: {
    changePhoto() {
      this.currentPhotoIndex = (this.currentPhotoIndex + 1) % this.photos.length;
      this.savePhotoToLocalStorage();
    },
    savePhotoToLocalStorage() {
      localStorage.setItem('selectedPhotoIndex', this.currentPhotoIndex.toString());
    },
    loadPhotoFromLocalStorage() {
      const savedIndex = localStorage.getItem('selectedPhotoIndex');
      if (savedIndex !== null) {
        this.currentPhotoIndex = parseInt(savedIndex, 10);
      }
    },
  },
  computed: {
    getPhotoImage() {
      return this.photos[this.currentPhotoIndex];
    },
  },
})
export default class MainPhoto extends Vue {}
</script>

<template>
  <img
    :src="getPhotoImage"
    class="photo-image"
    alt="My Photo Image"
    @dblclick="changePhoto"
  />
</template>

<style scoped lang="scss">
.photo-image {
  width: 100%;
  height: auto;
  cursor: pointer;
}
</style>