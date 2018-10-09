import VueRouter from 'vue-router'

import profile from '../pages/profile.vue'
import toc from '../pages/toc.vue'
import keyboard from '../pages/keyboard.vue'
import scale from '../pages/scale.vue'

const routes = [
    { path: '/profile', component: profile },
    { path: '/', component: toc },
    { path: '/toc', component: toc },
    { path: '/keyboard', component: keyboard },
    { path: '/scale', component: scale }
  ]

const router = new VueRouter({
    routes
})

export default router
