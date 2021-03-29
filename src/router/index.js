import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import PokemonProfile from '../views/PokemonProfile'

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
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
