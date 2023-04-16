import { GetterTree } from "vuex";
import { IState } from "@/store/types";

const state = {
    isAuthenticated: false,
    currentUser: null,
    loginStore:
        [
            {
                id: 1,
                name: "Anatolii",
                surname: "Zorin",
                email: "zorg@gmail.com",
                password: "1234qwer",
                birthdate: "30.04.1976",
                regDate: "30.03.2023",
                admin: true
            },
            {
                id: 2,
                name: "Olga",
                surname: "Zorina",
                email: "dir@gmail.com",
                password: "121121",
                birthdate: "24.05.1951",
                regDate: "30.03.2023",
                admin: true
            },
            {
                id: 3,
                name: "Petr",
                surname: "Zorin",
                email: "reg@gmail.com",
                password: "zorg121",
                birthdate: "11.08.1944",
                regDate: "30.03.2023",
                admin: true
            },
            {
                id: 4,
                name: "Unknown",
                surname: "Person",
                email: "",
                password: "",
                birthdate: "07.07.2020",
                regDate: "15.04.2023",
                admin: true
            },
        ]
};
const getters: GetterTree<IState, IState> = {
    isAuthenticated: (state) => state.isAuthenticated,
    getUserByEmailAndPassword: (state) => (email, password) => {
        return state.loginStore.find(user => user.email === email && user.password === password);
    },
    getCurrentUser: (state) => state.currentUser
};
const mutations = {
    setUserCredentials: (state, { email, password }) => {
        const user = state.loginStore.find(user => user.email === email && user.password === password);
        if (user) {
            user.isAuthenticated = true;
            state.currentUser = user;
        } else {
            state.currentUser = null; // очищаем currentUser, если пользователь не найден
        }
        state.isAuthenticated = Boolean(user); // устанавливаем isAuthenticated в зависимости от результата поиска пользователя
    },
    setIsAuthenticated: (state, isAuthenticated) => {
        state.isAuthenticated = isAuthenticated;
    },
};
const actions = {
    login: ({ getters, commit }, { email, password }) => {
        const user = getters.getUserByEmailAndPassword(email, password);
        if (user) {
            commit('setUserCredentials', { email, password });
            commit('setIsAuthenticated', true);
        }
    },
};
export default {
    state,
    getters,
    mutations,
    actions
};