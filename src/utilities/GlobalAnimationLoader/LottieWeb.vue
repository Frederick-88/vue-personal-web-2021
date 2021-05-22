<template>
  <div ref="animationContainer" />
</template>

<script>
import lottie from "lottie-web";

export default {
  props: {
    options: {
      type: Object,
      required: true,
    },
  },

  data() {
    return {
      anim: null,
    };
  },

  mounted() {
    this.setupLottie(true);
  },

  methods: {
    setupLottie() {
      this.anim = lottie.loadAnimation({
        container: this.$refs.animationContainer,
        renderer: process.env.VUE_APP_RENDERER,
        loop: this.options[process.env.VUE_APP_LOOP],
        autoplay: this.options[process.env.VUE_APP_AUTOPLAY],
        animationData: this.options[process.env.VUE_APP_ANIMATION],
        rendererSettings: this.options[process.env.VUE_APP_SETTINGS],
        path: this.options[process.env.VUE_APP_PATH] || null,
      });
    },
  },
};
</script>
