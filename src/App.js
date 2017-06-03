import React, { Component } from 'react';

import './App.css';
import Header from './Header'
import TableContainer from './Table/TableContainer'

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <TableContainer />
      </div>
    );
  }
}

export default App;
