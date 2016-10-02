"use strict"
import React from "react"
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import actionCreator from '../../redux/actions/action-creator'
import LoginForm from './login-form'

class Login extends React.Component {

  constructor(props){
    super(props)
    this.handleLogin = this.handleLogin.bind(this)
  }

  handleLogin(username, password){
    this.props.actions.loginRequest(username, password)
  }

  render (){
      return <div>
        <LoginForm onLogin={this.handleLogin} />
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

export default connect(mapStateToProps, mapDispatchToProps)(Login)
