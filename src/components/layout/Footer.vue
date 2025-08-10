<script lang="ts">
import {Options, Vue} from "vue-class-component";
import SocialSharing from "@/components/util/SocialSharing.vue";
import Author from "@/components/util/Author.vue";
import Copyright from "@/components/util/Сopyright.vue"
import {mapActions, mapGetters } from 'vuex';

@Options({
  data() {
    return {
      currentYear: new Date().getFullYear(), // Текущий год
      progYear: 2023, // Установленный год (год программирования приложения)
    };
  },
  computed: {
    ...mapGetters({
      getFooterLogoImage: 'getFooterLogoImage',
    }),
  },
  methods: {
    ...mapActions({
      toggleImages: 'toggleImages',
    }),
    cubejs() {
      this.toggleImages();
      // this.$router.push('/extra/graphics/cubejs');
    },
  },
  components: {SocialSharing, Author, Copyright},
})

export default class Footer extends Vue {
}
</script>

<template>
  <footer>
    <div class="footer-logo" @click="cubejs">
      <img :src="getFooterLogoImage" alt="Footer Logo Image" :title="$t('footer.footerLogo')">
    </div>
    <div class="footer-content">
      <Author />
      <Copyright :currentYear="currentYear" :progYear="progYear" />
    </div>
    <SocialSharing></SocialSharing>
  </footer>
</template>

<style lang="scss" scoped>
footer {
  height: auto;
  display: flex;
  padding: 0;
  position: relative;
  flex: 0 0 auto;
  justify-content: center;
  align-items: center;
  background-image:
    radial-gradient(at 0% 100%, hsla(28,100%, 74%,1) 0px, transparent 50%),
    radial-gradient(at 80% 0%, hsla(189,100%,56%,1) 0px, transparent 50%),
    radial-gradient(at 50% 50%, hsla(355,100%, 93%, 1) 0px, transparent 50%),
    radial-gradient(at 79% 100%, hsla(242, 100%, 70%, 1) 0px, transparent 50%),
    radial-gradient(at 0% 0%, hsla(343,100%, 76%, 1) 0px, transparent 50%);
  box-shadow: -2px -2px 4px grey;

  .footer-logo {
    margin: 0.3rem;
    display: flex;
    img {
      max-width: 100%;
      width: 4rem;
      height: 4rem;
      max-height:100%;
      cursor: pointer;
      margin: auto 0.2rem auto 0;
    }
  }

  .footer-content {
    display: flex;
    flex-direction: row; /* По умолчанию горизонтально */
    justify-content: center;
    align-items: center;
    flex-wrap: wrap; /* Позволяет переноситься целому блоку */

    @media (max-width: 768px) {
      flex-direction: column; /* На мобильных вертикально */
      align-items: center;
    }
  }

  @media (max-width: 768px) {
    justify-content: space-between;
  }
}
</style>