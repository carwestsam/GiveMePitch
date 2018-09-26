import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify'
import {getStore} from './store/store.js'
import {VueHammer} from 'vue2-hammer'

VueHammer.config.press = {
  threshold: 20
}

Vue.use(VueHammer)
Vue.use(Vuetify)

new Vue({
  el: '#app',
  store: getStore(),
  render: h => h(App)
})
