<template>
  <div class="about">
    <Profile :pokemon="$store.state.selectedPokemon" />
  </div>
</template>


<script>
import axios from 'axios'

import Profile from '@/components/Profile'

export default {
  name: 'PokemonProfile',
  components: {
    Profile,
  },
  mounted() {
      axios.get(`https://pokeapi.co/api/v2/pokemon/${this.$route.params.pokemon}`).then(response => this.$store.dispatch('setPokemonProfile', response.data))
  }
}

</script>
