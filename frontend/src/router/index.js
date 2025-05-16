import { createRouter, createWebHistory } from 'vue-router'
import LoginPage from '@/views/LoginPage.vue'
import ProfilePage from '@/views/ProfilePage.vue'
import RegisterPage from '@/views/RegisterPage.vue'
import AboutPage from '@/views/AboutPage.vue'
import CalcPage from '@/views/CalcPage.vue'
import { useAuthStore } from '@/store/index.js'


const routes = [
  { path: '/login', name: 'login',
    component: LoginPage,
    beforeEnter: (to, from, next) => {
      const auth = useAuthStore()
      if(auth.authenticated){
        console.log(auth.authenticated)
        next({name : "profile"})
      } else {
        next()
      }
    }
   },
  { path: '/profile', name: 'profile',
    component: ProfilePage,
    beforeEnter: (to, from, next) => {
      const auth = useAuthStore()
    
      if(!auth.authenticated){
        next({name : "login"})
      } else {
        next()
      }
    }
  },
  { path: '/register', component: RegisterPage,
    
     beforeEnter: (to, from, next) => {
      const auth = useAuthStore()
    
      if(auth.authenticated){
        next({name : "profile"})
      } else {
        next()
      }
    }
   },
  { path: '/about', component: AboutPage},
  { path: '/', component: CalcPage,
      beforeEnter: (to, from, next) => {
        const auth = useAuthStore()
      
        if(!auth.authenticated){
          next({name : "login"})
        } else {
          next()
        }
    }
   }
]


const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
