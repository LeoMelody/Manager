<template>
  <div id="app">
    <router-view class="main" v-cloak />
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="stylus">
  @import "./common/css/base.stylus"

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
