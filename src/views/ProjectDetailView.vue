<script setup lang="ts">
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import projects from '@/data/projects'

const route = useRoute()
const router = useRouter()
const slug = route.params.slug as string

const project = computed(() => projects.find((p) => p.slug === slug))

const getImageUrl = (imagePath: string) => {
  const baseUrl = import.meta.env.BASE_URL
  return imagePath.startsWith('/') ? baseUrl + imagePath.substring(1) : baseUrl + imagePath
}

const getLongDescriptionHtml = (desc?: string) => {
  if (!desc) return ''
  // Escape HTML and replace newlines with <br>
  return desc
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/\n/g, '<br>')
}

const getUrl = (url?: string) => {
  if (!url) return ''
  // Leave absolute URLs, mailto, and hash links unchanged
  if (/^https?:\/\//.test(url) || url.startsWith('mailto:') || url.startsWith('#')) return url
  const baseUrl = import.meta.env.BASE_URL
  return url.startsWith('/') ? baseUrl + url.substring(1) : baseUrl + url
}

if (!project.value) {
  router.push('/projects')
}
</script>
<template>
  <main v-if="project" class="project-detail">
    <nav class="breadcrumb">
      <router-link to="/projects">&larr; Back to Projects</router-link>
    </nav>

    <article>
      <header>
        <h1>{{ project.title }}</h1>
        <div class="meta">
          <span class="date">{{
            new Date(project.date).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })
          }}</span>
          <span class="status" :class="project.status">{{ project.status }}</span>
        </div>
      </header>

      <img
        v-if="project.image"
        :src="getImageUrl(project.image)"
        :alt="project.title"
        class="hero-image"
      />

      <div class="content">
        <p class="description">{{ project.description }}</p>
        <p
          v-if="project.longDescription"
          class="long-description"
          v-html="getLongDescriptionHtml(project.longDescription)"
        ></p>

        <ul class="tech-list">
          <li v-for="tech in project.tech" :key="tech">{{ tech }}</li>
        </ul>

        <div class="links">
          <a
            v-if="project.link"
            :href="getUrl(project.link)"
            target="_blank"
            rel="noopener"
            class="button primary"
          >
            View Live Project
          </a>
          <a
            v-if="project.repoLink"
            :href="getUrl(project.repoLink)"
            target="_blank"
            rel="noopener"
            class="button"
          >
            View Source
          </a>
        </div>
      </div>
    </article>
  </main>
</template>

<style scoped>
.project-detail {
  max-width: 900px;
  margin: 0 auto;
  padding: 2rem 1rem;
}

.breadcrumb {
  margin-bottom: 2rem;
}

.breadcrumb a {
  color: var(--color-text);
  text-decoration: none;
}

.breadcrumb a:hover {
  text-decoration: underline;
}

header {
  margin-bottom: 2rem;
}

h1 {
  margin: 0 0 1rem;
  font-size: 2.5rem;
}

.meta {
  display: flex;
  gap: 1rem;
  color: var(--color-text-light);
}

.status {
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-size: 0.875rem;
}

.status.completed {
  background: var(--color-success-bg);
  color: var(--color-success);
}

.status.in-progress {
  background: var(--color-warning-bg);
  color: var(--color-warning);
}

.status.archived {
  background: var(--color-error-bg);
  color: var(--color-error);
}

.hero-image {
  width: 100%;
  height: auto;
  border-radius: 6px;
  margin-bottom: 2rem;
}

.content {
  font-size: 1.1rem;
  line-height: 1.6;
}

.description {
  font-size: 1.25rem;
  color: var(--color-text-light);
  margin-bottom: 2rem;
}

.tech-list {
  list-style: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin: 1rem 0 2rem;
}

.tech-list li {
  background: var(--color-background-soft);
  padding: 0.5rem 1rem;
  border-radius: 4px;
}

.links {
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
}

.button {
  display: inline-block;
  padding: 0.75rem 1.5rem;
  border-radius: 6px;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.2s ease;
}

.button.primary {
  background: var(--color-primary);
  color: white;
}

.button:not(.primary) {
  background: var(--color-background-soft);
  color: var(--color-text);
}

.button:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}
</style>
