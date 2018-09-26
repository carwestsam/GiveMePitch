<template>
    <div>
        <keyGroup v-bind:start_note="startPoint" ></keyGroup>
        <keyGroup v-bind:start_note="startPoint+12" ></keyGroup>
        <keyGroup v-bind:start_note="startPoint+24" ></keyGroup>
        <keyGroup v-bind:start_note="startPoint+36" ></keyGroup>
        <toolBar></toolBar>
    </div>
</template>

<script>
import keyGroup from '../components/keyGroup.vue'
import toolBar from '../components/toolBar.vue'

export default {
    data () {
        return {
        }
    },
    methods: {
    },
    components: {
        keyGroup,
        toolBar
    },
    computed: {
        startPoint () {
            let starts = this.$store.getters.getStarts
            let startIdx = this.$store.getters.startIdx
            console.log('computed', startIdx, starts[startIdx][0])
            return starts[startIdx][0]
        }
    }
}
</script>

<style scoped>

</style>
