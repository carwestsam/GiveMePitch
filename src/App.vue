<template>
  <div>
    <h1 class="center-content" >Hello World!</h1>
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

<style scoped>

.full-width {
  width: 100%;
}

.center-content {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
