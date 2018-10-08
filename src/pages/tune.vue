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
                        :min="left"
                        :max="left*2.0"
                        v-model="frequency"
                        thumb-label="always"
                        ></v-slider>
                </v-flex>
                </v-layout>
            </v-container>
        </v-toolbar>
        <div class="player">
            <v-btn @click="start_origin()">播放根音</v-btn>
            <v-btn @click="stop_origin()">停止根音</v-btn>
            <v-btn @click="start()">开始音阶</v-btn>
            <v-btn @click="stop()">关闭音阶</v-btn>
        </div>

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
			"frequency" : left ,
			"volume" : 0
		}).connect(compressor);
        let origin = new Tone.Oscillator({
			"frequency" : left ,
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
             frequency: left
        }
    },
    methods: {
        start: function () {
            this.osc.start();
            // Tone.Master.volume.rampTo(0, 0.05);
        },
        stop: function () {
            let $this = this
            this.osc.stop();
            // Tone.Master.volume.rampTo(-Infinity, 0.05);
        },
        start_origin: function () {
            this.origin.start()
            
        },
        stop_origin: function () {
            this.origin.stop()
        },
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
        }, 100)
    }
}
</script>

<style scoped>
.toolbar {
    width: 100%;
    padding-top: 2em;
}
.player {
    margin-top: 6em;
}
</style>