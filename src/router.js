import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home/Page'
import Orders from '@/components/Orders'
import OrderDetails from '@/components/OrderDetails'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/orders',
      name: 'orders',
      component: Orders
    },
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/orders/:id',
      name: 'orderDetails',
      component: OrderDetails
    }
  ]
})
