const state = {
englishdomStore:
  [
    {
        id: 1,
        title: "Conversational English",
        regnumber: "Pre-Intermediate",
        examdate: "18.11.2021",
        image: "https://www.englishdom.com/cn/c100d53f"
    },
    {
        id: 2,
        title: "Intermediate level of English",
        regnumber: "Intermediate",
        examdate: "09.01.2022",
        image: "https://www.englishdom.com/cn/9d6c54e8"
    },
    {
        id: 3,
        title: "English for advanced",
        regnumber: "Upper-Intermediate",
        examdate: "14.02.2022",
        image: "https://www.englishdom.com/cn/fbc6541a"
    },
  ]
};
const getters = {
    // getenglishStore: state => state.englishStore
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