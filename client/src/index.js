import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from './components/Home';
import Ping from './components/Ping';
import './index.css';

//Assigns URL routes
ReactDOM.render(
  <BrowserRouter>
    {/* Renders first URL match */}
    <Switch>
      <Route exact path="/api/ping" component={Ping} />
      <Route exact path="*" component={Home} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);