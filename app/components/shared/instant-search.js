"use strict"
import React from "react"

export default class InstantSearch extends React.Component {
  constructor(props) {
    super(props)
    this.handleSearchOnKeyUp = this.handleSearchOnKeyUp.bind(this)
    this.searchTimer = null
  }

  handleSearchOnKeyUp(event){
    let searchText = event.target.value.trim();

    if(this.searchTimer != null)
      clearTimeout(this.searchTimer)

      this.searchTimer = setTimeout(
        () => {
          this.props.onSearch(searchText)
        }, 200)
  }

  render (){
      return <input
        type="text"
        placeholder={this.props.placeholder || "Search here"}
        onKeyUp={this.handleSearchOnKeyUp}
        autoFocus={true}
        />
  }
}
