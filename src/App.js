import React, { Component } from 'react';
import './reset.css';
import './App.css';
import {HashRouter} from 'react-router-dom'
import Router from './router'


class App extends Component {
  render() {
    return (
      <div>
        <HashRouter>
          {Router}
        </HashRouter>
      </div>
    );
  }
}

export default App;
