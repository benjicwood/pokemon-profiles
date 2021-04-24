<template>
  <router-link to="/">Home</router-link>

  <div :class="$store.state.selectedPokemonType">
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

<style scoped>

div {
  border: 1px solid black;
}

.grass {
  background-color: #ADEAC3;
}
.water {
  background-color: #90DAD9;
}
.electric {
  background-color: #F2DDC0;
}
.fire {
  background-color: #F3BEBC;
}
.psychic {
  background-color: #E7A8E3;
}
.dragon {
  background-color: #A09CD3;
}
.ghost {
  background-color: #323232;
}
.normal {
  background-color: #D3CBD0;
}
.fighting {
  background-color: #E6C9C5;
}
.bug {
  background-color: #9CCBC0;
}
.poison {
  background-color: #D29DC0;
}
.rock {
  background-color: #EED2BC;
}
.ground {
  background-color: #E7DCCA;
}
.flying {
  background-color: #C2D6C4;
}
.ice {
  background-color: #92A0CF;
}
</style>
