import Vue from 'vue'
import Router from 'vue-router'
import index from '@/views/index'
import home from '@/views/Home/Home'
import resume from '@/views/Resume/index'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: index,
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'Home',
      component: home
    },
    {
      path: '/resume',
      name: 'resume',
      component: resume
    }
  ]
})
