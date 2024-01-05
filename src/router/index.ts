import {createRouter, createWebHistory, RouteRecordNormalized, RouteRecordRaw} from 'vue-router'
import Home from "@/views/menu/HomeView.vue";
import Projects from "@/views/menu/ProjectsView.vue";
import Education from "@/views/menu/EducationView.vue";
import Experience from "@/views/menu/ExperienceView.vue";
import Skills from "@/views/menu/SkillsView.vue";
import Certificates from "@/views/certificates/CertificatesView.vue";
import Backend from "@/views/certificates/BackendView.vue";
import Frontend from "@/views/certificates/FrontendView.vue";
import Database from "@/views/certificates/DatabaseView.vue"
import Designer from "@/views/certificates/DesignerView.vue";
import Pm from "@/views/certificates/PmView.vue";
import English from "@/views/certificates/EnglishView.vue";
import Other from "@/views/certificates/OtherView.vue";
import About from "@/views/menu/AboutView.vue";
import PageNotFound from "@/views/service/PageNotFound.vue";
import Extra from "@/views/extra/ExtraView.vue";
import CalculatorView from "@/views/extra/CalculatorView.vue";
import Cryptocur from "@/views/extra/CryptocurView.vue";
import Graphics from "@/views/extra/GraphicsView.vue";
import Cube from "@/views/extra/CubeView.vue";
import CurrencyRates from "@/views/extra/CurrencyRatesView.vue";
import Games from "@/views/extra/GamesView.vue";
import NotesView from "@/views/extra/NotesView.vue";
import Tasks from "@/views/extra/TasksView.vue";
import Todo from "@/views/extra/TodoView.vue";
import WeatherView from "@/views/extra/WeatherView.vue";
import Palindrome from "@/views/tasks/Palindrome.vue";
import Fizzbuzz from "@/views/tasks/Fizzbuzz.vue";
import Anagram from "@/views/tasks/Anagram.vue";
import Findvowels from "@/views/tasks/Findvowels.vue";
import Fibonacci from "@/views/tasks/Fibonacci.vue";
import GameMemory from "@/views/games/GameMemory.vue";
import AiView from "@/views/extra/AiView.vue";
import LoremPicsum from "@/views/ai/LoremPicsum.vue";
import Pixabay from "@/views/ai/Pixabay.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: {
      title: 'My Portfolio',
      metaTags: [
        {
          property: 'og:title',
          content: 'My Portfolio home page'
        },
        {
          property: 'og:description',
          content: 'Basic information with contact details'
        },
        {
          property: 'og:image',
          content: 'https://zorin.expert/assets/ogimage/menu/OG_Image_Home.jpg'
        },
        {
          property: 'og:url',
          content: 'https://Zorin.Expert'
        },
        {
          property: 'og:type',
          content: 'website'
        },
      ]
    }
  },
  {
    path: '/projects',
    name: 'projects',
    component: Projects,
    meta: {
      title: 'Portfolio - Projects',
      metaTags: [
        {
          property: 'og:title',
          content: 'My Projects'
        },
        {
          property: 'og:description',
          content: 'Here are my projects'
        },
        {
          property: 'og:image',
          content: 'https://zorin.expert/assets/ogimage/menu/OG_Image_Projects.jpg'
        },
        {
          property: 'og:url',
          content: 'https://Zorin.Expert'
        },
        {
          property: 'og:type',
          content: 'website'
        },
      ]
    }
  },
  {
    path: '/education',
    name: 'education',
    component: Education,
    meta: {
      title: 'Portfolio - Education',
      metaTags: [
        {
          property: 'og:title',
          content: 'My Education'
        },
        {
          property: 'og:description',
          content: 'My Education'
        },
        {
          property: 'og:image',
          content: 'https://zorin.expert/assets/ogimage/menu/OG_Image_Education.jpg'
        },
        {
          property: 'og:url',
          content: 'https://Zorin.Expert'
        },
        {
          property: 'og:type',
          content: 'website'
        },
      ]
    }
  },
  {
    path: '/experience',
    name: 'experience',
    component: Experience,
    meta: {
      title: 'Portfolio - Experience',
      metaTags: [
        {
          property: 'og:title',
          content: 'My Experience'
        },
        {
          property: 'og:description',
          content: 'My Experience'
        },
        {
          property: 'og:image',
          content: 'https://zorin.expert/assets/ogimage/menu/OG_Image_Experience.jpg'
        },
        {
          property: 'og:url',
          content: 'https://Zorin.Expert'
        },
        {
          property: 'og:type',
          content: 'website'
        },
      ]
    }
  },
  {
    path: '/skills',
    name: 'skills',
    component: Skills,
    meta: {
      title: 'Portfolio - Skills',
      metaTags: [
        {
          property: 'og:title',
          content: 'My Skills'
        },
        {
          property: 'og:description',
          content: 'My Skills'
        },
        {
          property: 'og:image',
          content: 'https://zorin.expert/assets/ogimage/menu/OG_Image_Skills.jpg'
        },
        {
          property: 'og:url',
          content: 'https://Zorin.Expert'
        },
        {
          property: 'og:type',
          content: 'website'
        },
      ]
    }
  },
  {
    path: '/certificates',
    name: 'certificates',
    component: Certificates,
    meta: {
      title: 'All diplomas & certificates',
      metaTags: [
        {
          property: 'og:title',
          content: 'All diplomas & certificates'
        },
        {
          property: 'og:description',
          content: 'All diplomas & certificates'
        },
        {
          property: 'og:image',
          content: 'https://zorin.expert/assets/ogimage/menu/OG_Image_Certificates.jpg'
        },
        {
          property: 'og:url',
          content: 'https://Zorin.Expert'
        },
        {
          property: 'og:type',
          content: 'website'
        },
      ]
    }
  },
  {
    path: '/certificates/backend',
    name: 'backend',
    component: Backend,
    meta: {
      title: 'Backend certificates',
      metaTags: [
        {
          property: 'og:title',
          content: 'Backend certificates'
        },
        {
          property: 'og:description',
          content: 'Backend certificates'
        },
        {
          property: 'og:image',
          content: 'https://zorin.expert/assets/ogimage/certificates/OG_Image_Backend.jpg'
        },
        {
          property: 'og:url',
          content: 'https://Zorin.Expert'
        },
        {
          property: 'og:type',
          content: 'website'
        },
      ]
    }
  },
  {
    path: '/certificates/frontend',
    name: 'frontend',
    component: Frontend,
    meta: {
      title: 'Frontend certificates',
      metaTags: [
        {
          property: 'og:title',
          content: 'Frontend certificates'
        },
        {
          property: 'og:description',
          content: 'Frontend certificates'
        },
        {
          property: 'og:image',
          content: 'https://zorin.expert/assets/ogimage/certificates/OG_Image_Frontend.jpg'
        },
        {
          property: 'og:url',
          content: 'https://Zorin.Expert'
        },
        {
          property: 'og:type',
          content: 'website'
        },
      ]
    }
  },
  {
    path: '/certificates/database',
    name: 'database',
    component: Database,
    meta: {
      title: 'Database certificates',
      metaTags: [
        {
          property: 'og:title',
          content: 'DataBase Developer Certificates'
        },
        {
          property: 'og:description',
          content: 'DataBase Developer Certificates'
        },
        {
          property: 'og:image',
          content: 'https://zorin.expert/assets/ogimage/certificates/OG_Image_DB.jpg'
        },
        {
          property: 'og:url',
          content: 'https://Zorin.Expert'
        },
        {
          property: 'og:type',
          content: 'website'
        },
      ]
    }
  },
  {
    path: '/certificates/designer',
    name: 'designer',
    component: Designer,
    meta: {
      title: 'Designer certificates',
      metaTags: [
        {
          property: 'og:title',
          content: 'UX/UI Designer Certificates'
        },
        {
          property: 'og:description',
          content: 'UX/UI Designer Certificates'
        },
        {
          property: 'og:image',
          content: 'https://zorin.expert/assets/ogimage/certificates/OG_Image_Designer.jpg'
        },
        {
          property: 'og:url',
          content: 'https://Zorin.Expert'
        },
        {
          property: 'og:type',
          content: 'website'
        },
      ]
    }
  },
  {
    path: '/certificates/pm',
    name: 'pm',
    component: Pm,
    meta: {
      title: 'Project Management',
      metaTags: [
        {
          property: 'og:title',
          content: 'Project Management Certificates'
        },
        {
          property: 'og:description',
          content: 'Project Management Certificates'
        },
        {
          property: 'og:image',
          content: 'https://zorin.expert/assets/ogimage/certificates/OG_Image_PM.jpg'
        },
        {
          property: 'og:url',
          content: 'https://Zorin.Expert'
        },
        {
          property: 'og:type',
          content: 'website'
        },
      ]
    }
  },
  {
    path: '/certificates/english',
    name: 'english',
    component: English,
    meta: {
      title: 'English language',
      metaTags: [
        {
          property: 'og:title',
          content: 'English language Certificates'
        },
        {
          property: 'og:description',
          content: 'English language Certificates'
        },
        {
          property: 'og:image',
          content: 'https://zorin.expert/assets/ogimage/certificates/OG_Image_English.jpg'
        },
        {
          property: 'og:url',
          content: 'https://Zorin.Expert'
        },
        {
          property: 'og:type',
          content: 'website'
        },
      ]
    }
  },
  {
    path: '/certificates/other',
    name: 'other',
    component: Other,
    meta: {
      title: 'Other certificates',
      metaTags: [
        {
          property: 'og:title',
          content: 'Other certificates'
        },
        {
          property: 'og:description',
          content: 'Other certificates'
        },
        {
          property: 'og:image',
          content: 'https://zorin.expert/assets/ogimage/certificates/OG_Image_Other.jpg'
        },
        {
          property: 'og:url',
          content: 'https://Zorin.Expert'
        },
        {
          property: 'og:type',
          content: 'website'
        },
      ]
    }
  },
  {
    path: '/about',
    name: 'about',
    component: About,
    meta: {
      title: 'About this project',
      metaTags: [
        {
          property: 'og:title',
          content: 'About this project'
        },
        {
          property: 'og:description',
          content: 'About this project'
        },
        {
          property: 'og:image',
          content: 'https://zorin.expert/assets/ogimage/menu/OG_Image_About.jpg'
        },
        {
          property: 'og:url',
          content: 'https://Zorin.Expert'
        },
        {
          property: 'og:type',
          content: 'website'
        },
      ]
    }
  },
  {
    path: '/extra',
    name: 'extra',
    component: Extra,
    meta: {
      title: 'Portfolio - Extra pages',
      // requiresAuth: true,
      metaTags: [
        {
          property: 'og:title',
          content: 'Extra (hidden) section'
        },
        {
          property: 'og:description',
          content: 'Extra (hidden) section'
        },
        {
          property: 'og:image',
          content: 'https://zorin.expert/assets/ogimage/menu/OG_Image_Extra.jpg'
        },
        {
          property: 'og:url',
          content: 'https://Zorin.Expert'
        },
        {
          property: 'og:type',
          content: 'website'
        },
      ]
    }
  },
  {
    path: '/extra/calculator',
    name: 'calculator',
    component: CalculatorView,
    meta: {
      title: 'Extra - Calculator',
      // requiresAuth: true
      metaTags: [
        {
          property: 'og:title',
          content: 'Calculator'
        },
        {
          property: 'og:description',
          content: 'Standart & Accounting Calculator'
        },
        {
          property: 'og:image',
          content: 'https://zorin.expert/assets/ogimage/extra/OG_Image_Calculator.jpg'
        },
        {
          property: 'og:url',
          content: 'https://Zorin.Expert'
        },
        {
          property: 'og:type',
          content: 'website'
        },
      ]
    }
  },
  {
    path: '/extra/cryptocur',
    name: 'cryptocur',
    component: Cryptocur,
    meta: {
      title: 'Extra - Cryptocurrencies',
      // requiresAuth: true
      metaTags: [
        {
          property: 'og:title',
          content: 'Cryptocurrencies'
        },
        {
          property: 'og:description',
          content: 'Cryptocurrencies'
        },
        {
          property: 'og:image',
          content: 'https://zorin.expert/assets/ogimage/extra/OG_Image_Cryptocurrencies.jpg'
        },
        {
          property: 'og:url',
          content: 'https://Zorin.Expert'
        },
        {
          property: 'og:type',
          content: 'website'
        },
      ]
    }
  },
  {
    path: '/extra/graphics',
    name: 'graphics',
    component: Graphics,
    meta: {
      title: 'Extra - 3D Graphics',
      // requiresAuth: true
      metaTags: [
        {
          property: 'og:title',
          content: '3D Graphics'
        },
        {
          property: 'og:description',
          content: '3D Graphics'
        },
        {
          property: 'og:image',
          content: 'https://zorin.expert/assets/ogimage/extra/OG_Image_Cube.jpg'
        },
        {
          property: 'og:url',
          content: 'https://Zorin.Expert'
        },
        {
          property: 'og:type',
          content: 'website'
        },
      ]
    }
  },
  {
    path: '/extra/graphics/cube',
    name: 'cube',
    component: Cube,
    meta: {
      title: 'Extra - 3D Graphics - Spinning cube',
      // requiresAuth: true
      metaTags: [
        {
          property: 'og:title',
          content: 'Spinning cube'
        },
        {
          property: 'og:description',
          content: 'Spinning cube'
        },
        {
          property: 'og:image',
          content: 'https://zorin.expert/assets/ogimage/extra/OG_Image_Cube.jpg'
        },
        {
          property: 'og:url',
          content: 'https://Zorin.Expert'
        },
        {
          property: 'og:type',
          content: 'website'
        },
      ]
    }
  },
  {
    path: '/extra/rates',
    name: 'rates',
    component: CurrencyRates,
    meta: {
      title: 'Extra - Currency Rates',
      // requiresAuth: true
      metaTags: [
        {
          property: 'og:title',
          content: 'Exchange rates'
        },
        {
          property: 'og:description',
          content: 'Exchange rates by National Bank of Ukraine'
        },
        {
          property: 'og:image',
          content: 'https://zorin.expert/assets/ogimage/extra/OG_Image_Rates.jpg'
        },
        {
          property: 'og:url',
          content: 'https://Zorin.Expert'
        },
        {
          property: 'og:type',
          content: 'website'
        },
      ]
    }
  },
  {
    path: '/extra/games',
    name: 'games',
    component: Games,
    meta: {
      title: 'Extra - Games',
      // requiresAuth: true
      metaTags: [
        {
          property: 'og:title',
          content: 'Games'
        },
        {
          property: 'og:description',
          content: 'Games'
        },
        {
          property: 'og:image',
          content: 'https://zorin.expert/assets/ogimage/extra/OG_Image_Games.jpg'
        },
        {
          property: 'og:url',
          content: 'https://Zorin.Expert'
        },
        {
          property: 'og:type',
          content: 'website'
        },
      ]
    }
  },
  {
    path: '/extra/games/memory',
    name: 'memory',
    component: GameMemory,
    meta: {
      title: 'Games - Memory',
      // requiresAuth: true
      metaTags: [
        {
          property: 'og:title',
          content: 'Game - Memory'
        },
        {
          property: 'og:description',
          content: 'Game - Memory'
        },
        {
          property: 'og:image',
          content: 'https://zorin.expert/assets/ogimage/extra/games/OG_Image_Memory.jpg'
        },
        {
          property: 'og:url',
          content: 'https://Zorin.Expert'
        },
        {
          property: 'og:type',
          content: 'website'
        },
      ]
    }
  },
  {
    path: '/extra/notes',
    name: 'notes',
    component: NotesView,
    meta: {
      title: 'Extra - Notes',
      // requiresAuth: true
      metaTags: [
        {
          property: 'og:title',
          content: 'Notes'
        },
        {
          property: 'og:description',
          content: 'Notes'
        },
        {
          property: 'og:image',
          content: 'https://zorin.expert/assets/ogimage/extra/OG_Image_Note.jpg'
        },
        {
          property: 'og:url',
          content: 'https://Zorin.Expert'
        },
        {
          property: 'og:type',
          content: 'website'
        },
      ]
    }
  },
  {
    path: '/extra/tasks',
    name: 'tasks',
    component: Tasks,
    meta: {
      title: 'Extra - JS tasks',
      // requiresAuth: true
      metaTags: [
        {
          property: 'og:title',
          content: 'JS tasks'
        },
        {
          property: 'og:description',
          content: 'Typical JavaScript interview tasks'
        },
        {
          property: 'og:image',
          content: 'https://zorin.expert/assets/ogimage/extra/OG_Image_JStasks.jpg'
        },
        {
          property: 'og:url',
          content: 'https://Zorin.Expert'
        },
        {
          property: 'og:type',
          content: 'website'
        },
      ]
    }
  },
  {
    path: '/extra/todo',
    name: 'todo',
    component: Todo,
    meta: {
      title: 'Extra - To-do list',
      // requiresAuth: true
      metaTags: [
        {
          property: 'og:title',
          content: 'To-do list'
        },
        {
          property: 'og:description',
          content: 'To-do list'
        },
        {
          property: 'og:image',
          content: 'https://zorin.expert/assets/ogimage/extra/OG_Image_Todo.jpg'
        },
        {
          property: 'og:url',
          content: 'https://Zorin.Expert'
        },
        {
          property: 'og:type',
          content: 'website'
        },
      ]
    }
  },
  {
    path: '/extra/weather',
    name: 'weather',
    component: WeatherView,
    meta: {
      title: 'Extra - Weather',
      // requiresAuth: true
      metaTags: [
        {
          property: 'og:title',
          content: 'Weather'
        },
        {
          property: 'og:description',
          content: 'Weather by OpenWeather'
        },
        {
          property: 'og:image',
          content: 'https://zorin.expert/assets/ogimage/extra/OG_Image_Weather.jpg'
        },
        {
          property: 'og:url',
          content: 'https://Zorin.Expert'
        },
        {
          property: 'og:type',
          content: 'website'
        },
      ]
    }
  },
  {
    path: '/extra/tasks/palindrome',
    name: 'palindrome',
    component: Palindrome,
    meta: {
      title: 'JS tasks - Palindrome',
      // requiresAuth: true
      metaTags: [
        {
          property: 'og:title',
          content: 'JS tasks - Palindrome'
        },
        {
          property: 'og:description',
          content: 'Typical JavaScript interview task - Palindrome'
        },
        {
          property: 'og:image',
          content: 'https://zorin.expert/assets/ogimage/extra/jstask/OG_Image_Palindrome.jpg'
        },
        {
          property: 'og:url',
          content: 'https://Zorin.Expert'
        },
        {
          property: 'og:type',
          content: 'website'
        },
      ]
    }
  },
  {
    path: '/extra/tasks/fizzbuzz',
    name: 'fizzbuzz',
    component: Fizzbuzz,
    meta: {
      title: 'JS tasks - Fizzbuzz',
      // requiresAuth: true
      metaTags: [
        {
          property: 'og:title',
          content: 'JS tasks - Fizzbuzz'
        },
        {
          property: 'og:description',
          content: 'Typical JavaScript interview task - Fizzbuzz'
        },
        {
          property: 'og:image',
          content: 'https://zorin.expert/assets/ogimage/extra/jstask/OG_Image_FizzBuzz.jpg'
        },
        {
          property: 'og:url',
          content: 'https://Zorin.Expert'
        },
        {
          property: 'og:type',
          content: 'website'
        },
      ]
    }
  },
  {
    path: '/extra/tasks/anagram',
    name: 'anagram',
    component: Anagram,
    meta: {
      title: 'JS tasks - Anagram',
      // requiresAuth: true
      metaTags: [
        {
          property: 'og:title',
          content: 'JS tasks - Anagram'
        },
        {
          property: 'og:description',
          content: 'Typical JavaScript interview task - Anagram'
        },
        {
          property: 'og:image',
          content: 'https://zorin.expert/assets/ogimage/extra/jstask/OG_Image_Anagram.jpg'
        },
        {
          property: 'og:url',
          content: 'https://Zorin.Expert'
        },
        {
          property: 'og:type',
          content: 'website'
        },
      ]
    }
  },
  {
    path: '/extra/tasks/findvowels',
    name: 'findvowels',
    component: Findvowels,
    meta: {
      title: 'JS tasks - Find vowels',
      // requiresAuth: true
      metaTags: [
        {
          property: 'og:title',
          content: 'JS tasks - Find vowels'
        },
        {
          property: 'og:description',
          content: 'Typical JavaScript interview task - Find vowels'
        },
        {
          property: 'og:image',
          content: 'https://zorin.expert/assets/ogimage/extra/jstask/OG_Image_Vowels.jpg'
        },
        {
          property: 'og:url',
          content: 'https://Zorin.Expert'
        },
        {
          property: 'og:type',
          content: 'website'
        },
      ]
    }
  },
  {
    path: '/extra/tasks/fibonacci',
    name: 'fibonacci',
    component: Fibonacci,
    meta: {
      title: 'JS tasks - Fibonacci',
      // requiresAuth: true
      metaTags: [
        {
          property: 'og:title',
          content: 'JS tasks - Fibonacci'
        },
        {
          property: 'og:description',
          content: 'Typical JavaScript interview task - Fibonacci'
        },
        {
          property: 'og:image',
          content: 'https://zorin.expert/assets/ogimage/extra/jstask/OG_Image_Fibonacci.jpg'
        },
        {
          property: 'og:url',
          content: 'https://Zorin.Expert'
        },
        {
          property: 'og:type',
          content: 'website'
        },
      ]
    }
  },
  {
    path: '/extra/ai',
    name: 'ai',
    component: AiView,
    meta: {
      title: 'Extra - Artificial intelligence',
      // requiresAuth: true
      metaTags: [
        {
          property: 'og:title',
          content: 'Artificial intelligence'
        },
        {
          property: 'og:description',
          content: 'Artificial intelligence'
        },
        {
          property: 'og:image',
          content: 'https://zorin.expert/assets/ogimage/extra/OG_Image_AI.jpg'
        },
        {
          property: 'og:url',
          content: 'https://Zorin.Expert'
        },
        {
          property: 'og:type',
          content: 'website'
        },
      ]
    }
  },
  {
    path: '/extra/ai/picsum',
    name: 'picsum',
    component: LoremPicsum,
    meta: {
      title: 'AI - Picture randomizer',
      // requiresAuth: true
      metaTags: [
        {
          property: 'og:title',
          content: 'Picture randomizer'
        },
        {
          property: 'og:description',
          content: 'Picture randomizer by Lorem Picsum'
        },
        {
          property: 'og:image',
          content: 'https://zorin.expert/assets/ogimage/extra/ai/OG_Image_Randomizer.jpg'
        },
        {
          property: 'og:url',
          content: 'https://Zorin.Expert'
        },
        {
          property: 'og:type',
          content: 'website'
        },
      ]
    }
  },
  {
    path: '/extra/ai/pixabay',
    name: 'pixabay',
    component: Pixabay,
    meta: {
      title: 'AI - Randomizer PRO',
      // requiresAuth: true
      metaTags: [
        {
          property: 'og:title',
          content: 'Randomizer PRO'
        },
        {
          property: 'og:description',
          content: 'Randomizer PRO by Pixabay'
        },
        {
          property: 'og:image',
          content: 'https://zorin.expert/assets/ogimage/extra/ai/OG_Image_RandomizerPro.jpg'
        },
        {
          property: 'og:url',
          content: 'https://Zorin.Expert'
        },
        {
          property: 'og:type',
          content: 'website'
        },
      ]
    }
  },
  {
    path: '/:catchAll(.*)',
    name: 'PageNotFound',
    component: PageNotFound,
    meta: {
      title: 'Page NOT Found',
      metaTags: [
        {
          property: 'og:title',
          content: 'Page NOT Found'
        },
        {
          property: 'og:description',
          content: 'Page NOT Found'
        },
        {
          property: 'og:image',
          content: 'https://zorin.expert/assets/ogimage/menu/OG_Image_404.jpg'
        },
        {
          property: 'og:url',
          content: 'https://Zorin.Expert'
        },
        {
          property: 'og:type',
          content: 'website'
        },
      ]
    }
  }
]

