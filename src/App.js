import React, { Component } from 'react';
import Header from './Header';
import Columns from './Columns';

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Columns/>
      </div>
      
    );
  }
}

export default App;