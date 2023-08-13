import React, { Component } from 'react';
import './App.css';
import Sidebar from './Sidebar';
import SearchComponent from './SearchComponent';
import IndexComponent from './IndexComponent';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SearchComponent />
        <Sidebar />
        
      </div>
    );
  }
}

export default App;
