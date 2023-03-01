import { createStore } from 'vuex'
import otherStore from "@/store/modules/otherStore";
import englishStore from "@/store/modules/englishStore";
import englishdomStore from "@/store/modules/diplomas/englishdomStore";
import pmStore from "@/store/modules/pmStore";
import designerStore from "@/store/modules/designerStore";
import databaseStore from "@/store/modules/databaseStore";
import javaStore from "@/store/modules/backend/javaStore";
import phpStore from "@/store/modules/backend/phpStore";
import pythonStore from "@/store/modules/backend/pythonStore";
import rubyStore from "@/store/modules/backend/rubyStore";
import htmlStore from "@/store/modules/frontend/htmlStore";
import javascriptStore from "@/store/modules/frontend/javascriptStore";
import angularStore from "@/store/modules/frontend/angularStore";
import reactStore from "@/store/modules/frontend/reactStore";
import frontStore from "@/store/modules/frontend/frontStore";
import projectStore from "@/store/modules/projectStore";
import languagesStore from "@/store/modules/diplomas/languagesStore";
import itvdnStore from "@/store/modules/diplomas/itvdnStore";
import progStore from "@/store/modules/diplomas/progStore";
import knuteStore from "@/store/modules/diplomas/knuteStore";

export default createStore({
  modules: { otherStore, englishStore, englishdomStore, pmStore, designerStore, databaseStore, javaStore, phpStore, pythonStore, rubyStore,
    htmlStore, javascriptStore, angularStore, reactStore, frontStore, projectStore, languagesStore, itvdnStore, progStore, knuteStore}
})