"use strict"
import React from "react"
import SpellbookThumbnail from './spellbook-thumbnail'

export default class SpellbookList extends React.Component {

  render (){

    const spellbookList = this.props.spellbooks.map((spellbook)=>{
      return <div className="spellbook-container col-3">
              <SpellbookThumbnail
                key={spellbook.id}
                name={spellbook.name}
                mage={spellbook.mage}
                totalMana={spellbook.totalMana}
                />
              </div>
    })

    return  <div className="row">{spellbookList}</div>
  }
}
