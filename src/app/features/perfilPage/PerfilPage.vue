<template>
  <section>
    <h1>Perfil</h1>

    <p>{{ fullName }}</p>
    <p>{{ fullNameUpper }}</p>
    <form class="form" @submit.prevent>
      <label>Nombre <input v-model="name" /></label>
      <label>Apellido <input v-model="lastName" /></label>
      <label>Edad <input type="number" v-model.number="age" min="0" /></label>

      <div class="row">
        <button type="button" @click="changeData">Cambiar datos</button>
        <button type="button" @click="changeAge">Edad = 18</button>
        <button type="button" @click="resetData">Reset</button>
        <button type="button" @click="saveNames">Guardar</button>
      </div>
    </form>
  </section>
</template>

<script setup lang="ts">
import { usePerfilPage } from './perfilPage'
const { name, lastName, age, fullName, changeData, changeAge, resetData, fullNameUpper, saveNames } = usePerfilPage()
</script>

<style scoped>
.form { display: grid; gap: .75rem; max-width: 420px; margin-top: .5rem; }
.row { display: flex; gap: .5rem; margin-top: .5rem; }
input { padding: .45rem; }
button { padding: .45rem .75rem; }
</style>
