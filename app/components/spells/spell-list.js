"use strict"
import React from "react"
import Spell from './spell'

export default class SpellList extends React.Component {

  render (){

    const spellList = this.props.spells.map((spell)=>{
      return <div className="spell-container col-3">
              <Spell
                key={spell.id}
                spell={spell}
                />
              </div>
    })

    return  <div className="row">{spellList}</div>
  }
}
