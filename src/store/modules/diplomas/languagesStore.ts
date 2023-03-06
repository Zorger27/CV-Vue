const state = {
languagesStore:
  [
      {
          id: 1,
          title: "English",
          regnumber: "Upper-Intermediate",
          examdate: "14.02.2022",
          image: "https://www.englishdom.com/cn/fbc6541a",
      },
      {
          id: 2,
          title: "Spanish",
          regnumber: "Upper-Intermediate",
          examdate: "05.08.2016",
          image: "/assets/doc/spanish.jpg",
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