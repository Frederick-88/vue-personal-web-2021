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
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
</style>
