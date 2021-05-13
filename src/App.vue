<template lang="pug">
  div#app
    main.main-section(v-if="!isMobile" :style="backgroundImage")   
      div.main-section__container
        Navbar.navigation__bar
        router-view
      Sidebar.sidebar
      div.wave-wrapper(v-if="webTheme !== 'darkMode'")
        svg(xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320")
          path(fill="#f6f6f6" fill-opacity="1" d="M0,224L60,197.3C120,171,240,117,360,117.3C480,117,600,171,720,208C840,245,960,267,1080,250.7C1200,235,1320,181,1380,154.7L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z")

    main.main-mobile__section(v-else)
      h2 Currently Still not Support for Mobile & Mini Desktops
</template>

<script>
import { mapState, mapMutations } from "vuex";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

// vue-slick-carousel imports
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";

export default {
  metaInfo: {
    title: "Chen Frederick's -- Website",
  },
  components: {
    Navbar,
    Sidebar,
  },
  data() {
    return {
      isMobile: false,
    };
  },
  computed: {
    ...mapState(["webTheme"]),
    backgroundImage() {
      // creating black/white overlay effect
      const darkBackground = {
        backgroundImage:
          "linear-gradient(to bottom, rgba(0,0,0,0.35) 0%,rgba(0,0,0,0.35) 100%), url(" +
          require("@/assets/images/wallpaper-dark.jpg") +
          ")",
      };
      const lightBackground = {
        backgroundImage:
          "linear-gradient(to bottom, rgba(255,255,255,0.65) 0%,rgba(255,255,255,0.65) 100%), url(" +
          require("@/assets/images/wallpaper-white.jpeg") +
          ")",
      };
      return this.webTheme === "darkMode" ? darkBackground : lightBackground;
    },
  },
  methods: {
    ...mapMutations(["setWebTheme"]),
    detectMobileUser() {
      if (screen.width < 1120) {
        this.isMobile = true;
      }
    },
  },
  mounted() {
    this.detectMobileUser();

    let localTheme = localStorage.getItem("theme");
    if (!localTheme) {
      this.setWebTheme("");
    } else {
      this.setWebTheme("darkMode");
    }
    // documentElement select the root tag of our html which is <html/>
    document.documentElement.setAttribute("data-theme", localTheme);
  },
};
</script>

<style lang="scss">
@import "@/assets/icomoon/style.scss"; // import at parent of all components for global usage
html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  background-color: var(--background-color);

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    margin: 0;
  }

  &::-webkit-scrollbar-track {
    background-color: var(--background-color);
    width: 10px;
  }

  &::-webkit-scrollbar {
    border-radius: 4px;
    width: 6px;
    background-color: var(--background-color);
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 4px;
    background-color: var(--scroll-color);
  }
}
#app {
  font-family: "Montserrat", sans-serif;

  * {
    box-sizing: border-box;
    font-family: "Montserrat", sans-serif;
  }

  .main-section {
    background-attachment: static;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    height: 100vh;
    position: relative;

    .wave-wrapper {
      position: absolute;
      bottom: -10px;
      z-index: 3;
      width: 100%;
    }

    .sidebar {
      display: flex;
      flex-direction: column;
      align-items: center;
      box-sizing: border-box;
      position: fixed;
      height: 100%;
      z-index: 10;
      padding: 40px 15px 0;
      width: 100px;
      right: 0;
    }
  }

  .main-section__container {
    position: absolute;
    width: 100%;
    min-height: 100vh;
    width: calc(100% - 100px);

    .navigation__bar {
      padding: 40px 130px 0;
      display: flex;
    }
  }
}
</style>
