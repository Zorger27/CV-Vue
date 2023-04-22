<script>
import {Options, Vue} from "vue-class-component";
import CurrentDate from "@/components/util/CurrentDate.vue";
import PrivatBankRates from "@/components/other/PrivatBankRates.vue";
import NBURates from "@/components/other/NBURates.vue";

@Options({
  data() {
    return {
      tableView2: true
    }
  },
  methods: {
    changeView() {
      this.tableView2 = !this.tableView2;
    }
  },
  components: {NBURates, PrivatBankRates, CurrentDate},
})
export default class CurrencyRates extends Vue {
}

</script>

<template>
  <div class="exchange">
    <h1>
      <router-link class="back" to="/extra" title="Back to Extra page"><i class="fa fa-arrow-circle-left"></i>
      </router-link>
      {{ $t('extra.h1m.exchange') }}
      <i @click="changeView"><span :class="['fa', tableView2 ? 'fa-th' : 'fa-list']"></span></i>
    </h1>
    <line></line>
    <div><CurrentDate></CurrentDate></div>
    <div><NBURates :table-view2="tableView2" table-view></NBURates></div>
<!--    <div><PrivatBankRates></PrivatBankRates></div>-->
  </div>
</template>

<style lang="scss" scoped>
.exchange {
  flex: 1 0 auto;

  .back {
    display: none;
    @media (max-width: 768px) {
      display: inline-flex;
      text-decoration: none;
      margin-right: 0.1rem;
    }
  }
  .fa.fa-th {color: deepskyblue;}
  .fa.fa-list {color: deeppink;}
}
</style>