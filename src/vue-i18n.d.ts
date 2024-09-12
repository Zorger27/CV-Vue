import 'vue-i18n';
import { I18n } from 'vue-i18n';

// Описание структуры переводов
export interface MessageSchema {
  locale: {
    en: string;
    uk: string;
    es: string;
  },
  header: {
    main: string;
    projects: string;
    education: string;
    experience: string;
    skills: string;
    certificates: {
      cert: string;
      backend: string;
      frontend: string;
      database: string;
      designer: string;
      pm: string;
      english: string;
      other: string;
    },
    about: string;
    extra: string;
  },
  footer: {
    text1: string;
    text2: string;
    text3: string;
    text4: string;
  },
  main: {
    name: string;
    job1: string;
    job2: string;
    job3: string;
    job4: string;
    job5: string;
    job6: string;
    info: {
      text01: string;
      text02: string;
      text02add: string;
      text03: string;
      text04: string;
      text05: string;
      text06: string;
      text07: string;
      text08: string;
      text09: string;
      textEnd1: string;
      textEnd2: string;
      textEnd3: string;
    }
  },
  projects: {
    title: string;
    name: string;
    description: string;
    type: string;
    technologies: string;
    linkCol: string;
    link: string;
    github: string;
  },
  education: {
    title: string;
    knute: string;
    languages: string;
    status: string;
    graduation: string;
    honors: string;
    present: string;
  },
  experience: {
    title: string;
    company: string;
    job: string;
    mainDuties: string;
    relatedDuties: string;
    tasks: string;
    skills: string;
  },
  skills: {
    title: string;
    hard: string;
    soft: {
      sskills: string;
      management: string;
      strategic: string;
      critical: string;
      negotiation: string;
    },
    iq: {
      title: string;
      organization: string;
      date: string;
      report: string;
      test: string;
    },
    special: string;
  },
  cert: {
    titleMain: string;
    title: string;
    number: string;
    grade: string;
    date: string;
    level: string;
    search: string;
    hasNoResults: string;
    itogo: string;
    diplomView: string;
    certificateView: string;
    back: {
      backend: string;
      h1: string;
      java: string;
      java1: string;
      php: string;
      php1: string;
      python: string;
      python1: string;
      ruby: string;
      ruby1: string;
    },
    front: {
      frontend: string;
      h1: string;
      html: string;
      html1: string;
      javascript: string;
      javascript1: string;
      angular: string;
      angular1: string;
      react: string;
      react1: string;
      frontend2: string;
      frontend1: string;
    },
    database: string;
    designer: string;
    project: string;
    other: string;
    english: string;
  },
  about: {
    title: string;
    more01: string;
    more02: string;
    more03: string;
    more04: string;
    more05: string;
    technologies: string;
    name: string;
    version: string;
  },
  login: {
    h1: string;
    h2: string;
    h3: string;
    title: string;
    email: string;
    emailError: string;
    password: string;
    passwordError: string;
    submit: string;
    emailPlc: string;
    passwordPlc: string;
  },
  extra: {
    h1: string;
    h2: string;
    loading: string;
    h1m: {
      calculator: string;
      cryptocur: string;
      exchange: string;
      game: string;
      notes: string;
      tasks: {
        title: string;
        name: string;
        palindrome: string;
        fizzbuzz: string;
        anagram: string;
        findvowels: string;
        fibonacci: string;
      },
      todo: string;
      weather: string;
    },
    calculator: {
      title: string;
      standart: string;
      accounting: string;
      finance: string;
    },
    cryptocur: {
      title: string;
      h1: string;
      name: string;
      price: string;
    },
    graphics: {
      title: string;
      cube: string;
      cubejs: string;
      cube3d: string;
      creep3d: string;
      titles: {
        weatherStart: string;
        weatherClose: string;
        currencyStart: string;
        currencyClose: string;
        cryptosStart: string;
        cryptosClose: string;
      }
    },
    exchange: {
      title: string;
      bank: string;
      nbu: string;
      code: string;
      currency: string;
      rate: string;
      purchase: string;
      sale: string;
      uah: string;
      usd: string;
    },
    game: {
      title: string;
      memory: {
        name: string;
        rulesH2: string;
        rules: string;
        luck: string;
        newGame: string;
        playAgain: string;
      }
    },
    notes: {
      title: string;
      addNote: string;
      add: string;
      note: string;
      modified: string;
      actions: string;
      edit: string;
      delete: string;
      deleteMsg: string;
      deleteAll: string;
    },
    tasks: {
      title: string;
      linkJs: string;
      linkVue: string;
      fibonacci: {
        fibDes01: string;
        fibDes02: string;
        fibDes03: string;
        fibDes04: string;
        fibDes05: string;
      },
      anagram: {
        anDes01: string;
        anDes02: string;
        anDes03: string;
        anDes04: string;
        anDes05: string;
        anDes06: string;
        anDes07: string;
        anDes08: string;
        anDes09: string;
        anDes10: string;
        anDes11: string;
      },
      findvowels: {
        findDes01: string;
        findDes02: string;
        findDes03: string;
        findDes04: string;
        findDes05: string;
      },
      fizzbuzz: {
        fizzDes01: string;
        fizzDes02: string;
        fizzDes03: string;
        fizzDes04: string;
        fizzDes05: string;
        fizzDes06: string;
        fizzDes07: string;
      },
      palindrome: {
        palDes01: string;
        palDes02: string;
        palDes03: string;
        palDes04: string;
        palDes05: string;
        palDes06: string;
        palDes07: string;
      }
    },
    todo: {
      title: string;
      addTask: string;
      add: string;
      task: string;
      status: string;
      actions: string;
      edit: string;
      delete: string;
      deleteMsg: string;
      deleteAll: string;
    },
    weather: {
      title1: string;
      title2: string;
      h1: string;
      h2: string;
      city: string;
      get: string;
      btn: string;
      loading: string;
      cities: {
        Kyiv: string;
        Odessa: string;
        Kharkiv: string;
        Dubai: string;
        Antalya: string;
        Shanghai: string;
        Benidorm: string;
        Valencia: string;
      },
      country: string;
      sunrise: string;
      sunset: string;
      description: string;
      temp: string;
      feels: string;
      tempMin: string;
      tempMax: string;
      speed: string;
      direction: string;
      humidity: string;
      pressure: string;
      error: string;
      unknownCity: string;
      unknownCountry: string;
      indicator: string;
      value: string;
    },
    ai: {
      title: string;
      picsum: {
        title: string;
        size: string;
        count: string;
        max: string;
        create: string;
        clear: string;
        gen: string;
        more01: string;
        more02: string;
        more03: string;
        more04: string;
      },
      pixabay: {
        title: string;
        info01: string;
        info02: string;
        info03: string;
        info04: string;
        theme1: string;
        theme2: string;
        count: string;
        max: string;
        type: string;
        photo: string;
        video: string;
        create: string;
        clear: string;
        gen1: string;
        gen2: string;
      }
    }
  }
}

// Подключение схемы к I18n
declare module 'vue-i18n' {
  export interface DefineLocaleMessage extends MessageSchema {}
}

// Подключение типов к Vue компонентам
declare module 'vue' {
  interface ComponentCustomProperties {
    $t: (key: keyof MessageSchema, ...args: any[]) => string;
    $i18n: I18n; // Это исправление для $i18n
  }
}
