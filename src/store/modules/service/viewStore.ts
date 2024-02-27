const state = {
  currentView: 'normal', // начальное значение, может быть 'normal' или 'alternative'
};

const getters = {
  // Возвращаем путь к изображению лого в зависимости от текущего состояния
  getFooterLogoImage: (state) => {
    return state.currentView === 'normal'
      ? require('@/assets/img/menu2/footer-logo2.svg')
      : require('@/assets/img/menu1/footer-logo.svg');
  },
  getHeaderImage: (state) => {
    return state.currentView === 'normal'
      ? require('@/assets/img/menu2/header-logo2.svg')
      : require('@/assets/img/menu1/header-logo.svg');
  },
  getExtraImage: (state) => {
    return state.currentView === 'normal'
      ? require('@/assets/img/menu2/extra2.svg')
      : require('@/assets/img/menu1/login4.svg');
  },
  getCertificatesImage: (state) => {
    return state.currentView === 'normal'
      ? require('@/assets/img/menu2/certif2.svg')
      : require('@/assets/img/menu1/certif1.svg');
  },
};

const mutations = {
  toggleView(state) {
    state.currentView = state.currentView === 'normal' ? 'alternative' : 'normal';
  },
};

const actions = {
  toggleImages({ commit }) {
    commit('toggleView');
  },
};


export default {
  state,
  getters,
  mutations,
  actions
};