import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Watchlist from '@/components/Watchlist'
import Details from '@/components/Details'

Vue.use(Router)

export default new Router({
  mode: 'history',
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
    },
    {
      path: '/details/:type/:id',
      name: 'details',
      component: Details
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})
