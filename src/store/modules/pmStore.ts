const state = {
pmStore:
  [
    {
        id: 1,
        title: "Introduction to PM",
        regnumber: "TP84744235",
        grade: "938 / 1000",
        examdate: "27.04.2021",
        image: "https://testprovider.com/ru/search-certificate/tp84744235",
    },
    {
        id: 2,
        title: "Scrum and PM Methodologies",
        regnumber: "TP14623786",
        grade: "1000 / 1000",
        examdate: "15.02.2021",
        image: "https://testprovider.com/ru/search-certificate/tp14623786",
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