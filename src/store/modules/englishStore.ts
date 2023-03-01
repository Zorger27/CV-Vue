const state = {
englishStore:
  [
      {
          id: 1,
          title: "English for beginners",
          regnumber: "Elementary",
          examdate: "05.11.2021",
          image: "https://www.englishdom.com/cn/a7aad5cd"
      },
      {
          id: 2,
          title: "Conversational English",
          regnumber: "Pre-Intermediate",
          examdate: "18.11.2021",
          image: "https://www.englishdom.com/cn/c100d53f"
      },
      {
          id: 3,
          title: "English for traveling",
          regnumber: "Pre-Intermediate",
          examdate: "24.11.2021",
          image: "https://www.englishdom.com/cn/e9e057a3"
      },
      {
        id: 4,
        title: "English for IT",
        regnumber: "Pre-Intermediate",
        examdate: "01.12.2021",
        image: "https://www.englishdom.com/cn/808f94fa"
      },
      {
          id: 5,
          title: "Interview in English",
          regnumber: "Pre-Intermediate",
          examdate: "07.12.2021",
          image: "https://www.englishdom.com/cn/478f8e14"
      },
      {
        id: 6,
        title: "Business English",
        regnumber: "Pre-Intermediate",
        examdate: "15.12.2021",
        image: "https://www.englishdom.com/cn/0600cfd1"
      },
      {
        id: 7,
        title: "Intermediate level of English",
        regnumber: "Intermediate",
        examdate: "09.01.2022",
        image: "https://www.englishdom.com/cn/9d6c54e8"
      },
      {
          id: 8,
          title: "Irregular Verbs",
          regnumber: "Intermediate",
          examdate: "12.01.2022",
          image: "https://www.englishdom.com/cn/21258ee6"
      },
      {
          id: 9,
          title: "English with native speaker",
          regnumber: "Intermediate",
          examdate: "19.01.2022",
          image: "https://www.englishdom.com/cn/7d490f31"
      },
      {
        id: 10,
        title: "English for advanced",
        regnumber: "Upper-Intermediate",
        examdate: "14.02.2022",
        image: "https://www.englishdom.com/cn/fbc6541a"
      }
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