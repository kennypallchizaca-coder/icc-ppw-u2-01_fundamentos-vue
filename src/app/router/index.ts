import { createRouter, createWebHashHistory } from 'vue-router'
const HomePage = () => import('@/app/features/homePage/HomePage.vue')
const PerfilPage = () => import('@/app/features/perfilPage/PerfilPage.vue')
const ProjectsPage = () => import('@/app/features/projectsPage/ProjectsPage.vue')
const ProjectsTwoPage = () => import('@/app/features/projectsTwoPage/ProjectsTwoPage.vue')

export default createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: HomePage },
    { path: '/perfil/:id?', name: 'perfil', component: PerfilPage },
    { path: '/proyectos', name: 'projects', component: ProjectsPage },
    { path: '/proyectos-dos', name: 'projects-two', component: ProjectsTwoPage }
  ]
})
