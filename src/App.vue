<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
@import "@/assets/icomoon/style.scss"; // import at parent of all components for global usage

body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
  }
}
#app {
  font-family: "Montserrat", sans-serif;
}
</style>
