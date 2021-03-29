<template>
    <router-link :to="{ name: 'PokemonProfile', params: { pokemon: pokemon.name }}">
        <p>{{pokemon.name}}</p>
    </router-link>
</template>

<script>
export default {
  name: 'Pokemon',
  props: {
    pokemon: {
      name: String,
      url: String,
    }
  },
}
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
