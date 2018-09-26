<template>
    <div>
        <keyGroup v-bind:start_note="24" ></keyGroup>
        <keyGroup v-bind:start_note="36" ></keyGroup>
        <keyGroup v-bind:start_note="48" ></keyGroup>
        <keyGroup v-bind:start_note="60" ></keyGroup>
        <toolBar></toolBar>
    </div>
</template>

<script>
import keyGroup from '../components/keyGroup.vue'
import toolBar from '../components/toolBar.vue'

export default {
    methods: {
    },
    components: {
        keyGroup,
        toolBar
    }
}
</script>

<style scoped>

</style>
