<script setup lang="ts">
import { computed } from 'vue'

type Project = {
  id: string
  slug: string
  title: string
  description: string
  tech: string[]
  link?: string
  image?: string
  date: string
  status: 'completed' | 'in-progress' | 'archived'
}

const props = defineProps<{ project: Project }>()

// Ensure images respect the configured base path (vite base). Projects use paths like "/images/.."
const imageSrc = computed(() => {
  const img = props.project?.image
  if (!img) return ''
  // remove any leading slashes then prefix with BASE (import.meta.env.BASE_URL)
  const cleaned = img.replace(/^\/+/, '')
  return `${import.meta.env.BASE_URL}${cleaned}`
})
</script>

<template>
  <router-link
    :to="{ name: 'project-detail', params: { slug: props.project.slug } }"
    class="project-card"
  >
    <article>
      <div v-if="props.project.image" class="image-container">
        <img :src="imageSrc" :alt="props.project.title" />
      </div>

      <div class="content">
        <header>
          <h2>{{ props.project.title }}</h2>
          <span class="date">{{
            new Date(props.project.date).toLocaleDateString('en-US', {
              month: 'long',
              year: 'numeric',
            })
          }}</span>
        </header>

        <p class="description">{{ props.project.description }}</p>

        <ul class="tech">
          <li v-for="t in props.project.tech" :key="t">{{ t }}</li>
        </ul>

        <div class="status" :class="props.project.status">
          {{ props.project.status }}
        </div>
      </div>
    </article>
  </router-link>
</template>

<style scoped>
.project-card {
  display: block;
  text-decoration: none;
  color: inherit;
  transition: all 0.3s ease;
}

.project-card article {
  padding: 1rem;
  border: 1px solid var(--color-border);
  border-radius: 5px;
  background: var(--color-surface);
  height: 100%;
  display: flex;
  flex-direction: column;
}

.project-card:hover article {
  transform: translateY(-4px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  border-color: var(--color-border-hover);
}

.image-container {
  margin: -1rem -1rem 1rem;
  overflow: hidden;
  border-radius: 5px 5px 0 0;
}

.image-container img {
  width: 100%;
  height: 300px;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.project-card:hover .image-container img {
  transform: scale(1.05);
}

.content {
  flex: 1;
  display: flex;
  flex-direction: column;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1rem;
}

h2 {
  margin: 0;
  font-size: 1.5rem;
  line-height: 1.2;
}

.date {
  font-size: 0.875rem;
  color: var(--color-text-light);
}

.description {
  flex: 1;
  margin: 0 0 1rem;
  color: var(--color-text-light);
}

.tech {
  list-style: none;
  padding: 0;
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  margin: 0 0 1rem;
}

.tech li {
  font-size: 0.85rem;
  background: var(--color-background-soft);
  padding: 0.25rem 0.5rem;
  border-radius: 3px;
}

.status {
  font-size: 0.875rem;
  padding: 0.25rem 0.5rem;
  border-radius: 3px;
  align-self: flex-start;
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
</style>
