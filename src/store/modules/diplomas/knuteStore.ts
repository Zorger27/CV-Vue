const state = {
knuteStore:
  [
      {
          id: 1,
          title: "Accounting and Related Services (Title side)",
          regnumber: "KB 10682421",
          grade: "Honors degree",
          examdate: "29.01.1999",
          image: "/doc/knute1.jpg",
      },
      {
          id: 2,
          title: "Accounting and Related Services (Backside)",
          regnumber: "KB 10682421",
          grade: "Honors degree",
          examdate: "29.01.1999",
          image: "/doc/knute2.jpg",
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