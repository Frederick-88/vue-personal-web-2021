<template lang="pug">
  section.home-banner(:style="backgroundImage")    
    div.home-banner__container
      Navbar.navigation__bar

      div.home-banner__content
        div.left-column
          div.left-column__content
            h3.title Chen
            h3.title Frederick
            p.subtitle Passionate Fullstack Developer who thrives in fast paced environment, love to learn new things in technology & empower to deliver quality in advance.
            p.subtitle.cta-text Have a look in my CV below.

        div.right-column
          GlobalAnimationLoader(:file="workingLaptopJson" :width="600")

    Sidebar.sidebar
</template>

<script>
import { mapState, mapMutations } from "vuex";
import JsonFile from "@/assets/json/man-work-with-laptop.json";
import GlobalAnimationLoader from "@/utilities/GlobalAnimationLoader/GlobalAnimationLoader.vue";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";

export default {
  name: "HelloWorld",
  components: {
    Navbar,
    Sidebar,
    GlobalAnimationLoader,
  },
  data() {
    return {
      workingLaptopJson: JsonFile,
    };
  },
  computed: {
    ...mapState(["webTheme"]),
    backgroundImage() {
      // creating black/white overlay effect
      const darkBackground = {
        backgroundImage:
          "linear-gradient(to bottom, rgba(0,0,0,0.6) 0%,rgba(0,0,0,0.6) 100%), url(" +
          require("@/assets/images/wallpaper-dark.jpg") +
          ")",
      };
      const lightBackground = {
        backgroundImage:
          "linear-gradient(to bottom, rgba(255,255,255,0.65) 0%,rgba(255,255,255,0.65) 100%), url(" +
          require("@/assets/images/wallpaper-white.jpg") +
          ")",
      };
      return this.webTheme === "darkMode" ? darkBackground : lightBackground;
    },
  },
  methods: {
    ...mapMutations(["setWebTheme"]),
  },
  mounted() {
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
.home-banner {
  background-attachment: static;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 100vh;
  position: relative;

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

.home-banner__container {
  position: absolute;
  width: 100%;
  min-height: 100vh;
  width: calc(100% - 100px);

  .navigation__bar {
    padding: 40px 60px 0;
    display: flex;
  }
}

.home-banner__content {
  display: flex;
  color: var(--text-color-primary);
  margin-top: 50px;

  .left-column {
    flex: 60%;
    padding: 30px;
    justify-content: center;
    display: flex;
  }

  .right-column {
    flex: 40%;
    padding: 30px;
    justify-content: center;
    display: flex;

    .image {
      width: 100%;
      height: 100%;
      border-radius: 50%;
    }
  }

  .left-column__content {
    width: 550px;
  }

  .title {
    font-size: 3.5rem;
    font-weight: 700;
  }

  .subtitle {
    font-size: 1.125rem;
    line-height: 1.7;

    &.cta-text {
      margin-top: 40px;
    }
  }
}
</style>
