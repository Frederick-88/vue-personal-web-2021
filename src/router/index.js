import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

// vue-route lazy loading reference => https://www.bacancytechnology.com/blog/vuejs-app-performance-optimization
const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/Home.vue"),
  },
  // --- blog route/page hasn't needed as for now
  // {
  //   path: "/blog",
  //   name: "Blog",
  //   component: () => import("../views/Blog.vue"),
  // },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
