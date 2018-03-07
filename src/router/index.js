import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

import login from '@/components/login.vue'
import home from '@/components/home'
Vue.use(Router)

export default new Router({
  routes: [
    {path: '/',redirect: '/login'},
    {path:'/login',name:'login',components:{main:login}},
    {path:'/homes',name:'homes',components:{main:home}},
  ]
})
