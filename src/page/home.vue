<template>
  <div class="home">
      <div class="header">
          <img src="../img/logo.svg" alt="" srcset="">
          <div class="wrapper--input">
              <input v-model="user_search_restaurant" type="text" placeholder="De quoi avez-vous envie?">
              <div class="search">
                    <div class="container--restaurant--search" v-for="(restaurant, index) in search_restaurant" :key="index">
                        <router-link :to="{name: 'Restaurant', params: {name: restaurant.name}}">
                            <div class="wrapper--image">
                                <img :src="restaurant.image" alt="">
                            </div>
                            <p>{{restaurant.name}}</p>
                        </router-link>
                    </div>
              </div>
          </div>
      </div>
      <div class="banner"></div>
      <RestaurantRow v-for= "(data, i) in data_restaurant" :key="i" :three_restaurant="data"/> 
  </div>
</template>


<script>
import { onMounted, ref } from 'vue'
// imports
import BDD from '../BDD.js'
// components
import RestaurantRow from '../components/RestaurantRow.vue'
export default {
    name: 'Home',
    components:{
        RestaurantRow
    },
    setup(){
        class Restaurant {
            constructor(name, note, image, drive_time){
                this.name=name
                this.note=note
                this.image=image
                this.drive_time=drive_time
            }
        }

        let data_restaurant = ref([]);
        let all_restaurant = []

        const makeDataRestaurant = () => {
            let three_resturant = [];
            for (const restaurant of BDD){
                const new_restaurant = new Restaurant(restaurant.name, restaurant.note, restaurant.image, restaurant.drive_time)
                //make all restaurants
                all_restaurant.push(new_restaurant)
                if (three_resturant.length === 2){
                    three_resturant.push(new_restaurant);
                    data_restaurant.value.push(three_resturant);
                    three_resturant = [];
                }
                else{
                    three_resturant.push(new_restaurant);
                }
            }
        }
        onMounted(makeDataRestaurant);
        
        return {data_restaurant, all_restaurant}
    },
    data() {
        return{
            user_search_restaurant: '',
            search_restaurant: []
        }
    },
    watch:{
        user_search_restaurant(newValeur){
            // le 'i' est pour préciser qu'on ne respecte pas la casse
            let regex = new RegExp(newValeur, 'i');
            let new_search_restaurant = this.all_restaurant.filter(restaurant => regex.test(restaurant.name));
            this.search_restaurant = newValeur === "" ? [] : new_search_restaurant;
        }
    }
}
</script>


<style>
    .home{
        
    }
    .header{
        height: 120px;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    img{
        width: 200px;
    }
    .wrapper--input{
        position: relative;
    }
    input{
        background-color: #f6f6f6;
        border: none;
        height: 60px;
        width: 480px;
        outline: none;
        padding-left: 20px;
    }
    .search{
        position: absolute;
        top: 100%;
        width: 100%;
        background: #fff;
        z-index: 1;
    }
    .container--restaurant--search{
        display: flex;
        align-items: center;
        padding: 5px;
    }
    .container--restaurant--search:hover{
        background: #f6f6f6;
    }
    .wrapper--image{
        height: 40px;
        width: 40px;
        border-radius: 50%;
        overflow: hidden;
        margin: 5px 25px 0 0;
    }
    .wrapper--image img{
        height: 100%;
        width: auto;
    }
    .banner{
        height: 200px;
        width: 100%;
        background: url('../img/background.png') center no-repeat;
        background-size: cover;
    }
</style>