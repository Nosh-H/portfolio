<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="wrapper">
      <nav class="navbar">
        <RouterLink to="/about" class="site-title">Noah Haskell</RouterLink>
        <div class="nav-links">
          <RouterLink to="/">Home</RouterLink>
          <RouterLink to="/projects">Projects</RouterLink>
          <RouterLink to="/resume">Resume</RouterLink>
          <RouterLink to="/about">About</RouterLink>
          <RouterLink to="/contact">Contact</RouterLink>
        </div>
      </nav>
    </div>
  </header>

  <main id="main-content">
    <RouterView />
  </main>

  <footer class="site-footer">
    <nav class="footer-nav" aria-label="Footer navigation">
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/resume">Resume</RouterLink>
      <RouterLink to="/about">About</RouterLink>
      <RouterLink to="/contact">Contact Me</RouterLink>
    </nav>
    <div class="social-links" aria-label="Social and email links">
      <a
        class="social-link"
        href="https://www.linkedin.com/in/noah-haskell"
        target="_blank"
        rel="noopener"
        aria-label="LinkedIn"
        title="LinkedIn"
      >
        in
      </a>
      <a
        class="social-link"
        href="mailto:nhaskell@umich.edu"
        aria-label="Email Noah Haskell"
        title="Email Noah Haskell"
      >
        @
      </a>
    </div>
  </footer>
</template>

<style scoped>
header {
  background: var(--color-navbar);
  color: #ffffff;
  position: sticky;
  top: 0;
  z-index: 100;
  box-shadow: 0 2px 0 rgba(0, 0, 0, 0.12);
}

.wrapper {
  max-width: var(--content-width);
  width: 100%;
  margin: 0 auto;
  padding: 0 var(--content-gutter);
}

nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
  width: 100%;
}

.navbar {
  display: flex;
  justify-content: space-between;
  gap: 2rem;
}

.nav-links {
  display: flex;
  gap: 2rem;
}

nav a {
  color: #ffffff;
  text-decoration: none;
  font-size: 1rem;
  padding: 0.4rem 0.2rem;
  border-bottom: 3px solid transparent;
  transition: background-color 0.2s ease, border-color 0.2s ease;
}

.nav-links a:hover,
.nav-links a.router-link-active {
  color: #ffffff;
  border-bottom-color: #ffffff;
  background: var(--color-navbar-hover);
}

.site-title {
  font-size: 1.35rem;
  font-weight: 700;
  letter-spacing: 0.02em;
  margin-right: auto;
  border-bottom: 0;
  color: #ffffff;
  text-decoration: none;
}

@media (max-width: 768px) {
  nav {
    flex-direction: column;
    gap: 1rem;
    text-align: center;
    padding: 1rem 0;
  }

  .nav-links {
    flex-wrap: wrap;
    justify-content: center;
    gap: 0.5rem 1rem;
  }
}

.site-footer {
  border-top: 1px solid var(--color-border);
  color: var(--color-text-light);
  margin: 0 auto;
  max-width: var(--content-width);
  padding: 0.5rem var(--content-gutter) 1.7rem;
  text-align: center;
}

.footer-nav {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem 1.5rem;
  justify-content: center;
}

.footer-nav a {
  color: var(--color-text-light);
  font-size: 0.9rem;
  padding: 0.2rem;
}

.footer-nav a:hover {
  color: var(--color-primary);
}

.social-links {
  display: flex;
  gap: 0.6rem;
  justify-content: center;
  margin-top: 0rem;
}

.social-link {
  align-items: center;
  border: 1px solid var(--color-border);
  color: var(--color-primary);
  display: inline-flex;
  font-family: Arial, sans-serif;
  font-size: 0.75rem;
  font-weight: 700;
  height: 1.7rem;
  justify-content: center;
  text-decoration: none;
  width: 1.7rem;
}

.social-link:hover {
  background: var(--color-primary);
  color: #ffffff;
}
</style>
