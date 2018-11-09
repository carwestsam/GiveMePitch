import VueRouter from 'vue-router'

const profile = () => import('../pages/profile.vue')
const toc = () => import('../pages/toc.vue')
const keyboard = () =>  import('../pages/keyboard.vue')
// import scale from '../pages/scale.vue'
const scale = () => import('../pages/scale.vue')

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
