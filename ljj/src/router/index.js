import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'
import Life from '@/components/Life'
import Orders from '@/components/Orders'
import Mime from '@/components/Mime'
import Goods from '@/components/Goods'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // },
    {
      path: '/',
      name: 'home',
      component: Home
    },{
      path: '/life',
      name: 'life',
      component: Life
    },{
      path: '/orders',
      name: 'orders',
      component: Orders
    },{
      path: '/mime',
      name: 'mime',
      component: Mime
    },{
      path: '/goods',
      name: 'goods',
      component: Goods
    }
  ]
})
