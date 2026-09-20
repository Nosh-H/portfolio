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
            I'm Noah Haskell, an undergraduate student at the University of Michigan greatly inspired by the applications of electrical
          engineering!
          </h3>
          <div class="hero-cta">
            <RouterLink to="/projects" class="cta-button">View My Projects</RouterLink>
            <RouterLink to="/about" class="cta-button secondary">About Me</RouterLink>
            <a
            class="cta-button secondary"
              href="https://github.com/Nosh-H"
              target="_blank"
              rel="noopener"
            >
              GitHub
            </a>
          </div>
        </div>
        <div class="hero-image">
          <img :src="BASE + 'images/Tree.jpg'" alt="A handsome young man in a green polo, khakis, with an arm leaning on a tree" />
        </div>
      </div>
    </section>

    <section class="featured-projects">
      <ProjectList :projects="projects.slice(0, 3)" />
      <div class="view-all">
        <RouterLink to="/projects" class="view-all-link">See more &rarr;</RouterLink>
      </div>
    </section>
  </main>
</template>

<style scoped>
.home {
  max-width: var(--content-width);
  margin: 0 auto;
  padding: 0 var(--content-gutter) var(--section-gap);
}

.hero {
  min-height: min(80vh, 800px);
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
  font-size: clamp(3rem, 7vw, 5.25rem);
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
  flex-wrap: wrap;
  gap: 1rem;
}

.cta-button {
  display: inline-block;
  padding: 1rem 2rem;

  font-weight: 500;
  text-decoration: none;
  transition: all 0.2s ease;
  border: 1px solid transparent;
}

.cta-button:not(.secondary) {
  background: var(--color-heading);
  color: var(--color-background);
}

.cta-button.secondary {
  background: var(--color-background-soft);
  color: var(--color-text);
  border-color: var(--color-border);
}

.cta-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.hero-image img {
  width: 100%;
  max-width: 500px;
  height: auto;

  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  border: 1px solid var(--color-border);
}

.featured-projects {
  padding: 4rem 0;
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
