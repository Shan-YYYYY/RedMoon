// router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/HomeView.vue';
import About from '../views/AboutView.vue';
import commodity from '../views/commodity.vue';
import grouding from '../views/grouding.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/commodity',
    name: 'commodity',
    component: commodity
  },
  {
    path: '/grouding',
    name: 'grouding',
    component: grouding
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
