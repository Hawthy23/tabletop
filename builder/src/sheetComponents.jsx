import React, { Fragment, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faA, faD } from '@fortawesome/free-solid-svg-icons'
import { faShieldHeart } from '@fortawesome/free-solid-svg-icons'
import { faDiceD20, faFistRaised, faRocket, faHammer, faCartFlatbedSuitcase, faUsers, faNoteSticky } from '@fortawesome/free-solid-svg-icons'
import { SheetDisplay } from './shipsheet'

import shipData from './ShipData.json'


const navBarIcons = [<FontAwesomeIcon icon={faDiceD20} />,
<FontAwesomeIcon icon={faFistRaised} />,
<FontAwesomeIcon icon={faRocket} />,
<FontAwesomeIcon icon={faHammer} />,
<FontAwesomeIcon icon={faCartFlatbedSuitcase} />,
<FontAwesomeIcon icon={faUsers} />,
<FontAwesomeIcon icon={faNoteSticky} />,
]
const advIcons = [<FontAwesomeIcon icon={faD} />, <FontAwesomeIcon />, <FontAwesomeIcon icon={faA} />]

const hullIcon = <FontAwesomeIcon icon={faRocket} />


function Icon(props) {
  return <FontAwesomeIcon icon={props.icon} className="left" fixedWidth />;
}


export class TopDisplay extends React.Component {
  render() {
    return (<Fragment>
      <div className="fi">
        <h2 id="shipName">no engraving please</h2>
        size <span id="shipSize">Tiny</span>, Tier <span id="tierNumber">0</span>
        <br />
        tier 0: <span id="tier0Roll">role</span>
      </div>
      <div className="fi">
        <div id="pointsManagement" onClick = {function() {SheetDisplay.showPopup("dmgDisplay")} }>
          <div className="shieldPoints left">
          <div style={{paddingTop: "3px"}} ><Icon icon={faShieldHeart} /> <span className="circleTitle mobile">Shield</span> </div>

            <div className="number mobile">
              <span className="current">{shipData.shieldStats.current}</span><span className="overflow" style={{display: "inline"}}>
              {shipData.shieldStats.temp > 0 ? "(+" +shipData.shieldStats.temp +")" : ''}
                </span>
              <hr />
              <span className="max">{shipData.hullStats.max*shipData.shieldStats.capacity}</span>
            </div>
            <svg className="shieldPoints mobile">
              <circle cx="50" cy="50" r="40" className="grey base mobile"></circle>
              <circle cx="50" cy="50" r="40" className="red filled mobile"></circle>
              <circle cx="50" cy="50" r="40" className="green overflow mobile"></circle>
            </svg>

          </div>
          <div className="hullPoints left">
          <div style={{paddingTop: "3px"}} ><Icon icon={faRocket} />
              <span className="circleTitle mobile">Hull</span> </div>
            <div className="number mobile">
            <span className="current">{shipData.hullStats.current}</span><span className="overflow" style={{display: "inline"}}>
              {shipData.hullStats.temp > 0 ? "(+" +shipData.hullStats.temp +")" : ''}
                </span>
              <hr />
              <span className="max">{shipData.hullStats.max}</span>
            </div>

            <svg className="hullPoints mobile">
              <circle cx="50" cy="50" r="40" className="grey base mobile"></circle>
              <circle cx="50" cy="50" r="40" className="red filled mobile"></circle>
              <circle cx="50" cy="50" r="40" className="green overflow mobile"></circle>
            </svg>
          </div>
        </div>
        <div>
          crew proficiency <span id="crewProf">+0</span>
        </div>
      </div>
      </Fragment>
    )

  }
}

export class DmgPop extends React.Component {
  render() {
    return (<Fragment>
      <div className="stationary-fi">
        <div className="" style={{ width: "100px" }}>
          <div style={{paddingTop: '3px', overflow: "hidden"}}><Icon icon={faShieldHeart} /> <span
            className="circleTitle">Shield</span> </div>
          <div className="shieldPoints svg">
            <div className="number">
            <span className="current">{shipData.shieldStats.current}</span><span className="overflow" style={{display: "inline"}}>
              {shipData.shieldStats.temp > 0 ? "(+" +shipData.shieldStats.temp +")" : ''}
                </span>
              <hr />
              <span className="max">{shipData.hullStats.max*shipData.shieldStats.capacity}</span>
            </div>
            <svg className="shieldPoints">
              <circle cx="50" cy="50" r="40" className="grey base"></circle>
              <circle cx="50" cy="50" r="40" className="red filled"></circle>
              <circle cx="50" cy="50" r="40" className="green overflow"></circle>
            </svg>
          </div>
        </div>
      </div>
      <div className="dmg fi" style={{alignSelf: "center"}}>
        <button className="shield regen" onClick={function() {SheetDisplay.shieldRegen()}}>shield Regenerate </button><br />
        <button className="shield repair" onClick={ function() {SheetDisplay.repair("hull")} }>repair shield</button>
        <button className="hull repair" onClick={ function() {SheetDisplay.repair("hull") }}>repair hull</button><br />
        <input type="number" id="damageShipHP" min="0" /><br />
        <button className="shield damage" onClick={ function() {SheetDisplay.damage() }}>damage</button>
        <button className="hull damage" onClick={ function() {SheetDisplay.damageHull() }}>damage (hull)</button>
      </div>

      <div className="stationary-fi">
      <div className="" style={{ width: "100px" }}>
      <div style={{paddingTop: '3px', overflow: "hidden"}}><Icon icon={faRocket} /><span
            className="circleTitle">Hull</span> </div>
          <div className="hullPoints svg">
            <div className="number">
            <span className="current">{shipData.hullStats.current}</span><span className="overflow" style={{display: "inline"}}>
              {shipData.hullStats.temp > 0 ? "(+" +shipData.hullStats.temp +")" : ''}
                </span>
              <hr />
              <span className="max">{shipData.hullStats.max}</span>
            </div>
            <svg className="hullPoints">
              <circle cx="50" cy="50" r="40" className="grey base"></circle>
              <circle cx="50" cy="50" r="40" className="red filled"></circle>
              <circle cx="50" cy="50" r="40" className="green overflow"></circle>
            </svg>
          </div>
        </div>
      </div>
    </Fragment>)

  }
}



