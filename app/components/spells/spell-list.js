"use strict"
import React from "react"
import Spell from './spell'

export default class SpellList extends React.Component {

  render (){

    const spellList = this.props.spells.map((spell)=>{
<<<<<<< HEAD
      return <div className="thumbnail-container col-3">
=======
      return <div className="spell-container col-3">
>>>>>>> master
              <Spell
                key={spell.id}
                spell={spell}
                />
              </div>
    })

    return  <div className="row">{spellList}</div>
  }
}
