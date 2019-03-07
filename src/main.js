import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './stores'
import AppMixin from './mixins/AppMixin'
import './registerServiceWorker'

// Plugins
import './plugins'

Vue.config.productionTip = false

Vue.mixin(AppMixin)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
