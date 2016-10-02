"use strict"
import React from "react"
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import SpellbookList from "./spellbook-list"
import Filter from "./filter"
import actionCreator from '../../redux/actions/action-creator'
import AuthenticationRequired from '../shared/authentication-required'

class Spellbooks extends React.Component {

  constructor(props){
    super(props)
    this.handleSpellbookSearch = this.handleSpellbookSearch.bind(this)
    this.handleCreateNewSpellbook = this.handleCreateNewSpellbook.bind(this)
  }

  componentWillMount(){

    console.log("Spellbooks index will mount", this.props)
  }

  componentDidMount() {
    this.props.actions.fetchSpellbooksRequest(this.props.spellbooks.filter)
  }

  handleSpellbookSearch(filter = {}) {
    this.props.actions.fetchSpellbooksRequest(filter)
  }

  handleCreateNewSpellbook() {
    this.props.actions.createNewSpellbookRequest()
  }

  render (){
    return <AuthenticationRequired user={this.props.user} history={this.props.history}>
      <div>
      <Filter filter={this.props.spellbooks.filter} onSearch={this.handleSpellbookSearch}/>
      <SpellbookList spellbooks={this.props.spellbooks.result} onCreateNewSpellbook={this.handleCreateNewSpellbook} />
    </div>
    </AuthenticationRequired>
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
