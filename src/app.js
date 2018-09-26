import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify'
import {getStore} from './store/store.js'

Vue.use(Vuetify)

new Vue({
  el: '#app',
  store: getStore(),
  render: h => h(App)
})
