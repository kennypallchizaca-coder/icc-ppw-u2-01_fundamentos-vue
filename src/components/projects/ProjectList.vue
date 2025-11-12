<template>
  <section class="project-list">
    <h3 class="project-list__title">Listado de Proyectos</h3>
    <p v-if="!projects.length" class="project-list__empty">No hay proyectos registrados todavía.</p>
    <ul v-else>
      <li v-for="project in projects" :key="project.name">
        {{ project.name }} - {{ project.description }}
      </li>
    </ul>
  </section>
</template>

<script setup lang="ts">
import type { Project } from '@/services/project.service'

defineProps<{
  projects: Project[]
}>()
</script>

<style scoped>
.project-list {
  display: grid;
  gap: 0.75rem;
}

.project-list__title {
  font-size: 1.25rem;
  font-weight: 600;
  color: #0f172a;
}

.project-list__empty {
  color: #475569;
}

ul {
  list-style: disc;
  padding-left: 1.25rem;
  display: grid;
  gap: 0.5rem;
  color: #0f172a;
}

li {
  color: inherit;
}
</style>
