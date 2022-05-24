<template>
    <div class="restaurant--row">
        <h2 class="title">Nos restaurants</h2>
        <div class="wrapper--card">
            <RestaurantCard v-for="(card, index) in three_restaurant" :key="index" :info_restaurant="card"/>
        </div>
    </div>
</template>

<script>
import RestaurantCard from './RestaurantCard.vue'
export default {
    name: 'RetaurantRow',
    components:{
        RestaurantCard,
    },
    props:{
        three_restaurant: Array,
    },
}
</script>

<style>
    .title{
        font-size: 2em;
        font-weight: 700;
    }
    .wrapper--card{
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
</style>