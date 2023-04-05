import { GetterTree } from "vuex";
import { IState } from "@/store/types";

const state = {
    isAuthenticated: false,
    loginStore:
        [
            {
                email: "zorg@gmail.com",
                password: "1234qwer",
            },
            {
                email: "dir@gmail.com",
                password: "121121",
            },
            {
                email: "reg@gmail.com",
                password: "zorg121",
            },
        ]
};
const getters: GetterTree<IState, IState> = {
    isAuthenticated: (state) => state.isAuthenticated,
    getUserByEmailAndPassword: (state) => (email, password) => {
        return state.loginStore.find(user => user.email === email && user.password === password);
    }
};
const mutations = {
    setUserCredentials: (state, { email, password }) => {
        const user = state.loginStore.find(user => user.email === email && user.password === password);
        if (user) {
            user.isAuthenticated = true;
        }
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
        //     console.log('Пользователь авторизован');
        // } else {
        //     console.log('Ошибка авторизации');
        }
    },
};
export default {
    state,
    getters,
    mutations,
    actions
};