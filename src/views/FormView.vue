<template>
  <section class="form-page">
    <h2>Formulario</h2>
    <p class="form-page__description">
      Completa todos los campos para enviar tu información. Cada campo muestra un mensaje
      cuando falta un dato o el formato no es correcto.
    </p>

    <form class="form" @submit.prevent="handleSubmit" novalidate>
      <div class="form__field">
        <label for="name">Nombre</label>
        <input
          id="name"
          v-model.trim="form.name"
          type="text"
          name="name"
          autocomplete="name"
          @blur="() => validateField('name')"
          :aria-invalid="Boolean(errors.name)"
          :aria-describedby="errors.name ? 'name-error' : undefined"
          required
          minlength="3"
          placeholder="Ingresa tu nombre"
        />
        <p v-if="errors.name" id="name-error" class="form__error">{{ errors.name }}</p>
      </div>

      <div class="form__field">
        <label for="age">Edad</label>
        <input
          id="age"
          v-model.number="form.age"
          type="number"
          name="age"
          min="1"
          max="120"
          step="1"
          @blur="() => validateField('age')"
          :aria-invalid="Boolean(errors.age)"
          :aria-describedby="errors.age ? 'age-error' : undefined"
          required
          placeholder="Ingresa tu edad"
        />
        <p v-if="errors.age" id="age-error" class="form__error">{{ errors.age }}</p>
      </div>

      <div class="form__field">
        <label for="email">Correo</label>
        <input
          id="email"
          v-model.trim="form.email"
          type="email"
          name="email"
          autocomplete="email"
          @blur="() => validateField('email')"
          :aria-invalid="Boolean(errors.email)"
          :aria-describedby="errors.email ? 'email-error' : undefined"
          required
          placeholder="usuario@ejemplo.com"
        />
        <p v-if="errors.email" id="email-error" class="form__error">{{ errors.email }}</p>
      </div>

      <div class="form__field">
        <label for="course">Curso</label>
        <input
          id="course"
          v-model.trim="form.course"
          type="text"
          name="course"
          autocomplete="organization-title"
          @blur="() => validateField('course')"
          :aria-invalid="Boolean(errors.course)"
          :aria-describedby="errors.course ? 'course-error' : undefined"
          required
          minlength="3"
          placeholder="Curso o programa de interés"
        />
        <p v-if="errors.course" id="course-error" class="form__error">{{ errors.course }}</p>
      </div>

      <div class="form__actions">
        <button type="submit">Enviar</button>
        <button type="button" @click="resetForm">Limpiar</button>
      </div>

      <p v-if="submitted" class="form__success">¡Formulario enviado correctamente!</p>
    </form>
  </section>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'

type FieldKey = 'name' | 'age' | 'email' | 'course'

type FormState = {
  name: string
  age: number | null
  email: string
  course: string
}

type ErrorState = Record<FieldKey, string>

const form = reactive<FormState>({
  name: '',
  age: null,
  email: '',
  course: ''
})

const errors = reactive<ErrorState>({
  name: '',
  age: '',
  email: '',
  course: ''
})

const submitted = ref(false)

function validateField(field: FieldKey): boolean {
  submitted.value = false

  switch (field) {
    case 'name': {
      const value = form.name.trim()
      if (!value) {
        errors.name = 'El nombre es obligatorio.'
      } else if (value.length < 3) {
        errors.name = 'Debe contener al menos 3 caracteres.'
      } else {
        errors.name = ''
      }
      return !errors.name
    }
    case 'age': {
      const value = Number(form.age)
      if (!value) {
        errors.age = 'La edad es obligatoria.'
      } else if (!Number.isInteger(value)) {
        errors.age = 'La edad debe ser un número entero.'
      } else if (value < 1 || value > 120) {
        errors.age = 'Ingresa una edad entre 1 y 120.'
      } else {
        errors.age = ''
      }
      return !errors.age
    }
    case 'email': {
      const value = form.email.trim()
      const emailPattern = /^(?!.*\s)[\w.!#$%&'*+/=?^`{|}~-]+@[\w-]+(?:\.[\w-]+)+$/
      if (!value) {
        errors.email = 'El correo es obligatorio.'
      } else if (!emailPattern.test(value)) {
        errors.email = 'Ingresa un correo válido.'
      } else {
        errors.email = ''
      }
      return !errors.email
    }
    case 'course': {
      const value = form.course.trim()
      if (!value) {
        errors.course = 'El curso es obligatorio.'
      } else if (value.length < 3) {
        errors.course = 'Debe contener al menos 3 caracteres.'
      } else {
        errors.course = ''
      }
      return !errors.course
    }
  }
}

function validateForm(): boolean {
  const fields: FieldKey[] = ['name', 'age', 'email', 'course']
  return fields.map((field) => validateField(field)).every(Boolean)
}

function resetForm(options: { keepSubmitted?: boolean } = {}) {
  form.name = ''
  form.age = null
  form.email = ''
  form.course = ''
  errors.name = ''
  errors.age = ''
  errors.email = ''
  errors.course = ''
  if (!options.keepSubmitted) {
    submitted.value = false
  }
}

function handleSubmit() {
  if (!validateForm()) return

  submitted.value = true
  resetForm({ keepSubmitted: true })
}
</script>

<style scoped>
.form-page {
  display: grid;
  gap: 1rem;
  color: #0f172a;
}

.form-page__description {
  color: #94a3b8;
}

.form {
  display: grid;
  gap: 1rem;
  max-width: 420px;
  padding: 1rem;
  background-color: rgba(148, 163, 184, 0.15);
  border-radius: 0.5rem;
}

.form__field {
  display: grid;
  gap: 0.25rem;
}

label {
  font-weight: 600;
}

input {
  padding: 0.55rem 0.75rem;
  border: 1px solid #94a3b8;
  border-radius: 0.375rem;
  background-color: #0f172a;
  color: #f1f5f9;
}

input:focus {
  outline: 2px solid #8ecae6;
  outline-offset: 2px;
}

.form__actions {
  display: flex;
  gap: 0.75rem;
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

.form__error {
  color: #f87171;
  font-size: 0.875rem;
}

.form__success {
  color: #22c55e;
  font-weight: 600;
}
</style>
