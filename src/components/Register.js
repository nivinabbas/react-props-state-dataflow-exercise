import React, { Component } from 'react';

class Register extends Component {
  render() {
    return (<div id="register">
        {this.props.reservations.day}  @ {this.props.reservations.time} {' '}
        
    </div>)
  }
}

export default Register