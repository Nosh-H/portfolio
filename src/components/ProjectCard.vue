<script setup lang="ts">
import { computed } from 'vue'
import type { Project } from '../data/projects'

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

  background: var(--color-surface);
  height: 100%;
  display: flex;
  flex-direction: column;
  box-shadow: var(--shadow-subtle);
}

.project-card:hover article {
  transform: translateY(-2px);
  box-shadow: 0 6px 14px rgba(24, 43, 61, 0.14);
  border-color: var(--color-border-hover);
}

.image-container {
  margin: -1rem -1rem 1rem;
  overflow: hidden;
}

.image-container img {
  width: 100%;
  aspect-ratio: 16 / 10;
  height: auto;
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
  color: var(--color-heading);
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

.status {
  font-size: 0.875rem;
  padding: 0.25rem 0.5rem;

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
