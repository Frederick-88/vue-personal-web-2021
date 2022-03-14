import Vue from "vue";
import Vuex from "vuex";
import ExampleStore from "@/store/example-store";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    exampleStore: ExampleStore, // example usage on component would be -> ...mapState('exampleStore', ['stateFromExampleStore']),
  },
  state: {
    webTheme: "",
    isShowCarouselModal: false,
    activePortofolio: {},
  },
  getters: {},
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
});
