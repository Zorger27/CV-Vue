const state = {
progStore:
  [
      {
          id: 1,
          title: "Web-Designer (UI/UX Designer)",
          grade: "Successfully completed",
          gradeua: "Успішно завершено",
          examdate: "06.07.2017",
          image: "/assets/documents/designer.jpg",
          // image: "https://zorger27.github.io/img/designer.jpg",
      },
      {
          id: 2,
          title: "Frontend Developer",
          grade: "Successfully completed",
          gradeua: "Успішно завершено",
          examdate: "23.10.2017",
          image: "/assets/documents/frontend.jpg",
          // image: "https://zorger27.github.io/img/frontend.jpg",
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