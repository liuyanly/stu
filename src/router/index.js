import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Main from '@/components/Main'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Main,
      children: [
        // 用户管理
        // {
        //     path: '/userInfo',
        //     component: user/userInfo
        // }
      ]
    }
  ]
})
