<script setup>
import sheetBlock from '../components/sheetBlock.vue';
import navbar from '../components/navbar.vue';
import topBar from '../components/topBar.vue';
import Data from '../script/shipData';
import { watch, reactive } from 'vue'
var shipData = reactive(Data)

</script>
<template>
    <main>
        <topBar :data="shipData"/>
        <div class="cont sheetblock">
            <navbar :data="shipData"/>
            <sheetBlock :data=shipData />
        </div>
    </main>
</template>

<style>

.sheetblock {
    max-width: 600px;
    width: 60%;
    flex: 1;    
}


/*common use css*/
.cont {
    background-color: whitesmoke;
    border-radius: 7px;
    border: solid 1px black;
    overflow: hidden;
    margin: 5px;
}
.full {
    width: 100%;
}



.stationary.flex-item {
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

/**for popups  */
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

.flex-item {
    flex: 1;
    text-align: center;
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






/*
*CSS THAT IS UNIVERSAL 
 */

/*dice roll related*/ 
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

</style>