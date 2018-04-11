import React, { Component } from 'react';

import './About.scss';

export default class About extends Component{
  render(){
    return(
      <div className="about">
        <h1>About</h1>
        <img src={require('../../assets/img/img1.jpg')} alt="" width="200" />
        <img src={require('../../assets/svg/user.svg')} alt="" width="200" />
      </div>
    )
  }
}
