


var explain = document.getElementById("details")

document.getElementById("advDeets").addEventListener("click", (event) => {
if (explain.style.display == "block"){
    explain.style.display ="none"
}
else {
    explain.style.display = "block"
}
});


function clearResults(){
    console.log("has it been called?")
    node = document.getElementById("rolling")
    while (node.hasChildNodes()) {
        node.removeChild(node.lastChild);
      }
}


function simpleRoll(size){
document.getElementsByTagName

diceEx = new DiceExpression(size)
//div to put the display in. 
var rollingDisplay = document.getElementById("rolling")
diceEx.roll(rollingDisplay)
}



function publicRoll() {


    //getting dicestring

    var diceString = document.getElementById("diceinput").value
    if (diceString == "") {
        diceString = document.getElementById("diceinput").placeholder
    }
    var newString = diceString.toLowerCase()
    if (newString != diceString){
        document.getElementById("diceinput").value = newString
        diceString = newString
    }


    //finding adv arg
    var ele = document.getElementsByName('adv');
    var adv = ""
    for (i = 0; i < ele.length; i++) {
        if (ele[i].checked)
            adv = ele[i].value;
    }


    diceEx = new DiceExpression(diceString + " " + adv.toString())
    var valid = diceInputValidation(diceString, diceEx.diceRegex)
    if (!valid) {
        return
    }

    //div to put the display in. 
    var rollingDisplay = document.getElementById("rolling")
    diceEx.roll(rollingDisplay)

    


}


//dice roller specific stuff 
function diceInputValidation(value, regex) {
    var term = value
    var result = regex.test(term)
    
    //check for matching number of parens
    var style = document.getElementById("inputError").style
    if (result) {
        style.display = "none"
    }
    else {
        style.display = "block"
    }
    return result

}

function arraySplit(initialString, operator) {
    var resultArray = []
    var tempArray = initialString.split(operator)
    tempArray.forEach(element => {
        resultArray.push(element)
        resultArray.push(operator)
    })
    resultArray.pop()
    return resultArray
}

function ArrayOperatorSplit(inputArray, operators) {

    var temp = []

    operators.forEach(operator => {
        inputArray.forEach(element => {
            if (element.includes(operator)) {
                temp = arraySplit(element, operator)
                inputArray.splice(inputArray.indexOf(element), 1, temp)
            }
        });
        inputArray = inputArray.flat()
    });

    inputArray = inputArray.filter(x => x)

    return inputArray
}

class diceObject {
    constructor(num, size) {
        this.size = size
        this.num = num
    }
    diceRoll() {
        var dice = []
        var result
        var i = 0
        while (i < this.num) {
            this.result = Math.floor(Math.random() * (this.size - 1 + 1) + 1)
            dice.push({ "result": this.result, "min": 1, "max": this.size, "num": this.num })
            i++
        }
        return dice
    }

    static rollFormatting(dice, type, resultToKeep) {
        //type is either adv roll, single die, multiple 
        var resultSpan = document.createElement("span")
        //dice  { "result": this.result, "min": 1, "max": this.size, "num": this.num }

        if (type.includes("nd")) { //not dice
            resultSpan.setAttribute("class", "notDice")
            var temp = document.createElement("span")
            temp.innerHTML = dice
            resultSpan.appendChild(temp)
            return resultSpan
        }

        //dice rolls from here on out
        //EDIT FOR DICE. dice.size & dice.num 




        if (type.includes("single")) {

            var t2 = document.createElement("span")
            t2.textContent = dice[0].result
            if (dice[0].min == dice[0].result) {
                //crit fail 
                t2.setAttribute("class", "critfail")
            }
            else {
                if (dice[0].max == dice[0].result) {
                    t2.setAttribute("class", "critsuccess")

                }
            }

            resultSpan.appendChild(t2)
        } //end of single dice roll 
        else {

            if (type.includes("adv")) {


                for (let i = 0; i < dice.length; i++) {
                    let t2 = document.createElement("span")
                    const element = dice[i].result;


                    //if it's getting struck
                    if (dice[i].result != resultToKeep.toString()) {
                        let s = document.createElement("s")
                        if (i < dice.length - 1) {
                            s.textContent = element + ", "
                        }
                        else {
                            s.textContent = element
                        }
                        t2.appendChild(s)
                    }
                    else {//otherwise 
                        if (i < dice.length - 1) {
                            t2.textContent = element + ", "
                        }
                        else {
                            t2.textContent = element
                        }
                    }


                    if (dice[i].min == element) {
                        //crit fail 
                        t2.setAttribute("class", "critfail")

                    }
                    else {
                        if (dice[i].max == element) {
                            t2.setAttribute("class", "critsuccess")
                        }
                    }
                    resultSpan.appendChild(t2)

                }//end of for 

            } //end of adv check


            if (type.includes("m")) {

               
                for (let i = 0; i < dice.length; i++) {
                    let t2 = document.createElement("span")
                   

                    const element = dice[i].result;

                    if (i < dice.length - 1) {
                        t2.textContent = element + ", "
                    }
                    else {
                        t2.textContent = element
                    }
                    if (dice[i].min == element) {
                        //crit fail 
                        t2.setAttribute("class", "critfail")

                    }
                    else {
                        if (dice[i].max == element) {
                            t2.setAttribute("class", "critsuccess")
                        }
                    }

                    resultSpan.appendChild(t2)
                } //end of for 
               
            }//end of multiple dice    

        } //end of else 
        var returnSpan = document.createElement("span")
        returnSpan.setAttribute("class", "diceRoll")

        var start = document.createElement("span")
        start.textContent = "("
        returnSpan.appendChild(start)

        returnSpan.appendChild(resultSpan)

        var end = document.createElement("span")
        end.textContent = ")"
        returnSpan.appendChild(end)

        //for dice rolls. 
        var diceType = document.createElement("span")
        

        var num = dice[0].num
        if (type.includes("adv")) {
            num = 1
        }

        diceType.textContent = num + "d" + dice[0].max

        returnSpan.insertBefore(diceType, returnSpan.children[0])

        return returnSpan
    }



}


