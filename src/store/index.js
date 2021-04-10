import Vue from "vue";
import Vuex from "vuex";

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
