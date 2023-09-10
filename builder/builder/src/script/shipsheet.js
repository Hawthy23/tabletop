import shipData from "../script/shipData"

//display functions 

export default class shipsheet {

    min(e, id) {
        showHide(id)

        if (e.target.className == "fa-solid fa-chevron-down") {
            e.target.className = "fa-solid fa-chevron-up"
        }
        else {
            e.target.className = "fa-solid fa-chevron-down"
        }
    }
    showHide(id) {

        var element = document.getElementById(id)
        if (element.style.display == "none") {
            element.style.display = "block"
        }
        else {
            element.style.display = "none"
        }

    }


    showPopup(id) {
        //var details is identifying details that get passed in? 
        var element = document.getElementById(id)
        element.style.display = "flex"
        document.getElementById("greyout").style.display = "block"

    }
    hidePopup() {

        //find visible popup 
        var popups = document.getElementsByClassName("popup");
        var div = ""
        for (let i = 0; i < popups.length; i++) {
            if (popups[i].style.display == "flex") {
                div = popups[i]
            }
        }
        document.getElementById("greyout").style.display = "none"
        if (div != "") { div.style.display = "none" }
    }
    getSkillInfo(name) {
        var name = name.toString()
        var skillInfo = shipData.skills[name]
        if (name.includes("save")) {
            var skillInfo = shipData.saves[name.split(" ")[1]]
        } 
        
        var profBonus = shipData.profBonus
        var workingData = {
            dispName: skillInfo.dispName,
            baseStat: skillInfo.baseStat,
            total: skillInfo.total,
            prof: skillInfo.prof,
            adv: skillInfo.adv,
            magicBonus: skillInfo.magicBonus,
            miscBonus: skillInfo.miscBonus,
            overrideFlag: skillInfo.overrideFlag,
            overrides: {
                calcTotal: skillInfo.overrides.calcTotal,
                baseStat: skillInfo.overrides.baseStat,
                total: skillInfo.overrides.total,
                prof: skillInfo.overrides.prof,
                adv: skillInfo.overrides.adv,
                magicBonus: skillInfo.overrides.magicBonus,
                miscBonus: skillInfo.overrides.miscBonus
            }
        }

        //set working data to the defaults 
    


        //calculating new total? (currently needed, but won't later. )
        skillInfo.total = (Number(skillInfo.prof) * Number(profBonus)) + Number(shipData.baseStat[skillInfo.baseStat].bonus) + Number(skillInfo.magicBonus) + Number(skillInfo.miscBonus)
        workingData.total = skillInfo.total
        var displayTotal = skillInfo.total

        //check for overrides: 
        if (skillInfo.overrideFlag == true) {

            var ovveridesArray = Object.keys(skillInfo.overrides)
            const len = (ovveridesArray.length)
            for (let index = 0; index < len; index++) {
                const element = skillInfo.overrides[ovveridesArray[index]]
                if (element != "") {

                    workingData[Object.keys(skillInfo.overrides)[index]] = element

                }
            }


            workingData.overrides.calcTotal = (Number(workingData.prof) * Number(profBonus)) + Number(shipData.baseStat[workingData.baseStat].bonus) + Number(workingData.magicBonus) + Number(workingData.miscBonus)
        }
        return workingData

    }


}








var hullStats = shipData.hullStats
var shieldStats = shipData.shieldStats
var shieldMax = hullStats.max * shieldStats.capacity



//mechanical functions
export function damage() {
    //get from the input 
    var damageDone = document.getElementById("damageShipHP").value
    //go through shields first. 
    //go through temp hp first, then subtract from currentHp
    if (shieldStats.temp >= damageDone) {
        shieldStats.temp = shieldStats.temp - damageDone
        damageDone = 0

    }
    else {
        damageDone = damageDone - shieldStats.temp
        shieldStats.temp = 0
        if (damageDone >= shieldStats.current) {

            damageDone = damageDone - shieldStats.current
            shieldStats.current = 0
        }
        else {

            shieldStats.current = shieldStats.current - damageDone
            damageDone = 0
        }
    }

    updateShieldDisplay()

    if (shieldStats.current == 0) {
        var shieldBttns = document.querySelectorAll(".dmg > button.shield")
        for (let index = 0; index < shieldBttns.length; index++) {
            const element = shieldBttns[index];
            element.disabled = true;
        }
    }
    //go through hull (usingExternalFunction & any remaining damage )
    console.log("damage remaining" + damageDone)
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
    if (hullStats.temp > damageDone) {
        hullStats.temp = hullStats.temp - damageDone
    }
    else {
        if (hullStats.temp < damageDone) {
            damageDone = damageDone - hullStats.temp
            hullStats.current = hullStats.current - damageDone
        }
        hullStats.temp = 0
    }

    updateHullDisplay()

    //
}
function shieldRegen() {
    var num = shieldStats.dice.size * shieldStats.capacity
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
        hullStats.current = hullStats.current + repairNum
        if (hullStats.current > hullStats.max) {
            hullStats.current = hullStats.max
        }
        updateHullDisplay()
    }
    if (type == "shield") {
        shieldStats.current = shieldStats.current + repairNum
        if (shieldStats.current > shieldMax) {
            shieldStats.current = shieldMax
        }
        updateShieldDisplay()

    }


}

