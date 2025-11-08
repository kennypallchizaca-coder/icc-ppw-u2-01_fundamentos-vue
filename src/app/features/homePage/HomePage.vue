<template>
  <section class="home">
    <h2 class="home__title">Home</h2>
    <h3 class="home__subtitle">Fundamentos</h3>
    <p class="home__description">homePage works!</p>

    <div class="home__counters">
      <p><strong>Counter:</strong> {{ counter }}</p>
      <p><strong>Counter Signal:</strong> {{ counterSignal }}</p>
    </div>

    <div class="home__actions">
      <button @click="changeValue(1)">Incrementar</button>
      <button @click="changeValue(-1)">Decrementar</button>
      <button @click="resetValue(0)">Resetear</button>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useHomePage } from './homePage'
const { counter, counterSignal, changeValue, resetValue } = useHomePage()
</script>

<style scoped>
.home {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.home__title {
  font-size: 1.75rem;
  font-weight: 700;
}

.home__subtitle {
  font-size: 1.25rem;
  font-weight: 600;
}

.home__description {
  font-size: 1rem;
}

.home__counters {
  margin-top: 0.5rem;
  display: grid;
  gap: 0.35rem;
}

.home__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-top: 0.75rem;
}

button {
  padding: 0.5rem 0.85rem;
  border: 1px solid #94a3b8;
  border-radius: 0.375rem;
  background-color: #f1f5f9;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

button:hover {
  background-color: #e2e8f0;
}
</style>
