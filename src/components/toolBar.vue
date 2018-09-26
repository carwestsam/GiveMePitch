<template>
    <div>
        <v-toolbar>
            <v-btn>暂停</v-btn>
            <v-btn @click="clearSounds()">清除</v-btn>
        </v-toolbar>
    </div>
</template>
<script>
export default {
    methods: {
        clearSounds: function () {
            this.$store.commit('clearSounds')
        }
    }
}
</script>
<style>
</style>
