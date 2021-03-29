<template>
  <div class="home">
      <PokemonList v-for="(pokemon, index) in $store.state.pokemon" :key="index" :pokemon="pokemon" />
  </div>
</template>

<script>
import axios from 'axios'

import PokemonList from '@/components/PokemonList.vue'

export default {
  name: 'Home',
  components: {
    PokemonList,
  },
  mounted() {
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=151').then(response => this.$store.dispatch('setPokemon', response.data.results))
  }
}
</script>
