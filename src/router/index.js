import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/pages/Login'
import Home from '@/components/pages/Home'
import Form from '@/components/pages/BaseForm'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
      redirect: '/home/form',
      children: [
        {
          path: 'form',
          name: 'form',
          component: Form
        }
      ]
    }
  ]
})
