const state = {
  pmStore:
    [
      {
        id: 1,
        title_en: "Introduction to Project Management",
        title_ua: "Введення в управління проектами",
        title_es: "Introducción a la gestión de proyectos",
        regnumber: "TP84744235",
        grade_en: "938 / 1000",
        grade_ua: "938 / 1000",
        grade_es: "938 / 1000",
        examdate: "27.04.2021",
        image: "https://testprovider.com/ru/search-certificate/tp84744235",
      },
      {
        id: 2,
        title_en: "Scrum and PM Methodologies",
        title_ua: "Scrum та методології управління проектами",
        title_es: "Scrum y metodologías de gestión de proyectos",
        regnumber: "TP14623786",
        grade_en: "1000 / 1000",
        grade_ua: "1000 / 1000",
        grade_es: "1000 / 1000",
        examdate: "15.02.2021",
        image: "https://testprovider.com/ru/search-certificate/tp14623786",
      },
      {
        id: 3,
        title_en: "Critical Thinking",
        title_ua: "Критичне мислення",
        title_es: "Pensamiento crítico",
        regnumber: "ASweZoJp",
        grade_en: "Successfully completed",
        grade_ua: "Успішно завершено",
        grade_es: "Completado con éxito",
        examdate: "07.12.2020",
        image: "/assets/certificates/pm/03_Critical_Thinking.webp",
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