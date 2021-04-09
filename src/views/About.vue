<template>
  <div class="example">
    <h1>This is an about page</h1>
    <p>{{ webTheme }}</p>

    <button @click="toggleTheme" aria-label="Toggle themes">
      <span v-if="this.webTheme == 'darkMode'"> Light</span>
      <span v-else> Dark</span>
    </button>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  computed: {
    ...mapState(["webTheme"]),
  },
  methods: {
    ...mapMutations(["setWebTheme"]),
    toggleTheme() {
      if (this.webTheme === "darkMode") {
        this.setWebTheme("");
      } else {
        this.setWebTheme("darkMode");
      }
      document.documentElement.setAttribute("data-theme", this.webTheme);
      localStorage.setItem("theme", this.webTheme);
    },
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
  color: var(--text-color);
}
</style>
