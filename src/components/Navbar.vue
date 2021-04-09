<template lang="pug">
div#nav
    router-link(to="/") Home |
    router-link(to="/about") About
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style lang="scss">
#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: $darkGrey1;

    &.router-link-exact-active {
      color: $blue;
    }
  }
}
</style>
