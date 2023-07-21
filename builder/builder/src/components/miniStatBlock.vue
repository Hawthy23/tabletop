<script setup>
const props = defineProps({
    stat: String,
    skills: Array,
    statName: String,
})


import { defineComponent } from 'vue'
import shipsheet from "../script/shipsheet.js"
import statblockRow from "./statblockRow.vue";
var ship = new shipsheet
import shipData from "../script/shipData"
import { Fragment } from "vue";

var skills = props.skills


var saveCheckData = shipData.saves[props.stat]

var skillData = shipData.skills
var tempData = []
for (let index = 0; index < skills.length; index++) {
    var element = skills[index];
    var t =
    {
        "info": skillData[element],
        "skillName": element
    }
    tempData.push(t)

}


//calculated ids & classes
function getblock() {
    return "attributeBlock " + props.stat
}



var k

</script>

<template>
    <div :id=stat class="miniStatBlock">
        <div :class=getblock()>
            <div class="bonus">+{{ shipData.baseStat[props.stat].bonus }}</div>
            <div class="attribute">{{ shipData.baseStat[props.stat].statNum }}</div>
        </div>

        <div class="skillBlock">
            <h3>{{ statName }}</h3>
            <!-- save is always first-->
            <statblockRow skillname="save" :info=saveCheckData />
            <!-- then loop through skills (str array) and grab relevant temp data and display it? -->
            <statblockRow v-for="k in props.skills" :info=shipData.skills[k] :skillname=k />

        </div>
    </div>
</template>

<style>
.skillBlock {
    
    float: left;
    padding: 0%;
    margin: 1px;
    margin-bottom: 5px;
    width: calc(100% - 20%);
}






.bonus {
    font-size: x-large;
}

.attributeBlock {
    border: 1px solid black;
    float: left;
    width: 15%;
    border: solid 3px;
    font-size: larger;
    text-align: center;

}
</style>