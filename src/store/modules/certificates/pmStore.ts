const state = {
    pmStore:
        [
            {
                id: 1,
                title: "Introduction to PM",
                titleua: "Введення в управління проектами",
                regnumber: "TP84744235",
                grade: "938 / 1000",
                gradeua: "938 / 1000",
                examdate: "27.04.2021",
                image: "https://testprovider.com/ru/search-certificate/tp84744235",
            },
            {
                id: 2,
                title: "Scrum and PM Methodologies",
                titleua: "Scrum та методології управління проектами",
                regnumber: "TP14623786",
                grade: "1000 / 1000",
                gradeua: "1000 / 1000",
                examdate: "15.02.2021",
                image: "https://testprovider.com/ru/search-certificate/tp14623786",
            },
            {
                id: 3,
                title: "Critical Thinking",
                titleua: "Критичне мислення",
                regnumber: "ASweZoJp",
                grade: "Successfully completed",
                gradeua: "Успішно завершено",
                examdate: "07.12.2020",
                image: "/assets/certificates/pm/Critical_Thinking.jpg",
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