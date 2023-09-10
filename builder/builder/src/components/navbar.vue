<script setup>
import navButtons from './navButtons.vue';
</script>
<template>
    <div class="flex-container sectionSelection full">
        <navButtons icon="dice-d20" id="skilBttn" class="active" title="Skills & Saves" />
        <navButtons icon="fist-raised" id="combatBttn" title="Combat" />
        <navButtons icon="rocket" id="shipBttn" title="Ship Information" />
        <navButtons icon="hammer" id="modsBttn" title="Mods" />
        <navButtons icon="cart-flatbed-suitcase" id="storageBttn" title="Storage" />
        <navButtons icon="users" id="crewBttn" title="Crew" />
        <navButtons icon="note-sticky" id="extraBttn" title="Extras" />
    </div>
</template>
<style>
</style>