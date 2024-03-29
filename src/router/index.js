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
		path: '/work',
		name: 'Work Experience',
		component: () => import('../views/Work.vue')
	},
	{
		path: '/projects',
		name: 'Projects',
		component: () => import('../views/Projects.vue')
	},
	{
		path: '/education',
		name: 'Education',
		component: () => import('../views/Education.vue')
	},
	{
		path: '/publications',
		name: 'Publications',
		component: () => import('../views/Publications.vue')
	},
	{
		path: '/skills',
		name: 'Skills',
		component: () => import('../views/Skills.vue')
	},
	{
		path: '/certifications',
		name: 'Certifications',
		component: () => import('../views/Certifications.vue')
	}
]

const router = new VueRouter({
	mode: 'history',
	routes
})

export default router
