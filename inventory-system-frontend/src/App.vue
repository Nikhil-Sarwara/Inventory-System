<template>
  <div id="app">
    <!-- Navbar for navigation -->
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container">
        <a class="navbar-brand" href="/">Inventory System</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <router-link to="/" class="nav-link">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/add" class="nav-link">Add Inventory Item</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <!-- Main content area -->
    <div class="container mt-4">
      <router-view></router-view> <!-- This will display the current view -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
/* Global styles (optional) */
body {
  font-family: Arial, sans-serif;
}
</style>
