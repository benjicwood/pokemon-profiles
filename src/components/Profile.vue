<template>
  <div v-if="pokemon.name === $route.params.pokemon">
    <p>{{ pokemon.name }} Profile</p>
    <div v-for="(type, index) in pokemon.types" :key="index">
      <p>{{ type.type.name }}</p>
    </div>
    <img :src="`${$store.state.selectedPokemon.sprites.back_default}`" alt="" />
    <img :src="`${$store.state.selectedPokemon.sprites.front_default}`" alt="" />
    <img :src="`${$store.state.selectedPokemon.sprites.front_shiny}`" alt="" />
    <img :src="`${$store.state.selectedPokemon.sprites.other['official-artwork'].front_default}`" alt="" />
        <img :src="`${$store.state.selectedPokemon.sprites.versions['generation-v']['black-white'].animated.front_default}`" alt="" />
  </div>
  <div v-else>
    <p>Loading...</p>
  </div>

  <router-link to="/">Home</router-link>
</template>

<script>
export default {
  name: "Profile",
  props: {
    pokemon: {
      name: String,
      url: String,
    },
  },
  mounted() {
    console.log(this.pokemon);
  },
  watch: {
    pokemon: function (newVal, oldVal) {
      console.log("old: ", oldVal);
      console.log("new: ", newVal);
    },
  },
};
</script>

