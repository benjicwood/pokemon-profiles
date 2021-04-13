<template>
    <p>Filter</p>
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

</style>