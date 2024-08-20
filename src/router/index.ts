import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'index',
      component: () => import('@/views/index.vue')
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('@/views/Home/index.vue')
    },
    {
      path:'/web',
      name: 'web',
      component: () => import('@/views/CommonUsedWeb/index.vue')
    },
    {
      path:'/js',
      name: 'js',
      component: () => import('@/views/JS/index.vue')
    }
  ]
})

export default router
