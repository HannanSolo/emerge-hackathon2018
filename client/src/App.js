import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Login } from './components/Login.js';
import { Form } from './components/Form.js';
import Ping from './components/Ping.js';

export class App extends React.Component{
    render(){
        return(
            <BrowserRouter>
                {/* Renders first URL match */}
                <Switch>
                <Route exact path="/api/ping" component={Ping} />
                <Route exact path="/form" component={Form} />
                <Route exact path="*" component={Login} />
                </Switch>
            </BrowserRouter>
        )
    }
}