import { createRouter, createWebHistory } from 'vue-router'
import LoginPage from '../views/LoginPage.vue'
import ProfilePage from '../views/ProfilePage.vue'
// інші компоненти

const routes = [
  { path: '/login', component: LoginPage },
  { path: '/profile', component: ProfilePage },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
