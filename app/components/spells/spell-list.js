"use strict"
import React from "react"
import Spell from './spell'

export default class SpellList extends React.Component {

  render (){

    let spellList = this.props.spells.map((spell)=>{
      return <Spell
                key={spell.id}
                spell={spell}
                />
    })

    return  <div>{spellList}</div>
  }
}
