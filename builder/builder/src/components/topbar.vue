<script setup>
import shipsheet from '../script/shipsheet';
var Customstyle = {
backgroundColor: "white",
borderRadius: "7px",
margin: "5px"
}
var backgroundColor = Customstyle.backgroundColor
var borderRadius = Customstyle.borderRadius
var margin = Customstyle.margin

const props = defineProps({
    data: Object
})


var shipData = props.data


var shieldMax = shipData.hullStats.max * shipData.shieldStats.capacity

console.log("this? pls wokr")
console.log(this)//mechanical functions
function damage() {

    //get from the input 
    var damageDone = document.getElementById("damageShipHP").value
    //go through shields first. 
    //go through temp hp first, then subtract from currentHp
    if (shipData.shieldStats.temp >= damageDone) {
        shipData.shieldStats.temp = shipData.shieldStats.temp - damageDone
        damageDone = 0

    }
    else {
        damageDone = damageDone - shipData.shieldStats.temp
        shipData.shieldStats.temp = 0
        if (damageDone >= shipData.shieldStats.current) {

            damageDone = damageDone - shipData.shieldStats.current

        }
        else {

            shipData.shieldStats.current = shipData.shieldStats.current - damageDone

            damageDone = 0
        }
    }



    if (shipData.shieldStats.current == 0) {
        var shieldBttns = document.querySelectorAll(".dmg > button.shield")
        for (let index = 0; index < shieldBttns.length; index++) {
            const element = shieldBttns[index];
            element.disabled = true;
        }
    }
    //go through hull (usingExternalFunction & any remaining damage )
    console.log("carry over damage" + damageDone)
    console.log("health remaining" + shipData.shieldStats.current)
    if (damageDone > 0) {
        damageHull(damageDone)
    }

}
function damageHull(number) {
    //if number is present, use it for damageDone, otherwise pull from input box. 
    var damageDone
    if (typeof (number) == "undefined") {
        var damageDone = document.getElementById("damageShipHP").value
    }
    else {
        damageDone = number
    }


    //go through temp hp first, then subtract from currentHp
    if (shipData.hullStats.temp > damageDone) {
        shipData.hullStats.temp = shipData.hullStats.temp - damageDone
    }
    else {
        if (shipData.hullStats.temp < damageDone) {
            damageDone = damageDone - shipData.hullStats.temp
            shipData.hullStats.current = shipData.hullStats.current - damageDone
        }
        shipData.hullStats.temp = 0
    }



    //
}
function shieldRegen() {
    var num = shipData.shieldStats.dice.size * shipData.shieldStats.capacity
    repair("shield", num)
}
function repair(type, number) {
    var repairNum
    if (typeof (number) == "undefined") {
        repairNum = Number(document.getElementById("damageShipHP").value)
    }
    else {
        repairNum = number
    }
    if (type == "hull") {
        shipData.hullStats.current = shipData.hullStats.current + repairNum
        if (shipData.hullStats.current > shipData.hullStats.max) {
            shipData.hullStats.current = shipData.hullStats.max
        }

    }
    if (type == "shield") {
        shipData.shieldStats.current = shipData.shieldStats.current + repairNum
        if (shipData.shieldStats.current > shieldMax) {
            shieldStats.current = shieldMax
        }


    }


}


//display functions
function currentPoints(type) {
    var out

    if (type == 'shield') {
        out = shipData.shieldStats.current
        if (shipData.shieldStats.temp != 0) {
            out = out + " (" + shipData.shieldStats.temp + ")"
        }
        return out
    }
    if (type == 'hull'){
        out = shipData.hullStats.current
        if (shipData.hullStats.temp != 0) {
            out = out + " (" + shipData.hullStats.temp + ")"
        }
        return out
    }

}
</script>
    
