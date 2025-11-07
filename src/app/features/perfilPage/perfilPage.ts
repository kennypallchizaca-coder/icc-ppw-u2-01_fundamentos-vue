import { ref, computed } from 'vue'

export function usePerfilPage() {
  const name = ref<string>('Juan')
  const lastName = ref<string>('Pérez')
  const age = ref<number>(30)

  const fullName = computed(
    () => `${name.value} ${lastName.value} con edad ${age.value} años`
  )

  function changeData(): void {
    name.value = 'Ana'
    lastName.value = 'Gonzales'
    age.value = 25
  }

  function changeAge(): void {
    age.value = 18
  }

  function resetData(): void {
    name.value = 'Juan'
    lastName.value = 'Pérez'
    age.value = 30
  }

  function nombreMayus(str: string): string {
    return str.toUpperCase()
  }

  return { name, lastName, age, fullName, changeData, changeAge, resetData, nombreMayus }
}
