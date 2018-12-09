import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { createHashHistory } from 'history'; // static app
import { Router } from 'react-router-dom';

import './style.css'

import Screens from './screens'
window.onload = () => {
  render(
    <Router history={createHashHistory()}>
      <Screens />
    </Router>, document.getElementById('app')
  );
};
