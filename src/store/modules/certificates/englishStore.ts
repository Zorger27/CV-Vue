const state = {
  englishStore:
    [
      {
        id: 1,
        title_en: "English for kids",
        title_ua: "Англійська для дітей",
        title_es: "Inglés para niños",
        regnumber: "Starter",
        grade_en: "Successfully completed",
        grade_ua: "Успішно завершено",
        grade_es: "Completado con éxito",
        examdate: "11.07.2023",
        image: "https://www.englishdom.com/cn/55a98dad"
      },
      {
        id: 2,
        title_en: "English for beginners",
        title_ua: "Англійська для початківців",
        title_es: "Inglés para principiantes",
        regnumber: "Elementary",
        grade_en: "Successfully completed",
        grade_ua: "Успішно завершено",
        grade_es: "Completado con éxito",
        examdate: "05.11.2021",
        image: "https://www.englishdom.com/cn/a7aad5cd"
      },
      {
        id: 3,
        title_en: "Beginner for teenagers",
        title_ua: "Початківець для підлітків",
        title_es: "Principiante para adolescentes",
        regnumber: "Elementary",
        grade_en: "Successfully completed",
        grade_ua: "Успішно завершено",
        grade_es: "Completado con éxito",
        examdate: "23.07.2023",
        image: "https://www.englishdom.com/cn/3cc64ef4"
      },
      {
        id: 4,
        title_en: "Conversational English",
        title_ua: "Розмовна англійська",
        title_es: "Inglés conversacional",
        regnumber: "Pre-Intermediate",
        grade_en: "Successfully completed",
        grade_ua: "Успішно завершено",
        grade_es: "Completado con éxito",
        examdate: "18.11.2021",
        image: "https://www.englishdom.com/cn/c100d53f"
      },
      {
        id: 5,
        title_en: "Conversational for teenagers",
        title_ua: "Розмовна для підлітків",
        title_es: "Conversacional para adolescentes",
        regnumber: "Pre-Intermediate",
        grade_en: "Successfully completed",
        grade_ua: "Успішно завершено",
        grade_es: "Completado con éxito",
        examdate: "04.08.2023",
        image: "https://www.englishdom.com/cn/5a6c4e06"
      },
      {
        id: 6,
        title_en: "Preparation for the school exam",
        title_ua: "Підготовка до шкільного іспиту",
        title_es: "Preparación para el examen escolar",
        regnumber: "Pre-Intermediate",
        grade_en: "Successfully completed",
        grade_ua: "Успішно завершено",
        grade_es: "Completado con éxito",
        examdate: "26.08.2023",
        image: "https://www.englishdom.com/cn/60aacf23"
      },
      {
        id: 7,
        title_en: "English for traveling",
        title_ua: "Англійська для подорожей",
        title_es: "Inglés para viajar",
        regnumber: "Pre-Intermediate",
        grade_en: "Successfully completed",
        grade_ua: "Успішно завершено",
        grade_es: "Completado con éxito",
        examdate: "24.11.2021",
        image: "https://www.englishdom.com/cn/e9e057a3"
      },
      {
        id: 8,
        title_en: "English for IT",
        title_ua: "Англійська для ІТ",
        title_es: "Inglés para TI",
        regnumber: "Pre-Intermediate",
        grade_en: "Successfully completed",
        grade_ua: "Успішно завершено",
        grade_es: "Completado con éxito",
        examdate: "01.12.2021",
        image: "https://www.englishdom.com/cn/808f94fa"
      },
      {
        id: 9,
        title_en: "Interview in English",
        title_ua: "Співбесіда англійською мовою",
        title_es: "Entrevista en Inglés",
        regnumber: "Pre-Intermediate",
        grade_en: "Successfully completed",
        grade_ua: "Успішно завершено",
        grade_es: "Completado con éxito",
        examdate: "07.12.2021",
        image: "https://www.englishdom.com/cn/478f8e14"
      },
      {
        id: 10,
        title_en: "Business English",
        title_ua: "Ділова англійська",
        title_es: "Inglés de negocios",
        regnumber: "Pre-Intermediate",
        grade_en: "Successfully completed",
        grade_ua: "Успішно завершено",
        grade_es: "Completado con éxito",
        examdate: "15.12.2021",
        image: "https://www.englishdom.com/cn/0600cfd1"
      },
      {
        id: 11,
        title_en: "Intermediate level of English",
        title_ua: "Середній рівень англійської мови",
        title_es: "Nivel intermedio de inglés",
        regnumber: "Intermediate",
        grade_en: "Successfully completed",
        grade_ua: "Успішно завершено",
        grade_es: "Completado con éxito",
        examdate: "09.01.2022",
        image: "https://www.englishdom.com/cn/9d6c54e8"
      },
      {
        id: 12,
        title_en: "Intermediate for teenagers",
        title_ua: "Середній рівень для підлітків",
        title_es: "Intermedio para adolescentes",
        regnumber: "Intermediate",
        grade_en: "Successfully completed",
        grade_ua: "Успішно завершено",
        grade_es: "Completado con éxito",
        examdate: "20.08.2023",
        image: "https://www.englishdom.com/cn/33038d5f"
      },
      {
        id: 13,
        title_en: "Irregular Verbs",
        title_ua: "Неправильні дієслова",
        title_es: "Verbos irregulares",
        regnumber: "Intermediate",
        grade_en: "Successfully completed",
        grade_ua: "Успішно завершено",
        grade_es: "Completado con éxito",
        examdate: "12.01.2022",
        image: "https://www.englishdom.com/cn/21258ee6"
      },
      {
        id: 14,
        title_en: "English with native speaker",
        title_ua: "Англійська з носієм мови",
        title_es: "Inglés con hablante nativo",
        regnumber: "Intermediate",
        grade_en: "Successfully completed",
        grade_ua: "Успішно завершено",
        grade_es: "Completado con éxito",
        examdate: "19.01.2022",
        image: "https://www.englishdom.com/cn/7d490f31"
      },
      {
        id: 15,
        title_en: "English for advanced",
        title_ua: "Англійська Поглиблена",
        title_es: "Inglés para avanzados",
        regnumber: "Upper-Intermediate",
        grade_en: "Successfully completed",
        grade_ua: "Успішно завершено",
        grade_es: "Completado con éxito",
        examdate: "14.02.2022",
        image: "https://www.englishdom.com/cn/fbc6541a"
      }
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