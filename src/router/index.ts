import { createRouter, createWebHashHistory } from 'vue-router'

const HomeView = () => import('@/views/HomeView.vue')
const PerfilView = () => import('@/views/PerfilView.vue')
const ProjectsView = () => import('@/views/ProjectsView.vue')
const ProjectsTwoView = () => import('@/views/ProjectsTwoView.vue')
const FormView = () => import('@/views/FormView.vue')

export default createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: HomeView },
    { path: '/perfil/:id?', name: 'perfil', component: PerfilView },
    { path: '/proyectos', name: 'projects', component: ProjectsView },
    { path: '/proyectos-dos', name: 'projects-two', component: ProjectsTwoView },
    { path: '/formulario', name: 'form', component: FormView }
  ]
})
