<script setup>
import sheetBlock from '../components/sheetBlock.vue';
import navbar from '../components/navbar.vue';

var skillDist = {
    "str": ["boost", "ram"],
    "dex": ["hide", "maneuvering"],
    "con": ["patch", "regulation"],
    "int": ["astrogation", "data", "probe"],
    "wis": ["scan"],
    "cha": ["impress", "interfere", "menace", "swindle"]
} 


</script>

<template>
    <main>
        <div class="cont">
                <navbar />
                <sheetBlock />
        </div>
    </main>
</template>

<style>
/*responsive stuff*/



@media only screen and (max-width: 500px) {
    .cont:nth-of-type(3) {
        display: none;
    }

    .circleTitle.mobile {
        display: none;
    }

    #dmgManage>.dmg {
        order: 1;

    }

    .popup {
        max-width: 201px;
    }


}

@media only screen and (max-width: 700px) {
    .cont {
        width: 100%;
    }

    .cont:nth-of-type(2) {
        display: none;
    }

    svg.mobile,
    circle.mobile {
        display: none;
    }

    .number.mobile {
        width: 60px;
        height: fit-content;
        position: relative;
        margin-top: 0%;
    }

    .number.mobile>hr {
        padding: 0%;
        margin: 0%;

    }



}

@media only screen and (max-width: 1000px) {

    .cont:nth-of-type(3) {
        display: none;
    }

    /*
    #dmgManage>.dmg {
        order: 1;
        background-color: blueviolet;
    }
    .popup{
        max-width: 201px;
    }*/
}


@media only screen and (min-width: 701px) {
    .number.mobile {
        margin-top: 20px;
        position: absolute;
        width: 100px;
        height: 80px;
    }

    .number.mobile>hr {
        margin-left: 30px;
        margin-right: 30px
    }

}

.miniStatBlock {
    
    float: left;
    margin: 0px;
    overflow: hidden;
    width: 270px;
    padding-left: 0px;
}

.cont {
max-width: 600px;
background-color: whitesmoke;
border-radius: 7px;
border: solid 1px black;
overflow: hidden;
width: 60%;
flex: 1;
margin: 5px;
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


.fi {
    flex: 1;
    flex-grow: 1;

}

.stationary-fi {
    flex: 1;
    flex-grow: 0;
}

:root {
    --circleSize: calc(40*2*3.14);
    /*40 is circle radius*/
    --currentSheildPercent: 100;
    --currentSheildOver: 0;
    --currentHullPercent: 100;
    --currentHullOver: 0;
}

.popup {
    flex-direction: row;
    flex-wrap: wrap;
    display: none;
    position: absolute;
    right: 10px;
    top: 0;


    border: 2px solid red;
    background-color: white;
    z-index: 3;
}

#greyout {
    display: none;
    position: absolute;
    /* background-color: rgba(0, 0, 0, .3);*/
    padding: 0px;
    margin: 0px;
    width: 100%;
    height: 100%;
    z-index: 2;
}

.close {
    font-size: 1.5em;
    float: right;
}

.close:hover {
    background-color: lightgray;
}

/*big overarching stuff. */
.summaryCont {
    background-color: white;
    width: 100%;
    border-radius: 7px;
    margin: 5px;
    display: block;
    overflow: hidden;
}




#sheet {
    display: flex;
    flex-direction: row;
}

.right {
    float: right;
}

.left {
    float: left;
    border: 1px solid black;
}

#pointsManagement {

    display: inline-block;
}

/*onto main stuff */

body {
    background-color: antiquewhite;

}



h3 {
    background-color: red;
    margin: 5px;
    width: 100%;
    margin: 1px;
    padding: 0%;
    padding-bottom: 2px;
}

.bigGroup {
    padding-top: 5px;
    padding-left: 5px;
    margin: 0%;
    display: inline-block;
}

/*circle "progress" bars for hp*/


.number {
    color: black;
    text-align: center;
    font-size: medium;
}





/*
*CSS THAT IS UNIVERSAL 
 */


.adv {
    color: green;
}

.advdis {
    float: right;
    font-size: small;
}

.dis {
    color: darkred;
}


.rollBttn {
    border: 1px solid black;
    padding-right: 2px;
    padding-left: 2px;

}
</style>