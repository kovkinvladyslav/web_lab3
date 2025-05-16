<template>
  <div class="container d-flex justify-content-center align-items-center" style="min-height:80vh;">
    <div class="bg-white rounded shadow w-100 px-3 px-md-5 py-4" style="max-width:600px;">
      <h2 class="text-primary mb-4 text-center">User Profile</h2>
      
      <table v-if="auth.user" class="table table-bordered">
        <tbody>
          <tr>
            <th>Full Name</th>
            <td>
              {{ auth.user.fullName }}
            </td>
          </tr>
          <tr>
            <th>Email</th>
            <td>{{ auth.user.email }}</td>
          </tr>
          <tr>
            <th>Gender</th>
            <td>{{ auth.user.gender }}</td>
          </tr>
          <tr>
            <th>Birth Date</th>
            <td>{{ auth.user.birthDate }}</td>
          </tr>
        </tbody>
      </table>

      <div class="text-center">
        <router-link to="/" class="btn btn-primary mt-3">Go to App</router-link>
      </div>
      <p v-if="error" class="text-danger">{{ error }}</p>

    </div>

  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useAuthStore } from '@/store/index.js'
import { useRouter } from 'vue-router'

const router = useRouter()
const auth = useAuthStore()
const error = ref(null)

const profile = async () => {
  const success = await auth.fetchProfile()
  if (!success) {
    error.value = "Error during profile fetch"
    if(!auth.authenticated){
      router.push("/")
    }
  }
}

onMounted(() => {
  profile()
})
</script>
