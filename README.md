# 01-fundamentos-vue

This project contains the exercises and examples developed for the "Fundamentos de Vue" module. It is built with [Vue 3](https://vuejs.org/) and [Vite](https://vitejs.dev/) and uses TypeScript as the primary language.

## Project Structure

```
src/
├── assets/          # Global styles, images and static assets
├── components/      # Reusable and layout-specific components
│   ├── layout/      # Application shell elements (header, navigation, etc.)
│   └── projects/    # Feature-specific building blocks for the projects module
├── router/          # Application routing configuration
├── services/        # Domain services and data helpers
├── stores/          # Local state containers built with the Composition API
├── utils/           # Utility helpers shared across modules
├── views/           # Page-level components used by the router
├── App.vue          # Root component
└── main.ts          # Application entry point
```

## Features

- **Project management demo**: add, list, remove individually, clear all, or remove by name using shared UI components.
- **Reusable project list component**: the `ProjectList` component renders the project catalog from any view, ensuring a consistent experience between the “Proyectos” and “Proyectos Dos” pages.
- **Centralized state**: a lightweight store keeps form data and project collection in sync across views without external dependencies.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/)
  - [Vue - Official](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (disable Vetur)

## Recommended Browser Setup

- Chromium-based browsers (Chrome, Edge, Brave, etc.)
  - [Vue.js devtools](https://chromewebstore.google.com/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd)
  - [Turn on Custom Object Formatter in Chrome DevTools](http://bit.ly/object-formatters)
- Firefox
  - [Vue.js devtools](https://addons.mozilla.org/en-US/firefox/addon/vue-js-devtools/)
  - [Turn on Custom Object Formatter in Firefox DevTools](https://fxdx.dev/firefox-devtools-custom-object-formatters/)

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Project Setup

```sh
pnpm install
```

### Compile and Hot-Reload for Development

```sh
pnpm dev
```

### Compile and Minify for Production

```sh
pnpm build
```
