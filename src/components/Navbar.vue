<template lang="pug">
  section.navigation__bar
      div
        router-link.nav__item.main-nav(to="/") Staging-ChenFrederick.com
        span.nav__line
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
  display: flex;
  padding-top: 40px;
  margin: 0 auto;
  width: 85%;
  max-width: 1400px;

  @include large-monitor {
    max-width: 1700px;
  }

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
    display: block;
    margin-top: 10px;
    width: 60px;
    height: 2px;
    background-color: var(--text-color-secondary);
  }
}
</style>
