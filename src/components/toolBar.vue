<template>
    <div>
        <v-toolbar>
            <v-btn class="orange white--text" @click="pauseSounds()">暂停</v-btn>
            <!-- <v-btn class="red white--text" @click="clearSounds()">清除</v-btn> -->
            <v-btn class="red white--text"
                    @click="sustainPedal()">{{sustainNote.note}}</v-btn>
            <v-dialog v-model="dialog" persistent max-width="290">
                <v-btn slot="activator" color="primary" dark>移调</v-btn>
                <v-card>
                    <v-container text-xs-center>
                        <v-layout row wrap>
                            <v-flex v-for="(key, idx) in starts" :key="idx" xs4>
                                <!-- <v-btn>Good</v-btn> -->
                                <v-card
                                    light
                                    color="white"
                                    v-bind:class="{blue: idx == currentStart,'white--text': idx == currentStart}">
                                    <v-card-text
                                        @click="transposing(idx)"
                                        class="px-0">{{key[1]}}</v-card-text>
                                </v-card>
                            </v-flex>
                            <v-flex xs12>
                                <v-card
                                    light
                                    color="white"
                                    v-bind:class="{blue: 1 == currentStart,'white--text': 1 == currentStart}">
                                    <v-card-text
                                        @click="transposing(1)"
                                        class="px-0"> 固定调 </v-card-text>
                                </v-card>
                            </v-flex>
                        </v-layout>
                    </v-container>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn
                            color="primary"
                            flat
                            @click="dialog = false"
                        >
                            确认
                        </v-btn>
                    </v-card-actions>
                </v-card>
                
            </v-dialog>
        </v-toolbar>
    </div>
</template>
<script>
export default {
    data () {
        let starts = this.$store.getters.getStarts
        return {
            starts: this.$store.getters.getStarts,
            currentStart: 1,
            dialog: false,
            sustain: this.$store.getters.sustainPedal
        }
    },
    methods: {
        clearSounds: function () {
            this.$store.commit('clearSounds')
        },
        sustainPedal: function () {
            this.sustain = !this.sustain
            this.$store.commit('clearSounds')
            this.$store.commit('setSustain', this.sustain)
        },
        pauseSounds: function () {
            this.$store.commit('pause')
        },
        transposing: function (start_idx) {
            this.currentStart = start_idx
            this.$store.commit('transposingByIdx', start_idx)
        }
    },
    computed: {
        sustainNote: function () {
            const notes = [
                {
                    'note': '用延音',
                },
                {
                    'note': '去延音',
                }
            ]
            let sustain = this.$store.getters.sustainPedal
            if (sustain == false) return notes[0]
            if (sustain == true) return notes[1]
        }
    }
}
</script>
<style>
</style>
