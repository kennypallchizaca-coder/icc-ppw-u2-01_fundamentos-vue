export interface UserProfile {
  name: string
  lastName: string
  age: number
}

export function createDefaultProfile(): UserProfile {
  return {
    name: 'Juan',
    lastName: 'Pérez',
    age: 30
  }
}

export function getUpdatedProfile(): UserProfile {
  return {
    name: 'Ana',
    lastName: 'Gonzales',
    age: 25
  }
}
