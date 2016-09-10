"use strict"
import React from "react"

export default class InstantSearch extends React.Component {
  constructor(props) {
    super(props)
    this.handleSearchOnKeyUp = this.handleSearchOnKeyUp.bind(this)
    this.searchTimer = null
  }

  handleSearchOnKeyUp(event){
    let selectedValue = event.target.value.trim()

  }

  render (){
      return <div>
      <input type="checkbox" id="conjurations" name="conjurations" />
      <label for="conjurations"><span>Conjurations</span></label>
      <input type="checkbox" id="attacks" name="attacks" />
      <label for="attacks"><span>Attack spells</span></label>
      <input type="checkbox" id="incantations" name="incantations" />
      <label for="incantations"><span>Incantations</span></label>
      <input type="checkbox" id="enchantments" name="enchantments" />
      <label for="enchantments"><span>Enchantments</span></label>
      <input type="checkbox" id="creatures" name="creatures" />
      <label for="creatures"><span>Creatures</span></label>
      </div>
  }
}
