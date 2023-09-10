 
  <script setup>
  import shipsheet from '../script/shipsheet';

  new ship = shipsheet
  //mechanical functions

</script>
  
<template>
  <div class="popup" id="dmgDisplay">
    <div class="stationary-fi">
      <div class="" style="width:100px;">
        <div style="padding-top: 3px; overflow: hidden;" ><i class="fa-solid fa-shield-heart fa-fw left"></i> <span
          class="circleTitle">Shield</span> </div>
        <div class="shieldPoints svg">
          <div class="number">
            <span class="current"></span><span class="overflow" style="display: inline;">(0)</span>
            <hr />
            <span class="max"></span>
          </div>
          <svg class="shieldPoints">
            <circle cx="50" cy="50" r="40" class="grey base"></circle>
            <circle cx="50" cy="50" r="40" class="red filled"></circle>
            <circle cx="50" cy="50" r="40" class="green overflow"></circle>
          </svg>
        </div>
      </div>
    </div>
   

    <div class="stationary-fi">
      <div class="" style="width:100px;">
        <div style="padding-top: 3px; width:100px"><i class="fa-solid fa-rocket fa-fw left"></i> <span
          class="circleTitle">Hull</span> </div>
        <div class="hullPoints svg">
          <div class="number">
            <span class="current"></span><span class="overflow" style="display: inline;">(0)</span>
            <hr />
            <span class="max"></span>
          </div>
          <svg class="hullPoints">
            <circle cx="50" cy="50" r="40" class="grey base"></circle>
            <circle cx="50" cy="50" r="40" class="red filled"></circle>
            <circle cx="50" cy="50" r="40" class="green overflow"></circle>
          </svg>
        </div>
      </div>
    </div>

  </div>
</template>  
<style>
.sectionBlock {
    display: none;
    width: 100%;
}
.show {
    display: block;
}
.flex-container {
    display: flex;
    flex-direction: row;
    width: 100%;
}
</style>
  