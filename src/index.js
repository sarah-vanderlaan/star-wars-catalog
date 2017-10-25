import 'babel-polyfill'; 
import React from 'react';
import { render } from 'react-dom';
import App from './components/App';

require('./styles/main.scss');
require('../node_modules/flexboxgrid/css/flexboxgrid.css');

render(
  <App/>,
  document.getElementById('app')
);
