<template>
  <div class="container d-flex justify-content-center align-items-center" style="min-height:80vh;">
    <div class="bg-white rounded shadow w-100 px-3 px-md-5 py-4" style="max-width:600px;">
      <h2 class="text-primary mb-4 text-center">User Profile</h2>
      
      <table class="table table-bordered">
        <tbody>
          <tr><th>Full Name</th><td>John Doe</td></tr>
          <tr><th>Email</th><td>test@example.com</td></tr>
          <tr><th>Gender</th><td>Male</td></tr>
          <tr><th>Birth Date</th><td>2000-01-01</td></tr>
        </tbody>
      </table>

      <div class="text-center">
        <router-link to="/" class="btn btn-primary mt-3">Go to App</router-link>
      </div>
    </div>
  </div>
</template>
