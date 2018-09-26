<template>
    <div>
        <keyGroup v-bind:start_note="24" ></keyGroup>
        <keyGroup v-bind:start_note="36" ></keyGroup>
        <keyGroup v-bind:start_note="48" ></keyGroup>
        <keyGroup v-bind:start_note="60" ></keyGroup>
    </div>
</template>

<script>
import keyGroup from '../components/keyGroup.vue'

export default {
    methods: {
    },
    components: {
        keyGroup
    }
}
</script>

<style scoped>

</style>
