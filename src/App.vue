<template>
  <div id="app">
    <router-view class="main" v-cloak />
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: 'app'
    }
  },
  mounted: function() {
    console.log('创建')
  }
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
