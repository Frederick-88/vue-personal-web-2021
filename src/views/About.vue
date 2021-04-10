<template lang="pug">
  div.example
    h1 This is an about page
</template>

<script>
import { mapMutations } from "vuex";

export default {
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
.example {
  background-color: var(--background-color);
  color: var(--text-color-primary);
}
</style>
