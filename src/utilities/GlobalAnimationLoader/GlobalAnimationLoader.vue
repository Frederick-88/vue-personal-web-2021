<template>
  <div class="animation-loader">
    <div class="animation-loader__image" :style="styleObject">
      <Lottie :options="selectedLottieOption"></Lottie>
    </div>
    <div class="animation-loader__text" v-if="text" v-html="text"></div>
  </div>
</template>

<script>
import Lottie from "./LottieWeb.vue";

export default {
  name: "GlobalAnimationLoader",
  components: {
    Lottie,
  },
  props: {
    // GlobalAnimationLoader text
    text: { type: String, default: "" },

    // GlobalAnimationLoader sizes
    width: { type: Number, default: 80 },
    height: { type: Number, default: 0 },

    // JSON file of the GlobalAnimationLoader
    file: {
      type: Object,
      default: () => ({}),
      required: true,
    },
  },
  computed: {
    styleObject() {
      const styleObject = {};

      styleObject.width = `${this.width}px`;
      if (this.height) styleObject.height = `${this.height}px`;

      return styleObject;
    },
    selectedLottieOption() {
      return {
        renderer: "svg",
        loop: true,
        autoplay: true,
        animationData: this.file,
      };
    },
  },
};
</script>

<style lang="scss">
.animation-loader {
  display: block;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-content: center;
  flex-wrap: wrap;
  text-align: center;
  flex-direction: column;
}

.animation-loader__image {
  margin: 0 auto;
  position: relative;
}

.animation-loader__text {
  display: block;
  font-size: 0.875rem;
}
</style>
