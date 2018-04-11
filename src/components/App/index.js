import React, { Component } from 'react';

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
