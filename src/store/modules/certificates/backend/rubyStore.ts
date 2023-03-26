const state = {
rubyStore:
  [
      {
          id: 1,
          title: "Ruby Essential",
          regnumber: "TP72010831",
          grade: "1000 / 1000",
          examdate: "21.11.2022",
          image: "https://testprovider.com/ru/search-certificate/tp72010831",
      },
      {
          id: 2,
          title: "Ruby Advanсed",
          regnumber: "TP80374246",
          grade: "1000 / 1000",
          examdate: "22.11.2022",
          image: "https://testprovider.com/ru/search-certificate/tp80374246",
      },
      {
          id: 3,
          title: "Ruby on Rails",
          regnumber: "TP69956445",
          grade: "1000 / 1000",
          examdate: "29.11.2022",
          image: "https://testprovider.com/ru/search-certificate/tp69956445",
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