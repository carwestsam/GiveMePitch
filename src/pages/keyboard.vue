<template>
    <div>
        <div v-for="(value, key) in soundSwitchs"
            v-bind:key="key"
            @click="trigger(key)"
            class="ikey"
            v-bind:class="{active: soundSwitchs[key]}"
            > {{key}} </div>
    </div>
</template>

<script>
import soundButton from '../components/soundButton.vue'
import {Howl, Howler} from 'howler'
import Pizzicato from 'pizzicato'
import Tone from 'tone'
let a2 = 440.0

export default {
    beforeCreate () {
    },
    data () {
        const sounds = ['C3', 'D3', 'E3', 'F3', 'G3', 'A3', 'B3', 'C4']
        let soundSwitchs = {}
        for ( let i = 0 ; i< sounds.length; i++ ){
            soundSwitchs[sounds[i]] = false
        }
        return {
            soundSwitchs,
            polySynth : new Tone.PolySynth(16, Tone.Synth).toMaster()
        }
    },
    methods: {
        trigger: function (pitch) {
            console.log('trigger', pitch)
            
            let current = () => {
                let soundArray = []
                for ( let pitch in this.soundSwitchs) {
                    if (this.soundSwitchs[pitch] == true) {
                        soundArray.push(pitch)
                    }
                }
                console.log(soundArray)
                return soundArray
            }
            
            this.polySynth.triggerRelease(current())

            this.soundSwitchs[pitch] = ! this.soundSwitchs[pitch]

            this.polySynth.triggerAttack(current())
        }
    },
    components: {
        soundButton
    }
}
</script>

<style scoped>
.ikey {
    display: inline-block;
    margin: .2em;
    font-size: 1em;
    padding: 1em;
    background-color: aqua;
}
.ikey.active {
    background-color: fuchsia;
}
</style>
