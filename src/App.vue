<template>
  <div class='iapp'>
    <h1 class="center-content" >合唱忍者的给音器</h1>
    <keyboard></keyboard>
  </div>
</template>

<script>
import keyboard from './pages/keyboard.vue'
export default {
    components: {
        keyboard
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
h1 {
  font-size: 2em;
  padding: 1em 0;
}
.iapp {
  max-width: 1024px;
  margin-left: auto;
  margin-right: auto;
}
</style>
