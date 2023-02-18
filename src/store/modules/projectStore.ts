const state = {
projectStore:
  [
      {
          id: 1,
          title: "MY Curriculum VITAE",
          type: "Landing page",
          techno: "HTML5, CSS3, Grid CSS, FlexBox CSS",
          sourcelink: "https://github.com/Zorger27/zorger27.github.io",
          demolink: "https://zorger27.github.io"
      },
      {
          id: 2,
          title: "MY Curriculum VITAE",
          type: "Single page application",
          techno: "Vue.JS, VueX, HTML5, CSS3, TypeScript",
          sourcelink: "https://github.com/Zorger27/CV-Vue",
          demolink: ""
      },
      {
          id: 3,
          title: "Website template for a blogger",
          type: "Single page application",
          techno: "Vue.JS, VueX, HTML5, CSS3, TypeScript",
          sourcelink: "https://github.com/Zorger27/Blog-site",
          demolink: ""
      },
      {
          id: 4,
          title: "Typical JavaScript interview tasks",
          type: "WEB-application",
          techno: "HTML5, CSS3, FlexBox CSS, JavaScript",
          sourcelink: "https://github.com/Zorger27/Typical-JS-tasks",
          demolink: ""
      },
      {
          id: 5,
          title: "Memory game",
          type: "WEB-application",
          techno: "HTML5, CSS3, FlexBox CSS, JavaScript",
          sourcelink: "https://github.com/Zorger27/Memory-game",
          demolink: ""
      },
      {
          id: 6,
          title: "To-Do list",
          type: "WEB-application",
          techno: "HTML5, CSS3, FlexBox CSS, JavaScript",
          sourcelink: "https://github.com/Zorger27/To-Do-list",
          demolink: ""
      },
      {
          id: 7,
          title: "Calculator",
          type: "WEB-application",
          techno: "HTML5, CSS3, JavaScript",
          sourcelink: "https://github.com/Zorger27/calculator",
          demolink: ""
      },
      {
          id: 8,
          title: "Sidebar Menu",
          type: "WEB-application",
          techno: "HTML5, CSS3, Boxicons CSS, JavaScript",
          sourcelink: "https://github.com/Zorger27/Sidebar-Menu",
          demolink: ""
      }
  ]
};
const getters = {
    // getById: (state, getters) => (id) => {
    //     return state.otherStore.find(item => item.id === parseInt(id));
    // }
};
const mutations = {};
const actions = {};
export default {
    state,
    getters,
    mutations,
    actions
};