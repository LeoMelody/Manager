<template>
    <div class="home-wrapper">
        <div class="h-menu">
            <div v-show="isMore">
                <div class="m-header">
                    侧边菜单
                </div>
                <el-menu :default-active="menuActive"
                            @select="selectMenu"
                            @open="handleOpen"
                            @close="handleClose"
                            :router="true"
                            :default-openeds="['1-1']"
                            background-color="rgb(73,80,79)"
                            text-color="#fff"
                            active-text-color="#ffd04b">
                    <el-submenu index="1-1">
                        <template slot="title">
                            <i class="el-icon-menu"></i>
                            <span>menu one</span>
                        </template>
                        <el-menu-item-group >
                            <el-menu-item index="B-1-1" route="/home/form">sub menu 1</el-menu-item>
                            <el-menu-item index="B-1-2" route="/home/form">sub menu 2</el-menu-item>
                            <el-menu-item index="B-1-3" route="/home/form">sub menu 3</el-menu-item>              
                        </el-menu-item-group>
                    </el-submenu>
                    <el-submenu index="2-1">
                        <template slot="title">
                            <i class="el-icon-menu"></i>
                            <span>menu two</span>
                        </template>
                        <el-menu-item-group >
                            <el-menu-item index="B-2-1" route="/home/form">sub menu 1</el-menu-item>
                            <el-menu-item index="B-2-2" route="/home/form">sub menu 2</el-menu-item>
                            <el-menu-item index="B-2-3" route="/home/form">sub menu 3</el-menu-item>              
                        </el-menu-item-group>
                    </el-submenu>
                </el-menu>
            </div>     
        </div>
        <div class="fix-box" @click="hideMenu">
            <i class="el-icon-d-arrow-left" v-show="isMore"></i>
        </div>
        <div class="h-cotainer">
            
        </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
      menuActive: '1-1',
      isMore: true
    };
  },
  methods: {
    selectMenu() {
        console.log('select')
    },
    handleClose() {
        console.log('close')
    },
    handleOpen() {
        console.log('open')
    },
    hideMenu() {

    }
  },
  mounted() {
      var sessionkey = localStorage.getItem('sessionkey')
      if (!sessionkey) {
          this.$router.push({
            path: '/'
          })
      }
  }
};
</script>
<style lang="stylus">
menu-bg = rgb(73,80,79)

.home-wrapper {
    display: flex;
    flex-direction: row;
    .h-menu {
        margin 0
        padding 0
        width 300px
        overflow-y scroll
        background menu-bg
        color #fff
        align-self stretch
        .el-menu {
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
        }
    }
    ::-webkit-scrollbar {
        width: 10px
        height 20px
    } 
    ::-webkit-scrollbar-track {
	    background-color: #fff;
	} 
    ::-webkit-scrollbar-thumb {
		background-color: rgba(0, 0, 0, 0.2);
        height: 30px; 
	}

    .h-container {
        flex 1
    }

    .fix-box {
        align-self center
        position absolute
        width 25px
        height 50px
        line-height 50px
        background rgba(0,0,0,.1)
        cursor pointer
        left 265px
        border none 
        color #fff
        i:hover{
            animation iChange 1s infinite
        }
    }
}

@keyframes iChange {
    0% {
        transform scale(1)
    }
    50% {
        transform scale(1.15)
    }
    100% {
        transform scale(1)
    }
}
</style>
