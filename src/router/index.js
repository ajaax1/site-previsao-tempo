import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PrevisaoView from '../views/PrevisaoView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/previsao',
      name: 'previsao',
      component: () => import('../views/PrevisaoView.vue')
    },
  ]
})

export default router
