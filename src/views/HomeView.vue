<script setup lang="ts">
import { RouterLink } from 'vue-router'
import ProjectList from '../components/ProjectList.vue'
import projects from '../data/projects'
const BASE = import.meta.env.BASE_URL
</script>

<template>
  <main class="home">
    <section class="hero">
      <div class="hero-content">
        <div class="hero-text">
          <h1>Welcome!</h1>
          <h3>
            I'm Noah Haskell, a high school student greatly inspired by the applications of electrical
          engineering, computer science, and robotics!
          </h3>
          <div class="hero-cta">
            <RouterLink to="/projects" class="cta-button">View My Projects</RouterLink>
            <RouterLink to="/about" class="cta-button secondary">About Me</RouterLink>
            <a
            class="cta-button secondary"
              href="https://github.com/Noah-H3467"
              target="_blank"
              rel="noopener"
            >
              GitHub
            </a>
          </div>
        </div>
        <div class="hero-image">
          <img :src="BASE + 'images/Myself.png'" alt="Noah Haskell" />
        </div>
      </div>
    </section>

    <section class="featured-projects">
      <h2>Featured Projects</h2>
      <ProjectList :projects="projects.slice(0, 3)" />
      <div class="view-all">
        <RouterLink to="/projects" class="view-all-link">View All Projects &rarr;</RouterLink>
      </div>
    </section>
  </main>
</template>

<style scoped>
.home {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

.hero {
  min-height: 80vh;
  display: flex;
  align-items: center;
  padding: 4rem 0;
}

.hero-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}

.hero-text {
  padding-right: 2rem;
}

.hero-text h1 {
  font-size: 3.5rem;
  color: var(--color-heading);
  margin-bottom: 1rem;
  line-height: 1.2;
}

.hero-text h3 {
  font-size: 1.5rem;
  color: var(--color-text);
  margin-bottom: 2rem;
  line-height: 1.6;
  font-weight: 400;
}

.hero-cta {
  display: flex;
  gap: 1rem;
}

.cta-button {
  display: inline-block;
  padding: 1rem 2rem;
  border-radius: 5px;
  font-weight: 500;
  text-decoration: none;
  transition: all 0.2s ease;
}

.cta-button:not(.secondary) {
  background: var(--color-heading);
  color: var(--color-background);
}

.cta-button.secondary {
  background: var(--color-background-soft);
  color: var(--color-text);
}

.cta-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.hero-image img {
  width: 100%;
  max-width: 500px;
  height: auto;
  border-radius: 6px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
}

.featured-projects {
  padding: 4rem 0;
}

.featured-projects h2 {
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 3rem;
  color: var(--color-heading);
}

.view-all {
  text-align: center;
  margin-top: 3rem;
}

.view-all-link {
  display: inline-block;
  padding: 0.75rem 1.5rem;
  font-size: 1.1rem;
  color: var(--color-heading);
  text-decoration: none;
  transition: all 0.2s ease;
}

.view-all-link:hover {
  transform: translateX(4px);
}

@media (max-width: 1024px) {
  .hero-content {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 2rem;
  }

  .hero-text {
    padding-right: 0;
  }

  .hero-text h1 {
    font-size: 2.5rem;
  }

  .hero-text h3 {
    font-size: 1.25rem;
  }

  .hero-cta {
    justify-content: center;
  }

  .hero-image {
    order: -1;
  }

  .hero-image img {
    max-width: 300px;
  }
}

@media (max-width: 640px) {
  .home {
    padding: 1rem;
  }

  .hero {
    padding: 2rem 0;
  }

  .hero-cta {
    flex-direction: column;
  }

  .cta-button {
    width: 100%;
    text-align: center;
  }
}
</style>
