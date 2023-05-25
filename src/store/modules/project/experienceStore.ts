const state = {
  experienceStore:
    [
      {
        id: 1,
        data_start: "13.01.2023",
        data_finish_en: "Until now",
        data_finish_ua: "Дотепер",
        data_finish_es: "Hasta ahora",
        company_en: "Self Employed",
        company_ua: "Самозайнятий",
        company_es: "Trabajador por cuenta propia",
        job_en: "Web Developer (Vue.js)",
        job_ua: "Веб-розробник (Vue.js)",
        job_es: "Desarrollador web (Vue.js)",
        main_duties_en: "Creation and maintenance of sites and web applications.",
        main_duties_ua: "Створення та підтримка сайтів та веб-додатків.",
        main_duties_es: "Creación y mantenimiento de sitios y aplicaciones web.",
        related_duties_en: "Design (Web & UI/UX Design) and Digital marketing.",
        related_duties_ua: "Дизайн (веб і UI/UX дизайн) і Цифровий маркетинг.",
        related_duties_es: "Diseño (Web & UI/UX diseño) y Marketing digital.",
        interesting_tasks_en: "Website design development. Creation of a site prototype. Building a website (SPA) on Vue.js with using TypeScript. Connecting Google Analytics 4.0 for a Vue.js website. Porting programs written in pure JavaScript code to Vue.js, which uses TypeScript.",
        interesting_tasks_ua: "Розробка дизайну веб-сайту. Створення прототипу сайту. Створення веб-сайту на Vue.js з використанням TypeScript. Підключення Google Analytics 4.0 для веб-сайту на Vue.js. Перенесення програм, написаних на чистому JavaScript коді у Vue.js, де використовується TypeScript.",
        interesting_tasks_es: "Desarrollo de diseño de sitios web. Creación de un prototipo de sitio. Creación de un sitio web (SPA) en Vue.js con el uso de TypeScript. Conectando Google Analytics 4.0 para un sitio web de Vue.js. Portar programas escritos en código JavaScript puro a Vue.js, que usa TypeScript.",
        skills: "Front-end Development, JavaScript, Vue.js, HTML, CSS3, XML, Angular, TypeScript, Node.js, Cybersecurity, Web Designer, UI/UX Designer, Adobe Photoshop, Adobe Lightroom, Adobe Illustrator, Git, PostgreSQL, Object-oriented programming, IT operations, Google Analytics, Agile, Business Analysis, Digital marketing, Search Engine Marketing (SEM), Search Engine Optimization, Strategic Planning."
      },
      {
        id: 2,
        data_start: "27.12.2016",
        data_finish_en: "13.01.2023",
        data_finish_ua: "13.01.2023",
        data_finish_es: "13.01.2023",
        company_en: "Yugov & D Ltd",
        company_ua: "ТОВ \"Югов & Д\"",
        company_es: "\"Yugov & D\" SRL",
        job_en: "CEO",
        job_ua: "Генеральний директор",
        job_es: "CEO",
        main_duties_en: "Full administrative management of the enterprise.",
        main_duties_ua: "Повне адміністративне управління підприємством.",
        main_duties_es: "Gestión administrativa completa de la empresa.",
        related_duties_en: "Digital marketing, design (Web & UI/UX Design) and front-end development.",
        related_duties_ua: "Цифровий маркетинг, дизайн (веб і UI/UX дизайн) і фронтенд розробка.",
        related_duties_es: "Marketing digital, diseño (Web & UI/UX diseño) y desarrollo front-end.",
        interesting_tasks_en: "Creation of a company logo. Website layout creation. Work with CMS Joomla. Setting up and launching advertising campaigns in Google, YouTube, Facebook, Instagram. Creation of informative video clips for YouTube. Connecting the site with the Google Merchant Center. Registration in Google Map. Programming the coffee roaster. Setting up employees' computers. Setting up a local network.",
        interesting_tasks_ua: "Створення логотипу компанії. Створення макету сайту. Робота з CMS Joomla. Налаштування та запуск рекламних кампаній в Google, YouTube, Facebook, Instagram. Створення інформаційних відеокліпів для YouTube. Підключення сайту до Google Merchant Center. Реєстрація в Google Map. Програмування роустера для обсмажування кави. Налаштування комп'ютерів співробітників. Налаштування локальної мережі.",
        interesting_tasks_es: "Creación de un logo de empresa. Creación de diseño de sitio web. Trabajar con CMS Joomla. Configuración y lanzamiento de campañas publicitarias en Google, YouTube, Facebook, Instagram. Creación de videoclips informativos para YouTube. Conexión del sitio con Google Merchant Center. Registro en Google Map. Programación del tostador de café. Configuración de las computadoras de los empleados. Configuración de una red local.",
        skills: "Front-end Development, JavaScript, Vue.js, HTML, CSS3, PHP, Web Designer, UI/UX Designer, Adobe Photoshop, Adobe Lightroom, Adobe Illustrator, Git, IT operations, Google Adwords, Google Analytics, Project Management, Accounting, Business Analysis, Digital marketing, Search Engine Marketing (SEM), Search Engine Optimization, Strategic Planning."
      },
      {
        id: 3,
        data_start: "15.01.2001",
        data_finish_en: "13.01.2023",
        data_finish_ua: "13.01.2023",
        data_finish_es: "13.01.2023",
        company_en: "LIS Ltd",
        company_ua: "ТОВ \"ЛИС\"",
        company_es: "\"LYS\" SRL",
        job_en: "CEO",
        job_ua: "Генеральний директор",
        job_es: "CEO",
        main_duties_en: "Full administrative management of the enterprise.",
        main_duties_ua: "Повне адміністративне управління підприємством.",
        main_duties_es: "Gestión administrativa completa de la empresa.",
        related_duties_en: "Digital marketing, web design and front-end development.",
        related_duties_ua: "Цифровий маркетинг, веб-дизайн і фронтенд розробка.",
        related_duties_es: "Marketing digital, diseño web y desarrollo front-end.",
        interesting_tasks_en: "Creation of a company logo. Website layout creation. Work with CMS Wordpress. Translation of vending machine messages from German into Ukrainian (translation was done using Assembler). Setting up and launching advertising campaigns in Google, YouTube. Registration in Google Map. Development of accounting for vending machines. Setting up employees' computers. Setting up a local network.",
        interesting_tasks_ua: "Створення логотипу компанії. Створення макету сайту. Робота з CMS Wordpress. Переклад повідомлень торговельного автомата з німецької мови на українську мову (переклад робився за допомогою Assembler). Налаштування та запуск рекламних кампаній в Google, YouTube. Реєстрація в Google Map. Розробка бухгалтерського обліку для торгових автоматів. Налаштування комп'ютерів співробітників. Налаштування локальної мережі.",
        interesting_tasks_es: "Creación de un logo de empresa. Creación de diseño de sitio web. Trabajar con CMS Wordpress. Traducción de mensajes de máquinas expendedoras del alemán al ucraniano (traducción realizada con Assembler). Configuración y lanzamiento de campañas publicitarias en Google, YouTube. Registro en Google Map. Desarrollo de contabilidad para máquinas expendedoras. Configuración de las computadoras de los empleados. Configuración de una red local.",
        skills: "Front-end Development, CSS3, PHP, Web Designer, UI/UX Designer, Adobe Photoshop, Adobe Lightroom, Adobe Illustrator, Git, WordPress, IT operations, Google Adwords, Google Analytics, Project Management, Accounting, Business Analysis, Digital marketing, Search Engine Marketing (SEM), Search Engine Optimization, Strategic Planning."
      },
    ]
};
const getters = {};
const mutations = {};
const actions = {};
export default {
  state,
  getters,
  mutations,
  actions
};