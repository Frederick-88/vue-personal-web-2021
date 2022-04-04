import Vue from "vue";
import Vuex from "vuex";
import ExampleStore from "@/store/example-store";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    exampleStore: ExampleStore, // example usage on component would be -> ...mapState('exampleStore', ['stateFromExampleStore']),
  },
  state: {
    screenType: "", // mobile, tablet ( 600px - 1024px ), small-desktop ( 1025px - 1365px ), big-desktop ( equals to '', screen that is > 1366)
    webTheme: "",
    isShowCarouselModal: false,
    activePortofolio: {},
  },
  getters: {
    isMobileScreen: (state) => {
      return state.screenType === "mobile";
    },
    isTabletScreen: (state) => {
      return state.screenType === "tablet";
    },
    isSmallDesktopScreen: (state) => {
      return state.screenType === "small-desktop";
    },
  },
  mutations: {
    setScreenType(state, value) {
      state.screenType = value;
    },
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
