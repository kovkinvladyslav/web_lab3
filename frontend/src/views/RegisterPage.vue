<template>
    
  <div class="container d-flex justify-content-center py-5">
    <form class="bg-white w-100 px-3 mw-600 px-md-5 py-4 rounded shadow" id="register-form" @submit.prevent="register"  >
      <h1 class="h3 mb-3 text-primary">Create an account</h1>

      <div class="form-floating mb-2">
        <input type="text" class="form-control" id="fullName" placeholder="Full Name" v-model="fullName" required autofocus>
        <label for="fullName">Full Name</label>
      </div>

      <div class="form-floating mb-2">
        <input type="email" class="form-control" id="emailAddress" v-model="email" placeholder="Email address" required>
        <label for="emailAddress">Email address</label>
      </div>

      <div class="form-floating mb-2">
        <select class="form-select" id="gender" v-model="gender" required>
          <option value="" selected disabled>Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
        <label for="gender">Gender</label>
      </div>

      <div class="form-floating mb-2">
        <input type="date" class="form-control" id="birthDate" v-model="birthDate" required>
        <label for="birthDate">Date of Birth</label>
      </div>

      <div class="form-floating mb-3">
        <input type="password" class="form-control" id="password" placeholder="Password" v-model="password" required>
        <label for="password">Password</label>
      </div>

      <button type="submit" class="w-100 btn btn-lg btn-primary mb-2">Register</button>
      <router-link to="/" class="w-100 btn btn-lg btn-outline-secondary">Back to Login</router-link>
      <p v-if="error" class="text-danger">{{ error }}</p>

    </form>
  </div>
</template>

<script setup>

import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/store/index.js'

const router = useRouter()


const fullName = ref('')
const password = ref('')
const gender = ref('')
const birthDate = ref('')
const email = ref('')

const auth = useAuthStore()

const error = ref(null)

const register = async () => {
  const success = await auth.register(fullName.value, email.value, password.value, gender.value, birthDate.value)
  if(!success){
    error.value = "Unable to register with provided credentials"
  } else {
    router.push('/login')
  }
}

</script>