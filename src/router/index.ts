import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: { layout: 'DefaultLayout' },
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/login.vue'),
      meta: { layout: 'AuthLayout' },
    },
  ],
})

export default router
