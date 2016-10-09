"use strict"
import React from "react"
import SpellList from "./spell-list"
import Filter from "./filter"
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import actionCreator from '../../redux/actions/action-creator'

const SpellSearchResultLimit = 10

class Spells extends React.Component {

  constructor(props){
    super(props)
    this.handleSpellSearch = this.handleSpellSearch.bind(this)
  }

  componentDidMount() {
    this.props.actions.fetchSpellsRequest(this.props.spells.filter)
  }

  handleSpellSearch(filter = {}) {
    this.props.actions.fetchSpellsRequest(filter)
  }

  render (){
    return <div>
      <Filter actions={this.props.actions} filter={this.props.spells.filter} onSearch={this.handleSpellSearch}/>
      <SpellList spells={this.props.spells.result} />
    </div>
  }
}

function mapStateToProps(state) {
  return state.toJS()
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actionCreator(), dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Spells)
