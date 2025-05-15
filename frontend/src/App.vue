<template>
  <div id="app">
<header>
  <nav class="navbar navbar-expand-sm navbar-dark bg-dark shadow-sm">
    <div class="container">
      <a class="navbar-brand mb-0 h1" href="app.html">
        <img src="./assets/calcpic.svg" width="50" height="50" class="d-inline-block" alt="Calculator">
        Calculator
      </a>
  
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
          <li class="nav-item">
            <a class="nav-link" href="app.html">App</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="profile.html">Profile</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" href="index.html">Login</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="registration.html">Register</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="about.html">About</a>
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
// Нічого не потрібно тут поки що
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

/* Додаткові стилі */
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
