import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    meta: { transition: 'slide-left' },
    component: () => import( '../views/ViewHomepage')
  },
  {
    path: '/test',
    name: 'test',
    meta: { transition: 'slide-left' },
    component: () => import( '../views/ViewTestpage')
  },
  {
		name: 'E404',
		path: '/:pathMatch(.*)',
    meta: { transition: 'slide-fade' },
		component: () => import( '../views/errors/ViewE404')
	}
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});



export default router
