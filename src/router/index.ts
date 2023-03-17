import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Home from "@/views/HomeView.vue";
import Projects from "@/views/ProjectsView.vue";
import Education from "@/views/EducationView.vue";
import Experience from "@/views/ExperienceView.vue";
import Skills from "@/views/SkillsView.vue";
import Certificates from "@/views/CertificatesView.vue";
import Backend from "@/views/BackendView.vue";
import Frontend from "@/views/FrontendView.vue";
import Database from "@/views/DatabaseView.vue"
import Designer from "@/views/DesignerView.vue";
import Pm from "@/views/PmView.vue";
import English from "@/views/EnglishView.vue";
import Other from "@/views/OtherView.vue";
import About from "@/views/AboutView.vue";
import PageNotFound from "@/views/PageNotFound.vue";

const routes: Array<RouteRecordRaw> = [
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
// This callback runs before every route change, including on page load.
router.beforeEach((to, from, next) => {
  // This goes through the matched routes from last to first, finding the closest route with a title.
  // e.g., if we have `/some/deep/nested/route` and `/some`, `/deep`, and `/nested` have titles,
  // `/nested`'s will be chosen.
  const nearestWithTitle = to.matched.slice().reverse().find(r => r.meta && r.meta.title);

  // Find the nearest route element with meta tags.
  const nearestWithMeta = to.matched.slice().reverse().find(r => r.meta && r.meta.metaTags);

  const previousNearestWithMeta = from.matched.slice().reverse().find(r => r.meta && r.meta.metaTags);

  // If a route with a title was found, set the document (page) title to that value.
  if(nearestWithTitle) {
    // @ts-ignore
    document.title = nearestWithTitle.meta.title;
  } else if(previousNearestWithMeta) {
    // @ts-ignore
    document.title = previousNearestWithMeta.meta.title;
  }

  // Remove any stale meta tags from the document using the key attribute we set below.
  // @ts-ignore
  Array.from(document.querySelectorAll('[data-vue-router-controlled]')).map(el => el.parentNode.removeChild(el));

  // Skip rendering meta tags if there are none.
  if(!nearestWithMeta) return next();

  // Turn the meta tag definitions into actual elements in the head.
  // @ts-ignore
  nearestWithMeta.meta.metaTags.map(tagDef => {
    const tag = document.createElement('meta');

    Object.keys(tagDef).forEach(key => {
      tag.setAttribute(key, tagDef[key]);
    });

    // We use this to track which meta tags we create, so we don't interfere with other ones.
    tag.setAttribute('data-vue-router-controlled', '');

    return tag;
  })
      // Add the meta tags to the document head.
      .forEach(tag => document.head.appendChild(tag));

  next();
});

export default router
