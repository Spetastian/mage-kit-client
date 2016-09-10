"use strict"
import React from "react"
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import CodexList from './codex-list'
import actionCreator from '../../redux/actions/action-creator'
const CodexSearchResultLimit = 10
class Codex extends React.Component {

    constructor(props){
      super(props)
      this.handleCodexSearch = this.handleCodexSearch.bind(this)
    }

    componentDidMount() {
        this.props.actions.initCodexDataRequest({
          limit: CodexSearchResultLimit,
          searchText: ''
        })
    }

    handleCodexSearch(searchText) {
        this.props.actions.searchCodexRequest({
          limit: CodexSearchResultLimit,
          searchText: searchText
        })
    }

    render (){
        return <CodexList
          items={this.props.codex.codexList}
          onSearch={this.handleCodexSearch} />
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

export default connect(mapStateToProps, mapDispatchToProps)(Codex)
