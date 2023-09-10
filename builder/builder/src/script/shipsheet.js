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