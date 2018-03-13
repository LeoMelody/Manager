<template>
    <div v-cloak>
        <div class="slide-menu">
            <div class="m-header">
                    侧边菜单
            </div>
            <el-menu :default-active="menuActive"
                            @select="selectMenu"
                            @open="handleOpen"
                            @close="handleClose"
                            :router="true"
                            :default-openeds="defaultOpens"
                            background-color="rgb(73,80,79)"
                            text-color="#fff"
                            active-text-color="#ffd04b">
                <el-submenu v-for="item,index in menu" :key="item.name" :index="item.index">
                    <template slot="title" v-if="item.isParent">
                        <i class="el-icon-menu"></i>
                        <span>{{item.name}}</span>              
                    </template>
                    <el-menu-item-group>
                            <el-menu-item  v-for="item2, index2 in item.children" 
                                        :index="item2.index"
                                        :route="item2.router"
                                        :key="item2.name">{{item2.name}}</el-menu-item>
                    </el-menu-item-group>      
                </el-submenu>
            </el-menu>
        </div>
    </div>
</template>

<script>
import utils from '../../util/utils'
export default {
  data() {
      return {
          menu: [],
          menuActive: '',
          defaultOpens: []
      }
  },
  methods: {
      queryMenu() {
        var that = this
        var userInfo = JSON.parse(sessionStorage.getItem('userInfo')) 
        this.menu = userInfo.authority
        this.menuActive = this.menu[0].index
        this.defaultOpens = [this.menu[0].index]
        console.log(this.defaultOpens)
      },
      selectMenu() {
          
      },
      handleOpen() {
      },
      handleClose() {
      }
  },
  mounted() {
      this.queryMenu()
  }
}
</script>

<style lang="stylus">
    [v-clock] {
        display: none;
    }

    .slide-menu {
        margin 0
        padding 0
        width 300px
        overflow-y scroll
        background menu-bg
        color #fff
        align-self stretch
        height 100%
        .el-menu {
            height 100%
            width 100%
            border none
            .el-submenu {
                .el-submenu__title {
                    font-size 24px
                }
                .el-menu-item {
                    font-size 18px
                }
            }
        }
        .m-header {
            font-size 32px
            height 70px
            line-height 70px
            color #fff
            background-color rgb(73,80,79)
        }
    }
</style>