<template>
    <div class="cont flex-container">
        <div class="flex-item clear">
            <h2 id="shipName">{{ shipData.shipName }}</h2>
            Size {{ shipData.shipSize }}, Tier {{ shipData.ShipTier }}
            Ship Role: {{ shipData.tierRole[0] }}
            <br>
            Manufacturer, Model
            Credits Invested, Credits Next Tier
        </div>

        <div class="flex-item clear" id="pointsManagement">
            <!-- @click="showPopup('dmgDisplay')" -->

            <div class="shieldPoints left">
                <div style="padding-top: 3px">
                    <font-awesome-icon icon="shield-heart" fixed-width />
                    <span class="circleTitle mobile">Shield</span>
                </div>
                <div class="number mobile">
                    {{currentPoints("shield") }}
                    <hr>
                    {{shieldMax}}
                </div>
                <svg class="shieldPoints mobile">
                    <circle cx="50" cy="50" r="40" class="grey base "></circle> <!--base (grey)-->
                    <circle cx="50" cy="50" r="40" class="red filled "></circle> <!--hp (red)-->
                    <circle cx="50" cy="50" r="40" class="green overflow "></circle> <!--temphp (green)-->
                </svg>

            </div> <!--end of shieldpoints class-->
            <div class="dmg left " style="align-self: center">
                <button class="shield Regen" @click="shieldRegen()">shield Regenerate </button><br />
                <button class="shield Repair" @click="repair('shield')">repair shield</button>
                <button class="hull Repair" @click="repair('hull')">repair hull</button><br />
                <input type="number" id="damageShipHP" min="0" /><br />
                <button class="damage" @click="damage()">damage</button>
                <button class="hull Damage" @click="damageHull()">damage (hull)</button>
            </div>
            <div class="hullPoints left">
                <div style="padding-top: 3px">
                    <font-awesome-icon icon="rocket" fixed-width />
                    <span class="circleTitle mobile">Hull</span>
                </div>
                <div class="number mobile">
                    {{currentPoints("hull") }}
                    <hr>
                    {{ shipData.hullStats.max }}
                </div>

                <svg class="hullPoints mobile">
                    <circle cx="50" cy="50" r="40" class="grey base mobile"></circle> <!--base (grey)-->
                    <circle cx="50" cy="50" r="40" class="red filled mobile"></circle> <!--hp (red)-->
                    <circle cx="50" cy="50" r="40" class="green overflow mobile"></circle> <!--temphp (green)-->
                </svg>
            </div><!--end of hullPoints class-->
        </div>

        <div class="flex-item clear">
            crew proficiency {{ shipData.profBonus }}
        </div>
    </div>
</template>

<style>
.clear {
    clear: both;
}
.left {
    float: left;
}
.flex-item {
    flex: 1;
}

.flex-container {
    display: flex;
    flex-direction: row;
    
}

/*circle "progress" bars for hp*/
#pointsManagement {
display: inline-block;
}

.number {
    color: black;
    text-align: center;
    font-size: medium;
}


.svg,
svg,
circle {
    width: 100px;
    height: 100px;
}

circle {
    fill: none;
    stroke-width: 10;
    /* transform: translate(10px, 10px);  This is to position it in the center */
    stroke-dasharray: var(--circleSize);
    stroke-linecap: butt;
}


circle.base {
    stroke: gray;
}

div.hullPoints,
div.shieldPoints {
    text-align: center;
}

.hullPoints>circle.filled {
    stroke: red;
    stroke-dashoffset: calc(var(--circleSize) - (var(--circleSize) * var(--currentHullPercent)) / 100);
    transform-origin: center;
    transform: scale(-1, 1) rotate(270deg);
}

.hullPoints>circle.overflow {
    stroke-dashoffset: calc(var(--circleSize) - (var(--circleSize) * var(--currentHullOver)) / 100);
    transform-origin: center;
    transform: scale(-1, 1) rotate(270deg);
    stroke: rgb(100, 205, 100)
}

.shieldPoints>circle.filled {
    stroke: red;
    stroke-dashoffset: calc(var(--circleSize) - (var(--circleSize) * var(--currentSheildPercent)) / 100);
    transform-origin: center;
    transform: scale(-1, 1) rotate(270deg);
}

.shieldPoints>circle.overflow {
    stroke-dashoffset: calc(var(--circleSize) - (var(--circleSize) * var(--currentSheildOver)) / 100);
    transform-origin: center;
    transform: scale(-1, 1) rotate(270deg);
    stroke: rgb(100, 205, 100)
}

.number {
    margin-top: 20px;
    width: 100px;
    height: 80px;
    position: absolute;
    width: 100px;
    height: 80px;
}

.number>hr {
    margin-left: 30px;
    margin-right: 30px
}

</style>