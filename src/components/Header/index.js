import React, { Component } from 'react';
import { Link } from 'react-router-dom'

export default class Header extends Component{
  render(){
    return(
      <div>
        <p>Header</p>
        <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/about'>About</Link></li>
      </ul>
      </div>
    )
  }
}
