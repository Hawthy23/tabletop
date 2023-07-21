<script setup>
var flexClass = "flex-item"
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
    if (props.class == "active") {
        return flexClass + " active"
    }
    else {
        return flexClass
    }
}



function activeCheck(event) {
    //ship.showPopup("info")
    // `event` is the native DOM event
    if (event) {
        var element = event.target
     //   while (element.classList ) {
            
     //   }
        //travel up to a parent where flexClass is in the classlist. 

    }


    /* ---otherwise
    * ------remove active from where it is
    * ------add "active" to new click spot. 
    */
}

</script>

<template>
    <span :class=getClass() :title=getTitle() @click="activeCheck">
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

