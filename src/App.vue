<template>
  <div id="app">
    <router-view class="page" />
  </div>
</template>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .page {
    min-width: 1024px;
    min-height: 100vh;
  }
</style>