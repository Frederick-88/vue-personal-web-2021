<template lang="pug">
  aside
      button.social-media__button.darkmode__toggle(@click="toggleTheme" aria-label="Toggle themes")
        span.icon-sun-solid(v-if="this.webTheme == 'darkMode'") Light
        span.icon-moon-solid(v-else) Dark
      button.social-media__button.icon-email(type="button")
      button.social-media__button.icon-linkedin-solid(type="button")
      button.social-media__button.icon-whatsapp(type="button")
      button.social-media__button.icon-github(type="button")
      div.sidebar__line
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  name: "Sidebar",
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
};
</script>

<style lang="scss">
.social-media__button {
  padding: 15px 5px;
  border-radius: 4px;
  background: none;
  color: var(--text-color-secondary-notfocus);
  font-size: 1.125rem;
  cursor: pointer;
  border: 0;
  outline: 0;
  transition: color 0.2s;

  &:hover {
    color: var(--text-color-secondary);
  }
}

.sidebar__line {
  height: 100px;
  margin-top: 20px;
  border-right: 2px solid var(--sidebar-line);
}
</style>
