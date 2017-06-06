import React, { Component } from 'react';

import Alert from 'react-s-alert';
import 'react-s-alert/dist/s-alert-default.css';
import 'react-s-alert/dist/s-alert-css-effects/slide.css';

import './App.css';
import Header from './Header'
import TableContainer from './Table/TableContainer'

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <TableContainer />
        <Alert stack={{limit: 3}} />
      </div>
    );
  }
}

export default App;
