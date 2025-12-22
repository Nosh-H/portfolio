<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="wrapper">
      <nav class="navbar">
        <div class="nav-links">
          <RouterLink to="/">Home</RouterLink>
          <RouterLink to="/projects">Projects</RouterLink>
          <RouterLink to="/about">About</RouterLink>
        </div>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  background: var(--color-background);
  border-bottom: 1px solid var(--color-border);
  position: sticky;
  top: 0;
  z-index: 100;
}

.wrapper {
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 0 2rem;
}

nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
  width: 100%;
}

.site-title {
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--color-heading);
  text-decoration: none;
  margin-right: auto;
}

.navbar {
  display: flex;
  justify-content: space-between;
}

.nav-links {
  display: flex;
  gap: 2rem;
}

nav a {
  color: var(--color-text);
  text-decoration: none;
  font-size: 1rem;
  padding: 0.5rem 0;
  border-bottom: 2px solid transparent;
  transition: all 0.2s ease;
}

nav a:hover,
nav a.router-link-active {
  color: var(--color-heading);
  border-bottom-color: var(--color-heading);
}

@media (max-width: 768px) {
  .wrapper {
    padding: 0 1rem;
  }

  nav {
    flex-direction: column;
    gap: 1rem;
    text-align: center;
    padding: 1rem 0;
  }

  .nav-links {
    flex-direction: column;
    gap: 1rem;
  }
}
</style>
