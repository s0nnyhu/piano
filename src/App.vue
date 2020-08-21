<template>
  <div id="app">
    <img alt="Vue logo" width="130" height="90" src="./assets/img/logo.png" />
    <router-view class="view"></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
  watch: {
    '$route'(to) {
      document.title = to.meta.title || 's0nnyHu'
    }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 20px;
}
img {
  margin-bottom: 1rem;
}
</style>
