import App from './App.vue'
import './index.css'
import routes from './router'
import { createPinia } from 'pinia'
import useStore from './store'
import { ViteSSG } from 'vite-ssg'

export const createApp = ViteSSG(
  // the root component
  App,
  // vue-router options
  { routes },
  // function to have custom setups
  ({ app, router, initialState }) => {
    // install plugins etc.
    const pinia = createPinia()
    app.use(pinia)
    useStore()
  },
)