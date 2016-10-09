"use strict"
import React from "react"
import { Link } from 'react-router'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import actionCreator from '../../redux/actions/action-creator'

class TopHeader extends React.Component {
  constructor(props) {
    super(props)
    this.handleLogin = this.handleLogin.bind(this)
  }

  handleLogin(username, password){
    this.props.actions.loginRequest(username, password)
  }

  render (){

    let loginLogoutButton;
    if(this.props.user.authenticated)
      loginLogoutButton = <a href="#" onClick={this.props.actions.logout}>Logout</a>
    else
      loginLogoutButton = <Link to="/login">Login</Link>

      return <header className="top-header">
            <nav>
                <ul className="tabs main-menu-holder">
                  <li><Link to="/codex">Codex</Link></li>
                  <li><Link to="/spells">Spells</Link></li>
                  <li><Link to="/spellbooks">Spellbooks</Link></li>
                </ul>
                <ul className="tabs main-user-actions">
                  <li>{loginLogoutButton}</li>
                </ul>
            </nav>
            </header>
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

export default connect(mapStateToProps, mapDispatchToProps)(TopHeader)
