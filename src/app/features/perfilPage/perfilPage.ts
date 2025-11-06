import { ref, computed } from 'vue'

export function usePerfilPage() {
  // "signals" de Angular → refs en Vue
  const name = ref<string>('Juan')
  const lastName = ref<string>('Pérez')
  const age = ref<number>(30)

  // getFullName(): string
  const fullName = computed(
    () => `${name.value} ${lastName.value} con edad ${age.value} años`
  )

  // changeData()
  function changeData(): void {
    name.value = 'Ana'
    lastName.value = 'Gonzales'
    age.value = 25
  }

  // changeAge()
  function changeAge(): void {
    age.value = 18
  }

  // resetData()
  function resetData(): void {
    name.value = 'Juan'
    lastName.value = 'Pérez'
    age.value = 30
  }

  return { name, lastName, age, fullName, changeData, changeAge, resetData }
}
