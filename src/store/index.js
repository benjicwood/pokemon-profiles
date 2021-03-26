import { createStore } from 'vuex'

export default createStore({
  state: {
    pokemon: [],
  },

  mutations: {
    setPokemon(state, pokemon) {
      state.pokemon = pokemon
      console.log(pokemon)
    }
  },

  actions: {
    setPokemon({ commit }, pokemon) {
      commit('setPokemon', pokemon)
    }
  },
  modules: {}
})
