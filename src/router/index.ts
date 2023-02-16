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
    path: '/404',
    name: 'PageNotFound',
    component: PageNotFound,
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
