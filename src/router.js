// SETUP
import React from 'react';
import { Switch, Route } from 'react-router-dom'

// IMPORT LEVELS
import Home from './levels/home'
import Level1 from './levels/level_1';


// ROUTES
export default (
    <Switch>
        <Route component={Home} exact path='/' />
        <Route component={Level1} path='/level1' />

    </Switch>
)