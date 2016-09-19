"use strict"
import React from "react"

export default class Spell extends React.Component {

        render (){
          let spell = this.props.spell
          let schools = spell.schools.map((school) => {
            return <span>{" "+school.operator+" "}{school.name} ({school.level})</span>
          })
          return <div>
            <div>
              <span>{spell.name} - </span>
              <span>{spell.type} - </span>
              <span>{spell.subTypes.join(', ')}</span>
            </div>
            <div>
              <span>Schools: </span>
              {schools}
            </div>
            <div>
              <span>Mana cost: {spell.manaCost}</span><br/>
              <span>Action type: {spell.actionType}</span><br/>
              <span>Range: {spell.range[0]} - {spell.range[1]}</span><br/>
              <span>Target: {spell.target}</span><br/>
            </div>
          </div>
        }
}
