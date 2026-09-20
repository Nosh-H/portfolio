<script setup lang="ts">
import ProjectCard from './ProjectCard.vue'
import type { Project } from '../data/projects'

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
