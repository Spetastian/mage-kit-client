"use strict"
import React from "react"
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import SpellbookList from "./spellbook-list"
import actionCreator from '../../redux/actions/action-creator'

class Spellbooks extends React.Component {

  constructor(props){
    super(props)
    this.handleSpellbookSearch = this.handleSpellbookSearch.bind(this)
  }

  componentDidMount() {
    this.props.actions.fetchSpellbooksRequest(this.props.spellbooks.filter)
  }

  handleSpellbookSearch(filter = {}) {
    this.props.actions.fetchSpellbooksRequest(filter)
  }

  render (){
    return <div>
      <p>Spellbooks</p>
      <Filter filter={this.props.spellbooks.filter} onSearch={this.handleSpellbookSearch}/>
      <SpellbookList spellbooks={this.props.spellbooks.result} />
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

export default connect(mapStateToProps, mapDispatchToProps)(Spellbooks)
