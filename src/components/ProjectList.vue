<script setup lang="ts">
import type { PropType } from 'vue'
import ProjectCard from './ProjectCard.vue'

type Project = {
  id: string
  slug: string
  title: string
  description: string
  tech: string[]
  link?: string
  repoLink?: string
  image?: string
  date: string
  status: 'completed' | 'in-progress' | 'archived'
}

const props = defineProps<{ projects: Project[] }>()
</script>

<template>
  <div class="project-list">
    <ProjectCard v-for="p in props.projects" :key="p.id" :project="p" />
  </div>
</template>

<style scoped>
.project-list {
  display: grid;
  gap: 2rem;
  grid-template-columns: 1fr;
  width: 100%;
}

@media (min-width: 768px) {
  .project-list {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
