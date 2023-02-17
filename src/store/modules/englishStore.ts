const state = {
englishStore:
  [
    {
        id: 1,
        title: "English for IT",
        regnumber: "Pre-Intermediate",
        examdate: "01.12.2021",
        // image: require("~https://www.englishdom.com/cn/808f94fa"),
        // image: "<%= BASE_URL %>https://www.englishdom.com/cn/808f94fa"
        // require(`../assets/profile_screens/${filename}`) // Works
        // <img :src="`${project.img_url}`" alt="People" />
        image: "https://www.englishdom.com/cn/808f94fa"
    },
    {
        id: 2,
        title: "Business English",
        regnumber: "Pre-Intermediate",
        examdate: "15.12.2021",
        image: "https://www.englishdom.com/cn/0600cfd1"
    },
    {
        id: 3,
        title: "Intermediate level of English",
        regnumber: "Intermediate",
        examdate: "09.01.2022",
        image: "https://www.englishdom.com/cn/9d6c54e8"
    },
    {
        id: 4,
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