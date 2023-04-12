<template lang="pug">
  aside
      button.darkmode__toggle(@click="toggleTheme" aria-label="Toggle themes")
        span.icon-sun-solid(v-if="this.webTheme == 'darkMode'")
        span.icon-moon-solid(v-else)
      a.social-media__button.icon-email(href="mailto:me@chenfrederick.com?subject=Hi Fred!&body=I'm (name) from (where) (please drop your message kindly here)")
      a.social-media__button.icon-linkedin-solid(href="https://www.linkedin.com/in/chen-frederick" target="_blank")
      a.social-media__button.icon-whatsapp(href="https://wa.me/6285835998805" target="_blank")
      a.social-media__button.icon-github(href="https://github.com/Frederick-88" target="_blank")
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
  display: block;

  border-radius: 4px;
  background: none;
  color: var(--text-color-secondary-notfocus);
  font-size: 1.125rem;
  cursor: pointer;
  border: 0;
  outline: 0;
  text-decoration: none;
  transition: color 0.2s;

  &:hover {
    color: var(--text-color-secondary);
  }
}

.darkmode__toggle {
  align-items: center;
  justify-content: center;
  display: flex;
  width: 80px;
  height: 32px;
  border: 2px solid var(--text-color-secondary-notfocus);
  color: var(--text-color-secondary-notfocus);
  padding: 0;
  outline: 0;
  background: none;
  border-radius: 15px;
  margin-bottom: 10px;
  cursor: pointer;
  transition: color 0.2s, border 0.2s;

  &:hover {
    border-color: var(--text-color-secondary);
    color: var(--text-color-secondary);
  }

  span {
    transition: transform 0.75s;
  }

  .icon-sun-solid {
    font-size: 1.25rem;
    transform: translateX(-15px);
  }

  .icon-moon-solid {
    font-size: 1.125rem;
    transform: translateX(15px);
  }
}

.sidebar__line {
  height: 100px;
  margin-top: 20px;
  border-right: 2px solid var(--sidebar-line);
}
</style>
