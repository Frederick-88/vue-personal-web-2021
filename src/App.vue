<template lang="pug">
  div#app
    //- ---
    //- --- keep, in case later might need another lottie page, see Home.vue
    //- ---
    //- main(v-if="isTabletScreen")
    //-   router-view

    main.main-mobile__section(v-if="isMobileScreen || isTabletScreen" :style="backgroundImage")
      MobileNavbar
      router-view
      div.mobile-wave-wrapper(v-if="!isDarkMode")
        svg(xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320")
          path(fill="#f6f6f6" fill-opacity="1" d="M0,224L60,197.3C120,171,240,117,360,117.3C480,117,600,171,720,208C840,245,960,267,1080,250.7C1200,235,1320,181,1380,154.7L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z")

    main.main-section(v-else :style="backgroundImage")   
      div.main-section__container
        Navbar.navigation__bar
        router-view
      Sidebar.sidebar
      div.wave-wrapper(v-if="!isDarkMode")
        svg(xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320")
          path(fill="#f6f6f6" fill-opacity="1" d="M0,224L60,197.3C120,171,240,117,360,117.3C480,117,600,171,720,208C840,245,960,267,1080,250.7C1200,235,1320,181,1380,154.7L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z")
</template>

<script>
import { mapState, mapMutations, mapGetters } from "vuex";
import { debounce } from "debounce";
import Navbar from "./components/Navbar";
import MobileNavbar from "./components/MobileNavbar";
import Sidebar from "./components/Sidebar";

// vue-slick-carousel imports
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";

export default {
  metaInfo: {
    title: "Chen Frederick | Staging Website",
    meta: [
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        name: "description",
        content:
          "Professional Solution-Driven Fullstack Web Developer Specialised in Front-End Development with Several Years of Experience. Proficient in Vue & React. Experienced on Building Websites Along The Stages of Web Development Cycle, Meeting Best Practices.",
      },
      {
        name: "keywords",
        content:
          "Frederick, frederick, Chen Frederick, chen frederick, Frederick Website, frederick website, Frederick Batam, Frederick Indonesia, Chen Frederick Batam, React, Vue, ReactJS, VueJS, Frontend, Frontend Developer, Web Developer, Fullstack Developer",
      },

      // Facebook / OpenGraph
      { property: "og:url", content: "https://www.chenfrederick.com/" },
      { property: "og:title", content: "Chen Frederick | Website" },
      { property: "og:site_name", content: "Chen Frederick | Website" },
      { property: "og:type", content: "website" },
      {
        property: "og:description",
        content:
          "Professional Solution-Driven Fullstack Web Developer Specialised in Front-End Development with Several Years of Experience. Proficient in Vue & React. Experienced on Building Websites Along The Stages of Web Development Cycle, Meeting Best Practices.",
      },

      // Twitter
      { name: "twitter:card", content: "summary" },
      { name: "twitter:url", content: "https://www.chenfrederick.com/" },
      { name: "twitter:title", content: "Chen Frederick | Website" },
      {
        name: "twitter:description",
        content:
          "Professional Solution-Driven Fullstack Web Developer Specialised in Front-End Development with Several Years of Experience. Proficient in Vue & React. Experienced on Building Websites Along The Stages of Web Development Cycle, Meeting Best Practices.",
      },
    ],
  },
  components: {
    Navbar,
    Sidebar,
    MobileNavbar,
  },
  computed: {
    ...mapState(["webTheme"]),
    ...mapGetters(["isMobileScreen", "isTabletScreen"]),
    isDarkMode() {
      return this.webTheme === "darkMode";
    },
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
      return this.isDarkMode ? darkBackground : lightBackground;
    },
  },
  methods: {
    ...mapMutations(["setWebTheme", "setScreenType"]),
    darkModeSetup() {
      let localTheme = localStorage.getItem("theme");
      if (!localTheme) {
        this.setWebTheme("");
      } else {
        this.setWebTheme("darkMode");
      }
      // documentElement select the root tag of our html which is <html/>
      document.documentElement.setAttribute("data-theme", localTheme);
    },

    debounceDetectScreenSize: debounce(function () {
      this.detectScreenSize();
    }, 250),
    detectScreenSize() {
      /*
      mobile size = 0px - 600px
      tablet size = 600px - 1024px
      small-desktop size = 1024px - 1366px
      desktop size = 1366px - 2560px / larger
      */
      if (screen.width <= 600) {
        this.setScreenType("mobile");
      } else if (screen.width < 1025) {
        this.setScreenType("tablet");
      } else if (screen.width < 1366) {
        this.setScreenType("small-desktop");
      } else {
        this.setScreenType("");
      }
    },
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.debounceDetectScreenSize);
  },
  beforeMount() {
    this.detectScreenSize();
    this.darkModeSetup();
  },
  mounted() {
    window.addEventListener("resize", this.debounceDetectScreenSize);
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

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 8px;
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
      animation: fade-down 2s;
    }
  }

  .main-section__container {
    position: absolute;
    width: 100%;
    min-height: 100vh;
    width: calc(100% - 100px);
  }

  // <-- Mobile Section -->
  .main-mobile__section {
    background-attachment: static;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    height: 100vh;
    position: relative;

    .mobile-wave-wrapper {
      position: absolute;
      bottom: -10px;
      z-index: 3;
      width: 100%;
    }
  }

  @keyframes fade-down {
    0% {
      opacity: 0;
      transform: translateY(-75px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes fade-up {
    0% {
      opacity: 0;
      transform: translateY(75px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes fade-right {
    0% {
      opacity: 0;
      transform: translateX(-75px);
    }
    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }
}
</style>
