import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Orders from '@/components/Orders'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/orders',
      name: 'Orders',
      component: Orders
    },
    {
      path: '/',
      name: 'home',
      component: Home
    },

  ]
})
