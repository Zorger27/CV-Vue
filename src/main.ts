import {createApp} from 'vue';
// import {createApp} from 'vue/dist/vue.esm-bundler';
import App from './App.vue';
import router from './router';
import store from './store';
import i18n from './i18n';
// import { createI18n } from 'vue-i18n'

createApp(App).use(store).use(router).use(i18n).mount('#app')
