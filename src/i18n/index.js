import {createI18n} from "vue-i18n"
// import {createI18n} from "vue-i18n/dist/vue-i18n.esm-bundler.js"
import en from "./locales/en.json"
import ua from "./locales/ua.json"

export default createI18n({
    locale: 'en',
    fallbackLocale: 'en',
    legacy: false,
    globalInjection: true,
    messages: { en, ua }
})