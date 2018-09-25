<template>
    <div>
        <keyGroup v-bind:start_note="24" v-bind:trigger="trigger"></keyGroup>
        <keyGroup v-bind:start_note="36" v-bind:trigger="trigger"></keyGroup>
        <keyGroup v-bind:start_note="48" v-bind:trigger="trigger"></keyGroup>
        <keyGroup v-bind:start_note="60" v-bind:trigger="trigger"></keyGroup>
    </div>
</template>

<script>
import soundButton from '../components/soundButton.vue'
import keyGroup from '../components/keyGroup.vue'
import {Howl, Howler} from 'howler'
import Pizzicato from 'pizzicato'
import Tone from 'tone'
import _ from 'lodash'
let a2 = 440.0
const sounds = [['C2', 'C#2', 'D2', 'D#2', 'E2', 'F2', 'F#2', 'G2', 'G#2', 'A2', 'A#2', 'B2'],
                ['C3', 'C#3', 'D3', 'D#3', 'E3', 'F3', 'F#3', 'G3', 'G#3', 'A3', 'A#3', 'B3'],
                ['C4', 'C#4', 'D4', 'D#4', 'E4', 'F4', 'F#4', 'G4', 'G#4', 'A4', 'A#4', 'B4'],
                ['C5', 'C#5', 'D5', 'D#5', 'E5', 'F5', 'F#5', 'G4', 'G#5', 'A5', 'A#5', 'B5']]

export default {
    data () {
        let soundSwitchs = {}
        _.each(_.flatten(sounds), key => {
            soundSwitchs[key] = false
        })
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
        soundButton,
        keyGroup
    }
}
</script>

<style scoped>

</style>
