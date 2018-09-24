<template>
<div class="sButton" v-bind:class="{active: this.switch}" @click="toggle()">
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
        return soundObject
    },
    methods: {
        toggle: function () {
            if ( this.switch == false){
                this.wave.play()
                this.switch=true
            } else if (this.switch == true){
                this.wave.pause()
                this.switch=false
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
    border: black solid 1px;
    margin: 2px;
    background-color: aquamarine;
}
.active {
    background-color: red;
}

</style>
