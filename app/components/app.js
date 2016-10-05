"use strict"
import React from "react"
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import actionCreator from '../redux/actions/action-creator'
import TopHeader from './common/top-header'

class App extends React.Component {

  componentWillMount() {
    this.props.actions.checkAuthentication()
  }

  render() {
    return <div className="root-container">
      <TopHeader />
      <main>
      {this.props.children}
      </main>
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

export default connect(mapStateToProps, mapDispatchToProps)(App)
