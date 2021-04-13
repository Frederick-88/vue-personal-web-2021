<template>
  <div ref="lavContainer" />
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
        container: this.$refs.lavContainer,
        renderer: "svg",
        loop: this.options.loop,
        autoplay: this.options.autoplay,
        animationData: this.options.animationData,
        rendererSettings: this.options.rendererSettings,
        path: this.options.path || null,
      });
    },
  },
};
</script>