class DiceExpression {
    //rolls the dice upon class creation. 
    constructor(args) {
        this.rawstring = args
        
        this.splitArgs = this.rawstring.split(" ")
        var argwithDNum = ""

        this.operators = ["(", ")", "+", "-", "x", "/", "*"]
        this.diceRegex = new RegExp("^([1-9][0-9]*d[1-9][0-9]*|[1-9][0-9]?[0-9]*)(([-+*/][(]?|[)][-+*/])([1-9][0-9]*d[1-9][0-9]*|[1-9][0-9]?[0-9]*)|[)]|$)*$")

        var otherArgs = []

        this.splitArgs.forEach(element => {
            if (element.search("[0-9]") >= 0) {
                if (argwithDNum == "") {
                    
                    argwithDNum = element
                }
            }
            else {
                otherArgs.push(element)
            }
        });

        this.otherArgs = otherArgs
        

        this.adv = "1";
        if (this.otherArgs.toString().toLowerCase().includes("adv")) this.adv = "2"
        if (this.otherArgs.toString().toLowerCase().includes("dis")) this.adv = "0"

        var ExpressionArray = ArrayOperatorSplit([argwithDNum], this.operators)
        var solved = []

        ExpressionArray.forEach(element => {
            solved.push(this.diceType(element, this.adv))
        });
      

        this.d20 = { "string": argwithDNum, "parts": ExpressionArray, "solved": solved }


    }

   /**
    * 
    * @param {HTMLDivElement} displayDiv 
    * @returns {int} result of roll (int)
    * 
    * creates the displayed html div of the dice roll, and puts it in DisplayDiv, also totals it and returns the int value 
    */
    roll(displayDiv) {
        //dis = 0, regular is 1, and adv is 2

        var disp = document.createElement("div")
        this.d20.solved.forEach(element => {            
            disp.appendChild(element.resultSpan)
        });


        //FINAL DISPLAY?
        console.log(disp)


        var result = ""        
        this.d20.solved.forEach(element => {
            result = result + element.resultNum.toString()
        });
        
        
        result = math.evaluate(result)
        

        var resultFormatted = document.createElement("span")
        resultFormatted.textContent = " = " + result

        disp.appendChild(resultFormatted)

        
        displayDiv.insertBefore(disp, displayDiv.children[0])
        return result

    }


    /**
     *does the heavy lifting. it takes a #d# (or other element of an expression) and "solves" it. also creates the display span    
     * @param {string} data 
     * @param {int} adv 
     * @returns \{dice: "#d#", resultNum: int, resultSpan: HTMLELEMENTSPAN}
     */
    diceType(data, adv) {
        //implimenting
        var dice
        var resultNum
        var resultSpan
        var diceInfo
        diceInfo = data.split("d")

        if (diceInfo.length == 1) { //not a dice roll
            dice = { "result": data, "min": 1, "max": data, "num": 1 }
            if (data.search([0 - 9]) == 0) { //is an numeric 
                resultNum = parseInt(data)
                resultSpan = diceObject.rollFormatting(diceInfo, "nd")
            }
            else { //is an operator 
                resultNum = data
                resultSpan = diceObject.rollFormatting
                    (diceInfo, "nd")
            }
        }
        else {
            var num = diceInfo[0]
            var size = diceInfo[1]
            if (diceInfo[1] != "20") {
                adv = 1
            }
            switch (adv) {

                case "0":
                    dice = new diceObject(2, size).diceRoll()
                    resultNum = Math.min(dice[0].result, dice[1].result)
                    //formatting

                    resultSpan = diceObject.rollFormatting
                        (dice, "adv", resultNum)
                    break;
                case "2":
                    dice = new diceObject(2, size).diceRoll()
                    resultNum = Math.max(dice[0].result, dice[1].result)
                    // stNum = dice.indexOf(resultNum)
                    resultSpan = diceObject.rollFormatting
                        (dice, "adv", resultNum)
                    break;


                default:
                    dice = new diceObject(num, size).diceRoll()


                    if (num > 1) {

                        resultSpan = diceObject.rollFormatting
                            (dice, "m");
                        resultNum = 0
                        dice.forEach(element => {
                            resultNum = resultNum + element.result
                        });

                    }
                    else {
                        dice = new diceObject(num, size).diceRoll()
                        resultSpan = diceObject.rollFormatting(dice, "single");
                        resultNum = dice[0].result

                    }
                    break;
            }
            
        }

       var diceReturn = {
            "dice": dice,
            "resultNum": resultNum,
            "resultSpan": resultSpan
        }


        
        return diceReturn

    }






}


