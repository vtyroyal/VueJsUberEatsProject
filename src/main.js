import { createApp } from 'vue'
import App from './App.vue'

import {createRouter, createWebHashHistory} from 'vue-router'
import Home from './page/home.vue'
import Restaurant from './page/Restaurant.vue'

const routes = [
    { path: '/', component: Home, name: "Home", },
    { path: '/restaurant/:name', component: Restaurant, name: "Restaurant", props: true, },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes
});

createApp(App).use(router).mount('#app')
