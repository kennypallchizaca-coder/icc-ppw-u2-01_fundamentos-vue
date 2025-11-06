import { createRouter, createWebHashHistory } from 'vue-router'
const HomePage   = () => import('@/app/features/homePage/HomePage.vue')
const PerfilPage = () => import('@/app/features/perfilPage/PerfilPage.vue')

export default createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: HomePage },
    { path: '/perfil/:id?', name: 'perfil', component: PerfilPage }
  ]
})
