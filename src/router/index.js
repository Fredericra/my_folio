import { createRouter, createWebHistory } from 'vue-router'
import Acceuil from '@/Page/Acceuil.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Acceuil',
      component: Acceuil,
    },
    {
      path: '/Apropos',
      name: 'Apropos',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('@/Page/Apropos.vue'),
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'page-non-trouvé',
      component: () => import('@/Page/PageNon.vue'),
    },
  ],
})

export default router
