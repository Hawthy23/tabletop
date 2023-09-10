<script setup>
import miniStatBlock from './miniStatBlock.vue';
const props = defineProps({
    data: Object
})

var skillDist = {
    "str": ["boost", "ram"],
    "dex": ["hide", "maneuvering"],
    "con": ["patch", "regulation"],
    "int": ["astrogation", "data", "probe"],
    "wis": ["scan"],
    "cha": ["impress", "interfere", "menace", "swindle"]
} 
</script>
<script>

</script>

<template>
    <div class = "contBar">
        <div class="sectionBlock show"> <!-- stats -->
            <miniStatBlock stat="str" :skills=skillDist.str statName="Strength" :data=props.data />
            <miniStatBlock stat="dex" :skills=skillDist.dex statName="Dexterity" :data=props.data />
            <miniStatBlock stat="con" :skills=skillDist.con statName="Constitution" :data=props.data />
            <miniStatBlock stat="int" :skills=skillDist.int statName="Intelligence" :data=props.data />
            <miniStatBlock stat="wis" :skills=skillDist.wis statName="Wisdom" :data=props.data />
            <miniStatBlock stat="cha" :skills=skillDist.cha statName="Charisma" :data=props.data />
        </div>
        
        <div class="sectionBlock"><!-- combat --> <h3>combat info</h3> <br /> more stuff here. </div>
        <div class="sectionBlock"><!-- info  --><h3>ship info</h3></div>
        <div class="sectionBlock"><!-- mods--><h3>modifications</h3></div>
        <div class="sectionBlock"><!-- storage --><h3>ship storage</h3></div>
        <div class="sectionBlock"><!-- crew --><h3>ship crew</h3></div>
        <div class="sectionBlock"><!-- extras --><h3>others</h3></div>
    </div>
    
</template>

<style>
.sectionBlock {
    display: none;
    width: 100%;
}
.show {
    display: block;
}
.flex-container {
    display: flex;
    flex-direction: row;
    width: 100%;
}
</style>