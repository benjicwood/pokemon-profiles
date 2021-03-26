<template>
    <!-- <router-link :to="{ name: 'Pokemon', params: { pokemon: 'Charmander' }}"> -->
     <router-link to="/About">
    <div @click="viewPokemon(pokemon.url)">
    <p>{{pokemon.name}}</p>
      </div>
      </router-link>
    <!-- </router-link> -->
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
  methods: {
    viewPokemon(url) {
      console.log(url)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
