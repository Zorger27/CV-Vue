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
import Cube from "@/views/graphics/CubeView.vue";
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
  },
  {
    path: '/projects',
    name: 'projects',
    component: Projects,
  },
  {
    path: '/education',
    name: 'education',
    component: Education,
  },
  {
    path: '/experience',
    name: 'experience',
    component: Experience,
  },
  {
    path: '/skills',
    name: 'skills',
    component: Skills,
  },
  {
    path: '/certificates',
    name: 'certificates',
    component: Certificates,
  },
  {
    path: '/certificates/backend',
    name: 'backend',
    component: Backend,
  },
  {
    path: '/certificates/frontend',
    name: 'frontend',
    component: Frontend,
  },
  {
    path: '/certificates/database',
    name: 'database',
    component: Database,
  },
  {
    path: '/certificates/designer',
    name: 'designer',
    component: Designer,
  },
  {
    path: '/certificates/pm',
    name: 'pm',
    component: Pm,
  },
  {
    path: '/certificates/english',
    name: 'english',
    component: English,
  },
  {
    path: '/certificates/other',
    name: 'other',
    component: Other,
  },
  {
    path: '/about',
    name: 'about',
    component: About,
  },
  {
    path: '/extra',
    name: 'extra',
    component: Extra,
  },
  {
    path: '/extra/calculator',
    name: 'calculator',
    component: CalculatorView,
  },
  {
    path: '/extra/cryptocur',
    name: 'cryptocur',
    component: Cryptocur,
  },
  {
    path: '/extra/graphics',
    name: 'graphics',
    component: Graphics,
  },
  {
    path: '/extra/graphics/cube',
    name: 'cube',
    component: Cube,
  },
  {
    path: '/extra/rates',
    name: 'rates',
    component: CurrencyRates,
  },
  {
    path: '/extra/games',
    name: 'games',
    component: Games,
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
