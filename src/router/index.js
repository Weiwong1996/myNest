import Vue from 'vue'
import Router from 'vue-router'
import index from '@/views/index'
import resume from '@/views/Resume/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: index
    },
    {
      path: '/resume',
      name: 'resume',
      component: resume
    }
  ]
})
