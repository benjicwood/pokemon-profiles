<template>
    <input
    type="text"
    v-model="filterString"
    placeholder="Search Pokémon..."
    >
</template>

<script>

export default {
    name: 'Filter',
    data() {
        return {
           filterString: '',
        }
    },
    watch: {
        filterString: function() {
            console.log(this.filterString)
            this.$store.dispatch('filterList', this.filterString);
        }
    }

}

</script>

<style scoped>
input {
    width: 300px;
    height: 30px;
    padding: 10px;
    border: 1px solid lightgrey;
    border-radius: 10px;
    box-shadow: 4px 4px 10px rgba(0,0,0,0.06);
}

input:focus-visible {
    outline: none;
}

</style>