import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Scheduler from '@/components/Scheduler'
import Login from '@/components/Login'

Vue.use(Router)


const router = new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/scheduler',
      name: 'scheduler',
      component: Scheduler
    },{
      path: '/login',
      name: 'login',
      component: Login
    }
  ]
})
router.beforeEach((to, from, next) => {
  // ...判断session是否过期
  // debugger
  if(Math.random() > 0.5) {
    next(`/login?redirect=${to.path}`)
  }else{
    next()
  }
  console.log()
})
export default router;