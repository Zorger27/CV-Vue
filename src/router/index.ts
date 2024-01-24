import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router'
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
  },
  {
    path: '/extra/notes',
    name: 'notes',
    component: NotesView,
  },
  {
    path: '/extra/tasks',
    name: 'tasks',
    component: Tasks,
  },
  {
    path: '/extra/todo',
    name: 'todo',
    component: Todo,
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
  },
  {
    path: '/extra/tasks/fizzbuzz',
    name: 'fizzbuzz',
    component: Fizzbuzz,
  },
  {
    path: '/extra/tasks/anagram',
    name: 'anagram',
    component: Anagram,
  },
  {
    path: '/extra/tasks/findvowels',
    name: 'findvowels',
    component: Findvowels,
  },
  {
    path: '/extra/tasks/fibonacci',
    name: 'fibonacci',
    component: Fibonacci,
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
  },
  {
    path: '/extra/ai/pixabay',
    name: 'pixabay',
    component: Pixabay,
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

export default router
