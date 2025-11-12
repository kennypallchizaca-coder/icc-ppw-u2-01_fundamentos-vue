<template>
  <section class="projects-two">
    <ProjectList :projects="projects" />
    <p class="projects-two__description">
      Aquí está el listado de proyectos usando el componente <strong>ProjectList</strong>.
    </p>

    <section class="projects-two__form">
      <h2>Proyectos</h2>
      <h3>Agregar Proyecto</h3>
      <form @submit.prevent="addProject" class="form">
        <label class="sr-only" for="projectNameTwo">Nombre del Proyecto</label>
        <input
          id="projectNameTwo"
          v-model="form.name"
          type="text"
          placeholder="Nombre del Proyecto"
          required
        />
        <label class="sr-only" for="projectDescriptionTwo">Descripción del Proyecto</label>
        <input
          id="projectDescriptionTwo"
          v-model="form.description"
          type="text"
          placeholder="Descripción del Proyecto"
          required
        />
        <div class="form__actions">
          <button type="submit">Agregar</button>
          <button type="button" @click="removeLastProject">Eliminar</button>
          <button type="button" @click="clearProjects">Eliminar Todos</button>
          <button type="button" @click="removeByName">Eliminar por Nombre</button>
          <button type="button" @click="clearlabels">Limpiar Campos de Nombres y Descripciones</button>
        </div>
      </form>
    </section>
  </section>
</template>

<script setup lang="ts">
import ProjectList from '@/components/projects/ProjectList.vue'
import { useProjectStore } from '@/stores/project.store'

const { projects, form, addProject, removeLastProject, clearProjects, removeProjectByName, clearlabels, resetForm } =
  useProjectStore()

function removeByName() {
  removeProjectByName(form.name)
  form.name = ''
}
</script>

<style scoped>
.projects-two {
  display: grid;
  gap: 1.5rem;
  color: #0f172a;
}

.projects-two__description {
  color: #475569;
}

.projects-two__form {
  display: grid;
  gap: 0.75rem;
}

.form {
  display: grid;
  gap: 0.75rem;
}

.form__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
}

input,
button {
  color: #0f172a;
}

input {
  padding: 0.5rem 0.75rem;
  border: 1px solid #94a3b8;
  border-radius: 0.375rem;
}

button {
  padding: 0.5rem 0.85rem;
  border: none;
  border-radius: 0.375rem;
  background-color: #8ecae6;
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
</style>
