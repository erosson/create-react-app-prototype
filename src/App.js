import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import numberformat from 'swarm-numberformat'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <i>test swarm-numberformat: {numberformat.format(1.23456e21)}</i>
      </div>
    );
  }
}

export default App;
