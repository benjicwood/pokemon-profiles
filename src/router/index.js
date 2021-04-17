import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import PokemonProfile from '../views/PokemonProfile'
import Battle from '../views/Battle'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  }, 
  {
    path: '/:pokemon',
    name: 'PokemonProfile',
    component: PokemonProfile,
  },
  {
    path: '/battle',
    name: 'Battle',
    component: Battle,
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
