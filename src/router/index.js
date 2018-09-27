import VueRouter from 'vue-router'

import profile from '../pages/profile.vue'
import toc from '../pages/toc.vue'
import keyboard from '../pages/keyboard.vue'

const routes = [
    { path: '/profile', component: profile },
    { path: '/', component: toc },
    { path: '/toc', component: toc },
    { path: '/keyboard', component: keyboard }
  ]

const router = new VueRouter({
    routes
})

export default router