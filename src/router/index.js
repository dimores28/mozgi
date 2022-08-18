import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import( '../views/ViewHomepage')
  },
  {
    path: '/test',
    name: 'test',
    component: () => import( '../views/ViewTestpage')
  },
  {
		name: 'E404',
		path: '/:pathMatch(.*)',
		component: () => import( '../views/errors/ViewE404'),
	}
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
