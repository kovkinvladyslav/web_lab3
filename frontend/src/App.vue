<template>
<div id="app" class="bg-secondary">
<header>
  <nav class="navbar navbar-expand-sm navbar-dark bg-dark shadow-sm">
    <div class="container">
      <router-link class="navbar-brand mb-0 h1" to="/">
        <img src="/calcpic.svg" width="50" height="50" class="d-inline-block" alt="Calculator">
        Calculator
      </router-link>
  
      <button 
      class="navbar-toggler" 
      type="button"
      data-bs-toggle="collapse" 
      data-bs-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toogle-navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
  
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item" v-if="authenticated">
            <router-link class="nav-link" to="/">App</router-link>
          </li>
          <li class="nav-item" v-if="authenticated">
            <router-link class="nav-link" to="/profile">Profile</router-link>
          </li>
          <li class="nav-item" v-if="!authenticated">
            <router-link class="nav-link" to="/">Login</router-link>
          </li>
          <li class="nav-item" v-if="!authenticated">
            <router-link class="nav-link" to="/register">Register</router-link>
          </li>
          <li class="nav-item" v-if="!authenticated">
            <router-link class="nav-link" to="/about">About</router-link>
          </li>
          <li class ="nav-item" v-if="authenticated">
            <a href="#" class="nav-link" @click="logout"> Logout </a>
          </li>
          
        </ul>
      </div>
    </div>
  </nav>
</header>
    <router-view />
    
   <footer class="container-fluid bg-dark text-center py-3 text-secondary small">
        © 2025 Всі права захищено.
    </footer>


  </div>
</template>


<script setup>

import { computed } from 'vue';
import {useAuthStore} from '@/store/index.js'
import { useRouter } from 'vue-router'
const router = useRouter()

const auth = useAuthStore()
const authenticated = computed(()=>{
  return auth.authenticated;
})
const logout = () => {
  auth.logout()
  router.push('/login')
}


</script>

<style>
html, body, #app {
  height: 100%;
  margin: 0;
  padding: 0;
}

#app {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
}

router-view {
  flex: 1;
}

#login-form {
  width: 100%;
  max-width: 500px;
}

#register-form {
  width: 100%;
  max-width: 700px;
}

#calculator {
  max-width: 300px;
}

.hidden {
  display: none;
}


</style>
