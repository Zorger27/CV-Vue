const state = {
  rubyStore:
    [
      {
        id: 1,
        title_en: "Ruby Essential",
        title_ua: "Ruby Базовий",
        title_es: "Ruby Básico",
        regnumber: "TP72010831",
        grade: "1000 / 1000",
        examdate: "21.11.2022",
        image: "https://testprovider.com/ru/search-certificate/tp72010831",
      },
      {
        id: 2,
        title_en: "Ruby Advanсed",
        title_ua: "Ruby Поглиблений",
        title_es: "Ruby Avanzado",
        regnumber: "TP80374246",
        grade: "1000 / 1000",
        examdate: "22.11.2022",
        image: "https://testprovider.com/ru/search-certificate/tp80374246",
      },
      {
        id: 3,
        title_en: "Ruby on Rails",
        title_ua: "Ruby on Rails",
        title_es: "Ruby on Rails",
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