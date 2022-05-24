<template>
  <div class="restaurant--card">
      <div class="restaurant--image" :style="changeBackground">
          
      </div>
      <div class="restaurant--information">
          <div class="top">
              <p class="name">{{info_restaurant.name}}</p>
              <p class="note"><span>{{info_restaurant.note}}</span></p>
          </div>
          <p class="time">{{info_restaurant.drive_time}}</p>
      </div>
  </div>
</template>

<script>
import { computed } from 'vue'

export default {
    name: 'RestaurantCard',
    props:{
        info_restaurant: Object
    },
    setup(props){
        const changeBackground= computed(() => {
            return {
                backgroundImage: `url(${props.info_restaurant.image})`
            }
        })

        return {changeBackground}
    } 
}
</script>

<style>
    .restaurant--card{
        width: 32%;
        height: 32vh;
    }
    .restaurant--image{
        background: url("../img/img.jpg") center;
        height: 70%;
        background-size: cover;
    }
    .restaurant--information{
        line-height: 1em;
    }
    .top{
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin: 10px 0;
    }
    .time{
        font-size: 0.9em;
    }
    .note{
        background: #eee;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 30px;
        width: 30px;
        font-size: 0.8rem;
        border-radius: 50%;
    }
</style>"