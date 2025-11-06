<template>
  <section>
    <h1>HomePage</h1>

    <p><b>counter:</b> {{ counter }}</p>
    <p><b>counterSignal:</b> {{ counterSignal }}</p>

    <div class="row">
      <button @click="changeValue(1)">+1</button>
      <button @click="changeValue(-1)">-1</button>
      <button @click="resetValue(0)">Reset</button>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useHomePage } from './homePage'
const { counter, counterSignal, changeValue, resetValue } = useHomePage()
</script>

<style scoped>
.row { display: flex; gap: .5rem; margin-top: .75rem; }
button { padding: .4rem .7rem; }
</style>
