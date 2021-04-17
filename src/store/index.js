import { createStore } from 'vuex'

export default createStore({
  state: {
    pokemon: [],
    pokemonList: [],
    selectedPokemon: [],
    selectedPokemonType: '',
  },

  mutations: {
    setPokemon(state, pokemon) {
      state.pokemon = pokemon
      state.pokemonList = pokemon
    },
    setPokemonProfile(state, pokemon) {
      state.selectedPokemon = pokemon
      state.selectedPokemonType = pokemon.types[0].type.name
    },
    filterList(state, filterString) {
      state.pokemon = state.pokemonList.filter(pkmn => {
            return pkmn.name.toLowerCase().includes(filterString.toLowerCase()
            )
        })
      console.log(filterString)
    },
  },

  actions: {
    setPokemon({ commit }, pokemon) {
      commit('setPokemon', pokemon)
    },
    setPokemonProfile({ commit }, pokemon) {
      commit('setPokemonProfile', pokemon)
    },
    filterList({ commit }, filterString) {
      commit('filterList', filterString)
    }
  },
  modules: {}
})
