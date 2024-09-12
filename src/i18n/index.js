import {createI18n} from "vue-i18n";
import en from './locales/en.json';
import uk from './locales/uk.json';
import es from './locales/es.json';


export default createI18n({
    locale: 'en', // Язык по умолчанию
    fallbackLocale: 'en', // Запасной язык
    legacy: false, // Современный режим использования i18n
    globalInjection: true, // Автоматическая инъекция $t
    messages: { en, uk, es } // Загружаем переводы
});
