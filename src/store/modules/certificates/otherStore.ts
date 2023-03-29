const state = {
    otherStore:
        [
            {
                id: 1,
                title: "Git basics",
                titleua: "Основи Git",
                regnumber: "TP37589708",
                grade: "1000 / 1000",
                gradeua: "1000 / 1000",
                examdate: "18.03.2021",
                image: "https://testprovider.com/ru/search-certificate/tp37589708",
            },
            {
                id: 2,
                title: "Linux administration basics",
                titleua: "Основи адміністрування Linux",
                regnumber: "TP03316433",
                grade: "950 / 1000",
                gradeua: "950 / 1000",
                examdate: "12.10.2021",
                image: "https://testprovider.com/ru/search-certificate/tp03316433",
            },
            {
                id: 3,
                title: "Golang",
                titleua: "Golang",
                regnumber: "TP09903227",
                grade: "974 / 1000",
                gradeua: "974 / 1000",
                examdate: "22.10.2021",
                image: "https://testprovider.com/ru/search-certificate/tp09903227",
            },
            {
                id: 4,
                title: "Google Display Network",
                titleua: "Медійна мережа Google",
                regnumber: "45386343",
                grade: "Successfully passed the exam",
                gradeua: "Успішно складено іспит",
                examdate: "18.02.2020",
                image: "/assets/certificates/other/04_Google_Display_Network_Ads.jpg",
            },
            {
                id: 5,
                title: "Google Shopping Campaign",
                titleua: "Торгові компанії Google",
                regnumber: "45382771",
                grade: "Successfully passed the exam",
                gradeua: "Успішно складено іспит",
                examdate: "20.02.2020",
                image: "/assets/certificates/other/05_Google_Shopping_Campaign.jpg",
            },
            {
                id: 6,
                title: "Google Search Campaign",
                titleua: "Пошукові компанії Google",
                regnumber: "45385551",
                grade: "Successfully passed the exam",
                gradeua: "Успішно складено іспит",
                examdate: "16.03.2020",
                image: "/assets/certificates/other/06_Google_Search_Campaign.jpg",
            },
            {
                id: 7,
                title: "Google Video Campaign",
                titleua: "Відеокомпанії Google",
                regnumber: "45785209",
                grade: "Successfully passed the exam",
                gradeua: "Успішно складено іспит",
                examdate: "17.03.2020",
                image: "/assets/certificates/other/07_Google_Video_Campaign.jpg",
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