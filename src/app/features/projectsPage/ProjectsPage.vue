<template>
  <section class="projects">
    <h2 class="projects__title">Proyectos</h2>

    <div class="projects__form">
      <h3>Agregar Proyecto</h3>
      <form @submit.prevent="addProject" class="form">
        <label class="sr-only" for="projectName">Nombre del Proyecto</label>
        <input
          id="projectName"
          v-model="newProject.name"
          type="text"
          placeholder="Nombre del Proyecto"
          required
        />
        <label class="sr-only" for="projectDescription">Descripción del Proyecto</label>
        <input
          id="projectDescription"
          v-model="newProject.description"
          type="text"
          placeholder="Descripción del Proyecto"
          required
        />
        <button type="submit">Agregar</button>
      </form>
    </div>

    <div class="projects__list">
      <h3>Listado de Proyectos</h3>
      <ul>
        <li v-for="project in projects" :key="project.name">
          {{ project.name }} - {{ project.description }}
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'

type Project = {
  name: string
  description: string
}

const projects = ref<Project[]>([
  { name: 'Proyecto 1', description: 'Descripción del Proyecto 1' }
])

const newProject = reactive<Project>({
  name: '',
  description: ''
})

function addProject() {
  const name = newProject.name.trim()
  const description = newProject.description.trim()

  if (!name || !description) return

  projects.value.push({ name, description })
  newProject.name = ''
  newProject.description = ''
}
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

.projects__form,
.projects__list {
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

ul {
  list-style: disc;
  padding-left: 1.25rem;
  display: grid;
  gap: 0.5rem;
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
</style>
