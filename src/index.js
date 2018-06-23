import React, {Component} from 'react';
import {render} from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import './index.scss';
import App from './components/App';

import {Provider} from 'react-redux';
import store from './store';


render(<Provider store={store}><BrowserRouter><App/></BrowserRouter></Provider>, document.getElementById('app'));
