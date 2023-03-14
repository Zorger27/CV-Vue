import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueGtag from "vue-gtag-next";

createApp(App).use(VueGtag, {property: {id: "G-RZXQRX8XR0"}}).use(store).use(router).mount('#app')
