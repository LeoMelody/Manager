<template>
  <div class="login-wrapper">
    <transition name="fadeUp">
        <el-card class="l-card" v-show="isShowCard">
            <div slot="header" class="l-header">
                <span>DD后台管理系统</span>
            </div>
            <el-form>
                <el-form-item>
                    <el-input v-model="adminName" placeholder="管理员账户"></el-input>
                </el-form-item>
                <el-form-item class="margin-sm">
                    <el-input v-model="password" placeholder="管理员密码" type="password"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-checkbox v-model="isCheck" label="一个月内自动登录" name="type"></el-checkbox>
                     <a href="#" class="text-right">忘记密码?</a>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="login">登录</el-button>
                </el-form-item>
                <el-form-item>
                    <span>账号密码均为admin</span>
                </el-form-item>
            </el-form>
        </el-card>
    </transition>
    <el-alert
        title="账号或密码错误"
        type="error"
        center
        show-icon
        @close="closeError"
        v-show="loginError">
  </el-alert>
  </div>
</template>
<script>
export default {
  data() {
      return {
          isShowCard: false,
          adminName: '',
          password: '',
          isCheck: false,
          loginError: false
      }
  },
  mounted() {
      var that = this
      if (!this.isShowCard) {
          setTimeout(function() {
              that.isShowCard = true
          }, 300)
      }
  },
  methods: {
      login() {
          if (this.isCheck) {
             // 处理缓存，否则不处理
          }
          if (this.adminName === 'admin' && this.password === 'admin') {
              // 前往
              this.$router.push({
                  path: '/home'
              })
          } else {
            setTimeout(() => {
                this.loginError = true
            }, 300)
          }
      },
      closeError() {
          this.loginError = false
      }
  }
}
</script>

<style lang="stylus">
    .login-wrapper {
        width 100%
        height 100%
        background-image url(../../assets/loginback.jpg)
        background-size 100% 100%
        .l-card {
            margin 0 auto
            width 400px
            height 450px
            position absolute
            left 0
            right 0
            top 220px
            .l-header {
                font-size 24px
            }
            .el-form {
                margin-top 30px
                .el-form-item {
                    .el-form-item__content {
                        text-align left 
                        .text-right {
                            float right 
                        }
                        .el-button {
                            margin 20px auto
                            width 100%
                        }
                    }
                }
                .margin-sm {
                    margin-bottom 10px
                }
            }
        }
        
    }

</style>
