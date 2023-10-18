import {createStore} from 'vuex'
import otherStore from "@/store/modules/certificates/otherStore";
import englishStore from "@/store/modules/certificates/englishStore";
import englishdomStore from "@/store/modules/education/englishdomStore";
import pmStore from "@/store/modules/certificates/pmStore";
import designerStore from "@/store/modules/certificates/designerStore";
import databaseStore from "@/store/modules/certificates/databaseStore";
import javaStore from "@/store/modules/certificates/backend/javaStore";
import phpStore from "@/store/modules/certificates/backend/phpStore";
import pythonStore from "@/store/modules/certificates/backend/pythonStore";
import rubyStore from "@/store/modules/certificates/backend/rubyStore";
import htmlStore from "@/store/modules/certificates/frontend/htmlStore";
import javascriptStore from "@/store/modules/certificates/frontend/javascriptStore";
import angularStore from "@/store/modules/certificates/frontend/angularStore";
import reactStore from "@/store/modules/certificates/frontend/reactStore";
import frontStore from "@/store/modules/certificates/frontend/frontStore";
import projectStore from "@/store/modules/project/projectStore";
import languagesStore from "@/store/modules/education/languagesStore";
import itvdnStore from "@/store/modules/education/itvdnStore";
import progStore from "@/store/modules/education/progStore";
import knuteStore from "@/store/modules/education/knuteStore";
// import loginStore from "@/store/modules/service/loginStore";
import infoStore from "@/store/modules/service/infoStore";
import tasksStore from "@/store/modules/project/tasksStore";
import experienceStore from "@/store/modules/project/experienceStore";

export default createStore({
  modules: {
    otherStore,
    englishStore,
    englishdomStore,
    pmStore,
    designerStore,
    databaseStore,
    javaStore,
    phpStore,
    pythonStore,
    rubyStore,
    htmlStore,
    javascriptStore,
    angularStore,
    reactStore,
    frontStore,
    projectStore,
    languagesStore,
    itvdnStore,
    progStore,
    knuteStore,
    // loginStore,
    infoStore,
    tasksStore,
    experienceStore
  }
})