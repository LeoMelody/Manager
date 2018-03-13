<template>
  <div id="app">
    <router-view class="main" v-cloak />
  </div>
</template>

<script>
import utils from './util/utils'

export default {
  data() {
    return {
      name: 'app'
    }
  },
  mounted: function() {
    this.checkLogin()
  },
  methods: {
    checkLogin() {
      var session = sessionStorage.getItem('session')
      if (session) {
        this.getUser()
      } else {
        this.$router.push({
          path: '/'
        })
      }
    },
    getUser() {

    }
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