const {BASE_URL} = process.env;
const router = createRouter({
  history: createWebHistory(BASE_URL),
  routes
});

// Этот callback запускается перед каждым изменением маршрута, в том числе при загрузке страницы.
router.beforeEach((to, from, next) => {
// Это просматривает совпадающие маршруты от последнего к первому, находя ближайший маршрут с заголовком.
// Например, если у нас есть `/some/deep/nested/route`, и `/some`, `/deep` и `/nested` имеют заголовки, будут выбраны `/nested`.

  // const loggedIn = localStorage.getItem('expiration') // Проверяем, авторизован ли пользователь
  // if (to.matched.some(record => record.meta.requiresAuth) && !loggedIn) {
  //   next('/login') // Если пользователь не авторизован, перенаправляем его на страницу логина
  // }

  // Этот код позволяет управлять заголовками страниц и мета-тегами при навигации между маршрутами.
  // Он также удаляет и очищает устаревшие мета-теги, которые были добавлены при предыдущих навигациях,
  // чтобы избежать конфликтов и обеспечить корректное обновление мета-информации на каждой странице.

  // Находим ближайший маршрут с метаданными 'title'
  const nearestWithTitle = to.matched.slice().reverse().find(r => r.meta && r.meta.title);
  // Находим ближайший маршрут с метаданными 'metaTags'
  const nearestWithMeta = to.matched.slice().reverse().find((r: any) => r.meta && r.meta.metaTags) as RouteRecordNormalized;
  // Находим ближайший маршрут с метаданными 'metaTags' у предыдущего маршрута
  const previousNearestWithMeta = from.matched.slice().reverse().find(r => r.meta && r.meta.metaTags);

  // Если маршрут с заголовком был найден, устанавливает заголовок документа (страницы) в это значение.
  if (nearestWithTitle && nearestWithTitle.meta && nearestWithTitle.meta.title) {
    document.title = nearestWithTitle.meta.title as string;
  } else if (previousNearestWithMeta && previousNearestWithMeta.meta && previousNearestWithMeta.meta.title) {
    document.title = previousNearestWithMeta.meta.title as string;
  }

  // Удаляем все элементы, которые были добавлены через Vue Router
  const controlledElements = Array.from(document.querySelectorAll('[data-vue-router-controlled]')) as HTMLElement[];
  controlledElements.forEach(el => el.parentNode?.removeChild(el));

  // Проверяем, есть ли у нас метатеги для рендеринга.
  // Если их нет, то пропускаем рендеринг и переходим к следующему маршруту с помощью return next().
  if (!nearestWithMeta) {
    return next();
  }

  // Обрабатываем и добавляем метатеги в тег <head> документа на основе данных из массива metaTags.
  if ('meta' in nearestWithMeta && Array.isArray(nearestWithMeta.meta["metaTags"])) {
    nearestWithMeta.meta["metaTags"].map((tagDef: { [key: string]: string }) => {

      const tag = document.createElement('meta');

      Object.keys(tagDef).forEach(key => {
        tag.setAttribute(key, tagDef[key]);
      });
      // Используем это, чтобы отслеживать, какие метатеги мы создаем, чтобы не мешать другим.
      tag.setAttribute('data-vue-router-controlled', '');

      return tag;
    })
      // Добавляем метатеги в тег head документа.
      .forEach(tag => document.head.appendChild(tag));
  }
  next();
});

export default router
