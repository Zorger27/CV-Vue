import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
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
import LoginPage from "@/views/service/LoginPage.vue";
import Extra from "@/views/menu/ExtraView.vue";
import store from "@/store";

const routes: Array<RouteRecordRaw> = [
  {
    path: '/login',
    name: 'login',
    component: LoginPage,
    meta: {
      title: 'CV - Login page',
    }
  },
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: {
      title: 'Curriculum VITAE (SPA)',
      // metaTags: [
      //   {
      //     name: 'google-site-verification',
      //     content: 'Gq9vrXtN91P1JteGFo-xrlLKT0PR8u-4P4xs21oUr8Y'
      //   }
        // {
        //   property: 'og:description',
        //   content: 'The home page of our example app.'
        // }
      // ]
    }
  },
  {
    path: '/projects',
    name: 'projects',
    component: Projects,
    meta: {
      title: 'CV - Projects',
    }
  },
  {
    path: '/education',
    name: 'education',
    component: Education,
    meta: {
      title: 'CV - Education',
    }
  },
  {
    path: '/experience',
    name: 'experience',
    component: Experience,
    meta: {
      title: 'CV - Experience',
    }
  },
  {
    path: '/skills',
    name: 'skills',
    component: Skills,
    meta: {
      title: 'CV - Skills',
    }
  },
  {
    path: '/certificates',
    name: 'certificates',
    component: Certificates,
    meta: {
      title: 'All diplomas & certificates',
    }
  },
  {
    path: '/certificates/backend',
    name: 'backend',
    component: Backend,
    meta: {
      title: 'Backend certificates',
    }
  },
  {
    path: '/certificates/frontend',
    name: 'frontend',
    component: Frontend,
    meta: {
      title: 'Frontend certificates',
    }
  },
  {
    path: '/certificates/database',
    name: 'database',
    component: Database,
    meta: {
      title: 'Database certificates',
    }
  },
  {
    path: '/certificates/designer',
    name: 'designer',
    component: Designer,
    meta: {
      title: 'Designer certificates',
    }
  },
  {
    path: '/certificates/pm',
    name: 'pm',
    component: Pm,
    meta: {
      title: 'Project Management',
    }
  },
  {
    path: '/certificates/english',
    name: 'english',
    component: English,
    meta: {
      title: 'English language',
    }
  },
  {
    path: '/certificates/other',
    name: 'other',
    component: Other,
    meta: {
      title: 'Other certificates',
    }
  },
  {
    path: '/about',
    name: 'about',
    component: About,
    meta: {
      title: 'About this project',
    }
  },
  {
    path: '/extra',
    name: 'extra',
    component: Extra,
    meta: {
      title: 'CV - Extra page',
      requiresAuth: true
    }
  },
  {
    path: '/:catchAll(.*)',
    name: 'PageNotFound',
    component: PageNotFound,
    meta: {
      title: 'Page NOT Found',
    }
  }
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})

// https://www.digitalocean.com/community/tutorials/vuejs-vue-router-modify-head
// Этот callback запускается перед каждым изменением маршрута, в том числе при загрузке страницы.
router.beforeEach((to, from, next) => {
// Это просматривает совпадающие маршруты от последнего к первому, находя ближайший маршрут с заголовком.
// Например, если у нас есть `/some/deep/nested/route`, и `/some`, `/deep` и `/nested` имеют заголовки,
// будут выбраны `/nested`.

  const loggedIn = localStorage.getItem('email') // Проверяем, авторизован ли пользователь
  if (to.matched.some(record => record.meta.requiresAuth) && !loggedIn) {
    next('/login') // Если пользователь не авторизован, перенаправляем его на страницу логина
  } else {
    next()
  }

  const nearestWithTitle = to.matched.slice().reverse().find(r => r.meta && r.meta.title);

  // Находим ближайший элемент маршрута с метатегами.
  const nearestWithMeta = to.matched.slice().reverse().find(r => r.meta && r.meta.metaTags);

  const previousNearestWithMeta = from.matched.slice().reverse().find(r => r.meta && r.meta.metaTags);

  // Если маршрут с заголовком был найден, устанавливает заголовок документа (страницы) в это значение.
  if(nearestWithTitle) {
    // @ts-ignore
    document.title = nearestWithTitle.meta.title;
  } else if(previousNearestWithMeta) {
    // @ts-ignore
    document.title = previousNearestWithMeta.meta.title;
  }

  // Удаляем все устаревшие метатеги из документа, используя ключевой атрибут, который мы установили ниже.
  // @ts-ignore
  Array.from(document.querySelectorAll('[data-vue-router-controlled]')).map(el => el.parentNode.removeChild(el));

  // Пропускаем метатеги рендеринга, если их нет.
  if(!nearestWithMeta) return next();

  // Превращаем определения метатегов в реальные элементы в теге head.
  // @ts-ignore
  nearestWithMeta.meta.metaTags.map(tagDef => {
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

  next();
});

export default router
