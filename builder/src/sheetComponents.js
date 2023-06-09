
  <div class="popup">
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
    <div class="dmg fi" style="align-self: center">
      <button class="shield Regen" onclick="shieldRegen()">shield Regenerate </button><br />
      <button class="shield Repair" onclick="repair('shield')">repair shield</button>
      <button class="hull Repair" onclick="repair('hull')">repair hull</button><br />
      <input type="number" id="damageShipHP" min="0" /><br />
      <button class="damage" onclick="damage()">damage</button>
      <button class="hull Damage" onclick="damageHull()">damage (hull)</button>
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
  