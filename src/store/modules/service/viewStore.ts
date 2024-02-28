interface ViewState {
  currentView: string;
}

const state: ViewState = {
  // currentView: 'normal', // начальное значение, может быть 'normal' или 'alternative'
  currentView: localStorage.getItem('viewMode') || 'normal', // Используем сохраненное значение или 'normal'
};

const getters = {
  // Возвращаем путь к изображению лого в зависимости от текущего состояния
  getFooterLogoImage: (state: ViewState) => {
    return state.currentView === 'normal'
      ? require('@/assets/img/menu2/footer-logo2.svg')
      : require('@/assets/img/menu1/footer-logo.svg');
  },
  getHeaderImage: (state: ViewState) => {
    return state.currentView === 'normal'
      ? require('@/assets/img/menu2/header-logo2.svg')
      : require('@/assets/img/menu1/header-logo.svg');
  },
  getExtraImage: (state: ViewState) => {
    return state.currentView === 'normal'
      ? require('@/assets/img/menu2/extra2.svg')
      : require('@/assets/img/menu1/login4.svg');
  },
  getCertificatesImage: (state: ViewState) => {
    return state.currentView === 'normal'
      ? require('@/assets/img/menu2/certif2.svg')
      : require('@/assets/img/menu1/certif1.svg');
  },
};

const mutations = {
  toggleView(state: ViewState) {
    state.currentView = state.currentView === 'normal' ? 'alternative' : 'normal';
    localStorage.setItem('viewMode', state.currentView); // Сохраняем изменение в localStorage
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