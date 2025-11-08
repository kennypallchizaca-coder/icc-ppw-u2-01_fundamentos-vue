import { reactive, ref } from 'vue'
import { createProject, getInitialProjects, type Project } from '@/services/project.service'

export function useProjectStore() {
  const projects = ref<Project[]>([...getInitialProjects()])
  const form = reactive(createProject())

  function resetForm() {
    form.name = ''
    form.description = ''
  }

  function addProject() {
    const name = form.name.trim()
    const description = form.description.trim()

    if (!name || !description) return

    projects.value.push(createProject(name, description))
    resetForm()
  }

  return {
    projects,
    form,
    addProject
  }
}
