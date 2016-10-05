"use strict"
import React from "react"

export default class LoginForm extends React.Component {
  constructor(props) {
    super(props)
    this.handleLoginButtonClick = this.handleLoginButtonClick.bind(this)
    this.emailNode = null
    this.passwordNode = null
  }

  handleLoginButtonClick(event){
    this.props.onLogin(this.emailNode.value, this.passwordNode.value)
    this.emailNode.value = ""
    this.passwordNode.value = ""
  }

  render (){
      return <div><input
        type="text"
        placeholder="Email"
        ref={node => {this.emailNode = node}}
        />
        <input
          type="password"
          placeholder="password"
          ref={node => {this.passwordNode = node}}
          />
      <button type="button" onClick={this.handleLoginButtonClick}>Login</button>
      </div>
  }
}
