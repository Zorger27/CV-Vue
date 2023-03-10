const state = {
progStore:
  [
      {
          id: 1,
          title: "Web-Designer (UI/UX Designer)",
          grade: "successfully completed",
          examdate: "06.07.2017",
          image: "/assets/doc/designer.jpg",
          // image: "https://zorger27.github.io/img/designer.jpg",
      },
      {
          id: 2,
          title: "Frontend Developer",
          grade: "successfully completed",
          examdate: "23.10.2017",
          image: "/assets/doc/frontend.jpg",
          // image: "https://zorger27.github.io/img/frontend.jpg",
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