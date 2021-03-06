import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home
	},
	{
		path: '/education',
		name: 'Education',
		component: () => import('../views/Education.vue')
	},
	{
		path: '/work',
		name: 'Work Experience',
		component: () => import('../views/Work.vue')
	},
	{
		path: '/projects',
		name: 'Projects',
		component: () => import('../views/Projects.vue')
	}
]

const router = new VueRouter({
	routes
})

export default router
