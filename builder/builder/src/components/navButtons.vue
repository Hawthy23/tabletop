<script setup>
var flexClass = "flex-item"
var active = "active"
const props = defineProps({
    icon: String,
    id: String,
    title: String,
    class: String
});

var title = props.title
function getTitle() {
    return props.title
}
function getID() {
    return props.id
}
function getIcon() {
    return props.icon
}

function getClass() {
    if (props.class == active) {
        return flexClass + " " + active
    }
    else {
        return flexClass
    }
}

function activeCheck(event) {
    //get the element that is the list object
    var element = ListOptGet(event)
    
    var classList = element.classList

    var navbar = element.parentNode
    var children = navbar.childNodes

    //does current click contain active? if not 
    if (!classList.contains(active)) {

        //remove active from where it is. 
        //go to parent of element, then find child of it with active and remove
        for (let index = 0; index < children.length; index++) {
            const child = children[index];
            if (child.classList.contains(active)) {
                child.classList.remove(active)
            }
        }

        //add active to the list. 
        element.classList.add(active)
    }

    var pos = 0
    //get position of new "active" child
    for (let index = 0; index < children.length; index++) {
        const child = children[index];
        if (child.classList.contains(active)) {
            pos = index
        }
    }

    return [element,pos]
}


function ListOptGet(event) {
    //ship.showPopup("info")
    // `event` is the native DOM event
    if (event) {

        var element = event.target
     



        //travel up to a parent where the defined flexClass is in the classlist. 
        while (!(element.classList.contains(flexClass))) {
            var temp = element.parentNode
            element = temp
        }

        return element


    }

}

function changeDisp(event) {
//returns the element and index of the active button. [element,pos]
var result = activeCheck(event)
var element = result[0]
var index = result[1]
var dispList = ["stats","combat","info","mods","storage","crew","extras"]

//get the sheet display from element. 

var temp = element.parentNode.parentNode
var disp =  temp.childNodes[1].childNodes
//remove "show" from each, but if the index = index, add show instead. 
for (let i = 0; i < disp.length; i++) {
    const element = disp[i];
    if (i == index) {
        element.classList.add("show")
    }
    else {
        element.classList.remove("show")
    }
}


}

</script>

<template>
    <span :class=getClass() :title=getTitle() @click="changeDisp">
        <span class="bttn" :id=getID()>
            <font-awesome-icon :icon=getIcon() fixed-width />
        </span>
    </span>
</template>



<style>
/*navigation bar for the individual content blocks.*/
.bttn {
    font-size: 1.5em;
    display: inline-block;
    padding: 4px;
    text-align: center;

}

.flex-item {
    flex: 1;
    text-align: center;
}

.flex-item:hover {
    background-color: lightgray;
}

.active {
    color: brown;
    border-bottom: 2px solid brown;
}
</style>

