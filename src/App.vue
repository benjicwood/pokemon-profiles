<template>
  <div id="header">
    <img src="./assets/pkmnlogo.png" alt="">
  </div>
  <router-view />
</template>

<script>
export default {
  mounted() {
    // console.log(this.$route.params.pokemon)
  },
  watch: {
    $route(to, from) {
      console.log('to', to)
      console.log('from', from)
    }
  }
}

</script>


<style>
* {
  box-sizing: border-box;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#header {
  padding: 20px 0;
}
</style>
