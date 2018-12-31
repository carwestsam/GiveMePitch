<template>
<div>

<video id="vid-player" controls v-bind:src="vidSrc">
</video>

</div>
</template>

<script>
export default {
    data () {
        return {
            vidSrc : "https://s3-ap-southeast-1.amazonaws.com/egp-videos/vid1.mp4"
        }
    }
}
</script>

<style>
</style>