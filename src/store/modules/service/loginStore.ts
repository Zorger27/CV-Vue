const state = {
    loginStore:
        [
            {
                id: 1,
                currentUser: "Anatolii",
                email: "z27@g.com",
                password: "1234567",
                date: "30.03.2023",
                isAuthenticated: true,
            },
            {
                id: 2,
                currentUser: "Tolya",
                email: "dir@gmail.com",
                password: "121121",
                date: "30.03.2023",
                isAuthenticated: true,
            },
            {
                id: 3,
                currentUser: "Zorger121",
                email: "reg@gmail.com",
                password: "zorg121",
                date: "30.03.2023",
                isAuthenticated: true,
            },

        ]
};
const getters = {
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
            console.log("Пользователь авторизован");
        } else {
            console.log("Ошибка авторизации");
        }
    }
};
export default {
    state,
    getters,
    mutations,
    actions
};