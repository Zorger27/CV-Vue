const state = {
knuteStore:
  [
      {
          id: 1,
          title: "Accounting and Related Services (Title side)",
          titleua: "Облік і аудит (Титульна сторона)",
          regnumber: "KB 10682421",
          grade: "Honors degree",
          gradeua: "З відзнакою",
          examdate: "29.01.1999",
          image: "/assets/doc/knute1.jpg",
          // image: "https://zorger27.github.io/img/knute1.jpg",
      },
      {
          id: 2,
          title: "Accounting and Related Services (Backside)",
          titleua: "Облік і аудит (Тильна сторона)",
          regnumber: "KB 10682421",
          grade: "Honors degree",
          gradeua: "З відзнакою",
          examdate: "29.01.1999",
          image: "/assets/doc/knute2.jpg",
          // image: "https://zorger27.github.io/img/knute2.jpg",
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