<template>
  <div id="app">
    <router-view class="nav-view"
      name="nav" />
    <router-view class="main-view"
      name="main" />
  </div>
</template>

<style lang="scss">
@import '../assets/base';
body {
  // TODO: find bootstrap override
  background-color: $light !important;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.nav-view {
  width: $left-menu-width;
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
}

.main-view {
  margin-left: $left-menu-width;
  width: calc(100% - $left-menu-width);
}
</style>
