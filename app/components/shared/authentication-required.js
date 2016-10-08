
import React from 'react';
import Router from 'react-router';

export default class AuthenticationRequired extends React.Component {

  constructor(props){
    super(props)
  }

  render () {
    if(this.props.user.authenticated){
      return (this.props.children)
    }
    return null
  }
}
