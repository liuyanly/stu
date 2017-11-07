import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
// import Main from '@/components/Main'
// import UserInfo from '@/components/user/userInfo'
// import AllUserInfo from '@/components/user/allUserInfo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/main'
    },
    {
      path: '/main',
      component: resolve => require(['../components/Main.vue'], resolve),
      // meta: { type: "user", activeName: '/userInfo'},
      children: [
        // 用户管理
        {
          path: '/userInfo',
          component: resolve => require(['../components/user/userInfo.vue'], resolve)
            // meta: { type: "user", activeName: '/userInfo'},
        },
        {
          path: '/allUserInfo',
          component: resolve => require(['../components/user/allUserInfo.vue'], resolve)
            // meta: { type: "user", activeName: '/userInfo'},
        }
      ]
    }
  ]
})
