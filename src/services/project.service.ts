export interface Project {
  name: string
  description: string
}

export function createProject(name = '', description = ''): Project {
  return { name, description }
}

export function getInitialProjects(): Project[] {
  return [
    {
      name: 'Proyecto 1',
      description: 'Descripción del Proyecto 1'
    }
  ]
}
