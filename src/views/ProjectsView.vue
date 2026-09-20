<script setup lang="ts">
import ProjectList from '@/components/ProjectList.vue'
import projects from '@/data/projects'
</script>

<template>
  <main class="projects-page">
    <ProjectList :projects="projects" />
  </main>
</template>

<style scoped>
.projects-page {
  width: min(100%, var(--content-width));
  margin: 0 auto;
  padding: 3.5rem var(--content-gutter) var(--section-gap);
}

</style>
