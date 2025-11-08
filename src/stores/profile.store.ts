import { computed, ref } from 'vue'
import { createDefaultProfile, getUpdatedProfile } from '@/services/profile.service'
import type { UserProfile } from '@/services/profile.service'
import { toUpperCase } from '@/utils/string'

export function useProfileStore() {
  const defaultProfile = createDefaultProfile()

  const name = ref<string>(defaultProfile.name)
  const lastName = ref<string>(defaultProfile.lastName)
  const age = ref<number>(defaultProfile.age)

  const fullName = computed(
    () => `${name.value} ${lastName.value} con edad ${age.value} años`
  )

  function applyProfile({ name: newName, lastName: newLastName, age: newAge }: UserProfile) {
    name.value = newName
    lastName.value = newLastName
    age.value = newAge
  }

  function changeData(): void {
    applyProfile(getUpdatedProfile())
  }

  function changeAge(): void {
    age.value = 18
  }

  function resetData(): void {
    applyProfile(createDefaultProfile())
  }

  function formatName(value: string): string {
    return toUpperCase(value)
  }

  return {
    name,
    lastName,
    age,
    fullName,
    changeData,
    changeAge,
    resetData,
    formatName
  }
}
