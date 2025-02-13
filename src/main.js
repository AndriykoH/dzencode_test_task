
import Vue from 'vue'
import App from './App'
import store from './store'
import router from './router'
import vuetify from '@/plugins/vuetify'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  vuetify,
  store,
  render: h => h(App)
}).$mount('#app')
