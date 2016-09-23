"use strict"
import React from "react"
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import SpellbookList from "./spellbook-list"
import Filter from "./filter"
import actionCreator from '../../redux/actions/action-creator'

class Spellbooks extends React.Component {

  constructor(props){
    super(props)
    this.handleSpellbookSearch = this.handleSpellbookSearch.bind(this)
    this.handleCreateNewSpellbook = this.handleCreateNewSpellbook.bind(this)
  }

  componentDidMount() {
    console.log(this.props.spellbooks)
    this.props.actions.fetchSpellbooksRequest(this.props.spellbooks.filter)
  }

  handleSpellbookSearch(filter = {}) {
    this.props.actions.fetchSpellbooksRequest(filter)
  }

  handleCreateNewSpellbook() {
    this.props.actions.createNewSpellbookRequest()
  }

  render (){
    return <div>
      <p>Spellbooks</p>
      <Filter filter={this.props.spellbooks.filter} onSearch={this.handleSpellbookSearch}/>
      <SpellbookList spellbooks={this.props.spellbooks.result} onCreateNewSpellbook={this.handleCreateNewSpellbook} />
    </div>
  }
}

function mapStateToProps(state) {
  console.log(state.toJS())
  return state.toJS()
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actionCreator(), dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Spellbooks)
