<template>
  <div class="container d-flex justify-content-center py-5">
    <form class="bg-white w-100 px-3 px-md-5 py-4 rounded shadow" @submit.prevent="login">
      <h1 class="h3 mb-3 text-primary">Please sign in</h1>

      <div class="form-floating mb-2">
        <input type="email" class="form-control" v-model="email" placeholder="Email address" required autofocus>
        <label>Email address</label>
      </div>

      <div class="form-floating mb-3">
        <input type="password" class="form-control" v-model="password" placeholder="Password" required>
        <label>Password</label>
      </div>

      <button type="submit" class="w-100 btn btn-lg btn-primary mb-2">Sign In</button>
      <router-link to="/register" class="w-100 btn btn-lg btn-outline-secondary">Register</router-link>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const email = ref('')
const password = ref('')

function login() {
  // Тестовий логін
  if (email.value === 'test@example.com' && password.value === '1234') {
    // зберігаємо статус
    localStorage.setItem('authenticated', 'true')
    router.push('/profile')
  } else {
    alert('Wrong credentials')
  }
}
</script>

