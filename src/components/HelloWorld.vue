<template lang="pug">
  //- <div>
  //-   <div class="wallpaper" :style="backgroundImage" />
  //-   <h3>test</h3>
  //- </div>
  section
    div.wallpaper(:style="backgroundImage")
    h3 test
</template>

<script>
export default {
  name: "HelloWorld",
  computed: {
    backgroundImage() {
      // creating black overlay effect
      return {
        backgroundImage:
          "linear-gradient(to bottom, rgba(0,0,0,0.6) 0%,rgba(0,0,0,0.6) 100%), url(" +
          require("@/assets/images/wallpaper.jpg") +
          ")",
      };
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
</style>
