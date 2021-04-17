import Vue from "vue";
import Vuex from "vuex";
import VueAgile from "vue-agile";

Vue.use(VueAgile);
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    webTheme: "",
  },
  mutations: {
    setWebTheme(state, value) {
      state.webTheme = value;
    },
  },
  actions: {},
  modules: {},
});
