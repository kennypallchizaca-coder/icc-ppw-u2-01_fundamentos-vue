<template>
  <section class="projects">
    <h2 class="projects__title">Proyectos</h2>

    <div class="projects__form">
      <h3>Agregar Proyecto</h3>
      <form @submit.prevent="addProject" class="form">
        <label class="sr-only" for="projectName">Nombre del Proyecto</label>
        <input
          id="projectName"
          v-model="form.name"
          type="text"
          placeholder="Nombre del Proyecto"
          required
        />
        <label class="sr-only" for="projectDescription">Descripción del Proyecto</label>
        <input
          id="projectDescription"
          v-model="form.description"
          type="text"
          placeholder="Descripción del Proyecto"
          required
        />
        <button type="submit">Agregar</button>
      </form>
    </div>

    <ProjectList :projects="projects" />
  </section>
</template>

<script setup lang="ts">
import ProjectList from '@/components/projects/ProjectList.vue'
import { useProjectStore } from '@/stores/project.store'

const { projects, form, addProject } = useProjectStore()
</script>

<style scoped>
.projects {
  display: grid;
  gap: 1.5rem;
}

.projects__title {
  font-size: 1.75rem;
  font-weight: 700;
}

.projects__form {
  display: grid;
  gap: 0.75rem;
}

.form {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  align-items: center;
}

input {
  padding: 0.5rem 0.75rem;
  border: 1px solid #94a3b8;
  border-radius: 0.375rem;
  flex: 1 1 220px;
}

button {
  padding: 0.5rem 0.85rem;
  border: none;
  border-radius: 0.375rem;
  background-color: #8ecae6;
  color: #0f172a;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

button:hover {
  background-color: #7dc0df;
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

h2,
h3,
input,
button {
  color: #0f172a;
}
</style>
