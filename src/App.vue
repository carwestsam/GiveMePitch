<template>
  <div>
    <h1 class="center-content" >Hello World!</h1>
    <soundButton pitch="A" frequency="440"></soundButton>
  </div>
</template>

<script>
import soundButton from './components/soundButton.vue'
export default {
    components: {
        soundButton
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
