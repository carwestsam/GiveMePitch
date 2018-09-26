<template>
    <div>
        <v-toolbar>
            <v-btn class="orange white--text" @click="pauseSounds()">暂停</v-btn>
            <v-btn class="red white--text" @click="clearSounds()">清除</v-btn>
        </v-toolbar>
    </div>
</template>
<script>
export default {
    methods: {
        clearSounds: function () {
            this.$store.commit('clearSounds')
        },
        pauseSounds: function () {
            this.$store.commit('pause')
        }
    }
}
</script>
<style>
</style>
