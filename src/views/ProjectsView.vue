<script setup lang="ts">
import ProjectList from '@/components/ProjectList.vue'
import projects from '@/data/projects'
</script>

<template>
  <main>
    <section class="projects-hero">
    </section>

    <ProjectList :projects="projects" />
  </main>
</template>

<style scoped>
.projects-hero {
  margin-bottom: 1.5rem;
}


@media (min-width: 1024px) {
  .projects-hero {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
}
</style>
