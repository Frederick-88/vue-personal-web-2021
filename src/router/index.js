import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

// if you are about to add a route please use a lazy loading of vue-routes
// for reference can look on offeo-canvas / on readme references
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
