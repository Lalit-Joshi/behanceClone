import React, { Component } from 'react';
import 'bootstrap';

import Routes from '../../routes';

import Layout from './layout';

export default class App extends Component{
  render(){
    return(
      <Layout>
        <Routes />
      </Layout>
    )
  }
}
