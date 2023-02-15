import { createStore } from 'vuex'
import otherStore from "@/store/modules/otherStore";
import englishStore from "@/store/modules/englishStore";

export default createStore({
  modules: { otherStore, englishStore }
})