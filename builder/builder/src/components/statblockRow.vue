<script setup>
/**
 * TO DO 
 * Display proficiently eqquiped/expertly equipped
 * 
 */
import shipsheet from "../script/shipsheet.js"


var ship = new shipsheet

const props = defineProps({
    info: Object,
    skillname: String
})

//CALCULATE ACCURATE DISPLAYS  


var temp = {
    total: props.info.total,
    prof: props.info.prof,
    adv: props.info.adv,
    override: props.info.overrideFlag
}


//if overrideFlag? = true.
//add an asterisk to the name of the skill. 
//bonus disp = total. 

//if calculated = true; //if calc = true, then appropriate math has been done already (in the total spot) 
//placeholder prof ;check if override prof is different than regular.
//placeholder adv; check if adv is different than regular. 
//if calc = false (aka,a total override is filled), then defaults remain. and only the "total"/applied bonus applies. 

function dispName() {
    var modified = false
    var temp = props.info.dispName
    if (modified == true) {
        temp = temp + "*"
    } 
    return temp}

function show(event) {
    alert(props.skillname)
    //ship.showPopup("info")
    // `event` is the native DOM event
    if (event) {
        console.log(event.target.tagName)
    }
}
/*
function calcBonus() {
console.log(ship.getSkillInfo(props.skillname))
}
*/
//calculatedIDnames 
function rowID() {
    return props.skillname + " skill " + props.info.baseStat
}
function buttonID() {
    return props.skillname + "Bonus"
}
function proID() {
    return props.skillname + "Pro"
}
function expID() {
    return props.skillname + "Exp"
}

//OLD METHOD // 
function totalDisp() {
    if (props.info.total < 0) {
        return props.info.total
    }
    else {
        return "+" + props.info.total
    }
}


defineExpose({
    props
})

</script>

<template>
    <div class="skillRow" :id=rowID()>
        <span class="profScale">
            <div class="exp" :id=expID()></div>
            <div class="pro" :id=proID()></div>
        </span>
        <button :id=buttonID()>{{ totalDisp() }}</button>
        <span @click="show">{{ dispName() }}</span>
        <span class="advdis" style=""><i class="fa-solid"></i>
            <font-awesome-icon icon="a" fixed-width class="adv" v-if="temp.adv == 2" />
            <font-awesome-icon icon="d" fixed-width class="dis" v-else-if="temp.adv == 0" />
        </span>
    </div>
</template>

<style>
.skillRow {
    
    padding: 2%;
}

button {
    
    margin-right : 2%;
}

.advdis {
    float: right;
    font-size: small;
}

.profScale {
    width: 35px;
    padding-left: 1%;
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