import Vue from 'vue'
import Router from 'vue-router'
import index from '@/views/index'
// import home from '@/views/Home/Home'
import gallery from '@/views/Gallery/index'
import contact from '@/views/Contact/index'
import about from '@/views/About/index'

import resume from '@/views/Resume/index'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: index,
      children: [
        {
          path: '',
          name: 'gallery',
          component: gallery
        },
        // {
        //   path: 'gallery',
        //   name: 'gallery',
        //   component: gallery
        // },
        {
          path: 'contact',
          name: 'contact',
          component: contact
        },
        {
          path: 'about',
          name: 'about',
          component: about
        }
      ]
    },
    {
      path: '/resume',
      name: 'resume',
      component: resume
    }
  ]
})
