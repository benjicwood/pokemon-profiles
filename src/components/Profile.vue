<template>
  <div class="profile-box" v-if="pokemon.name === $route.params.pokemon">
    <div class="official-artwork-box">
          <img class="official-artwork" :src="`${$store.state.selectedPokemon.sprites.other['official-artwork'].front_default}`" alt="" />
    </div>
    <p class="name">{{ pokemon.name }}</p>
    <div class="types">
      <div v-for="(type, index) in pokemon.types" :key="index">
          <img :src="require(`../assets/type-icons/${type.type.name}.svg`)" alt="">
          <p>{{ type.type.name }}</p>
      </div>
    </div>
    <!-- <img :src="`${$store.state.selectedPokemon.sprites.back_default}`" alt="" />
    <img :src="`${$store.state.selectedPokemon.sprites.front_default}`" alt="" />
    <img :src="`${$store.state.selectedPokemon.sprites.front_shiny}`" alt="" />
    <img :src="`${$store.state.selectedPokemon.sprites.versions['generation-v']['black-white'].animated.front_default}`" alt="" /> -->
  </div>
  
  <div v-else>
    <p>Loading...</p>
  </div>

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

<style scoped>
.profile-box {
  display: grid;
  grid-template-columns:repeat(3, 1fr);
  grid-auto-rows: minmax(150px, auto);
  border: 1px solid red;
}

.official-artwork-box {
  grid-row: 1/3;
  grid-column: 1/2;
}

.official-artwork {
  width: 300px;
  height: 300px;
}

.name {
  color: white;
  font-size: 80px;
  margin: auto 0;
  grid-column: 2/4;
  grid-row: 1/2;
  text-align: left;
}
.types {
  grid-column: 2;
  grid-row: 2/3;
}
</style>