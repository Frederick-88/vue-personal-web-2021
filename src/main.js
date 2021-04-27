import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueMeta from "vue-meta";
import VueSlickCarousel from "vue-slick-carousel";

Vue.config.productionTip = false;

Vue.use(VueMeta);
Vue.component("VueSlickCarousel", VueSlickCarousel);

new Vue({
  router,
  store,
  render: function(h) {
    return h(App);
  },
}).$mount("#app");
