
import React from 'react';
import Router from 'react-router';

export default class AuthenticationRequired extends React.Component {

  constructor(props){
    super(props)
  }

  componentWillMount () {
    if(!this.props.user.authenticated)
      this.props.history.push('/login')
  }

  render () {
    if(this.props.user.authenticated){
      return (this.props.children)
    }
    return null
  }
}
