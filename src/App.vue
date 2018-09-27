<template>
  <v-app class='iapp grey'>
    <!-- <keyboard></keyboard> -->
    <router-view></router-view>
    <ifooter></ifooter>
  </v-app>
</template>

<script>
import keyboard from './pages/keyboard.vue'
import ifooter from './components/ifooter.vue'
import 'vuetify/dist/vuetify.min.css'

export default {
    components: {
        keyboard,
        ifooter
    }
}
</script>

<style>
body, div, p, header, footer, h1, h2, h3, h4, h5, h6, span {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 16px;
}
</style>

<style scoped>

.full-width {
  width: 100%;
}

.center-content {
  display: flex;
  justify-content: center;
  align-items: center;
}
.iapp {
  max-width: 1024px;
  margin-left: auto;
  margin-right: auto;
}
</style>
