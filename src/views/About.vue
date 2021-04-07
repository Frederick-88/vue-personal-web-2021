<template>
  <div class="example">
    <h1>This is an about page</h1>
    <p>{{ theme }}</p>

    <button @click="toggleTheme" aria-label="Toggle themes">
      <span v-if="this.theme == 'darkMode'"> Light</span>
      <span v-else> Dark</span>
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      theme: "",
    };
  },
  methods: {
    toggleTheme() {
      this.theme = this.theme === "darkMode" ? "" : "darkMode";
      document.documentElement.setAttribute("data-theme", this.theme);
      localStorage.setItem("theme", this.theme);
    },
  },
  mounted() {
    let localTheme = localStorage.getItem("theme");
    this.theme = !localTheme ? "" : "darkMode";
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
