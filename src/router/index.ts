import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: { title: 'Home - Noah Haskell' }
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
      meta: { title: 'About - Noah Haskell' }
    },
    {
      path: '/projects',
      name: 'projects',
      // lazy-load the Projects page
      component: () => import('../views/ProjectsView.vue'),
      meta: { title: 'Projects - Noah Haskell'}
    },
    {
      path: '/projects/:slug',
      name: 'project-detail',
      component: () => import('../views/ProjectDetailView.vue'),
      meta: { title: 'Projects - Noah Haskell'}
    },
  ],
})

router.afterEach((to) => {
  if (to.meta && to.meta.title) {
    document.title = to.meta.title as string;
  } else {
    document.title = 'Portfolio - Noah Haskell'; // default title
  }
});

export default router