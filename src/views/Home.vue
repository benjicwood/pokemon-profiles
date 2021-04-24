<template>
  <div class="home">
    <!-- <router-link :to="{ name: 'Battle'}">
      <p>Battle</p>
    </router-link> -->
      <Filter />
      <div v-bind:class="[$store.state.pokemon.length > 2 ? 'grid' : $store.state.pokemon.length === 2 ? 'grid-two' : 'grid-one']">
        <PokemonList v-for="(pokemon, index) in $store.state.pokemon" :key="index" :pokemon="pokemon" />
      </div>
  </div>
</template>

<script>
import axios from 'axios'

import Filter from '@/components/Filter.vue'
import PokemonList from '@/components/PokemonList.vue'

export default {
  name: 'Home',
  components: {
    Filter,
    PokemonList,
  },
  mounted() {
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=151').then(response => this.$store.dispatch('setPokemon', response.data.results))
  }
}
</script>

<style scoped>
.grid {
  /* background: #eee; */
  /* padding: 1em; */
  /* border: 1px solid black; */
  display: grid;
  /* grid-template-columns: 1fr 1fr 1fr; */
  grid-template-columns:repeat(3, 1fr);
  grid-auto-rows: minmax(100px, auto);
  /* grid-column-gap: 1em; 
  grid-row-gap: 1em; */
  /* grid-gap: 1em; */
}
.grid > :nth-child(even) {
  background: #eee;
}
.grid > :nth-child(odd) {
  background: #ddd;
}

.grid-two {
  display: grid;
  /* grid-template-columns: 1fr 1fr 1fr; */
  grid-auto-rows: minmax(100px, auto);
  grid-template-columns:repeat(2, 1fr);
}

.grid-two > :nth-child(even) {
  background: #eee;
}
.grid-two > :nth-child(odd) {
  background: #ddd;
}

.grid-one {
  grid-template-columns:repeat(1, 1fr);
  display: grid;
  /* grid-template-columns: 1fr 1fr 1fr; */
  grid-auto-rows: minmax(100px, auto);
  background: #eee;
}
</style>