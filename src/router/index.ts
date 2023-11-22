import { createRouter, createWebHashHistory } from 'vue-router';
const routes = [
  {
    path: '/',
    redirect: { name: "index" }
  },
  {
    path: '/:imf',
    redirect: { name: "index" }
  },
  {
    path: '/redm',
    name: 'redm',
    redirect: { name: "index" },
    children: [
      {
        path: 'index',
        name: 'index',
        component: () => import('../page/index.vue')
      },
      {
        path: 'user',
        name: 'user',
        component: () => import('../page/userInfo.vue')
      },
      {
        path: 'creat',
        name: 'creat',
        component: () => import('../page/grouding.vue')
      },
      {
        path:'commidity',
        name:'commidity',
        component: () => import('../page/commidity.vue')
      }
    ]
  },
]

const router = createRouter({
  //   history: createWebHistory(import.meta.env.BASE_URL),
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes
})

export default router