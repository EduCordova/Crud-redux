import React, { Component } from 'react';
import {Panel} from 'react-bootstrap'
import './App.css';
import Caudales from './Pages/caudales'

class App extends Component {
  render() {
    return (
  <Panel>
    <Caudales/>
  </Panel>
    );
  }
}

export default App;
