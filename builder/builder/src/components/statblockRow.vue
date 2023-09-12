<script setup>
/**
 * TO DO 
 * Display proficiently eqquiped/expertly equipped
 * 
 */
import { faL } from "@fortawesome/free-solid-svg-icons";

const props = defineProps({
    info: Object,
    skillname: String
})

var overrideFlag = props.info.overrideFlag



//CALCULATE ACCURATE DISPLAYS  

function dispName() {

    var temp = props.info.dispName
    if (overrideFlag == true) {
        temp = temp + "*"
    }
    return temp
}

function show(event) {
    alert(props.skillname)
    //ship.showPopup("info")
    // `event` is the native DOM event
    if (event) {
        console.log(event.target.tagName)
    }
}

//advantage, exp, and pro
var adv = props.info.adv
if (overrideFlag) {
    if (props.info.overrides.adv != "") {
        adv = props.info.overrides.adv
    }
}
var prof = props.info.prof
if (overrideFlag) {
    if (props.info.overrides.prof != "") {
        adv = props.info.overrides.prof
    }
}

//prof 0 is not prof, 1 is prof, 2 is expert, 3 is extra* (3 is specific and funky case)

var isExp = false
var isPro = false
switch (prof) {
    case 1: //proficient
        isPro = true
        isExp = false
        break;
    case 2: //expert
        isPro = false
        isExp = true
        break;
    //case 3: //special usecase will work later. 
    // break;
    default:
        isPro = false
        isExp = false
        break;
}

//calculatedIDnames 
function rowID() {
    return props.skillname + " skill " + props.info.baseStat
}
function buttonID() {
    return props.skillname + "Bonus"
}


//display functions
function totalDisp() {
    var total = props.info.total

    if (overrideFlag == true) {
        if (props.info.overrides.total != "") {
            total = props.info.overrides.total
        }
        else {
            total = props.info.overrides.calcTotal
        }
    }

    if (props.info.total < 0) {
        return total
    }
    else {
        return "+" + total
    }
}



defineExpose({
    props
})

</script>

<template>
    <div class="Row" :id=rowID()>
        <span class="profScale">
            <div class="exp" :class="{ fill: isExp }" ></div>
            <div class="pro" :class="{ fill: isPro }" ></div>
        </span>
        <button :class=buttonID()>{{ totalDisp() }}</button>
        <span @click="show">{{ dispName() }}</span>
        <span class="advdis" style=""><i class="fa-solid"></i>
            <font-awesome-icon icon="a" fixed-width class="adv" v-if="adv == 2" />
            <font-awesome-icon icon="d" fixed-width class="dis" v-else-if="adv == 0" />
        </span>
    </div>
</template>

<style>
.Row {
    padding: 2%;
}
button {
    margin-right: 2%;
}

.advdis {
    float: right;
    font-size: small;
}

.profScale {
    width: 35px;
    padding-left: 1%;
}

.fill {
    background-color: black;
}

.exp {
    float: left;
    width: 8px;
    height: 8px;
    transform: rotate(45deg);
    border: 2px solid black;
    padding: 0%;
    margin: 0%;
    margin-left: 1px
}

.pro {
    float: left;
    width: 10px;
    height: 10px;
    border-radius: 10px;
    transform: rotate(45deg);
    border: 2px solid black;
    padding: 0%;
    margin: 0%;
    margin-left: 2px;

}
</style>