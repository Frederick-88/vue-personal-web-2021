<template lang="pug">
  section.navigation__bar
      div
        router-link.nav__item.main-nav(to="/") Staging-ChenFrederick.com
        hr.nav__line
      a.nav__item(href="#my-intro") My Intro
      a.nav__item(href="#works") Works
      a.nav__item(href="#experience") Experience
      a.nav__item(href="#skills") Skills
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style lang="scss">
.navigation__bar {
  animation: fade-down 2s;

  .nav__item {
    display: block;
    font-weight: 500;
    color: var(--text-color-primary);
    text-decoration: none;
    margin-right: 30px;
    font-size: 0.875rem;
    text-transform: uppercase;

    &.main-nav {
      color: var(--text-color-secondary);
      font-size: 1rem;
      margin-right: 45px;
      text-transform: uppercase;
    }
  }

  .nav__line {
    width: 60px;
    margin-left: 0;
    border-color: var(--text-color-secondary);
  }
}
</style>
