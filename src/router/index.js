import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/components/HomeComp.vue')
    },
    {
      path: '/',
      name: 'education',
      component: () => import('@/components/EducationComp.vue')
    }
  ]
})

export default router
