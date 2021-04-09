<template lang="pug">
  section
    div.wallpaper(:style="backgroundImage")
      Navbar
      h3 test {{webTheme}}
      i.icon-home
</template>

<script>
import { mapState } from "vuex";
import Navbar from "../Navbar";

export default {
  name: "HelloWorld",
  components: {
    Navbar,
  },
  data() {
    return {
      isLightTheme: false,
    };
  },
  computed: {
    ...mapState(["webTheme"]),
    backgroundImage() {
      // creating black/white overlay effect
      const darkBackground = {
        backgroundImage:
          "linear-gradient(to bottom, rgba(0,0,0,0.6) 0%,rgba(0,0,0,0.6) 100%), url(" +
          require("@/assets/images/wallpaper.jpg") +
          ")",
      };
      const lightBackground = {
        backgroundImage:
          "linear-gradient(to bottom, rgba(255,255,255,0.65) 0%,rgba(255,255,255,0.65) 100%), url(" +
          require("@/assets/images/wallpaper-white.jpg") +
          ")",
      };
      return this.isLightTheme ? lightBackground : darkBackground;
    },
  },
};
</script>

<style lang="scss">
.wallpaper {
  background-attachment: static;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 100vh;
}

.icon-home {
  color: $blue;
}
</style>
