import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from './components/Home';
import About from './components/About';
import NotFound from './components/NotFound';

const Routes = () => (
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/about' component={About}/>
      <Route path='*' component={NotFound}/>
    </Switch>
)

export default Routes
