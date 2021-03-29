<template>
  <div id="nav">
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
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}
</style>
