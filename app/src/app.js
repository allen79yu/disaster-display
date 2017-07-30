import "./style/app.scss";

import Vue from "vue";
import VueRouter from "vue-router";
import axios from "axios";
import vSelect from "vue-select";
Vue.component("v-select", vSelect);

import App from "./App.vue";
import MapPage from "./pages/map.vue";
import CardPage from "./pages/cards.vue";

Vue.use(VueRouter);
Vue.use(axios);

//router setting
const router = new VueRouter({
    mode: "hash", //tmp
    base: __dirname,
    routes: [
        {
            path: "/",
            component: CardPage
        },
        {
            path: "/map",
            component: MapPage
        },
        {
            path: "/card",
            component: CardPage
        }
    ]
});

const app = new Vue({
    router: router,
    render: h => h(App)
}).$mount("#app");
