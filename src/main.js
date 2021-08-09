import Vue from 'vue'
import App from './App'
import router from './router'
import Vant from 'vant'
import 'vant/lib/index.css'
import 'lib-flexible'

import Viewer from 'v-viewer'
import 'viewerjs/dist/viewer.css'

Vue.use(Vant)
Vue.use(Viewer, {
  defaultOptions: {
    navbar: false,
    title: false,
    toolbar: false
  }
})
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
