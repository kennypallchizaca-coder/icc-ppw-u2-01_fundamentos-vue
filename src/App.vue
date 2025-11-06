<script setup lang="ts"></script>
<template>
  <header class="site-header">
    <nav class="nav">
      <RouterLink to="/">Home</RouterLink>
      <RouterLink :to="{ name: 'perfil', params: { id: 1 } }">Perfil</RouterLink>
    </nav>
  </header>
  <main class="site-main">
    <RouterView />
  </main>
</template>
<style scoped>
.site-header { padding: 1rem; border-bottom: 1px solid #e5e7eb }
.nav { display:flex; gap:1rem }
.site-main { padding:1rem }
</style>
