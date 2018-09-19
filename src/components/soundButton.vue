<template>
<div class="sButton playing" @click="toggle()">
    {{this.pitch}}
</div>
</template>

<script>
import Pizzicato from 'pizzicato'

export default {
    props: ['frequency', 'pitch'],
    data: function () {
        let soundObject = {
            wave: new Pizzicato.Sound({ 
                source: 'wave', 
                options: {
                    frequency: this.frequency
                }
            }),
            switch: false
        }
        return {
            soundObject
        }
    },
    methods: {
        toggle: function () {
            if ( this.soundObject.switch == false){
                this.soundObject.wave.play()
                this.soundObject.switch=true
            } else if (this.soundObject.switch == true){
                this.soundObject.wave.pause()
                this.soundObject.switch=false
            }
        }
    }
}
</script>

<style>
.sButton {
    display: block;
    max-width: 5em;
    text-align: center;
}
.stop {
    background-color: red;
}

.playing {
    background-color: aquamarine;
}

</style>
