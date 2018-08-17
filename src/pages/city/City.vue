<template>
    <div>
        <city-header></city-header>
        <city-list></city-list>
    </div>
</template>

<script>
import Header from './components/Header.vue'
import City from './components/List.vue'
export default {
    name: 'City',
   
    components: {
        CityHeader: Header,
        CityList: City 
    },
}
</script>
<style lang="stylus" scoped>
    
</style>

