<template>
    <div class="key-group">
        <div class="key-group-inner">
            <div v-for="key in this.keys"
                v-bind:key="key.code"
                class="key"
                @click="trigger(key)"
                v-hammer:press="onPress(key.note)"
                v-bind:class="{active: isKeyActive(key.code)}"
                >
                                <!-- @mousedown="onPress(key.note)"
                @mouseup="onRelease(key.note)" -->
                {{key.note}}
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['start_note'],
    data () {
        console.log('start', this.start_note)
        let keys = []
        let notes = [this.$store.getters.getNoteByCode(this.start_note),
                    '1#', '2', '2#', '3', '4', '4#',
                     '5', '5#', '6', '6#', '7']
        for ( let i =0; i<12; i++ ){
            keys.push({
                note: notes[i],
                code: i+this.start_note
            })
        }
        return {
            keys
        }
    },
    watch: {
        start_note: function (o, n){
            this.keys.splice(0,this.keys.length)
            for ( let i =0; i<12; i++ ){
                this.keys.push({
                    note:this.$store.getters.getNoteByCode(i+this.start_note),
                    code: i+this.start_note
                })
            }
        }
    },
    methods: {
        trigger: function (key){
            this.$store.getters.synth.triggerRelease(this.$store.getters.getCurrentKeys)
            this.$store.commit('trigger', key.code)
            this.$store.getters.synth.triggerAttack(this.$store.getters.getCurrentKeys)
        },
        onPress: event => key => {
            console.log('onPress', key)
        },
        onRelease: function (key) {
            console.log('onRelease', key)
        },
        isKeyActive: function (keyCode) {
            return this.$store.getters.isActive(keyCode)
        }
    },
}
</script>

<style>
.key-group {
    background-color: lightgray;
    position: relative;
    width: 100%;
    height: 7em;
    clear: both;
    /* overflow: auto; */
}
.key-group::after {
    content: "";
    clear: both;
    display: table;
}
.key-group-inner {
    width: 100%;
    position: absolute;
    height: 4em;
}

.key-group .key {
    display: block;
    position: absolute;
    font-size: 1.2em;
    width: 14.28%;
    height: 2em;
    line-height: 1;

    border: gray 2px solid;
    padding: .4em;
    box-sizing: border-box;
    background-color: white;
}
.key-group .key.active {
    background-color: fuchsia;
}

.key:nth-of-type(1) {
    top: 2em;
    left: 0;
}

.key:nth-of-type(2) {
    top: 0;
    left: 7.14%;
    background-color: black;
    color: white;
}
.key:nth-of-type(3) {
    top: 2em;
    left: 14.28%;
}
.key:nth-of-type(4) {
    top: 0;
    left: 21.419999999999998%;
    background-color: black;
    color: white;
}
.key:nth-of-type(5) {
    top: 2em;
    left: 28.56%;
}
.key:nth-of-type(6) {
    top: 2em;
    left: 42.84%;
}
.key:nth-of-type(7) {
    top: 0;
    left: 49.98%;
    background-color: black;
    color: white;
}
.key:nth-of-type(8) {
    top: 2em;
    left: 57.12%;
}
.key:nth-of-type(9) {
    top: 0;
    left: 64.259%;
    background-color: black;
    color: white;
}
.key:nth-of-type(10) {
    top: 2em;
    left: 71.399%;
}
.key:nth-of-type(11) {
    top: 0;
    left: 78.539%;
    background-color: black;
    color: white;
}
.key:nth-of-type(12) {
    top: 2em;
    left: 85.679%;
}
</style>

