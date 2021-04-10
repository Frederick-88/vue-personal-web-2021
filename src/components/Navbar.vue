<template lang="pug">
  section.navigation__bar
      div
        router-link.nav__item.main-nav(to="/") CHENFREDERICK.COM
        hr.nav__line
      router-link.nav__item(to="/about") Works
      router-link.nav__item(to="/about") Experience
      router-link.nav__item(to="/about") Skills
      router-link.nav__item(to="/about") Contact
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style lang="scss">
.navigation__bar {
  .nav__item {
    font-weight: 500;
    color: var(--text-color-primary);
    text-decoration: none;
    margin-right: 30px;
    font-size: 0.875rem;

    &.main-nav {
      color: var(--text-color-secondary);
      font-size: 1rem;
      margin-right: 45px;
    }

    // &.router-link-exact-active {
    //   color: $blue;
    // }
  }

  .nav__line {
    width: 60px;
    margin-left: 0;
    border-color: var(--text-color-secondary);
  }
}
</style>
