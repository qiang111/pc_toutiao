import Vue from 'vue'
import App from './App.vue'

import ELEMENTUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ELEMENTUI)

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
