const state = {
reactStore:
  [
      {
          id: 1,
          title: "React Essential",
          regnumber: "TP20433727",
          grade: "1000 / 1000",
          examdate: "05.08.2021",
          image: "https://testprovider.com/ru/search-certificate/tp20433727",
      },
      {
          id: 2,
          title: "React Advanced",
          regnumber: "TP74208807",
          grade: "1000 / 1000",
          examdate: "09.08.2021",
          image: "https://testprovider.com/ru/search-certificate/tp74208807",
      },
      {
          id: 3,
          title: "React Native",
          regnumber: "TP06814422",
          grade: "1000 / 1000",
          examdate: "19.08.2021",
          image: "https://testprovider.com/ru/search-certificate/tp06814422",
      },
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