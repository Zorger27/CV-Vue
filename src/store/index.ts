import { createStore } from 'vuex'
import otherStore from "@/store/modules/otherStore";
import englishStore from "@/store/modules/englishStore";
import pmStore from "@/store/modules/pmStore";
import designerStore from "@/store/modules/designerStore";
import databaseStore from "@/store/modules/databaseStore";

export default createStore({
  modules: { otherStore, englishStore, pmStore, designerStore, databaseStore }
})