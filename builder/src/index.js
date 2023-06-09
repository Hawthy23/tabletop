import React from 'react';
import ReactDOM from 'react-dom';
import shipData from './ShipData.json' 
import {SheetDisplay} from './shipsheet'

/**
 * TO DO:
 * -IMPORT FONT AWESOME STUFF. (ICONS.)
 * 
 * 
 * 
 * 
 */



//ReactDOM.render(<h1>Helloworld React!</h1>, document.getElementById('root'));




window.onload = function () {
    var strdiv = document.querySelector("div.skill.save.str > span.skillName")
    strdiv.onclick = function () {SheetDisplay.showPopup("info")}
    var dmgDiv = document.getElementById('pointsManagement')
    dmgDiv.onclick = function(){SheetDisplay.showPopup("dmgDisplay")}
    var grey = document.getElementById('greyout')
    grey.onclick = function(){SheetDisplay.hidePopup()}

    
    var closebttn = document.querySelector("div.popup > span.close")
    closebttn.onclick = function() {SheetDisplay.showHide("info")}
/*
    var minIcon = document.querySelector("div.popup > i")
    minIcon.onclick = SheetDisplay.min(event,"infoCustom")
    */

    var sRegenBttn = document.querySelector("div.dmg > button.shield.regen")
    var sRepairBttn = document.querySelector("div.dmg > button.shield.repair")
    var hRepairBttn = document.querySelector("div.dmg > button.hull.repair")
    var sDamageBttn = document.querySelector("div.dmg > button.shield.damage")
    var hDamageBttn = document.querySelector("div.dmg > button.hull.damage")

    sRegenBttn.onclick = function(){SheetDisplay.shieldRegen()}
    sRepairBttn.onclick = function(){SheetDisplay.repair("shield")}
    hRepairBttn.onclick = function(){SheetDisplay.repair("hull")}
    sDamageBttn.onclick = function(){SheetDisplay.damage()}
    hDamageBttn.onclick = function(){SheetDisplay.damageHull()}
    //"button" click stuff
    /*


    */


    //stat stuff. 
    document.getElementById("crewProf").innerHTML = "+" + shipData.profBonus

    //update baseStat display 
    var statsArray = Object.keys(shipData.baseStat)
    statsArray.forEach(element => {
        SheetDisplay.updateStatBlockDisplay(element)
    });

    //update skill displays. 
    var skillsArray = Object.keys(shipData.skills)
    skillsArray.forEach(element => {
        SheetDisplay.updateSkillDisplay(element)
    });


    //update saves display
    var savesArray = Object.keys(shipData.saves)
    savesArray.forEach(element => {
        SheetDisplay.updateSkillDisplay("save." + element)
    });


    var popups = document.getElementsByClassName("popup");

    for (let index = 0; index < popups.length; index++) {
        const element = popups[index];

        element.addEventListener("blur", (event) => {
            console.log("blurEventTriggered")
            SheetDisplay.hidePopup()
        });

    }

    SheetDisplay.updateHullDisplay()
    SheetDisplay.updateShieldDisplay()

    //setting up buttons for the main portion of the display   
    var anchors = document.getElementsByClassName('flex-item');
    for (var i = 0; i < anchors.length; i++) {
        var anchor = anchors[i];
        anchor.onclick = function (e) {
            var clicked = e.srcElement
            dispIndex = 0
            //get to the "flex item" parent  node
            var t = clicked
            while (!t.classList.value.includes("flex-item")) {
                t = t.parentElement
            }
            //flip through flex items, 
            //if it's the selected one, add active 
            //if it isn't selected one & has "active" in there; remove active 
            var cont = t.parentElement
            var actives = cont.children;
            for (var i = 0; i < actives.length; i++) {
                element = actives[i]
                if (element == t) {
                    dispIndex = i
                    t.classList.add("active")
                }
                else {
                    if (element.classList.value.includes("active"))
                        element.classList.remove("active")
                }
            }
            var disps = cont.parentElement.children[1].children
            for (var i = 0; i < disps.length; i++) {
                element = disps[i]
                if (i == dispIndex) {
                    element.style.display = "inline-block"
                }
                else {
                    if (element.style.display == "inline-block")
                        element.style.display = "none"
                }
            }

        }
    }
}
