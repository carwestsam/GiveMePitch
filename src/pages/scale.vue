<template>
    <div>
        <v-toolbar fixed class="toolbar">
            <v-container
                fluid
                grid-list-lg
            >
                <v-layout
                row
                wrap
                >
                <v-flex xs12>
                    <v-slider
                        :min="min"
                        :max="max"
                        v-model="frequency"
                        step="0.01"
                        ></v-slider>
                </v-flex>
                </v-layout>
            </v-container>
        </v-toolbar>
        <v-flex xs12 sm6 class="py-2 player" >
            <p>根音频率： {{left}} </p>
            <p>变音频率： {{frequency}} </p>
            <v-btn-toggle v-model="toggle_multiple" multiple>
            <v-btn flat>
                播放根音
            </v-btn>
            <v-btn flat>
                播放变音
            </v-btn>
            </v-btn-toggle>
        </v-flex>

        <div class="key-group">
            <h3> 五声音阶 </h3>
            <div class="key-group-inner">
                
                <div v-for="(v,k) in right1" :key="k" @click="sw(v)"
                    class="key">
                    {{k}}
                </div>
            </div>
        </div>
                <div class="key-group">
            <h3> 平均律音阶 </h3>
            <div class="key-group-inner">
                
                <div v-for="(v,k) in right2" :key="k" @click="sw(v)"
                    class="key">
                    {{k}}
                </div>
            </div>
        </div>
        <div class="key-group">
            <h3> 纯律音阶 </h3>
            <div class="key-group-inner">
                <div v-for="(v,k) in right3" :key="k" @click="sw(v)"
                    class="key">
                    {{k}}
                </div>
            </div>
        </div>
        


    </div>
</template>
<script>
import Tone from 'tone'
import _ from 'lodash'

export default {
    data () {
        let left = 523.25  ;
        let mid = Math.pow ( 2, 1.0/1200.0 )
        let compressor = new Tone.Compressor().toMaster()
        let osc = new Tone.Oscillator({
			"frequency" : left * 1.5,
			"volume" : 0
		}).connect(compressor);
        let origin = new Tone.Oscillator({
			"frequency" : left,
			"volume" : 0
		}).connect(compressor);


        let right1 = {
            "C": left,
            "C#": left * (mid ** 114),
            "D": left * (mid ** 204),
            "D#": left * (mid ** 318),
            "E": left * (mid ** 408),
            "F": left * (mid ** 523),
            "F#": left * (mid ** 612),
            "G": left * (mid ** 702),
            "G#": left * (mid ** 816),
            "A": left * (mid ** 906),
            "A#": left * (mid ** 1020),
            "B": left * (mid ** 1110) 
        }
        let right2 = {
            "C": left,
            "C#": left * (mid ** 100),
            "D": left * (mid ** 200),
            "D#": left * (mid ** 300),
            "E": left * (mid ** 400),
            "F": left * (mid ** 500),
            "F#": left * (mid ** 600),
            "G": left * (mid ** 700),
            "G#": left * (mid ** 800),
            "A": left * (mid ** 900),
            "A#": left * (mid ** 1000),
            "B": left * (mid ** 1100) 
        }
        let right3 = {
            "C": left,
            "C#": left * (16/15),
            "D": left * (9/8),
            "D#": left * (6/5),
            "E": left * (5/4),
            "F": left * (4/3),
            "F#": left * (45/32),
            // "Gb": left * (64/45),
            "G": left * (3/2),
            "G#": left * (8/5),
            "A": left * (5/3),
            "A#": left * (16/9),
            "B": left * (15/8) 
        }
        return {
             osc,
             origin,
             right1,
             right2,
             right3,
             left,
             min: left * 0.9,
             max: left* 2.2,
             bottom: false,
             upper: false,
             toggle_multiple: [],
             frequency: left*1.5
        }
    },
    methods: {
        sw: function (newValue) {
            this.osc.frequency.value = newValue
            this.osc.volume.value =  Math.floor(5.0 - newValue/50.0)
            this.frequency = newValue
        }
    },
    watch: {
        frequency: _.throttle(function ( newValue, oldValue ) {
            console.log(newValue, Math.floor(5.0 - newValue/30.0));
            this.osc.frequency.value = newValue
            this.osc.volume.value =  Math.floor(5.0 - newValue/50.0)
        }, 100),
        toggle_multiple: function (newValue, oldVaule) {
            let vobj = {}
            _.each(newValue, v => {vobj[v] = true})
            if ( this.bottom != (0 in vobj) ) {
                if (this.bottom == false) this.origin.start()
                else this.origin.stop()
                this.bottom = ! this.bottom
            }
            if ( this.upper != (1 in vobj) ) {
                if (this.upper == false) this.osc.start()
                else this.osc.stop()
                this.upper = ! this.upper
            }
            console.log('obj', vobj)
            console.log('newValue', newValue)
        }
    }
}
</script>

<style scoped>
.toolbar {
    width: 100%;
    // padding-top: 2em;
}
.player {
    margin-top: 4em;
}
</style>