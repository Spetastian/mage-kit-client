"use strict"
import React from "react"
import SpellbookThumbnail from './spellbook-thumbnail'

export default class SpellbookList extends React.Component {

  constructor(props){
    super(props)
    this.handleCreateNewSpellbook = this.handleCreateNewSpellbook.bind(this)
  }

  handleCreateNewSpellbook (event){
    event.preventDefault()
    this.props.onCreateNewSpellbook()
  }

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

    return <div className="row">
      <div className="spellbook-container col-3">
        <a onClick={this.handleCreateNewSpellbook} href="#">Create new</a>
      </div>
      {spellbookList}
    </div>
  }
}
