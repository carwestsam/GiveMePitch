import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify'
import VueRouter from 'vue-router'

import {getStore} from './store/store.js'
import router from './router'

Vue.use(Vuetify)
Vue.use(VueRouter)

new Vue({
  el: '#app',
  router,
  store: getStore(),
  render: h => h(App)
})
