import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import City from '@/pages/city/City'
import Detail from '@/pages/detail/Detail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      // 当用户访问根路径的时候给用户展示的是HelloWorld
      path: '/',
      name: 'Home',
      component: Home
    },{
      path: '/city',
      name:'City',
      component: City
    },{
      path: '/detail/:id',
      name: 'City',
      component: Detail
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
