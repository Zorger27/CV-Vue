const state = {
databaseStore:
  [
    {
        id: 1,
        title: "Transact SQL",
        regnumber: "TP71375264",
        grade: "909 / 1000",
        examdate: "26.01.2021",
        image: "https://testprovider.com/ru/search-certificate/tp71375264",
    },
    {
        id: 2,
        title: "MySQL",
        regnumber: "TP99655661",
        grade: "1000 / 1000",
        examdate: "23.02.2021",
        image: "https://testprovider.com/ru/search-certificate/tp99655661",
    },
    {
        id: 3,
        title: "PostgreSQL",
        regnumber: "TP84560502",
        grade: "1000 / 1000",
        examdate: "20.04.2021",
        image: "https://testprovider.com/ru/search-certificate/tp84560502",
    },
    {
        id: 4,
        title: "MongoDB",
        regnumber: "TP56496721",
        grade: "1000 / 1000",
        examdate: "21.04.2021",
        image: "https://testprovider.com/ru/search-certificate/tp56496721",
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