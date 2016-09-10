"use strict"
import React from "react"
import InstantSearch from "../shared/instant-search"

export default class Filter extends React.Component {

  constructor(props){
    super(props)
    this.handleSearchInput = this.handleSearchInput.bind(this)
  }

  handleSearchInput (searchText){
    let filter = this.props.filter
    filter.searchText = searchText
    this.props.onSearch(filter)
  }

  render (){
      return <div>
      <InstantSearch
        onSearch={this.handleSearchInput}
        placeholder={"Search spells"}
        />
      </div>

  }
}
