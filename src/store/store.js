import Vuex from 'vuex'
import Vue from 'vue'
import _ from 'lodash'
import Tone from 'tone'

const keyCodes = _.range(0, 96)
const keyNames = [
    'C1', 'C#1', 'D1', 'D#1', 'E1', 'F1', 'F#1', 'G1', 'G#1', 'A1', 'A#1', 'B1',
    'C2', 'C#2', 'D2', 'D#2', 'E2', 'F2', 'F#2', 'G2', 'G#2', 'A2', 'A#2', 'B2',
    'C3', 'C#3', 'D3', 'D#3', 'E3', 'F3', 'F#3', 'G3', 'G#3', 'A3', 'A#3', 'B3',
    'C4', 'C#4', 'D4', 'D#4', 'E4', 'F4', 'F#4', 'G4', 'G#4', 'A4', 'A#4', 'B4',
    'C5', 'C#5', 'D5', 'D#5', 'E5', 'F5', 'F#5', 'G5', 'G#5', 'A5', 'A#5', 'B5',
    'C6', 'C#6', 'D6', 'D#6', 'E6', 'F6', 'F#6', 'G6', 'G#6', 'A6', 'A#6', 'B6',
    'C7', 'C#7', 'D7', 'D#7', 'E7', 'F7', 'F#7', 'G7', 'G#7', 'A7', 'A#7', 'B7',
    'C8', 'C#8', 'D8', 'D#8', 'E8', 'F8', 'F#8', 'G8', 'G#8', 'A8', 'A#8', 'B8',
]

const startPoints = [ 11, 12, 13,
                      13, 14, 15,
                      15, 16, 17,
                      16, 17, 18,
                      18, 19, 20,
                      20, 21, 22,
                      22, 23, 24]

const startNames = ['Cb', 'C', 'C#',
                    'Db', 'D', 'D#',
                    'Eb', 'E', 'E#',
                    'Fb', 'F', 'F#',
                    'Gb', 'G', 'G#',
                    'Ab', 'A', 'A#',
                    'Bb', 'B', 'B#']

function getStore () {
    Vue.use(Vuex)
    let soundSwitchs = {}
    _.each(keyCodes, key => {
        soundSwitchs[key] = false
    })
    return new Vuex.Store({
        state: {
            soundSwitchs,
            paused : [],
            startIdx : 1,
            sustainPedal : false,
            synth : new Tone.PolySynth(16, Tone.Synth).toMaster()
        },
        mutations: {
            trigger (state, keyCode) {
                state.paused = []
                if ( state.sustainPedal == true ){
                    state.soundSwitchs[keyCode] = ! state.soundSwitchs[keyCode]
                }
            },
            clearSounds (state) {
                state.paused = []
                state.synth.triggerRelease(this.getters.getCurrentKeys)
                for ( let i=0; i<96; i++ ){
                    state.soundSwitchs[i] = false
                }
            },
            pause (state) {
                if ( state.paused.length == 0 ) {
                    state.paused = this.getters.getCurrentKeyCodes
                    state.synth.triggerRelease(this.getters.getCurrentKeys)
                    for ( let i=0; i<96; i++ ){
                        state.soundSwitchs[i] = false
                    }
                } else {
                    for ( let i=0; i<state.paused.length; i++ ){
                        state.soundSwitchs[state.paused[i]] = true
                    }
                    state.synth.triggerAttack(this.getters.getCurrentKeys)
                    state.paused = []
                }
            },
            transposingByIdx (state, idx) {
                state.startIdx = idx
            },
            setSustain (state, newValue) {
                state.sustainPedal = newValue
            }
        },
        getters: {
            getNoteByCode: (state) => (code) => {
                return keyNames[code]
            },
            getCurrentKeys: (state) => {
                let current = []
                for ( let i=0; i<96; i++ ){
                    if (state.soundSwitchs[i] == true)
                        current.push(keyNames[i])
                }
                return current
            },
            getCurrentKeyCodes: (state) => {
                let current = []
                for ( let i=0; i<96; i++ ){
                    if (state.soundSwitchs[i] == true)
                        current.push(i)
                }
                return current
            },
            isActive: state => code => {
                return state.soundSwitchs[code]
            },
            synth: (state) => {
                return state.synth
            },
            getStarts: state => {
                return _.zip(startPoints, startNames)
            },
            startPoint: state => {
                return startPoints[state.startIdx]
            },
            startIdx: state => {
                return state.startIdx
            },
            sustainPedal: state => {
                return state.sustainPedal
            }
        }
    })
}
export let store = getStore()
export {getStore}
