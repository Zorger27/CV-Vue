import {createI18n} from "vue-i18n"
import en from "./locales/en.json"
import ua from "./locales/ua.json"
import es from "./locales/es.json"

export default createI18n({
    locale: 'en',
    fallbackLocale: 'en',
    legacy: false,
    globalInjection: true,
    messages: { en, ua, es }
})