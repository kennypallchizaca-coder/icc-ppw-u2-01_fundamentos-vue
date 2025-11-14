<template>
  <header class="site-header">
    <h1 class="site-title">Fundamentos Vue</h1>
    <nav class="nav">
      <RouterLink to="/" class="nav-link">Home</RouterLink>
      <RouterLink :to="{ name: 'perfil', params: { id: 1 } }" class="nav-link">Perfil</RouterLink>
      <RouterLink :to="{ name: 'projects' }" class="nav-link">Proyectos</RouterLink>
      <RouterLink :to="{ name: 'projects-two' }" class="nav-link">Proyectos Dos</RouterLink>
      <RouterLink :to="{ name: 'form' }" class="nav-link">Formulario</RouterLink>
    </nav>
  </header>
</template>

<script setup lang="ts"></script>

<style scoped>
.site-header {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-bottom: 2rem;
}

.site-title {
  font-size: 2rem;
  font-weight: 700;
  color: #1f2937;
}

.nav {
  display: flex;
  gap: 1.5rem;
  background-color: #8ecae6;
  padding: 0.75rem 1rem;
  border-radius: 0.5rem;
}

.nav-link {
  color: #0f172a;
  font-weight: 600;
}

.nav-link.router-link-active,
.nav-link.router-link-exact-active {
  text-decoration: underline;
}
</style>
