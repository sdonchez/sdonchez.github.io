import Home from '../views/Home.vue'
import { createRouter as _createRouter, createWebHistory } from 'vue-router'

const WorkView = () => import('../views/Work.vue')
const ProjectsView = () => import('../views/Projects.vue')
const EducationView = () => import('../views/Education.vue')
const PublicationsView = () => import('../views/Publications.vue')
const SkillsView = () => import('../views/Skills.vue')
const CertificationsView = () => import('../views/Certifications.vue')

export function createRouter() {
	return _createRouter({
		history: createWebHistory(),
		scrollBehavior: () => ({ top: 0 }),
		routes: [
			{ path: '/', name: 'Home', component: Home },
			{ path: '/work', name: 'Work Experience', component: WorkView },
			{ path: '/projects', name: 'Projects', component: ProjectsView },
			{ path: '/education', name: 'Education', component: EducationView },
			{ path: '/publications', name: 'Publications', component: PublicationsView },
			{ path: '/skills', name: 'Skills', component: SkillsView },
			{ path: '/certifications', name: 'Certifications', component: CertificationsView },

		]
	})
}
