<template>
    <router-link :to="{ name: 'PokemonProfile', params: { pokemon: pokemon.name }}">
        <p>{{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}}</p>
    </router-link>
</template>

<script>
export default {
  name: 'Pokemon',
  props: {
    pokemon: {
      name: String,
      url: String,
    },
    methods: {
      // capitalizeFirstLetter: function (string) {
      //   console.log(string)
      //   return string.charAt(0).toUpperCase() + string.slice(1);
      // }
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
  text-decoration: none;
}
p {
  color: #42b983;
  font-size: 2em;
}
p:hover {
  color: #35a673;
}
</style>
