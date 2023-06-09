
import shipData from './ShipData.json' 

var hullStats = shipData.hullStats
var shieldStats = shipData.shieldStats
var shieldMax = hullStats.max * shieldStats.capacity

//display functions 
export class SheetDisplay {
    constructor(){

    }
static min(e, id) {
    this.showHide(id)

    if (e.target.className == "fa-solid fa-chevron-down") {
        e.target.className = "fa-solid fa-chevron-up"
    }
    else {
        e.target.className = "fa-solid fa-chevron-down"
    }

}
static showHide(id) {

    var element = document.getElementById(id)
    if (element.style.display == "none") {
        element.style.display = "block"
    }
    else {
        element.style.display = "none"
    }

}

static showPopup(id) {
    //var details is identifying details that get passed in? 
    var element = document.getElementById(id)    
    element.style.display = "flex"
    document.getElementById("greyout").style.display = "block"
  
  }

static hidePopup() {

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



//mechanical functions
static damage() {
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

    this.updateShieldDisplay()

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
        this.damageHull(damageDone)
    }

}
static damageHull(number) {
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

    this.updateHullDisplay()

    //
}
static shieldRegen() {
    var num = shieldStats.dice.size * shieldStats.capacity
    this.repair("shield", num)
}
static repair(type, number) {
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
        this.updateHullDisplay()
    }
    if (type == "shield") {
        shieldStats.current = shieldStats.current + repairNum
        if (shieldStats.current > shieldMax) {
            shieldStats.current = shieldMax
        }
        this.updateShieldDisplay()

    }


}


static updateHullDisplay() {


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
static updateShieldDisplay() {
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

static calcAttributeBonus(stat) {
    shipData.baseStat[stat].bonus = Math.floor((shipData.baseStat[stat].statNum - 10) / 2)
}

static getSkillInfo(name) {
    var skillblock = document.querySelector(".skillBlock > .skill." + name)
    var children = skillblock.children



    var skillInfo
    if (name.includes("save")) {
        skillInfo = shipData.saves[name.split(".")[1]]
    }
    else {
        skillInfo = shipData.skills[name]
    }
    var profBonus = shipData.profBonus



    //set working data to the defaults 
    var workingData = {
        baseStat: skillInfo.baseStat,
        total: skillInfo.total,
        prof: skillInfo.prof,
        adv: skillInfo.adv,
        magicBonus: skillInfo.magicBonus,
        miscBonus: skillInfo.miscBonus
    }


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

        //calculate new display total but if an override total is specified it's that instead. 

        displayTotal = (Number(workingData.prof) * Number(profBonus)) + Number(shipData.baseStat[workingData.baseStat].bonus) + Number(workingData.magicBonus) + Number(workingData.miscBonus)

        if (skillInfo.overrides.total != "") {
            workingData.total = workingData.total
        }
        else {
            workingData.total = Number(displayTotal)
        }


    }
    return workingData

}

//the popup 
static skillInfoBlock(name) {

}

static updateSkillDisplay(name) {
    var workingData = this.getSkillInfo(name)

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

static updateStatBlockDisplay(stat) {
    var display = document.querySelector("div.attributeBlock." + stat).children
    display[0].innerHTML = "+" + shipData.baseStat[stat].bonus
    display[1].innerHTML = shipData.baseStat[stat].statNum
}
}

