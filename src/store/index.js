import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    webTheme: "",
    isShowCarouselModal: false,
    activePortofolio: {},
  },
  mutations: {
    setWebTheme(state, value) {
      state.webTheme = value;
    },
    setIsShowCarouselModal(state, boolean) {
      state.isShowCarouselModal = boolean;
    },
    setActivePortofolio(state, data) {
      state.activePortofolio = data;
    },
  },
  actions: {},
  modules: {},
});