function updateHullDisplay() {


    //setting hull display 
    var hullStatsInfo = document.querySelectorAll("div.hullPoints > .number")
    for (let index = 0; index < hullStatsInfo.length; index++) {
        const element = hullStatsInfo[index];
        element.children[0].innerHTML = hullStats.current
        element.children[1].innerHTML = "(+" + hullStats.temp + ")"
        element.children[3].innerHTML = hullStats.max
        if (hullStats.temp == 0) {
            element.children[1].style.display = "none"
        }
    }
    var r = document.querySelector(':root');
    r.style.setProperty('--currentHullPercent', (hullStats.current / hullStats.max) * 100)
    r.style.setProperty('--currentHullOver', (hullStats.temp / hullStats.max) * 100)

}
function updateShieldDisplay() {
    var shieldStatsInfo = document.querySelectorAll("div.shieldPoints > .number")
    for (let index = 0; index < shieldStatsInfo.length; index++) {
        const element = shieldStatsInfo[index];

        element.children[0].innerHTML = shieldStats.current
        element.children[1].innerHTML = "(+" + shieldStats.temp + ")"
        element.children[3].innerHTML = shieldMax
        if (shieldStats.temp == 0) {
            element.children[1].style.display = "none"
        }
    }
    var r = document.querySelector(':root');
    r.style.setProperty('--currentSheildPercent', (shieldStats.current / shieldMax) * 100)
    r.style.setProperty('--currentSheildOver', (shieldStats.temp / shieldMax) * 100)


}

function calcAttributeBonus(stat) {
    shipData.baseStat[stat].bonus = Math.floor((shipData.baseStat[stat].statNum - 10) / 2)
}


function updateSkillDisplay(name) {
    var workingData = getSkillInfo(name)

    ////onto display changes. 
    var skillblock = document.querySelector(".skillBlock > .skill." + name)
    var children = skillblock.children
    // prof/expert display 
    switch (workingData.prof) {
        case 0:
            children[0].children[0].style.backgroundColor = "white"
            children[0].children[1].style.backgroundColor = "white"
            break;
        case 1:
            children[0].children[0].style.backgroundColor = "white"
            children[0].children[1].style.backgroundColor = "black"
            break;
        case 2:
            children[0].children[1].style.backgroundColor = "white"
            children[0].children[0].style.backgroundColor = "black"
            break;
        case 3:
            //this is the funky one. bonus stuff... gotta work some kind of notation in there?.
            children[0].children[1].style.backgroundColor = "white"
            children[0].children[0].style.backgroundColor = "black"
            break;
        default:
            break;
    }

    //advantage chunk display 
    var advdisSpan = skillblock.querySelector("span.advdis")
    var classes = advdisSpan.classList
    var iconClasses = advdisSpan.children[0].classList

    //advantage display 
    if (workingData.adv == "1") {
        advdisSpan.style.visibility = "hidden"
        classes.remove("adv")
        classes.remove("dis")
        iconClasses.remove("fa-a")
        iconClasses.remove("fa-d")

    }
    else {
        children[2].style.visibility = "visible"
        if (workingData.adv == "0") { //dis
            classes.remove("adv")
            classes.add("dis")
            iconClasses.remove("fa-a")
            iconClasses.add("fa-d")
        }
        if (workingData.adv == "2") {   //adv
            classes.add("adv")
            classes.remove("dis")
            iconClasses.add("fa-a")
            iconClasses.remove("fa-d")

        }
    }
    //button display 
    children[1].innerHTML = "+" + workingData.total //button
    return workingData.total
}

function updateStatBlockDisplay(stat) {
    var display = document.querySelector("div.attributeBlock." + stat).children
    display[0].innerHTML = "+" + shipData.baseStat[stat].bonus
    display[1].innerHTML = shipData.baseStat[stat].statNum
}


/*  window.onload = function () {

    //stat stuff. 
    document.getElementById("crewProf").innerHTML = "+" + shipData.profBonus

    //update baseStat display 
    var statsArray = Object.keys(shipData.baseStat)
    statsArray.forEach(element => {
        updateStatBlockDisplay(element)
    });

    //update skill displays. 
    var skillsArray = Object.keys(shipData.skills)
    skillsArray.forEach(element => {
        updateSkillDisplay(element)
    });


    //update saves display
    var savesArray = Object.keys(shipData.saves)
    savesArray.forEach(element => {
        updateSkillDisplay("save." + element)
    });


    var popups = document.getElementsByClassName("popup");

    for (let index = 0; index < popups.length; index++) {
        const element = popups[index];

        element.addEventListener("blur", (event) => {
            console.log("blurEventTriggered")
            hidePopup()
        });

    }

    updateHullDisplay()
    updateShieldDisplay()

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
*/