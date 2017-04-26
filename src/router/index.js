import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Watchlist from '@/components/Watchlist'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/watchlist',
      name: 'watchlist',
      component: Watchlist
    }
  ]
})
