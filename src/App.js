import React, { Component } from 'react';
import logo from './logo.svg';
import Navigation from './components/navigation';
import Mainpage from './components/pageComponent';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <Navigation/>
        </header>
        <Mainpage/>
      </div>
    );
  }
}

export default App;
