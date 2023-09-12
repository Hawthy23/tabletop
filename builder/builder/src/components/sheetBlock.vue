<script setup>
import miniStatBlock from './miniStatBlock.vue';
import weaponsList from "../script/SourceJson/StarshipWeapon "
const props = defineProps({
    data: Object
})

//firing arc options: forward, aft, port, starboard, unlimited
// firing arc icons: up, down, left right 

//DAMAGE TYPES
//Acid, Cold, Energy, Fire, Force, Ion, Kinetic, Lightning, Necrotic, Poison, Psychic, Sonic, TRUE
var Weapons = props.data.weapons[0]



var weaponInfo

for (let index = 0; index < weaponsList.length; index++) {
    const element = weaponsList[index];
    if (element.name == Weapons.name)
        weaponInfo = element
}

function toHitDisp(profBonus) {
    var total = props.data.baseStat.wis.bonus + weaponInfo.attack.attackBonus

    //personal proficiency bonus (if you have at least one deployment rank)
    if (typeof (profBonus) != "undefined") {
        total = total + profBonus
    }

    if (total > 0) {
        total = "+" + total
    }
    return total
}

function damageDisp() {
    var dice = weaponInfo.damage.damageDice
    dice.numberOfDice
    dice.dieType

    var type = weaponInfo.damage.damageType

    return dice.numberOfDice + "d" + dice.dieType
}
function getArc() {
    var icon
if (Weapons.firingArc.length == 1) {
    console.log("single arc")
    switch (Weapons.firingArc[0]) {
        case "forward":
            icon = "circle-chevron-up"
            break;
        case "aft":
            icon = "circle-chevron-down"
            break;
        case "port":
            icon = "circle-chevron-left"
            break;
        case "starboard":
            icon = "circle-chevron-right"
            break;
        case "unlimited":
            icon = "circle-dot"
            break;
        default:
            icon = "circle-chevron-up"
            break;
    }
    
}
//for multiple firing arcs 
else {
    console.log("multiple arcs")
    console.log(Weapons.firingArc)
    icon =  "circle"
}
return icon
}
var icon = getArc()

function PropertiesDisp() {
    var propsStr = ""
    var props = weaponInfo.properties
    
    for (let index = 0; index < props.length; index++) {
        var element = props[index];
        if (element == "Power") {
            element = "Power (" +weaponInfo.range.short+ "/" + weaponInfo.range.long + ")"
        }
        propsStr = propsStr + element + ", "
    }

    return propsStr.substring(0,propsStr.length -2)
}
function ModsDisp(){

    var propsStr = ""
    var props = Weapons.mods
    console.log("props")
    console.log(props)
    for (let index = 0; index < props.length; index++) {
        var element = props[index];
        propsStr = propsStr + element + ", "
    }

    return propsStr.substring(0,propsStr.length -2)
}


var skillDist = {
    "str": ["boost", "ram"],
    "dex": ["hide", "maneuvering"],
    "con": ["patch", "regulation"],
    "int": ["astrogation", "data", "probe"],
    "wis": ["scan"],
    "cha": ["impress", "interfere", "menace", "swindle"]
} 

function getDamage() {
    var icon
    /*
    
    */

    switch (weaponInfo.damage.damageType) {
        case "acid":
            icon = "vial"
            break;
        case "cold":
            icon = "icicles"
            break;
        case "energy":
            icon ="power-off"
            break;
        case "fire":
            icon = "fire"
            break;
        case "force":
            icon = "jedi"
            break;
        case "ion":
            icon = "sun"
            break;
        case "kinetic":
            icon = "dumbbell"
            break;
        case "lightning":
            icon = "bolt"
            break;
        case "necrotic":
            icon = "radiation"
            break;
        case "poison":
            icon = "skull-crossbones"
            break;
        case "psychic":
            icon = "skull"
            break;
        case "sonic":
            icon = "ear-listen"
            break;
        case "true":
            icon = "star"
            break;
        default:
            icon = "power-off"
            break;
    }
    return icon
}
var dmgIcon = getDamage()

</script>

<template>
    <div class="contBar">
        <div class="sectionBlock"> <!-- stats -->
            <miniStatBlock stat="str" :skills=skillDist.str statName="Strength" :data=props.data />
            <miniStatBlock stat="dex" :skills=skillDist.dex statName="Dexterity" :data=props.data />
            <miniStatBlock stat="con" :skills=skillDist.con statName="Constitution" :data=props.data />
            <miniStatBlock stat="int" :skills=skillDist.int statName="Intelligence" :data=props.data />
            <miniStatBlock stat="wis" :skills=skillDist.wis statName="Wisdom" :data=props.data />
            <miniStatBlock stat="cha" :skills=skillDist.cha statName="Charisma" :data=props.data />
        </div>

        <div class="sectionBlock"><!-- combat -->
            <h3>combat info</h3> <br /> more stuff here.
            <div class="combatstats">
                armor / dmg reduction {{ props.data.hullStats.type }}
                shield type {{ props.data.shieldStats.type }}
                Reactor, Power Coupling
                <br />power dice
            </div>
            <div class="weapons"> <!-- if there are multiples of the same weapon, multiple entries-->
                <h3>Attacks</h3>
                <!--example row-->
                <table>
                    <thead>
                        <tr style="text-align: left;">
                            <th>Arc</th> <!--initial-->
                            <th style="min-width: 100px;">Weapon</th>
                            <th>Range</th>
                            <th>Hit/DC</th>
                            <th style="min-width: 60px;">Damage</th>
                            <th>Mods</th>
                            <th>Notes</th>
                        </tr>
                    </thead>
                    <tr>
                        <td>
                            <font-awesome-icon class="fa-solid" :icon=icon fixed-width :title=Weapons.firingArc />
                        </td>
                        <td>{{Weapons.name}}<br />({{ weaponInfo.weaponCategory.name }})</td>
                        <td>{{weaponInfo.range.short}}/{{ weaponInfo.range.long }} </td>
                        <td><button>{{ toHitDisp(props.data.profBonus) }}</button> </td>
                        <td><button>{{ damageDisp() }} <font-awesome-icon class="fa-solid" :icon=dmgIcon fixed-width :title=weaponInfo.damage.damageType /> </button></td>
                        <td>{{ModsDisp()}}</td>
                        <td>{{PropertiesDisp()}}</td>
                    </tr>
                    <tr>
                        <td colspan="6" style="padding-left: 5%;"> UPGRADES </td>
                    </tr>
                  

                </table>


                <!--AMMO LIST?-->
            </div>
            <div class="combatActions">
                <h3>Combat Actions</h3>
                FEATURENAME
                COMBAT DESC
                OPTIONAL COUNTER
            </div>

        </div>
        <div class="sectionBlock"><!-- info  -->
            <h3>ship info</h3>
            Flying Speed/ Turning Speed
            Hyperdrive class

        </div>


        <div class="sectionBlock"><!-- mods-->
            <h3>modifications</h3>
        </div>
        <div class="sectionBlock"><!-- storage -->
            <h3>ship storage</h3>
        </div>
        <div class="sectionBlock"><!-- crew -->
            <h3>ship crew</h3>
        </div>
        <div class="sectionBlock"><!-- extras -->
            <h3>others</h3>
        </div>
    </div>
</template>

<style>
button {
    margin-right: 2%;
    overflow: hidden;
}


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