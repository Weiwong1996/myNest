import Vue from 'vue'
import App from './App'
import router from './router'
import Vant from 'vant'
import 'vant/lib/index.css'
import 'lib-flexible'

Vue.use(Vant)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
