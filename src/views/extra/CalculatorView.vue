<script lang="ts">
import {Options, Vue} from "vue-class-component";
import CalculatorStandart from "@/components/other/CalculatorStandart.vue";
import CalculatorFinance from "@/components/other/CalculatorFinance.vue";
import {openGraphMixin} from "@/assets/ogimage/openGraphMixin";

@Options({
  mixins: [openGraphMixin],
  data() {
    return {
      calcView: true
    }
  },
  mounted() {
    const mainTitle = 'Calculator';
    const title = 'Portfolio - Calculator';
    const metaDescription = 'Anatolii Zorin\'s Portfolio with all diplomas, certificates, interesting projects and a detailed description of the experience gained at previous jobs.';
    const description = 'Anatolii Zorin\'s Portfolio - Standart & Accounting Calculator';
    const imageUrl = 'https://zorin.expert/assets/ogimage/extra/OG_Image_Calculator.jpg';
    const url = 'https://zorin.expert/extra/calculator';

    this.setOpenGraphTags(metaDescription, title, description, imageUrl, url);
    this.setPageTitle(mainTitle);
  },
  methods: {
    changeView() {
      this.calcView = !this.calcView;
    }
  },
  computed: {},
  components: {CalculatorFinance, CalculatorStandart},
})
export default class CalculatorView extends Vue {
}
</script>

<template>
  <div class="calc">
    <h1>
      <router-link class="back" to="/extra" title="Back to Extra page"><i class="fa fa-arrow-circle-left"></i>
      </router-link>
      {{ $t('extra.h1m.calculator') }}
      <button @click="changeView">
        {{ calcView ? $t('extra.calculator.accounting') : $t('extra.calculator.standart') }}
      </button>
    </h1>
    <line></line>
    <CalculatorStandart v-if="calcView"></CalculatorStandart>
    <CalculatorFinance v-else></CalculatorFinance>
  </div>
</template>

<style lang="scss" scoped>
.calc {
  flex: 1 0 auto;
  background: linear-gradient(to bottom, rgb(234, 250, 246), rgb(255, 250, 229)) no-repeat center;

  .back {
    display: none;
    @media (max-width: 768px) {
      display: inline-flex;
      text-decoration: none;
      margin-right: 0.1rem;
    }
  }

  h1 {
    font-size: 2.2rem;
  }

  button {
    padding: 0.5rem 1rem;
    font-size: 1.4rem;
    font-weight: bold;
    color: black;
    background-image: url("@/assets/background/background10.webp");
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    border: 1px solid lightslategrey;
    border-radius: 5px;
    text-align: center;
    cursor: pointer;
    transition: border-color .2s ease-in-out, background-color .2s, box-shadow .2s;

    &:active {
      box-shadow: 3px 3px 4px 0 grey;
    }
  }

  @media(max-width: 1020px) {}

  @media (max-width: 768px) {
    h1 {
      font-size: 1.6rem;
    }
    button {
      padding: 0.7rem 0.2rem;
      font-size: 0.9rem;
      font-weight: normal;
      border-radius: 3px;
    }
  }
}
</style>