<script setup>
</script>
<script>
export default{
  name: 'App',
}
</script>

<template>
  <router-view></router-view>
</template>

<style>
@import './assets/base.css';
@import './styles/reset.css';
@import 'https://fonts.googleapis.com/css2?family=Roboto%3Awght%40300%3B400%3B700&display=swap';

#app {
  font-family: 'Roboto', sans-serif;
  padding: 0 20px;
}

@media (hover: hover) {
  a:hover {
    background-color: hsla(160, 100%, 37%, 0.2);
  }
}

@media (min-width: 1024px) {
}
</style>
