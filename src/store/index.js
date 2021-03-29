import { createStore } from 'vuex'

export default createStore({
  state: {
    pokemon: [],
    selectedPokemon: [],
  },

  mutations: {
    setPokemon(state, pokemon) {
      state.pokemon = pokemon
    },
    setPokemonProfile(state, pokemon) {
      state.selectedPokemon = pokemon
    }
  },

  actions: {
    setPokemon({ commit }, pokemon) {
      commit('setPokemon', pokemon)
    },
    setPokemonProfile({ commit }, pokemon) {
      commit('setPokemonProfile', pokemon)
    }
  },
  modules: {}
})
