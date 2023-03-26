const state = {
otherStore:
  [
    {
        id: 1,
        title: "Git basics",
        regnumber: "TP37589708",
        grade: "1000 / 1000",
        examdate: "18.03.2021",
        image: "https://testprovider.com/ru/search-certificate/tp37589708",
    },
    {
        id: 2,
        title: "Linux administration basics",
        regnumber: "TP03316433",
        grade: "950 / 1000",
        examdate: "12.10.2021",
        image: "https://testprovider.com/ru/search-certificate/tp03316433",
    },
    {
        id: 3,
        title: "Golang",
        regnumber: "TP09903227",
        grade: "974 / 1000",
        examdate: "22.10.2021",
        image: "https://testprovider.com/ru/search-certificate/tp09903227",
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