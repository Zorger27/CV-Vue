<script lang="ts">
import {Options, Vue} from "vue-class-component";
import SocialSharing from "@/components/util/SocialSharing.vue";
import {mapActions, mapGetters } from 'vuex';

@Options({
  data() {
    return {
      currentYear: new Date().getFullYear(),
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
  components: {SocialSharing},
})

export default class Footer extends Vue {
}
</script>

<template>
  <footer>
    <div class="footer-logo" @click="cubejs">
      <img :src="getFooterLogoImage" alt="Footer Logo Image">
    </div>
    <p class="footer-text">{{ $t('footer.text1') }}
      <b><a href="https://zorger27.github.io" title="CV (Landing Page)" target="_blank">{{ $t('footer.text2') }}
      </a></b>{{ $t('footer.text3') }}
      <b>&copy; 2023―{{ currentYear }}</b> - {{ $t('footer.text4') }}
    </p>
    <p class="footer-text-mob">{{ $t('footer.text1') }}
      <b><a href="https://zorger27.github.io" title="CV (Landing Page)" target="_blank">{{ $t('footer.text2') }}
      </a></b>{{ $t('footer.text3') }}<br>
      <span class="copyright"><b>&copy; 2023―{{ currentYear }}</b> - {{ $t('footer.text4') }}</span>
    </p>
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
  p {
    margin: 0;
    padding: 0;
  }
  .footer-logo {
    margin: 0.3rem;
    display: flex;
    img {
      max-width: 100%;
      width: 4rem;
      height: 4rem;
      max-height:100%;
      cursor: pointer;
      //padding-right: 0.2rem;
      margin: auto 0.2rem auto 0;
    }
  }
  .footer-text {
    font-size: 1.5rem;
    font-style: italic;
    letter-spacing: 1px;
    color: saddlebrown;
    @media(max-width: 1020px) {
      font-size: 1.1rem;
    }
    @media (max-width: 768px) {
      display: none;
    }
  }
  .footer-text-mob {
    display: none;
    @media (max-width: 768px) {
      display: block;
      //padding: 0 1rem 0 0;
      padding: 0;
      margin: 0;
      font-size: 0.9rem;
      font-style: italic;
      color: saddlebrown;
      .copyright {font-size: 0.65rem;}
    }
  }
}
</style>