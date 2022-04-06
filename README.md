# VueBones 🦴

## Vue 3 + Typescript + Vite + Tailwind + Vue Router + Pinia + ViteSSG

Lightweight template for setting up Vue apps. Only bones included.

- Using the [`<script setup>`](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) syntax
- [Tailwind](https://tailwindcss.com/) for styling
- [Vue Router](https://router.vuejs.org/) to manage the routes (mostly managed by ViteSSG)
- [ViteSSG](https://github.com/antfu/vite-ssg) to generate a static site.
- [Pinia](https://pinia.vuejs.org/) for state managment. 
- [VueUse](https://vueuse.org/) for utility functions. 

### Consider the following:
- If you want file based routing use the vite plugin [vite-plugin-pages](https://github.com/hannoeru/vite-plugin-pages)

### Recommended IDE Setup
- [VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar)

### Usage
- Run `npx degit dcrendon/VueBones  my-app` to clone without the git history.
- ```bash
  cd my-app
  npm install
  npm run dev
  ```