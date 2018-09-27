<template>
    <div>
        <h1 class="center-content white">合唱忍者的找音键盘</h1>
        <keyGroup v-bind:start_note="startPoint+36" ></keyGroup>
        <keyGroup v-bind:start_note="startPoint+24" ></keyGroup>
        <keyGroup v-bind:start_note="startPoint+12" ></keyGroup>
        <keyGroup v-bind:start_note="startPoint" ></keyGroup>
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
            return starts[startIdx][0]
        }
    }
}
</script>

<style scoped>
h1 {
  font-size: 2em;
  padding: 1em 0;
  text-align: center;
}
</style>
