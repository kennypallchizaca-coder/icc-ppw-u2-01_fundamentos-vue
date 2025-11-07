import { ref, computed } from 'vue'

export 
  function usePerfilPage() {
  // "signals" de Angular → refs en Vue
  const name = ref<string>('Juan')
  const lastName = ref<string>('Pérez')
  const age = ref<number>(30)

  const saveName = ref<string>(name.value);
  const saveLastName = ref<string>(lastName.value);
  const saveAge = ref<number>(age.value);

  // getFullName(): string
  const fullName = computed(
    () => `${name.value} ${lastName.value} con edad ${age.value} años`
  )

  const fullNameUpper = computed(() => fullName.value.toUpperCase())

  // saveNames()
  function saveNames(): void {
    saveName.value = name.value;
    saveLastName.value = lastName.value;
    saveAge.value = age.value;
    alert(`Datos guardados:\nNombre: ${saveName.value}\nApellido: ${saveLastName.value}\nEdad: ${saveAge.value}`);
  }

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
    name.value = saveName.value;
    lastName.value = saveLastName.value;
    age.value = saveAge.value;
  }

  return { name, lastName, age, fullName, changeData, changeAge, resetData, fullNameUpper, saveNames }
}
