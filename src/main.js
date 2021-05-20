import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueMeta from "vue-meta";
import VueSlickCarousel from "vue-slick-carousel";
import Toast from "vue-toastification";
import AOS from "aos";
import "aos/dist/aos.css";
import "vue-toastification/dist/index.css";

const options = {
  timeout: 5000,
  position: "top-center",
};
Vue.use(Toast, options);

Vue.config.productionTip = false;

Vue.use(VueMeta);
Vue.component("VueSlickCarousel", VueSlickCarousel);

new Vue({
  created() {
    AOS.init();
  },
  router,
  store,
  render: function(h) {
    return h(App);
  },
}).$mount("#app");
