import React, { Component } from 'react';
import './reset.css';
import './App.css';
import Home from './components/Home';


class App extends Component {
  render() {
    return (
      <div className="main-page">

        <Home/>

      </div>
    );
  }
}

export default App;
